<template>
  <div class="centered">
    <h1>Witaj!</h1>
    <button @click="goLogin">Zaloguj się</button>
    <button @click="goRegister">Zarejestruj się</button>
  </div>
</template>
<script setup>
import { useRouter } from 'vue-router'
const router = useRouter()
function goLogin() {
  router.push('/login')
}
function goRegister() {
  router.push('/register')
}
</script>
<!-- <style src="@/assets/form.css"></style> -->