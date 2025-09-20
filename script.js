// Simple typing effect for Hero Section
const text = "A passionate Web Developer 🚀";
let i = 0;
function typing() {
  if (i < text.length) {
    document.querySelector("#hero p").innerHTML += text.charAt(i);
    i++;
    setTimeout(typing, 100);
  }
}
document.addEventListener("DOMContentLoaded", typing);
