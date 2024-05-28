import { createApp } from 'vue'
import { createVaporApp } from 'vue/vapor'
import './style.css'
import App from './App.vue'

const create = import.meta.env.VAPOR ? createVaporApp : createApp
create(App as any).mount('#app')
