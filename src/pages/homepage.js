import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { CustomEase } from 'gsap/CustomEase'

gsap.registerPlugin(ScrollTrigger, CustomEase)

const isMobile = window.innerWidth <= 991 ? true : false
const customEase = CustomEase.create('custom', 'M0,0 C1,0 0,1 1,1')

export function initHomepage() {

}