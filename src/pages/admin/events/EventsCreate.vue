<script setup>
import { ref } from "vue"
import { useRouter } from "vue-router"

const router = useRouter()

// state untuk form
const form = ref({
  title: "",
  date: "",
  location: "",
  description: "",
})

// submit handler (sementara console.log dulu)
function handleSubmit() {
  console.log("Event Baru:", form.value)

  // nanti ini diganti axios.post("/api/events", form.value)
  alert("Event berhasil dibuat (dummy)!")

  // redirect ke index event
  router.push("/events")
}
</script>

<template>
  <div class="max-w-2xl mx-auto p-6 bg-white shadow rounded">
    <h1 class="text-xl font-bold mb-4">Buat Event Baru</h1>

    <form @submit.prevent="handleSubmit" class="space-y-4">
      <!-- Judul -->
      <div>
        <label class="block text-sm font-medium">Judul Event</label>
        <input
          v-model="form.title"
          type="text"
          class="w-full border rounded px-3 py-2"
          placeholder="Masukkan judul event"
          required
        />
      </div>

      <!-- Tanggal -->
      <div>
        <label class="block text-sm font-medium">Tanggal</label>
        <input
          v-model="form.date"
          type="date"
          class="w-full border rounded px-3 py-2"
          required
        />
      </div>

      <!-- Lokasi -->
      <div>
        <label class="block text-sm font-medium">Lokasi</label>
        <input
          v-model="form.location"
          type="text"
          class="w-full border rounded px-3 py-2"
          placeholder="Contoh: Jakarta Convention Center"
          required
        />
      </div>

      <!-- Deskripsi -->
      <div>
        <label class="block text-sm font-medium">Deskripsi</label>
        <textarea
          v-model="form.description"
          class="w-full border rounded px-3 py-2"
          rows="4"
          placeholder="Tulis deskripsi event"
        />
      </div>

      <!-- Tombol -->
      <div class="flex justify-end gap-2">
        <button
          type="button"
          class="px-4 py-2 bg-gray-300 rounded"
          @click="router.push('/events')"
        >
          Batal
        </button>
        <button
          type="submit"
          class="px-4 py-2 bg-blue-600 text-white rounded"
        >
          Simpan
        </button>
      </div>
    </form>
  </div>
</template>
