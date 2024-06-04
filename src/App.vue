<template>
  <div>
    <Nav-vue />
    <Header-vue />
    <div class="container">
      <News-Container />
    </div>
    <Footer-Vue />
  </div>
</template>

<script setup>
import NavVue from "./components/Nav.vue";
import HeaderVue from "./components/Header.vue";
import NewsContainer from "./components/NewsContainer.vue";
import FooterVue from "./components/Footer.vue";
</script>

<style lang="scss">
@import "./fluid.sass";
:root {
  @include fluid("--txt-shadow-y", 4);
}
body {
  background: #ffffff;
}
.container {
  width: 100%;
  @include fluid("max-width", 1710);
  margin: auto;
}
</style>
