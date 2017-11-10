$(function() {


	var $fixedBG = $('.bg-img'),
		$timeline = $('.timeline'),
		$introView = $('.panel.intro'),
		$timelineActiveBar = $('.line-active'),
		$timelineTagMorning = $('.tag-morning'),
		$timelineTagAfternoon = $('.tag-afternoon');
		$timelineTagNight = $('.tag-night');
		$endframeView = $('.panel.endframe');
		$introArrowDown = $('.intro-arrow-down');
		$arrowDown_offset  = 250;

	var SMcontroller = new ScrollMagic.Controller();

	//function showTimeline(){
	//	TweenMax.to( $timeline, 0.5, {left:'2%', delay:0.25, opacity:1, ease: Circ.easeInOut});
	//}
//
	//function hideTimeline(){
	//	TweenMax.killTweensOf($timeline);
	//	TweenMax.to( $timeline, 0.5, {left:-500, opacity:0, ease: Circ.easeInOut});
	//}

	function hideIntroView(){
		TweenMax.to( $introView, 0.5, {opacity:0, top:-50, ease: Circ.easeOut});
	}

	function showIntroView(){
		TweenMax.to( $introView, 0.5, {opacity:1, top:0, ease: Circ.easeOut});
	}

	//function setTimeline($time){
	//	TweenMax.killTweensOf( $timelineTagMorning );
	//	TweenMax.killTweensOf( $timelineTagAfternoon );
	//	TweenMax.killTweensOf( $timelineTagNight );
//
	//	switch($time){
	//		case 'morning':
	//			TweenMax.to( $timelineActiveBar, 0.5, {height:'33.3333%', top:"0", delay:0.85, ease:Circ.easeOut});
	//			TweenMax.to( $timelineTagMorning, 0.25, {opacity:1, left:"25%", delay:1.5, ease:Circ.easeOut});
	//			TweenMax.to( $timelineTagAfternoon, 0.25, {opacity:0, left:"0%", ease:Circ.easeOut});
	//			TweenMax.to( $timelineTagNight, 0.25, {opacity:0, left:"0%", ease:Circ.easeOut});
	//			
	//		break;
	//		case 'afternoon':
	//			TweenMax.to( $timelineActiveBar, 0.5, {height:'33.3333%', top:"33%", delay:0.85, ease:Circ.easeOut});
	//			TweenMax.to( $timelineTagMorning, 0.25, {opacity:0, left:"0%", ease:Circ.easeOut});
	//			TweenMax.to( $timelineTagAfternoon, 0.25, {opacity:1, left:"25%", delay:1.5, ease:Circ.easeOut});
	//			TweenMax.to( $timelineTagNight, 0.25, {opacity:0, left:"0%", ease:Circ.easeOut});
	//			
	//		break;
	//		case 'night':
	//			TweenMax.to( $timelineActiveBar, 0.5, {height:'33.3333%', top:"66.6666%", delay:0.85, ease:Circ.easeOut});
	//			TweenMax.to( $timelineTagMorning, 0.25, {opacity:0, left:"0%", ease:Circ.easeOut});
	//			TweenMax.to( $timelineTagAfternoon, 0.25, {opacity:0, left:"0%", ease:Circ.easeOut});
	//			TweenMax.to( $timelineTagNight, 0.25, {opacity:1, left:"25%", delay:1.5, ease:Circ.easeOut});
	//			
	//		break;
	//	}
	//}

  function initScroll() {
	// init ScrollMagic controller
	SMcontroller = new ScrollMagic.Controller({addIndicators: true}); 

	new ScrollMagic.Scene({triggerElement: '.panel.morning', duration: "100%"}) 
		.offset(  -350 )
		.triggerHook('onLeave')
		.addTo(SMcontroller)
		.on('enter', function (e) {
			var scrollDir = e.target.controller().info('scrollDirection');
			TweenMax.to( $fixedBG, 1, {opacity: 0.65, ease: Circ.easeOut});
			
			if (scrollDir === 'FORWARD') {
				hideIntroView();	
			}
		})
		.on('leave', function (e) {
			var scrollDir = e.target.controller().info('scrollDirection');
			if (scrollDir === 'REVERSE') {
				showIntroView();
			}

			TweenMax.to( $fixedBG, 1, {opacity: 1, ease: Circ.easeOut});
			
		});
	new ScrollMagic.Scene({triggerElement: '.panel.afternoon', duration: "100%"}) 
		.offset( -250 )
		.triggerHook('onLeave')
		.addTo(SMcontroller)
		.on('enter', function () {
			TweenMax.to( $fixedBG, 1, {opacity: 0.75});
		})
		//.on('leave', function (e) {
		//	var scrollDir = e.target.controller().info('scrollDirection');
			//if (scrollDir === 'REVERSE') {
			//}
		//});
	new ScrollMagic.Scene({triggerElement: '.panel.night', duration: "100%"}) 
		.offset(  -350 )
		.triggerHook('onLeave')
		.addTo(SMcontroller)
		.on('enter', function (e) {
			var scrollDir = e.target.controller().info('scrollDirection');
			TweenMax.to( $fixedBG, 1, {opacity: 0.9});
			//if (scrollDir === 'REVERSE') {
			//}

		})

		.on('leave', function (e) {
			
			
		});
	new ScrollMagic.Scene({triggerElement: '.panel.endframe', duration: "100%"}) 
		.offset(  -400 )
		.triggerHook('onLeave')
		.addTo(SMcontroller)
		.on('enter', function () {
			TweenMax.to( $fixedBG, 1, {opacity: 1});
			TweenMax.to( $endframeView, 0.5, {opacity: 1, ease:Cubic.easeOut});

		})
		.on('leave', function (e) {
			
			TweenMax.to( $endframeView, 0.5, {opacity: 0, ease:Cubic.easeOut});
		});
  }


  $('.grid-item > a').click(function(e){
  		var $link = $(this).attr('data-link');
  		TweenMax.to(window, 1.5, {scrollTo:"#panel-"+$link});
  		e.preventDefault();
  });

  initScroll();

  // determine the scroll position, if we are past XXX, then fade out the bottom arrow in the intro state, otherwise, reveal it
  function scrollDetect() {
	  var scroll_top = $(window).scrollTop();
	  if(scroll_top >= $arrowDown_offset) {
		TweenMax.to( $introArrowDown, 1, {opacity:0, ease: Circ.easeOut});

	  }else{
		TweenMax.to( $introArrowDown, 1, {opacity:1, ease: Circ.easeOut});

	  }
	  	
	}

	$(window).scroll(scrollDetect);

	$('.owl-carousel').owlCarousel({
    loop:true,
    margin:0,
    dots:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        1000:{
            items:1
        }
    }
})

});