<template lang="pug">
section.section
  h2.t-center.f-24.mb-3 ご利用の流れ
  .container
    .mb-3 ご利用時にご用意いただくもの、お支払い、途中解約・キャンセル料など、レンタカーのご利用方法をご案内致します。
    PartsStep.mb-2(:step="1" title="ご予約" :image="flow01")
      p インターネット予約、電話予約、ご来店予約のいずれかの方法でご予約が可能です。事前のご予約をお願い致します。
    PartsStep.mb-2(:step="2" title="必要書類のご準備" :image="flow02")
      p.mb-1 レンタルに際して以下の書類が必要となりますのでご準備ください。
      ol
        li 契約者ご本人の運転免許証
        li 契約者ご本人の健康保険証
        li その他運転される方の運転免許証および健康保険証（コピーでOK）
    PartsStep.mb-2(:step="3" title="ご来店")
      p.mb-1 ご予約のお時間までに必ずご来店をお願い致します。万が一、ご予約時間に遅れる場合は事前に必ずご連絡をお願い致します。
      p 事前のご連絡なく、ご予約時間を1時間超過した場合は、「予約取り消し」として対応させていただき、キャンセル料を請求させていただきますので、予めご了承ください。
    PartsStep.mb-2(:step="4" title="ご契約" :image="flow04")
      p ご契約書の記載とご準備いただいた書類のご提出をお願い致します。
    PartsStep.mb-2(:step="5" title="お支払い" :image="flow05")
      p.mb-1 基本料金、オプション料金などは出発日にお支払いいただきます。
      p ご契約期間の延長をご希望の場合は、一報ご連絡をいただき、延長料金をご来店いただきお支払いいただくか、銀行振込を行うかをお選びください。
    PartsStep.mb-2(:step="6" title="ご出発" :image="flow06")
      p.mb-1 レンタカーの車体チェック、お車の操作方法説明、万が一の際のご対応方法をご説明させていただきます。
      p 車体チェックと操作説明が完了しましたらご出発いただけます。
    PartsStep.mb-2(:step="7" title="ご返却" noLine :image="flow07")
      p.mb-1 レンタカーは必ずご契約日時までにご返却をお願い致します。万が一、ご返却が遅れる場合は、事前に必ずご一報ご連絡をお願い致します。
      p.mb-1 なお、返却前にガソリンスタンドで燃料を満タンにしてから、ご返却ください。
      p 超過料金等がある場合は、ご返却時に精算をいたしますので、よろしくお願い致します。
    .cell-pc.cell-3
      PartsButton(to="/reserve") 予約ページに進む
</template>

<script setup>
import flow01 from "@/assets/images/flow01.jpeg";
import flow02 from "@/assets/images/flow02.jpeg";
import flow04 from "@/assets/images/flow04.jpeg";
import flow05 from "@/assets/images/flow05.jpeg";
import flow06 from "@/assets/images/flow06.jpeg";
import flow07 from "@/assets/images/flow07.jpeg";
</script>
