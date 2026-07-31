<script setup lang="ts">
import { onMounted } from 'vue'
import { useTheme } from './composables/useTheme'
import AppNavbar from './components/AppNavbar.vue'
import HeroSection from './components/HeroSection.vue'
import AboutSection from './components/AboutSection.vue'
import SkillsSection from './components/SkillsSection.vue'
import ExperienceSection from './components/ExperienceSection.vue'
import CertificationsSection from './components/CertificationsSection.vue'
import EducationSection from './components/EducationSection.vue'
import AppFooter from './components/AppFooter.vue'

const { initTheme } = useTheme()
onMounted(initTheme)
</script>

<template>
  <div class="bg-white text-gray-900 dark:bg-gray-950 dark:text-white">
    <AppNavbar />
    <HeroSection />
    <AboutSection />
    <SkillsSection />
    <ExperienceSection />
    <CertificationsSection />
    <EducationSection />
    <AppFooter />
  </div>
</template>
