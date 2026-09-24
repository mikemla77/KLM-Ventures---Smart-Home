import React from 'react';
import { ArrowRight, Shield, Zap, Sparkles, CheckCircle2, ChevronDown } from 'lucide-react';
import { BUSINESS_CONFIG, IMAGES } from '../config/business';
import { KLMMonogramMark } from './KLMLogo';

interface HeroProps {
  onOpenConsultation: () => void;
  onExploreServices: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenConsultation, onExploreServices }) => {
  return (
    <section className="relative min-h-[92vh] flex items-center justify-center pt-24 pb-16 overflow-hidden bg-[#111315]">
      {/* Background Architectural Image with Cinematic Scrim */}
      <div className="absolute inset-0 z-0">
        <img
          src={IMAGES.hero}
          alt="Luxury modern architectural residence featuring integrated warm interior and facade smart lighting at dusk"
          className="w-full h-full object-cover object-center scale-105 transition-transform duration-1000 ease-out"
          referrerPolicy="no-referrer"
          loading="eager"
        />
        {/* Measured High-Contrast Scrim to ensure WCAG AA legibility across all screens */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#111315] via-[#111315]/80 to-[#111315]/40" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#111315]/95 via-[#111315]/65 to-transparent" />
        
        {/* Blueprint architectural grid overlay for subtle depth */}
        <div className="absolute inset-0 bg-blueprint-grid opacity-30 pointer-events-none" />
      </div>

      {/* Subtle Architectural Glow Accent */}
      <div 
        aria-hidden="true"
        className="absolute top-1/4 right-1/4 w-96 h-96 bg-[#B7E61C]/10 rounded-full blur-3xl pointer-events-none" 
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-8 md:py-16">
        <div className="max-w-3xl">
          
          {/* Quiet Trust & Category Kicker with Official KLM Logo */}
          <div className="flex items-center gap-2.5 text-xs sm:text-sm font-medium tracking-wider text-[#B7E61C] uppercase mb-4">
            <img
              src={IMAGES.logoClean}
              alt="KLM Ventures Logo"
              referrerPolicy="no-referrer"
              className="w-6 h-6 object-contain filter drop-shadow-[0_0_8px_rgba(183,230,28,0.3)]"
            />
            <span className="font-semibold text-white">KLM VENTURES</span>
            <span aria-hidden="true" className="text-[#70756F]">·</span>
            <span>Whole-Home Integration</span>
            <span aria-hidden="true" className="text-[#70756F]">·</span>
            <span className="text-[#F5F7F2]/80">Low-Voltage Systems</span>
          </div>

          {/* Primary Architectural Headline */}
          <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-[1.08] mb-6 text-balance">
            SMART TECHNOLOGY. <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-white to-[#B7E61C]">
              BUILT INTO YOUR SPACE.
            </span>
          </h1>

          {/* Value Proposition Description */}
          <p className="text-base sm:text-lg lg:text-xl text-[#F5F7F2]/85 leading-relaxed mb-8 max-w-2xl font-light">
            We design and engineer the unified technology that makes modern homes and buildings intelligent, safer, and effortlessly responsive. From behind-the-walls pre-wiring to seamless one-touch automation.
          </p>

          {/* High-Intent Action Zone */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 mb-10">
            <button
              onClick={onOpenConsultation}
              className="inline-flex items-center justify-center gap-3 px-6 py-4 bg-[#B7E61C] hover:bg-[#C8F52A] text-[#111315] font-bold text-sm tracking-wider uppercase rounded-md transition-all duration-200 transform hover:-translate-y-0.5 lime-glow shadow-lg focus:outline-none focus-visible:ring-2 focus-visible:ring-white"
            >
              <span>Get a Smart Home Consultation</span>
              <ArrowRight className="w-4 h-4 text-[#111315]" />
            </button>

            <button
              onClick={onExploreServices}
              className="inline-flex items-center justify-center gap-2 px-6 py-4 bg-[#1B1E20]/90 hover:bg-[#24292C] text-white border border-[#2C3236] hover:border-[#B7E61C]/50 text-sm font-semibold tracking-wider uppercase rounded-md transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#B7E61C]"
            >
              <span>Explore Our Services</span>
            </button>
          </div>

          {/* Trust Statement Footer */}
          <div className="pt-6 border-t border-[#2C3236]/80 flex flex-wrap items-center gap-y-3 gap-x-6 text-xs text-[#F5F7F2]/70">
            <div className="flex items-center gap-1.5 text-white font-medium">
              <CheckCircle2 className="w-4 h-4 text-[#B7E61C]" />
              <span>{BUSINESS_CONFIG.trustStatement}</span>
            </div>
            <div className="hidden sm:block text-[#70756F]">|</div>
            <div className="flex items-center gap-4 text-xs text-[#70756F]">
              <span>Pre-Construction Planning</span>
              <span>·</span>
              <span>Architectural LED</span>
              <span>·</span>
              <span>One Unified App</span>
            </div>
          </div>

        </div>
      </div>

      {/* Subtle Scroll Down Prompt */}
      <a
        href="#smart-home"
        aria-label="Scroll down to Smart Home Integration section"
        className="absolute bottom-4 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center text-xs text-[#70756F] hover:text-[#B7E61C] transition-colors p-2"
      >
        <span className="text-[10px] uppercase tracking-widest mb-1">Explore</span>
        <ChevronDown className="w-4 h-4 animate-bounce text-[#B7E61C]" />
      </a>
    </section>
  );
};
