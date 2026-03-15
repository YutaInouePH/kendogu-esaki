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
    '@nuxthub/core',
    '@vercel/analytics',
    '@vercel/speed-insights'
  ],
  devtools: {
    enabled: true
  },

  css: ['~/assets/css/main.css'],

  ui: {
    colorMode: false
  },

  compatibilityDate: '2024-11-01',

  nitro: {
    prerender: {
      routes: [
        '/'
      ],
      crawlLinks: true
    }
  },

  hub: {
    blob: true
  },

  vite: {
    optimizeDeps: {
      include: [
        '@vue/devtools-core',
        '@vue/devtools-kit'
      ]
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
  }
})
