import { createApp } from 'vue'
import ui from '@nuxt/ui/vue-plugin'
import App from './App.vue'
import { reveal } from './composables/reveal'
import './style/main.css'

createApp(App).use(ui).directive('reveal', reveal).mount('#app')
