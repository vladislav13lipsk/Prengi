$(document).ready(function(){
    $('.carousel__inner').slick({
        dots: true,
        speed: 1500,
        autoplay: true,
        autoplaySpeed: 3000,
        arrows: false,
    
  });

  $('.your-class').slick({
      arrows: true,
      speed: 300,
      slidesToShow: 1,
      adaptiveHeight: true,
      prevArrow: '<button type="button" class="slick-prev"><img src="icon/arrow_l.png"></button>',
      nextArrow: '<button type="button" class="slick-next"><img src="icon/arrow_r.png"></button>'
  });
});

new WOW().init();

document.documentElement.style.setProperty('--animate-duration', '2s');
