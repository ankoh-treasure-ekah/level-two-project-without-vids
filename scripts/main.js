/**
 * automatic progress bar logic
 */
const pageScroll = document.querySelector('.page-scroller');
const slider = document.querySelector('.filled');

if(window.scrollY > 500) {
    console.log('true');
    pageScroll.style.display = 'none';
}

pageScroll.addEventListener('click', event => {
    event.preventDefault();
    console.log('cliced');

    
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
    // roller();

    console.log(window.scrollY)
    
})



function mySlider() {

    slider.style.width = `${(window.scrollY / (document.body.offsetHeight - window.innerHeight))*100}%`;
    requestAnimationFrame(mySlider);

    if(window.scrollY > 900) {
        console.log('true');
        pageScroll.classList.add('active');
    }
    else {
        pageScroll.classList.remove('active');
    }

}
mySlider();


/***
 * Logic for background video swtiching
 */
const btns = document.querySelectorAll(".nav-btn-slide");
const slides = document.querySelectorAll(".video-slide");
console.log(slides[1]);

let myslide;

var i = 1;
// setInterval( () => {
//     slides.forEach(slide => {
//         if(slide.className.split(" ").includes("active")){
//             myslide = slide;
//             return;
//         }
//     })

//     if(i == 5){
//         i = 0;
//     }

//     btns.forEach(btn => {
//         btn.classList.remove('active');
//     })

//     slides.forEach(slide => {
//         slide.style.zIndex = "-3";
//     })

//     slides[i].style.zIndex = "-2";
//     slides[i].classList.add("active");



//     const delayer = () => {
//         slides.forEach(slide => {
//             myslide.classList.remove('active');
//         })
//     }
    
//     const timer = setTimeout(delayer, 2000);

//     btns[i].classList.add("active");
//     i++;
// }, 4000)




/**
 * SECTION 2 CODE STARTS HERE FOR CAROUSEL
 */

let BreakPoints = {
    280: 2,
    500: 3,
    600:4,
    800:6,
    1000: 6,
    1200:9,
    1400: 12
}

const carouselContainer = document.querySelector('.carousel-container');
const carouselWrapper = document.querySelector('.carousel-box-wrapper');
let scrollPoint = document.getElementById('female');

let carouselBoxes = document.querySelectorAll('.boxes');
let actualwidth = 0;

let windowWidth = window.innerWidth;
console.log(windowWidth);

const media1000 = window.matchMedia('(max-width: 1000px)');
const media800 = window.matchMedia('(max-width: 800px)');
const media600 = window.matchMedia('(max-width: 600px)');
const media500 = window.matchMedia('(max-width: 500px)');
const media280 = window.matchMedia('(max-width: 280px)');
let carouselWidth = carouselContainer.getBoundingClientRect().width;
let numberOfItemsDisplayed;
let boxWidth;
let cloneWidth = 0;

function initialCarouselSetter(media280, media500, media600, media800, media1000) {
    if(media280.matches) {
        numberOfItemsDisplayed = 2;
        boxWidth = carouselWidth / numberOfItemsDisplayed;

        let multBy = 9 - numberOfItemsDisplayed;
        multBy += 1;
        boxWidth = boxWidth * multBy;
        console.log('boxwidth', boxWidth);
        return
    }

    if(media500.matches) {
        numberOfItemsDisplayed = 3;
        boxWidth = carouselWidth / numberOfItemsDisplayed;

        let multBy = 9 - numberOfItemsDisplayed;
        multBy += 1;
        boxWidth = boxWidth * multBy;
        console.log('boxwidth', boxWidth);
        return
    }  

    if(media600.matches) {
        numberOfItemsDisplayed = 4;
        boxWidth = carouselWidth / numberOfItemsDisplayed;

        let multBy = 9 - numberOfItemsDisplayed;
        multBy += 1;
        boxWidth = boxWidth * multBy;
        console.log('boxwidth', boxWidth);
        return
    }

    if(media800.matches) {
        numberOfItemsDisplayed = 6;
        boxWidth = carouselWidth / numberOfItemsDisplayed;

        let multBy = 9 - numberOfItemsDisplayed;
        multBy += 1;
        boxWidth = boxWidth * multBy;
        console.log('boxwidth', boxWidth);

        return
    }

    if(media1000.matches) {
        numberOfItemsDisplayed = 6;
        boxWidth = carouselWidth / numberOfItemsDisplayed;

        let multBy = 9 - numberOfItemsDisplayed;
        multBy += 1;
        boxWidth = boxWidth * multBy;
        console.log('boxwidth', boxWidth);
        
        return
    }
    
    numberOfItemsDisplayed = 9;

}

initialCarouselSetter(media280, media500, media600, media800, media1000);


let currentNum = numberOfItemsDisplayed;
let widthPerItem = carouselWidth / numberOfItemsDisplayed;
carouselBoxes.forEach( box => {
    box.style.width = widthPerItem + "px";
})



function handleChange1000(e) {
    if(e.matches) {
        // console.log("media 1000 matched");
        numberOfItemsDisplayed = 6;
        calcDefaultForwardRollbackWidth();

        getCloneWidth();
    }
    else {
        // console.log('greater than 1000');
        numberOfItemsDisplayed = 9;
        calcDefaultForwardRollbackWidth();


        getCloneWidth();

    }
}


function handleChange800(e) {
    if(e.matches) {
        // console.log("media 800 matched");
        numberOfItemsDisplayed = 6;
        calcDefaultForwardRollbackWidth();


        getCloneWidth();

    }
    else {
        // console.log('greater than 800');
        numberOfItemsDisplayed = 6;
        calcDefaultForwardRollbackWidth();


        getCloneWidth();

    }
}

function handleChange600(e) {
    if(e.matches) {
        // console.log("media 800 matched");
        numberOfItemsDisplayed = 4;
        calcDefaultForwardRollbackWidth();


        getCloneWidth();

    }
    else {
        // console.log('greater than 800');
        numberOfItemsDisplayed = 6;
        calcDefaultForwardRollbackWidth();


        getCloneWidth();

    }
}

function handleChange500(e) {
    if(e.matches) {
        // console.log("media 800 matched");
        numberOfItemsDisplayed = 3;
        calcDefaultForwardRollbackWidth();


        getCloneWidth();

    }
    else {
        // console.log('greater than 800');
        numberOfItemsDisplayed = 4;
        calcDefaultForwardRollbackWidth();


        getCloneWidth();

    }
}

function handleChange280(e) {
    if(e.matches) {
        // console.log("media 800 matched");
        numberOfItemsDisplayed = 2;
        calcDefaultForwardRollbackWidth();


        getCloneWidth();

    }
    else {
        // console.log('greater than 800');
        numberOfItemsDisplayed = 3;
        boxWidth = carouselWidth / numberOfItemsDisplayed;

        let multBy = 9 - numberOfItemsDisplayed;
        multBy += 1;
        boxWidth = boxWidth * multBy;
        console.log('boxwidth', boxWidth);

        getCloneWidth();

    }
}

media280.addListener(handleChange280);
media500.addListener(handleChange500);
media600.addListener(handleChange600);
media800.addListener(handleChange800);
media1000.addListener(handleChange1000);

handleChange280(media280);
handleChange500(media500);
handleChange600(media600);
handleChange800(media800);
handleChange1000(media1000);

let totalCaroWidth;
let finalTotal = 0;
let match = 0;



window.addEventListener('resize', event => {
    carouselWidth = carouselContainer.getBoundingClientRect().width;
    widthPerItem = carouselWidth / numberOfItemsDisplayed;
    totalCaroWidth = carouselWrapper.scrollWidth - carouselWrapper.clientWidth;
    carouselBoxes.forEach( box => {
        box.style.width = widthPerItem + "px";
    })
    

    actualwidth = 0;
    carouselBoxes.forEach(box => {
        let width = box.style.width;
        width = String(width).replace("px","");
        actualwidth += +width;
    })

    getCloneWidth();

})



/***
 * logic for section two infinite scroller
 */

let carouselBoxesClone = [];
let disableScroll = false;
let scrollWidth = 0;
let scrollPos = 0;
let BoxWidth = carouselWidth / numberOfItemsDisplayed;



function onLoad(){
    carouselBoxes.forEach(box => {
        const clone = box.cloneNode(true);
        carouselWrapper.appendChild(clone);
        clone.classList.add('clone');
    })
    let reverseArry = [];
    carouselBoxes.forEach(box => {
        const clone = box.cloneNode(true);
        reverseArry.push(clone);
        clone.classList.add('clone');
    })
    let reversed = reverseArry.reverse();
    reversed.forEach(clone => {
        carouselWrapper.prepend(clone);
    })

    
    carouselBoxes = document.querySelectorAll('.boxes');
    carouselBoxes.forEach(box => {
        let width = box.style.width;
        width = String(width).replace("px","");
        actualwidth += +width;
        
    })

    
    getCloneWidth();

    console.log("clone width", cloneWidth);

    console.log("actualwidth", actualwidth);
    totalCaroWidth = carouselWrapper.scrollWidth - carouselWrapper.clientWidth;

    match = Math.floor(actualwidth) - carouselWrapper.clientWidth;
    finalTotal = match;


}

function getScrollPos() {
    return carouselWrapper.scrollLeft;
}

function getCloneWidth(){
    carouselBoxes.forEach(box => {
        if(box.classList.contains('clone')){
            let width = box.style.width;
            width = String(width).replace("px","");
            cloneWidth += +width;
        }
    })
    cloneWidth = cloneWidth / 2;
}

function calcDefaultForwardRollbackWidth(){
    boxWidth = carouselWidth / numberOfItemsDisplayed;

    let multBy = 9 - numberOfItemsDisplayed;
    multBy += 1;
    boxWidth = boxWidth * multBy;
    console.log('boxwidth', boxWidth);
}

function setScrollPos(pos){
    carouselWrapper.scrollLeft = pos;
}

window.onLoad = onLoad();
setScrollPos(1333);


carouselWrapper.addEventListener('scroll', event => {
    console.log("scroll width", event.target.scrollLeft);
    console.log('caro', totalCaroWidth);
    console.log('caroget',event.target.clientWidth);

    console.log("actualwidth", actualwidth);
    match = Math.floor(actualwidth) - carouselWrapper.clientWidth;
    finalTotal = match;
    
    //calculate the correct total scroll left
    if(carouselWrapper.scrollLeft > match - 1) {
        console.log('end reached');
        console.log('match test', match - 1);
        console.log('scroll left test', carouselWrapper.scrollLeft);
        if(match - carouselWrapper.scrollLeft == 0) {
            finalTotal = match;
        }
        
        if(match - carouselWrapper.scrollLeft > 0) {
            finalTotal = carouselWrapper.scrollLeft;
        }
    
        if(carouselWrapper.scrollLeft - match > 0) {
            finalTotal = carouselWrapper.scrollLeft;
        }
    }
    
    
    console.log("match", finalTotal);
    console.log('match2', match);

    if(event.target.scrollLeft >= finalTotal) {
        console.log('boxwidth', boxWidth);
        event.target.scrollLeft = boxWidth;

    }

    if(event.target.scrollLeft <= 0) {
        event.target.scrollLeft = cloneWidth;
    }
})


/**use buttons to move carousel items*/
const btnLeft = document.querySelector('.left-navigate');
const btnRight = document.querySelector('.right-navigate');

btnLeft.addEventListener('click', event => {
    event.preventDefault();
    carouselWrapper.scroll({
        left: carouselWrapper.scrollLeft + -BoxWidth,
        behavior: "smooth"
    });
});

btnRight.addEventListener('click', event => {
    event.preventDefault();
    carouselWrapper.scroll({
        left: carouselWrapper.scrollLeft + BoxWidth,
        behavior: "smooth"
    });
})


/**
 * LOGIC FOR LOGIN / REGISTER PAGE HERE
 */

const btnLog = document.querySelector('.btn-login-register');
const loginContainer = document.querySelector('.login-container');
const loginCloser = document.querySelector('.login-closer');
const btnSignIn = document.querySelector('.btn-sign-up');
const btnLogin = document.querySelector('.btn-login');
const registerForm = document.querySelector('.register-form');
const loginForm = document.querySelector('.login-form');

const userSvg = document.querySelector('.svg-user');

// userSvg.addEventListener('click', event => {
//     event.preventDefault();

//     if(event.target.classList.contains('active')) {
//         console.log('added');
//         userSvg.nextElementSibling.classList.toggle('active');
//     }
// })

btnSignIn.addEventListener('click', event => {
    event.preventDefault();
    loginForm.classList.remove('active');
    registerForm.classList.add('active');

    btnLogin.classList.remove('active');
    event.target.classList.add('active');

})

btnLogin.addEventListener('click', event => {
    event.preventDefault();
    loginForm.classList.add('active');
    registerForm.classList.remove('active');

    event.target.classList.add('active');
    btnSignIn.classList.remove('active');
})


btnLog.addEventListener('click', event => {
    event.preventDefault();
    loginContainer.classList.add('active');
})

loginCloser.addEventListener('click', event => {
    event.preventDefault();
    loginContainer.classList.remove('active');
})



