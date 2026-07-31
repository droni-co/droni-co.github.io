<script setup lang="ts">
import { DuiBadge } from '@dronico/droni-kit'

const experiences = [
  {
    company: 'CrediCorp',
    period: 'Jul 2022 - Actualmente',
    current: true,
    description:
      'Trabajando en el sector bancario, aplicando conocimientos en desarrollo backend y frontend con Node.js e implementando herramientas de Azure Cloud de Microsoft, participando además en decisiones de arquitectura de software y buenas prácticas del equipo.',
    tags: ['Node.js', 'Azure', 'Arquitectura de Software', 'Banking', 'Cloud'],
  },
  {
    company: 'Favik',
    period: 'Nov 2021 - Jun 2022',
    description:
      'En esta startup desarrollé microservicios basados en Laravel PHP y usé Docker con GitLab para integración continua. Implementé conectores para obtener datos de diferentes fuentes como CRM y pasarelas de pago usando BigQuery y Google DataStudio.',
    tags: ['PHP', 'Laravel', 'Docker', 'BigQuery', 'Vue', 'CI/CD'],
  },
  {
    company: 'Lavenir S.A.S',
    period: 'Mar 2020 - Jul 2021',
    description:
      'Como ingeniero de desarrollo trabajé en la implementación de proyectos backend con Laravel para gestión de IVRs, integraciones de webhooks para chatbots montados sobre Dialogflow y desarrollé funcionalidades para IVRs en la plataforma Asterisk.',
    tags: ['PHP', 'Laravel', 'Vue', 'Nuxt', 'Asterisk', 'Dialogflow'],
  },
  {
    company: 'Cheil Colombia',
    period: 'Ene 2019 - Mar 2020',
    description:
      'Apoyé desarrollos backend usando .NET y .NET Core para la implementación de servicios API REST, así como proyectos frontend con Angular 7 que consumían dichos servicios.',
    tags: ['.NET', 'Angular', 'PHP', 'Laravel', 'APIs'],
  },
  {
    company: 'BRM',
    period: 'Ene 2018 - Ene 2019',
    description:
      'Trabajé como líder de desarrollo y arquitecto de soluciones con un gran equipo de desarrolladores, realizando implementaciones de sitios con Laravel, Drupal, PrestaShop y otras tecnologías. También desarrollé aplicaciones móviles usando Ionic.',
    tags: ['Ionic', 'Angular', 'Laravel', 'Drupal', 'PrestaShop', 'Liderazgo'],
  },
]
</script>

<template>
  <section id="experience" class="bg-gray-50 py-24 dark:bg-gray-900">
    <div class="container mx-auto px-6">
      <div v-reveal class="mb-16 text-center">
        <p class="mb-2 font-mono text-sm font-semibold tracking-widest text-indigo-500 uppercase">Trayectoria</p>
        <h2 class="text-4xl font-bold text-gray-900 dark:text-white">
          Experiencia <span class="text-indigo-500">profesional</span>
        </h2>
      </div>

      <div class="mx-auto max-w-4xl">
        <div class="relative">
          <div class="timeline-rail absolute top-2 bottom-2 left-[19px] w-0.5 md:left-1/2 md:-translate-x-1/2" />

          <div class="space-y-10">
            <div
              v-for="(exp, i) in experiences"
              :key="exp.company"
              v-reveal="i % 2 === 0 ? 'left' : 'right'"
              class="relative grid grid-cols-1 gap-0 md:grid-cols-2 md:gap-10"
            >
              <!-- Dot -->
              <span
                class="absolute top-2 left-[19px] z-10 h-3.5 w-3.5 -translate-x-1/2 rounded-full border-4 border-gray-50 shadow-[0_0_0_3px_rgba(99,102,241,0.5)] md:left-1/2 dark:border-gray-900"
                :class="exp.current ? 'bg-emerald-500' : 'bg-indigo-500'"
              />

              <div :class="i % 2 === 0 ? 'md:col-start-1 md:row-start-1 md:pr-10 md:text-right' : 'md:col-start-2 md:row-start-1 md:pl-10'" class="pl-10 md:pl-0">
                <div
                  class="rounded-xl border border-gray-200 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg dark:border-gray-700 dark:bg-gray-800"
                >
                  <div class="mb-3 flex flex-col gap-1" :class="i % 2 === 0 ? 'md:items-end' : ''">
                    <h3 class="text-xl font-bold text-gray-900 dark:text-white">{{ exp.company }}</h3>
                    <span class="font-mono text-sm font-semibold text-indigo-500">{{ exp.period }}</span>
                  </div>
                  <p class="mb-4 text-sm leading-relaxed text-gray-700 dark:text-gray-300">{{ exp.description }}</p>
                  <div class="flex flex-wrap gap-2" :class="i % 2 === 0 ? 'md:justify-end' : ''">
                    <DuiBadge v-for="tag in exp.tags" :key="tag" variant="outline" color="primary" size="sm">{{ tag }}</DuiBadge>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
