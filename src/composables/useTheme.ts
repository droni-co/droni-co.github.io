import { ref } from 'vue'

const isDark = ref(true)

function applyTheme() {
  document.documentElement.classList.toggle('dark', isDark.value)
  localStorage.setItem('theme', isDark.value ? 'dark' : 'light')
}

function initTheme() {
  const saved = localStorage.getItem('theme')
  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches
  isDark.value = saved ? saved === 'dark' : prefersDark
  applyTheme()
}

function toggleTheme() {
  isDark.value = !isDark.value
  applyTheme()
}

export function useTheme() {
  return { isDark, initTheme, toggleTheme }
}
