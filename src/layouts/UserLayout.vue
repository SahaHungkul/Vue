<script setup>
import NavBar from "@/components/NavBar.vue";
import IniFooter from "@/components/IniFooter.vue";
</script>

<template>
  <div class="flex flex-col min-h-screen">
    <NavBar />

    <main class="flex-1 bg-gray-50 p-4">
      <router-view />
    </main>

    <IniFooter />
  </div>
</template>
