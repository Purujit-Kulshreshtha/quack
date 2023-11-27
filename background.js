chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
  current_mp3 = document.getElementById("audio");
  current_mp3.play();
  current_mp3.currentTime = 0;
});
