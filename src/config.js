/**
 * Links and facts the page states. Prices are the Norwegian App Store prices
 * (App Store Connect, November 2026) — the App Store shows each visitor their
 * own currency, so the page labels them as NOK.
 */

// The app's App Store page. No country code, so the App Store opens each
// visitor's own storefront. Same ID as APP_STORE_ID in the app's subscription store.
export const APP_STORE_URL = 'https://apps.apple.com/app/id6796059559'

export const SUPPORT_URL = 'https://rubjo.github.io/svom-feedback/'
export const TERMS_URL = 'https://rubjo.github.io/svom-feedback/terms.html'
export const PRIVACY_URL = 'https://rubjo.github.io/svom-feedback/privacy.html'

export const PRICES_NOK = {
  single: { monthly: 29, yearly: 299 },
  family: { monthly: 49, yearly: 449 },
}
