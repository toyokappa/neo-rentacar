<template lang="pug">
SectionsCar(:car="car")
SectionsStoreInfo
</template>

<script setup>
const car = {
  id: 1,
  category: "軽自動車",
  photo: "",
  tags: ["レギュラーガソリン", "スマホスタンド"],
  caps: [
    {
      title: "乗車定員",
      icon: "人",
      value: "4人",
    },
    {
      title: "最適人数",
      icon: "人",
      value: "4人",
    },
    {
      title: "荷物の目安",
      icon: "物",
      value: "3個",
    },
  ],
  names: "xxx, yyy",
  priceWeekly: 7000,
  extendWeekly: 1000,
  priceMonthly: 28000,
  extendMonthly: 1000,
};
</script>
