import React, { useState } from 'react';
import { X, CheckCircle, ArrowRight, Phone, Sparkles } from 'lucide-react';
import { BUSINESS_CONFIG } from '../config/business';
import { KLMLogo } from './KLMLogo';

interface ConsultationModalProps {
  isOpen: boolean;
  onClose: () => void;
  presetScope?: string;
}

export const ConsultationModal: React.FC<ConsultationModalProps> = ({ isOpen, onClose, presetScope }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [scope, setScope] = useState(presetScope || 'Smart Home Integration');
  const [timeline, setTimeline] = useState('1-3 Months');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    const subject = encodeURIComponent(`Project Consultation Request from ${name} - ${scope}`);
    const bodyContent = `KLM VENTURES - FAST CONSULTATION REQUEST\n` +
      `==========================================\n\n` +
      `CLIENT CONTACT:\n` +
      `• Name: ${name}\n` +
      `• Email: ${email}\n` +
      `• Phone: ${phone || 'Not provided'}\n\n` +
      `PROJECT DETAILS:\n` +
      `• Primary System Focus: ${scope}\n` +
      `• Target Timeline: ${timeline}\n` +
      `• Project Overview: ${message || 'None provided'}\n\n` +
      `Routed to: ${BUSINESS_CONFIG.inquiryRecipientEmail}`;

    const mailtoUrl = `mailto:${BUSINESS_CONFIG.inquiryRecipientEmail}?subject=${subject}&body=${encodeURIComponent(bodyContent)}`;

    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
      try {
        window.location.href = mailtoUrl;
      } catch (err) {
        console.error('Mail dispatch error:', err);
      }
    }, 500);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="relative w-full max-w-xl bg-[#1B1E20] border border-[#2C3236] rounded-2xl p-6 sm:p-8 shadow-2xl overflow-hidden max-h-[90vh] overflow-y-auto">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 text-[#70756F] hover:text-white rounded-full bg-[#111315] border border-[#2C3236] transition-colors"
          aria-label="Close modal"
        >
          <X className="w-4 h-4" />
        </button>

        {submitted ? (
          <div className="py-8 text-center space-y-4">
            <div className="w-14 h-14 rounded-full bg-[#B7E61C]/20 border border-[#B7E61C] text-[#B7E61C] flex items-center justify-center mx-auto mb-2">
              <CheckCircle className="w-8 h-8" />
            </div>
            <h3 className="font-display text-2xl font-bold text-white">
              Consultation Scheduled
            </h3>
            <p className="text-xs sm:text-sm text-[#F5F7F2]/80 max-w-md mx-auto leading-relaxed">
              Thank you, <span className="text-[#B7E61C] font-semibold">{name}</span>. Your consultation request has been sent to <span className="text-[#B7E61C] font-mono">{BUSINESS_CONFIG.inquiryRecipientEmail}</span>. An engineer will follow up with you within 24 hours.
            </p>
            <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-3">
              <a
                href={`tel:${BUSINESS_CONFIG.phone}`}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-2.5 bg-[#111315] border border-[#2C3236] text-xs font-semibold uppercase tracking-wider text-white rounded-md"
              >
                <Phone className="w-3.5 h-3.5 text-[#B7E61C]" />
                <span>Call Now: {BUSINESS_CONFIG.displayPhone}</span>
              </a>
              <button
                onClick={onClose}
                className="w-full sm:w-auto px-5 py-2.5 bg-[#B7E61C] text-[#111315] text-xs font-bold uppercase tracking-wider rounded-md"
              >
                Done
              </button>
            </div>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="pr-8 flex items-start justify-between gap-4">
              <div>
                <div className="flex items-center gap-2 text-xs font-mono text-[#B7E61C] uppercase tracking-wider mb-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#B7E61C]" />
                  <span>Smart Home & Low-Voltage Consultation</span>
                </div>
                <h3 className="font-display text-xl sm:text-2xl font-bold text-white">
                  Request Project Review
                </h3>
                <p className="text-xs text-[#70756F] mt-1">
                  Tell us about your property goals. We'll outline infrastructure options and recommendations.
                </p>
              </div>
              <div className="hidden sm:block flex-shrink-0 pt-1">
                <KLMLogo variant="original" size="sm" showGlow={true} />
              </div>
            </div>

            <div className="space-y-3 pt-2">
              <div>
                <label className="block text-[11px] font-mono text-[#F5F7F2]/80 uppercase mb-1">
                  Full Name *
                </label>
                <input
                  type="text"
                  required
                  placeholder="Your Name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full px-3.5 py-2.5 bg-[#111315] border border-[#2C3236] focus:border-[#B7E61C] focus:outline-none rounded-lg text-xs text-white"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-[11px] font-mono text-[#F5F7F2]/80 uppercase mb-1">
                    Email *
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="email@example.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full px-3.5 py-2.5 bg-[#111315] border border-[#2C3236] focus:border-[#B7E61C] focus:outline-none rounded-lg text-xs text-white"
                  />
                </div>
                <div>
                  <label className="block text-[11px] font-mono text-[#F5F7F2]/80 uppercase mb-1">
                    Phone *
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="(555) 000-0000"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="w-full px-3.5 py-2.5 bg-[#111315] border border-[#2C3236] focus:border-[#B7E61C] focus:outline-none rounded-lg text-xs text-white"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-[11px] font-mono text-[#F5F7F2]/80 uppercase mb-1">
                    Primary Interest
                  </label>
                  <select
                    value={scope}
                    onChange={(e) => setScope(e.target.value)}
                    className="w-full px-3.5 py-2.5 bg-[#111315] border border-[#2C3236] focus:border-[#B7E61C] focus:outline-none rounded-lg text-xs text-white"
                  >
                    <option value="Smart Home Integration">Smart Home System Integration</option>
                    <option value="Pre-Construction Pre-Wire">Pre-Construction / Low-Voltage Pre-Wire</option>
                    <option value="Architectural Lighting">Architectural Lighting Controls</option>
                    <option value="Security & Cameras">Security Cameras & Surveillance</option>
                    <option value="Commercial Systems">Commercial Building Automation</option>
                  </select>
                </div>

                <div>
                  <label className="block text-[11px] font-mono text-[#F5F7F2]/80 uppercase mb-1">
                    Timeline
                  </label>
                  <select
                    value={timeline}
                    onChange={(e) => setTimeline(e.target.value)}
                    className="w-full px-3.5 py-2.5 bg-[#111315] border border-[#2C3236] focus:border-[#B7E61C] focus:outline-none rounded-lg text-xs text-white"
                  >
                    <option value="Immediate">Immediate / Active Construction</option>
                    <option value="1-3 Months">1 – 3 Months</option>
                    <option value="3-6 Months">3 – 6 Months</option>
                    <option value="Planning">Planning & Blueprints</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-[11px] font-mono text-[#F5F7F2]/80 uppercase mb-1">
                  Project Details
                </label>
                <textarea
                  rows={3}
                  placeholder="Address or city, property size, key requirements..."
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  className="w-full px-3.5 py-2.5 bg-[#111315] border border-[#2C3236] focus:border-[#B7E61C] focus:outline-none rounded-lg text-xs text-white resize-none"
                />
              </div>
            </div>

            <div className="pt-2">
              <button
                type="submit"
                disabled={loading}
                className="w-full inline-flex items-center justify-center gap-2 py-3.5 bg-[#B7E61C] hover:bg-[#C8F52A] text-[#111315] font-bold text-xs tracking-wider uppercase rounded-md transition-all lime-glow"
              >
                {loading ? <span>Scheduling...</span> : (
                  <>
                    <span>Submit Consultation Request</span>
                    <ArrowRight className="w-4 h-4" />
                  </>
                )}
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
};
