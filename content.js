document.addEventListener(
  "keydown",
  (e) => {
    chrome.runtime.sendMessage({ keycode: e });
  },
  true
);

document.addEventListener(
  "mousedown",
  (e) => {
    chrome.runtime.sendMessage({ keycode: e });
  },
  true
);
