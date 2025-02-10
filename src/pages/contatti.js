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
  initButtons()
  initSubmitProxy()
}

function initSubmitProxy() {
  const fakeButton = document.querySelector('[data-form="fake-btn"]')
  const realButton = document.querySelector('[data-form="submit-btn"]')

  fakeButton.addEventListener('click', () => {
    realButton.click()
  })
}
