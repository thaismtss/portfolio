// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  app: {
    head: {
      link: [
        {
          rel: 'stylesheet',
          href: 'https://fonts.googleapis.com/css2?family=Lato&family=Ubuntu:wght@700&display=swap',
        },
      ],
    },
  },
  publicRuntimeConfig: {
    CTF_SPACE_ID: process.env.CTF_SPACE_ID,
    CTF_CDA_ACCESS_TOKEN: process.env.CTF_CDA_ACCESS_TOKEN,
  },
  typescript: {
    shim: false,
  },
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData:
            '@import "@/assets/styles/_variables.scss"; @import "@/assets/styles/_mixin.scss"; @import "gitart-scroll-carousel/dist/index.css"; @import "gitart-scroll-carousel/dist/GSArrow.css";',
        },
      },
    },
  },
})
