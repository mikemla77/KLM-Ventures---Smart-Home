import React, { useState } from 'react';
import { 
  SunMedium, 
  Thermometer, 
  Blinds, 
  ShieldCheck, 
  Camera, 
  Volume2, 
  Lock, 
  Network, 
  Mic, 
  Cpu,
  Layers,
  ArrowRight,
  CheckCircle,
  Activity
} from 'lucide-react';
import { SYSTEM_INTEGRATION_NODES, SystemNode } from '../config/business';

interface SmartHomeHubProps {
  onOpenConsultation: () => void;
}

// Icon mapping helper
const renderIcon = (name: string, className = "w-5 h-5") => {
  switch (name) {
    case 'SunMedium': return <SunMedium className={className} />;
    case 'Thermometer': return <Thermometer className={className} />;
    case 'Blinds': return <Blinds className={className} />;
    case 'ShieldCheck': return <ShieldCheck className={className} />;
    case 'Camera': return <Camera className={className} />;
    case 'Volume2': return <Volume2 className={className} />;
    case 'Lock': return <Lock className={className} />;
    case 'Network': return <Network className={className} />;
    case 'Mic': return <Mic className={className} />;
    case 'Cpu': return <Cpu className={className} />;
    default: return <Layers className={className} />;
  }
};

export const SmartHomeHub: React.FC<SmartHomeHubProps> = ({ onOpenConsultation }) => {
  const [activeNodeId, setActiveNodeId] = useState<string>('lighting');
  const activeNode = SYSTEM_INTEGRATION_NODES.find(n => n.id === activeNodeId) || SYSTEM_INTEGRATION_NODES[0];

  return (
    <section id="smart-home" className="py-24 bg-[#111315] relative overflow-hidden border-t border-[#1B1E20]">
      {/* Background Architectural Grid Lines */}
      <div className="absolute inset-0 bg-blueprint-grid opacity-25 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="flex items-center gap-2 text-xs font-semibold tracking-widest text-[#B7E61C] uppercase mb-3">
            <span className="w-1.5 h-1.5 rounded-full bg-[#B7E61C]" />
            <span>The Integration Architecture</span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white mb-6 text-balance">
            YOUR HOME. YOUR TECHNOLOGY. <br />
            <span className="text-[#B7E61C]">ONE CONNECTED SYSTEM.</span>
          </h2>
          <p className="text-base sm:text-lg text-[#F5F7F2]/80 leading-relaxed font-light">
            Modern properties contain dozens of advanced technologies—lighting, security, climate, shades, and audio. Left isolated, they become an overwhelming maze of different apps, incompatible switches, and fragile remotes. We integrate them into one unified, architectural ecosystem that responds as one.
          </p>
        </div>

        {/* Interactive System Diagram & Control Panel Showcase */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-16">
          
          {/* Interactive Topology / Network Canvas (7 cols on lg) */}
          <div className="lg:col-span-7 bg-[#1B1E20] border border-[#2C3236] rounded-xl p-6 sm:p-8 relative">
            <div className="flex items-center justify-between pb-4 border-b border-[#2C3236]/60 mb-6">
              <div className="flex items-center gap-2 text-xs text-[#70756F]">
                <Activity className="w-4 h-4 text-[#B7E61C]" />
                <span className="font-mono text-white/90">CENTRAL HUB TOPOLOGY</span>
              </div>
              <span className="text-xs text-[#B7E61C] font-mono flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-[#B7E61C] animate-pulse" />
                <span>ONLINE · ALL PROTOCOLS SYNCED</span>
              </span>
            </div>

            {/* Central Node Visual Lockup */}
            <div className="relative py-6 flex flex-col items-center">
              
              {/* Central Core Brain */}
              <div className="relative z-20 flex flex-col items-center justify-center w-36 h-36 sm:w-44 sm:h-44 rounded-full bg-[#111315] border-2 border-[#B7E61C] lime-glow p-4 text-center mb-8 sm:mb-12">
                <Cpu className="w-8 h-8 text-[#B7E61C] mb-1.5 animate-pulse" />
                <span className="font-display text-sm sm:text-base font-bold text-white tracking-wide uppercase">
                  SMART HOME
                </span>
                <span className="text-[11px] text-[#70756F] font-mono mt-0.5">Unified Core</span>
                <span className="text-[10px] text-[#B7E61C] font-mono">100% Interconnected</span>
              </div>

              {/* Subsystems Interactive Ring Selector */}
              <div className="w-full">
                <div className="text-xs text-[#70756F] uppercase tracking-wider mb-3 text-center sm:text-left">
                  Select a subsystem to inspect live integration parameters:
                </div>
                
                <div className="grid grid-cols-2 sm:grid-cols-5 gap-2.5">
                  {SYSTEM_INTEGRATION_NODES.map((node) => {
                    const isSelected = activeNodeId === node.id;
                    return (
                      <button
                        key={node.id}
                        onClick={() => setActiveNodeId(node.id)}
                        className={`flex flex-col items-center justify-center p-3 rounded-lg border text-center transition-all duration-200 group ${
                          isSelected
                            ? 'bg-[#111315] border-[#B7E61C] text-white shadow-md'
                            : 'bg-[#16181A] border-[#2C3236] text-[#F5F7F2]/70 hover:border-[#70756F] hover:text-white'
                        }`}
                      >
                        <div className={`p-2 rounded-md mb-1.5 transition-colors ${
                          isSelected ? 'text-[#111315] bg-[#B7E61C]' : 'text-[#B7E61C] bg-[#111315]'
                        }`}>
                          {renderIcon(node.iconName, "w-4 h-4")}
                        </div>
                        <span className="text-xs font-semibold tracking-tight">{node.title}</span>
                        <span className="text-[10px] text-[#70756F] truncate w-full mt-0.5">{node.category}</span>
                      </button>
                    );
                  })}
                </div>
              </div>

            </div>

            {/* Architectural Communication Bus Note */}
            <div className="mt-4 pt-4 border-t border-[#2C3236]/60 flex items-center justify-between text-xs text-[#70756F]">
              <span>Hardware-agnostic integration</span>
              <span className="text-[#F5F7F2]/80">Matter · Thread · IP · Zigbee · Low-Voltage Bus</span>
            </div>
          </div>

          {/* Active Subsystem Detail Card (5 cols on lg) */}
          <div className="lg:col-span-5 bg-[#1B1E20] border border-[#2C3236] rounded-xl p-6 sm:p-8 flex flex-col justify-between h-full">
            <div>
              {/* Header with active icon & badge */}
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-3">
                  <div className="p-2.5 rounded-lg bg-[#111315] border border-[#B7E61C]/30 text-[#B7E61C]">
                    {renderIcon(activeNode.iconName, "w-6 h-6")}
                  </div>
                  <div>
                    <span className="text-xs text-[#70756F] font-mono uppercase tracking-wider">{activeNode.category}</span>
                    <h3 className="font-display text-xl font-bold text-white">{activeNode.title}</h3>
                  </div>
                </div>
                <span className="text-[11px] font-mono text-[#B7E61C] px-2.5 py-1 bg-[#111315] rounded border border-[#B7E61C]/30">
                  {activeNode.connectionStatus}
                </span>
              </div>

              {/* Description */}
              <p className="text-sm text-[#F5F7F2]/85 leading-relaxed mb-6 pt-2">
                {activeNode.description}
              </p>

              {/* Feature Points */}
              <div className="space-y-2.5 mb-8">
                <div className="text-xs font-semibold text-white uppercase tracking-wider mb-2">
                  Integrated Capabilities:
                </div>
                {activeNode.features.map((feat, idx) => (
                  <div key={idx} className="flex items-start gap-2.5 text-xs text-[#F5F7F2]/80">
                    <CheckCircle className="w-4 h-4 text-[#B7E61C] shrink-0 mt-0.5" />
                    <span>{feat}</span>
                  </div>
                ))}
              </div>

              {/* The "Why Integration Matters" Callout */}
              <div className="p-4 bg-[#111315] rounded-lg border border-[#2C3236] mb-6">
                <div className="text-xs font-semibold text-[#B7E61C] mb-1">
                  How It Connects With The Whole System:
                </div>
                <p className="text-xs text-[#70756F] leading-normal">
                  When you select the <em>"Away"</em> scene, this subsystem automatically works in concert with locks, lighting, and security without requiring isolated commands.
                </p>
              </div>
            </div>

            {/* Quick Action in Card */}
            <button
              onClick={onOpenConsultation}
              className="inline-flex items-center justify-between w-full px-4 py-3 bg-[#24292C] hover:bg-[#B7E61C] hover:text-[#111315] text-white text-xs font-semibold tracking-wider uppercase rounded-md transition-all group"
            >
              <span>Include {activeNode.title} In Your Consultation</span>
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </button>
          </div>

        </div>

        {/* 8 Feature Overview Grid (Clean architectural typography, unboxed, line icons) */}
        <div className="border-t border-[#2C3236] pt-12">
          <div className="max-w-2xl mb-8">
            <h3 className="font-display text-2xl font-bold text-white mb-2">
              Everything Designed Around How You Live
            </h3>
            <p className="text-sm text-[#70756F]">
              We replace individual gadgets with synchronized environments.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            
            <div className="p-6 bg-[#16181A] border border-[#2C3236] rounded-lg hover:border-[#B7E61C]/50 transition-colors">
              <SunMedium className="w-6 h-6 text-[#B7E61C] mb-4" />
              <h4 className="font-semibold text-white text-base mb-2">Smart Lighting</h4>
              <p className="text-xs text-[#F5F7F2]/70 leading-relaxed">
                Control fixtures, scenes, 0.1% dimming, circadian schedules, and occupancy from clean architectural wall keypads.
              </p>
            </div>

            <div className="p-6 bg-[#16181A] border border-[#2C3236] rounded-lg hover:border-[#B7E61C]/50 transition-colors">
              <Thermometer className="w-6 h-6 text-[#B7E61C] mb-4" />
              <h4 className="font-semibold text-white text-base mb-2">Climate Control</h4>
              <p className="text-xs text-[#F5F7F2]/70 leading-relaxed">
                Integrate thermostats, radiant heat, and HVAC zones with discrete sensors that blend directly into wall surfaces.
              </p>
            </div>

            <div className="p-6 bg-[#16181A] border border-[#2C3236] rounded-lg hover:border-[#B7E61C]/50 transition-colors">
              <Blinds className="w-6 h-6 text-[#B7E61C] mb-4" />
              <h4 className="font-semibold text-white text-base mb-2">Smart Shades</h4>
              <p className="text-xs text-[#F5F7F2]/70 leading-relaxed">
                Automated roller, Roman, and drapery shades for effortless daylight control, solar heat deflection, and privacy.
              </p>
            </div>

            <div className="p-6 bg-[#16181A] border border-[#2C3236] rounded-lg hover:border-[#B7E61C]/50 transition-colors">
              <ShieldCheck className="w-6 h-6 text-[#B7E61C] mb-4" />
              <h4 className="font-semibold text-white text-base mb-2">Integrated Security</h4>
              <p className="text-xs text-[#F5F7F2]/70 leading-relaxed">
                Cameras, perimeter door/window sensors, smart locks, and alarms unified with zero clunky standalone hubs.
              </p>
            </div>

            <div className="p-6 bg-[#16181A] border border-[#2C3236] rounded-lg hover:border-[#B7E61C]/50 transition-colors">
              <Volume2 className="w-6 h-6 text-[#B7E61C] mb-4" />
              <h4 className="font-semibold text-white text-base mb-2">Whole-Home Entertainment</h4>
              <p className="text-xs text-[#F5F7F2]/70 leading-relaxed">
                Multi-room architectural audio, flush ceiling speakers, and 4K video distribution to every living and outdoor space.
              </p>
            </div>

            <div className="p-6 bg-[#16181A] border border-[#2C3236] rounded-lg hover:border-[#B7E61C]/50 transition-colors">
              <Mic className="w-6 h-6 text-[#B7E61C] mb-4" />
              <h4 className="font-semibold text-white text-base mb-2">Voice Control</h4>
              <p className="text-xs text-[#F5F7F2]/70 leading-relaxed">
                Hands-free control over compatible systems through natural commands without cluttered tabletop speaker gadgets.
              </p>
            </div>

            <div className="p-6 bg-[#16181A] border border-[#2C3236] rounded-lg hover:border-[#B7E61C]/50 transition-colors">
              <Network className="w-6 h-6 text-[#B7E61C] mb-4" />
              <h4 className="font-semibold text-white text-base mb-2">Enterprise Networking</h4>
              <p className="text-xs text-[#F5F7F2]/70 leading-relaxed">
                High-speed wired and wireless infrastructure engineered specifically for dense smart-device communication.
              </p>
            </div>

            <div className="p-6 bg-[#16181A] border border-[#2C3236] rounded-lg hover:border-[#B7E61C]/50 transition-colors">
              <Cpu className="w-6 h-6 text-[#B7E61C] mb-4" />
              <h4 className="font-semibold text-white text-base mb-2">Intelligent Automation</h4>
              <p className="text-xs text-[#F5F7F2]/70 leading-relaxed">
                Orchestrated schedules and routines that run silently in the background, keeping your home efficient and effortless.
              </p>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
