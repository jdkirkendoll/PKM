# PDF Page Library

A Chrome extension that saves the current page as a real, selectable-text PDF (no print dialog) into an organized `PDF Library/<domain>/` folder under your Downloads, and keeps a searchable local index of what's been saved.

## How it works

- Uses `chrome.debugger` to attach to the active tab and call the DevTools Protocol's `Page.printToPDF`, which renders the page to PDF exactly as Chrome's own print-to-PDF does — including on sites that block scraping or bot-check `fetch`/`curl`, since this drives a real logged-in browser tab.
- **Auto-sorts into folders**: every save lands under `Downloads/PDF Library/<domain>/`, one subfolder per site, so a crawl across many domains doesn't dump everything into one flat pile.
- Saves the PDF via `chrome.downloads` as `Downloads/PDF Library/<domain>/<page title>.pdf` — no date in the filename, so re-saving the same page later updates the same slot instead of accumulating dated copies.
- Records each save (title, URL, domain, filename, timestamp) in `chrome.storage.local` so the popup can show a searchable list. Clicking an entry reveals the file in Finder/Downloads.

## Install (unpacked, for personal use)

1. Open `chrome://extensions`.
2. Turn on **Developer mode** (top right).
3. Click **Load unpacked** and select this folder.
4. Pin the extension from the puzzle-piece menu for easy access.

## Using it

- Click the toolbar icon, then **Save this page as PDF** — or right-click a page and choose **Save page to PDF library**.
- **Save multiple tabs at once**: click **Select tabs to save…** in the popup to list every open http(s) tab in the current window, check the ones you want, and click **Save N selected tabs**. Handy for quickly crawling a batch of reference pages — each tab is saved in turn with live progress shown in the popup.
- While it's exporting, Chrome will briefly show a "PDF Page Library is debugging this browser" banner in the tab — that's the `chrome.debugger` permission doing its job (required to drive `Page.printToPDF`), not an error. It disappears as soon as the export finishes (typically under a second).
- The popup's filter box searches saved titles/domains; the library only tracks what this extension has saved, not your general Downloads folder.

## Duplicate handling

Before saving, the extension checks Chrome's own download history for a file already saved under the same `<domain>/<title>.pdf` slot. A trailing `-Done` marker or an auto-added `(1)`, `(2)`, ... uniquify counter is ignored when matching, so a file you've renamed to e.g. `Costing 101-Done.pdf` to mark it as reviewed still counts as "already saved."

The **If already saved: Skip / Update** toggle in the popup controls what happens on a match:
- **Skip** (default) — leave the existing file alone and don't re-export the page.
- **Update** — re-export and overwrite the existing file in place.

This applies to both the single-page save and the tab-picker batch save.

**Limitation**: this check only sees Chrome's own download history, not a live filesystem scan — a file renamed outside Chrome (e.g. in Finder) is invisible to `chrome.downloads.search`, the only lookup API available to an extension. If you rename a file to mark it done, do it from Chrome's own Downloads page/shelf rather than in Finder if you want the extension to keep recognizing it.

## Known limits (v1 scope)

- No cross-referencing against browser history yet — this version is capture-and-organize only. A "which visited pages are missing from the library" completeness view was deliberately deferred; `chrome.history` is a broad permission and the URL-matching (redirects, query strings, retitled pages) needs its own design pass once the basic library is proven useful day to day.
- No icons are bundled (Chrome shows a generic default icon) — cosmetic only, add `icons` to `manifest.json` if you want a custom one.
- Not published to the Web Store — the `debugger` permission is restricted there. This is meant to stay a locally loaded, personal-use extension.
