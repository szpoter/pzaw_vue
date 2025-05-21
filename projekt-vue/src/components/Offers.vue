<template>
  <div>
    <h2>Offers</h2>
    <div v-for="offer in offers" :key="offer.id" class="offer">
      <b>{{ offer.name }}</b> - {{ offer.price }} PLN
      <input type="number" v-model.number="quantities[offer.id]" min="1" style="width:60px" />
      <button @click="add(offer)">Add to cart</button>
    </div>
  </div>
</template>
<script setup>
import { inject, reactive } from 'vue'
const store = inject('store')
const offers = store.state.offers
const quantities = reactive({})
offers.forEach(o => quantities[o.id] = 1)
function add(offer) {
  store.addToCart(offer, quantities[offer.id] || 1)
}
</script>
<style scoped>
.offer { margin-bottom: 1rem; }
</style>