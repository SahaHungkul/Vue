<script setup>
import { useRoute } from 'vue-router';
import { useUserStore } from '@/stores/user';
import { Button } from '@/components/ui/button';

const router = useRoute();
const userStore = useUserStore();

function handleLogout() {
  userStore.logout();
  router.push('/login');
}
</script>

<template>
  <Button @click="handleLogout" variant="destructive" class="w-full">Logout</Button>
</template>

<style scoped></style>
