<template>
  <nav>
    <div class="container">
      <img src="../assets/logo.svg" alt="Alpha Logo" class="header__logo" />
    </div>
  </nav>
</template>

<script setup></script>

<style lang="scss">
@import "../fluid.sass";
nav {
  z-index: 2;
  display: flex;
  align-items: center;
  @include fluid("height", 123);
}
.header__logo {
  @include fluid("width", 152);
  @include fluid("height", 48);
}
@media (max-width: 1000px) {
  .header__logo {
    @include fluid("margin-left", 50);
  }
}
</style>
