<script setup lang="ts">
import { DuiNavbar, DuiButton } from '@dronico/droni-kit'
import ThemeToggle from './ThemeToggle.vue'

const items = [
  { label: 'Sobre mí', to: '#about' },
  { label: 'Habilidades', to: '#skills' },
  { label: 'Experiencia', to: '#experience' },
  { label: 'Certificaciones', to: '#certifications' },
  { label: 'Formación', to: '#education' },
]

function print() {
  window.print()
}
</script>

<template>
  <div class="no-print sticky top-0 z-50">
    <DuiNavbar :items="items" items-alignment="center" underline-color="primary">
      <template #brand>
        <a href="#top" class="flex items-center gap-2 text-lg font-bold text-gray-900 no-underline dark:text-white">
          <span
            class="flex h-9 w-9 items-center justify-center rounded-lg bg-gradient-to-br from-indigo-600 to-blue-500 font-mono text-sm text-white shadow-sm"
          >GB</span>
          <span class="hidden sm:inline">Gustavo Barragán</span>
        </a>
      </template>
      <template #actions>
        <div class="flex items-center gap-3">
          <DuiButton size="sm" variant="outline" color="primary" @click="print">
            <i class="mdi mdi-download mr-1.5" />
            <span class="hidden sm:inline">Descargar</span>
          </DuiButton>
          <ThemeToggle />
        </div>
      </template>
    </DuiNavbar>
  </div>
</template>
