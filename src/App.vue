<template>
  <div id="app">
  <nav class="navbar navbar-default">
  <div :class="$route.meta.headerClass">
    <div class='menu-container'>
      <div class='menu'>
        <div class="main-page-menu">
          <div class="logo"><router-link to="/"><img src="images/logo.svg"></router-link></div>
          <div class="right-aligned">
            <div class="home"><router-link to="/">Home</router-link></div>
            <div class="meet"><router-link to="/meet">Meet the Band</router-link></div>
            <div class="shows"><router-link to="/shows">Shows</router-link></div>
            <div class="merch"><router-link to="/merch">Merch</router-link></div>
            <div class="cart"><router-link to="/cart">Cart ({{this.$root.$data.cart.length}})</router-link></div>
          </div>
        </div>
        </div>
      </div>
    </div>
  </nav>
  <router-view/>
  <br><br><br><br><br><br><br><br><br><br>
  <div class="footer-container">
    <div class="footer">
      <div class="footer-item"><a href='https://www.instagram.com/withandrea.band/' target="_blank"><img src="images/instagram.png" width=50px/></a></div>
      <div class="footer-item"><a href='https://open.spotify.com/artist/0l10Z6cEcxRJF0rWJTolzc' target="_blank"><img src="images/spotify.png" width=35px/></a></div>
      <div class="footer-item"><a href='https://music.apple.com/us/artist/with-andrea/id1523596060' target="_blank"><img src="images/applemusic.png" width=40px/></a></div>
    </div>
    <div class="github-link">
      <p><br><a href='https://github.com/lydiaday/withandrea2' target="_blank">Link to GitHub repository</a></p>
    </div>
  </div>
  </div>
</template>

<style>
.home-photo {
  background-image: url("/assets/images/band.JPG");
  min-height: 400px;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  position: relative;
}

.merch-photo {
  background-image: url("/assets/images/blue2.jpg");
  min-height: 400px;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  position: relative;
}

.meet-photo {
  background-image: url("/assets/images/newlegs.jpg");
  min-height: 400px;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  position: relative;
}

.shows-photo {
  background-image: url("/assets/images/shows.jpg");
  min-height: 400px;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  position: relative;
}
</style>
