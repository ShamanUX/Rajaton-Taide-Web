const burgerMenu = document.querySelector(".burger-menu");
const navLinks = document.getElementById("nav-links");

burgerMenu.addEventListener("click", () => {
  
  navLinks.classList.toggle('show');
});