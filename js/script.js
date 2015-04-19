		
	'use strict';

    var bgColor = "#ffa305";
	//Check IE11
	function IEVersion() {
 		if (!!navigator.userAgent.match(/Trident\/7\./)) {
   		 	return 11;
		}
	}
		
	// Preloader
	//==================================================================================
	if( !device.tablet() && !device.mobile() ) {
		
		$(document).ready(function () {
		
			$('#logo, #slide_content').css({
				visibility: 'hidden'
			});
		
    		$("body").queryLoader2({
        		barColor: bgColor,
        		percentage: true,
        		barHeight: 6,
        		completeAnimation: "grow",
				overlayId: "preloader",
				minimumTime: 1000,
				onComplete: function()
				{
					
					// WayPoint
					//====================================================
					$('.animation').css({
						visibility: 'hidden'
					});	
	
					$('.animation').waypoint(function() {
						$(this).css({ visibility: 'visible' });
 						$(this).addClass('animated');
						}, {
							offset: '95%'
					});
					
					// Hide Preloader
					//====================================================
					$("#start_preloader").fadeOut("fast", function(){
                   		$(this).remove();
                	}); 
					
					// Animate Logo and Slide Text
					//====================================================
					$('#logo, #slide_content').css({visibility: 'visible'});
					$("#logo").addClass("animated fadeInDown");
					$("#slide_content").addClass("animated delay1 fadeInRight");
					
				}
    		});
		});	
	}
	else
	{
		
		$('#logo, #slide_content').css({
			visibility: 'hidden'
		});
		
		window.addEventListener("DOMContentLoaded", function() {	
		
    		$("body").queryLoader2({
        		barColor: "#00c0b6",
        		percentage: true,
        		barHeight: 6,
        		completeAnimation: "fade",
				overlayId: "preloader",
				minimumTime: 1000,
				onComplete: function()
				{	
					// Hide Preloader
					//====================================================
					$("#start_preloader").fadeOut("fast", function(){
                   		$(this).remove();
                	}); 
					
					// Animate Logo and Slide Text
					//====================================================
					$('#logo, #slide_content').css({visibility: 'visible'});
					//$("#logo").addClass("animated fadeInDown");
					//$("#slide_content").addClass("animated delay1 fadeInRight");
				}
    		});
		});
	}

	// Supersized Slider
	//==================================================================================
	jQuery(function($){
		$.supersized({
			slides  :  	
			[
                {	image : 'images/dip_1600.jpg'},
                {	image : 'images/wall_stare_1600.jpg' },
                {	image : 'images/sunset2_1600.jpg' }
			]
		});
	});
	
	
	jQuery(document).ready(function($){
   		var deviceAgent = navigator.userAgent.toLowerCase();
   		var is_apple_device = deviceAgent.match(/(iphone|ipod|ipad)/);
    	if (is_apple_device) {
			$("#supersized, #supersized li").css("position","absolute");
   	 	}
	});	

	// Sticky
	//==================================================================================
	$(document).ready(function(){
		$("#logo").sticky({ topSpacing: 0 });
		$("#nav").sticky({ topSpacing: 0 });
	});

	// One Page Nav
	//==================================================================================
	$(document).ready(function() {
		$('#nav_list').onePageNav({
    		scrollSpeed: 1200,
    		currentClass: 'active',
    		changeHash: true,
    		filter: ':not(.external)'
		});
	});
	
	// Responsive Nav Hack. Hide Menu After Click It
	//==================================================================================
	$(document).ready(function() {
		var navMain = $(".navbar-collapse");
        navMain.on("click", "a", null, function () {
            if ($(this).attr("href") !== "#") {
                navMain.collapse('hide');
            }
        });
	});
	
	// NiceScroll
	//==================================================================================
	$(document).ready(function() {
		if (IEVersion() != 11 && !device.tablet() && !device.mobile()) 
		{
			$('html').niceScroll({
    			cursorcolor: "#1A212C",
    			zindex: '99999',
    			cursorminheight: 60,
    			scrollspeed: 80,
    			cursorwidth: 7,
    			autohidemode: true,
    			background: "#aaa",
    			cursorborder: 'none',
    			cursoropacitymax: .7,
    			cursorborderradius: 0,
    			horizrailenabled: false
			});
		}
		
	});
	
	// Photo Divider - Scroll Background Attachment - IE11 
	//==================================================================================
	$(document).ready(function() {
		if (IEVersion() == 11) 
		{
	  		$('.photo_divider').addClass('photo_divider_ie11');
		}
	});
	
	// Photo Item Roll Over 
	//==================================================================================
	$('.photo_item_preview > a').click(function() {
		return false;
	});
	
	// Popup
	//=================================================================================
	$('.popup').magnificPopup({
  		type: 'ajax',
		ajax: {
			settings: {cache:false} 
			// Ajax settings object that will extend default one - http://api.jquery.com/jQuery.ajax/#jQuery-ajax-settings
			// For example:
			// settings: {cache:false, async:false}
		},
		callbacks: {
    		open: function() {
      			// Will fire when this exact popup is opened\
    		},
    		close: function() {
      			// Will fire when popup is closed
	  			if (IEVersion() != 11 && !device.tablet() && !device.mobile()) 
				{
	  				$('body').css('overflow','hidden');
				}
    		}
  		},
	});
	
	// Gallery - Photo Caption Animation
	//==================================================================================
	$('.photo_item').hover(
		function() {
			$(this).find( ".photo_caption" ).addClass('animated');
		},
		function() {
			$(this).find( ".photo_caption" ).removeClass('animated');
		}
	);

	// Gallery - 2
	//==================================================================================
	var $gallery = $('#gallery2');
	// initialize Masonry after all images have loaded  
	$gallery.imagesLoaded( function() {
		$gallery.masonry({
			columnWidth: ".grid_sizer",
			itemSelector: ".masonry_col",
			transitionDuration: "1s",
		});
	});
	
	$('#gallery2').magnificPopup({
 		delegate: '.photo_item_overlay a', // child items selector, by clicking on it popup will open
  		type: 'image',
		gallery: {
          enabled:true
        },
		callbacks: {
    		open: function() {
      			// Will fire when this exact popup is opened
    		},
    		close: function() {
      			// Will fire when popup is closed
	  			if (IEVersion() != 11 && !device.tablet() && !device.mobile()) 
				{
	  				$('body').css('overflow','hidden');
				}
    		}
  		},
	});
	
	// Gmap
	//==================================================================================
   	jQuery(document).ready(function($) {
        $("#location_map").gMap({
             maptype: google.maps.MapTypeId.ROADMAP, 
             zoom: 15,
             markers: 
			 	[
			 		{
                 		latitude: 37.7908189,
                 		longitude: -122.460333,
                 		html: "<strong>Presidio Golf Course</strong>",
                		popup: true,               
					}
                ],
             panControl: true, 
             zoomControl: true, 
             mapTypeControl: true, 
             scaleControl: true, 
             streetViewControl: true, 
             scrollwheel: false, 
             onComplete: function() {
                 // Resize and re-center the map on window resize event
                 var gmap = $("#location_map").data('gmap').gmap;
                 window.onresize = function(){
                     google.maps.event.trigger(gmap, 'resize');
                     $("#location_map").gMap('fixAfterResize');
                 };
            }
        });
    });
	
	// Fix Photo Divider on Chrome on Retina Display
	//==================================================================================
	var is_chrome = navigator.userAgent.toLowerCase().indexOf('chrome') > -1;
	
	if (window.devicePixelRatio >= 2 && is_chrome && !device.tablet() && !device.mobile()) {
		// Choose one of the options below:
		
		// 1. Hack for Fixed Photo Divider
		//$(document).scroll(function(){
    		//$(this).find('.photo_divider').hide().show(0);
		//});
		
		// 2.Change Fixed to Scroll Photo Divider
		$('.photo_divider').css("background-attachment","scroll");
	} 
