import { createApp } from 'vue'
import './style.css'
import './style.js'
import './http-common'
import App from './App.vue'
import router from './router/index'
import store from './store/index'
const app = createApp(App)

import Toaster from '@meforma/vue-toaster'
app.use(Toaster, { position: 'top-right' })

import iziToast from 'izitoast'
import "izitoast/dist/css/iziToast.css";
//Assign the global variable/global function before mounting 
app.config.globalProperties.$iziToast = iziToast;

import mitt from 'mitt'
let eventBus = mitt();
app.config.globalProperties.$eventBus = eventBus // // window er exchange this use korte pari. this use korle eivabe likhte hoy
window.$eventBus = eventBus // this er exchange window use korte pari. window use korle eivabe likhte hoy

// console.log(app.config)

app.use(router)
app.use(store)
app.mount('#app')