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
</script>
