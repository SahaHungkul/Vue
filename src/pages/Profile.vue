<script setup>
import { ref, onMounted } from "vue";

const username = ref("Guest");
const email = ref("guest@example.com");

// Ambil data dari localStorage (contohnya dari login)
onMounted(() => {
  const user = JSON.parse(localStorage.getItem("user"));
  if (user) {
    username.value = user.name;
    email.value = user.email;
  }
});
</script>

<script>
export default {
  name: 'MyProfile',
}
</script>

<template>
  <div class="max-w-4xl mx-auto p-6">
    <!-- Header Profile -->
    <div class="bg-white shadow-lg rounded-xl p-6 flex items-center space-x-6">
      <img src="@/assets/akira.png" alt="Profile Picture" class="w-28 h-28 rounded-full border-4 border-blue-500" />
      <div>
        <h1 class="text-3xl font-bold text-gray-800">{{ username }}</h1>
        <p class="text-gray-600">{{ email }}</p>
        <p class="text-gray-500 text-sm mt-1">Bergabung sejak: Januari 2025</p>
      </div>
    </div>

    <!-- Informasi Tambahan -->
    <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
      <div class="bg-white p-6 shadow rounded-xl">
        <h2 class="text-xl font-semibold text-gray-700 mb-4">Informasi Pribadi</h2>
        <p><span class="font-semibold">Nama: </span>{{ username }}</p>
        <p><span class="font-semibold">Email: </span>{{ email }}</p>
        <p><span class="font-semibold">No HP: </span>+62 812-3456-7890</p>
      </div>

      <div class="bg-white p-6 shadow rounded-xl">
        <h2 class="text-xl font-semibold text-gray-700 mb-4">Pengaturan Akun</h2>
        <button class="w-full bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition mb-3">
          Ubah Profil
        </button>
        <button class="w-full bg-red-600 text-white py-2 px-4 rounded-lg hover:bg-red-700 transition">
          Hapus Akun
        </button>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
