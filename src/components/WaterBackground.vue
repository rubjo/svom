<template>
  <!-- Behind everything, never in the way of a click. Fades in once the
       texture has loaded, so it never pops. -->
  <canvas
    ref="canvas"
    class="pointer-events-none fixed inset-0 -z-10 size-full opacity-0 transition-opacity duration-[2500ms] ease-out"
    :class="{ 'opacity-100': ready }"
    aria-hidden="true"
  />
</template>

<script setup>
import { onBeforeUnmount, onMounted, ref, watch } from 'vue'
import causticsUrl from '../assets/water-caustics.png'
import { useIsDark } from '../composables/useIsDark'
import { createWaterSurface } from '../water/waterSurface'

const canvas = ref(null)
const ready = ref(false)
const isDark = useIsDark()
let surface = null
let cancelled = false

watch(isDark, (dark) => surface?.setDark(dark))

/** Load the texture after the page itself, so it never delays the hero. */
function whenIdle() {
  return new Promise((resolve) => {
    const go = () =>
      window.requestIdleCallback ? requestIdleCallback(resolve, { timeout: 2000 }) : setTimeout(resolve, 300)
    if (document.readyState === 'complete') go()
    else window.addEventListener('load', go, { once: true })
  })
}

onMounted(async () => {
  await whenIdle()
  const img = new Image()
  img.src = causticsUrl
  try {
    await img.decode()
  } catch {
    return
  }
  if (cancelled || !canvas.value) return

  surface = createWaterSurface(canvas.value, img, {
    dark: isDark.value,
    still: matchMedia('(prefers-reduced-motion: reduce)').matches,
  })
  if (!surface) return
  ready.value = true
})

onBeforeUnmount(() => {
  cancelled = true
  surface?.destroy()
})
</script>
