$('.sl').slick({
	dots: true,
  infinite: false,
  speed: 300,
  slidesToShow: 5,
  slidesToScroll: 5, 
  responsive: [
   {
      breakpoint: 550,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        infinite: true,
      }
    },
  ]
  });