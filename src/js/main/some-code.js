// toggle menu
// script pour sélectionner le hamburger et faire apparaître le menu
function menuToggle(menu) {
  var nav = document.querySelector(menu);
  var hamburger = nav.querySelector('.burger')
  var fadeIn = nav.querySelector('.nav-mobile')
  hamburger.addEventListener('click', function (e) {
    fadeIn.classList.toggle('fade-in')
    hamburger.classList.toggle('cross')
  })
}
