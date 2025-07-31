import './assets/main.css'
import './assets/tailwind.css'
import 'mosha-vue-toastify/dist/style.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import api from './api/axios'

import App from './App.vue'
import router from './router'

const app = createApp(App)
app.config.globalProperties.$api = api
app.use(createPinia())
app.use(router)

app.mount('#app')
