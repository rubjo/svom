<template>
  <section id="gallery" class="relative overflow-hidden py-24 sm:py-32">
    <div class="absolute inset-x-0 top-0 -z-10 h-full bg-muted/50" />
    <div class="mx-auto flex max-w-6xl items-end justify-between gap-6 px-5">
      <div v-reveal>
        <p class="text-sm font-semibold tracking-[0.2em] text-primary uppercase">{{ t.gallery.kicker }}</p>
        <h2 class="mt-3 font-display text-4xl font-bold tracking-tight text-highlighted sm:text-5xl">
          {{ t.gallery.title }}
        </h2>
      </div>
      <div class="hidden shrink-0 gap-2 sm:flex">
        <UButton icon="i-lucide-arrow-left" color="neutral" variant="outline" size="lg" square @click="scroll(-1)" />
        <UButton icon="i-lucide-arrow-right" color="neutral" variant="outline" size="lg" square @click="scroll(1)" />
      </div>
    </div>

    <ul
      ref="track"
      class="mt-14 flex snap-x snap-mandatory gap-8 overflow-x-auto px-[max(1.25rem,calc((100vw-72rem)/2+1.25rem))] pb-10 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
    >
      <li v-for="shot in shots" :key="shot" class="w-[min(14.4rem,57.6vw)] shrink-0 snap-center sm:snap-start">
        <PhoneFrame :shot="shot" :alt="t.gallery.captions[shot]" />
        <p class="mt-5 text-center text-sm font-medium text-toned">{{ t.gallery.captions[shot] }}</p>
      </li>
    </ul>
  </section>
</template>

<script setup>
import { ref } from 'vue'
import { useI18n } from '../composables/useI18n'
import PhoneFrame from './PhoneFrame.vue'

const { t } = useI18n()

const shots = [
  'home',
  'race-detail',
  'swimmer-trend',
  'swimmer-heatmap',
  'swimmer-gems',
  'swimmer-qual',
  'club-panel',
  'club-swimmers',
  'results',
  'swimmer-radar',
]

const track = ref(null)
function scroll(dir) {
  const el = track.value
  if (!el) return
  el.scrollBy({ left: dir * el.clientWidth * 0.8, behavior: 'smooth' })
}
</script>
