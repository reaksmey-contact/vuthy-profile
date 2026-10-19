<script setup lang="ts">
import { ref } from 'vue'
import { PERSONAL_INFO } from '../constants/portfolioData'
import AppIcon from './icons/AppIcon.vue'

// Copy email helper
const copiedEmail = ref(false)
const copyEmail = async () => {
  try {
    await navigator.clipboard.writeText(PERSONAL_INFO.email)
    copiedEmail.value = true
    setTimeout(() => {
      copiedEmail.value = false
    }, 2500)
  } catch (e) {
    console.error(e)
  }
}

// Contact form reactive state
const form = ref({
  name: '',
  email: '',
  subject: '',
  message: ''
})

const isSubmitting = ref(false)
const submitted = ref(false)
const formError = ref('')

const handleSubmit = () => {
  if (!form.value.name.trim() || !form.value.email.trim() || !form.value.message.trim()) {
    formError.value = 'Please fill out your name, email, and message.'
    return
  }

  formError.value = ''
  isSubmitting.value = true

  // Simulate smooth submission
  setTimeout(() => {
    isSubmitting.value = false
    submitted.value = true
    form.value = {
      name: '',
      email: '',
      subject: '',
      message: ''
    }
  }, 1200)
}
</script>

<template>
  <section id="contact" class="section contact-section">
    <div class="container">
      <!-- Section Header -->
      <div class="section-header reveal-init">
        <div class="section-tag">
          <span class="dot"></span>
          <span>Get In Touch</span>
        </div>
        <h2 class="section-title">
          Let's Build Something <span class="focused-text">Exceptional</span>
        </h2>
        <p class="section-subtitle">
          Have an exciting mobile project, architecture consultation, or leadership opportunity in mind? Feel free to reach out directly.
        </p>
      </div>

      <!-- Main Contact Grid -->
      <div class="contact-grid">
        <!-- Left: Contact Details Cards -->
        <div class="contact-cards-col">
          <!-- Email Card -->
          <div class="contact-info-card card-base reveal-init delay-1">
            <div class="info-icon-box">
              <AppIcon name="mail" :size="22" />
            </div>
            <div class="info-text-box">
              <span class="info-label">Direct Email</span>
              <a :href="PERSONAL_INFO.socialLinks.email" class="info-value">
                {{ PERSONAL_INFO.email }}
              </a>
            </div>
            <button class="copy-action-btn" @click="copyEmail" :title="'Copy ' + PERSONAL_INFO.email">
              <AppIcon :name="copiedEmail ? 'check' : 'copy'" :size="16" />
              <span>{{ copiedEmail ? 'Copied!' : 'Copy' }}</span>
            </button>
          </div>

          <!-- Phone Card -->
          <div class="contact-info-card card-base reveal-init delay-2">
            <div class="info-icon-box">
              <AppIcon name="phone" :size="22" />
            </div>
            <div class="info-text-box">
              <span class="info-label">Phone & Telegram</span>
              <a :href="`tel:${PERSONAL_INFO.phone}`" class="info-value">
                {{ PERSONAL_INFO.phone }}
              </a>
            </div>
            <a
              :href="PERSONAL_INFO.socialLinks.phone"
              class="copy-action-btn"
              title="Call directly"
            >
              <AppIcon name="phone" :size="16" />
              <span>Call</span>
            </a>
          </div>

          <!-- Location Card -->
          <div class="contact-info-card card-base reveal-init delay-3">
            <div class="info-icon-box">
              <AppIcon name="map-pin" :size="22" />
            </div>
            <div class="info-text-box">
              <span class="info-label">Current Location</span>
              <span class="info-value">{{ PERSONAL_INFO.location }}</span>
            </div>
            <span class="location-badge">Indochina Time (ICT)</span>
          </div>

          <!-- Download CV Card -->
          <div class="resume-promo-card card-base reveal-init delay-4">
            <div class="resume-promo-content">
              <h4 class="resume-title">Curriculum Vitae</h4>
              <p class="resume-desc">
                Review complete employment history, university credentials, and technical deliverables in PDF format.
              </p>
            </div>
            <a
              :href="PERSONAL_INFO.resumeUrl"
              target="_blank"
              download="Chea_Vuthy_CV.pdf"
              class="btn btn-primary"
            >
              <AppIcon name="download" :size="16" />
              <span>Download CV</span>
            </a>
          </div>
        </div>

        <!-- Right: Interactive Message Form -->
        <div class="contact-form-card card-base reveal-init delay-2">
          <h3 class="form-title">Send a Direct Message</h3>
          <p class="form-desc">
            Fill out the form below and I will respond to your inquiry promptly.
          </p>

          <!-- Success Alert -->
          <transition name="alert-fade">
            <div v-if="submitted" class="success-alert">
              <div class="alert-icon">
                <AppIcon name="check" :size="18" />
              </div>
              <div class="alert-content">
                <strong>Thank you! Your message was received.</strong>
                <p>I will get back to you shortly at your email address.</p>
              </div>
              <button class="alert-close" @click="submitted = false">&times;</button>
            </div>
          </transition>

          <form @submit.prevent="handleSubmit" class="message-form">
            <div v-if="formError" class="form-error-banner">
              {{ formError }}
            </div>

            <div class="form-row">
              <div class="form-group">
                <label for="contact-name" class="form-label">Your Name</label>
                <input
                  id="contact-name"
                  v-model="form.name"
                  type="text"
                  placeholder="e.g. John Doe"
                  class="form-input"
                  required
                />
              </div>

              <div class="form-group">
                <label for="contact-email" class="form-label">Email Address</label>
                <input
                  id="contact-email"
                  v-model="form.email"
                  type="email"
                  placeholder="e.g. john@company.com"
                  class="form-input"
                  required
                />
              </div>
            </div>

            <div class="form-group">
              <label for="contact-subject" class="form-label">Subject</label>
              <input
                id="contact-subject"
                v-model="form.subject"
                type="text"
                placeholder="e.g. Mobile App Development / Project Inquiry"
                class="form-input"
              />
            </div>

            <div class="form-group">
              <label for="contact-message" class="form-label">Message</label>
              <textarea
                id="contact-message"
                v-model="form.message"
                rows="5"
                placeholder="Please describe your project, timeline, or requirements..."
                class="form-input form-textarea"
                required
              ></textarea>
            </div>

            <button type="submit" class="btn btn-primary form-submit-btn" :disabled="isSubmitting">
              <AppIcon v-if="!isSubmitting" name="mail" :size="18" />
              <span>{{ isSubmitting ? 'Sending Message...' : 'Send Message' }}</span>
            </button>
          </form>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.contact-section {
  background-color: var(--bg-surface);
  border-top: 1px solid var(--border-subtle);
}

.contact-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 2rem;
}

@media (min-width: 992px) {
  .contact-grid {
    grid-template-columns: 1fr 1.15fr;
    gap: 3rem;
  }
}

/* Left Contact Cards */
.contact-cards-col {
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
}

.contact-info-card {
  padding: 1.5rem 1.75rem;
  background: #ffffff;
  border: 1px solid var(--border-subtle);
  border-radius: var(--radius-xl);
  display: flex;
  align-items: center;
  gap: 1.25rem;
  position: relative;
}

.info-icon-box {
  width: 48px;
  height: 48px;
  border-radius: 14px;
  background: rgba(37, 99, 235, 0.08);
  color: var(--primary);
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid rgba(37, 99, 235, 0.18);
  flex-shrink: 0;
}

.info-text-box {
  flex: 1;
  display: flex;
  flex-direction: column;
}

.info-label {
  font-size: 0.78rem;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  font-weight: 700;
  color: var(--text-muted);
  margin-bottom: 0.2rem;
}

.info-value {
  font-size: 1rem;
  font-weight: 700;
  color: var(--text-main);
  text-decoration: none;
  transition: color 0.2s ease;
  word-break: break-all;
}

a.info-value:hover {
  color: var(--primary);
}

.copy-action-btn {
  display: inline-flex;
  align-items: center;
  gap: 0.4rem;
  padding: 0.45rem 0.85rem;
  background: var(--bg-muted);
  border: 1px solid var(--border-subtle);
  border-radius: var(--radius-pill);
  font-size: 0.82rem;
  font-weight: 600;
  color: var(--text-main);
  transition: all 0.2s ease;
  cursor: pointer;
  white-space: nowrap;
}

.copy-action-btn:hover {
  background: rgba(37, 99, 235, 0.1);
  color: var(--primary);
  border-color: rgba(37, 99, 235, 0.3);
}

.location-badge {
  font-size: 0.75rem;
  font-weight: 600;
  color: var(--text-muted);
  background: var(--bg-muted);
  padding: 0.3rem 0.65rem;
  border-radius: var(--radius-pill);
}

.resume-promo-card {
  padding: 1.75rem;
  background: linear-gradient(135deg, #eff6ff 0%, #e0e7ff 100%);
  border: 1px solid rgba(37, 99, 235, 0.2);
  border-radius: var(--radius-xl);
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
}

@media (min-width: 600px) {
  .resume-promo-card {
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
  }
}

.resume-promo-content {
  display: flex;
  flex-direction: column;
  gap: 0.3rem;
}

.resume-title {
  font-size: 1.15rem;
  font-weight: 800;
  color: var(--text-main);
}

.resume-desc {
  font-size: 0.85rem;
  color: var(--text-body);
  line-height: 1.5;
}

/* Right Form Card */
.contact-form-card {
  padding: 2.5rem;
  background: #ffffff;
  border: 1px solid var(--border-subtle);
  border-radius: var(--radius-xl);
  box-shadow: var(--shadow-sm);
  display: flex;
  flex-direction: column;
}

.form-title {
  font-size: 1.4rem;
  font-weight: 800;
  color: var(--text-main);
  margin-bottom: 0.4rem;
}

.form-desc {
  font-size: 0.92rem;
  color: var(--text-muted);
  margin-bottom: 2rem;
}

.message-form {
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
}

.form-row {
  display: grid;
  grid-template-columns: 1fr;
  gap: 1.25rem;
}

@media (min-width: 600px) {
  .form-row {
    grid-template-columns: repeat(2, 1fr);
  }
}

.form-group {
  display: flex;
  flex-direction: column;
  gap: 0.45rem;
}

.form-label {
  font-size: 0.82rem;
  font-weight: 700;
  color: var(--text-main);
}

.form-input {
  width: 100%;
  padding: 0.8rem 1rem;
  border-radius: var(--radius-md);
  border: 1px solid var(--border-subtle);
  background: var(--bg-muted);
  font-size: 0.92rem;
  color: var(--text-main);
  transition: all 0.2s ease;
  outline: none;
}

.form-input:focus {
  background: #ffffff;
  border-color: var(--primary);
  box-shadow: 0 0 0 3px rgba(37, 99, 235, 0.15);
}

.form-textarea {
  resize: vertical;
  min-height: 120px;
}

.form-submit-btn {
  align-self: flex-start;
  padding: 0.85rem 1.8rem;
  font-size: 0.95rem;
  margin-top: 0.5rem;
}

.form-error-banner {
  padding: 0.75rem 1rem;
  background: #fef2f2;
  border: 1px solid #fecaca;
  color: #b91c1c;
  border-radius: var(--radius-md);
  font-size: 0.85rem;
  font-weight: 600;
}

.success-alert {
  display: flex;
  align-items: center;
  gap: 0.85rem;
  padding: 1rem 1.25rem;
  background: #ecfdf5;
  border: 1px solid #a7f3d0;
  border-radius: var(--radius-lg);
  color: #065f46;
  margin-bottom: 1.5rem;
}

.alert-icon {
  width: 32px;
  height: 32px;
  border-radius: 50%;
  background: #10b981;
  color: #ffffff;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
}

.alert-content strong {
  display: block;
  font-size: 0.92rem;
}

.alert-content p {
  font-size: 0.82rem;
  color: #047857;
}

.alert-close {
  margin-left: auto;
  font-size: 1.35rem;
  color: #047857;
  cursor: pointer;
  line-height: 1;
}

.alert-fade-enter-active,
.alert-fade-leave-active {
  transition: opacity 0.3s ease;
}

.alert-fade-enter-from,
.alert-fade-leave-to {
  opacity: 0;
}
</style>
