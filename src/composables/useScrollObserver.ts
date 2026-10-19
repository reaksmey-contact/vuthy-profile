import { ref, onMounted, onUnmounted } from 'vue'

export function useScrollObserver() {
  const activeSection = ref<string>('hero')
  const scrollProgress = ref<number>(0)
  const isScrolled = ref<boolean>(false)

  let observer: IntersectionObserver | null = null
  let sectionObserver: IntersectionObserver | null = null

  const updateScroll = () => {
    const scrollTop = window.scrollY || document.documentElement.scrollTop
    const docHeight = document.documentElement.scrollHeight - window.innerHeight
    const progress = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0
    scrollProgress.value = Math.min(100, Math.max(0, progress))
    isScrolled.value = scrollTop > 30
  }

  const initRevealObserver = () => {
    if (typeof window === 'undefined') return

    // IntersectionObserver for reveal animations
    observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-revealed')
          }
        })
      },
      {
        root: null,
        rootMargin: '0px 0px -60px 0px',
        threshold: 0.12
      }
    )

    const revealElements = document.querySelectorAll('.reveal-init')
    revealElements.forEach((el) => observer?.observe(el))

    // Section active state observer
    const sections = document.querySelectorAll('section[id]')
    sectionObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            activeSection.value = entry.target.id
          }
        })
      },
      {
        root: null,
        rootMargin: '-20% 0px -60% 0px',
        threshold: 0.1
      }
    )

    sections.forEach((sec) => sectionObserver?.observe(sec))
  }

  const scrollTo = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (!element) return

    const navHeight = 84
    const elementPosition = element.getBoundingClientRect().top
    const offsetPosition = elementPosition + window.pageYOffset - navHeight

    window.scrollTo({
      top: offsetPosition,
      behavior: 'smooth'
    })

    activeSection.value = sectionId
  }

  onMounted(() => {
    window.addEventListener('scroll', updateScroll, { passive: true })
    updateScroll()
    setTimeout(() => {
      initRevealObserver()
    }, 100)
  })

  onUnmounted(() => {
    window.removeEventListener('scroll', updateScroll)
    if (observer) {
      observer.disconnect()
    }
    if (sectionObserver) {
      sectionObserver.disconnect()
    }
  })

  return {
    activeSection,
    scrollProgress,
    isScrolled,
    scrollTo,
    initRevealObserver
  }
}
