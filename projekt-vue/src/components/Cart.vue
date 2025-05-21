<template>
  <div>
    <h2>Cart</h2>
    <div v-if="cart.length === 0">Cart is empty.</div>
    <div v-for="item in cart" :key="item.id" class="cart-item">
      <b>{{ item.name }}</b> x {{ item.quantity }} = {{ item.price * item.quantity }} PLN
      <button @click="remove(item.id)">Remove</button>
    </div>
    <div v-if="cart.length > 0">
      <b>Total: {{ total }} PLN</b>
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
<style scoped>
.cart-item { margin-bottom: 1rem; }
</style>