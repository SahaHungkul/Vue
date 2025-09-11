<template>
  <aside
    class="w-64 bg-gray-800 text-white p-4 fixed top-0 right-0 h-full transform transition-transform duration-300 z-50"
    :class="isOpen ? 'translate-x-0' : 'translate-x-full'">
    <nav class="space-y-4 mt-10">
      <RouterLink to="/home" class="block hover:bg-gray-700 p-2 rounded">Home</RouterLink>
      <RouterLink to="/about" class="block hover:bg-gray-700 p-2 rounded">About</RouterLink>
      <RouterLink to="/contact" class="block hover:bg-gray-700 p-2 rounded">Contact</RouterLink>
      <RouterLink to="/admin/dashboard" class="block hover:bg-gray-700 p-2 rounded">Admin Dashboard</RouterLink>
      <RouterLink to="/profile" class="block hover:bg-gray-700 p-2 rounded">My Profile</RouterLink>
      <RouterLink to="/logout" class="block hover:bg-gray-700 p-2 rounded">Logout</RouterLink>
    </nav>
  </aside>
</template>

<script setup>
defineProps({
  isOpen: Boolean
})
</script>
<style scoped></style>
