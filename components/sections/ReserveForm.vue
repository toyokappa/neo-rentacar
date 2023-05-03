<template lang="pug">
section.section.bg-dark
  h2.t-center.f-24.mb-3 Webでご予約の方
  .container
    form(
      @submit.prevent="sendMail"
    )
      .cell-pc.cell-3.mb-2
        label.input-label(for="name")
          span.text お名前
          span.required 必須
        input#name.input-field(
          type="text"
          name="name"
          autocomplete="name"
          v-model="name"
          :class="{ invalid: nameError }"
        )
        .invalid-feedback(v-if="nameError") {{ nameError }}
      .cell-pc.cell-3.mb-2
        label.input-label(for="email")
          span.text メールアドレス
          span.required 必須
        input#email.input-field(
          type="email"
          name="email"
          autocomplete="email"
          v-model="email"
          :class="{ invalid: emailError }"
        )
        .invalid-feedback(v-if="emailError") {{ emailError }}
      .cell-pc.cell-3.mb-2
        label.input-label(for="tel")
          span.text お電話番号
          span.required 必須
        input#tel.input-field(
          type="tel"
          name="tel"
          autocomplete="tel"
          v-model="tel"
          :class="{ invalid: telError }"
        )
        .invalid-feedback(v-if="telError") {{ telError }}
      .cell-pc.cell-3.mb-2
        label.input-label(for="car")
          span.text ご希望の車種
          span.required 必須
        select#car.input-field(
          name="car"
          v-model="car"
          :class="{ invalid: carError }"
        )
          option(value="") 車種を選択してください
          optgroup(
            v-for="(names, category) in categoryList"
            :key="category"
            :label="category"
          )
            option(
              v-for="name in names"
              :key="name"
              :value="name"
            ) {{ name }}
        .invalid-feedback(v-if="carError") {{ carError }}
      .cell-pc.cell-3.mb-2
        label.input-label(for="datetime")
          span.text 出発希望日時
          span.required 必須
        input#name.input-field(
          type="datetime-local"
          name="datetime"
          v-model="datetime"
          :class="{ invalid: datetimeError }"
        )
        .invalid-feedback(v-if="datetimeError") {{ datetimeError }}
      .cell-pc.cell-3.mb-2
        label.input-label(for="message")
          span.text ご質問・ご要望など
        textarea#name.input-field(
          name="message"
          rows="5"
          v-model="message"
        )
      .cell-pc.cell-3
        PartsButtonSubmit(
          :disabled="!meta.valid"
        ) 上記の内容で予約する
</template>

<script setup>
import { useField, useForm, configure } from "vee-validate";
import { localize } from "@vee-validate/i18n";
import { reserveMailBody } from "@/utils/mailTemplate";

const props = defineProps({
  categoryList: Object,
});

const { query } = useRoute();
const { meta, values } = useForm({
  initialValues: {
    car: query.car,
  },
});
const { value: name, errorMessage: nameError } = useField("name", "required");
const { value: email, errorMessage: emailError } = useField(
  "email",
  "required|email"
);
const { value: tel, errorMessage: telError } = useField("tel", "required");
const { value: car, errorMessage: carError } = useField("car", "required");
const { value: datetime, errorMessage: datetimeError } = useField(
  "datetime",
  "required"
);
const { value: message } = useField("message");

configure({
  generateMessage: localize({
    ja: {
      names: {
        name: "お名前",
        email: "メールアドレス",
        tel: "お電話番号",
        car: "ご希望の車種",
        datetime: "出発希望日",
        message: "ご質問・ご要望など",
      },
    },
  }),
});

const { serviceName, host, domain, mailDomain, mailBcc, mailgunKey } =
  useRuntimeConfig().public;
const load = useLoad();
const router = useRouter();
const sendMail = async () => {
  load.start();
  const body = reserveMailBody(values, serviceName, host);
  const formData = new FormData();
  formData.append(
    "from",
    `${serviceName} Web予約フォーム <info@${mailDomain || domain}>`
  );
  formData.append("to", email.value);
  formData.append("bcc", mailBcc);
  formData.append("subject", `【${serviceName}】Web予約完了のお知らせ`);
  formData.append("text", body);
  try {
    const mailEndpoint = `https://api.mailgun.net/v3/mg.${
      mailDomain || domain
    }/messages`;
    await $fetch(mailEndpoint, {
      method: "POST",
      body: formData,
      headers: {
        Authorization: "Basic " + btoa(`api:${mailgunKey}`),
      },
    });
    router.push("/reserve/complete");
  } catch (err) {
    router.push("/reserve/error");
    throw err;
  } finally {
    load.finish();
  }
};
</script>
