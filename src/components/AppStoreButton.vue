<template>
  <a
    :href="APP_STORE_URL"
    target="_blank"
    rel="noopener"
    class="group inline-flex items-center gap-3 rounded-2xl px-5 py-2.5 transition duration-300 hover:-translate-y-0.5 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
    :class="
      inverted
        ? 'bg-white text-abyss-950 shadow-lg shadow-black/20 hover:shadow-xl'
        : 'bg-abyss-950 text-white shadow-lg shadow-abyss-950/25 ring-1 ring-white/10 hover:shadow-xl hover:shadow-lane-500/25 dark:bg-white dark:text-abyss-950'
    "
  >
    <AppleLogo class="size-7 shrink-0" />
    <span class="flex flex-col text-left leading-none">
      <span class="text-[0.7rem] font-medium opacity-80">{{ t.appStore.small }}</span>
      <span class="font-display text-xl font-semibold tracking-tight">{{ t.appStore.big }}</span>
    </span>
  </a>
</template>

<script setup>
import { APP_STORE_URL } from '../config'
import { useI18n } from '../composables/useI18n'
import AppleLogo from './AppleLogo.vue'

defineProps({
  /** White badge, for use on the lit-water (bg-hero) surface. */
  inverted: { type: Boolean, default: false },
})

const { t } = useI18n()
</script>
