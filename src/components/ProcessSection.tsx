import React, { useState } from 'react';
import { CheckCircle, ArrowRight, Compass, PencilRuler, Wrench, Cpu, HeadphonesIcon } from 'lucide-react';
import { PROCESS_STEPS } from '../config/business';

interface ProcessSectionProps {
  onOpenConsultation: () => void;
}

export const ProcessSection: React.FC<ProcessSectionProps> = ({ onOpenConsultation }) => {
  const [activeStepIndex, setActiveStepIndex] = useState<number>(0);
  const currentStep = PROCESS_STEPS[activeStepIndex];

  const getStepIcon = (index: number) => {
    switch (index) {
      case 0: return <Compass className="w-5 h-5 text-[#B7E61C]" />;
      case 1: return <PencilRuler className="w-5 h-5 text-[#B7E61C]" />;
      case 2: return <Wrench className="w-5 h-5 text-[#B7E61C]" />;
      case 3: return <Cpu className="w-5 h-5 text-[#B7E61C]" />;
      case 4: return <HeadphonesIcon className="w-5 h-5 text-[#B7E61C]" />;
      default: return null;
    }
  };

  return (
    <section className="py-24 bg-[#111315] relative overflow-hidden border-t border-[#1B1E20]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="flex items-center gap-2 text-xs font-semibold tracking-widest text-[#B7E61C] uppercase mb-3">
            <span className="w-1.5 h-1.5 rounded-full bg-[#B7E61C]" />
            <span>Methodology</span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white mb-6 text-balance">
            ENGINEERED PRECISION. <br />
            <span className="text-[#B7E61C]">FROM BLUEPRINT TO SUPPORT.</span>
          </h2>
          <p className="text-base sm:text-lg text-[#F5F7F2]/80 leading-relaxed font-light">
            A reliable smart property doesn't happen by accident. It is designed, pre-wired, and commissioned through a disciplined five-phase engineering process.
          </p>
        </div>

        {/* Five Step Process Navigation Strip */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 mb-10">
          {PROCESS_STEPS.map((step, idx) => {
            const isCurrent = activeStepIndex === idx;
            return (
              <button
                key={step.step}
                onClick={() => setActiveStepIndex(idx)}
                className={`p-4 rounded-xl border text-left transition-all duration-200 ${
                  isCurrent
                    ? 'bg-[#1B1E20] border-[#B7E61C] shadow-lg lime-glow-subtle'
                    : 'bg-[#16181A] border-[#2C3236] text-[#70756F] hover:border-[#70756F] hover:text-white'
                }`}
              >
                <div className="flex items-center justify-between mb-2">
                  <span className={`font-mono text-xs font-bold ${isCurrent ? 'text-[#B7E61C]' : 'text-[#70756F]'}`}>
                    STEP {step.step}
                  </span>
                  {getStepIcon(idx)}
                </div>
                <h3 className={`font-display text-sm sm:text-base font-bold tracking-tight ${isCurrent ? 'text-white' : 'text-[#F5F7F2]/80'}`}>
                  {step.title}
                </h3>
                <span className="text-[11px] text-[#70756F] line-clamp-1 mt-0.5">
                  {step.subtitle}
                </span>
              </button>
            );
          })}
        </div>

        {/* Selected Step Detailed Feature Card */}
        <div className="bg-[#1B1E20] border border-[#2C3236] rounded-2xl p-6 sm:p-10 relative overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            <div className="lg:col-span-7 space-y-4">
              <div className="flex items-center gap-3">
                <span className="px-3 py-1 bg-[#111315] border border-[#B7E61C]/40 text-[#B7E61C] font-mono text-xs font-bold rounded">
                  PHASE {currentStep.step}
                </span>
                <span className="text-xs font-mono text-[#70756F] uppercase tracking-wider">
                  {currentStep.subtitle}
                </span>
              </div>

              <h3 className="font-display text-2xl sm:text-3xl font-bold text-white">
                {currentStep.title} — {currentStep.subtitle}
              </h3>

              <p className="text-sm sm:text-base text-[#F5F7F2]/85 leading-relaxed font-light">
                {currentStep.description}
              </p>

              <div className="pt-4 border-t border-[#2C3236]/80">
                <div className="text-xs font-semibold text-white uppercase tracking-wider mb-3">
                  Key Milestones In This Phase:
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {currentStep.points.map((pt, pIdx) => (
                    <div key={pIdx} className="flex items-start gap-2.5 text-xs text-[#F5F7F2]/85">
                      <CheckCircle className="w-4 h-4 text-[#B7E61C] shrink-0 mt-0.5" />
                      <span>{pt}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Step Action / Timeline Callout */}
            <div className="lg:col-span-5 bg-[#111315] p-6 rounded-xl border border-[#2C3236] flex flex-col justify-between h-full">
              <div className="space-y-4 mb-6">
                <span className="text-xs font-mono text-[#B7E61C] uppercase block">Why Our Process Protects You</span>
                <h4 className="text-base font-bold text-white">
                  Zero Surprise Change Orders & Guaranteed Compatibility
                </h4>
                <p className="text-xs text-[#70756F] leading-relaxed">
                  By completing rigorous discovery and CAD schematics before any wire is pulled, we ensure that framers, electricians, and interior designers are in 100% alignment.
                </p>
              </div>

              <button
                onClick={onOpenConsultation}
                className="w-full inline-flex items-center justify-center gap-2 py-3.5 bg-[#B7E61C] hover:bg-[#C8F52A] text-[#111315] font-bold text-xs tracking-wider uppercase rounded-md transition-all lime-glow-subtle"
              >
                <span>Schedule Phase 01 Discovery</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
