<template lang="pug">
SectionsCarList(:categoryList="categoryList")
SectionsStoreInfo
</template>

<script setup>
import * as ctf from "contentful";

const config = useRuntimeConfig();
const contentful = ctf.createClient({
  space: config.public.ctf.spaceId,
  accessToken: config.public.ctf.accessToken,
});
const { items: cars } = await contentful.getEntries({
  content_type: "car",
  order: "-fields.category",
});

const categoryList = groupBy(cars, ["fields", "category"]);
</script>
