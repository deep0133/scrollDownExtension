// Listen for the message from the popup
chrome.runtime.onMessage.addListener(function (message, sender, sendResponse) {
  // Check if the message is to execute the scrollPage function
  if (message.action === "scrollPage") {
    scrollPage();
  }
});

// Function to scroll the page
function scrollPage() {
  window.scrollBy(0, window.innerHeight);
}
