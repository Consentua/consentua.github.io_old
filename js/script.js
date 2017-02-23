'use strict';

//script for mobile nav bar
// get nav and anchors
var nav = document.querySelector('nav');
var anchorLinks = document.getElementsByClassName("anchor");
//nav toggle for mobile nav bar button
document.getElementById("toggle-menu").addEventListener("click",
	toggleMenu);
function toggleMenu() {
	nav.classList.toggle('visible');
}
//for each of the anchors, when clicked close nav
var i;
for (i = 0; i < anchorLinks.length; i++) {
anchorLinks[i].addEventListener("click", closeDrawer);
}
function closeDrawer(){
	nav.classList.remove('visible');
}

//dashboard page switch
var mainLinks = document.getElementsByClassName("main-link");
console.log(mainLinks);
var page = document.querySelectorAll("div[role='page']");
console.log(page);
//for each of the anchors, when clicked close nav
var i;
for (i = 0; i < mainLinks.length; i++) {
console.log(mainLinks[i]);
mainLinks[i].addEventListener("onclick", toggleHidden(i), false);
}

function toggleHidden() {
    console.log(i);
    console.log("fire");
    // page[i].classList.toggle('hidden');
}


//script for all img sliders
document.addEventListener('DOMContentLoaded', function () {
        Array.prototype.slice.call(document.querySelectorAll('.js_slider')).forEach(function (element, index) {
            lory(element, {
            	rewind: true,
		        slidesToScroll: 1,
		        enableMouseEvents: true
            });
        });
    });
