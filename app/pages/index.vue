<script setup lang="ts">
import type { BlogPostProps } from '@nuxt/ui'

const { data: page } = await useAsyncData('index', () => {
  return queryCollection('index').first()
})
if (!page.value) {
  throw createError({
    statusCode: 404,
    statusMessage: 'Page not found',
    fatal: true
  })
}

useSeoMeta({
  title: page.value?.seo.title || page.value?.title,
  ogTitle: page.value?.seo.title || page.value?.title,
  description: page.value?.seo.description || page.value?.description,
  ogDescription: page.value?.seo.description || page.value?.description
})

const { data: featuredItems } = await useAsyncData('items', () =>
  queryCollection('item')
    .where('featured', '=', true)
    .order('order', 'DESC')
    .all()
)

const posts = computed<BlogPostProps[]>(() => {
  return featuredItems.value.map((item) => {
    console.log(item)
    return {
      title: item.title,
      image: item.image,
      date: item.date,
      to: item.path
    }
  })
})
</script>

<template>
  <UPage v-if="page">
    <UPageBody>
      <UBlogPosts :posts="posts" />
      <LandingBlog :page />
      <LandingFAQ :page />
    </UPageBody>
  </UPage>
</template>
