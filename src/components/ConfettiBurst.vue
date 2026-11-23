<template>
  <!-- Confetti that bursts out from the centre of its parent (which must be
       positioned) and falls away. Pieces are plain spans with CSS variables;
       a burst is removed once its animation is over. -->
  <span class="pointer-events-none absolute inset-0 overflow-visible" aria-hidden="true">
    <span
      v-for="p in pieces"
      :key="p.id"
      class="confetti-piece absolute top-1/2 left-1/2"
      :style="{
        '--x': `${p.x}px`,
        '--y': `${p.y}px`,
        '--r': `${p.r}deg`,
        '--d': `${p.delay}ms`,
        width: `${p.w}px`,
        height: `${p.h}px`,
        background: p.color,
        borderRadius: p.round ? '9999px' : '1px',
      }"
    />
  </span>
</template>

<script setup>
import { ref } from 'vue'

// The app's water and medal colours, plus white.
const COLORS = ['#ffffff', '#66d2f4', '#26b9e8', '#0aa0d6', '#e9b949', '#b6c0cc', '#cd8b53']
const COUNT = 36
const LIFETIME_MS = 1600

const pieces = ref([])
let nextId = 0

function burst() {
  if (matchMedia('(prefers-reduced-motion: reduce)').matches) return
  const batch = Array.from({ length: COUNT }, () => {
    // Mostly up and out, so it reads as a pop above the time before falling.
    const angle = -Math.PI / 2 + (Math.random() - 0.5) * Math.PI * 1.6
    const dist = 50 + Math.random() * 90
    const round = Math.random() < 0.3
    return {
      id: nextId++,
      x: Math.cos(angle) * dist,
      y: Math.sin(angle) * dist,
      r: (Math.random() - 0.5) * 900,
      delay: Math.random() * 90,
      w: round ? 6 : 4 + Math.random() * 4,
      h: round ? 6 : 8 + Math.random() * 6,
      round,
      color: COLORS[Math.floor(Math.random() * COLORS.length)],
    }
  })
  pieces.value.push(...batch)
  const ids = new Set(batch.map((p) => p.id))
  setTimeout(() => {
    pieces.value = pieces.value.filter((p) => !ids.has(p.id))
  }, LIFETIME_MS)
}

defineExpose({ burst })
</script>

<style scoped>
.confetti-piece {
  opacity: 0;
  animation: confetti 1.4s cubic-bezier(0.15, 0.7, 0.35, 1) var(--d) forwards;
}

/* Out to (--x, --y) fast, then fall about 70px while spinning and fading. */
@keyframes confetti {
  0% {
    opacity: 1;
    transform: translate(-50%, -50%) rotate(0deg) scale(0.4);
  }
  35% {
    opacity: 1;
    transform: translate(calc(-50% + var(--x)), calc(-50% + var(--y))) rotate(calc(var(--r) * 0.4)) scale(1);
  }
  100% {
    opacity: 0;
    transform: translate(calc(-50% + var(--x) * 1.15), calc(-50% + var(--y) + 70px)) rotate(var(--r)) scale(0.9);
  }
}
</style>
