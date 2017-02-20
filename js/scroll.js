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

var scene1 = new ScrollMagic.Scene({duration: 1000, offset: 150});
scene1.setTween(tweenhead);
scene1.addTo(controller);

// Shrinking header logo animation
var tweenlogo = new TimelineMax()
    
    //.to("#logo", 1, {scale: 0.3, top: 0, left: 0, marginLeft: '-5em', marginTop: '-2em'}, 0);
    // .from("#logo", 0, {x:10, y:100, backgroundColor:'blue'})
    //.to("#logo", 5, {scale: 0.3, top: 0, left: 0});
    // .to("#logo", 1, {scale: 0.3, marginLeft: '-5vw', marginTop: '-3vh'});
     .to("#logo", 1, {height: '5vh', marginLeft: '0px', marginTop: '3px'});

var scene1 = new ScrollMagic.Scene({duration: 1000, offset: 150});
scene1.setTween(tweenlogo);
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


 // // define movement of panels
 // var wipeAnimation = new TimelineMax()
 // 	 //.fromTo("div.panel.one", 1, {y: "100%"}, {x: "10%", ease: Linear.easeNone})
 //     .fromTo("div.panel.two", 1, {y: "100%"}, {x: "0%", ease: Linear.easeNone}) 
 //     .fromTo("div.panel.three",    1, {y:  "100%"}, {y: "10%", ease: Linear.easeNone})  
 //     .fromTo("div.panel.four", 1, {y: "100%"}, {y: "20%", ease: Linear.easeNone}) 
 //     .fromTo("div.panel.five", 1, {y: "100%"}, {y: "30%", ease: Linear.easeNone})
 //     .fromTo("div.panel.six", 1, {y: "100%"}, {y: "40%", ease: Linear.easeNone}); 
 //     // create scene to pin and link animation
 // new ScrollMagic.Scene({
 //     triggerElement: "#pinContainer",
 //     duration: 1000, offset: 200,
 //     //triggerHook: "onLeave",
 // })
 // .setPin("#pinContainer")
 // .setTween(wipeAnimation)
 // .addTo(controller);


	// get all slides
		// var slides = document.querySelectorAll("div.panel");
		// var tweenpanel = new TimelineMax()
		// 	.to(".panel", 1, {height: '10vh'}, 0);

		// // create scene for every slide
		// for (var i=0; i<slides.length; i++) {
		// 	new ScrollMagic.Scene({
		// 			triggerElement: slides[i],
		// 			duration: 00, offset: 200
		// 		})
		// 		.setTween(tweenpanel)
		// 		.addIndicators() // add indicators (requires plugin)
		// 		.addTo(controller);
		// }

//

// // var controller2 = new ScrollMagic.Controller();

// 		// get all slides
// 		var slides = document.querySelectorAll("div.panel");

// 		// create scene for every slide
// 		for (var i=0; i<slides.length; i++) {
// 			new ScrollMagic.Scene({
// 					triggerElement: slides[i],
// 					triggerHook: 'onLeave',
// 					pushFollowers: false,
// 					offset: -200
// 				})
// 				.setPin(slides[i])
// 				.addIndicators() // add indicators (requires plugin)
// 				.addTo(controller);
// 		}