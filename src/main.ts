import { createApp } from 'vue'
import { render } from 'vue/vapor'
import './style.css'
import App from './App.vue'

if (import.meta.env.VAPOR) {
  render(App as any, {}, '#app')
} else {
  createApp(App).mount('#app')
}
