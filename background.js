
chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  if (message.action === "clearCookies") {
    chrome.cookies.getAll({ domain: message.hostname }, (cookies) => {
      cookies.forEach((cookie) => {
        const protocol = cookie.secure ? "https:" : "http:";
        const url = `${protocol}//${cookie.domain.replace(/^\./, "")}${cookie.path}`;
        chrome.cookies.remove({
          url: url,
          name: cookie.name,
          storeId: cookie.storeId
        });
      });
    });
  }
});
