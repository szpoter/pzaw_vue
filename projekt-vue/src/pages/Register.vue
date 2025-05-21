<template>
  <div class="centered">
    <h2>Zarejestruj się</h2>
    <form @submit.prevent="register">
      <input v-model="regUser" placeholder="Nazwa użytkownika" required />
      <input v-model="regPass" type="password" placeholder="Hasło" required />
      <button type="submit">Zarejestruj</button>
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
const regUser = ref('')
const regPass = ref('')
const error = ref('')

function register() {
  error.value = ''
  if (regPass.value.length < 8) {
    error.value = 'Hasło musi mieć co najmniej 8 znaków.'
    return
  }
  if (!/[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/.test(regPass.value)) {
    error.value = 'Hasło musi zawierać przynajmniej jeden znak specjalny.'
    return
  }
  if (!regUser.value || !regPass.value) return
  const user = { username: regUser.value, password: regPass.value }
  store.register(user)
  router.push('/offers')
}
function goBack() {
  router.push('/')
}
</script>
<style src="@/assets/form.css"></style>
