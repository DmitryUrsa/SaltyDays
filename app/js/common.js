$(function() {

	$('.main-slider').slick({
		slidesToShow: 3,
		slidesToScroll: 3,
		dots: true,
		infinite: false,
		responsive: [
	    {
	      breakpoint: 990,
	      settings: {
	        slidesToShow: 2,
	        slidesToScroll: 2,
	      }
	    },
	    {
	      breakpoint: 850,
	      settings: {
	        slidesToShow: 1,
	        slidesToScroll: 1
	      }
	    },
	    {
	      breakpoint: 576,
	      settings: {
	      	slidesToShow: 1,
	        slidesToScroll: 1,
	        dots: false
	      }
	    },
	  ]
	});

});
