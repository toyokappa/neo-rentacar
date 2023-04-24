<template lang="pug">
section.section
  h2.t-center.f-24.mb-3 {{ car.fields.category }}/{{ car.fields.name }}
  .container-xs.mb-3
    Carousel.main-photo(
      :itemsToShow="1"
      :touchDrag="false"
      v-model="currentSlide"
    )
      Slide(v-for="photo in car.fields.photos" :key="photo.sys.id")
        img.photo(:src="photo.fields.file.url")
    Carousel.mb-3(
      :itemsToShow="2.5"
      wrapAround
      v-model="currentSlide"
    )
      Slide(v-for="(photo, index) in car.fields.photos" :key="photo.sys.id" @click="slideTo(index)")
        img.photo(:src="photo.fields.file.url")
    .cap-list.mb-1
      .cap
        .title 乗車定員
        .body
          img.icon(src="@/assets/images/human-icon.svg")
          span × {{ car.fields.humanCapLimit }}
      .cap
        .title 最適人数
        .body
          img.icon(src="@/assets/images/human-icon.svg")
          span × {{ car.fields.humanCapSuggest }}
      .cap
        .title 荷物の目安
        .body
          img.icon(src="@/assets/images/baggage-icon.svg")
          span × {{ car.fields.baggageCap }}
    ul.tags
      li.tag(v-for="utility in car.fields.utilities" :key="utility") {{ utility }}
  h3.t-center.f-20.mb-3 レンタカー料金
  .container-xs.mb-3
    .price-list
      .price
        .title ウィークリー
        .body
          .amount
            span.value {{ car.fields.priceWeekly.toLocaleString() }}円
            span.unit (税込)
          .extend 延長 {{ car.fields.extendWeekly.toLocaleString() }}円(税込)/日
      .price
        .title マンスリー
        .body
          .amount
            span.value {{ car.fields.priceMonthly.toLocaleString() }}円
            span.unit (税込)
          .extend 延長 {{ car.fields.extendMonthly.toLocaleString() }}円(税込)/日
  .container
    .cell-pc.cell-3
      PartsButton(:to="`/reserve?car=${car.fields.name}`") この車種で予約する
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
  object-fit: cover
  object-position: center center
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
      display: flex
      justify-content: center
      align-items: center
      padding: 10px 0
.price-list
  display: flex
  .price
    width: 100%
    text-align: center
    margin-right: 5px
    &:last-child
      margin-right: 0
    .title
      color: $white
      background-color: $primary
      padding: 5px 0
    .body
      border: 1px solid $primary
      padding: 10px 0
      .amount
        font-weight: bold
        .unit
          font-size: 12px
      .extend
        font-size: 12px
</style>
