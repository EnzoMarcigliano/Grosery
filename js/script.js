let searchForm = document.querySelector('.search-form');

document.querySelector('#search-btn').onclick = () =>{
    searchForm.classList.toggle('active');
    cart.classList.remove('active');
    loginForm.classList.remove('active');
    navbar.classList.remove('active');
}

let cart = document.querySelector('.shopping-cart');

document.querySelector('#cart-btn').onclick = () =>{
    cart.classList.toggle('active');
    searchForm.classList.remove('active');
    loginForm.classList.remove('active');
    navbar.classList.remove('active');
}

let loginForm = document.querySelector('.login-form');

document.querySelector('#login-btn').onclick = () =>{
    loginForm.classList.toggle('active');
    searchForm.classList.remove('active');
    cart.classList.remove('active');
    navbar.classList.remove('active');
}

let navbar = document.querySelector('.navbar');

document.querySelector('#menu-btn').onclick = () =>{
    navbar.classList.toggle('active');
    searchForm.classList.remove('active');
    cart.classList.remove('active');
    loginForm.classList.remove('active');
}

window.onscroll = () =>{
    searchForm.classList.remove('active');
    cart.classList.remove('active');
    loginForm.classList.remove('active');
    navbar.classList.remove('active');
}

let slides = document.querySelectorAll('.home .slides-container .slide');
let index = 0;

function next(){
    slides[index].classList.remove('active');
    index = (index + 1) % slides.length;
    slides[index].classList.add('active');
}

function prev(){
    slides[index].classList.remove('active');
    index = (index - 1 + slides.length) % slides.length;
    slides[index].classList.add('active');
}


$(document).ready(function() {
  //EXPANDIR EL MENU
  $('.dashboard-nav-dropdown-toggle').click(function() {
    var parent = $(this).parent();
    if (parent.hasClass('show')) {
      parent.removeClass('show');
      localStorage.setItem("expandirMenu", "false");
    } else {
      parent.addClass('show');
      localStorage.setItem("expandirMenu", "true");
      localStorage.setItem("menuId", parent.attr('id'));
    }
  });

  if (typeof localStorage.getItem('expandirMenu') !== 'undefined' && localStorage.getItem('expandirMenu') !== null) {
    if (localStorage.getItem('expandirMenu') == "true") {
      $('#' + localStorage.getItem('menuId')).addClass('show');
    }
  }
});
