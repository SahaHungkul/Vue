<script setup>
import { useUserStore } from "@/stores/user";
import { useRouter } from "vue-router";

const userStore = useUserStore();
const router = useRouter();

function logout() {
  userStore.logout();
  router.push("/login");
}
</script>

<template>
  <header class="h-15 bg-white shadow flex items-center justify-between px-4">
    <h1 class="text-lg font-semibold">Admin</h1>
    <button @click="logout" class="text-sm bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded cursor-pointer">
      Logout
    </button>
  </header>
</template>
