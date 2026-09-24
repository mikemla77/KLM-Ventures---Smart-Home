import React, { useState } from 'react';
import { 
  Home, 
  Building2, 
  ArrowRight, 
  CheckCircle2, 
  ShieldCheck, 
  Lightbulb, 
  Wifi, 
  Volume2, 
  Cpu, 
  Key,
  Users
} from 'lucide-react';
import { IMAGES } from '../config/business';

interface ResidentialCommercialProps {
  onOpenConsultation: (type?: string) => void;
}

export const ResidentialCommercial: React.FC<ResidentialCommercialProps> = ({ onOpenConsultation }) => {
  const [activeSegment, setActiveSegment] = useState<'residential' | 'commercial'>('residential');

  return (
    <section id="residential" className="py-24 bg-[#111315] relative overflow-hidden border-t border-[#1B1E20]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Segment Toggle Bar */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6 pb-8 border-b border-[#2C3236] mb-16">
          <div>
            <div className="flex items-center gap-2 text-xs font-semibold tracking-widest text-[#B7E61C] uppercase mb-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#B7E61C]" />
              <span>Tailored Environments</span>
            </div>
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-white tracking-tight">
              Residential & Commercial Capabilities
            </h2>
          </div>

          {/* Interactive Segment Switcher */}
          <div className="inline-flex p-1.5 bg-[#1B1E20] border border-[#2C3236] rounded-xl self-start sm:self-auto">
            <button
              onClick={() => setActiveSegment('residential')}
              className={`flex items-center gap-2 px-5 py-2.5 rounded-lg text-xs font-bold uppercase tracking-wider transition-all duration-200 ${
                activeSegment === 'residential'
                  ? 'bg-[#B7E61C] text-[#111315] shadow-md lime-glow-subtle'
                  : 'text-[#F5F7F2]/70 hover:text-white'
              }`}
            >
              <Home className="w-4 h-4" />
              <span>Residential Living</span>
            </button>

            <button
              onClick={() => setActiveSegment('commercial')}
              className={`flex items-center gap-2 px-5 py-2.5 rounded-lg text-xs font-bold uppercase tracking-wider transition-all duration-200 ${
                activeSegment === 'commercial'
                  ? 'bg-[#B7E61C] text-[#111315] shadow-md lime-glow-subtle'
                  : 'text-[#F5F7F2]/70 hover:text-white'
              }`}
            >
              <Building2 className="w-4 h-4" />
              <span>Commercial Facilities</span>
            </button>
          </div>
        </div>

        {/* RESIDENTIAL VIEW */}
        {activeSegment === 'residential' && (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center animate-in fade-in duration-300">
            
            {/* Visual Column */}
            <div className="lg:col-span-6 relative rounded-2xl overflow-hidden border border-[#2C3236] bg-[#16181A]">
              <img
                src={IMAGES.smartHomeLiving}
                alt="Modern luxury residence living room with integrated flush smart touch panel and concealed architectural speakers"
                className="w-full h-[440px] object-cover object-center"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#111315] via-transparent to-transparent" />
              
              <div className="absolute bottom-6 left-6 right-6 p-4 bg-[#111315]/90 backdrop-blur-md rounded-xl border border-[#2C3236] flex items-center justify-between">
                <div>
                  <span className="text-[10px] font-mono text-[#B7E61C] uppercase block">Living Experience</span>
                  <span className="text-xs font-semibold text-white">Discreet Luxury, Zero Clutter</span>
                </div>
                <span className="text-xs text-[#70756F] font-mono">1 App · 1 Keypad</span>
              </div>
            </div>

            {/* Content Column */}
            <div className="lg:col-span-6 space-y-6">
              <div>
                <span className="text-xs font-mono text-[#B7E61C] uppercase tracking-wider block mb-2">Residential Specialty</span>
                <h3 className="font-display text-2xl sm:text-3xl lg:text-4xl font-bold text-white tracking-tight leading-tight">
                  TECHNOLOGY DESIGNED AROUND <br />
                  <span className="text-[#B7E61C]">THE WAY YOU LIVE.</span>
                </h3>
              </div>

              <p className="text-sm sm:text-base text-[#F5F7F2]/80 leading-relaxed font-light">
                Whether breaking ground on an estate, renovating an architectural gem, or upgrading an existing home, we craft invisible technology systems tailored to how your family entertains, relaxes, and works.
              </p>

              {/* Property Types Handled */}
              <div className="p-4 bg-[#1B1E20] border border-[#2C3236] rounded-xl">
                <span className="text-xs font-mono text-[#70756F] uppercase tracking-wider block mb-2">Property Typologies</span>
                <div className="flex flex-wrap gap-2 text-xs text-white">
                  {["New Construction Estates", "Complete Home Remodels", "Modern Architectural Villas", "ADUs & Guest Houses", "Executive Home Offices", "Outdoor Patios & Pools"].map((item, idx) => (
                    <span key={idx} className="bg-[#111315] px-3 py-1.5 rounded-md border border-[#2C3236]">
                      {item}
                    </span>
                  ))}
                </div>
              </div>

              {/* Highlight Pillars */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                {[
                  "Architectural smart lighting & warm-dim scenes",
                  "Discreet perimeter security & smart deadbolts",
                  "4K low-profile cameras with local private NVR",
                  "Enterprise wall-to-wall Wi-Fi coverage",
                  "Multi-zone audio with invisible plaster-in speakers",
                  "Automated blackout & sheer motorized shades"
                ].map((pt, pIdx) => (
                  <div key={pIdx} className="flex items-start gap-2.5 text-xs text-[#F5F7F2]/85">
                    <CheckCircle2 className="w-4 h-4 text-[#B7E61C] shrink-0 mt-0.5" />
                    <span>{pt}</span>
                  </div>
                ))}
              </div>

              <div className="pt-4">
                <button
                  onClick={() => onOpenConsultation('Residential Smart Home')}
                  className="inline-flex items-center gap-3 px-6 py-4 bg-[#B7E61C] hover:bg-[#C8F52A] text-[#111315] font-bold text-xs tracking-wider uppercase rounded-md transition-all lime-glow"
                >
                  <span>Plan Your Smart Home</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>

          </div>
        )}

        {/* COMMERCIAL VIEW */}
        {activeSegment === 'commercial' && (
          <div id="commercial" className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center animate-in fade-in duration-300">
            
            {/* Visual Column */}
            <div className="lg:col-span-6 relative rounded-2xl overflow-hidden border border-[#2C3236] bg-[#16181A]">
              <img
                src={IMAGES.lowVoltageRack}
                alt="Commercial structured cabling rack and network switches for modern office and retail facilities"
                className="w-full h-[440px] object-cover object-center"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#111315] via-transparent to-transparent" />
              
              <div className="absolute bottom-6 left-6 right-6 p-4 bg-[#111315]/90 backdrop-blur-md rounded-xl border border-[#2C3236] flex items-center justify-between">
                <div>
                  <span className="text-[10px] font-mono text-[#B7E61C] uppercase block">Commercial Infrastructure</span>
                  <span className="text-xs font-semibold text-white">High-Density Scalability</span>
                </div>
                <span className="text-xs text-[#70756F] font-mono">OSHA · Low-Voltage Certified</span>
              </div>
            </div>

            {/* Content Column */}
            <div className="lg:col-span-6 space-y-6">
              <div>
                <span className="text-xs font-mono text-[#B7E61C] uppercase tracking-wider block mb-2">Commercial Discipline</span>
                <h3 className="font-display text-2xl sm:text-3xl lg:text-4xl font-bold text-white tracking-tight leading-tight">
                  SMARTER BUILDINGS. <br />
                  <span className="text-[#B7E61C]">BETTER CONTROL.</span>
                </h3>
              </div>

              <p className="text-sm sm:text-base text-[#F5F7F2]/80 leading-relaxed font-light">
                We engineer scalable building intelligence for enterprise offices, retail showrooms, restaurants, and multi-family developments. Reduce operational energy waste, grant role-based access, and protect your assets.
              </p>

              {/* Commercial Typologies */}
              <div className="p-4 bg-[#1B1E20] border border-[#2C3236] rounded-xl">
                <span className="text-xs font-mono text-[#70756F] uppercase tracking-wider block mb-2">Facilities We Serve</span>
                <div className="flex flex-wrap gap-2 text-xs text-white">
                  {["Corporate Offices", "Boutique Retail", "Fine Dining & Bars", "Multi-Family Properties", "Property Management", "Commercial Shell & Fit-outs"].map((item, idx) => (
                    <span key={idx} className="bg-[#111315] px-3 py-1.5 rounded-md border border-[#2C3236]">
                      {item}
                    </span>
                  ))}
                </div>
              </div>

              {/* Commercial Services */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                {[
                  "Commercial access control & keycard/biometric fobs",
                  "PoE surveillance cameras with audit logging",
                  "Title 24 & ASHRAE energy-compliant lighting schedules",
                  "Structured Cat6A data drops & fiber backbones",
                  "Boardroom video conferencing & motorized displays",
                  "Multi-site management from a centralized dashboard"
                ].map((pt, pIdx) => (
                  <div key={pIdx} className="flex items-start gap-2.5 text-xs text-[#F5F7F2]/85">
                    <CheckCircle2 className="w-4 h-4 text-[#B7E61C] shrink-0 mt-0.5" />
                    <span>{pt}</span>
                  </div>
                ))}
              </div>

              <div className="pt-4">
                <button
                  onClick={() => onOpenConsultation('Commercial Building Integration')}
                  className="inline-flex items-center gap-3 px-6 py-4 bg-[#B7E61C] hover:bg-[#C8F52A] text-[#111315] font-bold text-xs tracking-wider uppercase rounded-md transition-all lime-glow"
                >
                  <span>Discuss Your Commercial Project</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>

          </div>
        )}

      </div>
    </section>
  );
};
