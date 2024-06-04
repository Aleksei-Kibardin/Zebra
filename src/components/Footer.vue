<template>
  <div class="footer">
    <div class="container">
      <div class="row content-footer">
        <img src="../assets/logo.svg" alt="Alpha Logo" class="footer__logo" />
        <p class="footer__text">© Alpha 2023</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Footer",
};
</script>

<style scoped lang="scss">
@import "../fluid.sass";
.container{
  height: 100%;
}
.content-footer {
  height: 100%;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
}
.footer {
  @include fluid("padding", 20);
  @include fluid("height", 202);
  background: #f0f6fe;
  color: #fff;
}
.footer__logo {
  @include fluid("width", 114);
  @include fluid("height", 36);
}

.footer__text {
  @include fluid("font-size", 16);
  color: #81899d;
  margin: 10px 0 0;
}
</style>
