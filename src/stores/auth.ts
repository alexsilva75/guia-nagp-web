import { defineStore } from 'pinia'
import axios from 'axios'

import router from '../router'
//const axiosInstance = axios.create({ withCredentials: true });
//const axiosInstance = axios.create();

import options from '../options'

interface AuthUser {
  username?: string
  name?: string
  email?: string
}

interface AuthState {
  authUser: AuthUser | null
  didAutoLogout: boolean
  token: string
  authError: boolean
  authErrorDescription: string
  timer: number
}

export const useAuthStore = defineStore({
  id: 'auth',
  state: () =>
    ({
      authUser: null,
      didAutoLogout: false,
      token: '',
      authError: false,
      authErrorDescription: '',
      timer: 0
    }) as AuthState,
  getters: {
    authToken: (state) => state.token,
    isLoggedIn: (state) => !!state.authUser
  },
  actions: {
    async auth(username: string, password: string) {
      this.setAuthError(false)
      this.setAuthErrorDescription('')
      try {
        await this.login(username, password)
      } catch (error) {
        console.log(error)
        throw error
      }
    },

    async login(email: string, password: string) {
      try {
        const response = (await axios
          .post(
            `${options.baseURL}api/v1/login`,
            {
              email,
              password
            },
            {
              headers: {
                Accept: 'application/json',
                'X-Requested-With': 'XMLHttpRequest'
              }
              // xsrfCookieName: 'XSRF-TOKEN',
              // xsrfHeaderName: 'X-XSRF-TOKEN'
              //withCredentials: true
            }
          )
          .catch(async (error) => {
            /**Receber um código 404 significa que o usuário já está logado e
             * o backend tentou retornar uma página home inexistente.
             * Trata-se de um bug no Fortify. Então usam-se os dados
             * armazenados no browser DB.
             */
            console.log('Login Error: ', error.response)
            this.setAuthError(true)

            if (error.response.status === 422) {
              const errors = error.response.data.errors

              if (errors['username']) {
                this.setAuthErrorDescription(errors['username'][0])
              }
            }
            // if (error.response.status === 404) {
            //   await this.logout()
            //   const response = await axios
            //     .post(
            //       `${options.baseURL}login`,
            //       {
            //         email,
            //         password
            //       },
            //       {
            //         headers: {
            //           Accept: 'application/json',
            //           'X-Requested-With': 'XMLHttpRequest'
            //         }
            //         // withCredentials: true
            //       }
            //     )
            //     .catch((error) => {
            //       this.setAuthError(true)
            //     })
            // }
          })) as any

        console.log('Login Response: ', response)
        if (response) {
          if (response.status === 200) {
            this.setAuthUser(response.data)
            this.setAuthError(false)
          }
        }
      } catch (error) {
        console.log('Login error: ', error)
        this.setAuthError(true)
      }
    },

    tryLoadAuthData() {
      const user = localStorage.getItem('user')
      const token = localStorage.getItem('token')
      const tokenCreatedAt = localStorage.getItem('tokenCreatedAt')
      if (user && token && tokenCreatedAt) {
        const parsedUser = JSON.parse(user)
        this.setAuthUser({
          user: parsedUser,
          token,
          tokenCreatedAt
        })
      }
    },

    async tryAutoLogin() {
      //
      this.tryLoadAuthData()

      const user = this.authUser

      const token = this.token

      if (!this.token) {
        console.log('I DO NOT HAVE A TOKEN')

        console.log('Auto Login token: ', token)

        if (!user || !token) {
          localStorage.clear()
        }
      }
    },

    async logout() {
      const response = await axios
        .post(
          `${options.baseURL}/api/v1/logout`,
          {},
          {
            headers: {
              Authorization: `Bearer ${this.token}`
            }
          }
        )
        .catch((_) => {
          localStorage.clear()
        })
      localStorage.clear()
      console.log('Logging out: ', response)

      clearTimeout(this.timer)
      this.authUser = null
      router.replace('/')
    },

    setAuthError(hasErrors: boolean) {
      this.authError = hasErrors
    },

    setAuthErrorDescription(description: string) {
      this.authErrorDescription = description
    },

    setAuthUser(authData: any) {
      let tokenCreationDatetime = null
      if (authData.tokenCreatedAt) {
        tokenCreationDatetime = Date.parse(authData.tokenCreatedAt)
      } else {
        tokenCreationDatetime = Date.parse(authData.tokenInfo.accessToken.created_at)
      }

      const tokenExpirationDatetime = new Date(
        tokenCreationDatetime + 120 * 60 * 1000 // O token tem vida de 2 horas. Aqui se converte para milisegundos
      )
      console.log('Token creation: ', new Date(tokenExpirationDatetime))

      const nowTimeInMillis = new Date().getTime()
      const tokenExpirationTimeInMillis = tokenExpirationDatetime.getTime()

      if (tokenExpirationTimeInMillis >= nowTimeInMillis + 10000) {
        this.authUser = authData.user
        this.token =
          authData.token && authData.token.split('|')[1]
            ? authData.token.split('|')[1]
            : authData.token

        if (authData.user) {
          localStorage.setItem('user', JSON.stringify(this.authUser))
          localStorage.setItem('token', this.token)
          localStorage.setItem(
            'tokenCreatedAt',
            authData.tokenCreatedAt
              ? authData.tokenCreatedAt
              : authData.tokenInfo.accessToken.created_at
          )
        } else {
          localStorage.clear()
        }

        this.timer = setTimeout(() => {
          this.logout()
        }, tokenExpirationTimeInMillis - nowTimeInMillis) as any
      } else {
        this.logout()
      }
    },

    async fetchToken() {
      const tokenData = await axios
        .get(`${options.baseURL}/api/v1/token/create`, {
          //withCredentials: true
        })
        .catch((error) => {
          console.log('Token error', error)
        })

      console.log('Token data: ', tokenData)
    }
  }
})
