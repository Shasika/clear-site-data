# 🧹 Clear Site Data - Chrome Extension

A lightweight and powerful Chrome extension to clear specific types of site data (like cookies, local storage, cache, etc.) from the **currently active tab** — all with one click.

## ✅ Features

- 🗃️ **Local Storage**
- 💾 **Session Storage**
- 🍪 **Cookies** (including `HttpOnly` cookies via background service worker)
- 📦 **IndexedDB**
- 🛢️ **Web SQL**
- 🔄 **Cache Storage**

## 🎨 UI/UX Highlights

- Clean, modern design
- Emoji-enhanced checkboxes for intuitive use
- Spinner loader on action
- Success toast notification after clearing
- Auto-close popup after successful operation
- Only selected data types will be cleared

## 🚀 Installation

1. [Git URL](https://github.com/Shasika/clear-site-data)
2. Go to `chrome://extensions/`
3. Enable **Developer mode**
4. Click **Load unpacked**
5. Select the extracted folder

## 🔧 How It Works

- Uses `chrome.scripting.executeScript()` to clear client-side storage directly inside the current tab
- Uses a **background service worker** to clear cookies (including `HttpOnly`)
- Designed to only affect the currently active tab's origin

## 📁 Project Structure

```text
clear-site-data-extension/
│
├── background.js        # Background worker to remove cookies
├── icons/
│   └── icon.png         # Extension icon
├── manifest.json        # Chrome extension manifest (v3)
├── popup.html           # Extension popup UI
└── popup.js             # Logic for clearing selected data
```

## 📌 Notes

- Web SQL deletion support is browser-limited (Chrome deprecated it)
- `HttpOnly` cookies are only cleared through `chrome.cookies.remove` via the background worker
- Extension does not clear data for inactive tabs or cross-origin frames

## 🛠️ Tech

- Manifest V3
- Vanilla JS, HTML & CSS
- Chrome Extension APIs (cookies, scripting, storage, runtime)

## 🧪 Test Cases

| Data Type       | Expected Result                              |
|-----------------|-----------------------------------------------|
| Local Storage   | Cleared from DevTools > Application tab      |
| Session Storage | Cleared from DevTools > Application tab      |
| Cookies         | All cookies removed including `HttpOnly`     |
| IndexedDB       | Stores deleted (DevTools > Application)      |
| Cache Storage   | All cache keys removed                       |
| Web SQL         | Console warns; cannot fully delete programmatically |

---

## 👤 Author

Built by Shasika Semasinghe

Licensed under MIT
