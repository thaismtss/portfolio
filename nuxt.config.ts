// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
    publicRuntimeConfig: {
        CTF_SPACE_ID: process.env.CTF_SPACE_ID,
        CTF_CDA_ACCESS_TOKEN: process.env.CTF_CDA_ACCESS_TOKEN,
        CTF_PERSON_ID: process.env.CTF_PERSON_ID,
        CTF_BLOG_POST_TYPE_ID: process.env.CTF_BLOG_POST_TYPE_ID,
    },
    typescript: {
        shim: false
    }
})
