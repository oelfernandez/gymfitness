import $ from 'jquery';

$(document).ready(function(){
    $('.button-burger').click(function(){
        $('.menu nav').toggleClass('active');
    });

    $('.question-reply li').click(function(e) {
        e.preventDefault();

        if ($(this).hasClass('activate')){
            $(this).removeClass('activate');
            $(this).children('ul').slideUp();
        } else {
            $('.question-reply li ul').slideUp();
            $('.question-reply li').removeClass('activate');
            $(this).addClass('activate');
            $(this).children('ul').slideDown();

        }
    });
});
