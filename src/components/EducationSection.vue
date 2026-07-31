<script setup lang="ts">
import { DuiCard } from '@dronico/droni-kit'
import educationIllustration from '../assets/img/education.png'

const education = [
  { title: 'Desarrollador Backend', school: 'Platzi', detail: '+15 cursos terminados en desarrollo backend', icon: 'mdi-school-outline', iconBg: 'bg-emerald-500' },
  { title: 'Ing. Sistemas', school: 'CUN', detail: '1er semestre en curso', icon: 'mdi-bank-outline', iconBg: 'bg-blue-500' },
  { title: 'Lic. Informática', school: 'Uniminuto', detail: '9no semestre sin terminar', icon: 'mdi-laptop', iconBg: 'bg-violet-500' },
  { title: 'Diseño Gráfico', school: 'CIDE', detail: '7mo semestre sin terminar', icon: 'mdi-palette-outline', iconBg: 'bg-pink-500' },
]
</script>

<template>
  <section id="education" class="relative overflow-hidden bg-gray-50 py-24 print:!py-10 print:break-before-page dark:bg-gray-900">
    <img
      :src="educationIllustration"
      alt=""
      class="no-print pointer-events-none absolute -right-16 -bottom-16 hidden w-80 opacity-[0.07] dark:opacity-[0.05] lg:block"
    />
    <div class="container relative mx-auto px-6">
      <div v-reveal class="mb-16 text-center">
        <p class="mb-2 font-mono text-sm font-semibold tracking-widest text-indigo-500 uppercase">Base académica</p>
        <h2 class="text-4xl font-bold text-gray-900 dark:text-white">
          Formación <span class="text-indigo-500">académica</span>
        </h2>
      </div>

      <div class="mx-auto grid max-w-4xl grid-cols-1 gap-6 md:grid-cols-2">
        <DuiCard v-for="(edu, i) in education" :key="edu.title" v-reveal :style="{ transitionDelay: `${i * 80}ms` }" class="!bg-white dark:!bg-gray-800">
          <div class="flex items-center gap-4">
            <span class="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg text-lg text-white shadow-sm" :class="edu.iconBg">
              <i class="mdi" :class="edu.icon" />
            </span>
            <div>
              <h3 class="text-lg font-bold text-gray-900 dark:text-white">{{ edu.title }}</h3>
              <p class="font-semibold text-indigo-500">{{ edu.school }}</p>
            </div>
          </div>
          <p class="mt-4 text-sm text-gray-600 dark:text-gray-400">{{ edu.detail }}</p>
        </DuiCard>
      </div>
    </div>
  </section>
</template>
