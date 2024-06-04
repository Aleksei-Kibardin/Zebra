<template>
  <div class="wrap-content">
    <div class="container">
      <div class="row">
        <NewsCard
          v-for="(news, index) in newsList"
          :key="index"
          :image="news.image"
          :date="news.date"
          :title="news.title"
          :description="news.description"
          class="news-container__card"
        />
      </div>
      <div class="news-container__load-more row">
        <button @click="loadMore" class="news-container__button">
          Загрузить ещё
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import NewsCard from "./NewsCard.vue";

const newsList = ref([
  {
    image: "@/assets/imgCard.png",
    date: "28 February 2022",
    title: "Alpha сообщает о новых высокопроизводительных...",
    description:
      "Alpha объявляет о партнёрстве с Миром, ведущим мировым поставщиком экологических услуг, чтобы помочь клиентам строить светлое будущее.",
  },
  {
    image: "@/assets/imgCard.png",
    date: "28 February 2022",
    title: "Alpha объединяет усилия с Миром...",
    description:
      "Alpha объявляет о партнёрстве с Миром, ведущим мировым поставщиком экологических услуг, чтобы помочь клиентам строить светлое будущее.",
  },
  {
    image: "@/assets/imgCard.png",
    date: "28 February 2022",
    title: "Alpha объединяет усилия с Миром...",
    description:
      "Alpha объявляет о партнёрстве с Миром, ведущим мировым поставщиком экологических услуг, чтобы помочь клиентам строить светлое будущее.",
  },
  {
    image: "@/assets/imgCard.png",
    date: "28 February 2022",
    title: "Alpha объединяет усилия с Миром...",
    description:
      "Alpha объявляет о партнёрстве с Миром, ведущим мировым поставщиком экологических услуг, чтобы помочь клиентам строить светлое будущее.",
  },
  {
    image: "@/assets/imgCard.png",
    date: "28 February 2022",
    title: "Alpha объединяет усилия с Миром...",
    description:
      "Alpha объявляет о партнёрстве с Миром, ведущим мировым поставщиком экологических услуг, чтобы помочь клиентам строить светлое будущее.",
  },
  {
    image: "@/assets/imgCard.png",
    date: "28 February 2022",
    title: "Alpha объединяет усилия с Миром...",
    description:
      "Alpha объявляет о партнёрстве с Миром, ведущим мировым поставщиком экологических услуг, чтобы помочь клиентам строить светлое будущее.",
  },
  {
    image: "@/assets/imgCard.png",
    date: "28 February 2022",
    title: "Alpha объединяет усилия с Миром...",
    description:
      "Alpha объявляет о партнёрстве с Миром, ведущим мировым поставщиком экологических услуг, чтобы помочь клиентам строить светлое будущее.",
  },
  {
    image: "@/assets/imgCard.png",
    date: "28 February 2022",
    title: "Alpha объединяет усилия с Миром...",
    description:
      "Alpha объявляет о партнёрстве с Миром, ведущим мировым поставщиком экологических услуг, чтобы помочь клиентам строить светлое будущее.",
  },
]);

const loadMore = () => {
  console.log("Load more news");
};
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
@media (max-width: 1450px) {
  .row {
    justify-content: space-evenly;
  }
}
@media (max-width: 220px) {
  .news-container__button {
    width: 190px
  }
}
</style>
