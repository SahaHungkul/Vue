import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import LoginView from '@/views/LoginView.vue'
import RegisterPage from '@/views/RegisterPage.vue'

import AdminLayout from '../layouts/AdminLayout.vue'
import UserLayout from '../layouts/UserLayout.vue'
import DashboardPage from '../views/admin/DashboardPage.vue'
import UserManagement from '@/views/admin/UserManagement.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue'),
    },
    {
      path: '/login',
      name: 'login',
      component: LoginView,
    },
    {
      path: '/register',
      name: 'register',
      component: RegisterPage,
    },
    {
      path: '/',
      component: UserLayout,
      children: [{ path: 'home', name: 'Home', component: HomeView }],
    },
    {
      path: '/admin',
      component: AdminLayout,
      children: [
        { path: 'dashboard', name: 'Dashboard', component: DashboardPage },
        { path: 'users', name: 'Users', component: UserManagement },
      ],
    },
  ],
})

export default router
