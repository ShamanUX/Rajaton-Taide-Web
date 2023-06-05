const burgerMenu = document.querySelector(".burger-menu");
const navLinks = document.getElementById("nav-links");

burgerMenu.addEventListener("click", () => {
  
  navLinks.classList.toggle('show');
});


// Header Scroll function

var scrollButton = document.getElementById('scroll-button');
var ohjelmaLink = document.getElementById('ohjelma-link');
var targetSection = document.getElementById('body-content');

scrollButton.addEventListener('click', function() {
  targetSection.scrollIntoView({behavior: 'smooth'});
});

ohjelmaLink.addEventListener('click', function() {
  targetSection.scrollIntoView({behavior: 'smooth'});
});