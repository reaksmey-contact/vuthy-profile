<script setup lang="ts">
import { FEATURED_PROJECTS } from '../constants/portfolioData'
import AppIcon from './icons/AppIcon.vue'
</script>

<template>
  <section id="projects" class="section projects-section">
    <div class="container">
      <!-- Section Header -->
      <div class="section-header reveal-init">
        <div class="section-tag">
          <span class="dot"></span>
          <span>Featured Work & Case Studies</span>
        </div>
        <h2 class="section-title">
          Architectural <span class="focused-text">Highlights & Deliveries</span>
        </h2>
        <p class="section-subtitle">
          Real-world applications engineered with a strong focus on Flutter performance, bank-grade payment security, and cross-platform desktop/mobile synchronicity.
        </p>
      </div>

      <!-- Projects Grid -->
      <div class="projects-grid">
        <div
          v-for="(project, index) in FEATURED_PROJECTS"
          :key="project.id"
          class="project-card card-base reveal-init"
          :class="`delay-${index + 1}`"
        >
          <!-- Card Top Bar -->
          <div class="project-top">
            <div class="project-icon-box">
              <AppIcon :name="project.iconName" :size="22" />
            </div>
            <span class="role-badge">{{ project.role }}</span>
          </div>

          <!-- Titles -->
          <h3 class="project-title">{{ project.title }}</h3>
          <p class="project-subtitle">{{ project.subtitle }}</p>

          <!-- Description -->
          <p class="project-description">
            {{ project.description }}
          </p>

          <!-- Key Metric / Outcome -->
          <div v-if="project.metrics" class="project-metric-box">
            <div class="metric-icon">
              <AppIcon name="shield-check" :size="14" />
            </div>
            <span class="metric-text">{{ project.metrics }}</span>
          </div>

          <!-- Tags -->
          <div class="project-tags">
            <span v-for="tag in project.tags" :key="tag" class="proj-tag">
              {{ tag }}
            </span>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.projects-section {
  background-color: var(--bg-body);
}

.projects-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 1.75rem;
}

@media (min-width: 768px) {
  .projects-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

.project-card {
  padding: 2.25rem;
  background: #ffffff;
  border: 1px solid var(--border-subtle);
  border-radius: var(--radius-xl);
  box-shadow: var(--shadow-sm);
  display: flex;
  flex-direction: column;
  position: relative;
  overflow: hidden;
}

.project-card::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 4px;
  background: var(--gradient-brand);
  opacity: 0;
  transition: opacity 0.3s ease;
}

.project-card:hover::before {
  opacity: 1;
}

.project-top {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 1.25rem;
}

.project-icon-box {
  width: 48px;
  height: 48px;
  border-radius: 14px;
  background: rgba(37, 99, 235, 0.08);
  color: var(--primary);
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid rgba(37, 99, 235, 0.18);
}

.role-badge {
  font-size: 0.75rem;
  font-weight: 700;
  color: var(--primary);
  background: var(--primary-light);
  padding: 0.35rem 0.75rem;
  border-radius: var(--radius-pill);
  border: 1px solid rgba(37, 99, 235, 0.15);
}

.project-title {
  font-size: 1.25rem;
  font-weight: 800;
  color: var(--text-main);
  line-height: 1.3;
  margin-bottom: 0.3rem;
}

.project-subtitle {
  font-size: 0.85rem;
  font-weight: 600;
  color: var(--primary);
  margin-bottom: 1rem;
}

.project-description {
  font-size: 0.92rem;
  line-height: 1.65;
  color: var(--text-body);
  margin-bottom: 1.25rem;
}

.project-metric-box {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.65rem 0.85rem;
  background: rgba(16, 185, 129, 0.08);
  border: 1px solid rgba(16, 185, 129, 0.2);
  border-radius: var(--radius-md);
  margin-bottom: 1.35rem;
}

.metric-icon {
  color: #059669;
  display: flex;
  align-items: center;
}

.metric-text {
  font-size: 0.8rem;
  font-weight: 600;
  color: #065f46;
}

.project-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 0.45rem;
  margin-top: auto;
  padding-top: 1rem;
  border-top: 1px dashed var(--border-subtle);
}

.proj-tag {
  font-family: var(--font-mono);
  font-size: 0.74rem;
  font-weight: 600;
  padding: 0.2rem 0.6rem;
  background: var(--bg-muted);
  color: var(--text-secondary);
  border: 1px solid var(--border-subtle);
  border-radius: var(--radius-sm);
}
</style>
