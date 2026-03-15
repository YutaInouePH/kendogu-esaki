<script setup lang="ts">
const { data } = await useAsyncData('navation', () => {
  return queryCollectionNavigation('aside')
    .order('order', 'DESC')
})
</script>

<template>
  <UMain>
    <AppHeader :links="navLinks" />
    <UPage>
      <template #left>
<!--        <UPageAside>-->
<!--          <UContentNavigation-->
<!--            :key="navigationKey"-->
<!--            :collapsible="false"-->
<!--            highlight-->
<!--            :ui="{-->
<!--              linkTrailingBadge: 'font-semibold uppercase'-->
<!--            }"-->
<!--          />-->
<!--        </UPageAside>-->
      </template>

      <slot />
      <AppFooter />
    </UPage>
  </UMain>
</template>
