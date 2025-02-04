import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { CustomEase } from 'gsap/CustomEase'
import { initMenu, initButtons } from '../utils/utils'
import { customEase } from '../utils/utils'
import SplitType from 'split-type'

gsap.registerPlugin(ScrollTrigger, CustomEase)

const isMobile = window.innerWidth <= 991 ? true : false

export function initChiSiamo() {
  initMenu()
  introAnimation()
  initButtons()
}

function introAnimation() {}
