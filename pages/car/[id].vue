<template lang="pug">
SectionsCar(:car="car")
SectionsStoreInfo
</template>

<script setup>
const { id } = useRoute().params;

const { data } = await useMicroCMSGetListDetail({
  endpoint: "cars",
  contentId: id,
});
const car = data.value;
</script>
