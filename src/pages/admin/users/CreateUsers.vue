<script setup>
import { ref } from "vue";
import axios from "axios";
import { useRouter } from "vue-router";

const router = useRouter();

const form = ref({
  name: "",
  email: "",
  password: "",
  role: ""
});

const roles = ["admin", "kasir", "user"]; // contoh role

const errors = ref({});

async function handleSubmit() {
  try {
    await axios.post(`${import.meta.env.VITE_API_URL}/users`, form.value, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    });

    router.push("/users");
  } catch (error) {
    if (error.response && error.response.data.errors) {
      errors.value = error.response.data.errors;
    }
  }
}
</script>

<template>
  <div class="p-6 bg-white rounded shadow">
    <h2 class="text-xl font-bold mb-4">Create User</h2>

    <form @submit.prevent="handleSubmit" class="space-y-4">
      <div>
        <label class="block mb-1">Name</label>
        <input v-model="form.name" type="text" class="w-full border rounded p-2" />
        <p v-if="errors.name" class="text-red-500 text-sm">{{ errors.name[0] }}</p>
      </div>

      <div>
        <label class="block mb-1">Email</label>
        <input v-model="form.email" type="email" class="w-full border rounded p-2" />
        <p v-if="errors.email" class="text-red-500 text-sm">{{ errors.email[0] }}</p>
      </div>

      <div>
        <label class="block mb-1">Password</label>
        <input v-model="form.password" type="password" class="w-full border rounded p-2" />
        <p v-if="errors.password" class="text-red-500 text-sm">{{ errors.password[0] }}</p>
      </div>

      <div>
        <label class="block mb-1">Role</label>
        <select v-model="form.role" class="w-full border rounded p-2">
          <option value="">-- Pilih Role --</option>
          <option v-for="role in roles" :key="role" :value="role">{{ role }}</option>
        </select>
        <p v-if="errors.role" class="text-red-500 text-sm">{{ errors.role[0] }}</p>
      </div>

      <button type="submit" class="bg-blue-600 text-white px-4 py-2 rounded">Create</button>
    </form>
  </div>
</template>
