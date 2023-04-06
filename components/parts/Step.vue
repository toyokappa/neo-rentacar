<template lang="pug">
.step
  .step-header
    .circle
      .item
        .f-12 STEP
        .value.f-24 {{ step }}
    .step-title {{ title }}
  .step-body
    .step-side
      .line(v-if="!noLine")
    .step-main
      .image
        img.eyecatch.mb-1(v-if="image" :src="image" :alt="title" width="1080" height="720")
        .eyecatch.mb-1(v-else)
      .description
        slot
</template>

<script setup>
const props = defineProps({
  step: Number,
  title: String,
  image: String,
  noLine: Boolean,
});
</script>

<style lang="sass">
.step
  .step-header
    display: flex
    align-items: center
    .circle
      font-weight: bold
      width: 60px
      height: 60px
      border: 2px solid $primary
      border-radius: 50%
      margin-right: 10px
      position: relative
      .item
        text-align: center
        color: $primary
        position: absolute
        top: 50%
        left: 50%
        transform: translate(-50%, -50%)
        .value
          margin-top: -5px
  .step-body
    display: flex
    .step-side
      width: 70px
      margin-right: 10px
      .line
        height: calc(100% + 20px)

        background-image: url("@/assets/images/line-dot.png")
        background-size: 7px 28px
        background-position: center
        background-repeat: repeat-y
    .step-main
      width: 100%
      margin-left: auto
      font-size: 14px
      @include pc
        display: flex
        align-items: flex-start
        justify-content: space-around
        flex-wrap: nowrap
        .image, .description
          width: 100%
          flex: 1
        .image
          margin-right: 20px
</style>
