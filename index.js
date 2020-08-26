window.addEventListener("DOMContentLoaded", function () {

  let navbarBurger = document.querySelector('.navbar-burger');
  let navbarMenu = document.querySelector('.navbar-menu');

  navbarBurger.addEventListener("click", toggleNavBurger());

  function toggleNavBurger() {
    navbarMenu.classList.toggle('is-active');
  }
})