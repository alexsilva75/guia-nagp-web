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
  <div class="container-fluid pb-5">
    <div class="row">
      <SearchResultItem
        v-bind:key="(result as any).id"
        v-for="result in searchStore.results"
        :title="(result as any).title.rendered"
        :description="(result as any).excerpt.rendered"
        :id="(result as any).id"
      />
    </div>
  </div>
</template>
<style scoped>
.container-fluid {
  padding: 0 64px;
}
</style>
