<script setup lang="ts">
import { ja } from '@nuxt/ui/locale'

const color = 'white'

useHead({
  meta: [
    { charset: 'utf-8' },
    { name: 'viewport', content: 'width=device-width, initial-scale=1' },
    { key: 'theme-color', name: 'theme-color', content: color }
  ],
  link: [
    { rel: 'icon', href: '/favicon.ico' }
  ],
  htmlAttrs: {
    lang: 'en'
  }
})

useSeoMeta({
  titleTemplate: '%s - Nuxt Portfolio Template',
  ogImage: 'https://ui.nuxt.com/assets/templates/nuxt/portfolio-light.png',
  twitterImage: 'https://ui.nuxt.com/assets/templates/nuxt/portfolio-light.png',
  twitterCard: 'summary_large_image'
})
</script>

<template>
  <UApp :locale="ja">
    <div class="flex">
      <div class="flex-1 min-w-0">
        <AppHeader :links="navLinks" />
      </div>
    </div>

    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>

    <AppFooter />
  </UApp>
</template>
