import React from 'react';
import { Quote, CheckCircle2 } from 'lucide-react';
import { TESTIMONIALS_DATA } from '../config/business';

export const TestimonialsSection: React.FC = () => {
  return (
    <section className="py-24 bg-[#16181A] relative overflow-hidden border-t border-[#1B1E20]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="flex items-center gap-2 text-xs font-semibold tracking-widest text-[#B7E61C] uppercase mb-3">
            <Quote className="w-4 h-4 text-[#B7E61C]" />
            <span>Client & Trade Perspectives</span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl font-bold tracking-tight text-white mb-4">
            COLLABORATION WITH BUILDERS, <br />
            <span className="text-[#B7E61C]">ARCHITECTS & HOMEOWNERS</span>
          </h2>
          <p className="text-sm sm:text-base text-[#F5F7F2]/80 leading-relaxed font-light">
            Read what partners and homeowners say about our clean engineering, responsive support, and disciplined low-voltage execution.
          </p>
          <div className="mt-3 text-[11px] font-mono text-[#70756F]">
            [NOTICE: Below testimonials are sample editorial placeholders. Replace with verified client reviews before public launch]
          </div>
        </div>

        {/* Testimonials Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {TESTIMONIALS_DATA.map((t) => (
            <div
              key={t.id}
              className="bg-[#111315] border border-[#2C3236] rounded-2xl p-7 flex flex-col justify-between hover:border-[#B7E61C]/40 transition-colors"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <Quote className="w-6 h-6 text-[#B7E61C]/50" />
                  <span className="text-[10px] font-mono text-[#B7E61C] bg-[#1B1E20] px-2.5 py-0.5 rounded border border-[#2C3236]">
                    {t.verificationBadge}
                  </span>
                </div>

                <p className="text-sm text-[#F5F7F2]/85 leading-relaxed font-light mb-6 italic">
                  "{t.quote}"
                </p>
              </div>

              <div className="pt-4 border-t border-[#2C3236]">
                <div className="text-xs font-semibold text-white">
                  {t.clientRole}
                </div>
                <div className="text-[11px] text-[#70756F] mt-0.5">
                  {t.projectType}
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
