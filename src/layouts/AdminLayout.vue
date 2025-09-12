<script setup>
import SidebarAdmin from "@/components/admin/SidebarAdmin.vue";
import NavbarAdmin from "@/components/admin/NavbarAdmin.vue";
</script>

<template>
  <div class="flex h-screen bg-gray-100">
    <SidebarAdmin />
    <div class="flex-1 flex flex-col">
      <NavbarAdmin />
      <main class="flex-1 overflow-y-auto p-6">
        <router-view></router-view>
      </main>
    </div>
  </div>
</template>
