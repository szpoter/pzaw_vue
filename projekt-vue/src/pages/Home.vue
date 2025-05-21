<template>
  <Navbar />
  <div style="padding:2rem;">
    <Offers v-if="activeTab==='offers'" />
    <ProductSearch v-if="activeTab==='search'" />
    <Cart v-if="activeTab==='cart'" />
  </div>
</template>
<script setup>
import { inject, computed } from 'vue'
import Navbar from '../components/Navbar.vue'
import Offers from '../components/Offers.vue'
import ProductSearch from '../components/ProductSearch.vue'
import Cart from '../components/Cart.vue'

const store = inject('store')
const activeTab = computed(() => store.state.activeTab)
</script>
<style src="@/assets/form.css"></style>