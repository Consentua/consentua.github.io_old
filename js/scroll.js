//ScrollMagic Script for the scroll animations for consentua.com
// init controller
var controller = new ScrollMagic.Controller();

// Fade out blurb
var tweenblurb = new TimelineMax()
	.to("#blurb", 1, {
		opacity: 0
	}, 0);

var scene0 = new ScrollMagic.Scene({
	duration: 400,
	offset: 150
});
scene0.setTween(tweenblurb);
// scene0.addIndicators();  // add indicators (requires plugin) 
scene0.addTo(controller);


// Shrinking splash section into the header
var tweenhead = new TimelineMax()
	// .to("#header", 1, {backgroundColor: '#9A1144'}, 0);
	.to("#splash", 1, {
		height: '10vh',
		margin: '0',
		padding: '0'
	}, 0);

var scene1 = new ScrollMagic.Scene({
	duration: 800,
	offset: 100
});
scene1.setTween(tweenhead);
// scene1.addIndicators();  // add indicators (requires plugin) 
scene1.addTo(controller);

// Shrinking header logo animation
var tweenlogo = new TimelineMax()
	.to("#logo", 1, {
		height: '7vh',
		marginLeft: '0px',
		marginTop: '3px'
	});

var scene1 = new ScrollMagic.Scene({
	duration: 800,
	offset: 100
});
scene1.setTween(tweenlogo);
// scene1.addIndicators();  // add indicators (requires plugin) 
scene1.addTo(controller);


//animate images in problems/answers
var tweenprob = new TimelineMax()
	.to("#problem-img", 1, {
		opacity: 1,
		right: 0
	}, 0);
var scene2 = new ScrollMagic.Scene({
	duration: 400,
	offset: -20
});
scene2.triggerElement("#problem");
scene2.setTween(tweenprob);
// scene2.addIndicators();  // add indicators (requires plugin) 
scene2.addTo(controller);

var tweenanswr = new TimelineMax()
	.to("#answer-img", 1, {
		opacity: 1,
		left: 0
	}, 0);
var scene3 = new ScrollMagic.Scene({
	duration: 400,
	offset: -20
});
scene3.triggerElement("#answer");
scene3.setTween(tweenanswr);
// scene3.addIndicators();  // add indicators (requires plugin) 
scene3.addTo(controller);

//how it works list text anim
// get all li
var li = document.querySelectorAll(".explain-li");
// create scene for every slide
for (var i = 0; i < li.length; i++) {

	var tweenli = new TimelineMax() //tween for this li in the loop
		.to(li[i], 1, {
			// color: '#fff',
			backgroundColor: '#9A1144'
		}, 0);
	new ScrollMagic.Scene({
			triggerElement: li[i],
			duration: 100,
			offset: 270
		})
		.setTween(tweenli)
		// .addIndicators()   // add indicators (requires plugin)
		.addTo(controller);
}


// CTA circle animation
var tweencta = new TimelineMax()
	.to("#CTA #cir", 2, {
		width: '900px',
		height: '900px'
	}, 0);

var scene0 = new ScrollMagic.Scene({
	triggerElement: '#CTA',
	duration: 400,
	offset: -300
});
scene0.setTween(tweencta);
// scene0.addIndicators();  // add indicators (requires plugin) 
scene0.addTo(controller);


// Change behavior of controller
// to animate scroll instead of jump
controller.scrollTo(function(target) {
	TweenMax.to(document.body, 0.5, {
		scrollTo: {
			y: target, // scroll position of the target along y axis
			autoKill: true // allows user to kill scroll action smoothly
		},
		ease: Cubic.easeInOut
	});
	return false;
});

//  bind scroll to anchor links
var anchorLinks = document.getElementsByClassName("anchor");
for (i = 0; i < anchorLinks.length; i++) {
	anchorLinks[i].addEventListener("click", scrollTo);
}

function scrollTo(e) {
	var id = this.getAttribute("href");
	// console.log(id);
	if (id.length > 0) {
		e.preventDefault();
		controller.scrollTo(id);
	}
	// If supported by the browser we can also update the URL
	if (window.history && window.history.pushState) {
		history.pushState("", document.title, id);
	} else {
		console.error("could not update url");
	}
};