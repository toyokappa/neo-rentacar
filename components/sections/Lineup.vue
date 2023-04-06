<template lang="pug">
section.section
  h2.t-center.f-24.mb-3 ご利用可能車種
  .container
    .cell-pc.cell-2
      .car.mb-3(v-for="car in lineup" :key="car.name")
        .eyecatch.mb-1
        .t-center
          h3 {{ car.name }}
          p {{ car.price }}
    .cell-pc.cell-3
      PartsButton(to="/car") 車種の一覧を見る
</template>

<script setup>
const props = defineProps({
  lineup: Array,
});
</script>

<style lang="sass">
// これをやらないとGlobalなcssが効かなくなる
</style>
