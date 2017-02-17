$(document).ready(
function(){

        var controller = new ScrollMagic.Controller();


        // Fade out blurb
        var tweenblurb = new TimelineMax()
	        .to("#blurb", 1, {opacity: 0}, 0);

        var scene0 = new ScrollMagic.Scene({duration: 400, offset: 0});
        scene0.setTween(tweenblurb);
        scene0.addTo(controller);
        	        

        // Shrinking header logo animation
        var tweenhead = new TimelineMax()
	        .to("#intro", 1, {height: 100}, 0)
	        .to("#logo", 1, {scale: 0.5, top: 0, marginLeft: '-60'}, 0);

        var scene1 = new ScrollMagic.Scene({duration: 600, offset: 0});
        scene1.setTween(tweenhead);
        scene1.addTo(controller);


        // Put menu in place
        var tweenmenu = new TimelineMax()
            .to('#menu', 1, {opacity: 1}, 0);
            
        
        var scene2 = new ScrollMagic.Scene({duration: 100, offset: 670});
        scene2.setTween(tweenmenu);
        scene2.addTo(controller);
});
