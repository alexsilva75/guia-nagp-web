<template>
  <OverlaySpinner v-if="isLoading" />
  <div class="container">
    <div class="row justify-content-center">
      <div class="col-md-6 flex-1 mt-5">
        <h1 class="text-center">Sistema Pré-pago</h1>
        <div class="card">
          <div class="card-body">
            <h2 class="h5">Informe Usuário e Senha</h2>
            <form @submit.prevent="sendForm">
              <div class="mb-3">
                <label for="" class="form-label">Usuário</label>
                <input type="text" v-model="username" class="form-control" />
              </div>
              <div class="mb-3">
                <label for="" class="form-label">Senha</label>
                <input type="password" v-model="password" class="form-control" />
              </div>
              <button type="submit" class="btn btn-primary">Entrar</button>
              <!-- <button type="button" @click="logout" class="btn btn-warning">
                Sair
              </button> -->
              <!-- <button @click="getToken" class="btn btn-info">Token</button>
              <button @click="getUser" class="btn btn-info">User</button> -->
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref, watch } from 'vue'
import { useRouter } from 'vue-router'
import { useAuthStore } from '@/stores/auth'
import { TYPE, useToast } from 'vue-toastification'
import OverlaySpinner from '@/components/ui/OverlaySpinner.vue'

const username = ref('')
const password = ref('')
const isLoading = ref(false)

const store = useAuthStore()
const router = useRouter()

const toast = useToast()

watch(
  () => store.isLoggedIn,
  (newValue) => {
    console.log('isLoggedIn changed...', newValue)
    if (newValue) {
      console.log('You are logged in!')
      router.replace('/admin')
    }
  }
)

watch(
  () => store.authError,
  (newValue) => {
    if (newValue) {
      toast(`Não foi possível realizar o login. ${store.authErrorDescription}`, {
        type: TYPE.ERROR // or "success", "error", "default", "info" and "warning"
      })
    }
  }
)

async function sendForm() {
  isLoading.value = true
  await store.auth(username.value, password.value)
  // const response = await fetch('http://localhost:8000/sanctum/csrf-cookie', {
  //   method: 'GET',
  //   headers: { 'Content-Type': 'application/json', Accept: 'application/json' },

  //   credentials: 'include',
  //   mode: 'cors'
  // })
  // const responseData = await response.json()
  // console.log('RESPONSE DATA: ', responseData)
  isLoading.value = false
}

async function logout() {
  const response = await store.logout()
  console.log('Logout Response: ', response)
}

async function getToken() {
  await store.fetchToken()
}
</script>
