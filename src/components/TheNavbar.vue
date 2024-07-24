<script setup lang="ts">
// defineProps<{
//   msg: string
// }>()

import IconMenu from './icons/IconMenu.vue'
</script>

<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <div class="container-fluid">
      <RouterLink to="/" class="navbar-brand text-light" href="#">
        <button
          class="btn"
          type="button"
          data-bs-toggle="offcanvas"
          data-bs-target="#offcanvasRight"
          aria-controls="offcanvasRight"
        >
          <IconMenu />
        </button>

        <div class="d-inline-block rounded-3 bg-light p-1 px-0 me-2">
          <img
            alt="NAGP" height="44"
            src="https://nagp.alexsilvapro.com.br/wp-content/uploads/2023/11/Instituto_Federal_Baiano_-_Marca_Vertical_2015.svg_.png"
          />
        </div>

        <h5 class="d-inline-block text-light">Instituto Federal Baiano</h5>
      </RouterLink>
      <!-- <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button> -->

      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <!--<li class="nav-item">
            <a class="nav-link active" aria-current="page" href="#">Home</a>
          </li>
           <li class="nav-item">
            <a class="nav-link" href="#">Link</a>
          </li>
          <li class="nav-item dropdown">
            <a
              class="nav-link dropdown-toggle"
              href="#"
              id="navbarDropdown"
              role="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              Dropdown
            </a>
            <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
              <li><a class="dropdown-item" href="#">Action</a></li>
              <li><a class="dropdown-item" href="#">Another action</a></li>
              <li><hr class="dropdown-divider" /></li>
              <li><a class="dropdown-item" href="#">Something else here</a></li>
            </ul>
          </li>
          <li class="nav-item">
            <a class="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">Disabled</a>
          </li> -->
        </ul>
      </div>
    </div>
  </nav>
</template>

<style scoped>
nav {
  background-image: linear-gradient(#0a6419, #18852a);
}

.navbar-toggler-icon {
  color: #fff;
}
</style>
