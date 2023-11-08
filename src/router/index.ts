import { createRouter, createWebHistory } from 'vue-router'
// import CategoryView from '@/views/CategoryView.vue'
import HomeViewVue from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeViewVue
    },
    // {
    //   path: '/category',
    //   name: 'category',
    //   component: CategoryView
    // },
    {
      path: '/post',
      name: 'post',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/BlogPostView.vue')
    }
  ]
})

export default router
