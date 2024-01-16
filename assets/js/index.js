
let cards = document.querySelectorAll('.posicion');
//console.log(cards);
cards.forEach(function (card, i) {
    //console.log(card);
    card.addEventListener("mouseover", function () {
        this.classList.add('color');
    });
    card.addEventListener("mouseout", function () {
        this.classList.remove('color');
    });
})

$(window).on('load resize', function() {
    let windowWidth = $(window).width();
    let slidesToShow = windowWidth <= 1024 ? 1 : 2;
    let autoplay = windowWidth <= 1024;
    let autoplaySpeed = 2000;

    if ($(".lazy").hasClass('slick-initialized')) {
        $(".lazy").slick('slickSetOption', 'slidesToShow', slidesToShow, true);
        $(".lazy").slick('slickSetOption', 'autoplay', autoplay, true);
        $(".lazy").slick('slickSetOption', 'autoplaySpeed', autoplaySpeed, true); 
    } else {
        $(".lazy").slick({
            lazyLoad: "ondemand",
            slidesToShow: slidesToShow,
            slidesToScroll: 1,
            speed: 500,
            autoplay: autoplay,
            autoplaySpeed: autoplaySpeed 
        });
    }
});
