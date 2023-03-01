<template lang="pug">
footer
  nav
    .container
      ul.f-14
        li(v-for="menu in menuList" :key="menu.title")
          nuxt-link(:to="menu.link") {{ menu.title }}
  .copyrights &copy; RENTACAR 2023
</template>

<script setup>
import { menuList } from "~/constants";
</script>

<style lang="sass" scoped>
footer
  width: 100%
  @include pc
    nav
      background-color: $base
      color: $black
      padding: $block-padding
      ul
        width: 100%
        list-style: none
        display: flex
        border-left: 1px solid $hint
        li a
          color: inherit
          text-decoration: none
          padding: 10px 20px
          border-right: 1px solid $hint
  .copyrights
    font-size: 12px
    font-weight: bold
    text-align: center
    color: $white
    background-color: $dark
    padding: $block-padding
</style>
