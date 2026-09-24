import React from 'react';
import { Phone, Calendar } from 'lucide-react';
import { BUSINESS_CONFIG } from '../config/business';
import { KLMMonogramMark } from './KLMLogo';

interface MobileStickyBarProps {
  onOpenConsultation: () => void;
}

export const MobileStickyBar: React.FC<MobileStickyBarProps> = ({ onOpenConsultation }) => {
  return (
    <div className="sm:hidden fixed bottom-0 left-0 right-0 z-40 bg-[#111315]/95 backdrop-blur-md border-t border-[#2C3236] px-4 py-2.5 shadow-2xl">
      <div className="flex items-center gap-2 max-w-md mx-auto">
        <a
          href={`tel:${BUSINESS_CONFIG.phone}`}
          className="flex-1 inline-flex items-center justify-center gap-1.5 py-2.5 px-3 bg-[#1B1E20] border border-[#2C3236] text-[#F5F7F2] rounded-md text-xs font-semibold uppercase tracking-wider transition-colors active:bg-[#24292C]"
          aria-label={`Call ${BUSINESS_CONFIG.shortName}`}
        >
          <Phone className="w-3.5 h-3.5 text-[#B7E61C]" />
          <span>Call Now</span>
        </a>

        <button
          onClick={onOpenConsultation}
          className="flex-[2] inline-flex items-center justify-center gap-2 py-2.5 px-4 bg-[#B7E61C] active:bg-[#C8F52A] text-[#111315] font-bold text-xs uppercase tracking-wider rounded-md transition-colors lime-glow-subtle shadow-md"
        >
          <KLMMonogramMark className="w-4 h-4" />
          <span>Consultation</span>
        </button>
      </div>
    </div>
  );
};
