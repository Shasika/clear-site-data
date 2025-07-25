
document.getElementById("clearForm").addEventListener("submit", async (e) => {
  e.preventDefault();
  const form = document.getElementById("clearForm");
  const button = form.querySelector("button");
  const toast = document.getElementById("toast");
  const loader = document.getElementById("loader");

  button.disabled = true;
  loader.style.display = "block";
  toast.style.display = "none";

  const [tab] = await chrome.tabs.query({ active: true, currentWindow: true });
  const url = new URL(tab.url);

  const options = {
    localStorage: e.target.localStorage.checked,
    sessionStorage: e.target.sessionStorage.checked,
    cookies: e.target.cookies.checked,
    indexedDB: e.target.indexedDB.checked,
    webSQL: e.target.webSQL.checked,
    cache: e.target.cache.checked,
    hostname: url.hostname
  };

  await chrome.scripting.executeScript({
    target: { tabId: tab.id },
    func: (opts) => {
      if (opts.localStorage) localStorage.clear();
      if (opts.sessionStorage) sessionStorage.clear();

      if (opts.cookies) {
        const cookies = document.cookie.split("; ");
        for (let cookie of cookies) {
          const eqPos = cookie.indexOf("=");
          const name = eqPos > -1 ? cookie.substring(0, eqPos) : cookie;
          document.cookie = name + "=; expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/";
          document.cookie = name + "=; expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/; domain=" + location.hostname;
        }
      }

      if (opts.indexedDB && indexedDB.databases) {
        indexedDB.databases().then(dbs =>
          dbs.forEach(db => indexedDB.deleteDatabase(db.name))
        );
      }

      if (opts.cache && 'caches' in window) {
        caches.keys().then(keys => keys.forEach(key => caches.delete(key)));
      }

      if (opts.webSQL && window.openDatabase) {
        console.warn("Web SQL deletion not fully supported.");
      }
    },
    args: [options]
  });

  if (options.cookies) {
    chrome.runtime.sendMessage({ action: "clearCookies", hostname: options.hostname });
  }

  setTimeout(() => {
    loader.style.display = "none";
    toast.style.display = "block";
  }, 500);

  setTimeout(() => {
    window.close();
  }, 2000);
});
