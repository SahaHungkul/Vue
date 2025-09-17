<script setup>
import { ref } from "vue"
import { useRouter } from "vue-router"

const router = useRouter()

// Dummy data event
const events = ref([
  { id: 1, title: "Konser Musik", date: "2025-10-01", location: "Jakarta" },
  { id: 2, title: "Seminar Teknologi", date: "2025-11-15", location: "Bandung" },
])

function goToCreate() {
  router.push("/events/create")
}

function goToEdit(id) {
  router.push(`/events/${id}/edit`)
}
</script>

<template>
  <div class="p-6">
    <div class="flex justify-between items-center mb-4">
      <h1 class="text-xl font-bold">Daftar Event</h1>
      <button
        @click="goToCreate"
        class="px-4 py-2 bg-blue-600 text-white rounded"
      >
        + Tambah Event
      </button>
    </div>

    <table class="w-full border border-gray-300">
      <thead class="bg-gray-100">
        <tr>
          <th class="p-2 border">Judul</th>
          <th class="p-2 border">Tanggal</th>
          <th class="p-2 border">Lokasi</th>
          <th class="p-2 border">Aksi</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="event in events" :key="event.id" class="text-center">
          <td class="p-2 border">{{ event.title }}</td>
          <td class="p-2 border">{{ event.date }}</td>
          <td class="p-2 border">{{ event.location }}</td>
          <td class="p-2 border">
            <button
              @click="goToEdit(event.id)"
              class="px-2 py-1 bg-yellow-500 text-white rounded mr-2"
            >
              Edit
            </button>
            <button
              class="px-2 py-1 bg-red-600 text-white rounded"
            >
              Hapus
            </button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
