<template>
  <div>
    <h2>Rybki</h2>
    <div v-for="offer in offers" :key="offer.id" class="offer">
      <b>{{ offer.name }}</b> - {{ offer.price }} zł/kg
      <input type="number" v-model.number="quantities[offer.id]" min="1" style="width:60px" />
      <button class="small-btn" @click="add(offer)">Dodaj do koszyka</button>
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
<style src="@/assets/form.css"></style>
