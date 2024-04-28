document.addEventListener("DOMContentLoaded", function () {
  const scrollButton = document.getElementById("scrollButton");
  if (scrollButton) {
    scrollButton.addEventListener("click", function () {
      chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
        chrome.tabs.sendMessage(tabs[0].id, { action: "scrollPage" });
      });
    });
  } else {
    console.error("Element with ID 'scrollButton' not found.");
  }
});
