import { onBeforeUnmount, onMounted, ref } from 'vue'

/**
 * A race clock for the hero: counts up like the app's live card ("19.7"),
 * stops at `finish` seconds, holds the result for `holdMs`, then restarts.
 * With reduced motion it shows a still mid-race time until `restart()` is
 * called (a visitor's tap), which always runs a race from 0.
 */
export function useStopwatch({ finish = 52.31, holdMs = 3600 } = {}) {
  const elapsed = ref(19.7)
  const finished = ref(false)
  let raf = 0
  let start = 0
  let holdTimer = 0

  function tick(now) {
    if (!start) start = now
    const s = (now - start) / 1000
    if (s >= finish) {
      elapsed.value = finish
      finished.value = true
      holdTimer = setTimeout(restart, holdMs)
      return
    }
    elapsed.value = s
    raf = requestAnimationFrame(tick)
  }

  /** Back to 0 and race again, from wherever the clock is. */
  function restart() {
    cancelAnimationFrame(raf)
    clearTimeout(holdTimer)
    elapsed.value = 0
    finished.value = false
    start = 0
    raf = requestAnimationFrame(tick)
  }

  onMounted(() => {
    if (matchMedia('(prefers-reduced-motion: reduce)').matches) return
    restart()
  })
  onBeforeUnmount(() => {
    cancelAnimationFrame(raf)
    clearTimeout(holdTimer)
  })

  return { elapsed, finished, restart }
}

/** Running: "19.7" (the live card). Finished: "52,31" (a result). */
export function formatClock(seconds, finished) {
  if (finished) return seconds.toFixed(2).replace('.', ',')
  return (Math.floor(seconds * 10) / 10).toFixed(1)
}
