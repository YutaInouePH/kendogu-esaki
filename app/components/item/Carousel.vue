<script setup lang="ts">
import { LazyModalItemImage } from '#components'

defineProps<{ items: string[] }>()

const overlay = useOverlay()
const carousel = useTemplateRef('carousel')
const activeIndex = ref(0)
const itemImageModal = overlay.create(LazyModalItemImage)

function onClickPrev() {
  activeIndex.value--
}
function onClickNext() {
  activeIndex.value++
}
function onSelect(index: number) {
  activeIndex.value = index
}

function select(index: number) {
  activeIndex.value = index

  carousel.value?.emblaApi?.scrollTo(index)
}
</script>

<template>
  <div class="flex-1 w-full p-10">
    <UCarousel
      ref="carousel"
      v-slot="{ item }"
      arrows
      loop
      :items="items"
      :prev="{ onClick: onClickPrev }"
      :next="{ onClick: onClickNext }"
      class="w-full max-w-xs mx-auto"
    >
      <img
        :src="item"
        width="320"
        height="320"
        class="rounded-lg cursor-pointer"
        loading="lazy"
        @click="itemImageModal.open({ img: item })"
      >
    </UCarousel>

    <div class="flex gap-1 justify-between pt-4 max-w-xs mx-auto">
      <div
        v-for="(item, index) in items"
        :key="index"
        class="size-11 opacity-25 cursor-pointer hover:opacity-100 transition-opacity"
        :class="{ 'opacity-100': activeIndex === index }"
        @click="select(index)"
      >
        <img
          :src="item"
          width="44"
          height="44"
          class="rounded-lg"
          loading="lazy"
        >
      </div>
    </div>
  </div>
</template>
