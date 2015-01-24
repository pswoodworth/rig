var breakpoint = 600,
	mobilePositionIndex = 0;


function initRig(){
	$('.rig').wrapInner('<div class="rig-wrapper"></div>');

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
};

function rig(){

	if($(window).width() > breakpoint){
		// desktop/tablet

		$('.rig, .rig-sidebar, .rig-body, .rig-wrapper').removeAttr('style');

		var totalSidebarWidth = 0;

		$('.rig-sidebar').each(function(index) {
			totalSidebarWidth += parseInt($(this).width(), 10);
		});

		$('.rig-body').width( ($(window).width() - totalSidebarWidth) / $('.rig-body').length );

	}else{
		// mobile

		$('.rig', '.rig-sidebar, .rig-body, .rig-wrapper').removeAttr('style');

		$('.rig-wrapper').width($('.rig-sidebar, .rig-body').length * $(window).width());

		$('.rig, .rig-sidebar, .rig-body').width($(window).width());

		$('.rig-wrapper').css('left', $(window).width() * -1)

	};
};


function isMobile(){
	console.log($(window).width() < breakpoint);
	return $(window).width() < breakpoint;
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
	$('.rig').addClass('resizing');

	rig();
	updateMobilePosition();

	clearTimeout(resizeTimeout);
	resizeTimeout = setTimeout(function(){
		$('.rig').removeClass('resizing');
		console.log('resize done');
	}, 50);

});




