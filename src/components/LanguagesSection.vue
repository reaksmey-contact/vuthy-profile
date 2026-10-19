<script setup lang="ts">
import { LANGUAGES } from '../constants/portfolioData'
import AppIcon from './icons/AppIcon.vue'
</script>

<template>
  <section id="languages" class="section languages-section">
    <div class="container">
      <!-- Section Header -->
      <div class="section-header reveal-init">
        <div class="section-tag">
          <span class="dot"></span>
          <span>Communication</span>
        </div>
        <h2 class="section-title">
          Language <span class="focused-text">Proficiency</span>
        </h2>
        <p class="section-subtitle">
          Fluent collaboration in international engineering teams, technical documentation, and client-facing stakeholder meetings.
        </p>
      </div>

      <!-- Languages Cards Grid -->
      <div class="languages-grid">
        <div
          v-for="(lang, index) in LANGUAGES"
          :key="lang.name"
          class="lang-card card-base reveal-init"
          :class="`delay-${index + 1}`"
        >
          <div class="lang-card-header">
            <div class="lang-flag-box">
              <AppIcon name="languages" :size="22" />
            </div>
            <div class="lang-titles">
              <div class="lang-name-row">
                <h3 class="lang-name">{{ lang.name }}</h3>
                <span v-if="lang.nativeName" class="native-name">({{ lang.nativeName }})</span>
              </div>
              <p class="lang-proficiency">{{ lang.proficiency }}</p>
            </div>
            <div class="lang-percent">{{ lang.levelPercentage }}%</div>
          </div>

          <!-- Progress Bar -->
          <div class="meter-track">
            <div
              class="meter-fill"
              :style="{ width: `${lang.levelPercentage}%` }"
              :class="{ 'meter-emerald': index === 0, 'meter-blue': index === 1 }"
            ></div>
          </div>
        </div>
      </div>

      <!-- Bilingual Workplace Note -->
      <div class="comm-banner card-base reveal-init delay-3">
        <div class="comm-icon-wrap">
          <AppIcon name="users" :size="22" />
        </div>
        <div class="comm-text">
          <h4 class="comm-title">Effective Cross-Border Communication</h4>
          <p class="comm-desc">
            Comfortable leading English sprint ceremonies, writing architectural decision records (ADRs), conducting peer code reviews, and interfacing seamlessly with regional stakeholders and offshore teams.
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.languages-section {
  background-color: var(--bg-surface);
  border-top: 1px solid var(--border-subtle);
  border-bottom: 1px solid var(--border-subtle);
}

.languages-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 1.5rem;
  max-width: 850px;
  margin: 0 auto 2.5rem auto;
}

@media (min-width: 768px) {
  .languages-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

.lang-card {
  padding: 1.75rem;
  background: #ffffff;
  border: 1px solid var(--border-subtle);
  border-radius: var(--radius-xl);
  box-shadow: var(--shadow-sm);
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
}

.lang-card-header {
  display: flex;
  align-items: center;
  gap: 1rem;
}

.lang-flag-box {
  width: 44px;
  height: 44px;
  border-radius: 12px;
  background: rgba(37, 99, 235, 0.08);
  color: var(--primary);
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid rgba(37, 99, 235, 0.18);
  flex-shrink: 0;
}

.lang-titles {
  flex: 1;
  display: flex;
  flex-direction: column;
}

.lang-name-row {
  display: flex;
  align-items: baseline;
  gap: 0.45rem;
}

.lang-name {
  font-size: 1.2rem;
  font-weight: 800;
  color: var(--text-main);
}

.native-name {
  font-size: 0.9rem;
  color: var(--text-muted);
  font-weight: 500;
}

.lang-proficiency {
  font-size: 0.82rem;
  color: var(--text-muted);
  font-weight: 600;
}

.lang-percent {
  font-family: var(--font-mono);
  font-size: 1.15rem;
  font-weight: 700;
  color: var(--primary);
}

.meter-track {
  width: 100%;
  height: 8px;
  background: var(--bg-muted);
  border-radius: var(--radius-pill);
  overflow: hidden;
  position: relative;
}

.meter-fill {
  height: 100%;
  border-radius: var(--radius-pill);
  transition: width 1s cubic-bezier(0.16, 1, 0.3, 1);
}

.meter-emerald {
  background: linear-gradient(90deg, #10b981, #059669);
}

.meter-blue {
  background: linear-gradient(90deg, #2563eb, #6366f1);
}

.comm-banner {
  max-width: 850px;
  margin: 0 auto;
  padding: 1.5rem 1.75rem;
  background: #ffffff;
  border: 1px solid var(--border-subtle);
  border-radius: var(--radius-lg);
  display: flex;
  align-items: center;
  gap: 1.25rem;
}

.comm-icon-wrap {
  width: 44px;
  height: 44px;
  border-radius: 12px;
  background: rgba(16, 185, 129, 0.1);
  color: #059669;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
}

.comm-title {
  font-size: 1rem;
  font-weight: 700;
  color: var(--text-main);
  margin-bottom: 0.25rem;
}

.comm-desc {
  font-size: 0.88rem;
  color: var(--text-muted);
  line-height: 1.55;
}
</style>
