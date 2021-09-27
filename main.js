const hamburger = document.querySelector(".menu-toggle");
const navMenu = document.querySelector(".mobile-nav");
const navLink = document.querySelectorAll(".nav-links");

hamburger.addEventListener("click", mobileMenu);

function mobileMenu() {
    // hamburger.classList.toggle("active");
    navMenu.classList.toggle("hidden");
}



navLink.forEach(n => n.addEventListener("click", closeMenu));

function closeMenu() {
    // hamburger.classList.remove("active");
    navMenu.classList.toggle("hidden");
}
