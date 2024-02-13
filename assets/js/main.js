/*=====SHOW SCROLL UP===== */

function scrollUp() {
    const scrollUp = document.getElementById('scroll-up');
    if (this.scrollY >= 200) scrollUp.classList.add('show-scroll'); else scrollUp.classList.remove('show-scroll')
}
window.addEventListener('scroll', scrollUp)

// document.getElementById("hiddenLink").style.display ="none";

/*=====SCROLL REVEAL ANIMATION=====*/
const sr = ScrollReveal({
    origin: 'top',
    distance: '60px',
    duration: 2500,
    reset:true
})

sr.reveal(`.home__img, .gigs__data, .footer__content`, { delay: 500 })
sr.reveal(`.booking-container`, { delay: 500 })

sr.reveal(`.home__social, .footer__social, .footer__create`, { origin: `bottom`, interval: 200 })
sr.reveal(`.about__data`, { origin: `left`, })
sr.reveal(`.sec__data`, { origin: `right`, })