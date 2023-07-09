let menu = document.querySelector('#menu-icon');
let navlist = document.querySelector('.navlist');

menu.onclick = () => {
    menu.classList.toggle('bx-x');
    navlist.classList.toggle('open');
};

const sr = ScrollReveal ({
    distance: '65px',
    duration: 2600,
    delay: 450,
    reset: true
});

sr.reveal('.hero-text' ,{delay: 200, origin: 'top'});
sr.reveal('.hero-img' ,{delay: 450, origin: 'top'});
sr.reveal('.icons' ,{delay: 500, origin: 'left'});
sr.reveal('.column.side img' ,{delay: 200, origin: 'left'});
sr.reveal('.about h1' ,{delay: 200, origin: 'left'});
sr.reveal('.about h1 hr' ,{delay: 200, origin: 'left'});
sr.reveal('.box' ,{delay: 100, origin: 'left'});

// navbar transparency

const headerEl = document.querySelector('.header');

window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        headerEl.classList.add('header-scrolled');
    }
    else if (window.scrollY <= 50) {
        headerEl.classList.remove('header-scrolled');
    }
});

// function changeBg() {
//     var navbar2 = documnet.querySelector('.header');
//     var scrollValue = window.scrollY;
//     if(scrollValue < 50) {
//         navbar2.classList.remove('header-scrolled');
//     }
//     else {
//         navbar2.classList.add('header-scrolled');
//     }
// }

// window.addEventListener('scroll', changeBg);
