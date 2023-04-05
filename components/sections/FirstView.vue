<template lang="pug">
section
  Carousel(wrapAround)
    Slide(v-for="slide in 3" :key="slide")
      .hero 画像${{ slide }}
    template(#addons)
      Navigation
      Pagination
  .container
    .content
      h1.logo NEOレンタカー
      .description.mb-3
        p 説明文
      .cell-pc.cell-3
        PartsButton.mb-2(to="/") ご利用の流れ
</template>

<script setup>
import "vue3-carousel/dist/carousel.css";
import { Carousel, Slide, Pagination, Navigation } from "vue3-carousel";
</script>

<style lang="sass" scoped>
.hero
  width: 100%
  height: 360px
  background-color: $grey
.content
  padding: 50px 0
  text-align: center
  .logo
    margin-bottom: 20px
    img
      height: 48px
      width: auto
      margin: 0 auto 10px
    .text
      font-size: 20px
</style>
