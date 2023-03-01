<template lang="pug">
section
  .hero
  .container
    .content
      .concept.f-20.mb-3
        p.mb-1 1ヶ月35,400円（税込）（任意保険加入済み、ナビ・ETC標準装備）から、ご利用できる軽自動車の格安レンタカー。
        p 法人様にも対応。必要経費として処理できます。
      .description.mb-3
        p.mb-1 当社のレンタカーは金額は格安ですが、任意保険の補償内容は対人・対物無制限、人身傷害3,000万円の安心プランです。
        p.mb-1 また、全車にナビ・ETCを標準装備しております。
        p.mb-1 個人のお客様から法人様の営業車（全て必要経費として処理できます）まで幅広く対応しております。
        p 対応エリアは北関東のみとなります。
      .cell-pc.cell-3
        PartsButton.mb-2(to="/") 車種
        PartsButton.mb-2(to="/") ご利用の流れ
        PartsButton.mb-2(to="/") 店舗
</template>

<style lang="sass" scoped>
.hero
  width: 100%
  height: 360px
  background-color: $grey
.content
  padding: 50px 0
  .logo
    margin-bottom: 20px
    img
      height: 48px
      width: auto
      margin: 0 auto 10px
    .text
      font-size: 20px
  .concept
    font-weight: bold
    background-color: $base
    padding: 30px
    border: 3px solid $black
    border-radius: 10px
</style>
