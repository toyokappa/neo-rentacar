<template lang="pug">
.complete
  img.complete-image(src="@/assets/images/error.png")
  .complete-title 予約に失敗しました
  .complete-text
    p この度は誠に申し訳ございません。
    p 予約処理中にエラーが発生し
    p.mb-3 予約に失敗しました。
    p 原因の究明に少しお時間を
    p.mb-3 頂く場合がございます。
    p もしよろしければお電話にて
    p.mb-3 ご予約ください。
  a.reserve-link.mb-3(
    href="tel:"
  ) お電話で申し込む方はこちらから
</template>

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
  .reserve-link
    display: block
    color: $primary
    text-decoration: none
</style>
