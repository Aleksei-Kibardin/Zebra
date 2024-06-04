<template>
  <div class="news-card col-3">
    <img
      src="../assets/imgCard.png"
      alt="News Image"
      class="news-card__image"
    />
    <div class="card-content">
      <div>
        <div class="news-card__date">
          <span class="day">28</span>
          <div class="month-year"><span>February</span> <span>2022</span></div>
        </div>
        <h2 class="news-card__title">{{ title }}</h2>
        <p class="news-card__description">{{ description }}</p>
      </div>
      <div class="news-card__category">Новости</div>
    </div>
  </div>
</template>

<script setup>

const props = defineProps({
  image: String,
  date: String,
  title: String,
  description: String,
});
</script>

<style scoped lang="scss">
@import "../fluid.sass";
.news-card {
  position: relative;
  background: #fff;
  @include fluid("width", 534);
  @include fluid("border-radius", 16);
}

.card-content {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  border: 1px solid #0f62fe;
  border-top: 0;
  @include fluid("border-bottom-left-radius", 16);
  @include fluid("border-bottom-right-radius", 16);
  @include fluid("padding", 20);
  @include fluid("height", 344);
}

.news-card__image {
  position: relative;
  top: 0;
  @include fluid("width", 538);
}

.news-card__title {
  @include fluid("font-size", 22);
  margin: 15px 0 10px;
  font-weight: 400;
  color: #0c5bef;
}

.news-card__description {
  color: #222327;
  @include fluid("font-size", 20);
}

.news-card__date {
  align-items: center;
  display: flex;
  color: #aaa;
  @include fluid("font-size", 15);
  .day {
    @include fluid("font-size", 36);
  }
  .month-year {
    display: flex;
    flex-direction: column;
  }
}

.news-card__category {
  text-align: center;
  background: #f0f6fe;
  @include fluid("border-radius", 360);
  @include fluid("width", 88);
  @include fluid("font-size", 14);
}
</style>
