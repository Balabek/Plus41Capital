$(document).ready(function() {

    // Fancy animation for hamburger menu
    $('.pluscapital_nav_toggler').on('click', function(){
        $('.animated-icon1').toggleClass('open');
    });


    // Animating the "go-to" anchor scroll
    $('a.smoothscroll').click(function(){
        $('html, body').animate({
            scrollTop: $( $(this).attr('href') ).offset().top -1
        }, 800);
        // $('.collapse').removeClass('in');
    });



















});