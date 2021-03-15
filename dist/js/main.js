/*! project-name v0.0.1 | (c) 2021 YOUR NAME | MIT License | http://link-to-your-git-repo.com */
// toggle menu
// script pour sélectionner le hamburger et faire apparaître le menu
function menuToggle(menu) {
  var nav = document.querySelector(menu);
  var hamburger = nav.querySelector('.burger')
  var fadeIn = nav.querySelector('.nav-mobile')
  hamburger.addEventListener('click', (function (e) {
    fadeIn.classList.toggle('fade-in')
    hamburger.classList.toggle('cross')
  }))
}
