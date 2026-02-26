import { createApp } from 'vue'
import './index.css'
import App from './App.vue'
import AOS from 'aos'
import 'aos/dist/aos.css'
import Particles from '@tsparticles/vue3'
import { loadSlim } from '@tsparticles/slim'

const app = createApp(App)

app.use(Particles, {
  init: async (engine) => {
    await loadSlim(engine)
  }
})

app.mount('#app')

AOS.init({
  duration: 800,
  easing: 'ease-out-cubic',
  once: true,
  offset: 50
})
