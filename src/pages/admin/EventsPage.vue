<script setup>
import { ref, onMounted } from 'vue'
import api from '@/utils/api' // axios instance dengan token otomatis

const events = ref([])
const loading = ref(true)
const errorMessage = ref('')
const newEvent = ref({ name: '', location: '', date: '', price: '' })
const editingEvent = ref(null)

const fetchEvents = async () => {
  try {
    const res = await api.get('/events')
    events.value = res.data
  } catch (err) {
    errorMessage.value = err.response?.data?.message || 'Gagal memuat event'
  } finally {
    loading.value = false
  }
}

const addEvent = async () => {
  try {
    const res = await api.post('/events', newEvent.value)
    events.value.push(res.data)
    newEvent.value = { name: '', location: '', date: '', price: '' }
    alert('Event berhasil ditambahkan')
  } catch (err) {
    alert(err.response?.data?.message || 'Gagal menambahkan event')
  }
}

const startEdit = (event) => {
  editingEvent.value = { ...event }
}

const updateEvent = async () => {
  try {
    const res = await api.put(`/events/${editingEvent.value.id}`, editingEvent.value)
    const index = events.value.findIndex(e => e.id === editingEvent.value.id)
    events.value[index] = res.data
    editingEvent.value = null
    alert('Event berhasil diperbarui')
  } catch {
    alert('Gagal memperbarui event')
  }
}

const deleteEvent = async (id) => {
  if (!confirm('Yakin hapus event ini?')) return
  try {
    await api.delete(`/events/${id}`)
    events.value = events.value.filter(e => e.id !== id)
    alert('Event berhasil dihapus')
  } catch {
    alert('Gagal menghapus event')
  }
}

onMounted(fetchEvents)
</script>

<template>
  <div class="p-6">
    <h2 class="text-2xl font-bold mb-4">Event Management</h2>

    <!-- Error -->
    <p v-if="errorMessage" class="text-red-500">{{ errorMessage }}</p>

    <!-- Tambah Event -->
    <div class="mb-6 p-4 border rounded bg-gray-50">
      <h3 class="text-lg font-semibold mb-2">Tambah Event Baru</h3>
      <form @submit.prevent="addEvent" class="space-y-2">
        <input v-model="newEvent.name" type="text" placeholder="Nama Event" class="border p-2 w-full" />
        <input v-model="newEvent.location" type="text" placeholder="Lokasi" class="border p-2 w-full" />
        <input v-model="newEvent.date" type="date" class="border p-2 w-full" />
        <input v-model="newEvent.price" type="number" placeholder="Harga Tiket" class="border p-2 w-full" />
        <button type="submit" class="bg-green-600 text-white px-4 py-2 rounded">Tambah</button>
      </form>
    </div>

    <!-- Daftar Event -->
    <table v-if="!loading && events.length" class="w-full border-collapse border border-gray-300">
      <thead>
        <tr class="bg-gray-100">
          <th class="border px-4 py-2">ID</th>
          <th class="border px-4 py-2">Nama</th>
          <th class="border px-4 py-2">Lokasi</th>
          <th class="border px-4 py-2">Tanggal</th>
          <th class="border px-4 py-2">Harga</th>
          <th class="border px-4 py-2">Aksi</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="event in events" :key="event.id">
          <td class="border px-4 py-2">{{ event.id }}</td>
          <td class="border px-4 py-2">{{ event.name }}</td>
          <td class="border px-4 py-2">{{ event.location }}</td>
          <td class="border px-4 py-2">{{ event.date }}</td>
          <td class="border px-4 py-2">Rp {{ event.price }}</td>
          <td class="border px-4 py-2 space-x-2">
            <button @click="startEdit(event)" class="bg-blue-500 text-white px-2 py-1 rounded">Edit</button>
            <button @click="deleteEvent(event.id)" class="bg-red-500 text-white px-2 py-1 rounded">Hapus</button>
          </td>
        </tr>
      </tbody>
    </table>

    <p v-if="!loading && !events.length" class="text-gray-500">Belum ada event</p>

    <!-- Modal Edit Event -->
    <div v-if="editingEvent" class="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
      <div class="bg-white p-6 rounded shadow-md w-96">
        <h3 class="text-lg font-semibold mb-4">Edit Event</h3>
        <form @submit.prevent="updateEvent" class="space-y-2">
          <input v-model="editingEvent.name" type="text" placeholder="Nama Event" class="border p-2 w-full" />
          <input v-model="editingEvent.location" type="text" placeholder="Lokasi" class="border p-2 w-full" />
          <input v-model="editingEvent.date" type="date" class="border p-2 w-full" />
          <input v-model="editingEvent.price" type="number" placeholder="Harga" class="border p-2 w-full" />
          <div class="flex justify-end space-x-2 mt-4">
            <button type="button" @click="editingEvent = null"
              class="bg-gray-400 text-white px-3 py-1 rounded">Batal</button>
            <button type="submit" class="bg-blue-600 text-white px-3 py-1 rounded">Simpan</button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>
