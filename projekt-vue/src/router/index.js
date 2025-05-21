import { createRouter, createWebHistory } from 'vue-router'
import Welcome from '../pages/Welcome.vue'
import Login from '../pages/Login.vue'
import Register from '../pages/Register.vue'
import Home from '../pages/Home.vue'

const routes = [
  { path: '/', component: Welcome },
  { path: '/login', component: Login },
  { path: '/register', component: Register },
  { path: '/offers', component: Home, meta: { requiresAuth: true } },
  { path: '/:pathMatch(.*)*', redirect: '/' }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

router.beforeEach((to, from, next) => {
  const isAuth = localStorage.getItem('user')
  if (to.meta.requiresAuth && !isAuth) next('/login')
  else if ((to.path === '/login' || to.path === '/register') && isAuth) next('/offers')
  else next()
})

export default router