import * as ctf from 'contentful'

export default defineNuxtPlugin(() => {
  const config = useRuntimeConfig()
  const contentful = ctf.createClient({
    space: config.public.ctf.spaceId,
    accessToken: config.public.ctf.accessToken
  })

  return {
    provide: {
      contentful
    }
  }
})