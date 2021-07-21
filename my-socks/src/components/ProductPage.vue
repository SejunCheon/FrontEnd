<template>
  <div id="app">
    <div class="nav-bar"></div>
    <div class="cart">
      <p>Cart {{ cart.length }}</p>
    </div>
    <Product @add-to-cart="addToCart"></Product>
  </div>
</template>

<script>
import Product from "./Product.vue";

export default {
  name: "ProductPage",
  components: {
    Product,
  },
  data() {
    return { cart: [] };
  },
  methods: {
    addToCart(value) {
      this.cart.push(value);
    },
  },
};
</script>