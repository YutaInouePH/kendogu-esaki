<script setup lang="ts">
defineProps<{ items: string[] }>()
</script>

<template>
  <UCarousel
    v-slot="{ item }"
    loop
    arrows
    :autoplay="{ delay: 2000 }"
    wheel-gestures
    :prev="{ variant: 'solid' }"
    :next="{ variant: 'solid' }"
    :items="items"
    :ui="{
      item: 'basis-1/3 ps-0',
      prev: 'sm:start-8',
      next: 'sm:end-8',
      container: 'ms-0'
    }"
  >
    <img
      :src="item"
      width="320"
      height="320"
    >
  </UCarousel>
</template>
