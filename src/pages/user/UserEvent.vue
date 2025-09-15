<script setup>
import { ref } from "vue"
import { Button } from "@/components/ui/button"
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"
import { Calendar, MapPin } from "lucide-vue-next"

const events = ref([
  { id: 1, name: "Konser Musik", date: "2025-09-20", location: "Jakarta" },
  { id: 2, name: "Workshop Vue.js", date: "2025-10-05", location: "Bandung" },
  { id: 3, name: "Seminar AI", date: "2025-11-12", location: "Surabaya" },
])
</script>

<template>
  <div class="p-6 space-y-6">
    <h1 class="text-2xl font-bold">Event Tersedia</h1>

    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      <Card v-for="event in events" :key="event.id">
        <CardHeader>
          <CardTitle>{{ event.name }}</CardTitle>
        </CardHeader>
        <CardContent class="space-y-2">
          <p class="flex items-center gap-2 text-sm text-muted-foreground">
            <Calendar class="w-4 h-4" /> {{ event.date }}
          </p>
          <p class="flex items-center gap-2 text-sm text-muted-foreground">
            <MapPin class="w-4 h-4" /> {{ event.location }}
          </p>
          <Button class="mt-3 w-full">Pesan Tiket</Button>
        </CardContent>
      </Card>
    </div>
  </div>
</template>
