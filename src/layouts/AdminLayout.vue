<script setup>
import { ref } from "vue";
import SideBar from "@/components/SideBar.vue";
import NavBar from "@/components/NavBar.vue";


const sidebarOpen = ref(false);
const toggleSidebar = () => (sidebarOpen.value = !sidebarOpen.value);
</script>

<template>
  <div class="flex min-h-screen">
    <SideBar :isOpen="sidebarOpen" />

    <div class="flex flex-col flex-1 transition-all duration-300" :class="sidebarOpen ? 'mr-64' : 'mr-0'">
      <NavBar @toggle-sidebar="toggleSidebar" />

      <main class="flex-1 bg-gray-50 p-4">
        <router-view />
      </main>

    </div>
  </div>
</template>
