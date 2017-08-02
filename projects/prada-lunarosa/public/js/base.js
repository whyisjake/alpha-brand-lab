$(function() {
  console.log('luna rosa ready');

  var $fixedBG = $('.bg-img');
  var SMcontroller = new ScrollMagic.Controller();


  function initScroll() {
	// init ScrollMagic controller
	SMcontroller = new ScrollMagic.Controller({addIndicators: true}); 

	new ScrollMagic.Scene({triggerElement: '.panel.morning', duration: "100%"}) 
		.offset(  -250 )
		.triggerHook('onLeave')
		.addTo(SMcontroller)
		.on('enter', function () {
			TweenMax.to( $fixedBG, 0.5, {opacity: 0.5, ease: Circ.easeOut});
			//TweenMax.to( $houseDots, 0.5, {opacity: 0});
			console.log('ENTER MORNING');

		})
		.on('leave', function (e) {
			//var scrollDir = e.target.controller().info('scrollDirection');
			//if (scrollDir === 'REVERSE') {
			//	animateToHomeState();
			//}
			TweenMax.to( $fixedBG, 0.5, {opacity: 1, ease: Circ.easeOut});
			console.log('LEAVE MORNING');
		});
	new ScrollMagic.Scene({triggerElement: '.panel.afternoon', duration: "100%"}) 
		.offset( -250 )
		.triggerHook('onLeave')
		.addTo(SMcontroller)
		.on('enter', function () {
			console.log('ENTER AFTERNOON');
			TweenMax.to( $fixedBG, 0.5, {opacity: 0.75});

		})
		.on('leave', function (e) {
			//var scrollDir = e.target.controller().info('scrollDirection');
			//if (scrollDir === 'REVERSE') {
			//	animateToHomeState();
			//}
			console.log('LEAVE AFTERNOON');
		});
	new ScrollMagic.Scene({triggerElement: '.panel.night', duration: "100%"}) 
		.offset(  -250 )
		.triggerHook('onLeave')
		.addTo(SMcontroller)
		.on('enter', function () {
			console.log('ENTER NIGHT');
			TweenMax.to( $fixedBG, 0.5, {opacity: 0.9});

		})
		.on('leave', function (e) {
			//var scrollDir = e.target.controller().info('scrollDirection');
			//if (scrollDir === 'REVERSE') {
			//	animateToHomeState();
			//}
			console.log('LEAVE NIGHT');
		});
	new ScrollMagic.Scene({triggerElement: '.panel.endframe', duration: "100%"}) 
		.offset(  -250 )
		.triggerHook('onLeave')
		.addTo(SMcontroller)
		.on('enter', function () {
			console.log('ENTER ENDFRAME');
			TweenMax.to( $fixedBG, 0.5, {opacity: 1});

		})
		.on('leave', function (e) {
			//var scrollDir = e.target.controller().info('scrollDirection');
			//if (scrollDir === 'REVERSE') {
			//	animateToHomeState();
			//}
			console.log('LEAVE ENDFRAME');
		});
  }

  initScroll();



});