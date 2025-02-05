import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

import { getPageInit } from './utils/utils'

gsap.registerPlugin(ScrollTrigger)

const body = document.querySelector('body')
const isMobile = window.innerWidth <= 991 ? true : false

window.addEventListener('DOMContentLoaded', () => {
  getPageInit()
})
