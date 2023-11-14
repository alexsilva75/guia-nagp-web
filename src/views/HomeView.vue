<script setup lang="ts">
import { useCategoryStore } from '@/stores/category'
import CategoryListVue from '../components/CategoryList.vue'
import SearchForm from '../components/SearchForm.vue'
import SearchResult from '../components/SearchResult.vue'
import TheSpinner from '@/components/ui/TheSpinner.vue'

import { useSearchStore } from '@/stores/search'

const searchStore = useSearchStore()
const categoryStore = useCategoryStore()
</script>
<template>
  <div class="container-fluid">
    <div class="row py-5">
      <div class="col">
        <SearchForm />
      </div>
    </div>
    <div class="row">
      <div class="col">
        <div v-if="searchStore.isLoadingSearch" class="mb-5">
          <TheSpinner />
        </div>
        <SearchResult v-else />
      </div>
    </div>

    <CategoryListVue :categories="categoryStore.categories as any" />
  </div>
</template>
