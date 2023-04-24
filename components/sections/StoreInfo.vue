<template lang="pug">
section.section
  h2.t-center.f-24.mb-3 店舗情報
  .container
    .mb-2
      strong 営業時間
      p xx:00~xx:00（最終受付: xx:00）
    .mb-2
      strong 住所
      p 〒370-0411
      p 群馬県太田市亀岡町429−2
  .map.eyecatch
    iframe(src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3217.2138738929184!2d139.3162533!3d36.258586199999996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x601edee5bb986ff1%3A0x215926c6b8fd27de!2z44CSMzcwLTA0MTEg576k6aas55yM5aSq55Sw5biC5LqA5bKh55S677yU77yS77yZ4oiS77ySIOODhuOCo-ODu-ODlOOCo-ODu-OCqOODlQ!5e0!3m2!1sja!2sjp!4v1682318748616!5m2!1sja!2sjp" title="rentacar map" width="100%" height="100%" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade")
</template>

<style lang="sass" scoped>
.map
  @include pc
    width: 100%
    max-width: 992px
    margin: 0 auto
</style>
