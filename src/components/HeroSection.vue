<script setup lang="ts">
import { onBeforeUnmount, onMounted, ref } from 'vue'
import { DuiButton, DuiBadge } from '@dronico/droni-kit'
import bgPhoto from '../assets/img/bg.jpg'
import avatar from '../assets/img/gustavo_barragan2.jpg'

const roles = ['Software Developer', 'Arquitecto de Software', 'Especialista en Ciberseguridad']
const roleText = ref('')
let roleIndex = 0
let charIndex = 0
let deleting = false
let timer: ReturnType<typeof setTimeout>

function tick() {
  const current = roles[roleIndex]
  if (!deleting) {
    charIndex++
    roleText.value = current.slice(0, charIndex)
    if (charIndex === current.length) {
      deleting = true
      timer = setTimeout(tick, 1800)
      return
    }
    timer = setTimeout(tick, 70)
  } else {
    charIndex--
    roleText.value = current.slice(0, charIndex)
    if (charIndex === 0) {
      deleting = false
      roleIndex = (roleIndex + 1) % roles.length
    }
    timer = setTimeout(tick, 35)
  }
}

onMounted(() => {
  timer = setTimeout(tick, 400)
})
onBeforeUnmount(() => clearTimeout(timer))

const highlights = [
  { icon: 'mdi-code-braces', label: 'Full Stack Developer' },
  { icon: 'mdi-sitemap-outline', label: 'Arquitecto de Software' },
  { icon: 'mdi-shield-check-outline', label: 'Certificado en Ciberseguridad' },
  { icon: 'mdi-briefcase-clock-outline', label: '15+ años de experiencia' },
]
</script>

<template>
  <header id="top" class="relative flex min-h-screen items-center overflow-hidden bg-zinc-900">
    <!-- Background photo -->
    <div class="absolute inset-0">
      <img :src="bgPhoto" alt="" class="h-full w-full object-cover opacity-40" />
      <div class="absolute inset-0 bg-gradient-to-br from-zinc-950/90 via-zinc-900/85 to-indigo-950/80" />
    </div>

    <!-- Ambient blobs -->
    <div class="no-print pointer-events-none absolute inset-0 overflow-hidden">
      <div class="animate-float-slow absolute -top-32 -right-24 h-96 w-96 rounded-full bg-indigo-600/20 blur-3xl" />
      <div class="animate-float-slower absolute -bottom-32 -left-24 h-96 w-96 rounded-full bg-blue-500/20 blur-3xl" />
    </div>

    <div class="container relative z-10 mx-auto grid grid-cols-1 items-center gap-12 px-6 py-32 lg:grid-cols-[auto_1fr]">
      <!-- Avatar -->
      <div v-reveal class="justify-self-center lg:justify-self-start">
        <div class="relative">
          <div class="animate-glow-ring absolute inset-0 rounded-full" />
          <img
            :src="avatar"
            alt="Gustavo Barragán"
            class="relative z-10 h-48 w-48 rounded-full border-4 border-white/20 object-cover shadow-2xl md:h-64 md:w-64"
          />
        </div>
      </div>

      <!-- Text -->
      <div class="text-center lg:text-left">
        <p v-reveal class="mb-3 font-mono text-sm tracking-widest text-indigo-300 uppercase">Hola, soy</p>
        <h1 v-reveal class="mb-4 text-5xl font-extrabold tracking-tight text-white md:text-6xl">
          Gustavo <span class="bg-gradient-to-r from-indigo-400 to-blue-300 bg-clip-text text-transparent">Barragán</span>
        </h1>
        <div v-reveal class="mb-8 h-9 font-mono text-xl text-blue-100 md:text-2xl">
          <span class="text-indigo-400">&lt;</span>
          <span>{{ roleText }}</span><span class="animate-caret text-indigo-300">|</span>
          <span class="text-indigo-400">&gt;</span>
        </div>

        <div v-reveal class="mb-8 flex flex-wrap justify-center gap-2.5 lg:justify-start">
          <DuiBadge
            v-for="h in highlights"
            :key="h.label"
            variant="soft"
            color="primary"
            size="md"
            class="!bg-white/10 !text-white backdrop-blur-sm"
          >
            <template #icon><i :class="['mdi', h.icon]" /></template>
            {{ h.label }}
          </DuiBadge>
        </div>

        <div v-reveal class="mb-10 flex flex-wrap justify-center gap-3 lg:justify-start">
          <DuiButton color="primary" size="lg" to="mailto:dev@droni.co">
            <i class="mdi mdi-email-outline mr-2" />Contáctame
          </DuiButton>
          <DuiButton variant="outline" color="neutral" size="lg" to="https://github.com/droni-co" class="!text-white !border-white/30" target="_blank" rel="noopener">
            <i class="mdi mdi-github mr-2" />Ver GitHub
          </DuiButton>
        </div>

        <div v-reveal class="flex justify-center gap-5 text-2xl text-white/80 lg:justify-start">
          <a href="mailto:dev@droni.co" class="transition-colors hover:text-indigo-300" aria-label="Email"><i class="mdi mdi-email-outline" /></a>
          <a href="https://github.com/droni-co" target="_blank" rel="noopener" class="transition-colors hover:text-indigo-300" aria-label="GitHub"><i class="mdi mdi-github" /></a>
          <a href="https://twitter.com/Droni_Co" target="_blank" rel="noopener" class="transition-colors hover:text-indigo-300" aria-label="Twitter"><i class="mdi mdi-twitter" /></a>
          <a href="https://fb.com/socialdronico" target="_blank" rel="noopener" class="transition-colors hover:text-indigo-300" aria-label="Facebook"><i class="mdi mdi-facebook" /></a>
        </div>
      </div>
    </div>

    <div class="no-print absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce text-white/60">
      <i class="mdi mdi-chevron-down text-3xl" />
    </div>
  </header>
</template>
