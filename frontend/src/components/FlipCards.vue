<script>
import { gsap } from 'gsap'
import Swal from 'sweetalert2'
import { CodeIcon, CloudIcon, MobileIcon, DesignIcon,GraphicIcon, ServerIcon } from './icons/icons';
import styled, { tw } from '@vue-styled-components/core';
import PryBtn from './PryBtn.vue';


export default {
  name: 'FlipCards',
  data() {
    return {
      services: [
        {
          id: 1,
          title: 'Web Development',
          description: 'Modern, responsive websites built with cutting-edge technologies',
          icon: CodeIcon,
          iconGradient: 'linear-gradient(135deg, #EF5350 0%, #FFA726 100%)',
          stats: {
            value: '200+',
            label: 'Projects'
          },
          backContent: {
            title: 'Full-Stack Web Solutions',
            features: [
              'Responsive Design',
              'SEO Optimization',
              'Performance Tuning',
              'Cross-browser Support',
              'Progressive Web Apps',
              'E-commerce Integration',
              'Content Management Systems',
              'API Development',
              'Database Design',
              'Security Implementation'
            ],
            technologies: ['React', 'Vue.js', 'Node.js', 'TypeScript', 'MongoDB', 'PostgreSQL'],
            buttonText: 'Start Project',
            fullDescription: 'We create modern, scalable web applications that drive business growth. Our full-stack development approach ensures seamless integration between frontend and backend systems, delivering exceptional user experiences across all devices.',
            process: [
              'Requirements Analysis & Planning',
              'UI/UX Design & Prototyping',
              'Frontend Development',
              'Backend API Development',
              'Database Integration',
              'Testing & Quality Assurance',
              'Deployment & Launch',
              'Ongoing Maintenance & Support'
            ],
            deliverables: [
              'Fully responsive website',
              'Admin dashboard',
              'Technical documentation',
              'Source code repository',
              'Deployment guide',
              '3 months free support'
            ]
          }
        },
        {
          id: 2,
          title: 'Mobile Development',
          description: 'Native and cross-platform mobile applications',
          icon: MobileIcon,
          iconGradient: 'linear-gradient(135deg, #FFA726 0%, #EF5350 100%)',
          stats: {
            value: '150+',
            label: 'Apps Built'
          },
          backContent: {
            title: 'Mobile App Development',
            features: [
              'iOS & Android',
              'Cross-platform Solutions',
              'App Store Optimization',
              'Push Notifications',
              'Offline Functionality',
              'Real-time Synchronization',
              'In-app Purchases',
              'Social Media Integration',
              'Analytics Integration',
              'Performance Optimization'
            ],
            technologies: ['React Native', 'Flutter', 'Swift', 'Kotlin', 'Firebase', 'AWS'],
            buttonText: 'Build App',
            fullDescription: 'Transform your ideas into powerful mobile applications that engage users and drive business success. We specialize in creating intuitive, high-performance apps for both iOS and Android platforms.',
            process: [
              'Market Research & Strategy',
              'App Architecture Planning',
              'UI/UX Design',
              'Native/Cross-platform Development',
              'Backend Integration',
              'Testing on Multiple Devices',
              'App Store Submission',
              'Post-launch Support'
            ],
            deliverables: [
              'Native iOS/Android apps',
              'App store listings',
              'User documentation',
              'Analytics dashboard',
              'Maintenance plan',
              'App store optimization'
            ]
          }
        },
        {
          id: 3,
          title: 'UI/UX Design',
          description: 'User-centered design that converts and engages',
          icon: DesignIcon,
          iconGradient: 'linear-gradient(135deg, #EF5350 0%, #FFA726 100%)',
          stats: {
            value: '98%',
            label: 'Satisfaction'
          },
          backContent: {
            title: 'Design Excellence',
            features: [
              'User Research',
              'Wireframing & Prototyping',
              'Visual Design',
              'Usability Testing',
              'Design Systems',
              'Accessibility Compliance',
              'Brand Integration',
              'Responsive Design',
              'Animation & Micro-interactions',
              'Design Documentation'
            ],
            technologies: ['Figma', 'Adobe XD', 'Sketch', 'Principle', 'InVision', 'Miro'],
            buttonText: 'View Portfolio',
            fullDescription: 'Create exceptional user experiences that delight customers and drive conversions. Our design process combines user research, creative vision, and data-driven insights to deliver interfaces that users love.',
            process: [
              'User Research & Personas',
              'Information Architecture',
              'Wireframing & User Flows',
              'Visual Design & Branding',
              'Interactive Prototyping',
              'Usability Testing',
              'Design System Creation',
              'Developer Handoff'
            ],
            deliverables: [
              'Complete design system',
              'High-fidelity mockups',
              'Interactive prototypes',
              'User research report',
              'Style guide',
              'Developer specifications'
            ]
          }
        },
        {
          id: 4,
          title: 'Backend Engineering',
          description: 'Scalable server architecture and API development',
          icon: ServerIcon,
          iconGradient: 'linear-gradient(135deg, #FFA726 0%, #EF5350 100%)',
          stats: {
            value: '99.9%',
            label: 'Uptime'
          },
          backContent: {
            title: 'Backend Solutions',
            features: [
              'RESTful APIs',
              'Database Design',
              'Microservices',
              'Security Implementation',
              'Performance Optimization',
              'Load Balancing',
              'Caching Strategies',
              'Real-time Features',
              'Third-party Integrations',
              'Monitoring & Logging'
            ],
            technologies: ['Node.js', 'Python', 'PostgreSQL', 'MongoDB', 'Redis', 'Docker'],
            buttonText: 'Get Started',
            fullDescription: 'Build robust, scalable backend systems that power your applications. Our backend engineering expertise ensures your systems can handle growth while maintaining security and performance.',
            process: [
              'System Architecture Design',
              'Database Schema Planning',
              'API Development',
              'Security Implementation',
              'Performance Optimization',
              'Testing & Documentation',
              'Deployment & Monitoring',
              'Maintenance & Scaling'
            ],
            deliverables: [
              'Scalable API architecture',
              'Database implementation',
              'Security protocols',
              'API documentation',
              'Monitoring dashboard',
              'Deployment scripts'
            ]
          }
        },
        {
          id: 5,
          title: 'Graphic Design',
          description: 'Visual identity and brand design solutions',
          icon: GraphicIcon,
          iconGradient: 'linear-gradient(135deg, #EF5350 0%, #FFA726 100%)',
          stats: {
            value: '300+',
            label: 'Designs'
          },
          backContent: {
            title: 'Visual Brand Identity',
            features: [
              'Logo Design',
              'Brand Guidelines',
              'Print Design',
              'Digital Assets',
              'Marketing Materials',
              'Packaging Design',
              'Social Media Graphics',
              'Website Graphics',
              'Illustration',
              'Brand Strategy'
            ],
            technologies: ['Photoshop', 'Illustrator', 'InDesign', 'After Effects', 'Figma', 'Canva'],
            buttonText: 'Create Brand',
            fullDescription: 'Develop compelling visual identities that communicate your brand story and connect with your audience. Our graphic design services cover everything from logos to complete brand ecosystems.',
            process: [
              'Brand Discovery & Research',
              'Concept Development',
              'Design Exploration',
              'Refinement & Feedback',
              'Brand Guidelines Creation',
              'Asset Development',
              'Implementation Support',
              'Brand Maintenance'
            ],
            deliverables: [
              'Complete brand identity',
              'Logo variations',
              'Brand guidelines',
              'Marketing materials',
              'Digital assets',
              'Print-ready files'
            ]
          }
        },
        {
          id: 6,
          title: 'Cloud Solutions',
          description: 'Scalable cloud infrastructure and deployment',
          icon: CloudIcon,
          iconGradient: 'linear-gradient(135deg, #FFA726 0%, #EF5350 100%)',
          stats: {
            value: '24/7',
            label: 'Support'
          },
          backContent: {
            title: 'Cloud Infrastructure',
            features: [
              'AWS/Azure Setup',
              'DevOps Implementation',
              'Auto-scaling',
              'Monitoring & Logging',
              'Disaster Recovery',
              'Container Orchestration',
              'CI/CD Pipelines',
              'Security Compliance',
              'Cost Optimization',
              'Migration Services'
            ],
            technologies: ['AWS', 'Docker', 'Kubernetes', 'Terraform', 'Jenkins', 'Ansible'],
            buttonText: 'Deploy Now',
            fullDescription: 'Modernize your infrastructure with cloud-native solutions that scale with your business. We provide end-to-end cloud services from migration to ongoing management and optimization.',
            process: [
              'Infrastructure Assessment',
              'Cloud Strategy Planning',
              'Migration Planning',
              'Implementation & Setup',
              'Security Configuration',
              'Testing & Validation',
              'Go-live & Monitoring',
              'Ongoing Optimization'
            ],
            deliverables: [
              'Cloud infrastructure',
              'Deployment pipelines',
              'Monitoring setup',
              'Security configuration',
              'Documentation',
              'Training & support'
            ]
          }
        }
      ]
    }
  },
  mounted() {
    this.initializeCards()
  },
  methods: {
    initializeCards() {
      this.services.forEach((_, index) => {
        const cardElement = this.$refs[`card${index}`]?.[0]
        if (cardElement) {
          const card = cardElement.querySelector('.card')
          const front = cardElement.querySelector('.card-front')
          const back = cardElement.querySelector('.card-back')
          
          gsap.set(card, { transformStyle: 'preserve-3d' })
          gsap.set(back, { rotationY: 180 })
          gsap.set([front, back], { backfaceVisibility: 'hidden' })
        }
      })
    },
    
    flipCard(cardRef) {
      const cardElement = this.$refs[cardRef]?.[0]
      if (cardElement) {
        const card = cardElement.querySelector('.card')
        
        gsap.to(card, {
          rotationY: 180,
          duration: 0.6,
          ease: 'power2.inOut'
        })
        
        gsap.to(cardElement, {
          boxShadow: '0 20px 40px var(--accent-orange-faded)',
          duration: 0.3,
          ease: 'power2.out'
        })
      }
    },
    
    flipBack(cardRef) {
      const cardElement = this.$refs[cardRef]?.[0]
      if (cardElement) {
        const card = cardElement.querySelector('.card')
        
        gsap.to(card, {
          rotationY: 0,
          duration: 0.6,
          ease: 'power2.inOut'
        })
        
        gsap.to(cardElement, {
          boxShadow: '0 10px 30px var(--accent-orange-faded)',
          duration: 0.3,
          ease: 'power2.out'
        })
      }
    },

    showServiceDetails(service) {
  const featuresHtml = service.backContent.features.map((feature, index) => 
    `<li class="feature-item">
      <span class="feature-dot" style="background-color: ${index % 2 === 0 ? 'var(--accent-orange)' : 'var(--accent-red)'}"></span>
      <span class="feature-text">${feature}</span>
    </li>`
  ).join('')

  const technologiesHtml = service.backContent.technologies.map(tech => 
    `<span class="tech-tag">${tech}</span>`
  ).join('')

  const processHtml = service.backContent.process.map((step, index) => 
    `<li class="process-item">
      <span class="process-number" style="background: var(--linear-gradient);">
        ${index + 1}
      </span>
      <span class="process-text">${step}</span>
    </li>`
  ).join('')

  const deliverablesHtml = service.backContent.deliverables.map(item => 
    `<li class="deliverable-item">
      <span class="deliverable-dot" style="background-color: var(--accent-orange)"></span>
      <span class="deliverable-text">${item}</span>
    </li>`
  ).join('')

  Swal.fire({
    title: `<span class="modal-title">${service.title}</span>`,
    html: `
      <div class="modal-content">
        <div class="section">
          <p class="description">${service.backContent.fullDescription}</p>
        </div>

        <div class="section">
          <h3 class="section-title">
            <span class="title-bar"></span>
            Key Features
          </h3>
          <ul class="features-grid">
            ${featuresHtml}
          </ul>
        </div>

        <div class="section">
          <h3 class="section-title">
            <span class="title-bar"></span>
            Technologies
          </h3>
          <div class="tech-container">
            ${technologiesHtml}
          </div>
        </div>

        <div class="section">
          <h3 class="section-title">
            <span class="title-bar"></span>
            Our Process
          </h3>
          <ul class="process-list">
            ${processHtml}
          </ul>
        </div>

        <div class="section">
          <h3 class="section-title">
            <span class="title-bar"></span>
            What You Get
          </h3>
          <ul class="deliverables-grid">
            ${deliverablesHtml}
          </ul>
        </div>
      </div>
    `,
    background: 'var(--bg-dark)',
    color: 'var(--text-primary)',
    width: 'auto',
    padding: '0',
    showCloseButton: true,
    showConfirmButton: true,
    confirmButtonText: `<span style="font-weight: 600;">${service.backContent.buttonText}</span>`,
    confirmButtonColor: 'transparent',
    customClass: {
      popup: 'custom-swal-popup',
      confirmButton: 'custom-swal-button',
      closeButton: 'custom-swal-close',
      htmlContainer: 'custom-swal-html'
    },
    didOpen: () => {
      const style = document.createElement('style')
      style.textContent = `
        .swal2-container{
          z-index: 9999999 !important;
        }
        .swal2-close{
          color: var(--text-secondary) !important;
          font-size: 24px !important;
          top: 16px !important;
          right: 16px !important;
        }
        .custom-swal-popup {
          border: 1px solid var(--border-gray) !important;
          border-radius: 16px !important;
          box-shadow: 0 20px 40px rgba(0, 0, 0, 0.5) !important;
          width: 95vw !important;
          max-width: 800px !important;
          margin: 10px !important;
        }
        
        .custom-swal-html {
          padding: 24px !important;
          max-height: 70vh !important;
          overflow-y: auto !important;
        }
        
        .modal-title {
          background: var(--linear-gradient);
          -webkit-background-clip: text;
          background-clip: text;
          -webkit-text-fill-color: transparent;
          font-size: clamp(20px, 4vw, 28px);
          font-weight: bold;
          display: block;
          margin-bottom: 16px;
        }
        
        .modal-content {
          text-align: left;
          color: var(--text-primary);
          line-height: 1.6;
        }
        
        .section {
          margin-bottom: clamp(16px, 4vw, 24px);
        }
        
        .description {
          font-size: clamp(14px, 3vw, 16px);
          color: var(--text-primary);
          margin-bottom: 16px;
          line-height: 1.5;
        }
        
        .section-title {
          color: var(--accent-orange);
          font-size: clamp(16px, 3.5vw, 18px);
          font-weight: 600;
          margin-bottom: 12px;
          display: flex;
          align-items: center;
        }
        
        .title-bar {
          width: 4px;
          height: clamp(16px, 4vw, 20px);
          background: var(--linear-gradient);
          margin-right: 8px;
          border-radius: 2px;
          flex-shrink: 0;
        }
        
        /* Features Grid - Responsive */
        .features-grid {
          list-style: none;
          padding: 0;
          display: grid;
          grid-template-columns: 1fr;
          gap: 8px;
        }
        
        .feature-item {
          display: flex;
          align-items: flex-start;
          padding: 4px 0;
        }
        
        .feature-dot {
          width: 8px;
          height: 8px;
          border-radius: 50%;
          margin-right: 12px;
          margin-top: 6px;
          flex-shrink: 0;
        }
        
        .feature-text {
          font-size: clamp(13px, 3vw, 14px);
          line-height: 1.4;
        }
        
        /* Technologies */
        .tech-container {
          display: flex;
          flex-wrap: wrap;
          gap: 6px;
        }
        
        .tech-tag {
          padding: 6px 12px;
          background-color: #444444;
          border-radius: 20px;
          font-size: clamp(11px, 2.5vw, 13px);
          white-space: nowrap;
        }
        
        /* Process List */
        .process-list {
          list-style: none;
          padding: 0;
        }
        
        .process-item {
          display: flex;
          align-items: flex-start;
          margin-bottom: 12px;
        }
        
        .process-number {
          width: clamp(20px, 5vw, 24px);
          height: clamp(20px, 5vw, 24px);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: clamp(10px, 2.5vw, 12px);
          font-weight: bold;
          color: white;
          margin-right: 12px;
          flex-shrink: 0;
          margin-top: 2px;
        }
        
        .process-text {
          font-size: clamp(13px, 3vw, 14px);
          line-height: 1.4;
        }
        
        /* Deliverables Grid */
        .deliverables-grid {
          list-style: none;
          padding: 0;
          display: grid;
          grid-template-columns: 1fr;
          gap: 8px;
        }
        
        .deliverable-item {
          display: flex;
          align-items: flex-start;
          padding: 4px 0;
        }
        
        .deliverable-dot {
          width: 8px;
          height: 8px;
          border-radius: 50%;
          margin-right: 12px;
          margin-top: 6px;
          flex-shrink: 0;
        }
        
        .deliverable-text {
          font-size: clamp(13px, 3vw, 14px);
          line-height: 1.4;
        }
        
        /* Button Styles */
        .custom-swal-button {
          background: var(--linear-gradient) !important;
          border: none !important;
          border-radius: 8px !important;
          padding: clamp(10px, 3vw, 12px) clamp(16px, 4vw, 24px) !important;
          font-size: clamp(12px, 3vw, 14px) !important;
          transition: opacity 0.3s ease !important;
          width: auto !important;
          min-width: 120px !important;
        }
        
        .custom-swal-button:hover {
          opacity: 0.9 !important;
        }
        
        .custom-swal-close {
          color: #9E9E9E !important;
          font-size: clamp(20px, 5vw, 24px) !important;
          top: 16px !important;
          right: 16px !important;
        }
        
        .custom-swal-close:hover {
          color: var(--accent-orange) !important;
        }
        
        /* Scrollbar */
        .custom-swal-html::-webkit-scrollbar {
          width: 6px;
        }
        
        .custom-swal-html::-webkit-scrollbar-track {
          background: #333333;
          border-radius: 3px;
        }
        
        .custom-swal-html::-webkit-scrollbar-thumb {
          background: var(--accent-orange);
          border-radius: 3px;
        }
        
        .custom-swal-html::-webkit-scrollbar-thumb:hover {
          background: var(--accent-red);
        }
        
        /* Responsive Breakpoints */
        @media (min-width: 480px) {
          .features-grid,
          .deliverables-grid {
            grid-template-columns: 1fr 1fr;
            gap: 12px 16px;
          }
          
          .custom-swal-html {
            padding: 32px !important;
          }
        }
        
        @media (min-width: 768px) {
          .custom-swal-popup {
            margin: 20px !important;
          }
          
          .features-grid,
          .deliverables-grid {
            grid-template-columns: 1fr 1fr;
          }
        }
        
        /* Extra small screens (320px and below) */
        @media (max-width: 320px) {
          .custom-swal-popup {
            width: 98vw !important;
            margin: 5px !important;
          }
          
          .custom-swal-html {
            padding: 16px !important;
          }
          
          .section {
            margin-bottom: 16px;
          }
          
          .feature-dot,
          .deliverable-dot {
            width: 6px;
            height: 6px;
            margin-right: 8px;
          }
          
          .process-number {
            width: 18px;
            height: 18px;
            margin-right: 8px;
          }
          
          .tech-tag {
            padding: 4px 8px;
            font-size: 11px;
          }
        }
      `
      document.head.appendChild(style)
    }
  })
}
  }
}


</script>


<template>
  <div class="min-h-screen bg-dark p-8">
    <div class="max-w-6xl mx-auto">
      
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols- gap-6">
        <div 
          v-for="(service, index) in services"
          :key="service.id"
          :ref="`card${index}`"
          class="card-container float-in"
          @mouseenter="() => flipCard(`card${index}`)"
          @mouseleave="() => flipBack(`card${index}`)"
        >
          <div class="card">
            <!-- Front of Card -->
            <div class="card-front">
              <div class="card-icon" :style="{ background: service.iconGradient }">
                <component :is="service.icon" class="w-8 h-8" />
              </div>
              <h3 class="card-title">{{ service.title }}</h3>
              <p class="card-description">{{ service.description }}</p>
              <div class="card-stats">
                <span class="stat-number">{{ service.stats.value }}</span>
                <span class="stat-label">{{ service.stats.label }}</span>
              </div>
            </div>
            
            <!-- Back of Card -->
            <div class="card-back">
              <h3 class="text-xl font-bold text-primary mb-3">{{ service.backContent.title }}</h3>
              <ul class="space-y-2 text-secondary mb-4">
                <li 
                  v-for="(feature, featureIndex) in service.backContent.features.slice(0, 3)"
                  :key="featureIndex"
                  class="flex items-center text-sm"
                >
                  <span 
                    class="w-2 h-2 rounded-full mr-2 flex-shrink-0"
                    :class="featureIndex % 2 === 0 ? 'bg-accent-orange' : 'bg-accent-red'"
                  ></span>
                  {{ feature }}
                </li>
                <li v-if="service.backContent.features.length > 3" class="flex items-center text-sm text-accent-orange">
                  <span class="w-2 h-2 rounded-full mr-2 bg-accent-orange flex-shrink-0"></span>
                  +{{ service.backContent.features.length - 3 }} more features
                </li>
              </ul>
              
              <div class="mt-auto space-y-3">
                <button 
                  @click="showServiceDetails(service)"
                  class="w-full px-3 py-2 bg-border-gray hover:bg-line-gray text-primary rounded-lg font-medium transition-colors text-sm border border-line-gray"
                >
                  See More Details
                </button>
                <PryBtn>
                </PryBtn>
                <button class="w-full px-3 py-2 bg-gradient-to-r from-accent-red to-accent-orange text-white rounded-lg font-medium hover:opacity-90 transition-opacity text-sm">
                  {{ service.backContent.buttonText }}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style>


.bg-dark {
  background-color: var(--bg-dark);
}

.text-primary {
  color: var(--text-primary);
}

.text-secondary {
  color: var(--text-secondary);
}

.bg-accent-orange {
  background-color: var(--accent-orange);
}

.bg-accent-red {
  background-color: var(--accent-red);
}

.bg-border-gray {
  background-color: var(--border-gray);
}

.bg-line-gray {
  background-color: var(--line-gray);
}

.text-accent-orange {
  color: var(--accent-orange);
}

.border-line-gray {
  border-color: var(--line-gray);
}

.from-accent-red {
  --tw-gradient-from: var(--accent-red);
}

.to-accent-orange {
  --tw-gradient-to: var(--accent-orange);
}

.card-container {
  perspective: 1000px;
  height: 320px;
  cursor: pointer;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
  border-radius: 16px;
  transition: transform 0.3s ease;
}

.card-container:hover {
  transform: translateY(-5px);
}

.card {
  position: relative;
  width: 100%;
  height: 100%;
  transform-style: preserve-3d;
  border-radius: 16px;
}

.card-front,
.card-back {
  position: absolute;
  width: 100%;
  height: 100%;
  backface-visibility: hidden;
  border-radius: 16px;
  padding: 24px;
  /* background: linear-gradient(135deg, rgb(27, 26, 26) 0%, rgba(0, 0, 0, 0.8) 100%); */
  border: 1px solid var(--border-gray);
  display: flex;
  flex-direction: column;
}

.card-back {
  transform: rotateY(180deg);
  background: linear-gradient(135deg, rgba(255, 167, 38, 0.05) 0%, rgba(239, 83, 80, 0.05) 100%);
  border: 1px solid rgba(255, 167, 38, 0.2);
}

.card-icon {
  width: 56px;
  height: 56px;
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  margin-bottom: 16px;
}

.card-title {
  font-size: 20px;
  font-weight: 700;
  color: var(--text-primary);
  margin-bottom: 8px;
}

.card-description {
  color: var(--text-secondary);
  font-size: 14px;
  line-height: 1.5;
  margin-bottom: 20px;
  flex-grow: 1;
}

.card-stats {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-top: auto;
}

.stat-number {
  font-size: 24px;
  font-weight: 700;
  background: var(--text-gradient);
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
  line-height: 1;
}

.stat-label {
  color: var(--text-secondary);
  font-size: 12px;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  margin-top: 4px;
}

@media (max-width: 768px) {
  .card-container {
    height: 300px;
  }
  
  .card-front,
  .card-back {
    padding: 20px;
  }
  
  .card-title {
    font-size: 18px;
  }
  
  .stat-number {
    font-size: 20px;
  }
}
</style>