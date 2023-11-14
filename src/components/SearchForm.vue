<script setup lang="ts">
import { ref } from 'vue'
import IconSearch from './icons/IconSearch.vue'

import { useSearchStore } from '@/stores/search'

const searchStore = useSearchStore()
const searchTerm = ref('')
const doSearch = () => {
  searchStore.performSearch(searchTerm.value)
}
const timerId = ref(0)
const onSearchTypeHander = () => {
  //console.log('Search Term Length: ', searchTerm.value.length)
  if (timerId.value) {
    clearTimeout(timerId.value)
  }

  timerId.value = setTimeout(() => {
    if (searchTerm.value.length > 2) {
      doSearch()
    }
  }, 1000)
}
</script>

<template>
  <div class="search-group">
    <h1 class="search-head text-center py-4">
      Base de Conhecimento do Núcleo de Apoio à Gestão de Pessoas
    </h1>
    <div class="input-group mb-3 px-md-5">
      <input
        type="text"
        class="form-control"
        placeholder="Faça a sua pesquisa aqui"
        aria-label="Recipient's username"
        aria-describedby="button-addon2"
        v-model="searchTerm"
        @keyup="onSearchTypeHander"
      />
      <button @click="doSearch" class="btn btn-outline-secondary" type="button" id="button-addon2">
        <IconSearch />
      </button>
    </div>
  </div>
</template>
<style scoped>
.search-group {
  padding: 32px 16px;
}
@media (min-width: 768px) {
  .search-head {
    padding: 32px 128px !important;
  }
}

@media (min-width: 1200px) {
  .search-head {
    padding: 32px 256px !important;
  }
}
</style>
