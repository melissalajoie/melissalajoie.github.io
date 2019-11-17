// JavaScript Document

(function() {
	"use strict";

	var arrow = document.getElementById("arrow");

	arrow.onclick = function() {
	  TweenLite.to(window, 1, {scrollTo:"#about"});
	}
})();