import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Shows from '../views/Shows.vue'
import Meet from '../views/Meet.vue'
import Merch from '../views/Merch.vue'
import Cart from '../views/Cart.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    meta: {
      headerClass: 'home-photo'
    }
  },
  {
    path: '/shows',
    name: 'Shows',
    component: Shows,
    meta: {
      headerClass: 'shows-photo'
    }
  },
  {
    path: '/cart',
    name: 'Cart',
    component: Cart,
    meta: {
      headerClass: 'merch-photo'
    }
  },
  {
    path: '/meet',
    name: 'Meet',
    component: Meet,
    meta: {
      headerClass: 'meet-photo'
    }
  },
  {
    path: '/merch',
    name: 'Merch',
    component: Merch,
    meta: {
      headerClass: 'merch-photo'
    }
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
