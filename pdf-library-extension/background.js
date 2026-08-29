const LIBRARY_KEY = "library";
const SETTINGS_KEY = "settings";
const ROOT_FOLDER = "PDF Library";

const DEFAULT_SETTINGS = { onDuplicate: "skip" }; // "skip" | "update"

function sanitize(name, maxLen) {
  const cleaned = name
    .replace(/[\\/:*?"<>|]/g, " ")
    .replace(/\s+/g, " ")
    .trim();
  return cleaned.slice(0, maxLen || 120) || "untitled";
}

function domainOf(url) {
  try {
    return new URL(url).hostname.replace(/^www\./, "");
  } catch {
    return "unknown";
  }
}

function escapeRegex(str) {
  return str.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}

// Strip Chrome's own "-Done" completion marker and any auto-uniquify
// counter ("(1)", "(2)", ...) so a page matches back to its existing
// file regardless of how it was marked reviewed or previously deduped.
function normalizeBaseName(name) {
  return name
    .replace(/-done/gi, "")
    .replace(/\s*\(\d+\)$/, "")
    .trim()
    .toLowerCase();
}

async function getSettings() {
  const data = await chrome.storage.local.get(SETTINGS_KEY);
  return { ...DEFAULT_SETTINGS, ...(data[SETTINGS_KEY] || {}) };
}

async function setSettings(patch) {
  const next = { ...(await getSettings()), ...patch };
  await chrome.storage.local.set({ [SETTINGS_KEY]: next });
  return next;
}

async function getLibrary() {
  const data = await chrome.storage.local.get(LIBRARY_KEY);
  return data[LIBRARY_KEY] || [];
}

async function setLibrary(library) {
  await chrome.storage.local.set({ [LIBRARY_KEY]: library });
  return library;
}

async function upsertLibrary(entry) {
  const library = await getLibrary();
  const idx = library.findIndex(
    (e) =>
      e.domain === entry.domain &&
      normalizeBaseName(e.baseName) === normalizeBaseName(entry.baseName)
  );
  if (idx >= 0) library[idx] = entry;
  else library.unshift(entry);
  return setLibrary(library);
}

// Closest thing to a filesystem existence check available to an extension:
// this only sees what Chrome itself has downloaded, so a file renamed in
// Finder/Explorer outside the browser (rather than through Chrome's own
// downloads UI) won't be picked up here.
async function findExistingDownload(domain, baseName) {
  const target = normalizeBaseName(baseName);
  const folderPrefix = `${ROOT_FOLDER}/${domain}/`;
  const matches = await chrome.downloads.search({
    filenameRegex: escapeRegex(folderPrefix),
    limit: 1000
  });
  for (const item of matches) {
    const file = item.filename.split("/").pop().replace(/\.pdf$/i, "");
    if (normalizeBaseName(file) === target) return item;
  }
  return null;
}

async function printTabToPdf(tabId) {
  await chrome.debugger.attach({ tabId }, "1.3");
  try {
    const result = await chrome.debugger.sendCommand(
      { tabId },
      "Page.printToPDF",
      { printBackground: true, preferCSSPageSize: true }
    );
    return result.data; // base64
  } finally {
    await chrome.debugger.detach({ tabId }).catch(() => {});
  }
}

async function savePageAsPdf(tab, overrides = {}) {
  const { id: tabId, url, title } = tab;
  if (!url || !/^https?:/.test(url)) {
    throw new Error("Only http(s) pages can be saved.");
  }

  const settings = { ...(await getSettings()), ...overrides };
  const domain = domainOf(url);
  const baseName = sanitize(title || domain);

  const existing = await findExistingDownload(domain, baseName);
  if (existing && settings.onDuplicate === "skip") {
    return {
      skipped: true,
      entry: { url, title: title || url, domain, baseName, filename: existing.filename },
      library: await getLibrary()
    };
  }

  const base64 = await printTabToPdf(tabId);
  const relativeFilename = `${ROOT_FOLDER}/${domain}/${baseName}.pdf`;
  const dataUrl = `data:application/pdf;base64,${base64}`;

  const downloadId = await chrome.downloads.download({
    url: dataUrl,
    filename: relativeFilename,
    saveAs: false,
    conflictAction: existing ? "overwrite" : "uniquify"
  });

  const entry = {
    url,
    title: title || url,
    domain,
    baseName,
    filename: relativeFilename,
    downloadId,
    savedAt: new Date().toISOString()
  };
  const library = await upsertLibrary(entry);
  return { skipped: false, entry, library };
}

chrome.contextMenus.onInstalled?.(() => {});
chrome.runtime.onInstalled.addListener(() => {
  chrome.contextMenus.create({
    id: "save-pdf-library",
    title: "Save page to PDF library",
    contexts: ["page"]
  });
});

chrome.contextMenus.onClicked.addListener((info, tab) => {
  if (info.menuItemId === "save-pdf-library" && tab) {
    savePageAsPdf(tab).catch((err) =>
      console.error("PDF Library: save failed", err)
    );
  }
});

chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  if (message.type === "SAVE_CURRENT_TAB") {
    chrome.tabs
      .query({ active: true, currentWindow: true })
      .then(([tab]) => savePageAsPdf(tab))
      .then((result) => sendResponse({ ok: true, ...result }))
      .catch((err) => sendResponse({ ok: false, error: err.message }));
    return true; // async response
  }
  if (message.type === "GET_LIBRARY") {
    getLibrary().then((library) => sendResponse({ ok: true, library }));
    return true;
  }
  if (message.type === "OPEN_DOWNLOAD") {
    chrome.downloads.show(message.downloadId);
  }
  if (message.type === "CLEAR_LIBRARY") {
    setLibrary([]).then(() => sendResponse({ ok: true }));
    return true;
  }
  if (message.type === "GET_SETTINGS") {
    getSettings().then((settings) => sendResponse({ ok: true, settings }));
    return true;
  }
  if (message.type === "SET_SETTINGS") {
    setSettings(message.patch).then((settings) => sendResponse({ ok: true, settings }));
    return true;
  }
  if (message.type === "GET_OPEN_TABS") {
    chrome.tabs
      .query({ currentWindow: true })
      .then((tabs) => {
        const pages = tabs
          .filter((t) => /^https?:/.test(t.url || ""))
          .map((t) => ({ id: t.id, title: t.title, url: t.url }));
        sendResponse({ ok: true, tabs: pages });
      })
      .catch((err) => sendResponse({ ok: false, error: err.message }));
    return true;
  }
});

// Batch-saving many tabs streams progress back over a long-lived port so
// the popup can show live status instead of blocking on one big response.
chrome.runtime.onConnect.addListener((port) => {
  if (port.name !== "save-tabs") return;
  port.onMessage.addListener(async (message) => {
    if (message.type !== "SAVE_TABS") return;
    const { tabIds, onDuplicate } = message;
    for (const tabId of tabIds) {
      try {
        const tab = await chrome.tabs.get(tabId);
        const result = await savePageAsPdf(tab, { onDuplicate });
        port.postMessage({
          type: "TAB_RESULT",
          tabId,
          ok: true,
          skipped: result.skipped,
          filename: result.entry.filename
        });
      } catch (err) {
        port.postMessage({ type: "TAB_RESULT", tabId, ok: false, error: err.message });
      }
    }
    port.postMessage({ type: "SAVE_TABS_DONE", library: await getLibrary() });
  });
});
