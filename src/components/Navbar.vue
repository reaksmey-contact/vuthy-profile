<script setup lang="ts">
import { ref } from 'vue'
import AppIcon from './icons/AppIcon.vue'
import { PERSONAL_INFO } from '../constants/portfolioData'

const props = defineProps<{
  activeSection: string
  scrollProgress: number
  isScrolled: boolean
}>()

const emit = defineEmits<{
  (e: 'navigate', sectionId: string): void
}>()

const isMobileMenuOpen = ref(false)

const navLinks = [
  { id: 'about', label: 'About' },
  { id: 'experience', label: 'Experience' },
  { id: 'skills', label: 'Skills' },
  { id: 'education', label: 'Education' },
  { id: 'projects', label: 'Projects' },
  { id: 'languages', label: 'Languages' },
  { id: 'contact', label: 'Contact' }
]

const handleNavClick = (sectionId: string) => {
  emit('navigate', sectionId)
  isMobileMenuOpen.value = false
}
</script>

<template>
  <header class="navbar-wrapper" :class="{ 'is-scrolled': isScrolled }">
    <!-- Top Scroll Reading Bar -->
    <div
      class="scroll-progress-bar"
      :style="{ width: `${scrollProgress}%` }"
      aria-hidden="true"
    ></div>

    <div class="container navbar-container">
      <!-- Monogram / Brand -->
      <a href="#hero" class="brand" @click.prevent="handleNavClick('hero')">
        <div class="brand-monogram">CV</div>
        <div class="brand-info">
          <span class="brand-name">{{ PERSONAL_INFO.name }}</span>
          <span class="brand-role">Mobile Dev & Lead</span>
        </div>
      </a>

      <!-- Desktop Nav -->
      <nav class="desktop-nav" aria-label="Main Navigation">
        <button
          v-for="link in navLinks"
          :key="link.id"
          class="nav-link"
          :class="{ active: activeSection === link.id }"
          @click="handleNavClick(link.id)"
        >
          {{ link.label }}
          <span v-if="activeSection === link.id" class="active-indicator"></span>
        </button>
      </nav>

      <!-- Action Button & Mobile Toggle -->
      <div class="navbar-actions">
        <a
          :href="PERSONAL_INFO.resumeUrl"
          target="_blank"
          download="Chea_Vuthy_CV.pdf"
          class="btn btn-primary btn-cv"
        >
          <AppIcon name="download" :size="16" />
          <span>Download CV</span>
        </a>

        <button
          class="mobile-toggle"
          :class="{ 'is-open': isMobileMenuOpen }"
          @click="isMobileMenuOpen = !isMobileMenuOpen"
          aria-label="Toggle Navigation Menu"
        >
          <span class="bar"></span>
          <span class="bar"></span>
          <span class="bar"></span>
        </button>
      </div>
    </div>

    <!-- Mobile Drawer -->
    <transition name="drawer-fade">
      <div v-if="isMobileMenuOpen" class="mobile-drawer-backdrop" @click="isMobileMenuOpen = false">
        <div class="mobile-drawer" @click.stop>
          <div class="mobile-drawer-header">
            <div class="brand-monogram">CV</div>
            <span class="brand-name">{{ PERSONAL_INFO.name }}</span>
            <button class="close-btn" @click="isMobileMenuOpen = false">&times;</button>
          </div>

          <nav class="mobile-nav">
            <button
              v-for="link in navLinks"
              :key="link.id"
              class="mobile-nav-link"
              :class="{ active: activeSection === link.id }"
              @click="handleNavClick(link.id)"
            >
              <span>{{ link.label }}</span>
              <AppIcon name="arrow-right" :size="16" />
            </button>
          </nav>

          <div class="mobile-drawer-footer">
            <a
              :href="PERSONAL_INFO.resumeUrl"
              target="_blank"
              download="Chea_Vuthy_CV.pdf"
              class="btn btn-primary"
              style="width: 100%"
            >
              <AppIcon name="download" :size="16" />
              <span>Download CV</span>
            </a>
          </div>
        </div>
      </div>
    </transition>
  </header>
</template>

<style scoped>
.navbar-wrapper {
  position: sticky;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 100;
  background: rgba(255, 255, 255, 0.75);
  backdrop-filter: blur(16px);
  -webkit-backdrop-filter: blur(16px);
  border-bottom: 1px solid rgba(226, 232, 240, 0.6);
  transition: all var(--transition-smooth);
}

.navbar-wrapper.is-scrolled {
  background: rgba(255, 255, 255, 0.92);
  border-bottom-color: rgba(226, 232, 240, 0.9);
  box-shadow: 0 4px 20px -2px rgba(15, 23, 42, 0.06);
}

.scroll-progress-bar {
  position: absolute;
  top: 0;
  left: 0;
  height: 3px;
  background: linear-gradient(90deg, #2563eb, #6366f1, #06b6d4);
  transition: width 0.1s ease-out;
  z-index: 101;
}

.navbar-container {
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 74px;
}

.brand {
  display: flex;
  align-items: center;
  gap: 0.85rem;
  text-decoration: none;
}

.brand-monogram {
  width: 40px;
  height: 40px;
  border-radius: 12px;
  background: var(--gradient-brand);
  color: #ffffff;
  font-weight: 800;
  font-size: 1.05rem;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 4px 12px rgba(37, 99, 235, 0.25);
  letter-spacing: -0.02em;
}

.brand-info {
  display: flex;
  flex-direction: column;
}

.brand-name {
  font-size: 1.05rem;
  font-weight: 700;
  color: var(--text-main);
  line-height: 1.2;
}

.brand-role {
  font-size: 0.75rem;
  color: var(--text-muted);
  font-weight: 500;
}

.desktop-nav {
  display: none;
  align-items: center;
  gap: 0.5rem;
  background: rgba(241, 245, 249, 0.7);
  padding: 0.35rem 0.5rem;
  border-radius: var(--radius-pill);
  border: 1px solid rgba(226, 232, 240, 0.8);
}

@media (min-width: 992px) {
  .desktop-nav {
    display: flex;
  }
}

.nav-link {
  position: relative;
  padding: 0.45rem 1rem;
  font-size: 0.88rem;
  font-weight: 500;
  color: var(--text-body);
  border-radius: var(--radius-pill);
  transition: all var(--transition-fast);
}

.nav-link:hover {
  color: var(--primary);
}

.nav-link.active {
  color: var(--primary);
  background: #ffffff;
  font-weight: 600;
  box-shadow: 0 2px 8px rgba(15, 23, 42, 0.06);
}

.navbar-actions {
  display: flex;
  align-items: center;
  gap: 0.85rem;
}

.btn-cv {
  padding: 0.6rem 1.2rem;
  font-size: 0.88rem;
}

@media (max-width: 640px) {
  .btn-cv {
    display: none;
  }
}

.mobile-toggle {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 40px;
  height: 40px;
  padding: 8px;
  border-radius: 10px;
  background: #ffffff;
  border: 1px solid var(--border-subtle);
  cursor: pointer;
  gap: 5px;
}

@media (min-width: 992px) {
  .mobile-toggle {
    display: none;
  }
}

.mobile-toggle .bar {
  width: 20px;
  height: 2px;
  background-color: var(--text-main);
  border-radius: 2px;
  transition: all 0.3s ease;
}

.mobile-toggle.is-open .bar:nth-child(1) {
  transform: translateY(7px) rotate(45deg);
}

.mobile-toggle.is-open .bar:nth-child(2) {
  opacity: 0;
}

.mobile-toggle.is-open .bar:nth-child(3) {
  transform: translateY(-7px) rotate(-45deg);
}

/* Mobile Drawer */
.mobile-drawer-backdrop {
  position: fixed;
  inset: 0;
  top: 74px;
  background: rgba(15, 23, 42, 0.4);
  backdrop-filter: blur(4px);
  z-index: 99;
}

.mobile-drawer {
  background: #ffffff;
  width: 100%;
  max-height: calc(100vh - 74px);
  overflow-y: auto;
  padding: 1.5rem;
  box-shadow: var(--shadow-xl);
  border-bottom: 1px solid var(--border-subtle);
}

.mobile-drawer-header {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  margin-bottom: 1.5rem;
  padding-bottom: 1rem;
  border-bottom: 1px solid var(--border-subtle);
}

.close-btn {
  margin-left: auto;
  font-size: 1.8rem;
  color: var(--text-muted);
  line-height: 1;
}

.mobile-nav {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.mobile-nav-link {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  text-align: left;
  padding: 0.85rem 1rem;
  font-size: 1rem;
  font-weight: 500;
  color: var(--text-main);
  border-radius: var(--radius-md);
  transition: all 0.2s ease;
}

.mobile-nav-link:hover,
.mobile-nav-link.active {
  background: rgba(37, 99, 235, 0.08);
  color: var(--primary);
  font-weight: 600;
}

.mobile-drawer-footer {
  margin-top: 1.5rem;
  padding-top: 1.5rem;
  border-top: 1px solid var(--border-subtle);
}

.drawer-fade-enter-active,
.drawer-fade-leave-active {
  transition: opacity 0.25s ease;
}

.drawer-fade-enter-from,
.drawer-fade-leave-to {
  opacity: 0;
}
</style>
