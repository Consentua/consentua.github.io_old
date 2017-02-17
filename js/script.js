// jQuery.extend(jQuery.easing,{
//     easeInOutExpo: function(x, t, b, c, d){
//         if (t==0) return b;
//         if (t==d) return b+c;
//         if ((t/=d/2) < 1) return c/2 * Math.pow(2, 10 * (t - 1)) + b;
//         return c/2 * (-Math.pow(2, -10 * --t) + 2) + b;
//     }
// });

//$(document).ready(function(){

	console.log("load");

	document.getElementById("toggle-menu").addEventListener("click", toggleMenu);

	function toggleMenu() {
		var nav = document.querySelector('nav') // Using a class instead, see note below.
		nav.classList.toggle('visible');
		console.log("ye");
		// var nav = document.getElementById("nav");
		// if (nav.classList) {
		//   nav.classList.toggle(visible);
		// } else {
		//   var classes = nav.visible.split(' ');
		//   var existingIndex = classes.indexOf(visible);

		//   if (existingIndex >= 0){
		//     classes.splice(existingIndex, 1);
		// } else{
		//     classes.push(visible);

		//   nav.visible = classes.join(' ');
		// }
		// }
	}


    // $('a[href=#]').click(function(e){
    //     e.preventDefault();
    //     $('nav').removeClass('visible');
    //     $('html,body').stop().animate({scrollTop: $('.'+$(this).data('scrollto')).offset().top-65 }, 700, 'easeInOutExpo', function(){});
    // });

    // $('.toggle-menu').click(function(){
    //     $('nav').toggleClass('visible');
    // });

    // if($(window).width() < 800){
    //     $('.pricing > div > div:nth-of-type(3)').insertAfter($('.pricing > div > div:nth-of-type(1)'));
    // }

//});