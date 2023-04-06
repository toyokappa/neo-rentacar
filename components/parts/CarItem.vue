<template lang="pug">
.car-item
  h3.title.mb-1 {{ category }}
  .content
    .left.me-1
      .photo
    .right
      ul.tags
        li.tag(v-for="tag in tags" :key="tag") {{ tag }}
      .names
        img.icon(src="@/assets/images/car-icon.svg")
        .text {{ names }}
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
  tags: Array,
  names: String,
  priceWeekly: Number,
  priceMonthly: Number,
});
</script>

<style lang="sass" scoped>
.car-item
  .title
    width: 100%
    padding: 10px 20px
    color: $white
    background-color: $grey
  .content
    display: flex
    .left
      .photo
        width: 120px
        height: 120px
        background-color: $base
    .right
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
      .names
        display: flex
        align-items: center
        font-size: 12px
        margin-bottom: 5px
        .icon
          margin-right: 5px
      .price
        border-collapse: spacing
        border-spacing: 0 5px
        tr
          .label
            font-size: 12px
            color: $white
            background-color: $grey
            padding: 3px 6px
            border-right: 10px solid $white
          .value
            .unit
              font-size: 10px
</style>
