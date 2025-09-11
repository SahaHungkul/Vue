import { defineStore } from 'pinia'
import api from '../utils/api'

export const useUserStore = defineStore('user', {
  state: () => ({
    user: null,
    token: localStorage.getItem('token') || null,
  }),
  actions: {
    async login(email, password) {
      const res = await api.post('/login', { email, password })

      // ambil token sesuai struktur API Laravel Passport
      const token = res.data.token || res.data.access_token || res.data.data?.token

      if (!token) {
        throw new Error('Token tidak ditemukan di response API')
      }

      this.token = token
      this.user = res.data.user || null

      // simpan token di localStorage
      localStorage.setItem('token', token)

      // set default header axios
      api.defaults.headers.common['Authorization'] = `Bearer ${token}`
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
