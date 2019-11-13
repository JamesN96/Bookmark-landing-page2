// DOM CACHE

const menuBtn = document.querySelector(".menu-btn");
const closeBtn = document.querySelector(".close-btn");
const overlay = document.querySelector(".overlay");
const tab1 = document.getElementById("tab1");
const tab2 = document.getElementById("tab2");
const tab3 = document.getElementById("tab3");
const div1 = document.getElementById("tab-1");
const div2 = document.getElementById("tab-2");
const div3 = document.getElementById("tab-3");
const a1 = document.getElementById("a1");
const a2 = document.getElementById("a2");
const a3 = document.getElementById("a3");
const arrows = document.querySelectorAll(".arrow");

// Event Listener

menuBtn.addEventListener("click", openMenu);
closeBtn.addEventListener("click", openMenu);
tab1.addEventListener("click", displayTab);
tab2.addEventListener("click", displayTab);
tab3.addEventListener("click", displayTab);
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

// Display function

function displayTab(e) {
  if (e.target === tab1) {
    div1.style.visibility = "visible";
    div2.style.display = "none";
    div3.style.display = "none";
    a1.classList.add("active");
    a2.className = "";
    a3.className = "";
  } else if (e.target === tab2) {
    div1.style.visibility = "hidden";
    div3.style.display = "none";
    div2.style.display = "block";
    a2.classList.add("active");
    a1.className = "";
    a3.className = "";
  } else if (e.target === tab3) {
    div1.style.visibility = "hidden";
    div2.style.display = "none";
    div3.style.display = "block";
    a3.classList.add("active");
    a2.className = "";
    a1.className = "";
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
