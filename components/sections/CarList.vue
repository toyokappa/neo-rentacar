<template lang="pug">
section.section
  h2.t-center.f-24.mb-3 車種一覧
  .container-xs
    .cell-pc.cell-3
      PartsCarItem.mb-2(
        v-for="car in carList" :key="car.id"
        :category="car.category"
        :photo="car.photo"
        :tags="car.tags"
        :names="car.names"
        :priceWeekly="car.priceWeekly"
        :priceMonthly="car.priceMonthly"
        @click="useRouter().push(`/car/${car.id}`)"
      )
</template>

<script setup>
const props = defineProps({
  carList: Array,
});
</script>
