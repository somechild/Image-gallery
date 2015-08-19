$(document).ready(function() {



	//***********$$$$$$$#########$$$$$$$$***************//
	var imageChangeIntervalToUse = 6000; //how frequently to change images (in ms), currently set to 6s -> change as you wish
	//***********$$$$$$$#########$$$$$$$$***************//

	
	var totalGalleryCount = $('.homeGallery>div>span').length;
	var slideShowInterval;
	function changeImgFunc() {
		var currentItemIndex;
		$('.homeGallery>div>span').each(function(i) {
			if ($(this).hasClass('homeGalleryCurrentImage')) {
				currentItemIndex = i;
				$(this).removeAttr('class');
				return true;
			};
		});
		if (parseInt(currentItemIndex+1)==totalGalleryCount) {
			$('.homeGallery>div>span:first-child').attr('class', 'homeGalleryCurrentImage');
		}
		else {
			$('.homeGallery>div>span:nth-child('+parseInt(currentItemIndex+2)+')').attr('class', 'homeGalleryCurrentImage');
		};
	};
	function animateHomeGallery() {
		slideShowInterval = setInterval(changeImgFunc, imageChangeIntervalToUse);
	};
	$('.homeGallery>div>span:first-child>img').load(animateHomeGallery);


	//going forward and backward functions -- note the timer does not reset as of now
	$('.homeGallery>span:first-child').click(function() {
		var currentItemIndex;
		$('.homeGallery>div>span').each(function(i) {
			if ($(this).hasClass('homeGalleryCurrentImage')) {
				currentItemIndex = i;
				$(this).removeAttr('class');
				return true;
			};
		});
		if (parseInt(currentItemIndex-1)<0) {
			$('.homeGallery>div>span:last-child').attr('class', 'homeGalleryCurrentImage');
		}
		else {
			$('.homeGallery>div>span:nth-child('+parseInt(currentItemIndex)+')').attr('class', 'homeGalleryCurrentImage');
		};
		clearTimeout(slideShowInterval);
		slideShowInterval = setInterval(changeImgFunc, imageChangeIntervalToUse);
	});
	$('.homeGallery>span:last-child').click(function() {
		var currentItemIndex;
		$('.homeGallery>div>span').each(function(i) {
			if ($(this).hasClass('homeGalleryCurrentImage')) {
				currentItemIndex = i;
				$(this).removeAttr('class');
				return true;
			};
		});
		if (parseInt(currentItemIndex+1)==totalGalleryCount) {
			$('.homeGallery>div>span:first-child').attr('class', 'homeGalleryCurrentImage');
		}
		else {
			$('.homeGallery>div>span:nth-child('+parseInt(currentItemIndex+2)+')').attr('class', 'homeGalleryCurrentImage');
		};
		clearTimeout(slideShowInterval);
		slideShowInterval = setInterval(changeImgFunc, imageChangeIntervalToUse);
	});
});