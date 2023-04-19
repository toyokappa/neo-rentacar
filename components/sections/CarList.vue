<template lang="pug">
section.section
  h2.t-center.f-24.mb-3 車種一覧
  .container-xs
    .category(v-for="(carList, category) in categoryList" :key="category")
      h3.title.mb-1 {{ category }}
      .cell-pc.cell-3
        PartsCarItem.mb-2(
          v-for="car in carList" :key="car.id"
          :photo="car.photos[0]?.image.url"
          :utilities="car.utilities"
          :name="car.name"
          :priceWeekly="car.priceWeekly"
          :priceMonthly="car.priceMonthly"
          @click="useRouter().push(`/car/${car.id}`)"
        )
</template>

<script setup>
const props = defineProps({
  categoryList: Object,
});
</script>

<style lang="sass">
.title
  width: 100%
  padding: 10px 20px
  color: $white
  background-color: $grey
</style>
