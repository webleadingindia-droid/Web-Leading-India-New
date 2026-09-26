import React from 'react';
import { Phone, Mail, MapPin, Clock, ArrowRight, ShieldCheck, HeartPulse } from 'lucide-react';
import { businessInfo, servicesData, industriesData, locationsData } from '../data/websiteData';

interface FooterProps {
  onNavigate: (path: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  const handleNav = (path: string) => {
    onNavigate(path);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#071A3A] text-slate-300 pt-16 pb-12 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Highlight Banner */}
        <div className="bg-gradient-to-r from-[#0B5ED7]/20 via-[#14B8C4]/10 to-transparent border border-blue-500/20 rounded-2xl p-6 sm:p-8 mb-16 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div>
            <div className="flex items-center gap-2 text-[#14B8C4] text-xs font-bold uppercase tracking-wider mb-2">
              <HeartPulse className="w-4 h-4" /> Dedicated Healthcare Growth Agency
            </div>
            <h3 className="text-xl sm:text-2xl font-bold font-display text-white tracking-tight">
              Ready to attract more patients to your hospital or clinic?
            </h3>
            <p className="text-slate-400 text-sm mt-1 max-w-2xl">
              Request a free strategic practice audit and consultation with our healthcare marketing directors.
            </p>
          </div>
          <div className="flex items-center gap-3">
            <button
              onClick={() => handleNav('/get-quote')}
              className="px-5 py-2.5 text-xs font-bold text-white bg-[#0B5ED7] hover:bg-blue-600 rounded-lg transition-colors whitespace-nowrap shadow-md cursor-pointer"
            >
              Get Free Strategy
            </button>
            <a
              href={`tel:${businessInfo.phone}`}
              className="px-5 py-2.5 text-xs font-bold text-slate-200 bg-slate-800/80 hover:bg-slate-800 rounded-lg border border-slate-700 transition-colors whitespace-nowrap"
            >
              Call {businessInfo.phone}
            </a>
          </div>
        </div>

        {/* 5-Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-slate-800 text-xs">
          
          {/* Col 1: Business Identity & Contact */}
          <div className="lg:col-span-1 space-y-4">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-lg bg-[#0B5ED7] flex items-center justify-center text-white font-bold text-base shadow-sm">
                <span className="font-display">W</span>
              </div>
              <span className="text-lg font-bold font-display text-white tracking-tight">
                Web Leading India
              </span>
            </div>
            <p className="text-slate-400 text-xs leading-relaxed">
              Healthcare Digital Marketing & Patient Growth Agency serving hospitals, doctors, clinics, and medical brands across India.
            </p>
            <div className="space-y-2.5 pt-2 text-slate-300">
              <a href={`tel:${businessInfo.phone}`} className="flex items-center gap-2 hover:text-[#14B8C4] transition-colors">
                <Phone className="w-3.5 h-3.5 text-[#14B8C4] shrink-0" />
                <span>{businessInfo.phone}</span>
              </a>
              <a href={`mailto:${businessInfo.email}`} className="flex items-center gap-2 hover:text-[#14B8C4] transition-colors">
                <Mail className="w-3.5 h-3.5 text-[#14B8C4] shrink-0" />
                <span>{businessInfo.email}</span>
              </a>
              <div className="flex items-start gap-2 text-slate-400">
                <MapPin className="w-3.5 h-3.5 text-[#14B8C4] shrink-0 mt-0.5" />
                <span className="leading-snug">{businessInfo.address}</span>
              </div>
              <div className="flex items-start gap-2 text-slate-400">
                <Clock className="w-3.5 h-3.5 text-[#14B8C4] shrink-0 mt-0.5" />
                <span className="leading-snug">{businessInfo.hours.weekdays}<br/>{businessInfo.hours.saturday}</span>
              </div>
            </div>
          </div>

          {/* Col 2: Services */}
          <div>
            <h4 className="text-white font-bold text-sm tracking-tight mb-4 uppercase text-[11px] tracking-wider text-slate-400">
              Core Services
            </h4>
            <ul className="space-y-2">
              {servicesData.slice(0, 8).map(s => (
                <li key={s.id}>
                  <button 
                    onClick={() => handleNav(`/services/${s.slug}`)}
                    className="text-slate-400 hover:text-white transition-colors text-left"
                  >
                    {s.title}
                  </button>
                </li>
              ))}
              <li className="pt-1">
                <button 
                  onClick={() => handleNav('/services')}
                  className="text-[#14B8C4] font-semibold hover:underline flex items-center gap-1"
                >
                  View All 25+ Services <ArrowRight className="w-3 h-3" />
                </button>
              </li>
            </ul>
          </div>

          {/* Col 3: Medical Specialties */}
          <div>
            <h4 className="text-white font-bold text-sm tracking-tight mb-4 uppercase text-[11px] tracking-wider text-slate-400">
              Medical Specialties
            </h4>
            <ul className="space-y-2">
              {industriesData.slice(0, 8).map(ind => (
                <li key={ind.id}>
                  <button 
                    onClick={() => handleNav(`/industries/${ind.slug}`)}
                    className="text-slate-400 hover:text-white transition-colors text-left"
                  >
                    {ind.title}
                  </button>
                </li>
              ))}
              <li className="pt-1">
                <button 
                  onClick={() => handleNav('/industries')}
                  className="text-[#14B8C4] font-semibold hover:underline flex items-center gap-1"
                >
                  All 28+ Specialties <ArrowRight className="w-3 h-3" />
                </button>
              </li>
            </ul>
          </div>

          {/* Col 4: Top Locations */}
          <div>
            <h4 className="text-white font-bold text-sm tracking-tight mb-4 uppercase text-[11px] tracking-wider text-slate-400">
              Service Locations
            </h4>
            <ul className="space-y-2">
              {locationsData.slice(0, 8).map(loc => (
                <li key={loc.slug}>
                  <button 
                    onClick={() => handleNav(`/locations/${loc.slug}`)}
                    className="text-slate-400 hover:text-white transition-colors text-left"
                  >
                    Healthcare Marketing in {loc.city}
                  </button>
                </li>
              ))}
              <li className="pt-1">
                <button 
                  onClick={() => handleNav('/service-area')}
                  className="text-[#14B8C4] font-semibold hover:underline flex items-center gap-1"
                >
                  Service Directory & Map <ArrowRight className="w-3 h-3" />
                </button>
              </li>
            </ul>
          </div>

          {/* Col 5: Company & Resources */}
          <div>
            <h4 className="text-white font-bold text-sm tracking-tight mb-4 uppercase text-[11px] tracking-wider text-slate-400">
              Company & Guides
            </h4>
            <ul className="space-y-2">
              <li>
                <button onClick={() => handleNav('/about')} className="text-slate-400 hover:text-white transition-colors">
                  About Web Leading India
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('/process')} className="text-slate-400 hover:text-white transition-colors">
                  Our 10-Step Growth Process
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('/portfolio')} className="text-slate-400 hover:text-white transition-colors">
                  Client Project Portfolio
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('/case-studies')} className="text-slate-400 hover:text-white transition-colors">
                  Healthcare Case Studies
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('/pricing')} className="text-slate-400 hover:text-white transition-colors">
                  Transparent Pricing Packages
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('/blog')} className="text-slate-400 hover:text-white transition-colors">
                  Healthcare Marketing Blog
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('/resources')} className="text-slate-400 hover:text-white transition-colors">
                  Free Playbooks & Checklists
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('/faq')} className="text-slate-400 hover:text-white transition-colors">
                  Healthcare FAQs (40+ Questions)
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('/contact')} className="text-slate-400 hover:text-white transition-colors">
                  Contact Consultation Desk
                </button>
              </li>
            </ul>
          </div>

        </div>

        {/* Ethical Healthcare Disclaimer */}
        <div className="py-6 border-b border-slate-800 text-[11px] text-slate-400 leading-relaxed flex items-start gap-2.5">
          <ShieldCheck className="w-4 h-4 text-slate-500 shrink-0 mt-0.5" />
          <p>
            <strong className="text-slate-300">Ethical Healthcare Communication Policy:</strong> Web Leading India is a professional healthcare digital marketing, search optimization, website engineering, and branding agency. We develop marketing strategies and technological systems to facilitate patient discovery. We do not provide clinical medical diagnosis, medical advice, or surgical guarantees. In accordance with ethical advertising standards, marketing metrics and patient inquiry volumes vary based on clinical specialty, local competition, and doctor availability.
          </p>
        </div>

        {/* Bottom Legal Bar */}
        <div className="pt-6 flex flex-col md:flex-row items-center justify-between text-xs text-slate-400 gap-4">
          <div>
            © {new Date().getFullYear()} Web Leading India. All rights reserved.
          </div>
          <div className="flex flex-wrap items-center gap-4 text-xs">
            <button onClick={() => handleNav('/privacy-policy')} className="hover:text-white transition-colors">
              Privacy Policy
            </button>
            <span className="text-slate-600">·</span>
            <button onClick={() => handleNav('/terms-and-conditions')} className="hover:text-white transition-colors">
              Terms & Conditions
            </button>
            <span className="text-slate-600">·</span>
            <button onClick={() => handleNav('/cookie-policy')} className="hover:text-white transition-colors">
              Cookie Policy
            </button>
            <span className="text-slate-600">·</span>
            <button onClick={() => handleNav('/disclaimer')} className="hover:text-white transition-colors">
              Medical Disclaimer
            </button>
            <span className="text-slate-600">·</span>
            <button onClick={() => handleNav('/refund-policy')} className="hover:text-white transition-colors">
              Refund Policy
            </button>
            <span className="text-slate-600">·</span>
            <button onClick={() => handleNav('/sitemap')} className="hover:text-white transition-colors">
              Sitemap
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
};
