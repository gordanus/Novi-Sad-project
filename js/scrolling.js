// Smooth scrolling function

$(function () {
    $('nav a').bind('click', function () {
        $('html, body').stop().animate({
            scrollTop: $($(this).attr('href')).offset().top
        }, 1500, 'easeInOutExpo');
        event.preventDefault();
    });

    // WOW animation
    new WOW().init();

});