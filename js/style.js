$('.teams_slide').slick({
    autoplay:true,
    autoplaySpeed: 1000,
    slidesToShow: 7,
    prevArrow: false,
    nextArrow: false,
    pauseOnHover:true,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          arrows: false,
          autoplay: true,
          autoplaySpeed: 1000,
          prevArrow: false,
          centerMode:false,
          nextArrow: false,
          slidesToShow: 4
        }
      },
      {
        breakpoint: 480,
        settings: {
          arrows: false,
          autoplay:true,
          autoplaySpeed: 1000,
          centerMode:false,
          prevArrow: false,
          nextArrow: false,
          slidesToShow: 2
        }
      }
    ]
  });


  $('.points').slick({
    autoplay:true,
    autoplaySpeed: 1000,
    slidesToShow:3,
    prevArrow: false,
    nextArrow: false,
    pauseOnHover:true,
    dots: true,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          arrows: false,
          autoplay: true,
          autoplaySpeed: 1000,
          prevArrow: false,
          centerMode:false,
          nextArrow: false,
          slidesToShow: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          arrows: false,
          autoplay:true,
          autoplaySpeed: 1000,
          centerMode:false,
          prevArrow: false,
          nextArrow: false,
          slidesToShow: 1
        }
      }
    ]
  });





  