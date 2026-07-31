<script setup lang="ts">
import { DuiCard } from '@dronico/droni-kit'
import SkillBar from './SkillBar.vue'

const categories = [
  {
    title: 'Backend & Arquitectura',
    icon: 'mdi-server',
    iconBg: 'bg-indigo-600',
    skills: [
      { label: 'Arquitectura de Software & Buenas Prácticas', value: 88, from: 'from-violet-500', to: 'to-indigo-500' },
      { label: 'Node.js', value: 95, from: 'from-green-500', to: 'to-emerald-600' },
      { label: 'PHP (Laravel, CakePHP)', value: 90, from: 'from-indigo-400', to: 'to-indigo-600' },
      { label: 'Databases (MySQL, Firebase)', value: 80, from: 'from-amber-500', to: 'to-orange-500' },
      { label: 'DevOps (Git, Docker, Ubuntu)', value: 70, from: 'from-sky-500', to: 'to-blue-600' },
      { label: 'Ruby on Rails', value: 55, from: 'from-rose-500', to: 'to-red-600' },
    ],
  },
  {
    title: 'Frontend',
    icon: 'mdi-monitor-dashboard',
    iconBg: 'bg-blue-600',
    skills: [
      { label: 'HTML5, CSS3, JavaScript', value: 98, from: 'from-orange-500', to: 'to-amber-400' },
      { label: 'Vue.js & Angular', value: 85, from: 'from-emerald-500', to: 'to-red-500' },
      { label: 'Libraries (jQuery, Bootstrap, Storybook)', value: 90, from: 'from-purple-500', to: 'to-indigo-500' },
      { label: 'SEO & UX/UI', value: 78, from: 'from-pink-500', to: 'to-rose-500' },
      { label: 'Mobile (Ionic, Flutter)', value: 55, from: 'from-cyan-500', to: 'to-blue-500' },
    ],
  },
  {
    title: 'Cloud, Seguridad & Otras',
    icon: 'mdi-shield-lock-outline',
    iconBg: 'bg-emerald-600',
    skills: [
      { label: 'Azure Cloud', value: 80, from: 'from-blue-500', to: 'to-sky-600' },
      { label: 'Google Services & APIs', value: 70, from: 'from-red-500', to: 'to-yellow-500' },
      { label: 'API REST (OAuth, Webservices)', value: 75, from: 'from-green-500', to: 'to-teal-500' },
      { label: 'AWS (EC2, S3, RDS, SES)', value: 45, from: 'from-orange-500', to: 'to-red-500' },
      { label: 'Inglés', value: 65, from: 'from-blue-500', to: 'to-indigo-500' },
      { label: 'CMS (WordPress, PrestaShop)', value: 80, from: 'from-purple-500', to: 'to-pink-500' },
    ],
  },
]
</script>

<template>
  <section id="skills" class="bg-white py-24 print:!py-10 print:break-before-page dark:bg-gray-950">
    <div class="container mx-auto px-6">
      <div v-reveal class="mb-16 text-center">
        <p class="mb-2 font-mono text-sm font-semibold tracking-widest text-indigo-500 uppercase">Qué domino</p>
        <h2 class="text-4xl font-bold text-gray-900 dark:text-white">
          Habilidades <span class="text-indigo-500">técnicas</span>
        </h2>
      </div>

      <div class="grid grid-cols-1 gap-8 lg:grid-cols-3">
        <DuiCard
          v-for="(cat, i) in categories"
          :key="cat.title"
          v-reveal
          size="l"
          class="!bg-gray-50 dark:!bg-gray-900"
          :style="{ transitionDelay: `${i * 100}ms` }"
        >
          <div class="mb-6 flex items-center gap-4">
            <span class="flex h-12 w-12 items-center justify-center rounded-lg text-xl text-white shadow-sm" :class="cat.iconBg">
              <i class="mdi" :class="cat.icon" />
            </span>
            <h3 class="text-xl font-bold text-gray-900 dark:text-white">{{ cat.title }}</h3>
          </div>
          <div class="space-y-5">
            <SkillBar v-for="s in cat.skills" :key="s.label" :label="s.label" :value="s.value" :from="s.from" :to="s.to" />
          </div>
        </DuiCard>
      </div>
    </div>
  </section>
</template>
