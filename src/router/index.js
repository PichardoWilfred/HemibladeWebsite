import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/home/Home.vue';
import Privacy from '../views/privacy/Privacy.vue';

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
    }
    // {
    //   path: '/about',
    //   name: 'about',
    //   // route level code-splitting
    //   // this generates a separate chunk (About.[hash].js) for this route
    //   // which is lazy-loaded when the route is visited.
    //   component: () => import('../views/about/AboutView.vue')
    // }
  ],
  // scrollBehavior(to, from, savedPosition) {
  //   if (from.fullPath === '/privacy-policy') {
  //   console.log(to);
  //     if (to.hash) {
  //       return {
  //         el: to.hash,
  //         behavior: 'smooth',
  //       }
  //     }
  //   }
  // }
})

export default router
