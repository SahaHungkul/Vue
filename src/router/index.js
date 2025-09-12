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

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
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
      component: () => import('../views/AboutView.vue'),
    },

    {
      path: '/',
      component: UserLayout,
      children: [
        { path: 'home', name: 'Home', component: HomeView },
        { path: 'my-bookings', name: 'MyBookings', component: MyBookings },
      ],
    },
    {
      path: '/admin',
      component: AdminLayout,
      children: [
        { path: 'dashboard', name: 'Dashboard', component: DashboardPage },
        { path: 'users', name: 'Users', component: UserManagement },
        { path: 'event', name: 'Event', component: EventsPage },
      ],
    },
  ],
})

export default router
