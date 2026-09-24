import React from 'react';
import { ArrowRight, Phone, Sparkles } from 'lucide-react';
import { BUSINESS_CONFIG } from '../config/business';

interface BottomCTAProps {
  onOpenConsultation: () => void;
}

export const BottomCTA: React.FC<BottomCTAProps> = ({ onOpenConsultation }) => {
  return (
    <section className="py-24 bg-[#111315] relative overflow-hidden border-t border-[#1B1E20]">
      {/* Blueprint Grid & Lime Radial Wash */}
      <div className="absolute inset-0 bg-blueprint-grid opacity-30 pointer-events-none" />
      <div 
        aria-hidden="true" 
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-[#B7E61C]/10 rounded-full blur-3xl pointer-events-none" 
      />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        
        {/* Kicker */}
        <div className="inline-flex items-center gap-2 text-xs font-semibold tracking-widest text-[#B7E61C] uppercase mb-4">
          <span className="w-1.5 h-1.5 rounded-full bg-[#B7E61C]" />
          <span>Take The First Step</span>
        </div>

        {/* Big Architectural Headline */}
        <h2 className="font-display text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white mb-6 text-balance">
          READY TO MAKE YOUR SPACE <br />
          <span className="text-[#B7E61C]">SMARTER?</span>
        </h2>

        {/* Supporting Copy */}
        <p className="text-base sm:text-lg text-[#F5F7F2]/85 max-w-2xl mx-auto leading-relaxed mb-10 font-light">
          Tell us what you want your home or building to do. We'll help you plan the technology, infrastructure, and automation to make it happen without guesswork.
        </p>

        {/* Actions */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <button
            onClick={onOpenConsultation}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 bg-[#B7E61C] hover:bg-[#C8F52A] text-[#111315] font-bold text-sm tracking-wider uppercase rounded-md transition-all duration-200 transform hover:-translate-y-0.5 lime-glow shadow-xl"
          >
            <span>Start Your Project</span>
            <ArrowRight className="w-4 h-4 text-[#111315]" />
          </button>

          <a
            href={`tel:${BUSINESS_CONFIG.phone}`}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 bg-[#1B1E20] hover:bg-[#24292C] text-white border border-[#2C3236] hover:border-[#B7E61C] text-sm font-semibold tracking-wider uppercase rounded-md transition-all"
          >
            <Phone className="w-4 h-4 text-[#B7E61C]" />
            <span>Call Now: {BUSINESS_CONFIG.displayPhone}</span>
          </a>
        </div>

        {/* Trust Badges */}
        <div className="mt-12 pt-8 border-t border-[#2C3236]/60 flex flex-wrap items-center justify-center gap-x-8 gap-y-3 text-xs text-[#70756F]">
          <span>Pre-Wire & Rough-In Walkthroughs</span>
          <span>·</span>
          <span>Licensed & Insured Low-Voltage</span>
          <span>·</span>
          <span>Dedicated Post-Installation Support</span>
        </div>

      </div>
    </section>
  );
};
