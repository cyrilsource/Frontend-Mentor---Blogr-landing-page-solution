/*! project-name v0.0.1 | (c) 2021 YOUR NAME | MIT License | http://link-to-your-git-repo.com */
/**
 * Element.matches() polyfill (simple version)
 * https://developer.mozilla.org/en-US/docs/Web/API/Element/matches#Polyfill
 */
if (!Element.prototype.matches) {
	Element.prototype.matches = Element.prototype.msMatchesSelector || Element.prototype.webkitMatchesSelector;
}
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
