<template>
  <div class="wrap-content">
    <div class="container">
      <div class="row">
        <div class="news-card col-3" :class="{ 'no-image': !news.image }" v-for="(news, index) in newsList">
          <img
            v-if="news.image"
            :src="news.image"
            alt="News Image"
            class="news-card__image"
          />
          <div class="card-content">
            <div>
              <div class="news-card__date">
                <span class="day">28</span>
                <div class="month-year">
                  <span>February</span> <span>2022</span>
                </div>
              </div>
              <h2 class="news-card__title">{{ news.name }}</h2>
              <p class="news-card__description">{{ news.previewText }}</p>
            </div>
            <div class="news-card__category">{{ news.type.value }}</div>
          </div>
        </div>
      </div>
      <div class="news-container__load-more row">
        <button
          v-show="btnShow === true"
          @click="loadMore"
          class="news-container__button"
        >
          Загрузить ещё
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, reactive, onMounted } from "vue";
import NewsCard from "./NewsCard.vue";
import { getNews } from "../services/api.js";

const btnShow = ref(true);
const newsList = reactive([]);

const loadMore = () => {
  getNews(newsList, btnShow);
  console.log(newsList);
};

onMounted(() => {
  getNews(newsList, btnShow);
  console.log(newsList);
});
</script>

<style scoped lang="scss">
@import "../fluid.sass";

.news-container__load-more {
  width: auto;
  justify-content: center;
  align-items: center;
  margin: 72px;
}

.news-container__button {
  border: 1px solid #002dbf;
  color: #002dbf;
  background: #fff;
  @include fluid("font-size", 20);
  @include fluid("border-radius", 8);
  @include fluid("width", 203);
  @include fluid("height", 56);
  cursor: pointer;
  transition: 0.6s all ease;
}
.news-container__button:hover {
  border: 1px solid #002dbf;
  background: #0d45fc;
  color: #fff;

  cursor: pointer;
}
.row {
  @include fluid("row-gap", 64);
  @include fluid("column-gap", 48);
}
.container {
  @include fluid("margin-top", 64);
}
.no-image{
  border: 1px solid #0f62fe;
  .card-content{
    border: 0;
  }
}
.news-card {
  display: flex;
  flex-direction: column;
  justify-content: stretch;
  position: relative;
  background: #fff;
  @include fluid("width", 534);
  @include fluid("border-radius", 16);
  overflow: hidden;
}

.card-content {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
  border: 1px solid #0f62fe;
  border-top: 0;
  @include fluid("border-bottom-left-radius", 16);
  @include fluid("border-bottom-right-radius", 16);
  @include fluid("padding", 20);
}

.news-card__image {
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
  @include fluid("margin-top", 20);
  @include fluid("border-radius", 360);
  @include fluid("font-size", 14);
  padding: 4px 16px;
  width: max-content;
}
@media (max-width: 1450px) {
  .row {
    justify-content: space-evenly;
  }
}
@media (max-width: 220px) {
  .news-container__button {
    width: 190px;
  }
}
</style>
