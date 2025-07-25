# 🧹 Clear Site Data - Firefox Extension

A lightweight and powerful Firefox browser extension to clear specific types of site data (like cookies, local storage, cache, etc.) from the **currently active tab** — all with one click.

---

## ✅ Features

- 🗃️ **Local Storage**
- 💾 **Session Storage**
- 🍪 **Cookies** (including `HttpOnly`)
- 📦 **IndexedDB**
- 🛢️ **Web SQL**
- 🔄 **Cache Storage**

---

## 🎨 UI/UX Highlights

- Clean, modern design
- Emoji-enhanced checkboxes for intuitive selection
- Animated spinner shown while clearing
- Toast message confirms successful operation
- Auto-closes popup after successful clearing
- Only selected data types are affected

---

## 🚀 Installation (Temporary for Testing)

1. Download or clone this repo  
   👉 [GitHub](https://github.com/Shasika/clear-site-data)
2. Open Firefox and visit:  
   `about:debugging#/runtime/this-firefox`
3. Click **"Load Temporary Add-on"**
4. Select the **`manifest.json`** file from the extracted folder

> ✅ Manifest V3 supported (no background service worker required)

---

## 🔧 How It Works

- Uses `chrome.scripting.executeScript()` to run cleanup logic in the context of the current tab
- Uses `chrome.cookies.*` API from the popup script to clear all accessible cookies (including `HttpOnly`)
- Designed to only affect the currently active tab’s origin

---

## 📁 Project Structure

```text
clear-site-data-extension/
│
├── icons/
│   └── icon.png         # Extension icon
├── manifest.json        # Firefox-compatible manifest (v3)
├── popup.html           # Extension popup UI
└── popup.js             # Script that handles all logic
```

---

## 🛠️ Tech Stack

- **Manifest V3**
- **Firefox WebExtensions API**
- **Vanilla JS, HTML & CSS**

---

## 📌 Notes

- Web SQL deletion is deprecated and not fully supported
- `HttpOnly` cookies are removed via `chrome.cookies.remove`
- No background script is used (all logic runs from popup)
- This extension only clears data from the active tab's origin

---

## 🧪 Test Checklist

| Data Type       | Expected Result                              |
|-----------------|-----------------------------------------------|
| Local Storage   | Cleared (DevTools > Storage > Local Storage) |
| Session Storage | Cleared (DevTools > Storage > Session Storage) |
| Cookies         | All site cookies removed                     |
| IndexedDB       | Deleted databases (DevTools > Storage)       |
| Cache Storage   | Cleared keys (DevTools > Storage)            |
| Web SQL         | Not guaranteed to clear due to deprecation   |

---

## 👤 Author

Built with ❤️ by **Shasika Semasinghe**  
Licensed under the [MIT License](LICENSE)