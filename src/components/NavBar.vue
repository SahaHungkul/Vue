<script setup></script>

<template>
  <header class="flex items-center justify-between bg-white shadow px-4 py-3">
    <h1 class="text-xl font-bold">My App</h1>
    <button @click="$emit('toggle-sidebar')" class="p-2 bg-gray-200 rounded-md hover:bg-gray-300">
      ☰
    </button>
  </header>
</template>

<style scoped></style>
