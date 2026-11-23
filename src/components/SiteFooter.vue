<template>
  <footer class="px-5 pb-10">
    <div
      v-reveal
      class="bg-hero relative mx-auto max-w-6xl overflow-hidden rounded-[2.5rem] px-8 py-16 text-center text-white shadow-2xl shadow-lane-800/30 sm:py-20"
    >
      <div class="lane-rope absolute inset-x-0 top-10 opacity-40" aria-hidden="true" />
      <div class="lane-rope absolute inset-x-0 bottom-10 opacity-40" aria-hidden="true" />
      <img src="../assets/icon.png" alt="" width="72" height="72" class="mx-auto size-18 rounded-[1.1rem] shadow-xl" />
      <h2 class="mt-7 font-display text-4xl font-bold tracking-tight sm:text-5xl">{{ t.cta.title }}</h2>
      <p class="mt-3 text-lg text-white/80">{{ t.cta.text }}</p>
      <div class="mt-9 flex justify-center">
        <AppStoreButton inverted />
      </div>
    </div>

    <div class="mx-auto mt-10 flex max-w-6xl flex-col items-center justify-between gap-4 text-sm text-muted sm:flex-row">
      <p class="flex items-center gap-2">
        <img src="../assets/icon.png" alt="" width="20" height="20" class="size-5 rounded-md" />
        © {{ year }} Svøm!
      </p>
      <nav class="flex gap-6">
        <a :href="SUPPORT_URL" target="_blank" rel="noopener" class="hover:text-highlighted">{{ t.footer.support }}</a>
        <a :href="TERMS_URL" target="_blank" rel="noopener" class="hover:text-highlighted">{{ t.footer.terms }}</a>
        <a :href="PRIVACY_URL" target="_blank" rel="noopener" class="hover:text-highlighted">{{ t.footer.privacy }}</a>
      </nav>
    </div>
  </footer>
</template>

<script setup>
import { PRIVACY_URL, SUPPORT_URL, TERMS_URL } from '../config'
import { useI18n } from '../composables/useI18n'
import AppStoreButton from './AppStoreButton.vue'

const { t } = useI18n()
const year = new Date().getFullYear()
</script>
