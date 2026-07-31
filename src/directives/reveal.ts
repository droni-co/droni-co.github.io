import type { Directive } from 'vue'

const observer = new IntersectionObserver(
  (entries) => {
    for (const entry of entries) {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible')
        observer.unobserve(entry.target)
      }
    }
  },
  { threshold: 0.15, rootMargin: '0px 0px -40px 0px' },
)

/**
 * v-reveal="'left' | 'right' | undefined"
 * Adds a data-reveal attribute consumed by CSS + toggles `.is-visible` on scroll-in.
 */
export const vReveal: Directive<HTMLElement, 'left' | 'right' | undefined> = {
  mounted(el, binding) {
    el.setAttribute('data-reveal', binding.value ?? '')
    if (binding.arg) el.style.transitionDelay = binding.arg
    observer.observe(el)
  },
  unmounted(el) {
    observer.unobserve(el)
  },
}
