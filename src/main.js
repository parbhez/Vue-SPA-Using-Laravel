import { createApp } from 'vue'
import './style.css'
import './style.js'
import Toaster from '@meforma/vue-toaster'

import App from './App.vue'
import router from './router/index'
import store from './store/index'
const app = createApp(App)
app.use(Toaster, {
    // One of the options
    position: 'top-right'
})
app.use(router)
app.use(store)
app.mount('#app')