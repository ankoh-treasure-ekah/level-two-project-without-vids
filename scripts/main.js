/***
 * Logic for background video swtiching
 */
const btns = document.querySelectorAll(".nav-btn-slide");
const slides = document.querySelectorAll(".video-slide");

let myslide;

var i = 1;
setInterval( () => {
    slides.forEach(slide => {
        if(slide.className.split(" ").includes("active")){
            myslide = slide;
            return;
        }
    })

    if(i == 3){
        i = 0;
    }

    btns.forEach(btn => {
        btn.classList.remove('active');
    })

    slides.forEach(slide => {
        slide.style.zIndex = "-3";
    })

    slides[i].style.zIndex = "-2";
    slides[i].classList.add("active");



    const delayer = () => {
        slides.forEach(slide => {
            myslide.classList.remove('active');
        })
    }
    
    const timer = setTimeout(delayer, 2000);

    btns[i].classList.add("active");
    i++;
}, 4000)




/**
 * SECTION 2 CODE STARTS HERE
 */

const carouselContainer = document.querySelector('.carousel-container');
const carouselBoxes = document.querySelectorAll('.boxes');

let carouselWidth = carouselContainer.getBoundingClientRect().width;
console.log(carouselWidth);

let numberOfItemsDisplayed = 9;
let widthPerItem = carouselWidth / numberOfItemsDisplayed;

console.log(widthPerItem);

carouselBoxes.forEach( box => {
    box.style.width = widthPerItem + "px";
})
