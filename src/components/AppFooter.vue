<script setup lang="ts">
const socials = [
  { icon: 'mdi-email-outline', href: 'mailto:dev@droni.co', label: 'Email' },
  { icon: 'mdi-github', href: 'https://github.com/droni-co', label: 'GitHub' },
  { icon: 'mdi-twitter', href: 'https://twitter.com/Droni_Co', label: 'Twitter' },
  { icon: 'mdi-facebook', href: 'https://fb.com/socialdronico', label: 'Facebook' },
]

const year = new Date().getFullYear()
</script>

<template>
  <footer class="no-print bg-zinc-950 py-12 text-white">
    <div class="container mx-auto px-6 text-center">
      <div class="mb-6 flex justify-center gap-6">
        <a
          v-for="s in socials"
          :key="s.label"
          :href="s.href"
          target="_blank"
          rel="noopener"
          :aria-label="s.label"
          class="text-xl text-gray-400 transition-colors hover:text-white"
        >
          <i class="mdi" :class="s.icon" />
        </a>
      </div>
      <p class="mb-3 text-gray-400">© {{ year }} Gustavo Barragán. Desarrollador Full Stack & Arquitecto de Software.</p>
      <div class="flex items-center justify-center gap-2 text-sm text-gray-500">
        <span>Hecho con</span>
        <i class="mdi mdi-heart animate-pulse text-red-500" />
        <span>y mucho código</span>
      </div>
    </div>
  </footer>
</template>
