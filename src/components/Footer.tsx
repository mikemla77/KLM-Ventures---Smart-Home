import React from 'react';
import { Phone, Mail, MapPin, ArrowUpRight, ShieldCheck } from 'lucide-react';
import { BUSINESS_CONFIG } from '../config/business';
import { KLMLogo } from './KLMLogo';

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#0D0F10] text-[#70756F] border-t border-[#1B1E20] pt-16 pb-24 lg:pb-12 text-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-[#1B1E20]">
          
          {/* Brand Column (2 cols on lg) */}
          <div className="lg:col-span-2 space-y-4">
            <a href="#" className="inline-flex items-center gap-3.5 group focus:outline-none" aria-label="KLM Ventures Home">
              <KLMLogo variant="original" size="lg" showGlow={true} />
              <div className="flex flex-col justify-center leading-tight">
                <span className="font-display text-2xl font-bold tracking-tight text-white">
                  KLM <span className="text-[#A3E635]">VENTURES</span>
                </span>
                <span className="text-[10px] font-mono uppercase tracking-[0.16em] text-[#70756F]">
                  Systems Integration
                </span>
              </div>
            </a>
            
            <p className="text-[#F5F7F2]/75 max-w-sm leading-relaxed font-light text-xs">
              Architectural smart home system integration, low-voltage infrastructure, custom lighting controls, and commercial building technology. One system. One experience.
            </p>

            <div className="pt-2 space-y-2 text-xs text-[#F5F7F2]/80">
              <div className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-[#B7E61C]" />
                <a href={`tel:${BUSINESS_CONFIG.phone}`} className="hover:text-white transition-colors">
                  {BUSINESS_CONFIG.displayPhone}
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-[#B7E61C]" />
                <a href={`mailto:${BUSINESS_CONFIG.email}`} className="hover:text-white transition-colors">
                  Send Email
                </a>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="w-3.5 h-3.5 text-[#B7E61C]" />
                <span>{BUSINESS_CONFIG.serviceArea}</span>
              </div>
            </div>
          </div>

          {/* Core Navigation Column */}
          <div>
            <h4 className="font-mono text-white text-xs uppercase tracking-wider mb-4">
              Disciplines
            </h4>
            <ul className="space-y-2.5">
              <li>
                <a href="#smart-home" className="hover:text-[#B7E61C] transition-colors">Smart Home Integration</a>
              </li>
              <li>
                <a href="#lighting" className="hover:text-[#B7E61C] transition-colors">Architectural Lighting</a>
              </li>
              <li>
                <a href="#security" className="hover:text-[#B7E61C] transition-colors">Security & Surveillance</a>
              </li>
              <li>
                <a href="#infrastructure" className="hover:text-[#B7E61C] transition-colors">Behind The Walls (Low-Voltage)</a>
              </li>
              <li>
                <a href="#services" className="hover:text-[#B7E61C] transition-colors">Full Services Directory</a>
              </li>
            </ul>
          </div>

          {/* Sectors Column */}
          <div>
            <h4 className="font-mono text-white text-xs uppercase tracking-wider mb-4">
              Sectors & Scope
            </h4>
            <ul className="space-y-2.5">
              <li>
                <a href="#residential" className="hover:text-[#B7E61C] transition-colors">Residential Estates</a>
              </li>
              <li>
                <a href="#commercial" className="hover:text-[#B7E61C] transition-colors">Commercial & Offices</a>
              </li>
              <li>
                <a href="#infrastructure" className="hover:text-[#B7E61C] transition-colors">New Construction Pre-Wire</a>
              </li>
              <li>
                <a href="#projects" className="hover:text-[#B7E61C] transition-colors">Featured Projects</a>
              </li>
              <li>
                <a href="#about" className="hover:text-[#B7E61C] transition-colors">About & Licensing</a>
              </li>
            </ul>
          </div>

          {/* Consultation & Legal Column */}
          <div>
            <h4 className="font-mono text-white text-xs uppercase tracking-wider mb-4">
              Get Started
            </h4>
            <ul className="space-y-2.5">
              <li>
                <a href="#contact" className="hover:text-[#B7E61C] transition-colors flex items-center gap-1">
                  <span>Request Consultation</span>
                  <ArrowUpRight className="w-3 h-3 text-[#B7E61C]" />
                </a>
              </li>
              <li>
                <a href="#infrastructure" className="hover:text-[#B7E61C] transition-colors">Submit Blueprints</a>
              </li>
              <li>
                <a href="#about" className="hover:text-[#B7E61C] transition-colors">General Contractor Partnering</a>
              </li>
              <li>
                <span className="text-[#70756F]">{BUSINESS_CONFIG.licensePlaceholder}</span>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar: Copyright & Terms */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#70756F]">
          <div>
            © {currentYear} {BUSINESS_CONFIG.companyName}. All Rights Reserved.
          </div>

          <div className="flex items-center gap-6">
            <span className="hover:text-white cursor-pointer transition-colors">Privacy Policy</span>
            <span className="hover:text-white cursor-pointer transition-colors">Terms of Service</span>
            <span className="hover:text-white cursor-pointer transition-colors">Low-Voltage Warranty</span>
          </div>
        </div>

      </div>
    </footer>
  );
};
