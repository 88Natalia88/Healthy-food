$(".lazy").slick({
    lazyLoad: "ondemand",
    slidesToShow: 2,
    slidesToScroll: 1,
    speed: 500
});
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