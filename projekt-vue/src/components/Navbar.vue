<template>
  <nav class="navbar">
    <button @click="setTab('offers')">Rybki</button>
    <button @click="setTab('search')">Wyszukaj rybkę</button>
    <button @click="setTab('cart')">Koszyk ({{ cartCount }})</button>
    <span style="flex:1"></span>
    <span v-if="user">Cześć, {{ user.username }}</span>
    <button @click="logout" v-if="user">Wyloguj</button>
  </nav>
</template>
<script setup>
import { inject, computed } from 'vue'
const store = inject('store')
const user = computed(() => store.state.user)
const cartCount = computed(() => store.state.cart.reduce((a, b) => a + b.quantity, 0))
function logout() {
  store.logout()
  window.location = '/login'
}
function setTab(tab) {
  store.setTab(tab)
}
</script>
<style scoped>
.navbar {
  display: flex;
  gap: 1rem;
  align-items: center;
  background: #eee;
  padding: 1rem;
}
</style>