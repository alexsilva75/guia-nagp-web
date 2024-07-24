<script setup lang="ts">
import { ref } from 'vue'
import IconSearch from './icons/IconSearch.vue'

import { useSearchStore } from '@/stores/search'

const searchStore = useSearchStore()
const searchTerm = ref('')
const doSearch = () => {
  searchStore.performSearch(searchTerm.value)
}
const timerId = ref<any>()
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
    <div class="search-head text-center py-4">
      <h5>
      Olá! Você está no Núcleo de Apoio à Gestão de Pessoas do IF Baiano Campus Governador Mangabeira
      </h5>

      <h2 class="text-success my-4">
        <strong>COMO POSSO AJUDAR?</strong>
      </h2>

      <h6 class="text-muted">
        Aqui você encontra informações relevantes sobre diversos benefícios concedidos ao servidor público federal
      </h6>
    </div>

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
