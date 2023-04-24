<template lang="pug">
SectionsReserveTel
SectionsReserveForm(:categoryList="categoryList")
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
  order: "sys.createdAt",
});

const categoryList = groupByColumn(
  cars,
  ["fields", "category"],
  ["fields", "name"]
);
</script>
