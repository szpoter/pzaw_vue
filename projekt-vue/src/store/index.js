import { reactive } from 'vue'

const offers = [
  { id: 1, name: 'Karp', price: 10, unit: 'zł/kg' },
  { id: 2, name: 'Szczupak', price: 30, unit: 'zł/kg' },
  { id: 3, name: 'Okoń', price: 35, unit: 'zł/kg' },
  { id: 4, name: 'Sandacz', price: 40, unit: 'zł/kg' },
  { id: 5, name: 'Leszcz', price: 5, unit: 'zł/kg' },
  { id: 6, name: 'Płoć', price: 4, unit: 'zł/kg' },
  { id: 7, name: 'Polski łosoś', price: 120, unit: 'zł/kg' }
]

const store = {
  state: reactive({
    user: JSON.parse(localStorage.getItem('user')) || null,
    offers,
    cart: JSON.parse(localStorage.getItem('cart')) || [],
    search: '',
    activeTab: 'offers'
  }),
  login(user) {
    store.state.user = user
    localStorage.setItem('user', JSON.stringify(user))
  },
  logout() {
    store.state.user = null
    localStorage.removeItem('user')
    store.state.cart = []
    localStorage.removeItem('cart')
    store.state.activeTab = 'offers'
  },
  register(user) {
    localStorage.setItem('user', JSON.stringify(user))
    store.state.user = user
  },
  addToCart(offer, quantity) {
    const existing = store.state.cart.find(i => i.id === offer.id)
    if (existing) existing.quantity += quantity
    else store.state.cart.push({ ...offer, quantity })
    localStorage.setItem('cart', JSON.stringify(store.state.cart))
  },
  removeFromCart(id) {
    store.state.cart = store.state.cart.filter(i => i.id !== id)
    localStorage.setItem('cart', JSON.stringify(store.state.cart))
  },
  setSearch(val) {
    store.state.search = val
  },
  setTab(tab) { // setter do zmiany zakładki
    store.state.activeTab = tab
  }
}

export default {
  install(app) {
    app.config.globalProperties.$store = store
    app.provide('store', store)
  }
}