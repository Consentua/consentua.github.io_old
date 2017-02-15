//ScrollMagic Script for the scroll animations for consentua.com

var controller = new ScrollMagic.Controller();

// Fade out blurb
var tweenblurb = new TimelineMax()
    .to("#blurb", 1, {opacity: 0}, 0);

var scene0 = new ScrollMagic.Scene({duration: 400, offset: 150});
scene0.setTween(tweenblurb);
scene0.addTo(controller);

//change header colour
var tweenblurb = new TimelineMax()
    .to("#header", 1, {backgroundColor: '#9A1144'}, 0);

var scene0 = new ScrollMagic.Scene({duration: 500, offset: 100});
scene0.setTween(tweenblurb);
scene0.addTo(controller);

// Shrinking header logo animation
var tweenhead = new TimelineMax()
    .to("#splash", 1, {height: 50, margin:'0', padding: '0'}, 0)
    .to("#logo", 1, {scale: 0.45, top: 0, marginLeft: '-70', marginTop: '-12'}, 0);

var scene1 = new ScrollMagic.Scene({duration: 700, offset: 150});
scene1.setTween(tweenhead);
scene1.addTo(controller);

//animate images in problems/answers
var tweenprob = new TimelineMax()
	.to("#problem-img", 1, {opacity: 1, right: 0}, 0);
var scene2 = new ScrollMagic.Scene({duration: 400, offset: -20});
scene2.triggerElement("#problem");
scene2.setTween(tweenprob);
scene2.addTo(controller);

var tweenanswr = new TimelineMax()
	.to("#answer-img", 1, {opacity: 1, left: 0}, 0);
var scene3 = new ScrollMagic.Scene({duration: 400, offset: -20});
scene3.triggerElement("#answer");
scene3.setTween(tweenanswr);
scene3.addTo(controller);




//

var controller2 = new ScrollMagic.Controller({
			globalSceneOptions: {
				triggerHook: 'onLeave'
			}
		});

		// get all slides
		var slides = document.querySelectorAll("div.panel");

		// create scene for every slide
		for (var i=0; i<slides.length; i++) {
			new ScrollMagic.Scene({
					triggerElement: slides[i]
				})
				.setPin(slides[i])
				.addIndicators() // add indicators (requires plugin)
				.addTo(controller2);
		}