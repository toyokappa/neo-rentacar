<template lang="pug">
header
  .container
    .header-content
      nuxt-link.logo(to="/") NEOレンタカー
        //- img(src="@/assets/images/logo.png" alt="Elvina" width="30" height="98")
</template>

<script setup>
import { menuList } from "~/constants";
</script>

<style lang="sass" scoped>
header
  width: 100%
  background-color: $white
  border-top: 5px solid $primary
  border-bottom: 1px solid $base
  padding: 20px 0
  .header-content
    display: flex
    align-items: center
    justify-content: flex-start
  .logo
    img
      height: 30px
      width: auto
nav
  background-color: $primary
  ul
    list-style: none
  @include pc
    ul
      display: flex
      border-left: 1px solid $base
      li
        width: 100%
        text-align: center
        border-right: 1px solid $white
        a
          display: block
          color: $white
          text-decoration: none
          padding: 20px 0
</style>
