// DOM CACHE

const menuBtn = document.querySelector(".menu-btn");
const closeBtn = document.querySelector(".close-btn");
const overlay = document.querySelector(".overlay");
const a1 = document.getElementById("a1");
const a2 = document.getElementById("a2");
const a3 = document.getElementById("a3");
const img = document.querySelector(".tab1-img");
const h2 = document.querySelector(".tab1-h2");
const p = document.querySelector(".tab1-p");

const arrows = document.querySelectorAll(".arrow");

// Event Listener

menuBtn.addEventListener("click", openMenu);
closeBtn.addEventListener("click", openMenu);
a1.addEventListener("click", displayTab);
a2.addEventListener("click", displayTab);
a3.addEventListener("click", displayTab);
arrows.forEach(function(arrow) {
  arrow.addEventListener("click", showDiv);
});

// openMenu function

function openMenu(e) {
  if (overlay.style.display === "") {
    overlay.style.display = "block";
  } else {
    overlay.style.display = "";
  }
}

function displayTab(e) {
  if (e.target === a1) {
    img.src = " dist/img/illustration-features-tab-1.svg";
    h2.textContent = "Bookmark in one click";
    p.textContent =
      " Organize your bookmarks however you like. Our simple drag-and-drop interface gives you complete control over how you manage your favourite sites.";
    active(e);
  } else if (e.target === a2) {
    img.src = "dist/img/illustration-features-tab-2.svg";
    h2.textContent = "Intelligent Search";
    p.textContent =
      " Our powerful search feature will help you find saved sites in no time at all. No need to trawl through all of your bookmarks.";
    active(e);
  } else {
    img.src = "dist/img/illustration-features-tab-3.svg";
    h2.textContent = "Share your bookmarks";
    p.textContent =
      "Easily share your bookmarks and collections with others. Create a shareable link that you can send at the click of a button.";
    active(e);
  }
}

// active class function

function active(e) {
  if (e.target === a1) {
    a1.parentElement.classList.add("active");
    a2.parentElement.className = "";
    a3.parentElement.className = "";
  } else if (e.target === a2) {
    a2.parentElement.classList.add("active");
    a1.parentElement.className = "";
    a3.parentElement.className = "";
  } else {
    a3.parentElement.classList.add("active");
    a1.parentElement.className = "";
    a2.parentElement.className = "";
  }
}

//  showDiv function

function showDiv(e) {
  if (e.target.parentNode.nextElementSibling.style.display === "") {
    e.target.parentNode.nextElementSibling.style.display = "block";
  } else {
    e.target.parentNode.nextElementSibling.style.display = "";
  }
}
