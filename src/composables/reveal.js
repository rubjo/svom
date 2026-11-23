/**
 * v-reveal: fade an element up the first time it scrolls into view (see
 * .reveal in main.css). `v-reveal="120"` delays it 120 ms, for staggering.
 */
const observer =
  typeof IntersectionObserver !== 'undefined'
    ? new IntersectionObserver(
        (entries) => {
          for (const entry of entries) {
            if (!entry.isIntersecting) continue
            entry.target.classList.add('is-visible')
            observer.unobserve(entry.target)
          }
        },
        { rootMargin: '0px 0px -10% 0px' },
      )
    : null

export const reveal = {
  mounted(el, { value }) {
    if (!observer) return
    el.classList.add('reveal')
    if (value) el.style.transitionDelay = `${value}ms`
    observer.observe(el)
  },
  unmounted(el) {
    observer?.unobserve(el)
  },
}
