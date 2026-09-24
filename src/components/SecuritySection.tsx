import React, { useState } from 'react';
import { 
  ShieldCheck, 
  Camera, 
  Lock, 
  BellRing, 
  Radio, 
  Smartphone, 
  KeyRound, 
  Eye, 
  HardDrive,
  CheckCircle2,
  ArrowRight,
  Sparkles
} from 'lucide-react';

interface SecuritySectionProps {
  onOpenConsultation: () => void;
}

export const SecuritySection: React.FC<SecuritySectionProps> = ({ onOpenConsultation }) => {
  const [activeTab, setActiveTab] = useState<'surveillance' | 'perimeter' | 'access'>('surveillance');

  return (
    <section id="security" className="py-24 bg-[#111315] relative overflow-hidden border-t border-[#1B1E20]">
      {/* Background Grid */}
      <div className="absolute inset-0 bg-dot-grid opacity-20 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="flex items-center gap-2 text-xs font-semibold tracking-widest text-[#B7E61C] uppercase mb-3">
            <span className="w-1.5 h-1.5 rounded-full bg-[#B7E61C]" />
            <span>Unified Defense & Surveillance</span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white mb-6 text-balance">
            SEE MORE. KNOW MORE. <br />
            <span className="text-[#B7E61C]">CONTROL MORE.</span>
          </h2>
          <p className="text-base sm:text-lg text-[#F5F7F2]/80 leading-relaxed font-light">
            Modern security is more than standalone cameras. We integrate optical sensors, concealed perimeter contacts, architectural access locks, ambient security lighting, and instant encrypted alerts into a single cohesive defense experience.
          </p>
        </div>

        {/* Feature Highlights Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          
          <div className="p-6 bg-[#1B1E20] border border-[#2C3236] rounded-xl hover:border-[#B7E61C]/50 transition-colors">
            <div className="p-2.5 bg-[#111315] w-fit rounded-lg border border-[#2C3236] mb-4">
              <Camera className="w-5 h-5 text-[#B7E61C]" />
            </div>
            <h3 className="font-semibold text-white text-base mb-2">Remote 4K Camera Access</h3>
            <p className="text-xs text-[#F5F7F2]/75 leading-relaxed">
              Sub-second live video streams and event scrubbing on phone, tablet, and dedicated wall touchscreens without cloud latency.
            </p>
          </div>

          <div className="p-6 bg-[#1B1E20] border border-[#2C3236] rounded-xl hover:border-[#B7E61C]/50 transition-colors">
            <div className="p-2.5 bg-[#111315] w-fit rounded-lg border border-[#2C3236] mb-4">
              <HardDrive className="w-5 h-5 text-[#B7E61C]" />
            </div>
            <h3 className="font-semibold text-white text-base mb-2">Private On-Prem Encryption</h3>
            <p className="text-xs text-[#F5F7F2]/75 leading-relaxed">
              Multi-terabyte local NVR storage keeps your personal footage completely inside your property, with zero required cloud subscriptions.
            </p>
          </div>

          <div className="p-6 bg-[#1B1E20] border border-[#2C3236] rounded-xl hover:border-[#B7E61C]/50 transition-colors">
            <div className="p-2.5 bg-[#111315] w-fit rounded-lg border border-[#2C3236] mb-4">
              <KeyRound className="w-5 h-5 text-[#B7E61C]" />
            </div>
            <h3 className="font-semibold text-white text-base mb-2">Smart Locks & Access Control</h3>
            <p className="text-xs text-[#F5F7F2]/75 leading-relaxed">
              Discreet motorized deadbolts, biometric readers, and temporary guest PIN codes synchronized with entry cameras and lighting.
            </p>
          </div>

          <div className="p-6 bg-[#1B1E20] border border-[#2C3236] rounded-xl hover:border-[#B7E61C]/50 transition-colors">
            <div className="p-2.5 bg-[#111315] w-fit rounded-lg border border-[#2C3236] mb-4">
              <Radio className="w-5 h-5 text-[#B7E61C]" />
            </div>
            <h3 className="font-semibold text-white text-base mb-2">24/7 Monitoring Compatible</h3>
            <p className="text-xs text-[#F5F7F2]/75 leading-relaxed">
              Engineered with open, supervised protocols ready to link directly with the UL-listed central station monitoring provider of your choice.
            </p>
          </div>

        </div>

        {/* Security Architecture Interactive Preview */}
        <div className="bg-[#1B1E20] border border-[#2C3236] rounded-2xl p-6 sm:p-8">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b border-[#2C3236] mb-8">
            <div>
              <span className="text-xs font-mono text-[#B7E61C] uppercase tracking-wider block">Coordinated Security System</span>
              <h3 className="font-display text-xl sm:text-2xl font-bold text-white mt-0.5">
                How Security Integrates With Your Architecture
              </h3>
            </div>
            
            {/* Interactive Mode Tabs */}
            <div className="flex items-center gap-2 p-1 bg-[#111315] rounded-lg border border-[#2C3236]">
              <button
                onClick={() => setActiveTab('surveillance')}
                className={`px-3 py-1.5 text-xs font-medium rounded-md transition-colors ${
                  activeTab === 'surveillance' ? 'bg-[#B7E61C] text-[#111315] font-semibold' : 'text-[#F5F7F2]/70 hover:text-white'
                }`}
              >
                Surveillance
              </button>
              <button
                onClick={() => setActiveTab('perimeter')}
                className={`px-3 py-1.5 text-xs font-medium rounded-md transition-colors ${
                  activeTab === 'perimeter' ? 'bg-[#B7E61C] text-[#111315] font-semibold' : 'text-[#F5F7F2]/70 hover:text-white'
                }`}
              >
                Concealed Sensors
              </button>
              <button
                onClick={() => setActiveTab('access')}
                className={`px-3 py-1.5 text-xs font-medium rounded-md transition-colors ${
                  activeTab === 'access' ? 'bg-[#B7E61C] text-[#111315] font-semibold' : 'text-[#F5F7F2]/70 hover:text-white'
                }`}
              >
                Keyless Access
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
            
            {/* Tab Narrative */}
            <div className="lg:col-span-2 space-y-4">
              {activeTab === 'surveillance' && (
                <div className="space-y-4">
                  <h4 className="text-lg font-bold text-white">Edge AI Optical Surveillance</h4>
                  <p className="text-sm text-[#F5F7F2]/80 leading-relaxed font-light">
                    Traditional cameras ping you every time a tree branch moves. Our systems run on-board neural edge processors that differentiate humans, delivery vehicles, and animals. If a boundary line is crossed after midnight, floodlights illuminate that specific zone and display a live video feed on your bedside keypad.
                  </p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                    <div className="flex items-center gap-2 text-xs text-white/90">
                      <CheckCircle2 className="w-4 h-4 text-[#B7E61C]" />
                      <span>Zero monthly cloud subscription fees</span>
                    </div>
                    <div className="flex items-center gap-2 text-xs text-white/90">
                      <CheckCircle2 className="w-4 h-4 text-[#B7E61C]" />
                      <span>PoE hardwired reliability (never drops offline)</span>
                    </div>
                    <div className="flex items-center gap-2 text-xs text-white/90">
                      <CheckCircle2 className="w-4 h-4 text-[#B7E61C]" />
                      <span>Color night vision in near-pitch darkness</span>
                    </div>
                    <div className="flex items-center gap-2 text-xs text-white/90">
                      <CheckCircle2 className="w-4 h-4 text-[#B7E61C]" />
                      <span>Integrated with lighting deterrence macros</span>
                    </div>
                  </div>
                </div>
              )}

              {activeTab === 'perimeter' && (
                <div className="space-y-4">
                  <h4 className="text-lg font-bold text-white">Concealed Plaster & Millwork Sensors</h4>
                  <p className="text-sm text-[#F5F7F2]/80 leading-relaxed font-light">
                    Say goodbye to bulky plastic boxes taped to expensive custom window frames. During pre-construction, we install invisible magnetic contacts drilled directly into window headers and door jambs. You see pure architecture; your system knows the exact open/closed state of every entry point.
                  </p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                    <div className="flex items-center gap-2 text-xs text-white/90">
                      <CheckCircle2 className="w-4 h-4 text-[#B7E61C]" />
                      <span>Flush, recessed architectural installation</span>
                    </div>
                    <div className="flex items-center gap-2 text-xs text-white/90">
                      <CheckCircle2 className="w-4 h-4 text-[#B7E61C]" />
                      <span>Acoustic glass-break frequency detection</span>
                    </div>
                    <div className="flex items-center gap-2 text-xs text-white/90">
                      <CheckCircle2 className="w-4 h-4 text-[#B7E61C]" />
                      <span>Automatic HVAC shutdown if patio sliders open</span>
                    </div>
                    <div className="flex items-center gap-2 text-xs text-white/90">
                      <CheckCircle2 className="w-4 h-4 text-[#B7E61C]" />
                      <span>Water leak sensors with automatic main shutoff</span>
                    </div>
                  </div>
                </div>
              )}

              {activeTab === 'access' && (
                <div className="space-y-4">
                  <h4 className="text-lg font-bold text-white">Keyless Access & Gate Orchestration</h4>
                  <p className="text-sm text-[#F5F7F2]/80 leading-relaxed font-light">
                    Grant seamless access to family, service staff, or guests via encrypted smartphone BLE, fingerprint, or scheduled PIN codes. Video intercom stations let you view and unlock gates, garages, and front entries from anywhere in the world.
                  </p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                    <div className="flex items-center gap-2 text-xs text-white/90">
                      <CheckCircle2 className="w-4 h-4 text-[#B7E61C]" />
                      <span>Scheduled contractor & housekeeper PINs</span>
                    </div>
                    <div className="flex items-center gap-2 text-xs text-white/90">
                      <CheckCircle2 className="w-4 h-4 text-[#B7E61C]" />
                      <span>Motorized deadbolts with auto-lock timers</span>
                    </div>
                    <div className="flex items-center gap-2 text-xs text-white/90">
                      <CheckCircle2 className="w-4 h-4 text-[#B7E61C]" />
                      <span>Driveway gate & garage door state feedback</span>
                    </div>
                    <div className="flex items-center gap-2 text-xs text-white/90">
                      <CheckCircle2 className="w-4 h-4 text-[#B7E61C]" />
                      <span>Two-way crystal-clear audio intercoms</span>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Quick Action Box */}
            <div className="p-6 bg-[#111315] border border-[#2C3236] rounded-xl flex flex-col justify-between h-full">
              <div>
                <span className="text-xs font-mono text-[#70756F] uppercase tracking-wider block mb-2">Custom Specification</span>
                <h5 className="font-semibold text-white text-base mb-3">Plan A Coordinated Security System</h5>
                <p className="text-xs text-[#70756F] leading-relaxed mb-6">
                  Every property has unique vantage points and vulnerabilities. We perform on-site sightline modeling and low-voltage planning.
                </p>
              </div>

              <button
                onClick={onOpenConsultation}
                className="inline-flex items-center justify-center gap-2 w-full py-3 bg-[#B7E61C] hover:bg-[#C8F52A] text-[#111315] font-semibold text-xs tracking-wider uppercase rounded-md transition-all lime-glow-subtle"
              >
                <span>Request Security Consultation</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
