import LandingView from '@/views/LandingView.vue'
import LayoutView from '@/views/Layout.vue'
import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Layout',
      component: LayoutView,
      children: [
        {
          path: '/',
          name: 'landing page',
          component: LandingView,
          meta: { index: true },
        },
      ],
    },
  ],
})

export default router
