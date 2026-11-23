<template>
  <UDropdownMenu :items="items" :content="{ align: 'end' }">
    <UButton
      color="neutral"
      variant="ghost"
      icon="i-lucide-languages"
      :label="lang.toUpperCase()"
      :aria-label="t.language"
      class="font-num"
    />
  </UDropdownMenu>
</template>

<script setup>
import { computed } from 'vue'
import { LANGUAGES, useI18n } from '../composables/useI18n'

const { lang, t } = useI18n()

const items = computed(() =>
  LANGUAGES.map((l) => ({
    label: l.label,
    type: 'checkbox',
    checked: l.code === lang.value,
    onSelect: () => (lang.value = l.code),
  })),
)
</script>
