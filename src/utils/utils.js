import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { CustomEase } from 'gsap/CustomEase'
import { initHomepage } from '../pages/homepage'
import { initChiSiamo } from '../pages/chi-siamo'
import { Flip } from 'gsap/Flip'

gsap.registerPlugin(ScrollTrigger, CustomEase, Flip)

export const customEase = CustomEase.create('custom', 'M0,0 C1,0 0,1 1,1')

export function getPageInit() {
  let path = window.location.pathname
  // console.log('path', path)

  if (path.includes('/projects/')) path = '/project'
  // if (path.includes('/prodotti/')) path = '/prodotti'
  // if (path.includes('/post/')) path = '/articoli'

  switch (path) {
    case '/':
      initHomepage()
      break
    case '/chi-siamo':
      initChiSiamo()
      break
    case '/project':
      // initProject()
      break
    default:
      // console.log('no init for this page: ' + path)
      break
    //
  }
}

export function initMenu() {
  const trigger = document.querySelector('[trigger-menu]')
  const menu = document.querySelector('.menu')

  const menu_links = [
    {
      title: 'cantina',
      link: document.querySelector('[menu-link="cantina"]'),
      text: document.querySelector('[menu-text="cantina"]'),
      icon: document.querySelector('[menu-icon="cantina"]'),
      image: document.querySelector('[menu-image="cantina"]'),
    },
    {
      title: 'vini',
      link: document.querySelector('[menu-link="vini"]'),
      text: document.querySelector('[menu-text="vini"]'),
      icon: document.querySelector('[menu-icon="vini"]'),
      image: document.querySelector('[menu-image="vini"]'),
    },
    {
      title: 'contatti',
      link: document.querySelector('[menu-link="contatti"]'),
      text: document.querySelector('[menu-text="contatti"]'),
      icon: document.querySelector('[menu-icon="contatti"]'),
      image: document.querySelector('[menu-image="contatti"]'),
    },
  ]

  // #region Menu Open Close Interaction
  let isOpen = false

  trigger.addEventListener('click', () => {
    // console.log('clicked')
    isOpen ? tlOpen.reverse() : tlOpen.play()
  })

  // se clicco sul secondo link chiudo il menu
  menu_links[1].link.addEventListener('click', () => {
    isOpen ? tlOpen.reverse() : tlOpen.play()
  })

  const tlOpen = gsap.timeline({
    paused: true,
    defaults: {
      duration: 0.4,
      ease: 'power4.out',
    },
    onComplete: () => {
      isOpen = !isOpen
    },
    onReverseComplete: () => {
      isOpen = !isOpen
    },
  })

  gsap.set(menu, { height: '0vh', display: 'none' })
  menu_links.forEach((link) => {
    gsap.set(link.link, { opacity: 0, y: '3rem' })
    gsap.set(link.icon, { display: 'none' })
    gsap.set(link.image, { display: 'block', opacity: 0 })
  })

  tlOpen
    .to(menu, { height: '100vh', display: 'grid' })
    .to(menu_links[0].link, { opacity: 1, y: '0rem' }, '-=.2')
    .to(menu_links[1].link, { opacity: 1, y: '0rem' }, '-=.4')
    .to(menu_links[2].link, { opacity: 1, y: '0rem' }, '-=.4')
    .to(menu_links[0].image, { opacity: 1 }, '-=.2')

  // #endregion

  menu_links[0].link.addEventListener('mouseenter', () => {
    gsap.set(menu_links[0].icon, { display: 'flex' })

    gsap.to(menu_links[0].image, { opacity: 1 })
    gsap.to(menu_links[1].image, { opacity: 0 })
    gsap.to(menu_links[2].image, { opacity: 0 })
  })

  menu_links[1].link.addEventListener('mouseenter', () => {
    gsap.set(menu_links[1].icon, { display: 'flex' })

    gsap.to(menu_links[0].image, { opacity: 0 })
    gsap.to(menu_links[1].image, { opacity: 1 })
    gsap.to(menu_links[2].image, { opacity: 0 })
  })

  menu_links[2].link.addEventListener('mouseenter', () => {
    gsap.set(menu_links[2].icon, { display: 'flex' })

    gsap.to(menu_links[0].image, { opacity: 0 })
    gsap.to(menu_links[1].image, { opacity: 0 })
    gsap.to(menu_links[2].image, { opacity: 1 })
  })

  menu_links[0].link.addEventListener('mouseleave', () => {
    gsap.set(menu_links[0].icon, { display: 'none' })
  })

  menu_links[1].link.addEventListener('mouseleave', () => {
    gsap.set(menu_links[1].icon, { display: 'none' })
  })

  menu_links[2].link.addEventListener('mouseleave', () => {
    gsap.set(menu_links[2].icon, { display: 'none' })
  })
}

export function initLenis() {
  const lenis = new Lenis({
    duration: 1.8,
    easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // https://www.desmos.com/calculator/brs54l4xou
    orientation: 'vertical', // vertical, horizontal
    gestureDirection: 'vertical', // vertical, horizontal, both
    smoothWheel: true,
    wheelMultiplier: 1,
    smoothTouch: false,
    touchMultiplier: 2,
    infinite: false,
  })

  function raf(time) {
    lenis.raf(time)
    requestAnimationFrame(raf)
  }

  requestAnimationFrame(raf)
}

export function initButtons() {
  const buttons = document.querySelectorAll('.button-icon')

  buttons.forEach((button) => {
    button.addEventListener('mouseenter', () => {
      const icon = button.querySelector('.button-icon_icon')
      const text = button.querySelector('.button-icon_text')

      const initialIconState = Flip.getState([icon, button, text])
      icon.style.left = 'auto'
      icon.style.right = '0.75rem'
      button.style.paddingLeft = '1rem'
      button.style.paddingRight = '2.75rem'

      Flip.from(initialIconState, { duration: 0.4, ease: 'power4.out' })
    })

    button.addEventListener('mouseleave', () => {
      const icon = button.querySelector('.button-icon_icon')
      const text = button.querySelector('.button-icon_text')

      const initialIconState = Flip.getState([icon, button, text])

      icon.style.left = '0.75rem'
      icon.style.right = 'auto'
      button.style.paddingLeft = '2.75rem'
      button.style.paddingRight = '1rem'

      Flip.from(initialIconState, { duration: 0.4, ease: 'power4.out' })
    })
  })
}
