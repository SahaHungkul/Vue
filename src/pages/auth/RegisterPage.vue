<script setup>
import { ref } from 'vue';
import axios from 'axios';
import { useRouter } from 'vue-router';

const name = ref('');
const email = ref('');
const password = ref('');
const password_confirmation = ref('');
const showPassword = ref(false);
const showConfirmPassword = ref(false);
const loading = ref(false);
const errorMessage = ref('');

const router = useRouter();

async function handleRegister() {
  loading.value = true;
  errorMessage.value = null;

  try {
    await axios.post(`${import.meta.env.VITE_API_URL}/register`, {
      name: name.value,
      email: email.value,
      password: password.value,
      password_confirmation: password_confirmation.value,
    });


    router.push("/login");
  } catch (err) {
    if (err.response?.data?.message) {
      errorMessage.value = err.response.data.message;
    } else {
      errorMessage.value = "Terjadi kesalahan!";
    }
  } finally {
    loading.value = false;
  }
}
</script>

<template>
  <div class="flex justify-center items-center min-h-screen bg-gray-100">
    <div class="w-full max-w-sm bg-white p-6 rounded shadow">
      <div class="flex justify-center mb-4">
        <img src="@/assets/Rei.jpg" alt="Logo" class="w-16 h-16 rounded-full shadow" />
      </div>
      <h2 class="text-2xl font-bold text-center mb-6 text-gray-700">Register</h2>
      <form @submit.prevent="handleRegister" class="space-y-4">
        <div>
          <label class="block text-sm font-medium text-gray-700">Username</label>
          <input v-model="name" type="text" class="w-full border p-2 rounded sm:text-sm" placeholder="Username"
            required />
        </div>

        <div>
          <label class="block text-sm font-medium text-gray-700">Email</label>
          <input v-model="email" type="email" class="w-full border p-2 rounded sm:text-sm"
            placeholder="email@example.com..." required />
        </div>

        <div>
          <label class="block text-sm font-medium text-gray-700">Password</label>
          <div class="relative">
            <input v-model="password" :type="showPassword ? 'text' : 'password'"
              class="w-full border p-2 rounded sm:text-sm" placeholder="password..." required />
            <button type="button" @click="showPassword = !showPassword"
              class="absolute right-2 top-2 text-gray-500 hover:text-gray-700">
              {{ showPassword ? '🙈' : '👁️' }}
            </button>
          </div>
        </div>

        <div>
          <label class="block text-sm font-medium text-gray-700">Password Confirmation</label>
          <div class="relative">
            <input v-model="password_confirmation" :type="showConfirmPassword ? 'text' : 'password'"
              class="w-full border p-2 rounded sm:text-sm" placeholder="password confirmation..." required />
            <button type="button" @click="showConfirmPassword = !showConfirmPassword"
              class="absolute right-2 top-2 text-gray-500 hover:text-gray-700">
              {{ showConfirmPassword ? '🙈' : '👁️' }}
            </button>
          </div>
        </div>

        <p v-if="errorMessage" class="text-red-500 text-sm">{{ errorMessage }}</p>

        <button type="submit" :disabled="loading"
          class="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 rounded-lg transition">
          {{ loading ? "Mendaftar..." : "Daftar" }}
        </button>
      </form>
      <p class="text-sm text-gray-600 mt-4 text-center">
        Sudah punya akun?
        <router-link to="/login" class="text-blue-600 hover:underline">Login</router-link>
      </p>
    </div>
  </div>
</template>

<style scoped></style>
