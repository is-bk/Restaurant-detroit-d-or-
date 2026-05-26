// =========================
// FILE : script.js
// =========================

// MENU MOBILE
const toggle = document.getElementById('menu-toggle');
const menu = document.getElementById('menu');

toggle.addEventListener('click', () => {
  menu.classList.toggle('active');
});

// NAVBAR SCROLL EFFECT
window.addEventListener('scroll', () => {

  const navbar = document.querySelector('.navbar');

  if(window.scrollY > 50){
    navbar.style.background = "#000";
    navbar.style.padding = "10px 7%";
  }
  else{
    navbar.style.background = "rgba(0,0,0,0.4)";
    navbar.style.padding = "15px 7%";
  }

});