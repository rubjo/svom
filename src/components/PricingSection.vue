<template>
  <section id="pricing" class="relative py-24 sm:py-32">
    <div class="mx-auto max-w-5xl px-5">
      <div v-reveal class="mx-auto max-w-2xl text-center">
        <p class="text-sm font-semibold tracking-[0.2em] text-primary uppercase">{{ t.pricing.kicker }}</p>
        <h2 class="mt-3 font-display text-4xl font-bold tracking-tight text-highlighted sm:text-5xl">
          {{ t.pricing.title }}
        </h2>
        <p class="mt-4 text-lg text-toned">{{ t.pricing.lead }}</p>
      </div>

      <div v-reveal class="mt-10 flex justify-center">
        <UTabs
          v-model="period"
          :items="periods"
          :content="false"
          variant="pill"
          size="lg"
          class="w-72"
        />
      </div>

      <div class="mt-12 grid gap-6 md:grid-cols-2">
        <article
          v-for="(plan, i) in plans"
          :key="plan.key"
          v-reveal="i * 100"
          class="relative flex flex-col overflow-hidden rounded-[2rem] p-8 sm:p-10"
          :class="
            plan.featured
              ? 'bg-hero text-white shadow-2xl shadow-lane-700/30 ring-1 ring-white/15'
              : 'bg-elevated shadow-(--card-shadow) ring-1 ring-default'
          "
        >
          <div class="flex items-start justify-between gap-4">
            <div>
              <h3 class="flex items-center gap-2 text-xl font-semibold" :class="plan.featured ? '' : 'text-highlighted'">
                <UIcon :name="plan.icon" class="size-5" />
                {{ plan.title }}
              </h3>
              <p class="mt-1 text-sm" :class="plan.featured ? 'text-white/75' : 'text-muted'">{{ plan.desc }}</p>
            </div>
            <span
              v-if="period === 'yearly'"
              class="shrink-0 rounded-full px-3 py-1 text-xs font-semibold"
              :class="plan.featured ? 'bg-white/20 text-white' : 'bg-success/12 text-success'"
              >{{ t.pricing.save.replace('{n}', plan.saving) }}</span
            >
          </div>

          <p class="mt-8 flex items-baseline gap-2">
            <span class="font-time text-6xl font-semibold tracking-tight tabular-nums">{{ plan.price }}</span>
            <span :class="plan.featured ? 'text-white/75' : 'text-muted'">{{
              period === 'yearly' ? t.pricing.perYear : t.pricing.perMonth
            }}</span>
          </p>

          <ul class="mt-8 mb-10 space-y-3">
            <li v-for="f in t.pricing.features" :key="f" class="flex items-start gap-3">
              <UIcon
                name="i-lucide-check"
                class="mt-0.5 size-5 shrink-0"
                :class="plan.featured ? 'text-white' : 'text-primary'"
              />
              <span :class="plan.featured ? 'text-white/90' : 'text-default'">{{ f }}</span>
            </li>
          </ul>

          <UButton
            :href="APP_STORE_URL"
            target="_blank"
            size="xl"
            block
            :label="t.pricing.cta"
            class="mt-auto justify-center"
            :class="plan.featured ? 'bg-white text-lane-800 hover:bg-white/90 active:bg-white/90' : ''"
          />
          <p class="mt-3 text-center text-xs" :class="plan.featured ? 'text-white/75' : 'text-muted'">
            {{ t.pricing.trial }}
          </p>
        </article>
      </div>

      <div v-reveal class="mx-auto mt-10 max-w-2xl text-center text-sm text-muted">
        <p>{{ t.pricing.note }}</p>
      </div>
    </div>
  </section>
</template>

<script setup>
import { computed, ref } from 'vue'
import { APP_STORE_URL, PRICES_NOK } from '../config'
import { useI18n } from '../composables/useI18n'

const { t, lang } = useI18n()

const period = ref('yearly')
const periods = computed(() => [
  { label: t.value.pricing.monthly, value: 'monthly' },
  { label: t.value.pricing.yearly, value: 'yearly' },
])

const nok = computed(
  () =>
    new Intl.NumberFormat(lang.value === 'nb' ? 'nb-NO' : lang.value, {
      style: 'currency',
      currency: 'NOK',
      currencyDisplay: lang.value === 'nb' ? 'narrowSymbol' : 'code',
      maximumFractionDigits: 0,
    }),
)

/** Yearly vs twelve months, rounded down so the page never oversells it. */
const saving = (p) => Math.floor((1 - p.yearly / (p.monthly * 12)) * 100)

const plans = computed(() => [
  {
    key: 'single',
    icon: 'i-lucide-user',
    title: t.value.pricing.single,
    desc: t.value.pricing.singleDesc,
    price: nok.value.format(PRICES_NOK.single[period.value]),
    saving: saving(PRICES_NOK.single),
    featured: false,
  },
  {
    key: 'family',
    icon: 'i-lucide-users',
    title: t.value.pricing.family,
    desc: t.value.pricing.familyDesc,
    price: nok.value.format(PRICES_NOK.family[period.value]),
    saving: saving(PRICES_NOK.family),
    featured: true,
  },
])
</script>
