$('.cross').hide();
$('.menu').hide();
$('.hamburger').click(function () {
  $('.menu').slideToggle('slow', function () {
    $('.hamburger').hide();
    $('.cross').show();
  });
});

$('.cross').click(function () {
  $('.menu').slideToggle('slow', function () {
    $('.cross').hide();
    $('.hamburger').show();
  });
});


$(document).ready(function () {
  $(window).scroll(function () {
    $('.hideme').each(function (i) {
      var bottom_of_element = $(this).offset().top + $(this).outerHeight();
      var bottom_of_window = $(window).scrollTop() + $(window).height();

      if (bottom_of_window > bottom_of_element) {
        $(this).animate({ opacity: '1', marginTop: "0" }, 1000);
      }
    });
  });
});
