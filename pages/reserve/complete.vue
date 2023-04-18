<template lang="pug">
.complete
  img.complete-image(src="@/assets/images/complete.png")
  .complete-title 予約が完了しました
  .complete-text
    p この度は{{ serviceName }}のご予約
    p.mb-3 誠にありがとうございました。
    p 担当よりご連絡いたしますので
    p.mb-3 今しばらくお待ち下さい。
    p このままページを閉じていただいて
    p.mb-3 問題ございません。
    p トップページへ戻られる方は
    p 下記のリンクをクリックしてください。
  nuxt-link.back-link(to="/") トップページへ戻る
</template>

<script setup lang="ts">
const { serviceName } = useRuntimeConfig().public;
</script>

<style lang="sass" scoped>
.complete
  text-align: center
  letter-spacing: 0.05em
  padding: 50px 0 80px
  .complete-image
    display: block
    margin: 0 auto 30px
  .complete-title
    font-size: 24px
    font-weight: bold
    margin-bottom: 30px
  .complete-text
    margin-bottom: 30px
  .back-link
    color: $primary
    text-decoration: none
</style>
