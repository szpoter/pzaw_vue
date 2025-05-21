<template>
  <div class="centered">
    <h2>Zaloguj się</h2>
    <form @submit.prevent="login">
      <input v-model="loginUser" placeholder="Nazwa użytkownika" required />
      <input v-model="loginPass" type="password" placeholder="Hasło" required />
      <button type="submit">Zaloguj</button>
    </form>
    <button @click="goBack">Cofnij</button>
    <div v-if="error" class="error">{{ error }}</div>
  </div>
</template>
<script setup>
import { ref, inject } from 'vue'
import { useRouter } from 'vue-router'
const store = inject('store')
const router = useRouter()
const loginUser = ref('')
const loginPass = ref('')
const error = ref('')
function login() {
  const user = JSON.parse(localStorage.getItem('user'))
  if (user && user.username === loginUser.value && user.password === loginPass.value) {
    store.login(user)
    router.push('/offers')
  } else {
    error.value = 'Nieprawidłowe dane logowania'
  }
}
function goBack() {
  router.push('/')
}
</script>
<style src="@/assets/form.css"></style>