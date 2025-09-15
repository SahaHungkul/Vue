import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../pages/user/HomeView.vue'
import LoginView from '@/pages/LoginView.vue'
import RegisterPage from '@/pages/RegisterPage.vue'

import AdminLayout from '../layouts/AdminLayout.vue'
import UserLayout from '../layouts/UserLayout.vue'
import DashboardPage from '../pages/admin/DashboardPage.vue'
import UserManagement from '@/pages/admin/UserManagement.vue'
import MyBookings from '../pages/user/MyBookings.vue'
import EventsPage from '@/pages/admin/EventsPage.vue'
import UserEvent from '@/pages/user/UserEvent.vue'
import MyProfile from '@/pages/Profile.vue'
import api from '@/utils/api'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      redirect: 'home',
    },
    {
      path: '/login',
      name: 'login',
      component: LoginView,
      meta: { guest: true },
    },
    {
      path: '/register',
      name: 'register',
      component: RegisterPage,
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('../pages/AboutView.vue'),
    },
    {
      path: '/profile',
      name: 'profile',
      component: MyProfile,
    },

    {
      path: '/',
      component: UserLayout,
      children: [
        { path: 'home', name: 'Home', component: HomeView },
        { path: 'bookings', name: 'MyBookings', component: MyBookings },
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
  ],
})

export default router
