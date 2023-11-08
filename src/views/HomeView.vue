<script setup lang="ts">
import CategoryListVue from '../components/CategoryList.vue'
import SearchForm from '../components/SearchForm.vue'
import SearchResult from '../components/SearchResult.vue'
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
        <SearchResult />
      </div>
    </div>
    <div class="row">
      <div class="col">
        <CategoryListVue />
      </div>
    </div>
  </div>
</template>
