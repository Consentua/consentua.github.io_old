	// init controller
	// var controller = new ScrollMagic.Controller({globalSceneOptions: {}});

	// // build scenes
	// var scene0 = new ScrollMagic.Scene({triggerElement: "#tbn"})
	// 				// .setClassToggle("#header", "active") // add class toggle
	// 				// .addIndicators() // add indicators (requires plugin)
	// 				// .addTo(controller);

	// var tweenblurb = new TweenMax().to('#header', 1.5, {backgroundColor: '#212121'});

	// scene0.setTween(tweenblurb);
 //        scene0.addTo(controller);


        var controller = new ScrollMagic.Controller();

        // Fade out blurb
        var tweenblurb = new TimelineMax()
	        .to("#blurb", 1, {opacity: 0}, 0);

        var scene0 = new ScrollMagic.Scene({duration: 400, offset: 0});
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
	        .to("#splash", 1, {height: 0, margin:'0', padding: '0'}, 0)
	        .to("#logo", 1, {scale: 0.5, top: 0, marginLeft: '-70', marginTop: '-7'}, 0);

        var scene1 = new ScrollMagic.Scene({duration: 700, offset: 0});
        scene1.setTween(tweenhead);
        scene1.addTo(controller);


        // Put menu in place
        // var tweenmenu = new TimelineMax()
        //     .to('#menu', 1, {opacity: 1}, 0);
            
        
        // var scene2 = new ScrollMagic.Scene({duration: 100, offset: 670});
        // scene2.setTween(tweenmenu);
        // scene2.addTo(controller);