<template>
  <div class="flex flex-col min-h-screen bg-gray-50">
    <!-- Navbar -->
    <Navbar />

    <!-- Page Content -->
    <main class="flex-1 p-6">
      <router-view></router-view>
    </main>

    <!-- Footer -->
    <footer class="h-12 bg-white border-t flex items-center justify-center text-sm text-gray-500">
      © 2025 Event Management
    </footer>
  </div>
</template>

<script setup>
import Navbar from "@/components/user/Navbar.vue";
</script>
