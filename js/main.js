const menu = ["PROFILE", "WEBSITE", "GRID", "CONTACT"]

new Swiper("#wrap", {
    loop: true,
    slidesPerView: "auto",
    centeredSlides: true,
    spaceBetween: 150,
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
    }
});

const bgs = document.querySelectorAll(".bg li");
const prev = document.querySelector(".swiper-button-prev");
const next = document.querySelector(".swiper-button-next");
const navi = document.querySelectorAll(".swiper-pagination span");

prev.addEventListener("click", activation);
next.addEventListener("click", activation);
window.addEventListener("mousewheel", activation);

for(el of navi){
    el.addEventListener("click", e=>{
        let isOn = e.currentTarget.classList.contains("on");
        if(isOn) return;
        activation();
    });
}

function activation(){
    let item = document.querySelector(".swiper-slide-active");
    let i = item.getAttribute("data-swiper-slide-index");

    for(el of bgs){
        el.classList.remove("on");
    }
    bgs[i].classList.add("on");
}


const vids = document.querySelectorAll("video");

for(let el of vids){
    el.addEventListener("mouseenter", ()=>{
        el.play();
    });
    el.addEventListener("mouseleave", ()=>{
        el.pause();
        el.currentTime = 0;
    });
}