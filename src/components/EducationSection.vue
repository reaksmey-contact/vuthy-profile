<script setup lang="ts">
import { EDUCATION } from '../constants/portfolioData'
import AppIcon from './icons/AppIcon.vue'
</script>

<template>
  <section id="education" class="section education-section">
    <div class="container">
      <!-- Section Header -->
      <div class="section-header reveal-init">
        <div class="section-tag">
          <span class="dot"></span>
          <span>Education & Credentials</span>
        </div>
        <h2 class="section-title">
          Academic <span class="focused-text">Foundations</span>
        </h2>
        <p class="section-subtitle">
          Rigorous training in software systems, information technology architecture, and professional global communication.
        </p>
      </div>

      <!-- Education Cards Grid -->
      <div class="education-grid">
        <div
          v-for="(item, index) in EDUCATION"
          :key="item.id"
          class="edu-card card-base reveal-init"
          :class="`delay-${index + 1}`"
        >
          <!-- Top Badge & Period -->
          <div class="edu-top-row">
            <div class="edu-icon-wrap">
              <AppIcon name="graduation-cap" :size="22" />
            </div>
            <div class="period-pill">
              <AppIcon name="calendar" :size="13" />
              <span>{{ item.period }}</span>
            </div>
          </div>

          <!-- Degree & Institution -->
          <h3 class="degree-title">{{ item.degree }}</h3>
          <div class="institution-row">
            <AppIcon name="map-pin" :size="14" className="text-primary" />
            <span class="institution-name">{{ item.institution }}</span>
          </div>

          <p class="edu-description">
            {{ item.description }}
          </p>

          <!-- Highlights -->
          <div v-if="item.highlights && item.highlights.length" class="highlights-box">
            <span class="highlights-label">Key Focus Areas:</span>
            <ul class="highlights-list">
              <li v-for="(hl, hIdx) in item.highlights" :key="hIdx" class="hl-item">
                <AppIcon name="check" :size="12" className="text-primary" />
                <span>{{ hl }}</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.education-section {
  background-color: var(--bg-body);
}

.education-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 2rem;
  max-width: 1000px;
  margin: 0 auto;
}

@media (min-width: 768px) {
  .education-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

.edu-card {
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

.edu-card::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 4px;
  background: var(--gradient-brand);
  opacity: 0.85;
}

.edu-top-row {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 1.25rem;
}

.edu-icon-wrap {
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

.period-pill {
  display: inline-flex;
  align-items: center;
  gap: 0.4rem;
  font-size: 0.8rem;
  font-weight: 700;
  color: var(--primary);
  background: var(--primary-light);
  padding: 0.35rem 0.8rem;
  border-radius: var(--radius-pill);
  border: 1px solid rgba(37, 99, 235, 0.15);
}

.degree-title {
  font-size: 1.35rem;
  font-weight: 800;
  color: var(--text-main);
  line-height: 1.3;
  margin-bottom: 0.45rem;
}

.institution-row {
  display: flex;
  align-items: center;
  gap: 0.45rem;
  font-size: 0.95rem;
  font-weight: 600;
  color: var(--text-body);
  margin-bottom: 1.25rem;
}

.institution-name {
  color: var(--text-secondary);
}

.edu-description {
  font-size: 0.92rem;
  line-height: 1.65;
  color: var(--text-muted);
  margin-bottom: 1.5rem;
}

.highlights-box {
  margin-top: auto;
  padding-top: 1.25rem;
  border-top: 1px dashed var(--border-subtle);
}

.highlights-label {
  display: block;
  font-size: 0.75rem;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  font-weight: 700;
  color: var(--text-muted);
  margin-bottom: 0.65rem;
}

.highlights-list {
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.hl-item {
  display: flex;
  align-items: center;
  gap: 0.6rem;
  font-size: 0.85rem;
  font-weight: 500;
  color: var(--text-body);
}
</style>
