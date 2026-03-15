// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
    '@nuxt/eslint',
    '@nuxt/image',
    '@nuxt/ui',
    '@nuxtjs/i18n',
    '@nuxt/content',
    '@vueuse/nuxt',
    'nuxt-og-image',
    'motion-v/nuxt',
    'nuxt-studio'
  ],

  devtools: {
    enabled: true
  },

  css: ['~/assets/css/main.css'],

  compatibilityDate: '2024-11-01',

  fonts: {
    provider: 'google'
  },

  i18n: {
    locales: [
      { code: 'ja', name: 'Japanese' }
    ],
    strategy: 'prefix_except_default',
    defaultLocale: 'ja'
  },

  nitro: {
    prerender: {
      routes: [
        '/'
      ],
      crawlLinks: true
    }
  },

  eslint: {
    config: {
      stylistic: {
        commaDangle: 'never',
        braceStyle: '1tbs'
      }
    }
  },

  studio: {
    dev: false,
    repository: {
      provider: 'github',
      owner: 'YutaInouePH',
      repo: 'kendogu-esaki',
      branch: 'main'
    }
  }
})
