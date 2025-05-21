<template>
  <div class="centered">
    <h2>Login</h2>
    <form @submit.prevent="login">
      <input v-model="loginUser" placeholder="Username" required />
      <input v-model="loginPass" type="password" placeholder="Password" required />
      <button type="submit">Login</button>
    </form>
    <h2>Register</h2>
    <form @submit.prevent="register">
      <input v-model="regUser" placeholder="Username" required />
      <input v-model="regPass" type="password" placeholder="Password" required />
      <button type="submit">Register</button>
    </form>
    <div v-if="error" style="color:red">{{ error }}</div>
  </div>
</template>
<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { inject } from 'vue'

const store = inject('store')
const router = useRouter()
const loginUser = ref('')
const loginPass = ref('')
const regUser = ref('')
const regPass = ref('')
const error = ref('')

function login() {
  const user = JSON.parse(localStorage.getItem('user'))
  if (user && user.username === loginUser.value && user.password === loginPass.value) {
    store.login(user)
    router.push('/offers') // <-- zmiana tutaj
  } else {
    error.value = 'Invalid credentials'
  }
}
function register() {
  if (!regUser.value || !regPass.value) return
  const user = { username: regUser.value, password: regPass.value }
  store.register(user)
  router.push('/offers') // <-- zmiana tutaj
}
</script>
<style scoped>
.centered { max-width: 300px; margin: 100px auto; }
input { display: block; margin: 8px 0; width: 100%; }
button { width: 100%; }
</style>