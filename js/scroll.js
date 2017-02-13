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