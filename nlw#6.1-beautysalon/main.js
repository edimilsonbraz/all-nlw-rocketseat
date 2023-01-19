/*Ativa e desativa Menu Hamburguer*/ 
const nav = document.querySelector('nav')

nav.addEventListener('click', () => {
  nav.classList.toggle('show')
})


/* MUDAR O HEADER DA PAGINA QUANDO DER SCROLL */
const header = document.querySelector('#header')
const navHeight = header.offsetHeight

function changeHeaderWhenScroll() {

  if(window.scrollY >= navHeight) {
    //Scroll maior que a altura do header add ".scroll"
    header.classList.add('scroll')
  }else {
    //Scroll menor que a altura do header remove ".scroll"
    header.classList.remove('scroll')
  }
}


/* TESTIMONIALS CARROSSEL SLIDER SWIPER*/
const swiper = new Swiper('.swiper-container', {
  slidesPerView: 1,
  pagination: {
    el: '.swiper-pagination'
  },
  mousewheel: true,
  keyboard: true,
  breakpoints: {
    767: {
      slidesPerView: 2,
      setWrapperSize: true,
    }
  }
});


/* SCROLLREAVEAL : MOSTRAR ELEMENTOS QUANDO DER SCROLL NA PÁGINA */
const scrollReveal = ScrollReveal({
  origin: 'top',
  distance: '30px',
  duration: 700,
  reset: true
})

scrollReveal.reveal(
  `#home .image, #home .text,
  #about .image, #about .text,
  #services header, #services .card,
  #testimonials header, #testimonials .testimonials
  #contact .text, #contact .links
  footer .brand, footer .social
  `, 
  { interval: 100 }
)



/*  BACK TO TOP BUTTON */ 
const backToTopButton = document.querySelector('.back-to-top')

function backToTop() {

  if(window.scrollY >= 560) {
    backToTopButton.classList.add('show')
  }else {
    backToTopButton.classList.remove('show')
  }
}

/* MENU ATIVO CONFORME A SEÇÃO VISÍVEL NA PÁGINA */
const sections = document.querySelectorAll('main section[id]')

function activateMenuAtCurrentSection() {

  const checkpoint = window.pageYOffset + (window.innerHeight / 8) * 4

  for(const section of sections) {
    const sectionTop = section.offsetTop
    const sectionHeight = section.offsetHeight
    const sectionId = section.getAttribute('id')

    const checkpointStart = checkpoint >= sectionTop
    const checkpointEnd = checkpoint <= sectionTop + sectionHeight

    if(checkpointStart && checkpointEnd) {
      document
      .querySelector('nav ul li a[href*=' + sectionId + ']')
      .classList.add('active')
    }else{
      document
      .querySelector('nav ul li a[href*=' + sectionId + ']')
      .classList.remove('active')
    }


  }

 }

/* REFATORAÇÃO DE CÓDIGO / WHEN SCROLL */ 
window.addEventListener('scroll', () => {
  changeHeaderWhenScroll()
  backToTop()
  activateMenuAtCurrentSection()
}) 
