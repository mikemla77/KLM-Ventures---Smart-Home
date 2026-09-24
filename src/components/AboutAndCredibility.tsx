import React from 'react';
import { 
  ShieldCheck, 
  MapPin, 
  Award, 
  CheckCircle2, 
  FileCheck, 
  Hammer, 
  Users, 
  Phone,
  Building,
  HardHat
} from 'lucide-react';
import { BUSINESS_CONFIG } from '../config/business';
import { KLMLogo } from './KLMLogo';

interface AboutAndCredibilityProps {
  onOpenConsultation: () => void;
}

export const AboutAndCredibility: React.FC<AboutAndCredibilityProps> = ({ onOpenConsultation }) => {
  return (
    <section id="about" className="py-24 bg-[#111315] relative overflow-hidden border-t border-[#1B1E20]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-8 mb-16">
          <div className="max-w-3xl">
            <div className="flex items-center gap-2 text-xs font-semibold tracking-widest text-[#B7E61C] uppercase mb-3">
              <ShieldCheck className="w-4 h-4 text-[#B7E61C]" />
              <span>Company & Engineering Philosophy</span>
            </div>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white mb-6 text-balance">
              TECHNOLOGY. CRAFTSMANSHIP. <br />
              <span className="text-[#B7E61C]">INTEGRATION.</span>
            </h2>
            <p className="text-base sm:text-lg text-[#F5F7F2]/80 leading-relaxed font-light">
              {BUSINESS_CONFIG.companyName} is an architectural technology and low-voltage integration engineering practice serving modern residential estates and commercial environments. We bridge the gap between architectural blueprints and smart living.
            </p>
          </div>

          <div className="hidden lg:flex flex-col items-center justify-center p-6 bg-[#1B1E20] border border-[#2C3236] rounded-2xl flex-shrink-0">
            <KLMLogo variant="original" size="xl" showGlow={true} />
            <span className="text-[10px] font-mono uppercase tracking-widest text-[#B7E61C] mt-3 font-semibold">
              KLM Ventures · Licensed & Insured
            </span>
          </div>
        </div>

        {/* 4 Pillars of Craftsmanship */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          
          <div className="p-6 bg-[#1B1E20] border border-[#2C3236] rounded-xl">
            <HardHat className="w-5 h-5 text-[#B7E61C] mb-3" />
            <h3 className="font-semibold text-white text-base mb-2">Construction Coordination</h3>
            <p className="text-xs text-[#F5F7F2]/75 leading-relaxed">
              We work seamlessly alongside general contractors, framers, electricians, and interior designers from rough-in to final commissioning.
            </p>
          </div>

          <div className="p-6 bg-[#1B1E20] border border-[#2C3236] rounded-xl">
            <Hammer className="w-5 h-5 text-[#B7E61C] mb-3" />
            <h3 className="font-semibold text-white text-base mb-2">Clean Rack Craftsmanship</h3>
            <p className="text-xs text-[#F5F7F2]/75 leading-relaxed">
              Every wire is labeled, comb-dressed, and terminated with surgical standards. Our equipment racks look as refined as the architecture they power.
            </p>
          </div>

          <div className="p-6 bg-[#1B1E20] border border-[#2C3236] rounded-xl">
            <Building className="w-5 h-5 text-[#B7E61C] mb-3" />
            <h3 className="font-semibold text-white text-base mb-2">Single Cohesive System</h3>
            <p className="text-xs text-[#F5F7F2]/75 leading-relaxed">
              We eliminate app clutter. Lighting, shading, security, climate, and audio are brought into one responsive, elegant interface.
            </p>
          </div>

          <div className="p-6 bg-[#1B1E20] border border-[#2C3236] rounded-xl">
            <Users className="w-5 h-5 text-[#B7E61C] mb-3" />
            <h3 className="font-semibold text-white text-base mb-2">Long-Term Partnership</h3>
            <p className="text-xs text-[#F5F7F2]/75 leading-relaxed">
              We provide proactive system maintenance, firmware updates, and expansions as your family or commercial facility evolves.
            </p>
          </div>

        </div>

        {/* Verification & Credibility Notice Box (Clearly marked editable placeholders) */}
        <div className="bg-[#16181A] border border-[#2C3236] rounded-2xl p-6 sm:p-8 mb-16">
          <div className="flex items-center gap-2 mb-4 text-xs font-mono text-[#B7E61C] uppercase tracking-wider">
            <FileCheck className="w-4 h-4 text-[#B7E61C]" />
            <span>Licensing, Credentials & Business Verification</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 text-xs">
            <div className="p-4 bg-[#111315] rounded-xl border border-[#2C3236]">
              <span className="text-[#70756F] font-mono block text-[10px] uppercase">LICENSE & BONDING</span>
              <span className="text-white font-semibold mt-1 block">{BUSINESS_CONFIG.licensePlaceholder}</span>
              <span className="text-[10px] text-[#70756F] block mt-1">State low-voltage contractor compliance</span>
            </div>

            <div className="p-4 bg-[#111315] rounded-xl border border-[#2C3236]">
              <span className="text-[#70756F] font-mono block text-[10px] uppercase">COMMERCIAL LIABILITY</span>
              <span className="text-white font-semibold mt-1 block">{BUSINESS_CONFIG.insurancePlaceholder}</span>
              <span className="text-[10px] text-[#70756F] block mt-1">Comprehensive policy for estates and job sites</span>
            </div>

            <div className="p-4 bg-[#111315] rounded-xl border border-[#2C3236]">
              <span className="text-[#70756F] font-mono block text-[10px] uppercase">YEARS & VOLUME</span>
              <span className="text-white font-semibold mt-1 block">{BUSINESS_CONFIG.yearsExperience}</span>
              <span className="text-[#B7E61C] font-mono block mt-1">{BUSINESS_CONFIG.projectsCompleted}</span>
            </div>
          </div>

          <div className="mt-4 pt-4 border-t border-[#2C3236] flex flex-wrap items-center justify-between text-[11px] text-[#70756F]">
            <span>Business entity verification: {BUSINESS_CONFIG.companyName}</span>
            <span>Certifications subject to jurisdictional verification before contracts</span>
          </div>
        </div>

        {/* Service Area Section */}
        <div className="bg-[#1B1E20] border border-[#2C3236] rounded-2xl p-6 sm:p-8">
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
            <div className="max-w-xl">
              <div className="flex items-center gap-2 text-xs font-semibold tracking-widest text-[#B7E61C] uppercase mb-2">
                <MapPin className="w-4 h-4 text-[#B7E61C]" />
                <span>Geographic Coverage</span>
              </div>
              <h3 className="font-display text-2xl font-bold text-white mb-2">
                Serving {BUSINESS_CONFIG.serviceArea}
              </h3>
              <p className="text-xs text-[#F5F7F2]/80 leading-relaxed font-light">
                We design and deploy systems throughout our regional coverage area. Our installation vans are equipped for rapid dispatch and on-site builder coordination.
              </p>
            </div>

            {/* Editable Regional Coverage Cities */}
            <div className="flex flex-wrap gap-2 max-w-lg">
              {BUSINESS_CONFIG.serviceCities.map((city, idx) => (
                <div key={idx} className="flex items-center gap-1.5 px-3 py-1.5 bg-[#111315] border border-[#2C3236] rounded-lg text-xs text-white">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#B7E61C]" />
                  <span>{city}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
