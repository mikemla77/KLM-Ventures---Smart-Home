import React, { useState } from 'react';
import { 
  Home, 
  Lightbulb, 
  Camera, 
  ShieldAlert, 
  Workflow, 
  Wifi, 
  Mic2, 
  Building2, 
  ArrowRight, 
  Check, 
  ChevronDown,
  Layers,
  Sparkles
} from 'lucide-react';
import { SERVICES_LIST, ServiceDetail } from '../config/business';

interface ServicesGridProps {
  onOpenConsultation: () => void;
  onSelectServiceForInquiry?: (serviceName: string) => void;
}

export const ServicesGrid: React.FC<ServicesGridProps> = ({ onOpenConsultation, onSelectServiceForInquiry }) => {
  const [expandedServiceId, setExpandedServiceId] = useState<string | null>('smart-home');

  const getServiceIcon = (iconName: string) => {
    switch (iconName) {
      case 'Home': return <Home className="w-5 h-5" />;
      case 'Lightbulb': return <Lightbulb className="w-5 h-5" />;
      case 'Camera': return <Camera className="w-5 h-5" />;
      case 'ShieldAlert': return <ShieldAlert className="w-5 h-5" />;
      case 'Workflow': return <Workflow className="w-5 h-5" />;
      case 'Wifi': return <Wifi className="w-5 h-5" />;
      case 'Mic2': return <Mic2 className="w-5 h-5" />;
      case 'Building2': return <Building2 className="w-5 h-5" />;
      default: return <Layers className="w-5 h-5" />;
    }
  };

  const toggleExpand = (id: string) => {
    setExpandedServiceId(expandedServiceId === id ? null : id);
  };

  return (
    <section id="services" className="py-24 bg-[#111315] relative overflow-hidden border-t border-[#1B1E20]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div className="max-w-2xl">
            <div className="flex items-center gap-2 text-xs font-semibold tracking-widest text-[#B7E61C] uppercase mb-3">
              <span className="w-1.5 h-1.5 rounded-full bg-[#B7E61C]" />
              <span>Full-Stack Capabilities</span>
            </div>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white mb-4 text-balance">
              INTEGRATED DISCIPLINES. <br />
              <span className="text-[#B7E61C]">FLAWLESS EXECUTION.</span>
            </h2>
            <p className="text-base text-[#F5F7F2]/80 leading-relaxed font-light">
              From our flagship whole-property smart home integration to architectural lighting, 4K security, and commercial data cabling, every discipline is engineered to work in harmony.
            </p>
          </div>

          <button
            onClick={onOpenConsultation}
            className="inline-flex items-center gap-2 px-5 py-3 bg-[#1B1E20] hover:bg-[#24292C] text-white border border-[#2C3236] hover:border-[#B7E61C] text-xs font-semibold uppercase tracking-wider rounded-md transition-colors shrink-0"
          >
            <span>Request A Custom Proposal</span>
            <ArrowRight className="w-4 h-4 text-[#B7E61C]" />
          </button>
        </div>

        {/* Services Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {SERVICES_LIST.map((service) => {
            const isExpanded = expandedServiceId === service.id;
            return (
              <div
                key={service.id}
                className={`rounded-xl border transition-all duration-300 flex flex-col justify-between ${
                  service.isPrimary
                    ? 'lg:col-span-2 bg-[#1B1E20] border-[#B7E61C]/50 lime-glow-subtle'
                    : 'bg-[#16181A] border-[#2C3236] hover:border-[#70756F]'
                }`}
              >
                <div className="p-6 sm:p-7">
                  {/* Top Bar inside card */}
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-xs font-mono text-[#B7E61C]">
                      SERVICE {service.number}
                    </span>
                    <span className="text-[11px] font-mono text-[#F5F7F2]/60 uppercase tracking-wider">
                      {service.badge}
                    </span>
                  </div>

                  {/* Icon & Title */}
                  <div className="flex items-start gap-3.5 mb-3">
                    <div className={`p-2.5 rounded-lg shrink-0 ${
                      service.isPrimary ? 'bg-[#111315] text-[#B7E61C] border border-[#B7E61C]/40' : 'bg-[#111315] text-[#B7E61C] border border-[#2C3236]'
                    }`}>
                      {getServiceIcon(service.icon)}
                    </div>
                    <div>
                      <h3 className={`font-display font-bold text-white tracking-tight ${
                        service.isPrimary ? 'text-xl sm:text-2xl' : 'text-lg'
                      }`}>
                        {service.title}
                      </h3>
                    </div>
                  </div>

                  {/* Short Description */}
                  <p className="text-xs sm:text-sm text-[#F5F7F2]/80 leading-relaxed mb-5 font-light">
                    {service.shortDescription}
                  </p>

                  {/* Expandable Deliverables List */}
                  {isExpanded && (
                    <div className="pt-4 border-t border-[#2C3236] space-y-3 mb-5 animate-in fade-in duration-200">
                      <div className="text-[11px] font-mono text-[#70756F] uppercase tracking-wider">
                        Included Scope:
                      </div>
                      <div className="space-y-2">
                        {service.deliverables.map((item, idx) => (
                          <div key={idx} className="flex items-start gap-2 text-xs text-[#F5F7F2]/85">
                            <Check className="w-3.5 h-3.5 text-[#B7E61C] shrink-0 mt-0.5" />
                            <span>{item}</span>
                          </div>
                        ))}
                      </div>

                      {/* Technical Specs */}
                      <div className="pt-3 border-t border-[#2C3236]/60 flex flex-wrap gap-2 text-[10px] font-mono text-[#B7E61C]">
                        {service.specs.map((spec, sIdx) => (
                          <span key={sIdx} className="bg-[#111315] px-2 py-1 rounded border border-[#2C3236]">
                            {spec}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}
                </div>

                {/* Footer Controls in Card */}
                <div className="p-4 px-6 sm:px-7 bg-[#111315]/60 border-t border-[#2C3236] flex items-center justify-between">
                  <button
                    onClick={() => toggleExpand(service.id)}
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#F5F7F2]/80 hover:text-[#B7E61C] transition-colors"
                  >
                    <span>{isExpanded ? 'Hide Specifications' : 'View Specifications'}</span>
                    <ChevronDown className={`w-3.5 h-3.5 transition-transform ${isExpanded ? 'rotate-180' : ''}`} />
                  </button>

                  <button
                    onClick={() => {
                      if (onSelectServiceForInquiry) onSelectServiceForInquiry(service.title);
                      onOpenConsultation();
                    }}
                    className="p-1.5 text-[#70756F] hover:text-[#B7E61C] rounded transition-colors"
                    title={`Consult on ${service.title}`}
                  >
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
