<script setup lang="ts">
import { RouterView } from 'vue-router'
import Navbar from './components/Navbar.vue'
import FooterSection from './components/FooterSection.vue'
import { useScrollObserver } from './composables/useScrollObserver'

const { activeSection, scrollProgress, isScrolled, scrollTo } = useScrollObserver()
</script>

<template>
  <div class="app-layout">
    <!-- Sticky Glassmorphic Navbar -->
    <Navbar
      :active-section="activeSection"
      :scroll-progress="scrollProgress"
      :is-scrolled="isScrolled"
      @navigate="scrollTo"
    />

    <!-- Main Content Area -->
    <main class="app-main">
      <RouterView :active-section="activeSection" @navigate="scrollTo" />
    </main>

    <!-- Footer -->
    <FooterSection @navigate="scrollTo" />
  </div>
</template>

<style scoped>
.app-layout {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  background-color: var(--bg-body);
  color: var(--text-body);
}

.app-main {
  flex: 1;
  display: flex;
  flex-direction: column;
  width: 100%;
}
</style>
