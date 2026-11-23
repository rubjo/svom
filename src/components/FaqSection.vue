<template>
  <section id="faq" class="py-24 sm:py-32">
    <div class="mx-auto grid max-w-6xl gap-12 px-5 lg:grid-cols-[0.8fr_1.2fr]">
      <div v-reveal>
        <p class="text-sm font-semibold tracking-[0.2em] text-primary uppercase">{{ t.faq.kicker }}</p>
        <h2 class="mt-3 font-display text-4xl font-bold tracking-tight text-highlighted sm:text-5xl">
          {{ t.faq.title }}
        </h2>
        <p class="mt-5 text-toned">
          <a :href="SUPPORT_URL" target="_blank" rel="noopener" class="inline-flex items-center gap-1.5 font-medium text-primary hover:underline">
            <UIcon name="i-lucide-life-buoy" class="size-4" />
            {{ t.footer.support }}
          </a>
        </p>
      </div>
      <div v-reveal="100" class="rounded-3xl bg-elevated px-6 shadow-(--card-shadow) ring-1 ring-default sm:px-8">
        <UAccordion
          :items="t.faq.items"
          :ui="{
            trigger: 'py-5 text-base font-semibold text-highlighted',
            body: 'pb-5 text-base leading-relaxed text-toned',
          }"
        />
      </div>
    </div>
  </section>
</template>

<script setup>
import { SUPPORT_URL } from '../config'
import { useI18n } from '../composables/useI18n'

const { t } = useI18n()
</script>
