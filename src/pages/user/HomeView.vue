<script setup>
import { useUserStore } from '@/stores/user'

import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Calendar, Ticket, Info } from 'lucide-vue-next';

const userStore = useUserStore()
</script>

<template>
  <div class="p-6 space-y-6">
    <!-- Judul -->
    <h1 class="text-2xl font-bold">Selamat Datang di EventApp, {{ userStore.user?.name || 'guest' }} 🎉</h1>
    <p class="text-muted-foreground">Temukan dan pesan tiket event favoritmu dengan mudah</p>

    <!-- Highlight Section -->
    <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
      <Card>
        <CardHeader class="flex flex-row items-center justify-between">
          <CardTitle>Event Terbaru</CardTitle>
          <Calendar class="w-5 h-5 text-muted-foreground" />
        </CardHeader>
        <CardContent>
          <p class="text-sm text-muted-foreground">Lihat event yang baru saja ditambahkan minggu ini.</p>
          <router-link to="/events">
            <Button class="mt-3 w-full cursor-pointer">Lihat Event</Button>
          </router-link>
        </CardContent>
      </Card>

      <Card>
        <CardHeader class="flex flex-row items-center justify-between">
          <CardTitle>Tiket Saya</CardTitle>
          <Ticket class="w-5 h-5 text-muted-foreground" />
        </CardHeader>
        <CardContent>
          <p class="text-sm text-muted-foreground">Kelola tiket yang sudah kamu pesan.</p>
          <Button variant="secondary" class="mt-3 w-full cursor-pointer">Lihat Tiket</Button>
        </CardContent>
      </Card>

      <Card>
        <CardHeader class="flex flex-row items-center justify-between">
          <CardTitle>Tentang Kami</CardTitle>
          <Info class="w-5 h-5 text-muted-foreground" />
        </CardHeader>
        <CardContent>
          <p class="text-sm text-muted-foreground">Kenali lebih jauh tentang layanan kami.</p>
          <router-link to="/about">
            <Button variant="outline" class="mt-3 w-full cursor-pointer">Pelajari</Button>
          </router-link>
        </CardContent>
      </Card>
    </div>

    <!-- Daftar Event Populer -->
    <div>
      <h2 class="text-xl font-semibold mb-3">Event Populer 🔥</h2>
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <Card v-for="event in [1, 2, 3]" :key="event">
          <CardHeader>
            <CardTitle>Event {{ event }}</CardTitle>
          </CardHeader>
          <CardContent>
            <p class="text-sm text-muted-foreground">Deskripsi singkat event {{ event }}</p>
            <Button class="mt-3 w-full">Pesan Tiket</Button>
          </CardContent>
        </Card>
      </div>
    </div>
  </div>
</template>
