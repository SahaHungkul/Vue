<script setup>
</script>

<template>
  <div class="max-w-5xl mx-auto p-6">
    <!-- Judul -->
    <h1 class="text-4xl font-bold text-center text-gray-800 mb-6">
      Tentang Kami
    </h1>

    <!-- Deskripsi -->
    <p class="text-lg text-gray-600 text-center mb-10">
      Kami adalah platform untuk memudahkan pengguna dalam menemukan, memesan,
      dan mengelola tiket event secara praktis. Misi kami adalah membuat pengalaman
      menghadiri acara menjadi lebih mudah dan menyenangkan.
    </p>

    <!-- Grid Tim -->
    <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
      <!-- Anggota Tim -->
      <div class="bg-white shadow-lg rounded-xl p-6 text-center hover:shadow-xl transition">
        <img src="../assets/hoshino.jpg" alt="Founder" class="w-24 h-24 rounded-full mx-auto mb-4" />
        <h2 class="text-xl font-semibold text-gray-800">Hoshino</h2>
        <p class="text-gray-500">Founder & Developer</p>
      </div>

      <div class="bg-white shadow-lg rounded-xl p-6 text-center hover:shadow-xl transition">
        <img src="../assets/maki.jpg" alt="Designer" class="w-24 h-24 rounded-full mx-auto mb-4" />
        <h2 class="text-xl font-semibold text-gray-800">Maki</h2>
        <p class="text-gray-500">UI/UX Designer</p>
      </div>

      <div class="bg-white shadow-lg rounded-xl p-6 text-center hover:shadow-xl transition">
        <img src="../assets/kazusa.jpg" alt="Marketing" class="w-24 h-24 rounded-full mx-auto mb-4" />
        <h2 class="text-xl font-semibold text-gray-800">Kazusa</h2>
        <p class="text-gray-500">Marketing</p>
      </div>
    </div>
  </div>
</template>

<style scoped>
/* @media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
} */
</style>
