export const reserveMailBody = (formData, serviceName, host) => {
  const { name, email, tel, car, datetime, message } = formData
  return `
${name}様

この度は${serviceName}をご利用いただきありがとうございます。
以下の内容でWeb予約を受け付けました。

ご入力いただいた内容を元に担当よりご連絡致しますので今しばらくお待ち下さい。

---
# お名前
${name} 様

# メールアドレス
${email}

# お電話番号
${tel}

# ご希望の車種
${car}

# 出発希望日時
${datetime}

# ご質問・ご要望など
${message}
---

引き続き${serviceName}をよろしくお願い致します！

※ こちらのメールへの返信は受け付けておりません。

====================================

# ${serviceName} 公式サイト
${host}

====================================
`
}