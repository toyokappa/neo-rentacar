const domain = "rentacar.jp"
const host = `https://${domain}`
const serviceName = "NEOレンタカー"
const pageTitle = `激安のレンタカーなら${serviceName}`
const description = "軽自動車の格安レンタカーのレンタリスタ、保険も完備で安心です。（仮）"

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  // ssr: false,
  css: [
    "@/assets/styles/reset.css",
  ],
  vite: {
    css: {
      preprocessorOptions: {
        sass: {
          additionalData: '@import "@/assets/styles/main.sass"'
        }
      }
    },
  },
  app: {
    head: {
      title: pageTitle,
      htmlAttrs: {
        lang: 'ja'
      },
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { hid: 'description', name: 'description', content: description },
        { name: 'keywords', content: '群馬,太田,レンタカー' }, 
        // { name: 'apple-mobile-web-app-title', content: 'Elvina' },
        // { name: 'application-name', content: 'Elvina' },
        // { name: 'msapplication-TileColor', content: '#ffc40d' },
        // { name: 'theme-color', content: '#ffffff' },
      ],
      link: [
        // { rel: 'apple-touch-icon', sizes: '180x180', href: '/apple-touch-icon.png' },
        // { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
        // { rel: 'icon', type: 'image/png', sizes: '32x32', href: '/favicon-32x32.png' },
        // { rel: 'icon', type: 'image/png', sizes: '16x16', href: '/favicon-16x16.png' },
        // { rel: 'manifest', href: '/site.webmanifest' },
        // { rel: 'mask-icon', href: '/safari-pinned-tab.svg', color: '#5bbad5' },
        { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
        { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' },
        { rel: 'preload', as: 'style', href: 'https://fonts.googleapis.com/css2?family=Noto+Sans+JP:wght@400;700&display=swap' },
        { rel: 'stylesheet', media: 'print', onload: "this.media='all'", href: 'https://fonts.googleapis.com/css2?family=Noto+Sans+JP:wght@400;700&display=swap' },
        { rel: 'canonical', href: host },
      ],
    }
  },
  modules: ['nuxt-microcms-module'],
  microCMS: {
    serviceDomain: process.env.MICROCMS_SERVICE_DOMAIN,
    apiKey: process.env.MICROCMS_API_KEY,
  },
  runtimeConfig: {
    public: {
      domain,
      host,
      serviceName,
      mailBcc: ['kpmm42@gmail.com'],
      mailgunKey: process.env.MAILGUN_KEY,
    }
  },
  router: {
    options: {
      // strict: true 一旦外す
    }
  },
  hooks: {
    async "nitro:config"(nitroConfig) {
      if (nitroConfig.dev) {
        return;
      }
      const { data } = await useMicroCMSGetList({
        endpoint: "cars",
      })
      if (nitroConfig.prerender?.routes === undefined) {
        return;
      }
      nitroConfig.prerender.routes = data.value?.contents.map((mount: any) => {
        return `/cars/${mount.id}`;
      });
    }, 
  }
})
