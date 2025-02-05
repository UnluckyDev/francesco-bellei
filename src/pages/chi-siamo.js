import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { CustomEase } from 'gsap/CustomEase'
import { initMenu, initButtons } from '../utils/utils'
import { customEase } from '../utils/utils'
import SplitType from 'split-type'
import '../styles/style.css'

gsap.registerPlugin(ScrollTrigger, CustomEase)

const isMobile = window.innerWidth <= 991 ? true : false

export function initChiSiamo() {
  initMenu()
  introAnimation()
  initButtons()
  initSecondSection()
  initBlueSection()
  initSliderSection()
}

function introAnimation() {
  const navigation = document.querySelector('.navigation')

  //overlay dello sfondo della sezione (1)
  const imageOverlay = document.querySelector('.about_hero_image_overlay')

  const title = document.querySelector('.about_hero_content_title')
  const paragraph = document.querySelector('.about_hero_paragraph')

  const svg = document.querySelector('.about_hero_content_right_svg')
  const contentImage = document.querySelector('.about_hero_content_right_image')
  //sfondo bianco del contenuto testuale (2)
  const contentBackground = document.querySelector(
    '.about_hero_content_background'
  )
  //overlay dell'immagine del contenuto testuale (3)
  const contentImageOverlay = document.querySelector(
    '.about_hero_content_right_image_overlay'
  )

  const contentImageWrapper = document.querySelector(
    '.about_hero_content_right_image_wrapper'
  )

  const titleSplit = new SplitType(title, { types: 'lines, words' })
  const paragraphSplit = new SplitType(paragraph, { types: 'lines, words' })

  gsap.set(imageOverlay, { width: '100%' })
  gsap.set(svg, { opacity: 0 })
  gsap.set(contentBackground, { height: '0%' })
  gsap.set(contentImageOverlay, { height: '100%' })
  // gsap.set(navigation, { y: '-120%' })
  gsap.set(contentImageWrapper, { opacity: 0 })

  titleSplit.words.forEach((word) => {
    gsap.set(word, { y: '110%' })
  })

  paragraphSplit.words.forEach((word) => {
    gsap.set(word, { y: '110%' })
  })

  // const tl = gsap.timeline({ defaults: { duration: 1.2, ease: customEase } })
  const defaultDuration = 1.2

  gsap.to(imageOverlay, {
    width: '0%',
    duration: 2,
    ease: customEase,
  })
  gsap.to(contentBackground, {
    height: '100%',
    duration: 2,
    ease: customEase,
    delay: 0.1,
    onComplete: () => {
      gsap.to(contentImageWrapper, {
        opacity: 1,
        duration: 0,
        onComplete: () => {
          titleSplit.words.forEach((word) => {
            gsap.to(word, {
              y: '0%',
              duration: defaultDuration,
              ease: customEase,
            })
          })
          paragraphSplit.words.forEach((word) => {
            gsap.to(word, {
              y: '0%',
              duration: defaultDuration,
              ease: customEase,
              delay: 0.1,
            })
          })
          gsap.to(contentImageOverlay, {
            height: '0%',
            duration: defaultDuration,
            ease: customEase,
            delay: 0.2,
          })
          gsap.to(svg, {
            opacity: 1,
            duration: defaultDuration,
            ease: customEase,
            delay: 0.2,
          })
          // gsap.to(navigation, {
          //   y: '0%',
          //   duration: defaultDuration,
          //   ease: customEase,
          //   delay: 0.3,
          // })
        },
      })
    },
  })
}

function initSecondSection() {
  const section = document.querySelector('.about_metodo')
  const title = document.querySelector('.about_metodo_title')
  const paragraph = document.querySelector('.about_metodo_paragraph')

  const titleSplit = new SplitType(title, { types: 'lines, words' })
  const paragraphSplit = new SplitType(paragraph, { types: 'lines, words' })

  const imageTitle = document.querySelector('.about_metodo_image_title')
  const imageRelativeWrapper = document.querySelector(
    '.about_metodo_image_relative'
  )
  const image = document.querySelector('.about_metodo_image')

  titleSplit.words.forEach((word) => {
    gsap.set(word, { y: '100%' })
  })

  paragraphSplit.words.forEach((word) => {
    gsap.set(word, { y: '100%' })
  })

  gsap.set(imageTitle, { scale: 0.6, opacity: 0 })
  gsap.set(image, { scale: 0.6 })

  titleSplit.words.forEach((word) => {
    gsap.to(word, {
      y: '0%',
      duration: 1.2,
      ease: customEase,
      scrollTrigger: { trigger: section, start: 'top 30%' },
    })
  })

  paragraphSplit.words.forEach((word) => {
    gsap.to(word, {
      y: '0%',
      duration: 1.2,
      ease: customEase,
      scrollTrigger: { trigger: section, start: 'top 30%' },
    })
  })

  gsap.to(imageTitle, {
    opacity: 1,
    scale: 1,
    scrollTrigger: {
      trigger: imageRelativeWrapper,
      start: 'top -30%',
      end: 'bottom 30%',
      scrub: 1,
    },
  })

  gsap.to(image, {
    scale: 1,
    scrollTrigger: {
      trigger: imageRelativeWrapper,
      start: 'top -10%',
      end: 'bottom 30%',
      scrub: 1,
    },
  })

  ScrollTrigger.refresh()
}

function initBlueSection() {
  const sectionBlue = document.querySelector('.about_blue')
  const imageOverlays = document.querySelectorAll(
    '.about_blue_center_image_overlay'
  )
  const topParagraph = document.querySelector('.about_blue_top_paragraph')
  const bottomParagraph = document.querySelector('.about_blue_bottom_paragraph')
  // console.log(imageOverlays)

  const topParagraphSplit = new SplitType(topParagraph, {
    types: 'lines, words',
  })
  const bottomParagraphSplit = new SplitType(bottomParagraph, {
    types: 'lines, words',
  })

  topParagraphSplit.words.forEach((word) => {
    gsap.set(word, { y: '100%' })
  })

  bottomParagraphSplit.words.forEach((word) => {
    gsap.set(word, { y: '100%' })
  })

  gsap.set(imageOverlays, { height: '100%' })

  gsap.to(topParagraphSplit.words, {
    y: '0%',
    duration: 1.2,
    ease: customEase,
    scrollTrigger: { trigger: sectionBlue, start: 'top 30%' },
  })

  gsap.to(bottomParagraphSplit.words, {
    y: '0%',
    duration: 1.2,
    ease: customEase,
    scrollTrigger: { trigger: sectionBlue, start: 'top 30%' },
  })

  imageOverlays.forEach((imageOverlay) => {
    gsap.to(imageOverlay, {
      height: '0%',
      duration: 1.2,
      ease: customEase,
      scrollTrigger: { trigger: sectionBlue, start: 'top 30%' },
    })
  })
}

function initSliderSection() {
  const section = document.querySelector('.about_slider')
  const title = document.querySelector('.about_slider_title')
  const paragraph = document.querySelector('.about_slider_paragraph')

  const titleSplit = new SplitType(title, { types: 'lines, words' })
  const paragraphSplit = new SplitType(paragraph, { types: 'lines, words' })

  titleSplit.words.forEach((word) => {
    gsap.set(word, { y: '100%' })
  })

  paragraphSplit.words.forEach((word) => {
    gsap.set(word, { y: '100%' })
  })

  gsap.to(titleSplit.words, {
    y: '0%',
    duration: 1.2,
    ease: customEase,
    scrollTrigger: { trigger: section, start: 'top 30%' },
  })

  gsap.to(paragraphSplit.words, {
    y: '0%',
    duration: 1.2,
    ease: customEase,
    scrollTrigger: { trigger: paragraph, start: 'bottom 90%' },
  })
}
