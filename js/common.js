"use strict";

// slick-slider плагин для галлереи
$(".multiple-items").slick({
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
        {
            breakpoint: 1024,
            settings: {
                slidesToShow: 3
            }
        },
        {
            breakpoint: 768,
            settings: {
                slidesToShow: 2
            }
        },
        {
            breakpoint: 568,
            settings: {
                slidesToShow: 1
            }
        }
    ]
});

// Плагин для попапа
$(function() {
    // указывем класс на который будет вызываться попап
    $("#popup-modal").magnificPopup({
        type: "inline",
        preloader: false,
        focus: "#username",
        modal: true
    });
    // указывем класс на который попап будет закрыт
    $(document).on("click", ".popup__btn-close", function(e) {
        e.preventDefault();
        $.magnificPopup.close();
    });
});

// Заглушка для видео (кнопка плей)
$(function() {
    let videoEl = $(".video-item__clip");
    let playBtn = $("#playBtn");
    let videoStub = $(".video-item__stub");

    playBtn.click(function() {
        videoStub.hide();
        videoEl.play(); // no work ?
    });
});

// Скрываем меню показываем бургер
$(document).ready(function() {
    $(".burger").click(function(event) {
        $(".header__row").toggleClass("js-show-menu");
        $(".body").toggleClass("js-lock-scroll");
    });
});
