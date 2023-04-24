<template lang="pug">
SectionsFirstView
SectionsLineup(:lineup="lineup")
SectionsStoreInfo
</template>

<script setup>
import lightcar from "@/assets/images/lightcar.webp";
import lighttruck from "@/assets/images/lighttruck.jpg";

const lineup = [
  { name: "軽自動車", price: "1週間7,000円", photo: lightcar },
  { name: "軽バン・軽トラ", price: "1週間12,000円", photo: lighttruck },
];
</script>
