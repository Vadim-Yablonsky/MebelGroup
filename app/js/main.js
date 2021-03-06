$(function () {

   //icon search
   $('#search').click(function () {
      $('.right-box').addClass('hide-box');
      $('.header__search-form').addClass('active');
      $('.close').addClass('active');
      $('#search').hide();
   });

   $('.close').click(function () {
      $('.right-box').removeClass('hide-box');
      $('.header__search-form').removeClass('active');
      $('.close').removeClass('active');
      $('#search').show();
   });

   //Sticky scroll header
   window.addEventListener('scroll', function () {
      const header = document.querySelector('.header__top-inner');
      header.classList.toggle('stiky', window.scrollY > 0)
   });

   //slider
   $('.slider__inner').slick({
      dots: true,
      arrows: false,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true
   });

   // Load more
   $('#load-more').click(function (){
      $('#boxes .box:hidden').slice(0, 3).slideDown()
      if (($('#boxes .box:hidden')).length == 0) {
         $('#load-more').fadeOut('slow')
      }
   });

});

