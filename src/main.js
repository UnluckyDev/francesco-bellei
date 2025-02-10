import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

import { getPageInit, initLenis } from './utils/utils'

gsap.registerPlugin(ScrollTrigger)

const body = document.querySelector('body')
const isMobile = window.innerWidth <= 991 ? true : false

window.addEventListener('DOMContentLoaded', () => {
  initLenis()
  getPageInit()
})
