import { onBeforeUnmount, onMounted, ref } from 'vue'

/**
 * Whether the page is in dark mode right now. The colour-mode button toggles
 * .dark on <html> (and index.html sets it before first paint), so this just
 * follows that class.
 */
export function useIsDark() {
  const read = () => document.documentElement.classList.contains('dark')
  const isDark = ref(read())
  let observer = null

  onMounted(() => {
    isDark.value = read()
    observer = new MutationObserver(() => (isDark.value = read()))
    observer.observe(document.documentElement, { attributes: true, attributeFilter: ['class'] })
  })
  onBeforeUnmount(() => observer?.disconnect())

  return isDark
}
