document.addEventListener("DOMContentLoaded", function () {
    const rotateButton = document.getElementById("rotateButton");
    rotateButton.addEventListener("click", function () {
      // Send a message to background script to initiate canvas rotation
      chrome.runtime.sendMessage({ action: "rotateCanvas" });
    });
  });
  