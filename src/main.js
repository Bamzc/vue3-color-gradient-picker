/*
 * @Author: bamzc
 * @Date: 2023-08-14 10:29:15
 * @LastEditors: bamzc
 * @LastEditTime: 2023-08-14 10:57:10
 * @Description: 
 */
import { createApp } from 'vue'
// import { createPinia } from 'pinia'

import App from './App.vue'
// import App from './Demo.vue'
// import router from './router'

const app = createApp(App)

// app.use(createPinia())
// app.use(router)

app.mount('#app')
