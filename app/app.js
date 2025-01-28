const hamburguer = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

hamburger.addEventListener('click', () => {
    hamburguer.classList.toggle('active');
    navMenu.classList.toggle('active');
});

