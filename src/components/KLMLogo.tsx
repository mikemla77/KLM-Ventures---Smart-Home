import React from 'react';
import { IMAGES } from '../config/business';

export interface KLMLogoProps {
  variant?: 'original' | 'horizontal' | 'stacked' | 'mark-only' | 'image';
  className?: string;
  size?: 'sm' | 'md' | 'lg' | 'xl';
  showGlow?: boolean;
}

/**
 * KLM Ventures Vector Monogram Icon
 * Accurately replicates the user's uploaded KLM Ventures brand identity:
 * Geometric K-L-M ligature with yellow chevron and upward-pointing growth/venture arrow.
 */
export const KLMMonogramMark: React.FC<{
  className?: string;
  size?: number | string;
  showGlow?: boolean;
}> = ({ className = 'w-9 h-9', showGlow = false }) => {
  return (
    <div className={`relative inline-flex items-center justify-center flex-shrink-0 ${className}`}>
      {showGlow && (
        <div className="absolute inset-0 bg-[#B7E61C]/20 blur-md rounded-full pointer-events-none" />
      )}
      <svg
        viewBox="0 0 100 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full relative z-10"
        aria-hidden="true"
      >
        <defs>
          <linearGradient id="klmArrowGrad" x1="50" y1="70" x2="85" y2="15" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#9DE600" />
            <stop offset="60%" stopColor="#B7E61C" />
            <stop offset="100%" stopColor="#E2F529" />
          </linearGradient>
          <linearGradient id="klmYellowGrad" x1="56" y1="40" x2="68" y2="28" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#EAB308" />
            <stop offset="100%" stopColor="#FACC15" />
          </linearGradient>
        </defs>

        {/* --- LEFT 'K' VERTICAL HOLLOW PILLAR --- */}
        <path
          d="M12 24 H28 V76 H12 Z"
          fill="none"
          stroke="#9DE600"
          strokeWidth="6"
          strokeLinejoin="miter"
        />

        {/* --- 'K' DIAGONAL UPPER ARM --- */}
        <path
          d="M26 48 L46 24"
          stroke="#9DE600"
          strokeWidth="6.5"
          strokeLinecap="square"
        />

        {/* --- 'K' LOWER ARM CONNECTING TO 'L' BASELINE --- */}
        <path
          d="M26 50 L46 73 H72"
          stroke="#9DE600"
          strokeWidth="6.5"
          strokeLinecap="square"
          strokeLinejoin="miter"
        />

        {/* --- 'M' LEFT VERTICAL STEM --- */}
        <path
          d="M48 30 V72"
          stroke="#9DE600"
          strokeWidth="6"
          strokeLinecap="square"
        />

        {/* --- 'M' INNER YELLOW/GOLD CHEVRON --- */}
        <path
          d="M54 30 L64 45 L74 30"
          fill="none"
          stroke="url(#klmYellowGrad)"
          strokeWidth="4.5"
          strokeLinecap="round"
          strokeLinejoin="miter"
        />

        {/* --- 'M' MAIN V-CHEVRON EXTENDING INTO UPWARD ARROW --- */}
        <path
          d="M50 30 L64 56 L82 24"
          fill="none"
          stroke="#9DE600"
          strokeWidth="6"
          strokeLinejoin="miter"
          strokeLinecap="square"
        />

        {/* --- ARROW HEAD AT THE TOP-RIGHT (POINTING ↗) --- */}
        <polygon
          points="88,14 74,18 80,24 68,32 74,38 86,30 92,36"
          fill="#9DE600"
        />

        {/* --- 'M' RIGHT VERTICAL PILLAR --- */}
        <path
          d="M78 38 V76"
          stroke="#9DE600"
          strokeWidth="6"
          strokeLinecap="square"
        />
      </svg>
    </div>
  );
};

export const KLMLogo: React.FC<KLMLogoProps> = ({
  variant = 'horizontal',
  className = '',
  size = 'md',
  showGlow = false,
}) => {
  // Size mappings
  const sizeClasses = {
    sm: { icon: 'w-7 h-7', textKlm: 'text-base', textVentures: 'text-[9px]', gap: 'gap-2', img: 'h-8 w-auto' },
    md: { icon: 'w-9 h-9', textKlm: 'text-xl', textVentures: 'text-[11px]', gap: 'gap-2.5', img: 'h-10 sm:h-11 w-auto' },
    lg: { icon: 'w-12 h-12', textKlm: 'text-2xl', textVentures: 'text-xs', gap: 'gap-3', img: 'h-16 w-auto' },
    xl: { icon: 'w-20 h-20', textKlm: 'text-4xl', textVentures: 'text-base', gap: 'gap-4', img: 'h-28 w-auto' },
  }[size];

  // Clean logo uploaded by user (seamless transparent rendering)
  if (variant === 'original' || variant === 'image') {
    return (
      <div className={`relative inline-flex items-center flex-shrink-0 ${className}`}>
        {showGlow && (
          <div className="absolute inset-0 bg-[#B7E61C]/20 blur-md rounded-full pointer-events-none" />
        )}
        <img
          src={IMAGES.logoClean}
          alt="KLM Ventures Official Logo"
          referrerPolicy="no-referrer"
          className={`${sizeClasses.img} object-contain filter drop-shadow-[0_2px_8px_rgba(183,230,28,0.15)]`}
        />
      </div>
    );
  }

  if (variant === 'mark-only') {
    return (
      <KLMMonogramMark
        className={`${sizeClasses.icon} ${className}`}
        showGlow={showGlow}
      />
    );
  }

  if (variant === 'stacked') {
    return (
      <div className={`flex flex-col items-center text-center ${sizeClasses.gap} ${className}`}>
        <KLMMonogramMark
          className={`${sizeClasses.icon}`}
          showGlow={showGlow}
        />
        <div className="flex flex-col items-center leading-none">
          <span className={`font-display font-black tracking-tight text-[#A3E635] ${sizeClasses.textKlm}`}>
            KLM
          </span>
          <span className={`font-sans font-bold tracking-[0.28em] text-[#A3E635] mt-1 uppercase ${sizeClasses.textVentures}`}>
            VENTURES
          </span>
        </div>
      </div>
    );
  }

  // Default: 'horizontal'
  return (
    <div className={`inline-flex items-center ${sizeClasses.gap} ${className}`}>
      <KLMMonogramMark
        className={`${sizeClasses.icon}`}
        showGlow={showGlow}
      />
      <div className="flex flex-col justify-center leading-none select-none">
        <div className="flex items-center gap-1.5">
          <span className={`font-display font-black tracking-tight text-white group-hover:text-[#B7E61C] transition-colors ${sizeClasses.textKlm}`}>
            KLM
          </span>
          <span className={`font-display font-semibold tracking-wider text-[#A3E635] ${sizeClasses.textKlm}`}>
            VENTURES
          </span>
        </div>
        <span className="text-[9px] font-mono uppercase tracking-[0.16em] text-[#70756F] mt-0.5">
          Systems Integration
        </span>
      </div>
    </div>
  );
};
