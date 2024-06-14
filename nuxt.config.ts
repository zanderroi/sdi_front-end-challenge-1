
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: [
    '@nuxtjs/tailwindcss',
    '@pinia/nuxt',

  ],
  pinia: {
    storesDirs: ['./stores/**', './custom-folder/store/**'],
  },
  app: {
    head: {
      title: 'TMSPH',

    }
  },

})
