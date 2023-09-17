document.addEventListener("DOMContentLoaded", () => {
    const navEl = document.querySelector('.navbar');
    const hamburgerEl = document.querySelector('.hamburger');
  
    hamburgerEl.addEventListener("click", () => {
      navEl.classList.toggle("navbar--open");
      hamburgerEl.classList.toggle("hamburger--open");
    });
  });