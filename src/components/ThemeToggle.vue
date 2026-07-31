<script setup lang="ts">
import { useTheme } from '../composables/useTheme'

const { isDark, toggleTheme } = useTheme()
</script>

<template>
  <button
    type="button"
    aria-label="Cambiar tema"
    class="flex h-10 w-10 items-center justify-center rounded-full border border-gray-200 bg-white text-gray-600 shadow-sm transition-all duration-300 hover:scale-105 hover:shadow-md dark:border-gray-700 dark:bg-gray-800 dark:text-gray-300"
    @click="toggleTheme"
  >
    <i class="mdi transition-transform duration-300" :class="isDark ? 'mdi-weather-night' : 'mdi-white-balance-sunny text-amber-500'" />
  </button>
</template>
