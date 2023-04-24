<template lang="pug">
SectionsCar(:car="car")
SectionsStoreInfo
</template>

<script setup>
import * as ctf from "contentful";

const config = useRuntimeConfig();
const contentful = ctf.createClient({
  space: config.public.ctf.spaceId,
  accessToken: config.public.ctf.accessToken,
});

const { id } = useRoute().params;
const car = await contentful.getEntry(id);
</script>
