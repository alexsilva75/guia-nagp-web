<script setup lang="ts">
import { onMounted, ref } from 'vue'
import { useSearchStore } from '@/stores/search'
import { useCategoryStore } from '@/stores/category'
import SearchResultItem from '@/components/SearchResultItem.vue'

const props = defineProps<{ categoryId: string }>()

const searchStore = useSearchStore()
const categoryStore = useCategoryStore()

const title = ref()
onMounted(async () => {
  await searchStore.fetchByCategory(+props.categoryId)
  title.value = categoryStore.categories.find((item) => (item as any).id === +props.categoryId)
})
</script>

<template>
  <main>
    <h2>{{ title }}</h2>
    <!-- <SearchResultItem
      :id="(result as any).id"
      :title="(result as any).(title as any).rendered"
      v-bind:key="(result as any).id"
      v-for="result in searchStore.resultsByCategory"
    /> -->
  </main>
</template>
