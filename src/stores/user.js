import { defineStore } from 'pinia'
import api from '../utils/api'

let interceptorId = null

export const useUserStore = defineStore('user', {
  state: () => ({
    user: null,
    role: null,
    token: localStorage.getItem('token') || null,
  }),
  actions: {
    init() {
      if (this.token) {
        api.defaults.headers.common['Authorization'] = `Bearer ${this.token}`
        this.fetchUser().catch(() => {})
      }
      if (interceptorId === null) {
        interceptorId = api.interceptors.response.use(
          (res) => res,
          (error) => {
            if (error.response?.status === 401) {
              this.logout()
              window.location.href = '/login'
            }
            return Promise.reject(error)
          },
        )
      }
    },

    setToken(token) {
      this.token = token
      localStorage.setItem('token', token)
      api.defaults.headers.common['Authorization'] = `Bearer ${token}`
    },

    async login(email, password) {
      const res = await api.post('/login', { email, password })

      // ambil token sesuai struktur API Laravel Passport
      const token =
        res.data.token ||
        res.data.access_token ||
        res.data.data?.token ||
        res.data?.data?.access_token

      if (!token) {
        throw new Error('Token tidak ditemukan di response API')
      }

      this.setToken(token)
      if (res.data.data?.user) {
        this.user = res.data.data.user
      } else {
        await this.fetchUser()
      }
    },

    async fetchUser() {
      const res = await api.get('/me')
      this.user = res.data?.data || res.data
      return this.user
    },

    logout() {
      this.user = null
      this.token = null
      localStorage.removeItem('token')
      // hapus header authorization
      delete api.defaults.headers.common['Authorization']
    },
  },
})
