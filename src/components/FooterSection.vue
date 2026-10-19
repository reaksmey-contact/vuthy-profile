<script setup lang="ts">
import { PERSONAL_INFO } from '../constants/portfolioData'
import AppIcon from './icons/AppIcon.vue'

const emit = defineEmits<{
  (e: 'navigate', sectionId: string): void
}>()

const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  })
}

const currentYear = new Date().getFullYear()
</script>

<template>
  <footer class="footer-wrapper">
    <div class="container footer-container">
      <!-- Top Row -->
      <div class="footer-top-row">
        <!-- Brand & Tagline -->
        <div class="footer-brand">
          <div class="brand-monogram">CV</div>
          <div class="brand-text">
            <span class="brand-title">{{ PERSONAL_INFO.name }}</span>
            <span class="brand-subtitle">{{ PERSONAL_INFO.role }}</span>
          </div>
        </div>

        <!-- Navigation Links -->
        <div class="footer-nav">
          <button class="footer-link" @click="emit('navigate', 'about')">About</button>
          <button class="footer-link" @click="emit('navigate', 'experience')">Experience</button>
          <button class="footer-link" @click="emit('navigate', 'skills')">Skills</button>
          <button class="footer-link" @click="emit('navigate', 'education')">Education</button>
          <button class="footer-link" @click="emit('navigate', 'projects')">Projects</button>
          <button class="footer-link" @click="emit('navigate', 'contact')">Contact</button>
        </div>

        <!-- Back to Top Button -->
        <button class="back-to-top-btn" @click="scrollToTop" title="Scroll back to top">
          <AppIcon name="arrow-up" :size="16" />
          <span>Back to Top</span>
        </button>
      </div>

      <!-- Divider -->
      <div class="footer-divider"></div>

      <!-- Bottom Row -->
      <div class="footer-bottom-row">
        <p class="copyright-text">
          &copy; {{ currentYear }} {{ PERSONAL_INFO.name }}. All rights reserved. Crafted with Vue 3 & TypeScript.
        </p>

        <div class="footer-social-row">
          <a
            :href="PERSONAL_INFO.socialLinks.email"
            class="social-icon-btn"
            title="Email Chea Vuthy"
          >
            <AppIcon name="mail" :size="16" />
          </a>
          <a
            :href="`tel:${PERSONAL_INFO.phone}`"
            class="social-icon-btn"
            title="Call Chea Vuthy"
          >
            <AppIcon name="phone" :size="16" />
          </a>
          <a
            :href="PERSONAL_INFO.resumeUrl"
            target="_blank"
            download="Chea_Vuthy_CV.pdf"
            class="social-icon-btn"
            title="Download CV"
          >
            <AppIcon name="download" :size="16" />
          </a>
        </div>
      </div>
    </div>
  </footer>
</template>

<style scoped>
.footer-wrapper {
  background: #ffffff;
  border-top: 1px solid var(--border-subtle);
  padding: 3.5rem 0 2.5rem 0;
  margin-top: auto;
}

.footer-top-row {
  display: flex;
  flex-direction: column;
  gap: 2rem;
  align-items: center;
  justify-content: space-between;
}

@media (min-width: 768px) {
  .footer-top-row {
    flex-direction: row;
  }
}

.footer-brand {
  display: flex;
  align-items: center;
  gap: 0.85rem;
}

.brand-monogram {
  width: 38px;
  height: 38px;
  border-radius: 10px;
  background: var(--gradient-brand);
  color: #ffffff;
  font-weight: 800;
  display: flex;
  align-items: center;
  justify-content: center;
}

.brand-text {
  display: flex;
  flex-direction: column;
}

.brand-title {
  font-size: 1.05rem;
  font-weight: 700;
  color: var(--text-main);
  line-height: 1.2;
}

.brand-subtitle {
  font-size: 0.78rem;
  color: var(--text-muted);
}

.footer-nav {
  display: flex;
  flex-wrap: wrap;
  gap: 1.25rem;
  justify-content: center;
}

.footer-link {
  font-size: 0.88rem;
  font-weight: 500;
  color: var(--text-muted);
  transition: color 0.2s ease;
  cursor: pointer;
}

.footer-link:hover {
  color: var(--primary);
}

.back-to-top-btn {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.5rem 1rem;
  border-radius: var(--radius-pill);
  background: var(--bg-muted);
  border: 1px solid var(--border-subtle);
  font-size: 0.82rem;
  font-weight: 600;
  color: var(--text-main);
  transition: all 0.2s ease;
  cursor: pointer;
}

.back-to-top-btn:hover {
  background: rgba(37, 99, 235, 0.1);
  color: var(--primary);
  border-color: rgba(37, 99, 235, 0.3);
  transform: translateY(-2px);
}

.footer-divider {
  width: 100%;
  height: 1px;
  background: var(--border-subtle);
  margin: 2.25rem 0 1.75rem 0;
}

.footer-bottom-row {
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
  align-items: center;
  justify-content: space-between;
}

@media (min-width: 768px) {
  .footer-bottom-row {
    flex-direction: row;
  }
}

.copyright-text {
  font-size: 0.82rem;
  color: var(--text-muted);
  text-align: center;
}

.footer-social-row {
  display: flex;
  align-items: center;
  gap: 0.75rem;
}

.social-icon-btn {
  width: 36px;
  height: 36px;
  border-radius: 50%;
  background: var(--bg-muted);
  border: 1px solid var(--border-subtle);
  color: var(--text-secondary);
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.2s ease;
}

.social-icon-btn:hover {
  background: rgba(37, 99, 235, 0.1);
  color: var(--primary);
  border-color: rgba(37, 99, 235, 0.3);
  transform: translateY(-2px);
}
</style>
