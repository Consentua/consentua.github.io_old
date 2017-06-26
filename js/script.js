'use strict';
//script for mobile nav bar
// get nav and anchors
var nav = document.querySelector('nav');
var anchorLinks = document.getElementsByClassName("anchor");
//nav toggle for mobile nav bar button
document.getElementById("toggle-menu").addEventListener("click", toggleMenu);
function toggleMenu() {
	nav.classList.toggle('visible');
}
//for each of the anchors, when clicked close nav
var i;
for (i = 0; i < anchorLinks.length; i++) {
	anchorLinks[i].addEventListener("click", closeDrawer);
}
function closeDrawer() {
	nav.classList.remove('visible');
}

function replaceFeatureTxt(show) {
  var divsToHide = document.getElementsByClassName("featureArticle"); //divsToHide is an array
    for(var i = 0; i < divsToHide.length; i++){
        divsToHide[i].style.display = "none"; // depending on what you're doing
    }
    var divToShow = "article-" + show;
  document.getElementById(divToShow).style.display="block";
}


//script for all img sliders
document.addEventListener('DOMContentLoaded', function() {
	Array.prototype.slice.call(document.querySelectorAll('.js_slider')).forEach(function(element, index) {
		lory(element, {
			rewind: true,
			slidesToScroll: 1,
			enableMouseEvents: true
		});
	});
});