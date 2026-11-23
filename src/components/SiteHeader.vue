<template>
  <header
    class="fixed inset-x-0 top-0 z-50 transition-[background-color,box-shadow] duration-300"
    :class="scrolled ? 'glass shadow-[0_1px_0_var(--ui-border)]' : ''"
  >
    <nav class="mx-auto flex h-16 max-w-6xl items-center gap-2 px-5">
      <a href="#top" class="mr-auto flex items-center gap-2.5" aria-label="Svøm!">
        <img src="../assets/icon.png" alt="" width="36" height="36" class="size-9 rounded-[0.6rem] shadow-sm" />
        <span class="font-display text-xl font-bold tracking-tight text-highlighted">Svøm!</span>
      </a>

      <div class="hidden items-center gap-1 md:flex">
        <UButton
          v-for="link in links"
          :key="link.href"
          :href="link.href"
          :label="link.label"
          color="neutral"
          variant="link"
          class="text-toned hover:text-highlighted"
        />
      </div>

      <USeparator orientation="vertical" class="mx-2 hidden h-5 md:block" />
      <LanguageSwitch />
      <UColorModeButton />
      <UButton
        :href="APP_STORE_URL"
        target="_blank"
        :label="t.appStore.big"
        class="ml-1 hidden sm:inline-flex"
      >
        <template #leading>
          <AppleLogo class="size-5 shrink-0" />
        </template>
      </UButton>
    </nav>
  </header>
</template>

<script setup>
import { computed, onBeforeUnmount, onMounted, ref } from 'vue'
import { APP_STORE_URL } from '../config'
import { useI18n } from '../composables/useI18n'
import LanguageSwitch from './LanguageSwitch.vue'
import AppleLogo from './AppleLogo.vue'

const { t } = useI18n()

const links = computed(() => [
  { href: '#features', label: t.value.nav.features },
  { href: '#gallery', label: t.value.nav.gallery },
  { href: '#pricing', label: t.value.nav.pricing },
  { href: '#faq', label: t.value.nav.faq },
])

const scrolled = ref(false)
const onScroll = () => (scrolled.value = window.scrollY > 8)
onMounted(() => {
  onScroll()
  window.addEventListener('scroll', onScroll, { passive: true })
})
onBeforeUnmount(() => window.removeEventListener('scroll', onScroll))
</script>
