import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      meta: { title: '主页' },
      component: () => import('../views/HomeView.vue'),
    },
    {
      path: '/about',
      name: 'about',
      meta: { title: '关于' },
      component: () => import('../views/AboutView.vue'),
    },
    {
      path: '/favorite',
      name: 'favorite',
      meta: { title: '爱好' },
      component: () => import('../views/FavoriteView.vue'),
    },
  ],
})

export default router
