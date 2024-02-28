"use strict";

/*---------------------------------------
hambuger menu
---------------------------------------*/
const menuBox = document.querySelector(".aside-hambuger-menu-box");
const hambugerBtn = document.querySelector(".toggle-btn");
const blind = document.querySelector(".blind");
const aside = document.querySelector(".aside");

hambugerBtn.onclick = () => {
    menuBox.classList.toggle("open");
};
blind.onclick = () => {
    menuBox.classList.toggle("open");
};
aside.onclick = () => {
    menuBox.classList.toggle("open");
};

/*---------------------------------------
swiper slider
---------------------------------------*/
var swiper = new Swiper(".mySwiper", {
    loop: true,
    centeredSlidesBounds: true,
    slidesPerView: 1.5,
    spaceBetween: 40,
    freeMode: true,
    centeredSlides: true,
    breakpoints: {
        768: {
            slidesPerView: 3.5,
            spaceBetween: 60,
        },
    },
});

/*---------------------------------------
slide in
---------------------------------------*/
const inviewElements = document.querySelectorAll(".js__inview");

const inviewObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting && !entry.target.classList.contains("visible")) {
            entry.target.classList.add("visible");
            inviewObserver.unobserve(entry.target);
        }
    });
});

inviewElements.forEach((element) => {
    inviewObserver.observe(element);
});

/*---------------------------------------
smooth scroll
---------------------------------------*/
// document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
//     anchor.addEventListener("click", function (e) {
//         e.preventDefault();

//         document.querySelector(this.getAttribute("href")).scrollIntoView({
//             behavior: "smooth",
//         });
//     });
// });
