<script setup lang="ts">
import HeroSection from '../components/HeroSection.vue'
import StatsSection from '../components/StatsSection.vue'
import AboutSection from '../components/AboutSection.vue'
import ExperienceSection from '../components/ExperienceSection.vue'
import SkillsSection from '../components/SkillsSection.vue'
import EducationSection from '../components/EducationSection.vue'
import FeaturedProjectsSection from '../components/FeaturedProjectsSection.vue'
import LanguagesSection from '../components/LanguagesSection.vue'
import ContactSection from '../components/ContactSection.vue'

defineProps<{
  activeSection?: string
}>()

const emit = defineEmits<{
  (e: 'navigate', sectionId: string): void
}>()

const handleNavigate = (sectionId: string) => {
  emit('navigate', sectionId)
}
</script>

<template>
  <div class="portfolio-home">
    <!-- Hero / Introduction -->
    <HeroSection @navigate="handleNavigate" />

    <!-- High-Impact Stats Bar -->
    <StatsSection />

    <!-- About Me & Core Principles -->
    <AboutSection @navigate="handleNavigate" />

    <!-- Work Experience Timeline -->
    <ExperienceSection />

    <!-- Skills & Technology Matrix -->
    <SkillsSection />

    <!-- Education & Credentials -->
    <EducationSection />

    <!-- Featured Projects & System Showcase -->
    <FeaturedProjectsSection />

    <!-- Language Proficiency -->
    <LanguagesSection />

    <!-- Contact & Direct Inquiries -->
    <ContactSection />
  </div>
</template>

<style scoped>
.portfolio-home {
  display: flex;
  flex-direction: column;
  width: 100%;
}
</style>
