import { ref } from 'vue'

/**
 * One full-screen screenshot viewer for the whole page. A section opens it
 * with its own list, so the arrows step through that section's screenshots.
 * Each item: { shot, caption } – shot as in public/shots, without -light/-dark.
 */
const items = ref([])
const index = ref(0)
const open = ref(false)

export function useLightbox() {
  function show(list, at = 0) {
    items.value = list
    index.value = at
    open.value = true
  }
  function step(dir) {
    const n = items.value.length
    if (n) index.value = (index.value + dir + n) % n
  }
  return { items, index, open, show, step }
}
