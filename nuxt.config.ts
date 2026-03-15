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
    'nuxt-studio',
    '@nuxthub/core'
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

  ui: {
    colorMode: false
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

  hub: {
    blob: true
  },

  studio: {
    media: {
      external: true
    },
    repository: {
      provider: 'github',
      owner: 'YutaInouePH',
      repo: 'kendogu-esaki',
      branch: 'main'
    }
  },

  vite: {
    optimizeDeps: {
      include: [
        '@vue/devtools-core',
        '@vue/devtools-kit'
      ]
    }
  }
})
