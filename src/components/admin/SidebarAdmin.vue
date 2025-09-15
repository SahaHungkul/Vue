<script setup></script>

<template>
  <div class="flex min-h-screen">
    <aside class="w-64 bg-white shadow-lg">
      <div class="p-4 text-xl font-bold border-b">Admin Panel</div>
      <nav class="p-4 space-y-2">
        <router-link to="/admin/dashboard" class="block px-3 py-2 rounded hover:bg-gray-200"
          active-class="bg-blue-600 text-white">
          Dashboard
        </router-link>
        <router-link to="/admin/users" class="block px-3 py-2 rounded hover:bg-gray-200"
          active-class="bg-blue-600 text-white">
          Users
        </router-link>
        <router-link to="/admin/events" class="block px-3 py-2 rounded hover:bg-gray-200"
          active-class="bg-blue-600 text-white">Event</router-link>
      </nav>
    </aside>
  </div>
</template>
