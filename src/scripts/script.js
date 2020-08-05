import $ from 'jquery';
//Activar Menú Desplegable
$(document).ready(function () {
    $('.button-burger').click(function () {
        $('.menu nav').toggleClass('active');
    });

    //Slider
   /* $('.listado-testimoniales').bxSlider();*/

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

        if (0 < $(this).next().length) {
            $('.next').show();
        } else {
            $('.next').hide();
        }

        if (0 < $(this).prev().length) {
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

        if (0 < $('.gallery-img img[src="' + $('#modal').find('img').attr('src') + '"]').parents('.gallery-img').next().length) {
            $('.next').show();
        } else {
            $('.next').hide();
        }

        if (0 < $('.gallery-img img[src="' + $('#modal').find('img').attr('src') + '"]').parents('.gallery-img').prev().length) {
            $('.prev').show();
        } else {
            $('.prev').hide();
        }
    });

    $('.prev').click(function (event) { //hacer click atras
        event.preventDefault();

        $('#modal').find('img').attr('src', $('.gallery-img img[src="' + $('#modal').find('img').attr('src') + '"]').parents('.gallery-img').prev().find('img').attr('src'));

        if (0 < $('.gallery-img img[src="' + $('#modal').find('img').attr('src') + '"]').parents('.gallery-img').next().length) {
            $('.next').show();
        } else {
            $('.next').hide();
        }

        if (0 < $('.gallery-img img[src="' + $('#modal').find('img').attr('src') + '"]').parents('.gallery-img').prev().length) {
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

// Mapa de LeaFlet


    /*  var map = L.map('map').setView([51.505, -0.09], 13);

      L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
          attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      }).addTo(map);

      L.marker([51.5, -0.09]).addTo(map)
          .bindPopup('A pretty CSS3 popup.<br> Easily customizable.')
          .openPopup();*/
//slider
    $('.dot-button-button').click(function () {
        $('.slider-item').removeClass('active');
        $('.slider-item:nth-child(' + $(this).data('item') + ')').addClass('active');

        $('.dot-button-button').removeClass('active');
        $(this).addClass('active');

    });

    setTimeout(slider_play, 8000);

});

function slider_play() {
    var quantity = $('.slider-item').length;

    if (quantity == $('.slider-item.active').data('item')) {
        $('.slider-item').removeClass('active');
        $('.slider-item:first-child').addClass('active');
        //button
        $('.dot-button-button').removeClass('active');
        $('.dot-button-button:first-child').addClass('active');
    } else {
        $('.slider-item.active').removeClass('active').next().addClass('active');
        $('.dot-button-button.active').removeClass('active').next().addClass('active');
    }

    setTimeout(slider_play, 8000);
}


$(document).ready(function () {


    $('#gallery .gallery-img:nth-child(4), #gallery .gallery-img:nth-child(6) ').keyup(function () {
        alert('Image Big');
    });

});
