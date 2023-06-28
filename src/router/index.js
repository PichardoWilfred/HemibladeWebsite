import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/home/Home.vue';
import Privacy from '../views/privacy/Privacy.vue';

import Ifa from '../views/ifa/Ifa.vue';
import Highlights from '../views/ifa/highlights/Highlights.vue';
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/privacy-policy',
      name: 'privacy-policy',
      component: Privacy
    },
    {
      path: '/ifa',
      name: 'ifa',
      component: Ifa,
    },
    {
      path: '/highlights',
      name: 'highlights',
      component: Highlights,
    },
  ],
})

export default router
