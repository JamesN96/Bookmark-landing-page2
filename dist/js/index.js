// DOM CACHE

const menuBtn = document.querySelector(".menu-btn");
const closeBtn = document.querySelector(".close-btn");
const overlay = document.querySelector(".overlay");

// Event Listener

menuBtn.addEventListener("click", openMenu);
closeBtn.addEventListener("click", openMenu);

// openMenu function

function openMenu(e) {
  if (overlay.style.display === "") {
    overlay.style.display = "block";
  } else {
    overlay.style.display = "";
  }
}
