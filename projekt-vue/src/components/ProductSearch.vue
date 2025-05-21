<template>
  <div>
    <h2>Wyszukaj rybkę</h2>
    <div style="display:flex;gap:8px;">
      <input class="linijka" v-model="searchTerm" placeholder="Type product name..." />
      <button class="search-btn" @click="showResults = true">Wyszukaj</button>
    </div>
    <div v-if="showResults">
      <div v-if="filtered.length === 0" style="margin-top:1rem;">No products found.</div>
      <div v-for="offer in filtered" :key="offer.id" class="offer" style="margin-top:1rem;">
        <b>{{ offer.name }}</b> - {{ offer.price }} zł/kg
        <input type="number" v-model.number="quantities[offer.id]" min="1" style="width:60px" />
        <button class="small-btn" @click="add(offer)">Dodaj do koszyka</button>
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
<style src="@/assets/form.css"></style>
