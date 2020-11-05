<template>
<div class="wrapper">
  <div class="product" v-for="product in products" :key="product.id">
    <br><br>
    <div class="merch-container">
      <div class="merch-content">
      <div class="merch-info">
        <p><strong>{{product.name}}</strong></p>
        <p>${{product.price}}.00</p>
        </div>
        <br>
        <img :src="'/images/'+product.image" class='merch-image'/>
        <p><em><button class="auto" @click="addToCart(product)">Add to Cart</button></em></p>
      </div>
    </div>
  </div>
</div>
</template>



<script>
export default {
  name: 'ProductList',
  props: {
    products: Array
  },
  methods: {
    addToCart(product) {
      this.$root.$data.cart.push(product);
	},
  },
}
</script>

<style>

button {
  height: 50px;
  background: transparent;
  border: none;
}

.merch-info {
  margin-top:10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.merch-image {
  display: flex;
  border: 2px solid #333;
  width: 200px;
}

.wrapper {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
}

.wrapper p {
  margin: 0px;
  padding: 0px;
  display: flex;
  flex-wrap: wrap;
}

.merch-container {
  margin-top: 20px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  font-family: "SF Pro Text";
}

.merch-content {
  border: 2px solid #333;
  background: #FFFFFF;
  flex-direction: column;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  width: 300px;
  height: 400px;
}

</style>
