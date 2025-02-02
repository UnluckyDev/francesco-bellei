import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export function getPageInit() {
  let path = window.location.pathname
  // console.log('path', path)

  if (path.includes('/projects/')) path = '/project'
  // if (path.includes('/prodotti/')) path = '/prodotti'
  // if (path.includes('/post/')) path = '/articoli'

  switch (path) {
    case '/':
      // initHomepage()
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
