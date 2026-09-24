import React, { useState, useEffect, useRef } from 'react';
import { 
  Play, 
  Pause, 
  RotateCcw, 
  Mic, 
  Lightbulb, 
  Sparkles, 
  Check, 
  Volume2, 
  VolumeX,
  Sliders,
  Maximize2
} from 'lucide-react';
import { IMAGES } from '../config/business';

interface SmartVoiceVideoSimulationProps {
  onOpenConsultation?: () => void;
}

export const SmartVoiceVideoSimulation: React.FC<SmartVoiceVideoSimulationProps> = ({ onOpenConsultation }) => {
  const [isPlaying, setIsPlaying] = useState<boolean>(true);
  const [progress, setProgress] = useState<number>(0);
  // Phase sequence:
  // 0: Idle/Waiting (0s - 1.2s)
  // 1: Voice Bubble emerging & speaking "Hey assistant..." (1.2s - 4.2s)
  // 2: Assistant Processing & acknowledgment (4.2s - 5.4s)
  // 3: Lights Turn ON & kitchen illuminated (5.4s - 8.5s)
  // 4: Loop reset
  const [lightsOn, setLightsOn] = useState<boolean>(false);
  const [speechBubbleVisible, setSpeechBubbleVisible] = useState<boolean>(false);
  const [speechText, setSpeechText] = useState<string>('');
  const [assistantResponding, setAssistantResponding] = useState<boolean>(false);
  const [audioFeedbackNotice, setAudioFeedbackNotice] = useState<boolean>(false);

  const containerRef = useRef<HTMLDivElement>(null);
  const fullQuote = "Hey assistant, turn on kitchen light";

  useEffect(() => {
    if (!isPlaying) return;

    const DURATION = 9000; // 9 seconds total cycle
    const startTime = Date.now() - (progress / 100) * DURATION;

    const interval = setInterval(() => {
      const elapsed = (Date.now() - startTime) % DURATION;
      const currentProgress = (elapsed / DURATION) * 100;
      setProgress(currentProgress);

      const seconds = elapsed / 1000;

      // Phase 0: 0 - 1.2s : Ambient dim kitchen
      if (seconds < 1.2) {
        setSpeechBubbleVisible(false);
        setSpeechText('');
        setAssistantResponding(false);
        setLightsOn(false);
      } 
      // Phase 1: 1.2s - 4.4s : Speech bubble emerges from mouth, typing effect
      else if (seconds >= 1.2 && seconds < 4.4) {
        setSpeechBubbleVisible(true);
        setAssistantResponding(false);
        setLightsOn(false);

        const speechProgress = Math.min(1, (seconds - 1.2) / 2.2);
        const charCount = Math.floor(speechProgress * fullQuote.length);
        setSpeechText(fullQuote.substring(0, charCount));
      } 
      // Phase 2: 4.4s - 5.5s : Assistant Processing & Hub Recognition
      else if (seconds >= 4.4 && seconds < 5.5) {
        setSpeechBubbleVisible(true);
        setSpeechText(fullQuote);
        setAssistantResponding(true);
        setLightsOn(false);
      } 
      // Phase 3: 5.5s - 9.0s : Lights dynamically ramp up & illuminate kitchen
      else {
        setSpeechBubbleVisible(true);
        setSpeechText(fullQuote);
        setAssistantResponding(false);
        setLightsOn(true);
      }
    }, 40);

    return () => clearInterval(interval);
  }, [isPlaying]);

  const handleManualToggleLights = () => {
    setLightsOn(prev => !prev);
  };

  const handleRestart = () => {
    setProgress(0);
    setLightsOn(false);
    setSpeechBubbleVisible(false);
    setSpeechText('');
    setAssistantResponding(false);
    setIsPlaying(true);
  };

  return (
    <section className="py-20 bg-[#16181A] relative overflow-hidden border-t border-b border-[#2C3236]">
      {/* Background Architectural Subtle Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-[#B7E61C]/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-6">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#111315] border border-[#2C3236] text-[11px] font-mono text-[#B7E61C] uppercase tracking-wider mb-4">
              <Sparkles className="w-3.5 h-3.5 animate-pulse" />
              <span>Natural Voice & Architectural Automation</span>
            </div>
            <h2 className="font-display text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-white mb-3 text-balance">
              NO TOUCHSCREENS NEEDED. <br className="hidden sm:inline" />
              <span className="text-[#B7E61C]">EFFORTLESS VOICE-CONTROLLED LIVING.</span>
            </h2>
            <p className="text-sm sm:text-base text-[#F5F7F2]/80 font-light leading-relaxed">
              Experience zero-latency voice command orchestration. With discrete far-field microphone arrays built into high-end architecture, a simple spoken phrase immediately illuminates zoned architectural fixtures without reaching for a phone or wall switch.
            </p>
          </div>

          <div className="flex items-center gap-3 shrink-0">
            <button
              onClick={handleRestart}
              className="inline-flex items-center gap-2 px-4 py-2 bg-[#1B1E20] hover:bg-[#24292C] border border-[#2C3236] text-white text-xs font-semibold rounded-md transition-colors"
              title="Replay sequence"
            >
              <RotateCcw className="w-3.5 h-3.5 text-[#B7E61C]" />
              <span>Replay Demo</span>
            </button>
            <button
              onClick={() => setIsPlaying(!isPlaying)}
              className="inline-flex items-center gap-2 px-4 py-2 bg-[#B7E61C] hover:bg-[#C8F52A] text-[#111315] text-xs font-bold rounded-md transition-colors"
            >
              {isPlaying ? (
                <>
                  <Pause className="w-3.5 h-3.5" />
                  <span>Pause</span>
                </>
              ) : (
                <>
                  <Play className="w-3.5 h-3.5" />
                  <span>Play</span>
                </>
              )}
            </button>
          </div>
        </div>

        {/* Video Simulation Canvas Player */}
        <div 
          ref={containerRef}
          className="relative rounded-2xl overflow-hidden border border-[#2C3236] bg-[#0E1012] shadow-2xl aspect-[16/9] max-w-5xl mx-auto group select-none"
        >
          {/* Base Kitchen State: Remains in its natural dim atmospheric mood throughout */}
          <img
            src={IMAGES.kitchenManDim}
            alt="Kitchen scene"
            className="absolute inset-0 w-full h-full object-cover object-center"
          />

          {/* Recessed Ceiling Fixtures & Downward Light Cones Overlay */}
          {/* Positioned precisely along the ceiling line above the kitchen island */}
          <div className="absolute inset-0 pointer-events-none z-20 overflow-hidden">
            {/* Subtle soft ceiling ambient wash concentrated strictly near the top ceiling sheetrock */}
            <div 
              className={`absolute top-0 left-0 right-0 h-40 bg-gradient-to-b from-[#ffd580]/20 via-[#ffcf70]/08 to-transparent transition-opacity duration-1000 ease-out ${
                lightsOn ? 'opacity-100' : 'opacity-0'
              }`}
            />

            {[
              { id: 'can-1', left: '18%', top: '4%', beamWidth: '180px', coneSpread: '220px' },
              { id: 'can-2', left: '38%', top: '5%', beamWidth: '190px', coneSpread: '240px' },
              { id: 'can-3', left: '60%', top: '5%', beamWidth: '190px', coneSpread: '240px' },
              { id: 'can-4', left: '80%', top: '4%', beamWidth: '180px', coneSpread: '220px' },
            ].map((fixture) => (
              <div
                key={fixture.id}
                className="absolute flex flex-col items-center"
                style={{ left: fixture.left, top: fixture.top, transform: 'translateX(-50%)' }}
              >
                {/* Recessed Can Trim Ring & Baffle (visible in ceiling) */}
                <div className="relative flex items-center justify-center">
                  {/* Outer Bezel Trim Ring (Architectural white/brushed metal flange flush with drywall) */}
                  <div className={`w-8 h-4 sm:w-10 sm:h-5 rounded-full border transition-all duration-700 ${
                    lightsOn 
                      ? 'border-[#ffeec2] bg-[#1a1712] shadow-[0_0_15px_rgba(255,225,160,0.8)]' 
                      : 'border-white/20 bg-[#121416]/80 shadow-inner'
                  }`}>
                    {/* Inner Recessed LED Aperture / Lens */}
                    <div className={`w-5 h-2.5 sm:w-6 sm:h-3 mx-auto mt-0.5 sm:mt-1 rounded-full transition-all duration-500 ${
                      lightsOn
                        ? 'bg-gradient-to-b from-white via-[#fff0c7] to-[#ffd47d] shadow-[0_0_18px_#ffebae,0_0_30px_#ffa938]'
                        : 'bg-[#1e2225] border border-black/40'
                    }`} />
                  </div>

                  {/* High-intensity aperture filament flare when lit */}
                  {lightsOn && (
                    <div className="absolute -top-1 w-12 h-6 sm:w-16 sm:h-8 rounded-full bg-amber-100/60 blur-[3px] animate-pulse" />
                  )}
                </div>

                {/* Downward Architectural Light Cone (Subtle beam focused in upper room zone) */}
                <div
                  className={`pointer-events-none transition-opacity duration-1000 ease-out origin-top ${
                    lightsOn ? 'opacity-65' : 'opacity-0'
                  }`}
                  style={{
                    width: fixture.coneSpread,
                    height: '220px',
                    background: 'radial-gradient(ellipse 70% 85% at 50% 0%, rgba(255,232,175,0.35) 0%, rgba(255,210,130,0.12) 40%, rgba(255,190,90,0.02) 70%, transparent 100%)',
                    clipPath: 'polygon(38% 0%, 62% 0%, 95% 100%, 5% 100%)',
                    filter: 'blur(7px)',
                  }}
                />
              </div>
            ))}
          </div>

          {/* Top Video Overlay Bar - Streamlined on left so upper right is dedicated to the voice text */}
          <div className="absolute top-4 left-4 flex items-center gap-2 pointer-events-none z-30">
            <div className="flex items-center gap-2 px-3 py-1.5 rounded-md bg-[#111315]/85 backdrop-blur-md border border-white/10 text-xs text-white">
              <span className={`w-2 h-2 rounded-full ${lightsOn ? 'bg-[#B7E61C] animate-pulse' : 'bg-amber-400'}`} />
              <span className="font-mono text-[11px] uppercase tracking-wider font-semibold">
                Kitchen Zone · {lightsOn ? 'Ceiling Downlights Active (100%)' : 'Standby / 0%'}
              </span>
            </div>
          </div>

          {/* Speech Bubble / Voice Caption Card placed cleanly in the BOTTOM LEFT CORNER (3x smaller/compact) */}
          <div 
            className={`absolute bottom-16 sm:bottom-18 left-3 sm:left-4 z-30 transition-all duration-300 pointer-events-none max-w-[190px] sm:max-w-[210px] ${
              speechBubbleVisible 
                ? 'opacity-100 scale-100 translate-y-0' 
                : 'opacity-0 scale-90 translate-y-2'
            }`}
          >
            {/* The Compact Speech Bubble Card */}
            <div className="relative bg-[#111315]/95 backdrop-blur-md border border-[#B7E61C] text-white px-2.5 py-1.5 sm:px-3 sm:py-2 rounded-lg shadow-[0_8px_20px_rgba(0,0,0,0.8),0_0_15px_rgba(183,230,28,0.25)] w-full">
              
              {/* Header row with mic and voice waves */}
              <div className="flex items-center gap-1.5 mb-0.5">
                <span className="inline-flex items-center justify-center w-3.5 h-3.5 rounded-full bg-[#B7E61C] text-[#111315]">
                  <Mic className="w-2 h-2 animate-pulse" />
                </span>
                <span className="text-[8px] font-mono uppercase tracking-wider text-[#B7E61C] font-bold">
                  Voice Command
                </span>
                <div className="flex items-center gap-0.5 ml-auto">
                  <span className="w-0.5 h-1.5 bg-[#B7E61C] rounded-full animate-[pulse_0.6s_ease-in-out_infinite]" />
                  <span className="w-0.5 h-2.5 bg-[#B7E61C] rounded-full animate-[pulse_0.8s_ease-in-out_infinite]" />
                  <span className="w-0.5 h-1.5 bg-[#B7E61C] rounded-full animate-[pulse_0.7s_ease-in-out_infinite]" />
                </div>
              </div>

              {/* Spoken sentence (small compact text) */}
              <p className="text-[10px] sm:text-[11px] font-medium text-white tracking-tight leading-snug">
                &ldquo;{speechText}&rdquo;
                {speechBubbleVisible && speechText.length < fullQuote.length && (
                  <span className="inline-block w-1 h-2.5 ml-0.5 bg-[#B7E61C] animate-ping" />
                )}
              </p>

              {/* Status footer inside speech bubble */}
              {assistantResponding && !lightsOn && (
                <div className="mt-1 pt-1 border-t border-[#2C3236] flex items-center gap-1 text-[8px] text-[#B7E61C] font-mono">
                  <span className="w-1 h-1 rounded-full bg-[#B7E61C] animate-ping shrink-0" />
                  <span className="truncate">Executing command...</span>
                </div>
              )}

              {lightsOn && (
                <div className="mt-1 pt-1 border-t border-[#B7E61C]/30 flex items-center gap-1 text-[8px] text-[#B7E61C] font-mono font-medium">
                  <Check className="w-2.5 h-2.5 text-[#B7E61C] shrink-0" />
                  <span>Kitchen lights ON</span>
                </div>
              )}

              {/* Speech Bubble Pointer / Tail on top-left pointing upwards */}
              <div 
                className="absolute -top-1 left-4 w-2 h-2 bg-[#111315] border-l border-t border-[#B7E61C] transform rotate-45"
              />
            </div>
          </div>

          {/* System Response Badge (Assistant confirmation bottom right of video) */}
          <div 
            className={`absolute bottom-16 right-4 sm:right-6 z-30 transition-all duration-500 max-w-xs ${
              lightsOn 
                ? 'opacity-100 translate-y-0 scale-100' 
                : 'opacity-0 translate-y-4 scale-95 pointer-events-none'
            }`}
          >
            <div className="bg-[#111315]/95 backdrop-blur-md border border-[#B7E61C] px-4 py-3 rounded-xl shadow-xl flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg bg-[#B7E61C]/20 border border-[#B7E61C]/50 flex items-center justify-center shrink-0">
                <Lightbulb className="w-4 h-4 text-[#B7E61C]" />
              </div>
              <div>
                <div className="text-[11px] font-mono text-[#B7E61C] uppercase tracking-wider font-bold">
                  Voice Execution Complete
                </div>
                <div className="text-xs text-white font-medium">
                  Ceiling Recessed Downlights 100%
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Player Scrub Bar & Controls */}
          <div className="absolute bottom-0 left-0 right-0 z-30 bg-gradient-to-t from-black/90 via-black/60 to-transparent p-4 flex flex-col gap-2">
            {/* Timeline Progress Bar */}
            <div className="w-full bg-white/20 h-1.5 rounded-full overflow-hidden relative cursor-pointer">
              <div 
                className="h-full bg-[#B7E61C] transition-all duration-75 relative"
                style={{ width: `${progress}%` }}
              >
                <div className="absolute right-0 top-1/2 -translate-y-1/2 w-3 h-3 bg-white rounded-full shadow-md" />
              </div>
            </div>

            <div className="flex items-center justify-between text-xs text-[#F5F7F2]/80 pt-1">
              <div className="flex items-center gap-3">
                <button
                  onClick={() => setIsPlaying(!isPlaying)}
                  className="text-white hover:text-[#B7E61C] transition-colors"
                  aria-label={isPlaying ? "Pause video" : "Play video"}
                >
                  {isPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
                </button>
                <button
                  onClick={handleRestart}
                  className="text-[#70756F] hover:text-white transition-colors"
                  aria-label="Replay"
                >
                  <RotateCcw className="w-3.5 h-3.5" />
                </button>
                <span className="font-mono text-[11px] text-[#70756F]">
                  0:0{Math.floor((progress / 100) * 9)} / 0:09
                </span>
                <span className="hidden sm:inline text-[#70756F]">·</span>
                <span className="hidden sm:inline font-mono text-[11px] text-[#B7E61C]">
                  Silent Subtitled Animation (Bubble Caption)
                </span>
              </div>

              <div className="flex items-center gap-3">
                <button
                  onClick={handleManualToggleLights}
                  className="inline-flex items-center gap-1.5 text-xs text-[#F5F7F2] hover:text-[#B7E61C] transition-colors px-2 py-1 rounded bg-white/10 hover:bg-white/20"
                >
                  <Lightbulb className={`w-3.5 h-3.5 ${lightsOn ? 'text-[#B7E61C]' : 'text-zinc-400'}`} />
                  <span className="hidden sm:inline">Toggle Fixtures:</span>
                  <span className="font-mono font-bold text-[#B7E61C]">{lightsOn ? 'ON' : 'OFF'}</span>
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Feature Highlights Grid underneath video */}
        <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-5xl mx-auto">
          <div className="p-4 bg-[#1B1E20] border border-[#2C3236] rounded-xl flex items-start gap-3">
            <div className="w-8 h-8 rounded-lg bg-[#B7E61C]/10 border border-[#B7E61C]/30 flex items-center justify-center shrink-0 mt-0.5">
              <Mic className="w-4 h-4 text-[#B7E61C]" />
            </div>
            <div>
              <h4 className="text-xs font-semibold text-white uppercase tracking-wider mb-1">
                Zero-Intrusion Microphones
              </h4>
              <p className="text-xs text-[#F5F7F2]/75 font-light leading-relaxed">
                Flush architectural ceiling and cabinet mics blend invisibly into high-end woodwork and millwork.
              </p>
            </div>
          </div>

          <div className="p-4 bg-[#1B1E20] border border-[#2C3236] rounded-xl flex items-start gap-3">
            <div className="w-8 h-8 rounded-lg bg-[#B7E61C]/10 border border-[#B7E61C]/30 flex items-center justify-center shrink-0 mt-0.5">
              <Lightbulb className="w-4 h-4 text-[#B7E61C]" />
            </div>
            <div>
              <h4 className="text-xs font-semibold text-white uppercase tracking-wider mb-1">
                Sub-Second Response
              </h4>
              <p className="text-xs text-[#F5F7F2]/75 font-light leading-relaxed">
                Local edge processing executes lighting scene transitions instantly without cloud delay or buffering.
              </p>
            </div>
          </div>

          <div className="p-4 bg-[#1B1E20] border border-[#2C3236] rounded-xl flex items-start gap-3">
            <div className="w-8 h-8 rounded-lg bg-[#B7E61C]/10 border border-[#B7E61C]/30 flex items-center justify-center shrink-0 mt-0.5">
              <Sparkles className="w-4 h-4 text-[#B7E61C]" />
            </div>
            <div>
              <h4 className="text-xs font-semibold text-white uppercase tracking-wider mb-1">
                Zoned Multi-Room Scenes
              </h4>
              <p className="text-xs text-[#F5F7F2]/75 font-light leading-relaxed">
                Spoken instructions automatically recognize which room you are standing in and control the local lighting groups.
              </p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
