<template>
  <section id="top" class="relative overflow-hidden pt-28 pb-20 sm:pt-36 lg:pb-28">
    <div class="mx-auto grid max-w-6xl items-center gap-16 px-5 lg:grid-cols-[1.15fr_0.85fr]">
      <!-- Copy -->
      <div class="max-w-2xl">
        <UBadge
          variant="subtle"
          size="lg"
          class="animate-rise gap-2 px-3 font-semibold tracking-wide uppercase ring-primary/25"
        >
          <span class="size-2 animate-live-dot rounded-full bg-error motion-reduce:animate-none" />
          {{ t.hero.eyebrow }}
        </UBadge>

        <h1
          class="mt-6 animate-rise font-display text-[clamp(3.2rem,8vw,6.25rem)] leading-[0.92] font-bold tracking-[-0.045em] text-highlighted [animation-delay:80ms]"
        >
          {{ t.hero.title1 }}<br />
          <span class="text-shine">{{ t.hero.title2 }}</span>
        </h1>

        <p class="mt-7 max-w-xl animate-rise text-lg leading-relaxed text-toned sm:text-xl [animation-delay:160ms]">
          {{ t.hero.lead }}
        </p>

        <div class="mt-9 flex animate-rise flex-wrap items-center gap-x-6 gap-y-4 [animation-delay:240ms]">
          <AppStoreButton />
          <div class="text-sm leading-snug">
            <p class="flex items-center gap-1.5 font-semibold text-highlighted">
              <UIcon name="i-lucide-gift" class="size-4 text-primary" />
              {{ t.hero.trial }}
            </p>
            <p class="text-muted">{{ t.hero.platforms }}</p>
          </div>
        </div>

        <ul class="mt-14 grid animate-rise grid-cols-2 gap-x-6 gap-y-5 sm:grid-cols-4 [animation-delay:320ms]">
          <li v-for="h in t.highlights" :key="h.title" class="border-l-2 border-primary/40 pl-3">
            <p class="flex items-center gap-1.5 text-sm font-semibold text-highlighted">
              <UIcon :name="h.icon" class="size-4 text-primary" />
              {{ h.title }}
            </p>
            <p class="mt-1 text-[0.8125rem] leading-snug text-muted">{{ h.text }}</p>
          </li>
        </ul>
      </div>

      <!-- Phone with the live card floating off it -->
      <!-- mb: room for the live card, which hangs below the phone. -->
      <div class="relative mx-auto mb-28 w-[min(19rem,78vw)] animate-rise [animation-delay:200ms] lg:mb-24 lg:w-[21rem]">
        <div
          class="absolute -inset-16 -z-10 rounded-full bg-[radial-gradient(closest-side,var(--shell-glow),transparent)] blur-2xl"
        />
        <div class="animate-float motion-reduce:animate-none">
          <PhoneFrame shot="event-live-hero" video="hero" :alt="t.features.rows[0].title" eager />
        </div>

        <!-- Its top edge sits 1rem above the phone's bottom edge, so it only
             overlaps a sliver of the screen. -->
        <div
          class="bg-hero absolute top-[calc(100%-1rem)] -left-6 w-[15.5rem] rounded-3xl p-5 text-white shadow-2xl shadow-lane-900/40 ring-1 ring-white/15 sm:-left-20 sm:w-[17rem]"
        >
          <p class="flex items-center gap-2 text-xs font-semibold tracking-[0.18em] uppercase" aria-hidden="true">
            <span class="size-2 animate-live-dot rounded-full bg-white motion-reduce:animate-none" />
            Live
          </p>
          <div class="mt-2 flex items-end justify-between gap-3">
            <div class="min-w-0" aria-hidden="true">
              <p class="text-[0.95rem] leading-tight font-bold">{{ t.heroCard.event }}</p>
              <p class="mt-1 text-sm text-white/75">{{ t.heroCard.heat }}</p>
            </div>
            <!-- Easter egg: a tap fires confetti and starts the race again. -->
            <button
              type="button"
              class="relative -m-1 cursor-pointer rounded-xl p-1 font-time text-[2.6rem] leading-none tabular-nums transition active:scale-95 focus-visible:outline-2 focus-visible:outline-white"
              :aria-label="t.heroCard.restart"
              @click="onClockClick"
            >
              {{ formatClock(elapsed, finished) }}
              <ConfettiBurst ref="confetti" />
            </button>
          </div>
        </div>

        <Transition
          enter-from-class="opacity-0 scale-75 translate-y-2"
          leave-to-class="opacity-0 scale-90"
          enter-active-class="transition duration-500 ease-[cubic-bezier(.2,1.4,.4,1)]"
          leave-active-class="transition duration-300"
        >
          <div
            v-if="finished"
            class="absolute top-[38%] -right-6 flex items-center gap-2 rounded-full bg-elevated py-2 pr-4 pl-2 shadow-xl ring-1 ring-default sm:-right-14"
            aria-hidden="true"
          >
            <span class="grid size-7 place-items-center rounded-full bg-gold/20 text-gold">
              <UIcon name="i-lucide-star" class="size-4" />
            </span>
            <span class="text-sm font-semibold text-highlighted">{{ t.heroCard.pr }}</span>
            <span class="font-time text-sm text-success tabular-nums">−0,29</span>
          </div>
        </Transition>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue'
import { useI18n } from '../composables/useI18n'
import { formatClock, useStopwatch } from '../composables/useStopwatch'
import AppStoreButton from './AppStoreButton.vue'
import ConfettiBurst from './ConfettiBurst.vue'
import PhoneFrame from './PhoneFrame.vue'

const { t } = useI18n()
const { elapsed, finished, restart } = useStopwatch()

const confetti = ref(null)
function onClockClick() {
  confetti.value?.burst()
  restart()
}
</script>
