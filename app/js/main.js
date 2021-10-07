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

});

