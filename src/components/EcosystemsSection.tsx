import React from 'react';
import { Layers, ShieldCheck, Check } from 'lucide-react';
import { COMPATIBLE_ECOSYSTEMS } from '../config/business';

export const EcosystemsSection: React.FC = () => {
  return (
    <section className="py-20 bg-[#16181A] relative overflow-hidden border-t border-[#1B1E20]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="flex items-center gap-2 text-xs font-semibold tracking-widest text-[#B7E61C] uppercase mb-3">
            <Layers className="w-4 h-4 text-[#B7E61C]" />
            <span>Open Architecture & Interoperability</span>
          </div>
          <h2 className="font-display text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-white mb-4">
            TECHNOLOGY WE WORK WITH
          </h2>
          <p className="text-sm sm:text-base text-[#F5F7F2]/80 leading-relaxed font-light">
            Compatible with many leading smart-home technologies, lighting buses, and open enterprise protocols. We engineer hardware-agnostic systems tailored to your preferred interface and performance requirements.
          </p>
          <span className="text-[11px] text-[#70756F] font-mono block mt-2">
            *Systems are designed using open standards and compatible protocols without proprietary lock-in.
          </span>
        </div>

        {/* Ecosystems Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
          {COMPATIBLE_ECOSYSTEMS.map((eco, idx) => (
            <div key={idx} className="bg-[#111315] border border-[#2C3236] rounded-xl p-5">
              <span className="text-xs font-mono text-[#B7E61C] uppercase tracking-wider block mb-3 pb-2 border-b border-[#2C3236]">
                {eco.category}
              </span>
              <ul className="space-y-2">
                {eco.items.map((item, iIdx) => (
                  <li key={iIdx} className="flex items-center gap-2 text-xs text-[#F5F7F2]/80">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#B7E61C]/80" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Integration Philosophy Callout */}
        <div className="mt-10 p-5 bg-[#1B1E20] border border-[#2C3236] rounded-xl flex flex-col sm:flex-row sm:items-center justify-between gap-4 text-xs text-[#70756F]">
          <div className="flex items-center gap-2 text-[#F5F7F2]/90">
            <ShieldCheck className="w-4 h-4 text-[#B7E61C]" />
            <span>Built to standards: Matter, Zigbee, DALI-2, Dante IP, and PoE Ethernet</span>
          </div>
          <span className="text-white/80">Independent Integration Partner · No Proprietary Traps</span>
        </div>

      </div>
    </section>
  );
};
