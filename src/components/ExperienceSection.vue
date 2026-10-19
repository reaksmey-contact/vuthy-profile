<script setup lang="ts">
import { WORK_EXPERIENCE } from '../constants/portfolioData'
import AppIcon from './icons/AppIcon.vue'
</script>

<template>
  <section id="experience" class="section experience-section">
    <div class="container">
      <!-- Section Header -->
      <div class="section-header reveal-init">
        <div class="section-tag">
          <span class="dot"></span>
          <span>Work Experience</span>
        </div>
        <h2 class="section-title">
          Proven Track Record of <span class="focused-text">Impact & Leadership</span>
        </h2>
        <p class="section-subtitle">
          Over 4 years of accelerating mobile development from high-growth software agencies to enterprise leadership.
        </p>
      </div>

      <!-- Experience Timeline -->
      <div class="timeline-wrapper">
        <div class="timeline-line" aria-hidden="true"></div>

        <div class="timeline-list">
          <div
            v-for="(item, index) in WORK_EXPERIENCE"
            :key="item.id"
            class="timeline-item reveal-init"
            :class="[`delay-${index + 1}`, { 'is-current': index === 0 }]"
          >
            <!-- Timeline Marker -->
            <div class="timeline-marker">
              <div class="marker-dot">
                <span v-if="index === 0" class="live-pulse"></span>
              </div>
            </div>

            <!-- Experience Card -->
            <div class="experience-card card-base">
              <!-- Top Card Header -->
              <div class="card-header-row">
                <div class="role-company-block">
                  <div class="role-title-row">
                    <h3 class="role-title">{{ item.role }}</h3>
                    <span v-if="item.badge" class="badge" :class="{ 'badge-primary': index === 0 }">
                      {{ item.badge }}
                    </span>
                  </div>
                  <div class="company-name-row">
                    <AppIcon name="briefcase" :size="16" className="text-primary" />
                    <span class="company-name">{{ item.company }}</span>
                  </div>
                </div>

                <div class="period-loc-block">
                  <div class="period-tag">
                    <AppIcon name="calendar" :size="14" />
                    <span>{{ item.period }}</span>
                  </div>
                  <div class="location-tag">
                    <AppIcon name="map-pin" :size="13" />
                    <span>{{ item.location }}</span>
                  </div>
                </div>
              </div>

              <!-- Overview Description -->
              <p v-if="item.description" class="exp-summary">
                {{ item.description }}
              </p>

              <!-- Responsibilities list -->
              <div class="responsibilities-block">
                <h4 class="responsibilities-title">Key Responsibilities & Deliverables:</h4>
                <ul class="resp-list">
                  <li v-for="(resp, rIdx) in item.responsibilities" :key="rIdx" class="resp-item">
                    <span class="check-icon-wrap">
                      <AppIcon name="check" :size="12" />
                    </span>
                    <span class="resp-text">{{ resp }}</span>
                  </li>
                </ul>
              </div>

              <!-- Tech Badges -->
              <div class="tech-stack-row">
                <span class="tech-label">Technologies:</span>
                <div class="tech-tags-list">
                  <span v-for="tech in item.technologies" :key="tech" class="tech-tag">
                    {{ tech }}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.experience-section {
  background-color: var(--bg-body);
}

.timeline-wrapper {
  position: relative;
  max-width: 950px;
  margin: 0 auto;
  padding: 1rem 0;
}

.timeline-line {
  position: absolute;
  top: 20px;
  bottom: 40px;
  left: 20px;
  width: 2px;
  background: linear-gradient(180deg, #2563eb 0%, #cbd5e1 80%, transparent 100%);
}

@media (min-width: 768px) {
  .timeline-line {
    left: 28px;
  }
}

.timeline-list {
  display: flex;
  flex-direction: column;
  gap: 2.5rem;
}

.timeline-item {
  position: relative;
  display: flex;
  gap: 1.5rem;
}

@media (min-width: 768px) {
  .timeline-item {
    gap: 2.25rem;
  }
}

/* Timeline Marker */
.timeline-marker {
  position: relative;
  flex-shrink: 0;
  width: 42px;
  display: flex;
  justify-content: center;
  padding-top: 1.5rem;
}

@media (min-width: 768px) {
  .timeline-marker {
    width: 58px;
  }
}

.marker-dot {
  position: relative;
  width: 18px;
  height: 18px;
  border-radius: 50%;
  background: #ffffff;
  border: 4px solid var(--primary);
  box-shadow: 0 0 0 4px rgba(37, 99, 235, 0.15);
  z-index: 2;
}

.is-current .marker-dot {
  border-color: #2563eb;
  background: #2563eb;
  box-shadow: 0 0 0 6px rgba(37, 99, 235, 0.25);
}

.live-pulse {
  position: absolute;
  inset: -6px;
  border-radius: 50%;
  border: 2px solid var(--primary);
  animation: ripple 2s infinite ease-out;
}

@keyframes ripple {
  0% {
    transform: scale(0.9);
    opacity: 1;
  }
  100% {
    transform: scale(1.8);
    opacity: 0;
  }
}

/* Experience Card */
.experience-card {
  flex: 1;
  padding: 2rem 2.25rem;
  background: #ffffff;
  border: 1px solid var(--border-subtle);
  border-radius: var(--radius-xl);
  box-shadow: var(--shadow-sm);
  position: relative;
}

.is-current .experience-card {
  border-color: rgba(37, 99, 235, 0.35);
  box-shadow: 0 10px 30px -5px rgba(37, 99, 235, 0.1);
}

.is-current .experience-card::after {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 4px;
  background: var(--gradient-brand);
  border-top-left-radius: var(--radius-xl);
  border-top-right-radius: var(--radius-xl);
}

.card-header-row {
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  margin-bottom: 1.25rem;
  padding-bottom: 1.25rem;
  border-bottom: 1px solid var(--border-subtle);
}

@media (min-width: 680px) {
  .card-header-row {
    flex-direction: row;
    justify-content: space-between;
    align-items: flex-start;
  }
}

.role-company-block {
  display: flex;
  flex-direction: column;
  gap: 0.35rem;
}

.role-title-row {
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 0.65rem;
}

.role-title {
  font-size: 1.35rem;
  font-weight: 800;
  color: var(--text-main);
  letter-spacing: -0.01em;
}

.company-name-row {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
}

.company-name {
  font-size: 1rem;
  font-weight: 700;
  color: var(--primary);
}

.period-loc-block {
  display: flex;
  flex-direction: column;
  gap: 0.35rem;
  align-items: flex-start;
}

@media (min-width: 680px) {
  .period-loc-block {
    align-items: flex-end;
  }
}

.period-tag {
  display: inline-flex;
  align-items: center;
  gap: 0.45rem;
  font-size: 0.82rem;
  font-weight: 600;
  color: var(--text-main);
  background: var(--bg-muted);
  padding: 0.3rem 0.75rem;
  border-radius: var(--radius-pill);
}

.location-tag {
  display: inline-flex;
  align-items: center;
  gap: 0.35rem;
  font-size: 0.78rem;
  color: var(--text-muted);
}

.exp-summary {
  font-size: 0.95rem;
  color: var(--text-body);
  line-height: 1.6;
  margin-bottom: 1.25rem;
  font-weight: 500;
}

/* Responsibilities */
.responsibilities-block {
  margin-bottom: 1.5rem;
}

.responsibilities-title {
  font-size: 0.88rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  color: var(--text-muted);
  margin-bottom: 0.75rem;
}

.resp-list {
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 0.65rem;
}

.resp-item {
  display: flex;
  align-items: flex-start;
  gap: 0.75rem;
}

.check-icon-wrap {
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background: rgba(37, 99, 235, 0.1);
  color: var(--primary);
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  margin-top: 2px;
}

.resp-text {
  font-size: 0.92rem;
  line-height: 1.6;
  color: var(--text-body);
}

/* Tech stack tags */
.tech-stack-row {
  display: flex;
  flex-direction: column;
  gap: 0.6rem;
  padding-top: 1rem;
  border-top: 1px dashed var(--border-subtle);
}

.tech-label {
  font-size: 0.75rem;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  font-weight: 700;
  color: var(--text-muted);
}

.tech-tags-list {
  display: flex;
  flex-wrap: wrap;
  gap: 0.45rem;
}

.tech-tag {
  font-family: var(--font-mono);
  font-size: 0.75rem;
  font-weight: 600;
  padding: 0.25rem 0.65rem;
  background: var(--bg-muted);
  color: var(--text-secondary);
  border: 1px solid var(--border-subtle);
  border-radius: var(--radius-sm);
  transition: all 0.2s ease;
}

.tech-tag:hover {
  background: rgba(37, 99, 235, 0.08);
  border-color: rgba(37, 99, 235, 0.3);
  color: var(--primary);
}
</style>
