<script>
export default {
  name: "MyProfile",
};
</script>

<script setup>
import { useUserStore } from "@/stores/user"
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

const userStore = useUserStore()
</script>

<template>
  <div class="p-6 space-y-6">
    <h1 class="text-2x1 font-bold mb-4">Profile</h1>

    <!-- Data umum semua role -->
    <Card>
      <CardHeader>
        <CardTitle>Informasi Akun</CardTitle>
      </CardHeader>
      <CardContent>
        <p><strong>Nama:</strong> {{ userStore.user?.name }}</p>
        <p><strong>Email:</strong> {{ userStore.user?.email }}</p>
        <p><strong>Role:</strong> {{ userStore.user?.role }}</p>
      </CardContent>
    </Card>

    <!-- Khusus untuk Admin -->
    <div v-if="userStore.user?.role === 'admin'" class="space-y-4">
      <h2 class="text-xl font-semibold">Fitur Admin</h2>
      <Button>Kelola Event</Button>
      <Button variant="secondary">Kelola Pengguna</Button>
    </div>

    <!-- Khusus untuk User -->
    <div v-else-if="userStore.user?.role === 'user'" class="space-y-4">
      <h2 class="text-xl font-semibold">Tiket Saya</h2>
      <p class="text-muted-foreground">Lihat daftar tiket yang sudah kamu pesan.</p>
      <Button>Lihat Tiket</Button>
    </div>

    <!-- Khusus untuk SuperAdmin -->
    <div v-else-if="userStore.user?.role === 'superAdmin'" class="space-y-4">
      <h2 class="text-xl font-semibold">Super Admin Dashboard</h2>
      <Button class="w-full">Kelola Semua Data</Button>
    </div>
  </div>
</template>

<style scoped></style>
