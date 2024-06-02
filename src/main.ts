import { createVaporApp } from 'vue/vapor'
import './style.css'
import App from './App.vue'

const create = createVaporApp
create(App as any).mount('#app')
