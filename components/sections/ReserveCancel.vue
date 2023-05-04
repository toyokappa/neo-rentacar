<template lang="pug">
section.section
  .container.mb-3
    h2.t-center.f-24.mb-3 途中解約について
    p 原則として、ご契約期間中に中途解約されても返金は行っておりませんので予めご了承ください。
  .container.mb-3
    h2.t-center.f-24.mb-3 キャンセルについて
    p.mb-2 ご予約の取り消し（キャンセル）をされる場合は予約日までの期間に応じてキャンセル料をお支払いいただきます。
    p.mb-2 なお、出発日当日に無断でのキャンセルをされた場合は、基本料金の100%をご請求させていただきますので予めご了承ください。
    table(cellspacing="0")
      tr
        td.label 出発日の3日以上前
        td.value 無料
      tr
        td.label 出発日の2〜1日前
        td.value 30%
      tr
        td.label 出発日の当日
        td.value 50%
  .container.mb-3
    h2.t-center.f-24.mb-3 おタバコを吸われる方へ
    p.mb-2 加熱式のタバコに関してはご利用可能です。
    p.mb-2 普通タバコについては、灰が室内に落ちる可能性もあるためご遠慮いただいております。
    p 普通タバコのご利用が発覚した場合、クリーニング代等をいただくこともございますのでご協力お願いいたします。
  .container
    h2.t-center.f-24.mb-3 傷や汚れについて
    p.mb-2 ご利用中に車体や社内への傷や汚れをつけてしまった場合に関しましては、返却時に自己申告をお願いいたします。
    p.mb-2 自己申告いただけた場合は、基本的には費用をいただかないか、度合いにより一部ご負担いただく形を取らせていただきます。
    p.mb-2 自己申告がなく、後ほど発覚した場合は修繕費及び違約金をいただく場合がございますのでご了承ください。
    p 他のお客様も気持ちよくご利用いただけるようにご協力よろしくお願いいたします。
</template>

<style lang="sass" scoped>
table
  width: 100%
  border-collapse: collapse
  td
    border: 1px solid $black
    &.label
      padding: 10px
      width: 200px
      background-color: $primary
      color: $white
      font-weight: bold
    &.value
      padding: 10px
</style>
