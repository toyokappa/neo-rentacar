<template lang="pug">
section.section
  h2.t-center.f-24.mb-3 車種一覧
  .container-xs
    .category(v-for="(carList, category) in categoryList" :key="category")
      h3.title.mb-1 {{ category }}
      .cell-pc.cell-3
        PartsCarItem.mb-3(
          v-for="car in carList" :key="car.sys.id"
          :photo="car.fields.photos[0].fields.file.url"
          :utilities="car.fields.utilities"
          :name="car.fields.name"
          :priceWeekly="car.fields.priceWeekly"
          :priceMonthly="car.fields.priceMonthly"
          @click="useRouter().push(`/car/${car.sys.id}`)"
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
  background-color: $primary
</style>
