import { createApp } from 'vue'
import { createPinia } from 'pinia'
import axios from 'axios'
import Toast, { type PluginOptions } from 'vue-toastification'
//import './assets/main.css'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap'
import 'vue-toastification/dist/index.css'

import App from './App.vue'
import router from './router'

const app = createApp(App)
//axios.defaults.withCredentials = true

app.use(createPinia())
app.use(router)

const options: PluginOptions = {
  // You can set your default options here
  timeout: 5000
}

app.use(Toast, options)

app.mount('#app')
