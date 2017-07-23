$('.sl4').slick({
	dots: false,
  infinite: true,
  speed: 300,
  slidesToShow: 2,
  slidesToScroll: 1, 
  responsive: [
     {
      breakpoint: 1140,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
      }
    },
  ]
  });