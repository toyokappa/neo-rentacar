<template lang="pug">
a.button(v-if="outside" :style="buttonStyles" target="_blank" rel="noopener")
  slot
nuxt-link.button(v-else :style="buttonStyles")
  slot
</template>

<script setup lang="ts">
interface Props {
  color?: string;
  outside?: boolean;
}

const props = withDefaults(defineProps<Props>(), {
  color: "black",
  inside: false,
});

const buttonStyles = computed(() => {
  let styles;
  switch (props.color) {
    case "black":
      styles = { color: "white", backgroundColor: "black" };
      break;
    case "white":
      styles = {
        color: "black",
        backgroundColor: "white",
        border: "1px solid black",
      };
      break;
    default:
      styles = { color: "white", backgroundColor: "black" };
  }
  return styles;
});
</script>

<style lang="sass" scoped>
.button
  display: block
  font-weight: bold
  text-align: center
  text-decoration: none
  width: 100%
  padding: 20px 40px
  border-radius: 5px
</style>
