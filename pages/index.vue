<template lang="pug">
SectionsFirstView
SectionsLineup(:lineup="lineup")
SectionsStoreInfo
</template>

<script setup>
import lightcar from "@/assets/images/lightcar.jpg";
import lightban from "@/assets/images/lightban.jpg";
import truck from "@/assets/images/truck.jpg";

const lineup = [
  { name: "軽自動車", price: "1週間7,000円", photo: lightcar },
  { name: "軽バン", price: "1週間12,000円", photo: lightban },
  { name: "トラック", price: "1週間xx,000円", photo: truck },
];
</script>
