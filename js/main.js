// JavaScript Document

(function() {
	"use strict";

	var arrow = document.getElementById("arrow");

	arrow.onclick = function() {
	  TweenLite.to(window, 0.65, {scrollTo:"#about"});
	}
})();
