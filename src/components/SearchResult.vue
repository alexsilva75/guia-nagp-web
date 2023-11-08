<script setup lang="ts">
import { useSearchStore } from '@/stores/search'
import SearchResultItem from './SearchResultItem.vue'
import { onMounted, watch, ref } from 'vue'

const searchStore = useSearchStore()

onMounted(() => {})

watch(
  () => searchStore.results,
  (newValue) => {
    console.log(newValue)
  }
)
</script>
<template>
  <div class="container pb-5">
    <SearchResultItem
      v-bind:key="(result as any).id"
      v-for="result in searchStore.results"
      :title="(result as any).title.rendered"
    />
  </div>
</template>
