<script setup lang="ts">
import { ref, computed } from 'vue'
import { SKILL_CATEGORIES } from '../constants/portfolioData'
import AppIcon from './icons/AppIcon.vue'

const selectedCategory = ref<string>('all')

const categories = [
  { id: 'all', label: 'All Disciplines' },
  { id: 'mobile', label: 'Mobile & Flutter' },
  { id: 'backend', label: 'Backend & APIs' },
  { id: 'ai-automation', label: 'AI & Automation' },
  { id: 'design', label: 'UI/UX Design' },
  { id: 'integration', label: 'Integrations & Cloud' },
  { id: 'database', label: 'Databases' },
  { id: 'tools', label: 'DevOps & Agile' }
]

const filteredCategories = computed(() => {
  if (selectedCategory.value === 'all') {
    return SKILL_CATEGORIES
  }
  return SKILL_CATEGORIES.filter((cat) => cat.id === selectedCategory.value)
})
</script>

<template>
  <section id="skills" class="section skills-section">
    <div class="container">
      <!-- Section Header -->
      <div class="section-header reveal-init">
        <div class="section-tag">
          <span class="dot"></span>
          <span>Technical Skills</span>
        </div>
        <h2 class="section-title">
          Specialized in Modern <span class="focused-text">Cross-Platform Tech</span>
        </h2>
        <p class="section-subtitle">
          From frontend widget architecture in Flutter to secure backend endpoints in .NET Core and next-gen AI workflows.
        </p>
      </div>

      <!-- Category Filter Tabs -->
      <div class="filter-tab-bar reveal-init delay-1">
        <button
          v-for="cat in categories"
          :key="cat.id"
          class="filter-pill"
          :class="{ active: selectedCategory === cat.id }"
          @click="selectedCategory = cat.id"
        >
          <span>{{ cat.label }}</span>
        </button>
      </div>

      <!-- Categories Grid -->
      <div class="skills-grid">
        <div
          v-for="(cat, index) in filteredCategories"
          :key="cat.id"
          class="skill-category-card card-base reveal-init"
          :class="`delay-${(index % 4) + 1}`"
        >
          <!-- Category Card Header -->
          <div class="category-header">
            <div class="category-icon-box">
              <AppIcon :name="cat.icon" :size="20" />
            </div>
            <h3 class="category-title">{{ cat.title }}</h3>
          </div>

          <!-- Skills List -->
          <div class="skills-pill-cloud">
            <div
              v-for="skill in cat.skills"
              :key="skill.name"
              class="skill-chip"
              :class="{ 'is-highlighted': skill.highlight }"
            >
              <div class="skill-name-row">
                <span v-if="skill.highlight" class="chip-dot"></span>
                <span class="skill-title">{{ skill.name }}</span>
              </div>
              <span v-if="skill.level" class="skill-level-tag">
                {{ skill.level }}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.skills-section {
  background-color: var(--bg-surface);
  border-top: 1px solid var(--border-subtle);
  border-bottom: 1px solid var(--border-subtle);
}

.filter-tab-bar {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 0.6rem;
  margin-bottom: 3rem;
}

.filter-pill {
  padding: 0.5rem 1.15rem;
  border-radius: var(--radius-pill);
  font-size: 0.88rem;
  font-weight: 600;
  color: var(--text-muted);
  background: #ffffff;
  border: 1px solid var(--border-subtle);
  box-shadow: var(--shadow-xs);
  transition: all var(--transition-fast);
  cursor: pointer;
}

.filter-pill:hover {
  color: var(--primary);
  border-color: rgba(37, 99, 235, 0.3);
  transform: translateY(-1px);
}

.filter-pill.active {
  background: var(--gradient-brand);
  color: #ffffff;
  border-color: transparent;
  box-shadow: 0 4px 12px rgba(37, 99, 235, 0.25);
}

.skills-grid {
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  gap: 1.5rem;
}

@media (min-width: 680px) {
  .skills-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (min-width: 1024px) {
  .skills-grid {
    grid-template-columns: repeat(3, 1fr);
  }
}

.skill-category-card {
  padding: 1.75rem;
  background: #ffffff;
  border: 1px solid var(--border-subtle);
  border-radius: var(--radius-xl);
  box-shadow: var(--shadow-sm);
  display: flex;
  flex-direction: column;
}

.category-header {
  display: flex;
  align-items: center;
  gap: 0.85rem;
  margin-bottom: 1.35rem;
  padding-bottom: 1rem;
  border-bottom: 1px solid var(--border-subtle);
}

.category-icon-box {
  width: 40px;
  height: 40px;
  border-radius: 12px;
  background: rgba(37, 99, 235, 0.08);
  color: var(--primary);
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid rgba(37, 99, 235, 0.18);
}

.category-title {
  font-size: 1.1rem;
  font-weight: 700;
  color: var(--text-main);
}

.skills-pill-cloud {
  display: flex;
  flex-direction: column;
  gap: 0.65rem;
}

.skill-chip {
  padding: 0.65rem 0.85rem;
  background: var(--bg-muted);
  border: 1px solid var(--border-subtle);
  border-radius: var(--radius-md);
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 0.5rem;
  transition: all 0.2s ease;
}

.skill-chip:hover {
  background: #ffffff;
  border-color: rgba(37, 99, 235, 0.35);
  transform: translateX(3px);
  box-shadow: var(--shadow-sm);
}

.skill-chip.is-highlighted {
  background: rgba(37, 99, 235, 0.04);
  border-color: rgba(37, 99, 235, 0.25);
}

.skill-name-row {
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.chip-dot {
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background: var(--primary);
  box-shadow: 0 0 6px var(--primary);
}

.skill-title {
  font-size: 0.88rem;
  font-weight: 600;
  color: var(--text-main);
}

.skill-level-tag {
  font-size: 0.72rem;
  font-weight: 600;
  color: var(--text-muted);
  font-family: var(--font-mono);
  background: #ffffff;
  padding: 0.15rem 0.45rem;
  border-radius: var(--radius-sm);
  border: 1px solid var(--border-subtle);
  white-space: nowrap;
}
</style>
