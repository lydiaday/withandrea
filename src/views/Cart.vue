<template>
<div v-if="numItems === 0">
  <div class="wrapper">
  <h1>Cart is Empty</h1>
  </div>
</div>
<div v-else>

<div class="cart-wrapper">
  <h1>Your Cart</h1>
  <div class="cart-products">
    <div class="cart-product" v-for="product in cart" :key="product.id">
      <div class="cart-image">
        <img :src="'/images/'+product.image">
      </div>
      <div class="cart-info">
        <div class="cart-inner">
		<div class="cart-name"><h1>{{product.name}}</h1></div>
        <div class="cart-price"><h1>${{product.price}}.00</h1></div>
        <div class="cart-remove-button"><button class="auto" @click="removeFromCart(product)">Remove</button></div>
        </div>
      </div>
      </div>
      <br>
      <div class="Subtotal"><strong><p>Subtotal: ${{subtotal}}.00</p></strong></div>

    </div>
  </div>
</div>
</template>

<script>
export default {
  name: 'Cart',
  computed: {
    cart() {
      return this.$root.$data.cart;
    },
    numItems() {
      return this.$root.$data.cart.length;
    },
     subtotal() {
       let sum = 0;
       this.$root.$data.cart.forEach(cartProduct => sum += cartProduct.price)
       return sum;
     },
  },
  methods: {
    removeFromCart(product) {
      let index = this.$root.$data.cart.indexOf(product);
      this.$root.$data.cart.splice(index, 1)
	},
  },
}
</script>

<style>

.subtotal {
  display: flex;
  align-items: flex-end;
}

.cart-wrapper {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  font-family: "SF Pro Text";
}

.top-section {
  margin-top: 20px;

  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;

}

.cart-inner {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}

.cart-products {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: 20px;
  margin-top: 10px;
  margin-bottom: 50px;
  width: 55%;
  min-width: 500px;
  border: 1px solid #5D6063;
  background: #f3f3f3;
}

.cart-product {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 25px;
  padding: 15px;
  width: 100%;
  background: #FFF;
}

.cart-product img {
  width: 150px;
}

.cart-product .image {
  display: flex;
  margin-bottom: 5px;
  margin-left: 25px;
}

.cart-image {
  float: left;
}



.cart-info {
  display: flex;
  flex-direction: column;
  color: #000;
  padding: 10px 30px;
  width: 100%;

}

.cart-info h1 {
  font-size: 15px;
  font-family: "SF Pro Text";
}

.cart-info h2 {
  font-size: 10px;
  color: #838383;
  font-family: "SF Pro Text";
}


.cart-price {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  font-size: 8px;
  font-family: "SF Pro Text";
}

.cart-name {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  font-size: 10px;
  font-family: "SF Pro Text";
}

.cart-remove-button {
display: flex;
flex-wrap: wrap;
align-items: center;
justify-content: space-between;
font-size: 15px;
font-family: "SF Pro Text";
}

.cart-wrapper button {
  height: 30px;
  background: #c3c3c3;
  color: white;
  border: none;
  align-items: center;
}

.auto {
  margin-left: auto;
}
</style>
