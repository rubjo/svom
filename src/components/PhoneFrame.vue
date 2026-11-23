<template>
  <div
    class="relative aspect-[1206/2622] rounded-[2.6rem] bg-abyss-950 p-[0.55rem] shadow-(--phone-shadow) ring-1 ring-abyss-900/10 dark:ring-white/10"
  >
    <!-- Side buttons -->
    <span class="absolute top-[18%] -left-[3px] h-[7%] w-[3px] rounded-l bg-abyss-800" />
    <span class="absolute top-[27%] -left-[3px] h-[7%] w-[3px] rounded-l bg-abyss-800" />
    <span class="absolute top-[22%] -right-[3px] h-[11%] w-[3px] rounded-r bg-abyss-800" />
    <div class="relative size-full overflow-hidden rounded-[2.1rem] bg-abyss-900">
      <!-- The reel, in the page's theme. Keyed on the theme so a toggle loads
           the other file; the poster covers the gap while it does. -->
      <video
        v-if="playVideo"
        :key="theme"
        :src="`${BASE}video/${video}-${theme}.mp4`"
        :poster="`${BASE}video/${video}-${theme}.jpg`"
        :aria-label="alt"
        autoplay
        muted
        loop
        playsinline
        disablepictureinpicture
        preload="auto"
        class="size-full object-cover object-top"
      />
      <UColorModeImage
        v-else
        :light="`${BASE}shots/${shot}-light.png`"
        :dark="`${BASE}shots/${shot}-dark.png`"
        :alt="alt"
        width="1206"
        height="2622"
        :loading="eager ? 'eager' : 'lazy'"
        decoding="async"
        class="size-full object-cover object-top"
      />
      <!-- Dynamic Island -->
      <span class="absolute top-[1.4%] left-1/2 h-[3.1%] w-[30%] -translate-x-1/2 rounded-full bg-black" />
      <!-- Glass sheen -->
      <span
        class="pointer-events-none absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-transparent"
      />
    </div>
  </div>
</template>

<script setup>
import { computed, onMounted, ref } from 'vue'
import { useIsDark } from '../composables/useIsDark'

// public/ files sit under the site's base path (/svom/ on GitHub Pages).
const BASE = import.meta.env.BASE_URL

const props = defineProps({
  /** Screenshot name in public/shots, without the -light/-dark suffix. */
  shot: { type: String, required: true },
  /**
   * Optional reel name in public/video (<name>-light/-dark .mp4 and .jpg).
   * Played muted on a loop; the screenshot stands in with reduced motion.
   */
  video: { type: String, default: '' },
  alt: { type: String, default: '' },
  eager: { type: Boolean, default: false },
})

const isDark = useIsDark()
const theme = computed(() => (isDark.value ? 'dark' : 'light'))

const reducedMotion = ref(false)
onMounted(() => (reducedMotion.value = matchMedia('(prefers-reduced-motion: reduce)').matches))
const playVideo = computed(() => !!props.video && !reducedMotion.value)
</script>
