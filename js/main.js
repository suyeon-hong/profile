const menu = [
    "Company", "About", "Information", "News"
]

new Swiper("#wrap", {
    loop: true,
    slidesPerView: "auto",
    centeredSlides: true,
    spaceBetween: 50,
    mousewheel: true,

    navigation:{
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev"
    },

    pagination:{
        el: ".swiper-pagination",
        type: "bullets",
        clickable: true,
        renderBullet: function(index, className){
            return `<span class='${className}'>${menu[index]}</span>`
        }
    },

    effect: 'coverflow',
    coverflowEffect:{
        rotate: 30,
        strech: -100,
        depth: 400,
        slideShadows: false,
    }
});