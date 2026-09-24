import React, { useState } from 'react';
import { 
  Send, 
  Phone, 
  Mail, 
  MapPin, 
  CheckCircle, 
  ArrowRight, 
  Calendar, 
  Building, 
  Sparkles,
  ShieldCheck
} from 'lucide-react';
import { BUSINESS_CONFIG } from '../config/business';

interface ContactFormProps {
  initialService?: string;
}

export const ContactAndInquiryForm: React.FC<ContactFormProps> = ({ initialService }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    projectType: 'Smart Home Integration',
    propertyType: 'Luxury Estate / Single Family',
    projectAddress: '',
    timeline: '1-3 Months',
    servicesNeeded: initialService ? [initialService] : ['Smart Home System Integration', 'Architectural LED Lighting'],
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  const availableServices = [
    'Smart Home System Integration',
    'Architectural LED Lighting & Controls',
    'Security Cameras & Video Surveillance',
    'Security Systems & Access Control',
    'Low-Voltage Cabling & Pre-Wire',
    'Enterprise Networking & Wi-Fi',
    'Voice Control & Custom Automation',
    'Commercial Building Technology'
  ];

  const handleServiceToggle = (svc: string) => {
    setFormData(prev => {
      const exists = prev.servicesNeeded.includes(svc);
      if (exists) {
        return { ...prev, servicesNeeded: prev.servicesNeeded.filter(s => s !== svc) };
      } else {
        return { ...prev, servicesNeeded: [...prev.servicesNeeded, svc] };
      }
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name.trim() || !formData.email.trim() || !formData.phone.trim()) {
      setErrorMsg('Please fill in your name, email, and phone number.');
      return;
    }

    setErrorMsg('');
    setLoading(true);

    // Prepare email package for mike@klmventure.com
    const subject = encodeURIComponent(`New Project Inquiry from ${formData.name} - ${formData.projectType}`);
    const bodyContent = `KLM VENTURES - NEW PROJECT INQUIRY\n` +
      `==========================================\n\n` +
      `CONTACT INFORMATION:\n` +
      `• Full Name: ${formData.name}\n` +
      `• Email: ${formData.email}\n` +
      `• Phone: ${formData.phone}\n\n` +
      `PROJECT SPECIFICATIONS:\n` +
      `• Project Type: ${formData.projectType}\n` +
      `• Property Type: ${formData.propertyType}\n` +
      `• Target Timeline: ${formData.timeline}\n` +
      `• Address / Location: ${formData.projectAddress || 'Not specified'}\n\n` +
      `SYSTEMS & SCOPE REQUESTED:\n` +
      `${formData.servicesNeeded.map(s => `• ${s}`).join('\n')}\n\n` +
      `PROJECT NOTES / SCOPE DETAILS:\n` +
      `${formData.message || 'None provided'}\n\n` +
      `Submitted via KLM Ventures Portal to: ${BUSINESS_CONFIG.inquiryRecipientEmail}`;

    const mailtoUrl = `mailto:${BUSINESS_CONFIG.inquiryRecipientEmail}?subject=${subject}&body=${encodeURIComponent(bodyContent)}`;

    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
      // Trigger user's mail client to dispatch directly to mike@klmventure.com
      try {
        window.location.href = mailtoUrl;
      } catch (err) {
        console.error('Mail dispatch error:', err);
      }
    }, 600);
  };

  return (
    <section id="contact" className="py-24 bg-[#111315] relative overflow-hidden border-t border-[#1B1E20]">
      {/* Background Grid Pattern */}
      <div className="absolute inset-0 bg-blueprint-grid opacity-25 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="flex items-center gap-2 text-xs font-semibold tracking-widest text-[#B7E61C] uppercase mb-3">
            <span className="w-1.5 h-1.5 rounded-full bg-[#B7E61C]" />
            <span>Consultation & Project Inquiry</span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white mb-4 text-balance">
            TELL US ABOUT <br />
            <span className="text-[#B7E61C]">YOUR PROJECT.</span>
          </h2>
          <p className="text-base text-[#F5F7F2]/80 leading-relaxed font-light">
            Whether you have architectural blueprints ready for pre-wire specification or are exploring how to modernize an existing residence, our systems engineers will guide you through options.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Direct Contact Info & Guarantees (5 cols) */}
          <div className="lg:col-span-5 space-y-8">
            
            {/* Phone Card Callout */}
            <div className="p-6 sm:p-8 bg-[#1B1E20] border border-[#2C3236] rounded-2xl">
              <span className="text-xs font-mono text-[#B7E61C] uppercase tracking-wider block mb-2">Immediate Assistance</span>
              <h3 className="font-display text-xl sm:text-2xl font-bold text-white mb-2">
                Speak Directly With An Engineer
              </h3>
              <p className="text-xs text-[#F5F7F2]/75 leading-relaxed mb-6 font-light">
                Have an urgent question regarding construction rough-in schedules or active blueprints?
              </p>

              <a
                href={`tel:${BUSINESS_CONFIG.phone}`}
                className="inline-flex items-center justify-center gap-3 w-full py-4 bg-[#B7E61C] hover:bg-[#C8F52A] text-[#111315] font-bold text-sm tracking-wider uppercase rounded-md transition-all lime-glow"
              >
                <Phone className="w-4 h-4" />
                <span>Call {BUSINESS_CONFIG.displayPhone}</span>
              </a>
              <span className="text-[10px] text-[#70756F] text-center block mt-2 font-mono">
                Direct Line · Mon–Fri 8am–6pm (Emergency on-call available)
              </span>
            </div>

            {/* Contact Channels */}
            <div className="p-6 bg-[#16181A] border border-[#2C3236] rounded-xl space-y-4 text-xs">
              <div className="flex items-start gap-3">
                <Mail className="w-4 h-4 text-[#B7E61C] shrink-0 mt-0.5" />
                <div>
                  <span className="text-[#70756F] uppercase block text-[10px]">Email Inquiries</span>
                  <a href={`mailto:${BUSINESS_CONFIG.email}`} className="text-white hover:text-[#B7E61C] transition-colors font-medium">
                    Send Email
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-3 pt-3 border-t border-[#2C3236]">
                <MapPin className="w-4 h-4 text-[#B7E61C] shrink-0 mt-0.5" />
                <div>
                  <span className="text-[#70756F] uppercase block text-[10px]">Service Area</span>
                  <span className="text-white font-medium">{BUSINESS_CONFIG.serviceArea}</span>
                </div>
              </div>

              <div className="flex items-start gap-3 pt-3 border-t border-[#2C3236]">
                <ShieldCheck className="w-4 h-4 text-[#B7E61C] shrink-0 mt-0.5" />
                <div>
                  <span className="text-[#70756F] uppercase block text-[10px]">Privacy & Security</span>
                  <span className="text-[#F5F7F2]/80">All blueprints, layouts, and estate details are held in strict non-disclosure confidence.</span>
                </div>
              </div>
            </div>

            {/* Consultation Promise */}
            <div className="p-5 bg-[#1B1E20] border border-[#2C3236] rounded-xl text-xs space-y-2">
              <span className="text-white font-semibold block">What Happens Next:</span>
              <div className="flex items-start gap-2 text-[#F5F7F2]/75">
                <span className="w-1.5 h-1.5 rounded-full bg-[#B7E61C] shrink-0 mt-1.5" />
                <span>We review your requirements or CAD floor plans within 24 business hours.</span>
              </div>
              <div className="flex items-start gap-2 text-[#F5F7F2]/75">
                <span className="w-1.5 h-1.5 rounded-full bg-[#B7E61C] shrink-0 mt-1.5" />
                <span>We schedule a 30-minute discovery call or on-site walkthrough.</span>
              </div>
              <div className="flex items-start gap-2 text-[#F5F7F2]/75">
                <span className="w-1.5 h-1.5 rounded-full bg-[#B7E61C] shrink-0 mt-1.5" />
                <span>You receive an itemized technology specification & low-voltage scope.</span>
              </div>
            </div>

          </div>

          {/* Right Column: Interactive Consultation Form (7 cols) */}
          <div className="lg:col-span-7 bg-[#1B1E20] border border-[#2C3236] rounded-2xl p-6 sm:p-10">
            {submitted ? (
              <div className="py-12 text-center space-y-4 animate-in fade-in duration-300">
                <div className="w-16 h-16 rounded-full bg-[#B7E61C]/20 border border-[#B7E61C] text-[#B7E61C] flex items-center justify-center mx-auto mb-4">
                  <CheckCircle className="w-8 h-8" />
                </div>
                <h3 className="font-display text-2xl sm:text-3xl font-bold text-white">
                  Consultation Request Received
                </h3>
                <p className="text-sm text-[#F5F7F2]/80 max-w-md mx-auto leading-relaxed">
                  Thank you, <span className="text-[#B7E61C] font-semibold">{formData.name}</span>. Your project parameters have been routed directly to <span className="text-[#B7E61C] font-mono">{BUSINESS_CONFIG.inquiryRecipientEmail}</span>. An engineer will reach out at <span className="text-white font-medium">{formData.phone}</span> or <span className="text-white font-medium">{formData.email}</span> within 24 hours.
                </p>
                <div className="pt-6">
                  <button
                    onClick={() => {
                      setSubmitted(false);
                      setFormData({
                        name: '',
                        email: '',
                        phone: '',
                        projectType: 'Smart Home Integration',
                        propertyType: 'Luxury Estate / Single Family',
                        projectAddress: '',
                        timeline: '1-3 Months',
                        servicesNeeded: ['Smart Home System Integration'],
                        message: ''
                      });
                    }}
                    className="px-6 py-2.5 bg-[#24292C] hover:bg-[#2C3236] text-white text-xs font-semibold uppercase tracking-wider rounded-md transition-colors"
                  >
                    Submit Another Inquiry
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <h3 className="font-display text-xl font-bold text-white mb-1">
                    Request a Smart Home & Low-Voltage Consultation
                  </h3>
                  <p className="text-xs text-[#70756F]">
                    No obligation · Professional engineering guidance
                  </p>
                </div>

                {errorMsg && (
                  <div className="p-3 bg-red-950/50 border border-red-800 text-red-200 text-xs rounded-md">
                    {errorMsg}
                  </div>
                )}

                {/* Name, Email, Phone Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="sm:col-span-2">
                    <label className="block text-xs font-mono text-[#F5F7F2]/80 uppercase tracking-wider mb-1.5">
                      Your Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Marcus Vance"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-3 bg-[#111315] border border-[#2C3236] focus:border-[#B7E61C] focus:outline-none rounded-lg text-sm text-white placeholder-[#70756F] transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-mono text-[#F5F7F2]/80 uppercase tracking-wider mb-1.5">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="e.g. marcus@example.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-3 bg-[#111315] border border-[#2C3236] focus:border-[#B7E61C] focus:outline-none rounded-lg text-sm text-white placeholder-[#70756F] transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-mono text-[#F5F7F2]/80 uppercase tracking-wider mb-1.5">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="(555) 000-0000"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full px-4 py-3 bg-[#111315] border border-[#2C3236] focus:border-[#B7E61C] focus:outline-none rounded-lg text-sm text-white placeholder-[#70756F] transition-colors"
                    />
                  </div>
                </div>

                {/* Project Type & Property Type */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-mono text-[#F5F7F2]/80 uppercase tracking-wider mb-1.5">
                      Project Phase / Type
                    </label>
                    <select
                      value={formData.projectType}
                      onChange={(e) => setFormData({ ...formData, projectType: e.target.value })}
                      className="w-full px-4 py-3 bg-[#111315] border border-[#2C3236] focus:border-[#B7E61C] focus:outline-none rounded-lg text-sm text-white transition-colors"
                    >
                      <option value="New Construction">New Construction (Pre-Wire / Rough-In)</option>
                      <option value="Major Remodel">Major Remodel</option>
                      <option value="Existing Home Retrofit">Existing Home Upgrade</option>
                      <option value="Commercial Project">Commercial / Office Fit-Out</option>
                      <option value="Design & Schematic Consultation">Design Consultation / Blueprint Review</option>
                      <option value="Security & Cameras Upgrade">Security & Camera System</option>
                      <option value="Architectural Lighting Overhaul">Architectural Lighting Overhaul</option>
                      <option value="Other">Other Custom Inquiry</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-mono text-[#F5F7F2]/80 uppercase tracking-wider mb-1.5">
                      Property Category
                    </label>
                    <select
                      value={formData.propertyType}
                      onChange={(e) => setFormData({ ...formData, propertyType: e.target.value })}
                      className="w-full px-4 py-3 bg-[#111315] border border-[#2C3236] focus:border-[#B7E61C] focus:outline-none rounded-lg text-sm text-white transition-colors"
                    >
                      <option value="Single Family / Estate">Single Family Residence / Estate</option>
                      <option value="Architectural Villa">Luxury Villa / Custom Build</option>
                      <option value="Multi-Unit / Condo">Multi-Unit Residence / Penthouse</option>
                      <option value="Corporate Office">Corporate Office / Commercial</option>
                      <option value="Retail / Restaurant">Retail / Hospitality</option>
                      <option value="Architect / Builder Partner">Architect / Builder Partnership</option>
                    </select>
                  </div>
                </div>

                {/* Address & Timeline */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-mono text-[#F5F7F2]/80 uppercase tracking-wider mb-1.5">
                      Project City or Address
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. Westside Estates / City"
                      value={formData.projectAddress}
                      onChange={(e) => setFormData({ ...formData, projectAddress: e.target.value })}
                      className="w-full px-4 py-3 bg-[#111315] border border-[#2C3236] focus:border-[#B7E61C] focus:outline-none rounded-lg text-sm text-white placeholder-[#70756F] transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-mono text-[#F5F7F2]/80 uppercase tracking-wider mb-1.5">
                      Estimated Project Timeline
                    </label>
                    <select
                      value={formData.timeline}
                      onChange={(e) => setFormData({ ...formData, timeline: e.target.value })}
                      className="w-full px-4 py-3 bg-[#111315] border border-[#2C3236] focus:border-[#B7E61C] focus:outline-none rounded-lg text-sm text-white transition-colors"
                    >
                      <option value="Immediate / Ready Now">Immediate / Active Construction</option>
                      <option value="1-3 Months">1 – 3 Months</option>
                      <option value="3-6 Months">3 – 6 Months</option>
                      <option value="Planning / Architectural Phase">Planning / Blueprint Design Stage</option>
                    </select>
                  </div>
                </div>

                {/* Multi-Select Services Needed */}
                <div>
                  <label className="block text-xs font-mono text-[#F5F7F2]/80 uppercase tracking-wider mb-2">
                    Services Needed (Select all that apply)
                  </label>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {availableServices.map((svc) => {
                      const isChecked = formData.servicesNeeded.includes(svc);
                      return (
                        <button
                          type="button"
                          key={svc}
                          onClick={() => handleServiceToggle(svc)}
                          className={`flex items-center gap-2 p-2.5 rounded-lg border text-left text-xs transition-colors ${
                            isChecked
                              ? 'bg-[#111315] border-[#B7E61C] text-white font-medium'
                              : 'bg-[#16181A] border-[#2C3236] text-[#70756F] hover:text-white'
                          }`}
                        >
                          <div className={`w-3.5 h-3.5 rounded flex items-center justify-center text-[10px] border ${
                            isChecked ? 'bg-[#B7E61C] border-[#B7E61C] text-[#111315]' : 'border-[#70756F]'
                          }`}>
                            {isChecked && '✓'}
                          </div>
                          <span className="truncate">{svc}</span>
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* Project Message */}
                <div>
                  <label className="block text-xs font-mono text-[#F5F7F2]/80 uppercase tracking-wider mb-1.5">
                    Tell Us About Your Project & Goals
                  </label>
                  <textarea
                    rows={4}
                    placeholder="Describe your space, architectural goals, key features (e.g. lighting scenes, invisible audio, security cameras), or builder coordination details..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-4 py-3 bg-[#111315] border border-[#2C3236] focus:border-[#B7E61C] focus:outline-none rounded-lg text-sm text-white placeholder-[#70756F] transition-colors resize-none"
                  />
                </div>

                {/* Submit Action */}
                <button
                  type="submit"
                  disabled={loading}
                  className="w-full inline-flex items-center justify-center gap-3 py-4 bg-[#B7E61C] hover:bg-[#C8F52A] text-[#111315] font-bold text-sm tracking-wider uppercase rounded-md transition-all lime-glow disabled:opacity-50"
                >
                  {loading ? (
                    <span>Submitting Project Inquiry...</span>
                  ) : (
                    <>
                      <span>Request A Consultation</span>
                      <ArrowRight className="w-4 h-4" />
                    </>
                  )}
                </button>
              </form>
            )}
          </div>

        </div>

      </div>
    </section>
  );
};
