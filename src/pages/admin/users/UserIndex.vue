<script setup>
import { ref, onMounted } from "vue"

// dummy data (sementara belum API)
const users = ref([])

onMounted(() => {
  users.value = [
    { id: 1, name: "Admin One", email: "admin@example.com", role: "admin" },
    { id: 2, name: "User One", email: "user1@example.com", role: "user" },
    { id: 3, name: "Kasir One", email: "kasir@example.com", role: "kasir" },
  ]
})

function handleDelete(id) {
  users.value = users.value.filter(u => u.id !== id)
}
</script>

<template>
  <div class="p-6">
    <div class="flex justify-between items-center mb-4">
      <h1 class="text-2xl font-bold">User Management</h1>
      <router-link
        to="/users/create"
        class="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
      >
        + Tambah User
      </router-link>
    </div>

    <div class="overflow-x-auto">
      <table class="w-full border border-gray-200">
        <thead class="bg-gray-100">
          <tr>
            <th class="px-4 py-2 border">#</th>
            <th class="px-4 py-2 border">Nama</th>
            <th class="px-4 py-2 border">Email</th>
            <th class="px-4 py-2 border">Role</th>
            <th class="px-4 py-2 border">Aksi</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="user in users" :key="user.id" class="text-center">
            <td class="px-4 py-2 border">{{ user.id }}</td>
            <td class="px-4 py-2 border">{{ user.name }}</td>
            <td class="px-4 py-2 border">{{ user.email }}</td>
            <td class="px-4 py-2 border capitalize">{{ user.role }}</td>
            <td class="px-4 py-2 border space-x-2">
              <router-link
                :to="`/users/${user.id}/edit`"
                class="px-3 py-1 bg-yellow-500 text-white rounded hover:bg-yellow-600"
              >
                Edit
              </router-link>
              <button
                @click="handleDelete(user.id)"
                class="px-3 py-1 bg-red-600 text-white rounded hover:bg-red-700"
              >
                Hapus
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>
