// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  modules: [
    '@nuxt/image',
    '@nuxtjs/tailwindcss',
    'shadcn-nuxt',
    '@nuxtjs/color-mode',
    ['@nuxtjs/google-fonts', {
      families : {
      Lato: {
        wght: [100, 400, 700],
        ital: [100, 400]
      },
    }
  }],
    '@nuxt/icon',
  ],
  shadcn: { prefix: 'Ui', componentDir: './components/ui' },
  runtimeConfig : {
    public : {
      APP_DATA_ID : process.env.APP_DATA_ID
    }
  }
})