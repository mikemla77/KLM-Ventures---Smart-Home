import React from 'react';
import { 
  Compass, 
  Workflow, 
  Layers, 
  ShieldCheck, 
  FileText, 
  CheckCircle2, 
  HardHat,
  ArrowRight,
  Zap,
  Server
} from 'lucide-react';
import { IMAGES } from '../config/business';

interface ConstructionBlueprintProps {
  onOpenConsultation: () => void;
}

export const ConstructionBlueprint: React.FC<ConstructionBlueprintProps> = ({ onOpenConsultation }) => {
  return (
    <section id="infrastructure" className="py-24 bg-[#111315] relative overflow-hidden border-t border-[#1B1E20]">
      {/* Blueprint Grid Background Pattern */}
      <div className="absolute inset-0 bg-blueprint-grid opacity-30 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="flex items-center gap-2 text-xs font-semibold tracking-widest text-[#B7E61C] uppercase mb-3">
            <Compass className="w-4 h-4 text-[#B7E61C]" />
            <span>Pre-Construction & Engineering</span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white mb-6 text-balance">
            THE BEST SMART HOME <br />
            <span className="text-[#B7E61C]">STARTS BEHIND THE WALLS.</span>
          </h2>
          <p className="text-base sm:text-lg text-[#F5F7F2]/80 leading-relaxed font-light">
            We partner with homeowners, custom home builders, general contractors, interior designers, and architects to design and install the low-voltage nervous system long before drywall is hung. Planning early avoids expensive retrofits, drywall cutting, and frustrating wireless dead zones.
          </p>
        </div>

        {/* Blueprint CAD Schematic Container */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center mb-16">
          
          {/* Blueprint Visual & Image Callout (7 cols) */}
          <div className="lg:col-span-7 bg-[#16181A] border border-[#2C3236] rounded-2xl overflow-hidden relative">
            
            {/* Top CAD Header Bar */}
            <div className="px-6 py-3.5 bg-[#111315] border-b border-[#2C3236] flex items-center justify-between text-xs font-mono text-[#70756F]">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#B7E61C]" />
                <span className="text-white/90">SCHEMATIC: LOW-VOLTAGE INFRASTRUCTURE</span>
              </div>
              <span className="text-[#B7E61C]">SCALE: 1/4" = 1'-0" · REV 3</span>
            </div>

            {/* Content: Image & Blueprint Callouts */}
            <div className="relative min-h-[380px] sm:min-h-[440px] flex items-end">
              <img
                src={IMAGES.lowVoltageRack}
                alt="Precision dressed low-voltage equipment rack with structured Cat6A cabling and managed network switches"
                className="w-full h-full object-cover object-center absolute inset-0 filter brightness-90 contrast-110"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#111315] via-[#111315]/50 to-transparent" />

              {/* Architectural Overlay Annotation Cards */}
              <div className="relative z-10 p-6 sm:p-8 w-full space-y-3">
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  <div className="bg-[#111315]/90 backdrop-blur-md border border-[#2C3236] p-3 rounded-lg">
                    <span className="text-[10px] font-mono text-[#B7E61C] block uppercase">01 / CONDUIT RUNS</span>
                    <span className="text-xs font-semibold text-white">Sleeves to Attic & TV Niches</span>
                  </div>
                  <div className="bg-[#111315]/90 backdrop-blur-md border border-[#2C3236] p-3 rounded-lg">
                    <span className="text-[10px] font-mono text-[#B7E61C] block uppercase">02 / HOME RUN</span>
                    <span className="text-xs font-semibold text-white">Dedicated AV/Network Closet</span>
                  </div>
                  <div className="bg-[#111315]/90 backdrop-blur-md border border-[#2C3236] p-3 rounded-lg">
                    <span className="text-[10px] font-mono text-[#B7E61C] block uppercase">03 / LABELING</span>
                    <span className="text-xs font-semibold text-white">Fluke Certified & Mapped Drops</span>
                  </div>
                </div>
              </div>
            </div>

          </div>

          {/* Value Props & Trade Coordination (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            
            <div className="p-6 bg-[#1B1E20] border border-[#2C3236] rounded-xl">
              <div className="flex items-center gap-3 mb-3">
                <HardHat className="w-5 h-5 text-[#B7E61C]" />
                <h3 className="font-semibold text-white text-base">Trade & Builder Coordination</h3>
              </div>
              <p className="text-xs text-[#F5F7F2]/80 leading-relaxed font-light">
                We speak the language of framing, electrical rough-ins, and HVAC plenums. We attend pre-wire jobsite walkthroughs with your general contractor and provide stamped low-voltage plan sets.
              </p>
            </div>

            <div className="p-6 bg-[#1B1E20] border border-[#2C3236] rounded-xl">
              <div className="flex items-center gap-3 mb-3">
                <Server className="w-5 h-5 text-[#B7E61C]" />
                <h3 className="font-semibold text-white text-base">Clean Equipment Rack Architecture</h3>
              </div>
              <p className="text-xs text-[#F5F7F2]/80 leading-relaxed font-light">
                Instead of scattered cable boxes and tangled wires under TVs, all processing engines, amplifiers, and network gear live in a centralized, thermally managed equipment rack.
              </p>
            </div>

            <div className="p-6 bg-[#1B1E20] border border-[#2C3236] rounded-xl">
              <div className="flex items-center gap-3 mb-3">
                <Workflow className="w-5 h-5 text-[#B7E61C]" />
                <h3 className="font-semibold text-white text-base">Future-Proof Flexibility</h3>
              </div>
              <p className="text-xs text-[#F5F7F2]/80 leading-relaxed font-light">
                Technology inevitably evolves over decades. By placing low-voltage conduit pathways and universal cabling behind baseboards and walls, your home can adopt tomorrow's standards without demolition.
              </p>
            </div>

            <button
              onClick={onOpenConsultation}
              className="w-full inline-flex items-center justify-center gap-3 py-4 bg-[#B7E61C] hover:bg-[#C8F52A] text-[#111315] font-bold text-xs tracking-wider uppercase rounded-md transition-all lime-glow"
            >
              <span>Submit Architectural Blueprints For Review</span>
              <ArrowRight className="w-4 h-4" />
            </button>

          </div>

        </div>

        {/* 6 Key Pre-Construction Deliverables */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 pt-6 border-t border-[#2C3236]">
          {[
            { title: "Pre-Wire Walkthrough", desc: "Before insulation" },
            { title: "Structured Cat6A / Fiber", desc: "Certified 10Gbps" },
            { title: "Motorized Shade Pockets", desc: "Framed into headers" },
            { title: "Discrete Camera Drops", desc: "Soffit & perimeter" },
            { title: "Keypad Backboxes", desc: "Consistent wall heights" },
            { title: "Thermal Management", desc: "Ventilated rack closets" }
          ].map((item, idx) => (
            <div key={idx} className="p-4 bg-[#16181A] border border-[#2C3236] rounded-lg">
              <span className="text-[10px] font-mono text-[#B7E61C] block mb-1">SPEC 0{idx + 1}</span>
              <h4 className="text-xs font-bold text-white mb-0.5">{item.title}</h4>
              <span className="text-[11px] text-[#70756F]">{item.desc}</span>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
