<template lang="pug">
SectionsFirstView
SectionsLineup(:lineup="lineup")
SectionsStoreInfo
</template>

<script setup>
const lineup = [
  { name: "軽自動車", price: "1週間7,000円" },
  { name: "軽バン・軽トラ", price: "1週間12,000円" },
];
</script>
