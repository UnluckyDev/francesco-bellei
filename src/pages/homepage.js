import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { CustomEase } from 'gsap/CustomEase'
import { initMenu, initButtons } from '../utils/utils'
import { customEase } from '../utils/utils'

gsap.registerPlugin(ScrollTrigger, CustomEase)

const isMobile = window.innerWidth <= 991 ? true : false

export function initHomepage() {
  initMenu()
  introAnimation()
  initViniSection()
  initViniSchede()
  initButtons()
}

function introAnimation() {
  const navigation = document.querySelector('.navigation')
  const maskTop = document.querySelector('.mask_top')
  const maskLeft = document.querySelector('.mask_left')
  const maskBottom = document.querySelector('.mask_bottom')
  const maskRight = document.querySelector('.mask_right')
  const video = document.querySelector('.home_hero_video')

  const tl = gsap.timeline({ defaults: { duration: 1, ease: customEase } })

  gsap.set(navigation, { y: '-110%' })
  gsap.set(video, { scale: 1.2 })
  gsap.set([maskTop, maskBottom], { height: '0rem' })
  gsap.set([maskLeft, maskRight], { width: '0rem' })

  tl.to(maskTop, { height: '8rem', delay: 0.6, duration: 2 })
    .to(navigation, { y: '0%', duration: 2 }, '<')
    .to(maskBottom, { height: '12rem', duration: 2 }, '<')
    .to([maskLeft, maskRight], { width: '3rem', duration: 2 }, '<')
    .to(video, { scale: 1 }, '<')
}

function initViniSection() {
  const section = document.querySelector('.home_vini')
  const triggers = document.querySelectorAll('[vini-trigger]')
  const baseColor = '#011ca6'

  triggers.forEach((trigger) => {
    const icon = trigger.querySelector('.home_vini_section_title_svg')
    const image = trigger.querySelector('.home_vini_section_image')
    const color = trigger.getAttribute('vini-color')

    trigger.addEventListener('mouseenter', () => {
      gsap.to(icon, { display: 'flex', duration: 0 })
      gsap.to(image, { display: 'block', duration: 0 })
      gsap.to(section, { backgroundColor: color, duration: 0.4 })
    })

    trigger.addEventListener('mouseleave', () => {
      gsap.to(icon, { display: 'none', duration: 0 })
      gsap.to(image, { display: 'none', duration: 0 })
      gsap.to(section, { backgroundColor: baseColor, duration: 0.4 })
    })
  })
}

function initViniSchede() {
  const triggers = document.querySelectorAll('[vini-trigger]')

  triggers.forEach((trigger) => {
    const triggerName = trigger.getAttribute('vini-trigger')
    const scheda = document.querySelector(`[vini-scheda="${triggerName}"]`)
    const closeTrigger = scheda.querySelector('.home_vini_scheda_close')

    gsap.set(scheda, { opacity: 0, display: 'none' })

    trigger.addEventListener('click', () => {
      gsap.to(scheda, { display: 'flex', duration: 0 })
      gsap.to(scheda, { opacity: 1, duration: 0.4 })
    })

    closeTrigger.addEventListener('click', () => {
      gsap.to(scheda, { opacity: 0, duration: 0.4 })
      gsap.to(scheda, { display: 'none', duration: 0, delay: 0.4 })
    })
  })
}
