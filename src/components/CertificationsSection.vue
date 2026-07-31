<script setup lang="ts">
import { DuiBadge, DuiButton, DuiTooltip } from '@dronico/droni-kit'

const cyberCerts = [
  {
    title: 'Google Cybersecurity Certificate',
    date: 'Feb 2025',
    id: null,
    icon: 'mdi-certificate-outline',
    iconBg: 'bg-blue-500',
    tags: ['Ciberseguridad', 'Google'],
    href: 'https://www.credly.com/badges/6aade594-0f06-46a6-9d02-21fc3aa01120/linked_in_profile',
  },
  {
    title: 'Programa Especializado: Google Cybersecurity',
    date: 'Feb 2025',
    id: 'YZ4CQM0U5UZW',
    icon: 'mdi-shield-star-outline',
    iconBg: 'bg-emerald-500',
    tags: ['Especialización', 'Certificado'],
    href: 'https://www.coursera.org/account/accomplishments/specialization/YZ4CQM0U5UZW',
  },
  {
    title: 'Automatizar tareas de seguridad con Python',
    date: 'Dic 2024',
    id: 'UBFB7HG64CZ1',
    icon: 'mdi-language-python',
    iconBg: 'bg-amber-500',
    tags: ['Python', 'Automatización'],
    href: 'https://www.coursera.org/account/accomplishments/verify/UBFB7HG64CZ1',
  },
  {
    title: 'Sound the Alarm: Detection and Response',
    date: 'Dic 2024',
    id: 'GD6RXURC1W9Y',
    icon: 'mdi-alert-octagon-outline',
    iconBg: 'bg-rose-500',
    tags: ['Detección', 'Respuesta'],
    href: 'https://www.coursera.org/account/accomplishments/verify/GD6RXURC1W9Y',
  },
  {
    title: 'Assets, Threats, and Vulnerabilities',
    date: 'Nov 2024',
    id: '3JUX3OBBEQ2Z',
    icon: 'mdi-shield-alert-outline',
    iconBg: 'bg-violet-500',
    tags: ['Vulnerabilidades', 'Amenazas'],
    href: 'https://www.coursera.org/account/accomplishments/verify/3JUX3OBBEQ2Z',
  },
  {
    title: 'Connect and Protect: Networks Security',
    date: 'Nov 2024',
    id: 'DZWL22R7XZQB',
    icon: 'mdi-lan-connect',
    iconBg: 'bg-cyan-500',
    tags: ['Redes', 'Seguridad'],
    href: 'https://www.coursera.org/account/accomplishments/verify/DZWL22R7XZQB',
  },
]

const foundationalCourses = [
  { title: 'Foundations of Cybersecurity', date: 'Nov 2024', icon: 'mdi-shield-outline', href: 'https://www.coursera.org/account/accomplishments/verify/D6VHHLDJLWEJ' },
  { title: 'Play It Safe: Manage Security Risks', date: 'Nov 2024', icon: 'mdi-account-lock-outline', href: 'https://www.coursera.org/account/accomplishments/verify/SHI7MO79ICDZ' },
  { title: 'Tools of the Trade: Linux and SQL', date: 'Nov 2024', icon: 'mdi-linux', href: 'https://www.coursera.org/account/accomplishments/verify/P5VH88BZNWN8' },
  { title: 'Ve a lo seguro: Gestiona riesgos', date: 'Sep 2024', icon: 'mdi-lock-check-outline', href: 'https://www.coursera.org/account/accomplishments/certificate/MNNRXDVCHSTS' },
]

const stats = [
  { value: '14+', label: 'Certificaciones' },
  { value: '2', label: 'Proveedores' },
  { value: '2024-25', label: 'Más recientes' },
]
</script>

<template>
  <section id="certifications" class="bg-white py-24 print:!py-10 print:break-before-page dark:bg-gray-950">
    <div class="container mx-auto px-6">
      <div v-reveal class="mb-12 text-center">
        <p class="mb-2 font-mono text-sm font-semibold tracking-widest text-indigo-500 uppercase">Aprendizaje continuo</p>
        <h2 class="text-4xl font-bold text-gray-900 dark:text-white">
          Certificaciones <span class="text-indigo-500">profesionales</span>
        </h2>
      </div>

      <!-- Cybersecurity callout -->
      <div
        v-reveal
        class="mx-auto mb-14 flex max-w-4xl flex-col items-center gap-4 rounded-2xl border border-emerald-200 bg-gradient-to-r from-emerald-50 to-blue-50 p-6 text-center shadow-sm sm:flex-row sm:text-left dark:border-emerald-900/40 dark:from-emerald-950/40 dark:to-blue-950/30"
      >
        <span class="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-emerald-500 to-blue-600 text-2xl text-white shadow-md">
          <i class="mdi mdi-shield-check" />
        </span>
        <div>
          <h3 class="font-bold text-gray-900 dark:text-white">Especializado en Ciberseguridad</h3>
          <p class="text-sm text-gray-700 dark:text-gray-300">
            Certificación profesional de Google Cybersecurity (Coursera), con foco en detección de amenazas,
            gestión de riesgos y seguridad de redes aplicada al desarrollo de software.
          </p>
        </div>
      </div>

      <div class="mx-auto mb-16 max-w-6xl">
        <div class="mb-8 flex items-center gap-3">
          <span class="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-r from-blue-500 to-emerald-500 text-xl text-white shadow-sm">
            <i class="mdi mdi-google" />
          </span>
          <div>
            <h3 class="text-xl font-bold text-gray-900 dark:text-white">Google Cybersecurity</h3>
            <p class="text-sm text-gray-600 dark:text-gray-400">Programa especializado en seguridad cibernética</p>
          </div>
        </div>

        <div class="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          <div
            v-for="cert in cyberCerts"
            :key="cert.title"
            v-reveal
            class="flex flex-col rounded-xl border border-emerald-100 bg-gradient-to-br from-emerald-50/60 to-blue-50/60 p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg dark:border-emerald-900/30 dark:from-gray-800 dark:to-gray-800"
          >
            <div class="mb-4 flex items-start gap-3">
              <span class="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg text-lg text-white shadow-sm" :class="cert.iconBg">
                <i class="mdi" :class="cert.icon" />
              </span>
              <div class="min-w-0 flex-1">
                <h4 class="text-sm leading-snug font-bold text-gray-900 dark:text-white">{{ cert.title }}</h4>
                <p class="mt-1 flex items-center gap-1 text-xs text-gray-600 dark:text-gray-400">
                  {{ cert.date }}
                  <template v-if="cert.id">
                    <span>•</span>
                    <DuiTooltip :text="`ID de credencial: ${cert.id}`" placement="top">
                      <span class="cursor-help underline decoration-dotted">ID</span>
                    </DuiTooltip>
                  </template>
                </p>
              </div>
            </div>
            <div class="mb-4 flex flex-wrap gap-1.5">
              <DuiBadge v-for="tag in cert.tags" :key="tag" size="xs" variant="soft" color="success">{{ tag }}</DuiBadge>
            </div>
            <DuiButton :to="cert.href" target="_blank" rel="noopener" size="sm" color="success" class="no-print mt-auto self-start">
              <i class="mdi mdi-open-in-new mr-1.5" />Ver credencial
            </DuiButton>
          </div>
        </div>
      </div>

      <!-- Foundational courses -->
      <div class="mx-auto mb-16 max-w-6xl">
        <h3 class="mb-6 text-lg font-bold text-gray-900 dark:text-white">Cursos fundamentales</h3>
        <div class="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          <div
            v-for="course in foundationalCourses"
            :key="course.title"
            v-reveal
            class="rounded-lg border border-gray-200 bg-gray-50 p-4 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-md dark:border-gray-700 dark:bg-gray-800"
          >
            <div class="mb-3 flex items-start gap-3">
              <span class="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-indigo-500 text-sm text-white">
                <i class="mdi" :class="course.icon" />
              </span>
              <div class="min-w-0 flex-1">
                <h4 class="line-clamp-2 text-sm leading-snug font-semibold text-gray-900 dark:text-white">{{ course.title }}</h4>
                <p class="text-xs text-gray-600 dark:text-gray-400">{{ course.date }}</p>
              </div>
            </div>
            <a
              :href="course.href"
              target="_blank"
              rel="noopener"
              class="no-print inline-flex items-center text-xs font-semibold text-indigo-600 no-underline hover:underline dark:text-indigo-400"
            >
              <i class="mdi mdi-open-in-new mr-1" />Ver credencial
            </a>
          </div>
        </div>
      </div>

      <!-- Platzi -->
      <div v-reveal class="mx-auto mb-16 max-w-6xl">
        <div class="mb-6 flex items-center gap-3">
          <span class="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-r from-green-400 to-blue-500 text-xl text-white shadow-sm">
            <i class="mdi mdi-code-tags" />
          </span>
          <div>
            <h3 class="text-xl font-bold text-gray-900 dark:text-white">Platzi</h3>
            <p class="text-sm text-gray-600 dark:text-gray-400">Desarrollo y programación</p>
          </div>
        </div>

        <div class="rounded-xl border border-green-200 bg-gradient-to-br from-green-50 to-blue-50 p-6 shadow-sm dark:border-gray-700 dark:from-gray-800 dark:to-gray-800">
          <div class="mb-4 flex items-center gap-4">
            <span class="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-gradient-to-r from-green-500 to-blue-500 text-lg text-white">
              <i class="mdi mdi-server" />
            </span>
            <div>
              <h4 class="text-lg font-bold text-gray-900 dark:text-white">Desarrollo Backend con PHP</h4>
              <p class="text-sm text-gray-600 dark:text-gray-400">Marzo 2020</p>
            </div>
          </div>
          <p class="mb-4 text-sm leading-relaxed text-gray-700 dark:text-gray-300">
            Certificación completa en desarrollo backend con PHP, incluyendo frameworks modernos, bases de datos y
            mejores prácticas de desarrollo.
          </p>
          <div class="mb-4 flex flex-wrap gap-2">
            <DuiBadge v-for="tag in ['PHP', 'Laravel', 'Backend', 'APIs']" :key="tag" size="sm" variant="soft" color="primary">{{ tag }}</DuiBadge>
          </div>
          <DuiButton to="https://platzi.com/p/Dronico/ruta/10-desarrollo-php/diploma/detalle/" target="_blank" rel="noopener" color="primary" size="sm" class="no-print">
            <i class="mdi mdi-open-in-new mr-1.5" />Ver certificado
          </DuiButton>
        </div>
      </div>

      <!-- Stats -->
      <div v-reveal class="mx-auto max-w-6xl rounded-2xl bg-gradient-to-r from-zinc-800 to-indigo-950 p-8 text-center text-white shadow-lg">
        <div class="grid grid-cols-1 gap-8 md:grid-cols-3">
          <div v-for="s in stats" :key="s.label">
            <div class="mb-2 text-4xl font-bold">{{ s.value }}</div>
            <div class="text-indigo-200">{{ s.label }}</div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
