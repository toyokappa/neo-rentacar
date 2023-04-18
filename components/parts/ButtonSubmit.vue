<template lang="pug">
button.button
  slot
</template>

<style lang="sass" scoped>
.button
  display: block
  font-weight: bold
  text-align: center
  text-decoration: none
  background-color: $primary
  width: 100%
  padding: 20px 40px
  border-radius: 5px
  &:disabled
    background-color: $hint
</style>
