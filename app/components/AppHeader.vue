<script setup lang="ts">
import type { NavigationMenuItem } from '@nuxt/ui'

defineProps<{
  links: NavigationMenuItem[]
}>()
</script>

<template>
  <UHeader>
    <template #title>
      <h1>剣道具 えさき</h1>
    </template>

    <template #right>
      <UNavigationMenu :items="links" />
    </template>
  </UHeader>
</template>
