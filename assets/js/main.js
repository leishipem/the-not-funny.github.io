
/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/
const sections = document.querySelectorAll('section[id]')
    
const scrollActive = () =>{
  	const scrollDown = window.scrollY

	sections.forEach(current =>{
		const sectionHeight = current.offsetHeight,
			  sectionTop = current.offsetTop - 58,
			  sectionId = current.getAttribute('id'),
			  sectionsClass = document.querySelector('.nav__menu a[href*=' + sectionId + ']')

		if(scrollDown > sectionTop && scrollDown <= sectionTop + sectionHeight){
			sectionsClass.classList.add('active-link')
		}else{
			sectionsClass.classList.remove('active-link')
		}                                                    
	})
}
window.addEventListener('scroll', scrollActive)

/*=====SCROLL REVEAL ANIMATION=====*/
const sr = ScrollReveal({
    origin: 'top',
    distance: '60px',
    duration: 2500,
    reset:true
})

sr.reveal(`.home__img, .gigs__data, .footer__content`, { delay: 500 })
sr.reveal(`.booking-container`, { delay: 500 })

sr.reveal(`.home__social`, { origin: `bottom`, interval: 200 })
sr.reveal(`.about__data, .footer__social`, { origin: `left`, })
sr.reveal(`.sec__data`, { origin: `right`, })