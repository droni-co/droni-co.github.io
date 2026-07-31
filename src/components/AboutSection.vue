<script setup lang="ts">
import { DuiCard } from '@dronico/droni-kit'
import workIllustration from '../assets/img/work.png'

const stats = [
  { value: '15+', label: 'Años de experiencia' },
  { value: '100+', label: 'Proyectos entregados' },
  { value: '20+', label: 'Tecnologías dominadas' },
]

const contact = [
  { icon: 'mdi-email-outline', label: 'Email', value: 'dev@droni.co', href: 'mailto:dev@droni.co', color: 'bg-indigo-500' },
  { icon: 'mdi-phone-outline', label: 'Teléfono', value: '+57 314 3390071', href: 'tel:+573143390071', color: 'bg-emerald-500' },
  { icon: 'mdi-github', label: 'GitHub', value: 'github.com/droni-co', href: 'https://github.com/droni-co', color: 'bg-zinc-700' },
  { icon: 'mdi-twitter', label: 'Twitter / X', value: '@Droni_Co', href: 'https://twitter.com/Droni_Co', color: 'bg-blue-500' },
]
</script>

<template>
  <section id="about" class="bg-gray-50 py-24 print:!py-10 print:break-before-page dark:bg-gray-900">
    <div class="container mx-auto px-6">
      <div class="grid grid-cols-1 items-center gap-16 lg:grid-cols-2 print:!grid-cols-2 print:!items-start print:!gap-8">
        <div v-reveal="'left'">
          <p class="mb-2 font-mono text-sm font-semibold tracking-widest text-indigo-500 uppercase">Quién soy</p>
          <h2 class="mb-6 text-4xl font-bold text-gray-900 dark:text-white print:!mb-3 print:!text-2xl">
            Sobre <span class="text-indigo-500">mí</span>
          </h2>
          <p class="mb-5 leading-relaxed text-gray-700 dark:text-gray-300 print:!mb-3 print:!text-sm">
            Soy un desarrollador fullstack que se ha visto envuelto en casi todas las facetas del desarrollo web: desde
            el prototipado y la generación de ideas, hasta el montaje y normalización de bases de datos, su desarrollo
            en backend y frontend, el despliegue, mantenimiento y soporte implementando ciclo dev-ops.
          </p>
          <p class="mb-5 leading-relaxed text-gray-700 dark:text-gray-300 print:!mb-3 print:!text-sm">
            En los últimos años he asumido también el rol de <strong class="text-gray-900 dark:text-white">arquitecto
            de software</strong>, liderando decisiones técnicas, definiendo estándares de calidad y guiando equipos de
            desarrollo hacia soluciones escalables y mantenibles.
          </p>
          <p class="mb-8 leading-relaxed text-gray-700 dark:text-gray-300 print:!mb-4 print:!text-sm">
            Apasionado por explorar nuevas tecnologías: mi fuerte está en Node.js y PHP/Laravel del lado del servidor,
            aunque también he trabajado con Ruby on Rails, Firebase y Google Cloud. En el front cuento con habilidades
            en UX/UI, SEO y SEM sobre frameworks como Vue y Angular. Complemento este perfil con certificaciones en
            <strong class="text-gray-900 dark:text-white"> ciberseguridad de Google</strong>, aplicando una mirada de
            seguridad desde el diseño en cada proyecto.
          </p>

          <div class="grid grid-cols-3 gap-6 print:!gap-3">
            <div v-for="s in stats" :key="s.label" class="text-center">
              <div class="text-3xl font-bold text-indigo-500 print:!text-xl">{{ s.value }}</div>
              <div class="text-sm text-gray-600 dark:text-gray-400 print:!text-xs">{{ s.label }}</div>
            </div>
          </div>
        </div>

        <div v-reveal="'right'" class="relative">
          <img
            :src="workIllustration"
            alt=""
            class="animate-float-slow no-print pointer-events-none absolute -top-14 -right-6 hidden w-40 opacity-90 lg:block"
          />
          <DuiCard size="l" class="!bg-white print:!p-4 dark:!bg-gray-800">
            <h3 class="mb-6 text-xl font-bold text-gray-900 dark:text-white print:!mb-3 print:!text-base">Información de contacto</h3>
            <div class="space-y-4 print:!space-y-2">
              <a
                v-for="c in contact"
                :key="c.label"
                :href="c.href"
                target="_blank"
                rel="noopener"
                class="group flex items-center gap-4 rounded-xl p-2 no-underline transition-colors hover:bg-gray-100 print:!gap-3 print:!p-1 dark:hover:bg-gray-700/60"
              >
                <span class="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg text-lg text-white shadow-sm print:!h-8 print:!w-8 print:!text-sm" :class="c.color">
                  <i class="mdi" :class="c.icon" />
                </span>
                <span>
                  <span class="block text-sm font-semibold text-gray-900 dark:text-white print:!text-xs">{{ c.label }}</span>
                  <span class="block text-sm text-gray-600 dark:text-gray-400 print:!text-xs">{{ c.value }}</span>
                </span>
              </a>
            </div>
          </DuiCard>
        </div>
      </div>
    </div>
  </section>
</template>
