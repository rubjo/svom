<template>
  <UApp :locale="uiLocale">
    <!-- isolate: the water canvas (-z-10) sits above this background and
         below every section. -->
    <div class="bg-shell relative isolate min-h-dvh overflow-x-clip">
      <WaterBackground />
      <SiteHeader />
      <main>
        <HeroSection />
        <FeaturesSection />
        <GallerySection />
        <PricingSection />
        <FaqSection />
      </main>
      <SiteFooter />
      <ScreenshotLightbox />
    </div>
  </UApp>
</template>

<script setup>
import { useI18n } from './composables/useI18n'
import SiteHeader from './components/SiteHeader.vue'
import HeroSection from './components/HeroSection.vue'
import FeaturesSection from './components/FeaturesSection.vue'
import GallerySection from './components/GallerySection.vue'
import PricingSection from './components/PricingSection.vue'
import FaqSection from './components/FaqSection.vue'
import SiteFooter from './components/SiteFooter.vue'
import WaterBackground from './components/WaterBackground.vue'
import ScreenshotLightbox from './components/ScreenshotLightbox.vue'

const { uiLocale } = useI18n()
</script>
