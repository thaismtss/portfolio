/* eslint-disable import/no-named-as-default-member */
/* eslint-disable import/no-duplicates */
// for dev
import { createClient } from 'contentful'

// for SSR, SSG
import contentful from 'contentful'

export default defineNuxtPlugin((nuxtApp) => {
  const config = useRuntimeConfig()
  const createClientFunc =
    process.env.NODE_ENV === 'development'
      ? createClient
      : contentful.createClient

  const client = createClientFunc({
    space: config.CTF_SPACE_ID,
    accessToken: config.CTF_CDA_ACCESS_TOKEN,
  })
  nuxtApp.provide('client', client)
})
