<template>
<div>

  <div class="underline">
    <h1>Merchandise</h1>
  </div>

  <br><br>
  <div class="filter"><strong><p>Filter:</p></strong></div>
  <div class="pure-menu pure-menu-horizontal">
  <ul class="pure-menu-list">
    <li class="pure-menu-item"><a @click="select('Shirt')" href="#" class="pure-menu-link">Shirts</a></li>
    <li class="pure-menu-item"><a @click="select('Crewneck')" href="#" class="pure-menu-link">Crewnecks</a></li>
    <li class="pure-menu-item"><a @click="select('Pin')" href="#" class="pure-menu-link">Pins</a></li>
    <li class="pure-menu-item"><a @click="select('Sticker')" href="#" class="pure-menu-link">Stickers</a></li>
  </ul>
</div>
<ProductList :products="products" />
</div>
</template>

<script>
import ProductList from "../components/ProductList.vue"
export default {
  name: 'Merch',
  components: {
    ProductList
  },
  data() {
    return {
      type: '',
    }
  },
  computed: {
    products() {
      if (this.type === '') {
        return this.$root.$data.products;
      } else {
        return this.$root.$data.products.filter(product => product.type === this.type);
      }
    }
  },
  methods: {
    select(type) {
      this.type = type;
    }
  }
}
</script>

<style>

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

.filter p {
  padding-left:200px;
}

.pure-menu-horizontal {
  padding-left:200px;
}

.home-photo {
  background-image: url("/images/band.JPG");
  min-height: 400px;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  position: relative;
}

.merch-photo {
  background-image: url("/images/blue2.jpg");
  min-height: 400px;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  position: relative;
}

.meet-photo {
  background-image: url("/images/newlegs.jpg");
  min-height: 400px;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  position: relative;
}

.shows-photo {
  background-image: url("/images/shows.jpg");
  min-height: 400px;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  position: relative;
}

.menu-container {
  font-family: "Georgia";
  padding: 40px 0;
  overflow: hidden;
  background: transparent;
  color: #EEEEEE;
  display: flex;
  justify-content: center;
}

.menu {
  overflow: hidden;
  width: 2100px;
  display: flex;
  justify-content: space-around;
}

.bios-page a {
  color: #454543;
}

.menu a {
  color: #454543;
  display: block;
  text-align: center;
  padding: 14px 16px;
  text-decoration: none;
}

.main-page-menu a {
  color: #f6f6f4;
  display: block;
  text-align: center;
  padding: 14px 16px;
  text-decoration: none;
}
.main-page-menu {
  overflow: hidden;
  width: 2100px;
  display: flex;
  justify-content: space-around;
}
.right-aligned a:hover {
  color: #D3D3D3;
  text-decoration: none;
}
.main-page-menu .right-aligned a:hover {
  color: #454543;
  text-decoration: none;
}
.logo {
  fill: #f6f6f4;
}
.logo img {
  fill: #f6f6f4;
  width: 300px;
}
.logo a:hover {
  color: #f6f6f4;
}

.right-aligned {
  font-family: "SF Pro Text";
  display: flex;
  justify-content: flex-end;
  font-size: 20px;
}

.menu-main {
  font-family: "Sitka Banner";
  font-size: 40px;
}
.menu-main a {
  font-family: "Sitka Banner";
  font-size: 40px;
}
.menu-main a:hover {
  color: #f6f6f4;
  text-decoration: none;
}
.main-page-menu .menu-main a:hover {
  color: #f6f6f4;
  text-decoration: none;
}

.merch {
  margin-left: 20px;
}
.shows {
  margin-left: 20px;
}
.meet {
  margin-left: 20px;
}
.current-page{
  font-weight: bold;
}

body {
  background-color: #f6f6f4;
  color: #454543;
}

h1, h2, h3, h4 {
  padding-left: 50px;
  padding-right: 50px;
  padding-bottom: 10px;
  text-align: center;
}

h1 {
  padding-top: 40px;
  font-family: "Sitka Banner";
}

.event-information h1 {
  padding-left: 50px;
  padding-right: 50px;
  padding-bottom: 10px;
  text-align: center;
  padding-top: 40px;
  font-family: "Sitka Banner";
  font-size: 25px;
}

h2, h4 {
  font-size: 20px;
  font-family: "SF Pro Text";
}
.home-content h2 {
  font-size: 30px;
}

h3 {
  font-size: 10px;
  font-family: "SF Pro Text";
  color: #C1C1C1;
}

p {
  font-family: "SF Pro Text";
}

.big-name h1 {
  font-size: 70px;
  text-shadow: -1px 1px 0 #000, 1px 1px 0 #000, 1px -1px 0 #000, -1px -1px 0 #000;
  color: #f6f6f4;
}

.home-content h2 {
  font-size: 20px;
}


.footer-container {
  flex-direction: column;
  background: transparent;
  display: flex;
  justify-content: center;

  padding: 0;
  margin-left: 150px;
  margin-right: 150px;
  margin-bottom: 40px;
  border-top: 1px solid #5D6063;

  position: relative;
  margin-top: -100px;
  height: 100px;
  clear: both;
}

.footer {
  margin-top: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  clear: both;
}

.footer-item {
  padding-top: 40px;
  padding-left: 20px;
  padding-right: 20px;
  font-family: "SF Pro Text";
  text-align: center;
}

.main-part1-container {
  background: transparent;
  display: flex;
  justify-content: center;
}

.main-part1 {
  width: 2100px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  padding: 50px;
}

.photo {
  padding: 20px;
}

.homepage-container {
  background: transparent;
  display: flex;
  justify-content: center;
  align-items: center;
  padding-left: 250px;
  padding-right: 250px;
}

.homepage {
  width: 2100px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 50px;
}

.leftcolumn-container {
  background: transparent;
  display: flex;
  align-items: flex-start;
}

.leftcolumn {
  flex-direction: column;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
}

.rightcolumn-container {
  background: transparent;
  display: flex;
  align-items: flex-end;
}

.rightcolumn {
  flex-direction: column;
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
}

.home-content {
  align-items: center;
  align-self: flex-start;
}

.columnphoto {
  padding-top: 2.5px;
  padding-bottom: 2.5px;
}


.home-part1-container {
  background: transparent;
  display: flex;
  justify-content: center;
  align-items: center;
}

.home-part1 {
  width: 2100px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  padding: 50px;
}
.quote {
  padding-left: 50px;
  padding-right: 50px;
  padding-bottom: 10px;
  padding-top: 40px;
  text-align: center;
  font-family: "Gabriola Regular";
  font-size: 25px;
  color: #454543;
}
.space {
  width: 1px;
}

.about-page {
  background-color: #f6f6f4;
  color: #454543;
  padding: 50px;
  font-family: "SF Pro Text";
  font-size: 17px;
  justify-content: center;
}

.profile-photo {
  float: left;
  width: 700px;
  padding-left: 100px;
  padding-bottom: 50px;
}

.bio {
  float: right;
  width:700px;
  padding-right: 100px;
}

.about-head {
  font-size: 25px;
}

.underline {
  padding: 0;
  margin-left: 150px;
  margin-right: 150px;
  margin-bottom: 40px;
  border-bottom: 1px solid #5D6063;
}

.video iframe {
  align-self: center;
  align-content: center;
  align-items: center;
}

.video iframe {
  align-self: center;
  align-content: center;
  align-items: center;
}

/* meet the band */

.bios-big-container {
  background: transparent;
  display: flex;
  justify-content: center;
}

.bios-big-page {

  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
}

.bios-content {
  font-family: "SF Pro Text";
  padding: 20px;
  background-color: #EAEDF0;
}

.bios-image {
  float: left;
  width: 150px;
  margin-right: 20px;
  margin-bottom: 20px;
}

.bios-container {
  background: transparent;
  display: flex;
  justify-content: center;
}

.bios-page {
  flex-direction: column;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  padding: 20px;
  width: 550px;
}

.github-link {
  clear: both;
  padding: 0;
  margin-left: 150px;
  margin-right: 150px;
  margin-bottom: 40px;
  font-family: "SF Pro Text";
  text-align: center;
}

.input-wrap {
  padding-left: 50px;
  padding-right: 50px;
  padding-bottom: 10px;
  text-align: center;
}

.outer-event-result-container {
  margin-left: 150px;
  margin-right: 150px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
}

.event-result-container {
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  border-top: 1px solid #5D6063;
  width: 800px;
  margin-bottom: 50px;
}

.event-result {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}

.event-information p {
  word-wrap: normal;
  text-align: center;
  width:350px;
}

.event-photo {
  margin: 20px;
  margin-top: 50px;
  max-width: 200px;
}

.event-photo img {
  padding: 20px;
  max-height:300px;
  max-width:220px;
  height:auto;
  width:auto;
}

.all-results-container {
  background: transparent;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  margin-left: 150px;
  margin-right: 150px;
}

.all-results {
  flex-direction: column;
  display: flex;
  width:100%;
}


</style>
