// Breakpoints
var smallBreakpoint = 600,
	largeBreakpoint = 1024;


var mobilePositionIndex = 0,
	defaultMobileIndex = false;

// bindings and init setup – runs only once on ready
function initRig(){
	$('.rig').addClass('rig-init');

	$('.rig').wrapInner('<div class="rig-wrapper"></div>');

	if($('.rig-mobile-default').length > 0){
		mobilePositionIndex = $('.rig-flex, .rig-fixed').index($('.rig-mobile-default')[0]);
	};

	$('.rig-forward').click(function(){
		if(isMobile()){
			mobilePositionIndex += 1;
			updateMobilePosition();
		};
	});

	$('.rig-back').click(function(){
		if(isMobile()){
			mobilePositionIndex -= 1;
			updateMobilePosition();
		};
	});

	$('.rig-hide-right-panel').click(function(){
		$('.rig-fixed:not(.rig-collapsed), .rig-flex:not(.rig-collapsed)').eq(-1).addClass('rig-collapsed');
		rig();
	});

	setTimeout(function(){$('.rig').removeClass('rig-init')}, 50);
};


// everything that runs to format the layout – triggered by resize
function rig(){

	if($(window).width() > smallBreakpoint){
		// desktop/tablet

		$('.rig, .rig-fixed, .rig-flex, .rig-wrapper').removeAttr('style');

		var visibleFixedWidth = 0,
			totalFixedWidth = 0;

		$('.rig-fixed:not(.rig-collapsed)').each(function(index) {
			visibleFixedWidth += parseInt($(this).width(), 10);
		});

		$('.rig-fixed').each(function(index) {
			totalFixedWidth += parseInt($(this).width(), 10);
		});

		var rigFlexWidth = ($(window).width() - visibleFixedWidth) / $('.rig-flex:not(.rig-collapsed)').length;

		$('.rig-wrapper').width(totalFixedWidth + (rigFlexWidth * $('.rig-flex').length) );

		$('.rig-flex:not(.rig-collapsed)').width(rigFlexWidth);

		$('.rig-flex.rig-collapsed').width(($(window).width() - visibleFixedWidth) / $('.rig-flex').length);

		$('.rig-flex, .rig-fixed').removeClass('rig-right-panel');
		$('.rig-flex:not(.rig-collapsed), .rig-fixed:not(rig-collapsed)').eq(-1).addClass('rig-right-panel');


	}else{
		// mobile

		$('.rig', '.rig-fixed, .rig-flex, .rig-wrapper').removeAttr('style');

		$('.rig-wrapper').width($('.rig-fixed, .rig-flex').length * $(window).width());

		$('.rig, .rig-fixed, .rig-flex').width($(window).width());

		$('.rig-wrapper').css('left', $(window).width() * -1)

	};
};


function isMobile(){
	return $(window).width() < smallBreakpoint;
};

function updateMobilePosition(){
	if (isMobile()){
		$('.rig-wrapper').css('left',  $(window).width() * -1 * mobilePositionIndex);
	};
};



$(document).ready(function(){
	initRig();
	rig();
	updateMobilePosition();
});

var resizeTimeout;
$(window).resize(function(){
	$('.rig').addClass('rig-resizing');

	rig();
	updateMobilePosition();

	// Timeouts used to catch the end of the resize event
	clearTimeout(resizeTimeout);
	resizeTimeout = setTimeout(function(){
		$('.rig').removeClass('rig-resizing');
	}, 50);

});




