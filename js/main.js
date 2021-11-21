new Swiper("#wrap", {
    loop: true,
    slidesPerView: "auto",
    centeredSlides: true,
    spaceBetween: 50,

    navigation:{
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev"
    },

    pagination:{
        el: ".swiper-pagination",
        type: "bullets",
        clickable: true,
    },

    effect: 'coverflow',
    coverflowEffect:{
        rotate: 30,
        strech: -100,
        depth: 400,
        slideShadows: false,
    }
});