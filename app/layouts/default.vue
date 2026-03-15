<script setup lang="ts">
import type { ContentNavigationLink } from '@nuxt/ui'

const { data: category } = await useAsyncData('category', () => {
  return queryCollection('category').first()
})

const navigation = computed<ContentNavigationLink[]>(() => {
  if (!category.value) {
    return []
  }

  return category.value.meta.category
})
</script>

<template>
  <UMain>
    <UContainer>
      <UPage>
        <template #left>
          <UPageAside>
            <UContentNavigation
              :collapsible="false"
              :navigation="navigation"
              highlight
              :ui="{
                linkTrailingBadge: 'font-semibold uppercase'
              }"
            />
          </UPageAside>
        </template>

        <slot />
      </UPage>
    </UContainer>
  </UMain>
</template>
