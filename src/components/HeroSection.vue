<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'
import AppIcon from './icons/AppIcon.vue'
import { PERSONAL_INFO } from '../constants/portfolioData'

const emit = defineEmits<{
  (e: 'navigate', sectionId: string): void
}>()

// Animated rotating roles for focused text
const roles = [
  'Mobile Developer & Project Lead',
  'Flutter Cross-Platform Specialist',
  'Figma-to-Code UI/UX Implementer',
  'AI-Assisted Engineering Lead'
]

const currentRoleIndex = ref(0)
const displayedRole = ref(roles[0])
let roleInterval: number | null = null

onMounted(() => {
  roleInterval = window.setInterval(() => {
    currentRoleIndex.value = (currentRoleIndex.value + 1) % roles.length
    displayedRole.value = roles[currentRoleIndex.value]
  }, 2800)
})

onUnmounted(() => {
  if (roleInterval) clearInterval(roleInterval)
})

// Profile image state
const imageError = ref(false)
const onImageError = () => {
  imageError.value = true
}

// Copy email helper
const copied = ref(false)
const copyEmail = async () => {
  try {
    await navigator.clipboard.writeText(PERSONAL_INFO.email)
    copied.value = true
    setTimeout(() => {
      copied.value = false
    }, 2000)
  } catch (e) {
    console.error(e)
  }
}
</script>

<template>
  <section id="hero" class="hero-section">
    <!-- Ambient light glow circles -->
    <div class="ambient-glow glow-top" aria-hidden="true"></div>
    <div class="ambient-glow glow-right" aria-hidden="true"></div>

    <div class="container hero-container">
      <!-- Left Content Column -->
      <div class="hero-content reveal-init delay-1">
        <!-- Status Pill -->
        <div class="status-badge">
          <span class="status-dot"></span>
          <span class="status-text">{{ PERSONAL_INFO.status }}</span>
        </div>

        <!-- Main Title & Focused Text -->
        <h1 class="hero-title">
          Hi, I'm <span class="focused-text">{{ PERSONAL_INFO.name }}</span>
        </h1>

        <!-- Dynamic Focused Role -->
        <div class="role-wrapper">
          <span class="role-prefix">I am a</span>
          <transition name="role-swap" mode="out-in">
            <span :key="displayedRole" class="role-badge">
              {{ displayedRole }}
            </span>
          </transition>
        </div>

        <!-- Tagline & Short Bio -->
        <p class="hero-tagline">
          {{ PERSONAL_INFO.tagline }}
        </p>

        <p class="hero-bio">
          {{ PERSONAL_INFO.shortBio }}
        </p>

        <!-- Quick Info Badges -->
        <div class="hero-meta-list">
          <div class="meta-item">
            <AppIcon name="map-pin" :size="16" className="text-primary" />
            <span>{{ PERSONAL_INFO.location }}</span>
          </div>
          <button class="meta-item meta-interactive" @click="copyEmail" title="Click to copy email">
            <AppIcon name="mail" :size="16" className="text-primary" />
            <span>{{ PERSONAL_INFO.email }}</span>
            <span class="copy-badge">{{ copied ? 'Copied!' : 'Copy' }}</span>
          </button>
          <a :href="`tel:${PERSONAL_INFO.phone}`" class="meta-item meta-interactive">
            <AppIcon name="phone" :size="16" className="text-primary" />
            <span>{{ PERSONAL_INFO.phone }}</span>
          </a>
        </div>

        <!-- Action CTAs -->
        <div class="hero-actions">
          <a
            :href="PERSONAL_INFO.resumeUrl"
            target="_blank"
            download="Chea_Vuthy_CV.pdf"
            class="btn btn-primary"
          >
            <AppIcon name="download" :size="18" />
            <span>Download CV</span>
          </a>

          <button class="btn btn-secondary" @click="emit('navigate', 'contact')">
            <AppIcon name="mail" :size="18" />
            <span>Get in Touch</span>
          </button>

          <button class="btn btn-accent" @click="emit('navigate', 'experience')">
            <AppIcon name="briefcase" :size="18" />
            <span>View Experience</span>
          </button>
        </div>
      </div>

      <!-- Right Visual Column (Profile Card with Floating Tech Badges) -->
      <div class="hero-visual reveal-init delay-2">
        <div class="avatar-card">
          <!-- Background decoration rings -->
          <div class="avatar-ring ring-1"></div>
          <div class="avatar-ring ring-2"></div>

          <!-- Main Image Container -->
          <div class="avatar-frame">
            <img
              v-if="!imageError"
              src="/profile.JPG"
              alt="Chea Vuthy - Mobile Developer"
              class="avatar-img"
              @error="onImageError"
            />
            <!-- Graceful Fallback if user hasn't added photo yet -->
            <div v-else class="avatar-placeholder">
              <div class="avatar-monogram">CV</div>
              <p class="placeholder-caption">Chea Vuthy</p>
              <span class="placeholder-note">Add profile.jpg to public/</span>
            </div>
          </div>

          <!-- Floating Badges -->
          <div class="floating-badge badge-flutter">
            <div class="badge-icon-wrap bg-blue">
              <AppIcon name="smartphone" :size="16" />
            </div>
            <div>
              <span class="badge-title">Flutter</span>
              <span class="badge-sub">Cross-Platform</span>
            </div>
          </div>

          <div class="floating-badge badge-dotnet">
            <div class="badge-icon-wrap bg-indigo">
              <AppIcon name="server" :size="16" />
            </div>
            <div>
              <span class="badge-title">.NET Core</span>
              <span class="badge-sub">C# / REST APIs</span>
            </div>
          </div>

          <div class="floating-badge badge-figma">
            <div class="badge-icon-wrap bg-pink">
              <AppIcon name="palette" :size="16" />
            </div>
            <div>
              <span class="badge-title">UI/UX Figma</span>
              <span class="badge-sub">Pixel-Perfect</span>
            </div>
          </div>

          <div class="floating-badge badge-ai">
            <div class="badge-icon-wrap bg-teal">
              <AppIcon name="sparkles" :size="16" />
            </div>
            <div>
              <span class="badge-title">AI-Assisted</span>
              <span class="badge-sub">Gemini & DeepSeek</span>
            </div>
          </div>

          <!-- Experience Pill -->
          <div class="experience-pill">
            <span class="pill-number">4+</span>
            <span class="pill-text">Years Building Production Apps</span>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.hero-section {
  position: relative;
  padding: 3.5rem 0 5rem 0;
  overflow: hidden;
}

@media (min-width: 992px) {
  .hero-section {
    padding: 5rem 0 6.5rem 0;
  }
}

.ambient-glow.glow-top {
  top: -100px;
  left: 5%;
  width: 450px;
  height: 450px;
  background: radial-gradient(circle, rgba(37, 99, 235, 0.12) 0%, transparent 70%);
}

.ambient-glow.glow-right {
  top: 15%;
  right: -80px;
  width: 500px;
  height: 500px;
  background: radial-gradient(circle, rgba(99, 102, 241, 0.1) 0%, transparent 70%);
}

.hero-container {
  display: grid;
  grid-template-columns: 1fr;
  gap: 3.5rem;
  align-items: center;
}

@media (min-width: 992px) {
  .hero-container {
    grid-template-columns: 1.15fr 0.85fr;
    gap: 4rem;
  }
}

/* Left Hero Content */
.hero-content {
  display: flex;
  flex-direction: column;
}

.status-badge {
  display: inline-flex;
  align-items: center;
  gap: 0.6rem;
  padding: 0.4rem 1rem;
  border-radius: var(--radius-pill);
  background: #ffffff;
  border: 1px solid rgba(16, 185, 129, 0.3);
  box-shadow: 0 2px 10px rgba(16, 185, 129, 0.12);
  width: fit-content;
  margin-bottom: 1.5rem;
}

.status-dot {
  width: 9px;
  height: 9px;
  border-radius: 50%;
  background-color: var(--accent-emerald);
  box-shadow: 0 0 10px var(--accent-emerald);
  animation: pulse-dot 2s infinite ease-in-out;
}

@keyframes pulse-dot {
  0%, 100% {
    transform: scale(1);
    opacity: 1;
  }
  50% {
    transform: scale(1.35);
    opacity: 0.7;
  }
}

.status-text {
  font-size: 0.82rem;
  font-weight: 600;
  color: #065f46;
}

.hero-title {
  font-size: 2.75rem;
  font-weight: 800;
  color: var(--text-main);
  line-height: 1.15;
  letter-spacing: -0.03em;
  margin-bottom: 0.8rem;
}

@media (min-width: 768px) {
  .hero-title {
    font-size: 3.75rem;
  }
}

/* Dynamic Focused Role */
.role-wrapper {
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 0.6rem;
  margin-bottom: 1.25rem;
}

.role-prefix {
  font-size: 1.25rem;
  font-weight: 500;
  color: var(--text-muted);
}

.role-badge {
  display: inline-block;
  padding: 0.35rem 0.95rem;
  border-radius: var(--radius-md);
  background: linear-gradient(135deg, rgba(37, 99, 235, 0.1) 0%, rgba(99, 102, 241, 0.12) 100%);
  border: 1px solid rgba(37, 99, 235, 0.25);
  color: var(--primary);
  font-weight: 700;
  font-size: 1.2rem;
  letter-spacing: -0.01em;
}

.role-swap-enter-active,
.role-swap-leave-active {
  transition: all 0.35s ease;
}

.role-swap-enter-from {
  opacity: 0;
  transform: translateY(12px);
}

.role-swap-leave-to {
  opacity: 0;
  transform: translateY(-12px);
}

.hero-tagline {
  font-family: var(--font-mono);
  font-size: 0.95rem;
  font-weight: 600;
  color: var(--text-main);
  background: var(--bg-muted);
  border: 1px solid var(--border-subtle);
  border-radius: var(--radius-md);
  padding: 0.5rem 0.85rem;
  margin-bottom: 1.25rem;
  display: inline-block;
  width: fit-content;
}

.hero-bio {
  font-size: 1.05rem;
  line-height: 1.7;
  color: var(--text-body);
  margin-bottom: 1.75rem;
  max-width: 620px;
}

/* Meta List */
.hero-meta-list {
  display: flex;
  flex-wrap: wrap;
  gap: 0.85rem;
  margin-bottom: 2.25rem;
}

.meta-item {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.45rem 0.85rem;
  background: #ffffff;
  border: 1px solid var(--border-subtle);
  border-radius: var(--radius-pill);
  font-size: 0.85rem;
  font-weight: 500;
  color: var(--text-body);
  box-shadow: var(--shadow-xs);
  transition: all 0.2s ease;
}

.meta-interactive:hover {
  border-color: var(--primary);
  color: var(--primary);
  transform: translateY(-1px);
  box-shadow: var(--shadow-sm);
}

.copy-badge {
  font-size: 0.72rem;
  font-weight: 600;
  background: rgba(37, 99, 235, 0.1);
  color: var(--primary);
  padding: 0.15rem 0.45rem;
  border-radius: 4px;
}

.hero-actions {
  display: flex;
  flex-wrap: wrap;
  gap: 0.85rem;
}

/* Right Visual Column */
.hero-visual {
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
}

.avatar-card {
  position: relative;
  width: 100%;
  max-width: 420px;
  aspect-ratio: 1 / 1.1;
  display: flex;
  align-items: center;
  justify-content: center;
}

.avatar-ring {
  position: absolute;
  border-radius: 50%;
  border: 1.5px dashed rgba(37, 99, 235, 0.22);
  pointer-events: none;
}

.ring-1 {
  width: 380px;
  height: 380px;
  animation: rotate-ring 40s linear infinite;
}

.ring-2 {
  width: 440px;
  height: 440px;
  border-color: rgba(99, 102, 241, 0.18);
  animation: rotate-ring 60s linear infinite reverse;
}

@keyframes rotate-ring {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}

.avatar-frame {
  width: 280px;
  height: 340px;
  border-radius: 28px;
  background: #ffffff;
  border: 4px solid #ffffff;
  box-shadow: 0 20px 45px -10px rgba(15, 23, 42, 0.16),
              0 0 0 1px rgba(226, 232, 240, 0.9);
  overflow: hidden;
  position: relative;
  z-index: 2;
  transition: transform 0.4s ease, box-shadow 0.4s ease;
}

.avatar-frame:hover {
  transform: translateY(-6px);
  box-shadow: 0 28px 55px -12px rgba(37, 99, 235, 0.22);
}

.avatar-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: top center;
}

.avatar-placeholder {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: linear-gradient(145deg, #eff6ff 0%, #e0e7ff 100%);
  padding: 1.5rem;
  text-align: center;
}

.avatar-monogram {
  width: 80px;
  height: 80px;
  border-radius: 20px;
  background: var(--gradient-brand);
  color: #ffffff;
  font-size: 2.2rem;
  font-weight: 800;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 8px 24px rgba(37, 99, 235, 0.35);
  margin-bottom: 1rem;
}

.placeholder-caption {
  font-size: 1.15rem;
  font-weight: 700;
  color: var(--text-main);
  margin-bottom: 0.35rem;
}

.placeholder-note {
  font-size: 0.78rem;
  color: var(--text-muted);
  font-family: var(--font-mono);
}

/* Floating Badges */
.floating-badge {
  position: absolute;
  z-index: 4;
  display: flex;
  align-items: center;
  gap: 0.65rem;
  padding: 0.55rem 0.85rem;
  background: rgba(255, 255, 255, 0.95);
  backdrop-filter: blur(12px);
  border: 1px solid rgba(226, 232, 240, 0.9);
  border-radius: var(--radius-lg);
  box-shadow: 0 8px 20px -3px rgba(15, 23, 42, 0.1);
  animation: float-badge 6s ease-in-out infinite alternate;
}

.badge-flutter {
  top: 15px;
  left: -20px;
  animation-delay: 0s;
}

.badge-dotnet {
  top: 25px;
  right: -25px;
  animation-delay: 1.5s;
}

.badge-figma {
  bottom: 80px;
  left: -25px;
  animation-delay: 3s;
}

.badge-ai {
  bottom: 95px;
  right: -20px;
  animation-delay: 4.5s;
}

@keyframes float-badge {
  0% {
    transform: translateY(0);
  }
  100% {
    transform: translateY(-8px);
  }
}

.badge-icon-wrap {
  width: 32px;
  height: 32px;
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #ffffff;
}

.bg-blue { background: #0284c7; }
.bg-indigo { background: #4f46e5; }
.bg-pink { background: #e11d48; }
.bg-teal { background: #0d9488; }

.badge-title {
  display: block;
  font-size: 0.82rem;
  font-weight: 700;
  color: var(--text-main);
  line-height: 1.2;
}

.badge-sub {
  display: block;
  font-size: 0.7rem;
  color: var(--text-muted);
}

.experience-pill {
  position: absolute;
  bottom: 0px;
  left: 50%;
  transform: translateX(-50%);
  z-index: 5;
  background: #ffffff;
  border: 1px solid var(--border-subtle);
  border-radius: var(--radius-pill);
  padding: 0.55rem 1.4rem;
  display: flex;
  align-items: center;
  gap: 0.6rem;
  box-shadow: 0 10px 25px -4px rgba(15, 23, 42, 0.12);
  white-space: nowrap;
}

.pill-number {
  font-size: 1.25rem;
  font-weight: 800;
  color: var(--primary);
}

.pill-text {
  font-size: 0.82rem;
  font-weight: 600;
  color: var(--text-body);
}

@media (max-width: 640px) {
  .floating-badge {
    display: none;
  }
  .avatar-ring {
    display: none;
  }
}
</style>
