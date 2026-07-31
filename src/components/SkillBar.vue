<script setup lang="ts">
import { onBeforeUnmount, onMounted, ref } from 'vue'

const props = withDefaults(
  defineProps<{
    label: string
    value: number
    from?: string
    to?: string
  }>(),
  {
    from: 'from-indigo-500',
    to: 'to-blue-500',
  },
)

const el = ref<HTMLElement | null>(null)
const revealed = ref(false)

onMounted(() => {
  const observer = new IntersectionObserver(
    (entries) => {
      for (const entry of entries) {
        if (entry.isIntersecting) {
          revealed.value = true
          observer.disconnect()
        }
      }
    },
    { threshold: 0.4 },
  )
  if (el.value) observer.observe(el.value)
  onBeforeUnmount(() => observer.disconnect())
})
</script>

<template>
  <div ref="el">
    <div class="mb-1.5 flex items-center justify-between text-sm">
      <span class="text-gray-700 dark:text-gray-300">{{ props.label }}</span>
      <span class="font-mono font-semibold text-gray-500 dark:text-gray-400">{{ props.value }}%</span>
    </div>
    <div class="h-2.5 w-full overflow-hidden rounded-full bg-gray-200 dark:bg-gray-700">
      <div
        class="skill-bar h-2.5 rounded-full bg-gradient-to-r"
        :class="[props.from, props.to]"
        :style="{ width: revealed ? `${props.value}%` : '0%' }"
      />
    </div>
  </div>
</template>
