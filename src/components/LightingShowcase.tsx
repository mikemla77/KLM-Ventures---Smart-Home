import React, { useState } from 'react';
import { 
  Sparkles, 
  Sliders, 
  Smartphone, 
  Mic2, 
  Eye, 
  CalendarClock, 
  Cpu, 
  ArrowRight,
  Sun,
  Moon,
  Wine,
  Home,
  ShieldAlert
} from 'lucide-react';
import { LIGHTING_SCENES, IMAGES, LightingScene } from '../config/business';

interface LightingShowcaseProps {
  onOpenConsultation: () => void;
}

export const LightingShowcase: React.FC<LightingShowcaseProps> = ({ onOpenConsultation }) => {
  const [activeSceneId, setActiveSceneId] = useState<string>('arrive');
  const activeScene: LightingScene = LIGHTING_SCENES.find(s => s.id === activeSceneId) || LIGHTING_SCENES[0];

  const getSceneIcon = (id: string) => {
    switch (id) {
      case 'arrive': return <Home className="w-4 h-4" />;
      case 'entertain': return <Wine className="w-4 h-4" />;
      case 'relax': return <Moon className="w-4 h-4" />;
      case 'goodnight': return <ShieldAlert className="w-4 h-4" />;
      case 'away': return <Sun className="w-4 h-4" />;
      default: return <Sparkles className="w-4 h-4" />;
    }
  };

  return (
    <section id="lighting" className="py-24 bg-[#111315] relative overflow-hidden border-t border-[#1B1E20]">
      {/* Background Architectural Accent Glow matching simulated kelvin */}
      <div 
        aria-hidden="true"
        className="absolute top-1/3 -right-20 w-96 h-96 rounded-full blur-3xl opacity-20 pointer-events-none transition-all duration-700"
        style={{
          backgroundColor: activeScene.kelvin < 2200 ? '#FFA33C' : activeScene.kelvin < 2800 ? '#FFD285' : '#B7E61C'
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="flex items-center gap-2 text-xs font-semibold tracking-widest text-[#B7E61C] uppercase mb-3">
            <span className="w-1.5 h-1.5 rounded-full bg-[#B7E61C]" />
            <span>Architectural Illumination</span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white mb-6 text-balance">
            LIGHTING THAT RESPONDS <br />
            <span className="text-[#B7E61C]">TO YOUR LIFE.</span>
          </h2>
          <p className="text-base sm:text-lg text-[#F5F7F2]/80 leading-relaxed font-light">
            Lighting is the most transformative element in architectural design. We engineer high-CRI linear LEDs, museum-quality trimless downlights, and custom automated scenes that effortlessly adapt from morning focus to intimate twilight entertaining.
          </p>
        </div>

        {/* Interactive Lighting Scenes Simulator Container */}
        <div className="bg-[#1B1E20] border border-[#2C3236] rounded-2xl overflow-hidden mb-16">
          
          {/* Top Bar: Scene Tabs */}
          <div className="p-4 sm:p-6 bg-[#16181A] border-b border-[#2C3236] flex flex-wrap items-center justify-between gap-4">
            <div>
              <span className="text-xs font-mono text-[#70756F] uppercase tracking-wider block">Live Scene Presets</span>
              <span className="text-sm font-semibold text-white">Experience One-Touch Ambiance Shifts:</span>
            </div>

            {/* Scene Selector Buttons */}
            <div className="flex flex-wrap gap-2">
              {LIGHTING_SCENES.map((scene) => {
                const isActive = activeSceneId === scene.id;
                return (
                  <button
                    key={scene.id}
                    onClick={() => setActiveSceneId(scene.id)}
                    className={`inline-flex items-center gap-2 px-3.5 py-2 rounded-lg text-xs font-semibold uppercase tracking-wider transition-all duration-200 ${
                      isActive
                        ? 'bg-[#B7E61C] text-[#111315] shadow-md lime-glow-subtle'
                        : 'bg-[#111315] text-[#F5F7F2]/70 hover:text-white border border-[#2C3236] hover:border-[#70756F]'
                    }`}
                  >
                    {getSceneIcon(scene.id)}
                    <span>{scene.name}</span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Interactive Scene Visualizer & Parameters */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-0">
            
            {/* Visualizer Image with Scene Overlay (7 cols) */}
            <div className="lg:col-span-7 relative min-h-[360px] sm:min-h-[460px] bg-[#111315] overflow-hidden flex items-end">
              <img
                src={IMAGES.lighting}
                alt="Architectural LED lighting detail showing precision recessed ceiling fixtures and warm ambient illumination"
                className="w-full h-full object-cover object-center absolute inset-0 transition-opacity duration-700"
                style={{
                  filter: `brightness(${Math.max(0.4, activeScene.dimPercent / 100)}) contrast(1.05)`
                }}
                referrerPolicy="no-referrer"
              />
              
              {/* Dynamic warm/cool color wash overlay representing kelvin */}
              <div 
                className="absolute inset-0 transition-all duration-700 mix-blend-color pointer-events-none"
                style={{
                  backgroundColor: activeScene.kelvin < 2200 ? 'rgba(255, 140, 40, 0.25)' : activeScene.kelvin < 2600 ? 'rgba(255, 190, 90, 0.18)' : 'rgba(200, 240, 255, 0.1)'
                }}
              />
              
              <div className="absolute inset-0 bg-gradient-to-t from-[#111315] via-[#111315]/40 to-transparent" />

              {/* Bottom live status readout overlay on image */}
              <div className="relative z-10 p-6 sm:p-8 w-full flex flex-wrap items-center justify-between gap-4 text-xs">
                <div className="bg-[#111315]/90 backdrop-blur-md px-4 py-2 rounded-lg border border-[#2C3236]">
                  <span className="text-[#70756F] uppercase tracking-wider block text-[10px]">Active Scene</span>
                  <span className="text-white font-bold text-sm">{activeScene.name}</span>
                </div>
                <div className="bg-[#111315]/90 backdrop-blur-md px-4 py-2 rounded-lg border border-[#2C3236] flex items-center gap-4 font-mono">
                  <div>
                    <span className="text-[#70756F] block text-[10px]">COLOR TEMP</span>
                    <span className="text-[#B7E61C] font-bold">{activeScene.kelvin}K</span>
                  </div>
                  <div className="w-px h-6 bg-[#2C3236]" />
                  <div>
                    <span className="text-[#70756F] block text-[10px]">INTENSITY</span>
                    <span className="text-white font-bold">{activeScene.dimPercent}%</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Parameters & Orchestration Breakdown (5 cols) */}
            <div className="lg:col-span-5 p-6 sm:p-8 flex flex-col justify-between bg-[#1B1E20]">
              <div>
                <div className="flex items-center justify-between pb-3 border-b border-[#2C3236]/80 mb-5">
                  <span className="text-xs font-mono text-[#B7E61C] uppercase tracking-wider">
                    {activeScene.timeOfDay}
                  </span>
                  <span className="text-xs text-[#70756F] font-mono">
                    Scene Macro 0{LIGHTING_SCENES.findIndex(s => s.id === activeScene.id) + 1}
                  </span>
                </div>

                <h3 className="font-display text-2xl font-bold text-white mb-3">
                  "{activeScene.name}" Mode
                </h3>
                
                <p className="text-sm text-[#F5F7F2]/80 leading-relaxed mb-6 font-light">
                  {activeScene.description}
                </p>

                {/* Technical Gauges */}
                <div className="space-y-4 bg-[#111315] p-5 rounded-xl border border-[#2C3236] mb-6">
                  
                  {/* Dimming Level */}
                  <div>
                    <div className="flex justify-between text-xs mb-1.5 font-mono">
                      <span className="text-[#70756F]">CIRCUIT LEVEL</span>
                      <span className="text-white font-semibold">{activeScene.dimPercent}% DIM</span>
                    </div>
                    <div className="w-full h-2 bg-[#1B1E20] rounded-full overflow-hidden">
                      <div 
                        className="h-full bg-gradient-to-r from-[#B7E61C] to-[#C8F52A] transition-all duration-500 rounded-full"
                        style={{ width: `${Math.max(5, activeScene.dimPercent)}%` }}
                      />
                    </div>
                  </div>

                  {/* Kelvin Warm-Dim */}
                  <div>
                    <div className="flex justify-between text-xs mb-1.5 font-mono">
                      <span className="text-[#70756F]">CIRCADIAN TEMPERATURE</span>
                      <span className="text-[#B7E61C] font-semibold">{activeScene.kelvin}K Warm-Dim</span>
                    </div>
                    <div className="w-full h-2 bg-[#1B1E20] rounded-full overflow-hidden">
                      <div 
                        className="h-full bg-gradient-to-r from-amber-600 via-amber-300 to-yellow-100 transition-all duration-500 rounded-full"
                        style={{ width: `${((activeScene.kelvin - 1800) / (3200 - 1800)) * 100}%` }}
                      />
                    </div>
                  </div>

                  {/* Coordinated Subsystems */}
                  <div className="pt-2 border-t border-[#2C3236]/60 grid grid-cols-2 gap-3 text-xs">
                    <div>
                      <span className="text-[#70756F] block text-[10px] font-mono">MOTORIZED SHADES</span>
                      <span className="text-white font-medium">{activeScene.shadeState}</span>
                    </div>
                    <div>
                      <span className="text-[#70756F] block text-[10px] font-mono">WHOLE-HOME AUDIO</span>
                      <span className="text-white font-medium truncate block">{activeScene.audioState}</span>
                    </div>
                  </div>

                </div>
              </div>

              <button
                onClick={onOpenConsultation}
                className="w-full inline-flex items-center justify-center gap-2 py-3.5 bg-[#B7E61C] hover:bg-[#C8F52A] text-[#111315] font-semibold text-xs tracking-wider uppercase rounded-md transition-all lime-glow-subtle"
              >
                <span>Design Custom Scenes for Your Property</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>

          </div>

        </div>

        {/* 6 Architectural Lighting Typologies & Control Modalities */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          
          <div className="p-6 bg-[#16181A] border border-[#2C3236] rounded-xl">
            <Sliders className="w-6 h-6 text-[#B7E61C] mb-4" />
            <h4 className="font-semibold text-white text-base mb-2">Architectural Recessed Downlights</h4>
            <p className="text-xs text-[#F5F7F2]/75 leading-relaxed">
              Discreet 2-inch to 3-inch trimless apertures, precision optics, and glare-free reflectors that cast light purely where intended, keeping ceilings clean.
            </p>
          </div>

          <div className="p-6 bg-[#16181A] border border-[#2C3236] rounded-xl">
            <Sparkles className="w-6 h-6 text-[#B7E61C] mb-4" />
            <h4 className="font-semibold text-white text-base mb-2">Linear LED Cove & Accent Channels</h4>
            <p className="text-xs text-[#F5F7F2]/75 leading-relaxed">
              Seamless indirect washes along perimeter ceilings, floating architectural steps, custom joinery, and under-counter reveals with zero dotting.
            </p>
          </div>

          <div className="p-6 bg-[#16181A] border border-[#2C3236] rounded-xl">
            <Eye className="w-6 h-6 text-[#B7E61C] mb-4" />
            <h4 className="font-semibold text-white text-base mb-2">Exterior & Landscape Illumination</h4>
            <p className="text-xs text-[#F5F7F2]/75 leading-relaxed">
              Low-voltage exterior uplighting, tree canopies, architectural facade grazing, and pathway safety lighting synchronized with astronomical sunset clocks.
            </p>
          </div>

        </div>

        {/* Control Modalities Strip (Wall, Mobile, Voice, Sensors, Schedules) */}
        <div className="mt-8 p-6 bg-[#1B1E20] border border-[#2C3236] rounded-xl flex flex-wrap items-center justify-between gap-6">
          <div className="max-w-md">
            <span className="text-xs font-mono text-[#B7E61C] uppercase tracking-wider block mb-1">Effortless Control</span>
            <span className="text-sm font-semibold text-white">How You Control Your Lighting:</span>
            <p className="text-xs text-[#70756F] mt-1">
              Never hunt for switches. Your system adapts across all natural interaction methods.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-6 sm:gap-8 text-xs font-medium text-white/90">
            <div className="flex items-center gap-2">
              <Sliders className="w-4 h-4 text-[#B7E61C]" />
              <span>Engraved Keypads</span>
            </div>
            <div className="flex items-center gap-2">
              <Smartphone className="w-4 h-4 text-[#B7E61C]" />
              <span>Mobile & iPad</span>
            </div>
            <div className="flex items-center gap-2">
              <Mic2 className="w-4 h-4 text-[#B7E61C]" />
              <span>Natural Voice</span>
            </div>
            <div className="flex items-center gap-2">
              <Eye className="w-4 h-4 text-[#B7E61C]" />
              <span>Discrete Sensors</span>
            </div>
            <div className="flex items-center gap-2">
              <CalendarClock className="w-4 h-4 text-[#B7E61C]" />
              <span>Astro Schedules</span>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
