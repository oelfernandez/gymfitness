import $ from 'jquery';
//Activar Menú Desplegable
$(document).ready(function () {
    $('.button-burger').click(function () {
        $('.menu nav').toggleClass('active');
    });
//Activar Menú Acordeon
    $('.question-reply li').click(function (e) {
        e.preventDefault();

        if ($(this).hasClass('activate')) {
            $(this).removeClass('activate');
            $(this).children('ul').slideUp();
        } else {
            $('.question-reply li ul').slideUp();
            $('.question-reply li').removeClass('activate');
            $(this).addClass('activate');
            $(this).children('ul').slideDown();

        }
    });
//Activar Modal Lightbox
    $('.gallery-img').click(function (event) { // hacer click en la imagen
        event.preventDefault(); //prevenir los efectos del a

        if (0 < $(this).next().length){
            $('.next').show();
        } else {
            $('.next').hide();
        }

        if (0 < $(this).prev().length){
            $('.prev').show();
        } else {
            $('.prev').hide();
        }

        $('#modal').find('img').attr('src', $(this).find('img').attr('src'));
        $('#modal').show();
    });

    $('.close').click(function (event) { //hacer click en boton cerrar
        event.preventDefault();

        $('#modal').hide();
    });

    $('.next, #modal img').click(function (event) { //hacer click en siguiente
        event.preventDefault();

        $('#modal').find('img').attr('src', $('.gallery-img img[src="' + $('#modal').find('img').attr('src') + '"]').parents('.gallery-img').next().find('img').attr('src'));

        if (0 < $('.gallery-img img[src="' + $('#modal').find('img').attr('src') + '"]').parents('.gallery-img').next().length){
            $('.next').show();
        } else {
            $('.next').hide();
        }

        if (0 < $('.gallery-img img[src="' + $('#modal').find('img').attr('src') + '"]').parents('.gallery-img').prev().length){
            $('.prev').show();
        } else {
            $('.prev').hide();
        }
    });

    $('.prev').click(function (event) { //hacer click atras
        event.preventDefault();

        $('#modal').find('img').attr('src', $('.gallery-img img[src="' + $('#modal').find('img').attr('src') + '"]').parents('.gallery-img').prev().find('img').attr('src'));

        if (0 < $('.gallery-img img[src="' + $('#modal').find('img').attr('src') + '"]').parents('.gallery-img').next().length){
            $('.next').show();
        } else {
            $('.next').hide();
        }

        if (0 < $('.gallery-img img[src="' + $('#modal').find('img').attr('src') + '"]').parents('.gallery-img').prev().length){
            $('.prev').show();
        } else {
            $('.prev').hide();
        }
    });

    $('#modal').click(function (event) {
        $('#modal').hide();
    }).children().click(function (event) {
        return false;
    });
});

$(document).ready(function () {


    $('#gallery .gallery-img:nth-child(4), #gallery .gallery-img:nth-child(6) ').keyup(function () {
        alert('Image Big');
    });

});
