<script setup lang="ts">
import CategoryListVue from '../components/CategoryList.vue'
import SearchForm from '../components/SearchForm.vue'
import SearchResult from '../components/SearchResult.vue'

// const fetchCookie = async () => {
//   await fetch('http://localhost:8000/sanctum/csrf-cookie', {
//     credentials: 'include'
//   })

//   // console.log('Response: ', response.json())
//   console.log('Cookies:', document.cookie)
// }

// fetchCookie()
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
