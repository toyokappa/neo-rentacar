<template lang="pug">
SectionsCarList(:carList="carList")
SectionsStoreInfo
</template>

<script setup>
const carList = [
  {
    id: 1,
    category: "軽自動車",
    photo: "",
    tags: ["レギュラーガソリン", "スマホスタンド"],
    names: "xxx, yyy",
    priceWeekly: 7000,
    priceMonthly: 28000,
  },
  {
    id: 2,
    category: "軽トラ",
    photo: "",
    tags: ["レギュラーガソリン", "スマホスタンド"],
    names: "xxx, yyy",
    priceWeekly: 12000,
    priceMonthly: 48000,
  },
  {
    id: 3,
    category: "軽バン",
    photo: "",
    tags: ["レギュラーガソリン", "スマホスタンド"],
    names: "xxx, yyy",
    priceWeekly: 12000,
    priceMonthly: 48000,
  },
];
</script>
