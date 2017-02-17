$(document).ready(
function(){

        var controller = new ScrollMagic.Controller();


        // Shrinking head animation
        var tweenhead = new TimelineMax()
	        .to("#head", 1, {height: "75px"}, 0)
	        .to("#logo", 1, {top: "15px", scale: "0.75", left: "-20px"}, 0)
	        .to("#head p", 1, {top: "10px"}, 0);

        var scene1 = new ScrollMagic.Scene({duration: 500, offset: 0});

                scene1.setTween(tweenhead);
                scene1.addTo(controller);



        // Mainpage banner img fly in
        var tweenbanner = new TimelineMax()
	        .to("#mainpagebanner img", 1, {left: "700px"}, 0)

        var scene2 = new ScrollMagic.Scene({triggerElement: "#mainpagebanner"});

                scene2.setTween(tweenbanner);
                scene2.addTo(controller);
                
                

                
        
        // ticklist img fly in
        var tweentick = new TimelineMax()
	        .to("#ticklist img", 1, {left: "650px"}, 0)

        var scene3 = new ScrollMagic.Scene({triggerElement: "#ticklist"});
        scene3.setTween(tweentick);
        scene3.addTo(controller);
        
        
        
        // Everybody wins box fade in
        $(".collaboratebox").css ({opacity: 0});
        
        var tweencollab = new TimelineMax()
	        .to("#collabbox1", 1, {opacity: 1}, 0)
            .to("#collabbox2", 1, {opacity: 1}, 0.75)
            .to("#collabbox3", 1, {opacity: 1}, 0.5)
            .to("#collabbox4", 1, {opacity: 1}, 2)
            .to("#collabbox5", 1, {opacity: 1}, 1.5)
            .to("#collabbox6", 1, {opacity: 1}, 1.75);

        var scene4 = new ScrollMagic.Scene({triggerElement: "#collabboxes", triggerHook: 1, duration: 400});
        scene4.setTween(tweencollab);
        scene4.addTo(controller);
        
        // Org types fade in
                
        var tweencollab = new TimelineMax()
	    .from("#org1", 1, {opacity: 0}, 0.4)
            .from("#org2", 1, {opacity: 0}, 0.74)
            .from("#org3", 1, {opacity: 0}, 1);

        var scene4 = new ScrollMagic.Scene({triggerElement: "#organisations", triggerHook: 1,  duration: 600});
        scene4.setTween(tweencollab);
        scene4.addTo(controller);
        
        
        // True/False statements img fly in
        
        var tweentruefalse = new TimelineMax()
	        .to("#truefalse img", 1, {left: "650px"}, 0)

        var scene5 = new ScrollMagic.Scene({triggerElement: "#truefalse"});
        scene5.setTween(tweentruefalse);
        scene5.addTo(controller);
                
                
                
        // Several years box fade in
        $(".splitbox").css ({opacity: 0});
        
        var tweenyears = new TimelineMax()
	        .to("#severalyearsbox1", 1, {opacity: 1}, 0)
            .to("#severalyearsbox2", 1, {opacity: 1}, 1)
            .to("#severalyearsbox3", 1, {opacity: 1}, 0.5)

        var scene6 = new ScrollMagic.Scene({triggerElement: "#severalyears", triggerHook: 1, duration: 100});
        scene6.setTween(tweenyears);
        scene6.addTo(controller);
        
                
                
        // Attachments img fly in
        var tweenattachments = new TimelineMax().to("#attachmentslide img", 1, {left: "650px"}, 0)

        var scene7 = new ScrollMagic.Scene({triggerElement: "#attachmentslide"});
        scene7.setTween(tweenattachments);
        scene7.addTo(controller);
                
                

        // Mobile image
        var tweenmobile = new TimelineMax().to("#mobileslide", 1, {left: "650px"}, 0)
        
        var scene8b = new ScrollMagic.Scene({triggerElement: "#convenience"});
        scene8b.setTween(tweenmobile);
        scene8b.addTo(controller);
                
                
        // Support box fade in
        $(".quarterbox").css ({opacity: 0});
        
        var tweensupport = new TimelineMax()
	        .to("#supportbox1", 1, {opacity: 1}, 0)
            .to("#supportbox2", 1, {opacity: 1}, 1)
            .to("#supportbox3", 1, {opacity: 1}, 0.5)
            .to("#supportbox4", 1, {opacity: 1}, 1.5)

        var scene8 = new ScrollMagic.Scene({triggerElement: "#support", triggerHook: 1, duration: 100});
        scene8.setTween(tweensupport);
        scene8.addTo(controller);
                
                
                
         // Enterprise box fade in
         
         var tweenenterprise = new TimelineMax()
	        .to("#enterprisebox1", 1, {opacity: 1}, 0)
                .to("#enterprisebox2", 1, {opacity: 1}, 1)
                .to("#enterprisebox3", 1, {opacity: 1}, 0.5)

        var scene9 = new ScrollMagic.Scene({triggerElement: "#enterprise", triggerHook: 1, duration: 100});

                scene9.setTween(tweenenterprise);
                scene9.addTo(controller);
        
});
