<script setup lang="ts">
import axios from 'axios'
import { onMounted } from 'vue'
import { RouterLink } from 'vue-router'
// import { useAuthStore } from '@/stores/auth'

// const authStore = useAuthStore()

onMounted(() => {})

async function getUser() {
  const response = await axios.get(
    'https://nagp.alexsilvapro.com.br/wp-json/wp/v2/posts/?search=auxilio',
    {
      headers: {
        // Authorization: `Bearer ${authStore.token}`
      }
    }
  )

  console.log('Response: ', response.data)
}
</script>
<template>
  <div class="d-flex flex-column flex-shrink-0 p-3 text-white bg-dark" style="width: 280px">
    <a
      href="/"
      class="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-white text-decoration-none"
    >
      <svg class="bi me-2" width="40" height="32"><use xlink:href="#bootstrap" /></svg>
      <span class="fs-4">Administração</span>
    </a>
    <hr />
    <ul class="nav nav-pills flex-column mb-auto">
      <!-- <li class="nav-item">
        <a href="#" @click="getUser" class="nav-link active" aria-current="page">
          <svg class="bi me-2" width="16" height="16"><use xlink:href="#home" /></svg>
          Home
        </a>
      </li> -->
      <li>
        <RouterLink to="/search-terms" class="nav-link text-white">
          <svg class="bi me-2" width="16" height="16"><use xlink:href="#table" /></svg>
          Termos / Palavras-chave
        </RouterLink>
      </li>
      <li>
        <a href="#" class="nav-link text-white">
          <svg class="bi me-2" width="16" height="16"><use xlink:href="#speedometer2" /></svg>
          Log de Pesquisas
        </a>
      </li>
    </ul>
    <hr />
    <div class="dropdown">
      <a
        href="#"
        class="d-flex align-items-center text-white text-decoration-none dropdown-toggle"
        id="dropdownUser1"
        data-bs-toggle="dropdown"
        aria-expanded="false"
      >
        <!-- <img
          src="https://github.com/mdo.png"
          alt=""
          width="32"
          height="32"
          class="rounded-circle me-2"
        /> -->
        <strong>Conta</strong>
      </a>
      <ul
        class="dropdown-menu dropdown-menu-dark text-small shadow"
        aria-labelledby="dropdownUser1"
      >
        <li><a class="dropdown-item" href="#">Alterar Senha</a></li>
        <li><a class="dropdown-item" href="#">Perfil</a></li>
        <li><hr class="dropdown-divider" /></li>
        <li><a class="dropdown-item" href="#">Sair</a></li>
      </ul>
    </div>
  </div>
</template>
<style scoped>
.bd-placeholder-img {
  font-size: 1.125rem;
  text-anchor: middle;
  -webkit-user-select: none;
  -moz-user-select: none;
  user-select: none;
}

@media (min-width: 768px) {
  .bd-placeholder-img-lg {
    font-size: 3.5rem;
  }
}
</style>
