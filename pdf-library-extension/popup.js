const saveBtn = document.getElementById("save");
const statusEl = document.getElementById("status");
const listEl = document.getElementById("list");
const filterEl = document.getElementById("filter");
const clearBtn = document.getElementById("clear");

const tabsToggleBtn = document.getElementById("save-tabs-toggle");
const tabsPanel = document.getElementById("tabs-panel");
const tabsListEl = document.getElementById("tabs-list");
const tabsCountEl = document.getElementById("tabs-count");
const selectAllLink = document.getElementById("select-all");
const selectNoneLink = document.getElementById("select-none");
const saveSelectedBtn = document.getElementById("save-selected-tabs");
const tabsProgressEl = document.getElementById("tabs-progress");

const duplicateToggle = document.getElementById("duplicate-toggle");

let library = [];
let openTabs = [];
let selectedTabIds = new Set();
let settings = { onDuplicate: "skip" };

function render() {
  const term = filterEl.value.trim().toLowerCase();
  const items = term
    ? library.filter(
        (e) =>
          e.title.toLowerCase().includes(term) ||
          e.domain.toLowerCase().includes(term)
      )
    : library;

  listEl.innerHTML = "";
  if (items.length === 0) {
    const li = document.createElement("li");
    li.className = "empty";
    li.textContent = library.length === 0 ? "No pages saved yet." : "No matches.";
    listEl.appendChild(li);
    return;
  }

  for (const entry of items) {
    const li = document.createElement("li");
    const date = new Date(entry.savedAt).toLocaleDateString();
    li.innerHTML = `<div class="title">${entry.title}</div><div class="meta">${entry.domain} · ${date}</div>`;
    li.addEventListener("click", () => {
      chrome.runtime.sendMessage({ type: "OPEN_DOWNLOAD", downloadId: entry.downloadId });
    });
    listEl.appendChild(li);
  }
}

function loadLibrary() {
  chrome.runtime.sendMessage({ type: "GET_LIBRARY" }, (response) => {
    library = (response && response.library) || [];
    render();
  });
}

function renderDuplicateToggle() {
  for (const btn of duplicateToggle.querySelectorAll("button")) {
    btn.classList.toggle("active", btn.dataset.value === settings.onDuplicate);
  }
}

function loadSettings() {
  chrome.runtime.sendMessage({ type: "GET_SETTINGS" }, (response) => {
    settings = (response && response.settings) || settings;
    renderDuplicateToggle();
  });
}

duplicateToggle.addEventListener("click", (e) => {
  const btn = e.target.closest("button");
  if (!btn) return;
  chrome.runtime.sendMessage(
    { type: "SET_SETTINGS", patch: { onDuplicate: btn.dataset.value } },
    (response) => {
      settings = (response && response.settings) || settings;
      renderDuplicateToggle();
    }
  );
});

saveBtn.addEventListener("click", () => {
  saveBtn.disabled = true;
  statusEl.textContent = "Saving...";
  chrome.runtime.sendMessage({ type: "SAVE_CURRENT_TAB" }, (response) => {
    saveBtn.disabled = false;
    if (response && response.ok) {
      statusEl.textContent = response.skipped
        ? `Already saved: ${response.entry.filename}`
        : `Saved: ${response.entry.filename}`;
      library = response.library || library;
      render();
    } else {
      statusEl.textContent = `Failed: ${(response && response.error) || "unknown error"}`;
    }
  });
});

filterEl.addEventListener("input", render);

clearBtn.addEventListener("click", () => {
  if (!confirm("Clear the saved-pages index? This does not delete the PDF files.")) return;
  chrome.runtime.sendMessage({ type: "CLEAR_LIBRARY" }, () => {
    library = [];
    render();
  });
});

// --- Tab picker ---

function renderTabsList() {
  tabsListEl.innerHTML = "";
  for (const tab of openTabs) {
    const li = document.createElement("li");
    const label = document.createElement("label");
    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.checked = selectedTabIds.has(tab.id);
    checkbox.addEventListener("change", () => {
      if (checkbox.checked) selectedTabIds.add(tab.id);
      else selectedTabIds.delete(tab.id);
      updateSaveSelectedState();
    });
    const text = document.createElement("span");
    text.className = "tab-title";
    text.textContent = tab.title || tab.url;
    label.appendChild(checkbox);
    label.appendChild(text);
    li.appendChild(label);
    tabsListEl.appendChild(li);
  }
  tabsCountEl.textContent = `${openTabs.length} open tab${openTabs.length === 1 ? "" : "s"}`;
  updateSaveSelectedState();
}

function updateSaveSelectedState() {
  saveSelectedBtn.disabled = selectedTabIds.size === 0;
  saveSelectedBtn.textContent = selectedTabIds.size
    ? `Save ${selectedTabIds.size} selected tab${selectedTabIds.size === 1 ? "" : "s"}`
    : "Save selected tabs";
}

tabsToggleBtn.addEventListener("click", () => {
  const opening = tabsPanel.hidden;
  tabsPanel.hidden = !opening;
  if (opening) {
    tabsToggleBtn.textContent = "Hide tabs";
    chrome.runtime.sendMessage({ type: "GET_OPEN_TABS" }, (response) => {
      openTabs = (response && response.tabs) || [];
      selectedTabIds = new Set();
      renderTabsList();
    });
  } else {
    tabsToggleBtn.textContent = "Select tabs to save…";
  }
});

selectAllLink.addEventListener("click", (e) => {
  e.preventDefault();
  selectedTabIds = new Set(openTabs.map((t) => t.id));
  renderTabsList();
});

selectNoneLink.addEventListener("click", (e) => {
  e.preventDefault();
  selectedTabIds = new Set();
  renderTabsList();
});

saveSelectedBtn.addEventListener("click", () => {
  const tabIds = Array.from(selectedTabIds);
  if (tabIds.length === 0) return;

  saveSelectedBtn.disabled = true;
  let done = 0;
  tabsProgressEl.textContent = `Saving 0 / ${tabIds.length}...`;

  const port = chrome.runtime.connect({ name: "save-tabs" });
  port.onMessage.addListener((message) => {
    if (message.type === "TAB_RESULT") {
      done += 1;
      tabsProgressEl.textContent = `Saving ${done} / ${tabIds.length}...`;
      if (!message.ok) {
        console.error("PDF Library: failed to save tab", message.tabId, message.error);
      }
    } else if (message.type === "SAVE_TABS_DONE") {
      tabsProgressEl.textContent = `Done: ${done} / ${tabIds.length}.`;
      library = message.library;
      render();
      updateSaveSelectedState();
      port.disconnect();
    }
  });
  port.postMessage({ type: "SAVE_TABS", tabIds, onDuplicate: settings.onDuplicate });
});

loadLibrary();
loadSettings();
