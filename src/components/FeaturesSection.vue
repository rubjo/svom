<template>
  <section id="features" class="relative py-24 sm:py-32">
    <div class="mx-auto max-w-6xl px-5">
      <div v-reveal class="mx-auto max-w-2xl text-center">
        <p class="text-sm font-semibold tracking-[0.2em] text-primary uppercase">{{ t.features.kicker }}</p>
        <h2 class="mt-3 font-display text-4xl font-bold tracking-tight text-balance text-highlighted sm:text-5xl">
          {{ t.features.title }}
        </h2>
        <p class="mt-4 text-lg text-toned">{{ t.features.lead }}</p>
      </div>

      <!-- One row per lane: the big number is the starting block. -->
      <div class="mt-20 space-y-28 sm:space-y-36">
        <article
          v-for="(row, i) in t.features.rows"
          :key="row.kicker"
          class="grid items-center gap-12 lg:grid-cols-2 lg:gap-20"
        >
          <div v-reveal class="relative mx-auto w-[min(13.6rem,56vw)] lg:w-[15.2rem]" :class="i % 2 ? 'lg:order-2' : ''">
            <span
              class="pointer-events-none absolute -top-14 font-time text-[11rem] leading-none font-bold text-primary/10 select-none"
              :class="i % 2 ? '-right-24' : '-left-24'"
              aria-hidden="true"
              >{{ i + 1 }}</span
            >
            <PhoneFrame :shot="shots[i]" :alt="row.title" />
          </div>

          <div v-reveal="120" class="max-w-xl">
            <div class="flex items-center gap-3">
              <span
                class="grid size-9 place-items-center rounded-full bg-primary font-time text-base font-bold text-white"
                >{{ i + 1 }}</span
              >
              <p class="text-sm font-semibold tracking-[0.2em] text-primary uppercase">{{ row.kicker }}</p>
            </div>
            <h3 class="mt-5 font-display text-3xl font-bold tracking-tight text-balance text-highlighted sm:text-4xl">
              {{ row.title }}
            </h3>
            <p class="mt-4 text-lg leading-relaxed text-toned">{{ row.text }}</p>
            <ul class="mt-8 space-y-3.5">
              <li v-for="p in row.points" :key="p" class="flex items-start gap-3 text-default">
                <UIcon name="i-lucide-circle-check" class="mt-0.5 size-5 shrink-0 text-primary" />
                {{ p }}
              </li>
            </ul>
          </div>
        </article>
      </div>

      <div class="lane-rope mx-auto mt-32 max-w-4xl opacity-80" aria-hidden="true" />

      <ul class="mt-20 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        <li
          v-for="(f, i) in t.features.grid"
          :key="f.title"
          v-reveal="(i % 3) * 80"
          class="group rounded-3xl bg-elevated p-6 shadow-(--card-shadow) ring-1 ring-default transition duration-300 hover:-translate-y-1 hover:ring-primary/40"
        >
          <span
            class="grid size-11 place-items-center rounded-2xl bg-primary/10 text-primary transition group-hover:bg-primary group-hover:text-white"
          >
            <UIcon :name="f.icon" class="size-5" />
          </span>
          <h3 class="mt-5 text-lg font-semibold text-highlighted">{{ f.title }}</h3>
          <p class="mt-1.5 leading-relaxed text-toned">{{ f.text }}</p>
        </li>
      </ul>
    </div>
  </section>
</template>

<script setup>
import { useI18n } from '../composables/useI18n'
import PhoneFrame from './PhoneFrame.vue'

const { t } = useI18n()

/** Screenshot per feature row, in the order of t.features.rows. */
const shots = ['event-live', 'swimmer-splitdev', 'medal-hero']
</script>
