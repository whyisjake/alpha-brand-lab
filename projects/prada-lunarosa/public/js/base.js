$(function() {
	console.log('luna rosa ready');


	var $fixedBG = $('.bg-img'),
		$timeline = $('.timeline'),
		$introView = $('.panel.intro');
	var SMcontroller = new ScrollMagic.Controller();

	function showTimeline(){
		console.log('showTimeline');
		TweenMax.to( $timeline, 0.5, {left:100, delay:0.25, opacity:1, ease: Circ.easeInOut});
	}

	function hideTimeline(){
		TweenMax.to( $timeline, 0.5, {left:-500, opacity:0, ease: Circ.easeInOut});
	}

	function hideIntroView(){
		TweenMax.to( $introView, 0.5, {opacity:0, top:-50, ease: Circ.easeOut});
	}

	function showIntroView(){
		TweenMax.to( $introView, 0.5, {opacity:1, top:0, ease: Circ.easeOut});
	}

  function initScroll() {
	// init ScrollMagic controller
	SMcontroller = new ScrollMagic.Controller({addIndicators: true}); 

	new ScrollMagic.Scene({triggerElement: '.panel.morning', duration: "100%"}) 
		.offset(  -250 )
		.triggerHook('onLeave')
		.addTo(SMcontroller)
		.on('enter', function (e) {
			var scrollDir = e.target.controller().info('scrollDirection');
			TweenMax.to( $fixedBG, 0.5, {opacity: 0.5, ease: Circ.easeOut});
			//TweenMax.to( $houseDots, 0.5, {opacity: 0});
			
			if (scrollDir === 'FORWARD') {
				showTimeline();
				hideIntroView();
			}
			console.log(scrollDir + ' ENTER MORNING');

		})
		.on('leave', function (e) {
			var scrollDir = e.target.controller().info('scrollDirection');
			if (scrollDir === 'REVERSE') {
				console.log('LEAVE MORNING');
				hideTimeline();
				showIntroView();
			}

			TweenMax.to( $fixedBG, 0.5, {opacity: 1, ease: Circ.easeOut});
			
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
		.on('enter', function (e) {
			var scrollDir = e.target.controller().info('scrollDirection');
			console.log(scrollDir + ' ENTER NIGHT');
			
			TweenMax.to( $fixedBG, 0.5, {opacity: 0.9});

			if (scrollDir === 'REVERSE') {
				showTimeline();
			}

		})
		.on('leave', function (e) {
			
			
			console.log('LEAVE NIGHT');
		});
	new ScrollMagic.Scene({triggerElement: '.panel.endframe', duration: "100%"}) 
		.offset(  -250 )
		.triggerHook('onLeave')
		.addTo(SMcontroller)
		.on('enter', function () {
			console.log('ENTER ENDFRAME');
			TweenMax.to( $fixedBG, 0.5, {opacity: 1});
			hideTimeline();

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