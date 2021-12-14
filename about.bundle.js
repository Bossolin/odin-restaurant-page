/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	// The require scope
/******/ 	var __webpack_require__ = {};
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
/*!**********************!*\
  !*** ./src/About.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const About = (() => {
  const about = document.createElement("main");

  const adresse = document.createElement("h1");
  adresse.innerHTML = `ADRESSE`;

  const adressLink = document.createElement("a");
  adressLink.innerHTML = `<a href="https://www.google.no/maps/place/Vestregata+2,+9008+Troms%C3%B8/@69.6485703,18.950919,17z/data=!3m1!4b1!4m2!3m1!1s0x45c4c5ad3e002d9b:0xdf878a8fdd1e6364" target="new">Vestregata 2, Tromsø</a>`;

  const orderTitle = document.createElement("h1");
  orderTitle.innerText = `BORDBESTILLING / TAKE-AWAY`;

  const phoneNumber = document.createElement("h2");
  phoneNumber.innerText = `77 68 09 95`;

  const contactEmail = document.createElement("p");
  contactEmail.innerHTML = `<p>Rask takeaway ved oppmøte.<br>Øvrige henvendelser: send mail til <a href="mailto:post@casainferno.no">post@casainferno.no</a></p>`;

  const openingHours = document.createElement("p");
  openingHours.innerHTML = `&nbsp;<br />
  <strong>OPEN EVERY DAY</strong><br />
  Man-Ons: 16.00-22.00<br />
  Tor-Lør: 16.00-23.00<br />
  Søndag: 16.00-22.00<br />
  <br />
  Our <strong>TAKE-AWAY </strong>service keeps running as normal.<br />
  <strong>77680995</strong><strong> to pick up.</strong>`;

  about.appendChild(adresse);
  about.appendChild(adressLink);
  about.appendChild(orderTitle);
  about.appendChild(phoneNumber);
  about.appendChild(contactEmail);
  about.appendChild(openingHours);

  return about;
})();

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (About);

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWJvdXQuYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7O1VBQUE7VUFDQTs7Ozs7V0NEQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7Ozs7Ozs7O0FDTkE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQSxrQ0FBa0M7QUFDbEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsQ0FBQzs7QUFFRCxpRUFBZSxLQUFLLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9vZGluLXJlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9vZGluLXJlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vb2Rpbi1yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9vZGluLXJlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL29kaW4tcmVzdGF1cmFudC1wYWdlLy4vc3JjL0Fib3V0LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIFRoZSByZXF1aXJlIHNjb3BlXG52YXIgX193ZWJwYWNrX3JlcXVpcmVfXyA9IHt9O1xuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiY29uc3QgQWJvdXQgPSAoKCkgPT4ge1xuICBjb25zdCBhYm91dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJtYWluXCIpO1xuXG4gIGNvbnN0IGFkcmVzc2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDFcIik7XG4gIGFkcmVzc2UuaW5uZXJIVE1MID0gYEFEUkVTU0VgO1xuXG4gIGNvbnN0IGFkcmVzc0xpbmsgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYVwiKTtcbiAgYWRyZXNzTGluay5pbm5lckhUTUwgPSBgPGEgaHJlZj1cImh0dHBzOi8vd3d3Lmdvb2dsZS5uby9tYXBzL3BsYWNlL1Zlc3RyZWdhdGErMiwrOTAwOCtUcm9tcyVDMyVCOC9ANjkuNjQ4NTcwMywxOC45NTA5MTksMTd6L2RhdGE9ITNtMSE0YjEhNG0yITNtMSExczB4NDVjNGM1YWQzZTAwMmQ5YjoweGRmODc4YThmZGQxZTYzNjRcIiB0YXJnZXQ9XCJuZXdcIj5WZXN0cmVnYXRhIDIsIFRyb21zw7g8L2E+YDtcblxuICBjb25zdCBvcmRlclRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgxXCIpO1xuICBvcmRlclRpdGxlLmlubmVyVGV4dCA9IGBCT1JEQkVTVElMTElORyAvIFRBS0UtQVdBWWA7XG5cbiAgY29uc3QgcGhvbmVOdW1iZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDJcIik7XG4gIHBob25lTnVtYmVyLmlubmVyVGV4dCA9IGA3NyA2OCAwOSA5NWA7XG5cbiAgY29uc3QgY29udGFjdEVtYWlsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gIGNvbnRhY3RFbWFpbC5pbm5lckhUTUwgPSBgPHA+UmFzayB0YWtlYXdheSB2ZWQgb3BwbcO4dGUuPGJyPsOYdnJpZ2UgaGVudmVuZGVsc2VyOiBzZW5kIG1haWwgdGlsIDxhIGhyZWY9XCJtYWlsdG86cG9zdEBjYXNhaW5mZXJuby5ub1wiPnBvc3RAY2FzYWluZmVybm8ubm88L2E+PC9wPmA7XG5cbiAgY29uc3Qgb3BlbmluZ0hvdXJzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gIG9wZW5pbmdIb3Vycy5pbm5lckhUTUwgPSBgJm5ic3A7PGJyIC8+XG4gIDxzdHJvbmc+T1BFTiBFVkVSWSBEQVk8L3N0cm9uZz48YnIgLz5cbiAgTWFuLU9uczogMTYuMDAtMjIuMDA8YnIgLz5cbiAgVG9yLUzDuHI6IDE2LjAwLTIzLjAwPGJyIC8+XG4gIFPDuG5kYWc6IDE2LjAwLTIyLjAwPGJyIC8+XG4gIDxiciAvPlxuICBPdXIgPHN0cm9uZz5UQUtFLUFXQVkgPC9zdHJvbmc+c2VydmljZSBrZWVwcyBydW5uaW5nIGFzIG5vcm1hbC48YnIgLz5cbiAgPHN0cm9uZz43NzY4MDk5NTwvc3Ryb25nPjxzdHJvbmc+IHRvIHBpY2sgdXAuPC9zdHJvbmc+YDtcblxuICBhYm91dC5hcHBlbmRDaGlsZChhZHJlc3NlKTtcbiAgYWJvdXQuYXBwZW5kQ2hpbGQoYWRyZXNzTGluayk7XG4gIGFib3V0LmFwcGVuZENoaWxkKG9yZGVyVGl0bGUpO1xuICBhYm91dC5hcHBlbmRDaGlsZChwaG9uZU51bWJlcik7XG4gIGFib3V0LmFwcGVuZENoaWxkKGNvbnRhY3RFbWFpbCk7XG4gIGFib3V0LmFwcGVuZENoaWxkKG9wZW5pbmdIb3Vycyk7XG5cbiAgcmV0dXJuIGFib3V0O1xufSkoKTtcblxuZXhwb3J0IGRlZmF1bHQgQWJvdXQ7XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=