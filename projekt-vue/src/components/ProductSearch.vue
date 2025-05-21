<template>
  <div>
    <h2>Search for product</h2>
    <div style="display:flex;gap:8px;">
      <input v-model="searchTerm" placeholder="Type product name..." />
      <button @click="showResults = true">Search</button>
    </div>
    <div v-if="showResults">
      <div v-if="filtered.length === 0" style="margin-top:1rem;">No products found.</div>
      <div v-for="offer in filtered" :key="offer.id" class="offer" style="margin-top:1rem;">
        <b>{{ offer.name }}</b> - {{ offer.price }} PLN
        <input type="number" v-model.number="quantities[offer.id]" min="1" style="width:60px" />
        <button @click="add(offer)">Add to cart</button>
      </div>
    </div>
  </div>
</template>
<script setup>
import { inject, computed, reactive, ref } from 'vue'
const store = inject('store')
const searchTerm = ref('')
const showResults = ref(false)
const filtered = computed(() =>
  store.state.offers.filter(o =>
    o.name.toLowerCase().includes(searchTerm.value.toLowerCase())
  )
)
const quantities = reactive({})
store.state.offers.forEach(o => quantities[o.id] = 1)
function add(offer) {
  store.addToCart(offer, quantities[offer.id] || 1)
}
</script>
<style scoped>
.offer { margin-bottom: 1rem; }
</style>