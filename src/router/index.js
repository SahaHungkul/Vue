import { createRouter, createWebHistory } from 'vue-router'
import { useUserStore } from '@/stores/user'

import Login from '@/pages/LoginView.vue'
import Register from '@/pages/RegisterPage.vue'
import About from '@/pages/AboutView.vue'

import AdminLayout from '../layouts/AdminLayout.vue'
import DashboardPage from '../pages/admin/DashboardPage.vue'
import UserManagement from '@/pages/admin/UserManagement.vue'

import UserLayout from '../layouts/UserLayout.vue'
import Home from '../pages/user/HomeView.vue'
import Bookings from '../pages/user/MyBookings.vue'

import EventsPage from '@/pages/admin/EventsPage.vue'
import UserEvent from '@/pages/user/UserEvent.vue'
import Profile from '@/pages/Profile.vue'
import api from '@/utils/api'

const routes = [
  {
    path: '/',
    redirect: 'home',
  },
  {
    path: '/login',
    name: 'Login',
    component: Login,
  },
  {
    path: '/register',
    name: 'Register',
    component: Register,
  },
  {
    path: '/about',
    name: 'About',
    component: About,
  },
  {
    path: '/profile',
    name: 'Profile',
    component: Profile,
  },
  {
    path: '/',
    component: UserLayout,
    children: [
      { path: 'home', name: 'Home', component: Home },
      { path: 'bookings', name: 'Bookings', component: Bookings },
      { path: 'events', name: 'UserEvent', component: UserEvent },
    ],
  },
  {
    path: '/admin',
    component: AdminLayout,
    children: [
      { path: 'dashboard', name: 'Dashboard', component: DashboardPage },
      { path: 'users', name: 'Users', component: UserManagement },
      { path: 'events', name: 'Events', component: EventsPage },
    ],
  },
  {
    path: '/logout',
    name: 'Logout',
    beforeEnter: async (to, from, next) => {
      try {
        await api.post(
          'http://localhost:8000/api/logout',
          {},
          {
            header: {
              Authorization: `Bearer ${localStorage.getItem('token')}`,
            },
          },
        )
      } catch (err) {
        console.log(err.response?.data || err.message)
      } finally {
        // Hapus token dari localStorage
        localStorage.removeItem('token')
        localStorage.removeItem('user')
        // Redirect ke login
        next('/login')
      }
    },
  },
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
})

  router.beforeEach((to, from, next) => {
    const userStore = useUserStore()
    const isLoggedIn = !!userStore.token

    if (to.meta.requiresAuth && !isLoggedIn) {
      return next({ name: 'login' })
    }
    next()
  })

export default router
