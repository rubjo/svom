<template>
  <UModal
    v-model:open="open"
    fullscreen
    :title="current?.caption || ''"
    :ui="{ content: 'bg-abyss-950/92 backdrop-blur-xl' }"
  >
    <template #content="{ close }">
      <div
        class="relative flex size-full flex-col items-center justify-center gap-5 px-4 py-6 text-white select-none"
        @click.self="close"
        @keydown.left.prevent="step(-1)"
        @keydown.right.prevent="step(1)"
        @pointerdown="onPointerDown"
        @pointerup="onPointerUp"
      >
        <!-- The whole screen in view: as tall as the window allows, never
             wider than the phone's proportions. -->
        <Transition
          mode="out-in"
          enter-from-class="opacity-0 scale-[0.97]"
          leave-to-class="opacity-0 scale-[0.97]"
          enter-active-class="transition duration-200 ease-out"
          leave-active-class="transition duration-150 ease-in"
        >
          <img
            v-if="current"
            :key="current.shot + theme"
            :src="`${BASE}shots/${current.shot}-${theme}.png`"
            :alt="current.caption"
            width="1206"
            height="2622"
            draggable="false"
            class="h-[calc(100dvh-8rem)] max-h-[2622px] w-auto max-w-full rounded-[2rem] object-contain shadow-2xl shadow-black/60 ring-1 ring-white/10"
          />
        </Transition>

        <p class="flex items-center gap-3 text-sm text-white/80">
          <span>{{ current?.caption }}</span>
          <span v-if="items.length > 1" class="font-time text-white/50 tabular-nums"
            >{{ index + 1 }}/{{ items.length }}</span
          >
        </p>

        <template v-if="items.length > 1">
          <UButton
            icon="i-lucide-chevron-left"
            color="neutral"
            variant="ghost"
            size="xl"
            square
            :aria-label="t.lightbox.prev"
            class="absolute top-1/2 left-3 hidden -translate-y-1/2 text-white hover:bg-white/10 sm:inline-flex lg:left-8"
            @click="step(-1)"
          />
          <UButton
            icon="i-lucide-chevron-right"
            color="neutral"
            variant="ghost"
            size="xl"
            square
            :aria-label="t.lightbox.next"
            class="absolute top-1/2 right-3 hidden -translate-y-1/2 text-white hover:bg-white/10 sm:inline-flex lg:right-8"
            @click="step(1)"
          />
        </template>

        <UButton
          icon="i-lucide-x"
          color="neutral"
          variant="ghost"
          size="xl"
          square
          :aria-label="t.lightbox.close"
          class="absolute top-4 right-4 text-white hover:bg-white/10"
          @click="close"
        />
      </div>
    </template>
  </UModal>
</template>

<script setup>
import { computed } from 'vue'
import { useI18n } from '../composables/useI18n'
import { useIsDark } from '../composables/useIsDark'
import { useLightbox } from '../composables/useLightbox'

const BASE = import.meta.env.BASE_URL

const { t } = useI18n()
const { items, index, open, step } = useLightbox()
const isDark = useIsDark()
const theme = computed(() => (isDark.value ? 'dark' : 'light'))
const current = computed(() => items.value[index.value])

// Swipe left/right on touch screens to step.
let startX = null
function onPointerDown(e) {
  startX = e.pointerType === 'mouse' ? null : e.clientX
}
function onPointerUp(e) {
  if (startX == null) return
  const dx = e.clientX - startX
  startX = null
  if (Math.abs(dx) > 50) step(dx < 0 ? 1 : -1)
}
</script>
