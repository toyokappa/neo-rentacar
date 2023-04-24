<template lang="pug">
.car-item
  .content
    .left.me-1
      img.photo(:src="photo")
    .right
      .name
        img.icon(src="@/assets/images/car-icon.svg")
        .text {{ name }}
      ul.tags
        li.tag(v-for="utility in utilities" :key="utility") {{ utility }}
      table.price
        tr
          td.label ウィークリー
          td.value
            span {{ priceWeekly.toLocaleString() }}円
            span.unit (税込)
        tr
          td.label マンスリー
          td.value
            span {{ priceMonthly.toLocaleString() }}円
            span.unit (税込)
</template>

<script setup>
const props = defineProps({
  category: String,
  photo: String,
  utilities: Array,
  name: String,
  priceWeekly: Number,
  priceMonthly: Number,
});
</script>

<style lang="sass" scoped>
.car-item
  .content
    display: flex
    .left
      .photo
        width: 120px
        height: 120px
        object-fit: cover
        object-position: center center
        background-color: $base
    .right
      .name
        display: flex
        align-items: center
        margin-bottom: 5px
        .icon
          width: 20px
          height: auto
          margin-right: 5px
      .price
        border-collapse: spacing
        border-spacing: 0 5px
        tr
          .label
            font-size: 12px
            color: $white
            background-color: $primary
            padding: 3px 6px
            border-right: 10px solid $white
          .value
            .unit
              font-size: 10px
</style>
