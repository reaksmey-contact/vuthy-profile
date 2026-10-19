<script setup lang="ts">
import { PERSONAL_INFO, CORE_VALUES } from '../constants/portfolioData'
import AppIcon from './icons/AppIcon.vue'

const emit = defineEmits<{
  (e: 'navigate', sectionId: string): void
}>()
</script>

<template>
  <section id="about" class="section about-section">
    <div class="container">
      <!-- Section Header -->
      <div class="section-header reveal-init">
        <div class="section-tag">
          <span class="dot"></span>
          <span>About Me</span>
        </div>
        <h2 class="section-title">
          Architecting Mobile Excellence with <span class="focused-text">Passion & Precision</span>
        </h2>
        <p class="section-subtitle">
          Bridging design craftsmanship, high-concurrency backend integrations, and modern AI engineering.
        </p>
      </div>

      <!-- Main About Layout -->
      <div class="about-grid">
        <!-- Left: Narrative & Personal Profile Details -->
        <div class="narrative-card card-base reveal-init delay-1">
          <div class="narrative-header">
            <div class="header-avatar-mini">
              <AppIcon name="user" :size="24" />
            </div>
            <div>
              <h3 class="narrative-title">Professional Background</h3>
              <p class="narrative-sub">Mobile Developer & Project Lead • Phnom Penh, Cambodia</p>
            </div>
          </div>

          <div class="narrative-paragraphs">
            <p v-for="(paragraph, idx) in PERSONAL_INFO.fullAbout" :key="idx" class="about-p">
              {{ paragraph }}
            </p>
          </div>

          <!-- Personal Info Quick Specs -->
          <div class="personal-specs-grid">
            <div class="spec-item">
              <span class="spec-label">Full Name</span>
              <span class="spec-val">{{ PERSONAL_INFO.name }}</span>
            </div>
            <div class="spec-item">
              <span class="spec-label">Current Role</span>
              <span class="spec-val">Mobile Dev / Project Lead</span>
            </div>
            <div class="spec-item">
              <span class="spec-label">Location</span>
              <span class="spec-val">{{ PERSONAL_INFO.location }}</span>
            </div>
            <div class="spec-item">
              <span class="spec-label">Experience</span>
              <span class="spec-val">4+ Years</span>
            </div>
            <div class="spec-item">
              <span class="spec-label">Email</span>
              <span class="spec-val spec-email">{{ PERSONAL_INFO.email }}</span>
            </div>
            <div class="spec-item">
              <span class="spec-label">Phone</span>
              <span class="spec-val">{{ PERSONAL_INFO.phone }}</span>
            </div>
          </div>

          <div class="about-cta-row">
            <button class="btn btn-primary" @click="emit('navigate', 'experience')">
              <span>Explore Work Experience</span>
              <AppIcon name="arrow-right" :size="16" />
            </button>
            <a
              :href="PERSONAL_INFO.resumeUrl"
              target="_blank"
              download="Chea_Vuthy_CV.pdf"
              class="btn btn-secondary"
            >
              <AppIcon name="download" :size="16" />
              <span>Download CV</span>
            </a>
          </div>
        </div>

        <!-- Right: Core Pillars / Values -->
        <div class="values-column">
          <h3 class="values-heading reveal-init delay-2">Core Engineering Principles</h3>
          
          <div class="values-list">
            <div
              v-for="(val, index) in CORE_VALUES"
              :key="val.title"
              class="value-card card-base reveal-init"
              :class="`delay-${index + 1}`"
            >
              <div class="value-icon-box">
                <AppIcon :name="val.icon" :size="20" />
              </div>
              <div class="value-content">
                <h4 class="value-title">{{ val.title }}</h4>
                <p class="value-desc">{{ val.description }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.about-section {
  background-color: var(--bg-surface);
  border-top: 1px solid var(--border-subtle);
  border-bottom: 1px solid var(--border-subtle);
}

.about-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 2.5rem;
}

@media (min-width: 992px) {
  .about-grid {
    grid-template-columns: 1.15fr 0.85fr;
    gap: 3rem;
  }
}

/* Narrative Card */
.narrative-card {
  padding: 2.5rem;
  background: #ffffff;
  border: 1px solid var(--border-subtle);
  border-radius: var(--radius-xl);
  box-shadow: var(--shadow-sm);
  display: flex;
  flex-direction: column;
}

.narrative-header {
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-bottom: 1.75rem;
  padding-bottom: 1.25rem;
  border-bottom: 1px solid var(--border-subtle);
}

.header-avatar-mini {
  width: 48px;
  height: 48px;
  border-radius: 14px;
  background: rgba(37, 99, 235, 0.08);
  color: var(--primary);
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid rgba(37, 99, 235, 0.15);
}

.narrative-title {
  font-size: 1.35rem;
  font-weight: 800;
  color: var(--text-main);
  line-height: 1.2;
}

.narrative-sub {
  font-size: 0.85rem;
  color: var(--text-muted);
}

.narrative-paragraphs {
  display: flex;
  flex-direction: column;
  gap: 1.1rem;
  margin-bottom: 2rem;
}

.about-p {
  font-size: 0.98rem;
  line-height: 1.75;
  color: var(--text-body);
}

.personal-specs-grid {
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  gap: 1rem;
  padding: 1.5rem;
  background: var(--bg-muted);
  border-radius: var(--radius-lg);
  border: 1px solid var(--border-subtle);
  margin-bottom: 2rem;
}

@media (min-width: 600px) {
  .personal-specs-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

.spec-item {
  display: flex;
  flex-direction: column;
}

.spec-label {
  font-size: 0.75rem;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  font-weight: 600;
  color: var(--text-muted);
  margin-bottom: 0.2rem;
}

.spec-val {
  font-size: 0.92rem;
  font-weight: 700;
  color: var(--text-main);
}

.spec-email {
  word-break: break-all;
  color: var(--primary);
}

.about-cta-row {
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  margin-top: auto;
}

/* Values Column */
.values-column {
  display: flex;
  flex-direction: column;
}

.values-heading {
  font-size: 1.25rem;
  font-weight: 700;
  color: var(--text-main);
  margin-bottom: 1.25rem;
}

.values-list {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.value-card {
  padding: 1.35rem 1.5rem;
  background: #ffffff;
  border: 1px solid var(--border-subtle);
  border-radius: var(--radius-lg);
  display: flex;
  align-items: flex-start;
  gap: 1.15rem;
  transition: all var(--transition-smooth);
}

.value-card:hover {
  border-color: rgba(37, 99, 235, 0.3);
  transform: translateX(4px);
  box-shadow: var(--shadow-md);
}

.value-icon-box {
  width: 42px;
  height: 42px;
  border-radius: 12px;
  background: linear-gradient(135deg, rgba(37, 99, 235, 0.1), rgba(99, 102, 241, 0.12));
  color: var(--primary);
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  border: 1px solid rgba(37, 99, 235, 0.2);
}

.value-content {
  display: flex;
  flex-direction: column;
}

.value-title {
  font-size: 1.05rem;
  font-weight: 700;
  color: var(--text-main);
  margin-bottom: 0.35rem;
}

.value-desc {
  font-size: 0.88rem;
  color: var(--text-muted);
  line-height: 1.55;
}
</style>
