<template>
  <header class="header-news">
    <h1 class="header-news__title">Новости</h1>
  </header>
</template>

<script setup></script>

<style scoped lang="scss">
@import "../fluid.sass";
.header-news {
  position: relative;
  background-image: url("../assets/bg.jpg");
  background-size: cover;
  background-position: center;
  @include fluid("height", 320);
  color: #000;
  .header-news__title{
    position: absolute;
    @include fluid("font-size", 40);
    @include fluid("left", 100);
    @include fluid("bottom", 48);
    text-shadow: 0 var(--txt-shadow-y) #0000001f;
  }
}
</style>
