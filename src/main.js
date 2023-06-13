import './assets/css/main.css'

import { createApp } from 'vue'
import VueSmoothScroll from 'vue3-smooth-scroll';
import App from './App.vue'
import router from './router'

const app = createApp(App);

app.use(router);
app.use(VueSmoothScroll);

app.mount('#app')
