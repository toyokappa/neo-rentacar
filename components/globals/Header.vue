<template lang="pug">
header
  .container
    .header-content
      nuxt-link.logo(to="/") レンタカーロゴ
        //- img(src="@/assets/images/logo.png" alt="Elvina" width="30" height="98")
nav
  .container
    ul
      li
        nuxt-link(to="/") トップ
      li
        nuxt-link(to="/") ご利用の流れ
      li
        nuxt-link(to="/") 車種/料金/保険
      li
        nuxt-link(to="/") 店舗情報
      li
        nuxt-link(to="/") 会社概要
</template>

<style lang="sass" scoped>
header
  width: 100%
  background-color: $white
  border-top: 5px solid $primary
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
