<template lang="pug">
section.section
  h2.t-center.f-24.mb-3 {{ car.category }}/{{ car.names }}
  .container-xs.mb-3
    Carousel.main-photo(
      :itemsToShow="1"
      v-model="currentSlide"
    )
      Slide(v-for="slide in 4" :key="slide")
        .photo {{ slide }}
    Carousel.mb-3(
      :itemsToShow="2.5"
      wrapAround
      v-model="currentSlide"
    )
      Slide(v-for="slide in 4" :key="slide" @click="slideTo(slide - 1)")
        .photo {{ slide }}
    .cap-list.mb-1
      .cap(v-for="cap in car.caps" :key="cap.title")
        .title {{ cap.title }}
        .body
          span.icon {{ cap.icon }}
          span x {{ cap.value }}
    ul.tags
      li.tag(v-for="tag in car.tags" :key="tag") {{ tag }}
  h3.t-center.f-20.mb-3 レンタカー料金
  .container-xs.mb-3
    .price-list
      .price
        .title ウィークリー
        .body
          .amount
            span.value {{ car.priceWeekly.toLocaleString() }}円
            span.unit (税込)
          .extend 延長 {{ car.extendWeekly.toLocaleString() }}円(税込)/日
      .price
        .title マンスリー
        .body
          .amount
            span.value {{ car.priceMonthly.toLocaleString() }}円
            span.unit (税込)
          .extend 延長 {{ car.extendMonthly.toLocaleString() }}円(税込)/日
  .container
    .cell-pc.cell-3
      PartsButton(to="/") この車種で予約する
</template>

<script setup>
import "vue3-carousel/dist/carousel.css";
import { Carousel, Slide } from "vue3-carousel";

const props = defineProps({
  car: Object,
});

const currentSlide = ref(0);
const slideTo = (slide) => {
  currentSlide.value = slide;
};
</script>

<style lang="sass" scoped>
.main-photo
  margin-bottom: 5px
  .photo
    margin-right: 0
.photo
  width: 100%
  aspect-ratio: 4/3
  background-color: $base
  margin-right: 5px
.cap-list
  display: flex
  .cap
    text-align: center
    width: 100%
    margin-right: 5px
    &:last-child
      margin-right: 0
    .title
      color: $white
      background-color: $primary
      padding: 3px 0
      border-radius: 3px
    .body
      padding: 10px 0
.tags
  list-style: none
  display: flex
  flex-wrap: wrap
  .tag
    padding: 3px 6px
    font-size: 12px
    color: $white
    background-color: $grey
    border-radius: 3px
    margin-right: 3px
    margin-bottom: 3px
.price-list
  display: flex
  .price
    width: 100%
    text-align: center
    margin-right: 5px
    &:last-child
      margin-right: 0
    .title
      background-color: $grey
      padding: 5px 0
    .body
      border: 1px solid $grey
      padding: 10px 0
      .amount
        font-weight: bold
        .unit
          font-size: 12px
      .extend
        font-size: 12px
</style>
