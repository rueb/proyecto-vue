
import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(createPinia())
app.use(router)

app.mount('#app')

// https://www.youtube.com/watch?v=oeCfkrNyTk0&list=PLg-z1C9R1jutezByZ3WmH8NE_JqYBsDOA&index=3
