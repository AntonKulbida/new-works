$('.sl').slick({
	dots: false,
  infinite: false,
  speed: 300,
  slidesToShow: 2,
  slidesToScroll: 1, 
  responsive: [
  {
                breakpoint: 960,
                              settings: {
                                slidesToShow: 1,
                                slidesToScroll: 1
                              }
                            },
  ]
  });