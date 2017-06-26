// Init controller
var controller = new ScrollMagic.Controller();

// Change behavior of controller
// to animate scroll instead of jump
controller.scrollTo(function(target) {
  TweenMax.to(window, 1, {
    scrollTo : {
      y : target, // scroll position of the target along y axis
      autoKill : true // allows user to kill scroll action smoothly
    },
    ease : Power4.easeInOut
  });

});

//  bind scroll to anchor links
var anchorLinks = document.getElementsByClassName("anchor");
for (i = 0; i < anchorLinks.length; i++) {
	anchorLinks[i].addEventListener("click", scrollToFunc);
}

function scrollToFunc(e) {
	var id = this.getAttribute("href");
	e.preventDefault();
	// console.log(id);
	if (id.length > 0) {
		controller.scrollTo(id);
	}
	// If supported by the browser update the URL
	if (window.history && window.history.pushState) {
		history.pushState("", document.title, id);
	} else {
		console.error("could not update url");
	}
};