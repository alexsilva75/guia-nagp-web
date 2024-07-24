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
      <div class="col-12 col-md-8 col-lg-6 mx-auto">
        <img
          class="img-fluid mx-auto" alt="NAGP"
          src="https://nagp.alexsilvapro.com.br/wp-content/uploads/2024/07/NAGP_Cabecalho_2.jpg"
        />
      </div>

      <div class="col-12">
        <SearchForm />
      </div>
    </div>
    <div class="row">
      <div v-if="searchStore.isLoadingSearch" class="mb-5">
        <TheSpinner />
      </div>
      <SearchResult v-else />
    </div>

    <div class="row">
      <CategoryListVue :categories="categoryStore.categories as any" />
    </div>
  </div>
</template>
