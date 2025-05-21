<template>
  <div>
    <h2>Koszyk</h2>
    <div v-if="cart.length === 0">Koszyk jest pusty.</div>
    <div v-for="item in cart" :key="item.id" class="cart-item">
      <b>{{ item.name }}</b> x {{ item.quantity }} = {{ item.price * item.quantity }} PLN
      <button class="delete-btn" @click="remove(item.id)">Usuń</button>
    </div>
    <div v-if="cart.length > 0">
      <strong><b>Razem: {{ total }} PLN</b></strong>
    </div>
  </div>
</template>
<script setup>
import { inject, computed } from 'vue'
const store = inject('store')
const cart = computed(() => store.state.cart)
const total = computed(() => cart.value.reduce((a, b) => a + b.price * b.quantity, 0))
function remove(id) {
  store.removeFromCart(id)
}
</script>
<style src="@/assets/form.css"></style>