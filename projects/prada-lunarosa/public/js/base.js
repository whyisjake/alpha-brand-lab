$(function() {
	console.log('luna rosa ready');


	var $fixedBG = $('.bg-img'),
		$timeline = $('.timeline'),
		$introView = $('.panel.intro'),
		$timelineActiveBar = $('.line-active'),
		$timelineTagMorning = $('.tag-morning'),
		$timelineTagAfternoon = $('.tag-afternoon');
		$timelineTagNight = $('.tag-night');
		$endframeView = $('.panel.endframe');
	var SMcontroller = new ScrollMagic.Controller();

	function showTimeline(){
		console.log('showTimeline');
		TweenMax.to( $timeline, 0.5, {left:'8%', delay:0.25, opacity:1, ease: Circ.easeInOut});
	}

	function hideTimeline(){
		console.log('hideTimeline');
		TweenMax.killTweensOf($timeline);
		TweenMax.to( $timeline, 0.5, {left:-500, opacity:0, ease: Circ.easeInOut});
	}

	function hideIntroView(){
		TweenMax.to( $introView, 0.5, {opacity:0, top:-50, ease: Circ.easeOut});
	}

	function showIntroView(){
		TweenMax.to( $introView, 0.5, {opacity:1, top:0, ease: Circ.easeOut});
	}

	function setTimeline($time){
		console.log('setTimeline: ' + $time);
		TweenMax.killTweensOf($('.dot'));
		TweenMax.killTweensOf( $timelineTagMorning );
		TweenMax.killTweensOf( $timelineTagAfternoon );
		TweenMax.killTweensOf( $timelineTagNight );

		switch($time){
			case 'morning':
				TweenMax.to( $timelineActiveBar, 0.5, {height:'33%', delay:0.85, ease:Circ.easeOut});
				TweenMax.to( $timelineTagMorning, 0.25, {opacity:1, left:"25%", delay:1.5, ease:Circ.easeOut});
				TweenMax.to( $timelineTagAfternoon, 0.25, {opacity:0, left:"0%", ease:Circ.easeOut});
				TweenMax.to( $timelineTagNight, 0.25, {opacity:0, left:"0%", ease:Circ.easeOut});
				$('.dot.one').addClass('set');
				$('.dot.three').removeClass('set');
				TweenMax.set('.dot.two', {className:"+=active", delay:1.25});
				TweenMax.set('.dot.three', {className:"-=active"});
				TweenMax.set('.dot.four', {className:"-=active"});
			break;
			case 'afternoon':
				TweenMax.to( $timelineActiveBar, 0.5, {height:'66%', delay:0.85, ease:Circ.easeOut});
				TweenMax.to( $timelineTagMorning, 0.25, {opacity:0, left:"0%", ease:Circ.easeOut});
				TweenMax.to( $timelineTagAfternoon, 0.25, {opacity:1, left:"25%", delay:1.5, ease:Circ.easeOut});
				TweenMax.to( $timelineTagNight, 0.25, {opacity:0, left:"0%", ease:Circ.easeOut});
				$('.dot.two').addClass('set');
				$('.dot.two').removeClass('active');
				TweenMax.set('.dot.three', {className:"+=active", delay:1.25});
				TweenMax.set('.dot.four', {className:"-=active"});
			break;
			case 'night':
				TweenMax.to( $timelineActiveBar, 0.5, {height:'99%', delay:0.85, ease:Circ.easeOut});
				TweenMax.to( $timelineTagMorning, 0.25, {opacity:0, left:"0%", ease:Circ.easeOut});
				TweenMax.to( $timelineTagAfternoon, 0.25, {opacity:0, left:"0%", ease:Circ.easeOut});
				TweenMax.to( $timelineTagNight, 0.25, {opacity:1, left:"25%", delay:1.5, ease:Circ.easeOut});
				$('.dot.three').addClass('set');
				$('.dot.two').removeClass('active');
				TweenMax.set('.dot.three', {className:"-=active"});
				TweenMax.set('.dot.four', {className:"+=active", delay:1.25});
			break;
		}
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
			
			if (scrollDir === 'FORWARD') {
				showTimeline();
				hideIntroView();
				
			}

			setTimeline('morning');
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
			setTimeline('afternoon');

		})
		.on('leave', function (e) {
			console.log('LEAVE AFTERNOON');
		});
	new ScrollMagic.Scene({triggerElement: '.panel.night', duration: "100%"}) 
		.offset(  -250 )
		.triggerHook('onLeave')
		.addTo(SMcontroller)
		.on('enter', function (e) {
			var scrollDir = e.target.controller().info('scrollDirection');
			console.log(scrollDir + ' ENTER NIGHT');
			setTimeline('night');
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
			TweenMax.to( $endframeView, 0.5, {opacity: 1, ease:Cubic.easeOut});
			hideTimeline();

		})
		.on('leave', function (e) {
			//var scrollDir = e.target.controller().info('scrollDirection');
			//if (scrollDir === 'REVERSE') {
			//	animateToHomeState();
			//}
			TweenMax.to( $endframeView, 0.5, {opacity: 0, ease:Cubic.easeOut});
			console.log('LEAVE ENDFRAME');
		});
  }

  initScroll();



});