import React, { useState, useEffect } from 'react';
import { Menu, X, Phone, ArrowUpRight, ShieldCheck, ChevronRight } from 'lucide-react';
import { BUSINESS_CONFIG } from '../config/business';
import { KLMLogo } from './KLMLogo';

interface NavbarProps {
  onOpenConsultation: () => void;
  activeSection: string;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenConsultation, activeSection }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Smart Home', href: '#smart-home' },
    { label: 'Services', href: '#services' },
    { label: 'Lighting', href: '#lighting' },
    { label: 'Security', href: '#security' },
    { label: 'Infrastructure', href: '#infrastructure' },
    { label: 'Commercial', href: '#commercial' },
    { label: 'Projects', href: '#projects' },
    { label: 'About', href: '#about' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#111315]/95 backdrop-blur-md border-b border-[#2C3236] shadow-xl py-3'
          : 'bg-gradient-to-b from-[#111315]/95 via-[#111315]/80 to-transparent py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-2 sm:gap-4">
          
          {/* Zone 1: KLM Ventures Brand Logo */}
          <a
            href="#"
            className="group flex items-center gap-2.5 sm:gap-3 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#B7E61C] rounded py-1 shrink-0"
            aria-label="KLM Ventures Home"
          >
            <KLMLogo variant="original" size="md" showGlow={true} />
            <div className="flex flex-col justify-center leading-none">
              <span className="font-display text-lg sm:text-xl xl:text-2xl font-bold tracking-tight text-white transition-colors group-hover:text-[#B7E61C] whitespace-nowrap">
                KLM <span className="text-[#A3E635]">VENTURES</span>
              </span>
              <span className="text-[9px] font-mono uppercase tracking-[0.16em] text-[#70756F] mt-0.5 hidden md:inline-block">
                Systems Integration
              </span>
            </div>
          </a>

          {/* Zone 2: Navigation Links */}
          <nav className="hidden xl:flex items-center gap-5 2xl:gap-6 shrink">
            {navLinks.map((link) => {
              const isActive = activeSection === link.href.replace('#', '');
              return (
                <a
                  key={link.label}
                  href={link.href}
                  className={`text-[13px] 2xl:text-sm tracking-wide transition-colors whitespace-nowrap relative py-1 ${
                    isActive
                      ? 'text-[#B7E61C] font-semibold'
                      : 'text-[#F5F7F2]/80 hover:text-white'
                  }`}
                >
                  {link.label}
                  {isActive && (
                    <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#B7E61C] rounded-full" />
                  )}
                </a>
              );
            })}
          </nav>

          {/* Zone 3: Primary Actions */}
          <div className="hidden md:flex items-center gap-3 shrink-0">
            <a
              href={`tel:${BUSINESS_CONFIG.phone}`}
              className="flex items-center gap-2 text-xs font-medium text-[#F5F7F2]/90 hover:text-[#B7E61C] px-2.5 py-1.5 rounded-lg transition-colors border border-transparent hover:border-[#2C3236] whitespace-nowrap"
              title="Call for direct inquiries"
            >
              <Phone className="w-3.5 h-3.5 text-[#B7E61C]" />
              <span className="tabular-nums tracking-wide">{BUSINESS_CONFIG.displayPhone}</span>
            </a>

            <button
              onClick={onOpenConsultation}
              className="group relative inline-flex items-center gap-1.5 sm:gap-2 px-3.5 py-2 bg-[#B7E61C] hover:bg-[#C8F52A] text-[#111315] font-bold text-xs tracking-wider uppercase rounded-md transition-all duration-200 transform hover:-translate-y-0.5 shadow-sm lime-glow-subtle whitespace-nowrap focus:outline-none focus-visible:ring-2 focus-visible:ring-white"
            >
              <span>Get Started</span>
              <ArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </button>
          </div>

          {/* Mobile / Tablet Menu Toggle Button */}
          <div className="flex items-center gap-2 xl:hidden">
            <button
              onClick={onOpenConsultation}
              className="md:hidden px-2.5 py-1.5 bg-[#B7E61C] text-[#111315] font-bold text-[11px] uppercase tracking-wider rounded transition-colors"
            >
              Start
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-[#F5F7F2] hover:text-[#B7E61C] rounded-md focus:outline-none focus:ring-2 focus:ring-[#B7E61C]"
              aria-label={mobileMenuOpen ? 'Close Navigation Menu' : 'Open Navigation Menu'}
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Navigation */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#111315] border-b border-[#2C3236] px-4 pt-3 pb-6 shadow-2xl animate-in slide-in-from-top-4 duration-200">
          <div className="flex flex-col space-y-1">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center justify-between px-3 py-2.5 text-base font-medium text-[#F5F7F2] hover:text-[#B7E61C] hover:bg-[#1B1E20] rounded-md transition-colors"
              >
                <span>{link.label}</span>
                <ChevronRight className="w-4 h-4 text-[#70756F]" />
              </a>
            ))}
          </div>

          <div className="mt-5 pt-4 border-t border-[#2C3236] flex flex-col gap-3">
            <a
              href={`tel:${BUSINESS_CONFIG.phone}`}
              className="flex items-center justify-center gap-2 w-full py-3 bg-[#1B1E20] border border-[#2C3236] text-[#F5F7F2] rounded-md text-sm font-medium hover:border-[#B7E61C] transition-colors"
            >
              <Phone className="w-4 h-4 text-[#B7E61C]" />
              <span>Call {BUSINESS_CONFIG.displayPhone}</span>
            </a>

            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenConsultation();
              }}
              className="w-full py-3 bg-[#B7E61C] text-[#111315] font-semibold text-sm tracking-wider uppercase rounded-md shadow-md hover:bg-[#C8F52A] transition-colors"
            >
              Get a Smart Home Consultation
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
