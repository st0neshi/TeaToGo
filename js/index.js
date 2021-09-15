// for navi bars
let bars = document.querySelector('#bars-button');
let navi = document.querySelector('.navi');

bars.onclick = () => {
    bars.classList.toggle('fa-times');
    navi.classList.toggle('active');
}

// scolling
let section = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('.header .navi a');

window.onscroll = () => {
    bars.classList.remove('fa-times');
    navi.classList.remove('active');

    section.forEach(sec => {
        let top = window.scrollY;
        let height = sec.offsetHeight;
        let offset = sec.offsetTop - 100;
        let id = sec.getAttribute('id');

        if(top >= offset && top < offset + height){
            navLinks.forEach(links => {
              links.classList.remove('active');
              document.querySelector('.header .navi a[href*='+id+']').classList.add('active');
            });
          };
    });
}

// for pop up search form
document.querySelector('#search-button').onclick = () => {
    document.querySelector('#search-content').classList.toggle('active');
}

document.querySelector('#close-button').onclick = () => {
    document.querySelector('#search-content').classList.remove('active');
}

// gallery
var swiper = new Swiper(".gallery", {
    spaceBetween: 30,
    centeredSlides: true,
    autoplay: {
        delay: 5500,
        disableOnInteraction: false,
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    // navigation: {
    //   nextEl: ".swiper-button-next",
    //   prevEl: ".swiper-button-prev",
    // },
    loop: true,
});

// review
var swiper = new Swiper(".review-slider", {
    spaceBetween: 20,
    centeredSlides: true,
    autoplay: {
        delay: 5500,
        disableOnInteraction: false,
    },
    // pagination: {
    //     el: ".swiper-pagination",
    //     clickable: true,
    // },
    // navigation: {
    //   nextEl: ".swiper-button-next",
    //   prevEl: ".swiper-button-prev",
    // },
    loop: true,
    breakpoints: {
        0: {
            slidesPerView: 1,
        },
        640: {
            slidesPerView: 2,
        },
        768: {
            slidesPerView: 2,
        },
        1024: {
            slidesPerView: 3,
        },
    },
});

// loader
function loader(){
    document.querySelector('.loader-content').classList.add('fade-out');
}

function fadeOut(){
    setInterval(loader, 3500);
}

window.onload = fadeOut;