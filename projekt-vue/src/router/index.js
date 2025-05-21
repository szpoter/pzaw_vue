import { createRouter, createWebHistory } from 'vue-router'
import LoginRegister from '../pages/LoginRegister.vue'
import Home from '../pages/Home.vue'
import Cart from '../components/Cart.vue'

const routes = [
  { path: '/', redirect: '/offers' },
  { path: '/login', component: LoginRegister },
  { path: '/offers', component: Home, meta: { requiresAuth: true } },
  { path: '/search', component: Home, meta: { requiresAuth: true } },
  { path: '/cart', component: Cart, meta: { requiresAuth: true } },
  { path: '/:pathMatch(.*)*', redirect: '/login' }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

router.beforeEach((to, from, next) => {
  const isAuth = localStorage.getItem('user')
  if (to.meta.requiresAuth && !isAuth) next('/login')
  else if ((to.path === '/login') && isAuth) next('/offers')
  else next()
})

export default router