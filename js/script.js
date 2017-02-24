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

// //dashboard page switch
document.getElementById("defaultOpen").click();
function openTab(evt, tabName) {
    // Declare all variables
    var i, tabcontent, tablinks;

    // Get all elements with class="tabcontent" and hide them
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }

    // Get all elements with class="tablinks" and remove the class "active"
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }

    // Show the current tab, and add an "active" class to the link that opened the tab
    document.getElementById(tabName).style.display = "block";
    evt.currentTarget.className += " active";
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
