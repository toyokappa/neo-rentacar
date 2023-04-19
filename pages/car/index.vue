<template lang="pug">
SectionsCarList(:categoryList="categoryList")
SectionsStoreInfo
</template>

<script setup>
const { data } = await useMicroCMSGetList({
  endpoint: "cars",
});
const cars = data.value.contents;
const categoryList = groupBy(cars, "category");

// const carList = [
//   {
//     id: 1,
//     category: "軽自動車",
//     photo: "",
//     tags: ["レギュラーガソリン", "スマホスタンド"],
//     names: "xxx, yyy",
//     priceWeekly: 7000,
//     priceMonthly: 28000,
//   },
//   {
//     id: 2,
//     category: "軽トラ",
//     photo: "",
//     tags: ["レギュラーガソリン", "スマホスタンド"],
//     names: "xxx, yyy",
//     priceWeekly: 12000,
//     priceMonthly: 48000,
//   },
//   {
//     id: 3,
//     category: "軽バン",
//     photo: "",
//     tags: ["レギュラーガソリン", "スマホスタンド"],
//     names: "xxx, yyy",
//     priceWeekly: 12000,
//     priceMonthly: 48000,
//   },
// ];
</script>
