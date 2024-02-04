<script setup lang="ts">
import { useRouter } from 'vue-router'
import { useCategoryStore } from '@/stores/category'

const categoryStore = useCategoryStore()
const router = useRouter()
const closeDrawerAndNavigate = (categoryId: number) => {
  console.log('Category ID: ', categoryId)
  const closeButton = document.querySelector('.btn-close') as HTMLButtonElement

  closeButton.click()
  console.log('Button: ', closeButton)

  router.push({ name: 'category', params: { categoryId } })
}
</script>
<template>
  <div
    class="offcanvas offcanvas-start text-light"
    tabindex="-1"
    id="offcanvasRight"
    aria-labelledby="offcanvasRightLabel"
  >
    <div class="offcanvas-header">
      <h5 id="offcanvasRightLabel">Guia NAGP</h5>
      <button
        type="button"
        class="btn-close text-reset"
        data-bs-dismiss="offcanvas"
        aria-label="Close"
      ></button>
    </div>
    <div class="offcanvas-body">
      <ul class="list-group list-group-flush">
        <li
          v-bind:key="(category as any).id"
          v-for="category in categoryStore.categories"
          class="list-group-item text-light"
        >
          <a @click="closeDrawerAndNavigate((category as any).id)" class="nav-link" href="#">
            {{ (category as any).name }}</a
          >
        </li>
      </ul>
    </div>
  </div>
</template>
<style scoped>
.offcanvas.showing,
.offcanvas.show:not(.hiding) {
  transform: none;
  background-color: #3e9a2d;
}

.list-group {
  --bs-list-group-bg: none;
}
</style>
