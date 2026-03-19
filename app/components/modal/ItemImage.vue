<script setup lang="ts">
defineProps<{ img: string }>()
</script>

<template>
  <UModal>
    <template #content>
      <img
        :src="img"
        loading="lazy"
      >
    </template>
  </UModal>
</template>
