import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { SmartHomeHub } from './components/SmartHomeHub';
import { SmartVoiceVideoSimulation } from './components/SmartVoiceVideoSimulation';
import { LightingShowcase } from './components/LightingShowcase';
import { SecuritySection } from './components/SecuritySection';
import { ConstructionBlueprint } from './components/ConstructionBlueprint';
import { ServicesGrid } from './components/ServicesGrid';
import { ResidentialCommercial } from './components/ResidentialCommercial';
import { ProcessSection } from './components/ProcessSection';
import { ProjectsGallery } from './components/ProjectsGallery';
import { EcosystemsSection } from './components/EcosystemsSection';
import { AboutAndCredibility } from './components/AboutAndCredibility';
import { TestimonialsSection } from './components/TestimonialsSection';
import { ContactAndInquiryForm } from './components/ContactAndInquiryForm';
import { BottomCTA } from './components/BottomCTA';
import { Footer } from './components/Footer';
import { ConsultationModal } from './components/ConsultationModal';
import { MobileStickyBar } from './components/MobileStickyBar';
import { SmartChatbot } from './components/SmartChatbot';

export default function App() {
  const [consultationModalOpen, setConsultationModalOpen] = useState(false);
  const [modalPresetScope, setModalPresetScope] = useState<string | undefined>(undefined);
  const [activeSection, setActiveSection] = useState<string>('home');

  // Track active section for top navigation indicators
  useEffect(() => {
    const sectionIds = [
      'smart-home',
      'services',
      'lighting',
      'security',
      'infrastructure',
      'residential',
      'commercial',
      'projects',
      'about',
      'contact'
    ];

    const handleScroll = () => {
      const scrollPosition = window.scrollY + 200;
      for (const id of sectionIds) {
        const el = document.getElementById(id);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(id);
            return;
          }
        }
      }
      if (window.scrollY < 300) {
        setActiveSection('home');
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleOpenConsultation = (scope?: string) => {
    setModalPresetScope(scope);
    setConsultationModalOpen(true);
  };

  const handleExploreServices = () => {
    const el = document.getElementById('smart-home');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#111315] text-[#F5F7F2] font-sans antialiased selection:bg-[#B7E61C] selection:text-[#111315]">
      
      {/* 3-Zone Clean Header */}
      <Navbar
        onOpenConsultation={() => handleOpenConsultation()}
        activeSection={activeSection}
      />

      {/* Main Content Sections */}
      <main>
        {/* Full-Width Cinematic Hero */}
        <Hero
          onOpenConsultation={() => handleOpenConsultation()}
          onExploreServices={handleExploreServices}
        />

        {/* #1 Dominant: Smart Home System Integration Hub & Connected Diagram */}
        <SmartHomeHub
          onOpenConsultation={() => handleOpenConsultation('Smart Home System Integration')}
        />

        {/* Video Simulation: Older Man in Luxury Kitchen Spoken Voice Assistant Demo */}
        <SmartVoiceVideoSimulation
          onOpenConsultation={() => handleOpenConsultation('Voice & Lighting Integration')}
        />

        {/* #2: Architectural Lighting & Dynamic Scenes */}
        <LightingShowcase
          onOpenConsultation={() => handleOpenConsultation('Architectural Lighting')}
        />

        {/* #3: Security Cameras & Unified Surveillance */}
        <SecuritySection
          onOpenConsultation={() => handleOpenConsultation('Security & Surveillance')}
        />

        {/* #4: Low-Voltage Infrastructure ("Behind The Walls" / Pre-Construction) */}
        <ConstructionBlueprint
          onOpenConsultation={() => handleOpenConsultation('Pre-Construction Low-Voltage')}
        />

        {/* Full Services Grid (All 8 Disciplines) */}
        <ServicesGrid
          onOpenConsultation={() => handleOpenConsultation()}
          onSelectServiceForInquiry={(svc) => handleOpenConsultation(svc)}
        />

        {/* 5-Phase Engineering Process */}
        <ProcessSection
          onOpenConsultation={() => handleOpenConsultation()}
        />

        {/* Residential & Commercial Capabilities */}
        <ResidentialCommercial
          onOpenConsultation={(type) => handleOpenConsultation(type)}
        />

        {/* Curated Projects Showcase & Inspection */}
        <ProjectsGallery
          onOpenConsultation={() => handleOpenConsultation('Project Scope Match')}
        />

        {/* Technology We Work With & Open Architecture */}
        <EcosystemsSection />

        {/* Company Philosophy, Workmanship & Licensing Placeholders */}
        <AboutAndCredibility
          onOpenConsultation={() => handleOpenConsultation()}
        />

        {/* Client & Contractor Testimonials */}
        <TestimonialsSection />

        {/* Comprehensive Project Inquiry & Consultation Form */}
        <ContactAndInquiryForm
          initialService={modalPresetScope}
        />

        {/* Bottom Architectural Call to Action */}
        <BottomCTA
          onOpenConsultation={() => handleOpenConsultation()}
        />
      </main>

      {/* Complete Footer */}
      <Footer />

      {/* Quick Consultation Modal */}
      <ConsultationModal
        isOpen={consultationModalOpen}
        onClose={() => setConsultationModalOpen(false)}
        presetScope={modalPresetScope}
      />

      {/* Mobile Sticky Quick Action Bar (height <= 15% viewport) */}
      <MobileStickyBar
        onOpenConsultation={() => handleOpenConsultation()}
      />

      {/* AI Assistant Chatbot with direct Phone SMS text messaging */}
      <SmartChatbot />

    </div>
  );
}
