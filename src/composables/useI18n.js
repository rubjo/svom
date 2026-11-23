import { computed, ref, watchEffect } from 'vue'
import * as uiLocales from '@nuxt/ui/locale'
import { messages } from '../i18n/messages'

// Same languages, storage key and detection order as the app
// (svom/src/composables/useI18n.js): the visitor's choice, else the
// browser's first supported language ("no"/"nn" count as Norwegian), else nb.
const LOCALE_KEY = 'svom-locale'

export const LANGUAGES = [
  { code: 'nb', label: 'Norsk', ui: uiLocales.nb_no },
  { code: 'en', label: 'English', ui: uiLocales.en },
  { code: 'de', label: 'Deutsch', ui: uiLocales.de },
  { code: 'fr', label: 'Français', ui: uiLocales.fr },
  { code: 'es', label: 'Español', ui: uiLocales.es },
]
const SUPPORTED = LANGUAGES.map((l) => l.code)

function detect() {
  const saved = localStorage.getItem(LOCALE_KEY)
  if (SUPPORTED.includes(saved)) return saved
  for (const tag of navigator.languages || [navigator.language]) {
    const lang = String(tag || '').toLowerCase().split('-')[0]
    if (lang === 'no' || lang === 'nn' || lang === 'nb') return 'nb'
    if (SUPPORTED.includes(lang)) return lang
  }
  return 'nb'
}

const lang = ref(detect())

watchEffect(() => {
  localStorage.setItem(LOCALE_KEY, lang.value)
  document.documentElement.lang = lang.value
  document.title = messages[lang.value].meta.title
  document
    .querySelector('meta[name="description"]')
    ?.setAttribute('content', messages[lang.value].meta.description)
})

export function useI18n() {
  const t = computed(() => messages[lang.value])
  const uiLocale = computed(() => LANGUAGES.find((l) => l.code === lang.value).ui)
  return { lang, t, uiLocale }
}
