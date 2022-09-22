// Initialize button with user's preferred color
let changeColor = document.getElementById("changeColor");
document.createElement
document.body.prepend(<img src="/images/sprite.gif"></img>)

chrome.storage.sync.get("color", ({ color }) => {
  changeColor.style.backgroundColor = color;
});