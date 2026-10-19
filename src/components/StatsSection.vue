<script setup lang="ts">
import { STATS } from '../constants/portfolioData'
import AppIcon from './icons/AppIcon.vue'

const statIcons = ['briefcase', 'layers', 'palette', 'shield-check']
</script>

<template>
  <div class="stats-bar-wrapper">
    <div class="container">
      <div class="stats-grid">
        <div
          v-for="(stat, index) in STATS"
          :key="stat.label"
          class="stat-card card-base reveal-init"
          :class="`delay-${index + 1}`"
        >
          <div class="stat-icon-wrap">
            <AppIcon :name="statIcons[index] || 'sparkles'" :size="22" />
          </div>
          <div class="stat-body">
            <div class="stat-value focused-text">{{ stat.value }}</div>
            <div class="stat-label">{{ stat.label }}</div>
            <p class="stat-description">{{ stat.description }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.stats-bar-wrapper {
  padding: 1.5rem 0 3.5rem 0;
  position: relative;
  z-index: 5;
}

.stats-grid {
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  gap: 1.25rem;
}

@media (min-width: 640px) {
  .stats-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (min-width: 1024px) {
  .stats-grid {
    grid-template-columns: repeat(4, 1fr);
  }
}

.stat-card {
  padding: 1.5rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  background: #ffffff;
  border: 1px solid var(--border-subtle);
  border-radius: var(--radius-xl);
  box-shadow: 0 4px 16px -2px rgba(15, 23, 42, 0.05);
  position: relative;
  overflow: hidden;
}

.stat-card::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 3px;
  background: var(--gradient-brand);
  opacity: 0;
  transition: opacity 0.3s ease;
}

.stat-card:hover::before {
  opacity: 1;
}

.stat-icon-wrap {
  width: 44px;
  height: 44px;
  border-radius: 12px;
  background: rgba(37, 99, 235, 0.08);
  color: var(--primary);
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid rgba(37, 99, 235, 0.15);
}

.stat-body {
  display: flex;
  flex-direction: column;
}

.stat-value {
  font-size: 2.25rem;
  font-weight: 800;
  line-height: 1.1;
  margin-bottom: 0.35rem;
  letter-spacing: -0.02em;
}

.stat-label {
  font-size: 0.95rem;
  font-weight: 700;
  color: var(--text-main);
  margin-bottom: 0.35rem;
}

.stat-description {
  font-size: 0.82rem;
  color: var(--text-muted);
  line-height: 1.4;
}
</style>
