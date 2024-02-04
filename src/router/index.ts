import { useAuthStore } from './../stores/auth'
import { createRouter, createWebHistory } from 'vue-router'
// import CategoryView from '@/views/CategoryView.vue'
import HomeViewVue from '../views/HomeView.vue'
import LoginView from '@/views/LoginView.vue'
import AdminDashboardView from '@/views/AdminDashboardView.vue'
import SearchTermListView from '@/views/SearchTermListView.vue'
import CategoryViewVue from '@/views/CategoryView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeViewVue
    },
    {
      path: '/login',
      name: 'login',
      component: LoginView
    },
    {
      path: '/category/:categoryId',
      name: 'category',
      component: CategoryViewVue,
      props: true
    },
    {
      path: '/post/:postId',
      name: 'post',
      props: true,
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/BlogPostView.vue')
    },
    {
      path: '/category-post/:postId',
      name: 'category-post',
      props: true,
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/CategoryPostView.vue')
    },
    {
      path: '/admin',
      name: 'admin',
      component: AdminDashboardView,
      meta: { requiresAuth: true },
      children: [
        {
          path: '/search-terms',
          name: 'search-terms',
          component: SearchTermListView
        }
      ]
    }
  ]
})

router.beforeEach((to, from, next) => {
  const authStore = useAuthStore()

  // console.log('AUTH STORE: ', authStore.token)
  // console.log('META: ', to.meta)
  // console.log('TO: ', to)
  if (to.meta.requiresAuth) {
    console.log('REQUIRES AUTH')
  }

  if (to.meta.requiresAuth && !authStore.token) {
    next({ name: 'login' })
  } else {
    next()
  }
})

export default router
