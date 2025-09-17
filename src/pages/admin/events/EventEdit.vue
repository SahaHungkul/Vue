<script setup>
import { ref, onMounted } from "vue"
import { useRoute, useRouter } from "vue-router"

const route = useRoute()
const router = useRouter()

// Dummy data event
const form = ref({
  id: null,
  title: "",
  date: "",
  location: "",
  description: "",
})

// simulasi ambil data berdasarkan id di URL
onMounted(() => {
  const id = route.params.id
  // contoh dummy data, nanti ambil dari API
  if (id == 1) {
    form.value = {
      id: 1,
      title: "Konser Musik",
      date: "2025-10-01",
      location: "Jakarta",
      description: "Konser musik terbesar di Jakarta",
    }
  } else if (id == 2) {
    form.value = {
      id: 2,
      title: "Seminar Teknologi",
      date: "2025-11-15",
      location: "Bandung",
      description: "Seminar teknologi masa depan",
    }
  }
})

function handleSubmit() {
  console.log("Update Event:", form.value)

  // nanti diganti axios.put(`/api/events/${form.value.id}`, form.value)
  alert("Event berhasil diperbarui (dummy)!")
  router.push("/events")
}
</script>

<template>
  <div class="max-w-2xl mx-auto p-6 bg-white shadow rounded">
    <h1 class="text-xl font-bold mb-4">Edit Event</h1>

    <form @submit.prevent="handleSubmit" class="space-y-4">
      <!-- Judul -->
      <div>
        <label class="block text-sm font-medium">Judul Event</label>
        <input v-model="form.title" type="text" class="w-full border rounded px-3 py-2" required />
      </div>

      <!-- Tanggal -->
      <div>
        <label class="block text-sm font-medium">Tanggal</label>
        <input v-model="form.date" type="date" class="w-full border rounded px-3 py-2" required />
      </div>

      <!-- Lokasi -->
      <div>
        <label class="block text-sm font-medium">Lokasi</label>
        <input v-model="form.location" type="text" class="w-full border rounded px-3 py-2" required />
      </div>

      <!-- Deskripsi -->
      <div>
        <label class="block text-sm font-medium">Deskripsi</label>
        <textarea v-model="form.description" class="w-full border rounded px-3 py-2" rows="4" />
      </div>

      <!-- Tombol -->
      <div class="flex justify-end gap-2">
        <button type="button" class="px-4 py-2 bg-gray-300 rounded" @click="router.push('/events')">
          Batal
        </button>
        <button type="submit" class="px-4 py-2 bg-blue-600 text-white rounded">
          Update
        </button>
      </div>
    </form>
  </div>
</template>
