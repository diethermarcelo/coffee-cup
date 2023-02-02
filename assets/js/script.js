
window.onscroll = function() {scrollFunction()};

var navbar = document.querySelector("header");
var sticky = navbar.offsetTop;

function scrollFunction() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky")
    navbar.classList.add("with-bg")
  } else {
    navbar.classList.remove("sticky");
    navbar.classList.remove("with-bg")
  }
}

// Burger

let burger_close = document.querySelector('.burger-navs .close');
let burger_icon = document.querySelector('.burger-container .burger-icon');
let burger_navs = document.querySelector('.burger-navs');

let burger_navs_classes = burger_navs.classList;

burger_close.addEventListener('click', () => {
    burger_navs.classList.add('opacity-0');
    burger_navs.classList.remove('opacity-1');
    burger_navs.classList.add('important-index-negative-1');
    burger_icon.classList.remove('important-index-0');
})

burger_icon.addEventListener('click', () => {
    burger_navs.classList.add('opacity-1');
    burger_navs.classList.remove('opacity-0');
    burger_navs.classList.remove('important-index-negative-1');
    burger_icon.classList.add('important-index-0');
})