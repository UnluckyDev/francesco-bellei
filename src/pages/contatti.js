import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { CustomEase } from 'gsap/CustomEase'
import { initMenu, initButtons } from '../utils/utils'
import { customEase } from '../utils/utils'
import SplitType from 'split-type'
import '../styles/style.css'

gsap.registerPlugin(ScrollTrigger, CustomEase)

const isMobile = window.innerWidth <= 991 ? true : false

export function initContatti() {
  initMenu()
  initButtons()
  initSubmitProxy()
  initImageParallax()
}

function initSubmitProxy() {
  const fakeButton = document.querySelector('[data-form="fake-btn"]')
  const realButton = document.querySelector('[data-form="submit-btn"]')

  fakeButton.addEventListener('click', () => {
    realButton.click()
  })
}

function initImageParallax() {
  console.log('lol')
  const image = document.querySelector('.contatti_image_image')
  const section = document.querySelector('.page-wrapper')

  gsap.set(image, { top: '-8rem' })

  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: section,
      start: 'top top',
      end: `bottom top`,
      scrub: 1,
      // markers: true,
    },
  })

  tl.to(image, {
    top: '-20rem',
  })
}
