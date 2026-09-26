import React from 'react';
import { ShieldCheck, ArrowLeft, FileText } from 'lucide-react';
import { businessInfo, servicesData, industriesData, locationsData } from '../data/websiteData';
import { Breadcrumbs } from '../components/Breadcrumbs';

interface LegalPageProps {
  type: 'privacy' | 'terms' | 'cookie' | 'disclaimer' | 'refund' | 'sitemap';
  onNavigate: (path: string) => void;
}

export const LegalPages: React.FC<LegalPageProps> = ({ type, onNavigate }) => {
  const titles = {
    privacy: 'Privacy Policy',
    terms: 'Terms & Conditions',
    cookie: 'Cookie Policy',
    disclaimer: 'Medical & Advertising Disclaimer',
    refund: 'Refund & Cancellation Policy',
    sitemap: 'Website HTML Sitemap'
  };

  return (
    <div className="space-y-12">
      <Breadcrumbs 
        items={[
          { label: titles[type] }
        ]} 
        onNavigate={onNavigate} 
      />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pb-16 space-y-8">
        
        <div className="pb-6 border-b border-slate-200 space-y-2">
          <span className="text-xs font-bold uppercase tracking-wider text-[#0B5ED7]">
            Web Leading India Legal Documentation
          </span>
          <h1 className="text-3xl font-extrabold font-display text-[#071A3A]">
            {titles[type]}
          </h1>
          <p className="text-xs text-slate-500">
            Last updated: February 2026 · Compliant with Indian Information Technology regulations.
          </p>
        </div>

        {/* Content based on type */}
        {type === 'privacy' && (
          <div className="prose prose-slate max-w-none text-xs sm:text-sm text-slate-700 space-y-4 leading-relaxed">
            <h3 className="text-base font-bold text-[#071A3A]">1. Introduction & Data Controller</h3>
            <p>
              Web Leading India ("we", "our", or "us"), located at C-1, 135, Gali No. 11, Ramesh Enclave, Phase 3, Kirari Suleman Nagar, Delhi - 110086, operates as a healthcare digital marketing and software agency. This Privacy Policy outlines our procedures for collecting, processing, and safeguarding business and practitioner inquiries.
            </p>

            <h3 className="text-base font-bold text-[#071A3A]">2. Information We Collect</h3>
            <p>
              When you submit an inquiry or request an AI practice audit, we collect your name, professional title, official email, phone number, clinic or hospital name, website URL, and practice location. We do not store sensitive patient medical health records on behalf of prospective marketing clients.
            </p>

            <h3 className="text-base font-bold text-[#071A3A]">3. How We Use Collected Data</h3>
            <p>
              Your contact details are used strictly to prepare tailored healthcare digital marketing proposals, schedule consultation calls, and communicate project deliverables. We never sell, rent, or trade your practice data with third-party advertisers.
            </p>

            <h3 className="text-base font-bold text-[#071A3A]">4. Contact For Privacy Matters</h3>
            <p>
              For questions regarding your data or to request removal from our communications, contact us at <a href={`mailto:${businessInfo.email}`} className="text-[#0B5ED7] underline">{businessInfo.email}</a>.
            </p>
          </div>
        )}

        {type === 'terms' && (
          <div className="prose prose-slate max-w-none text-xs sm:text-sm text-slate-700 space-y-4 leading-relaxed">
            <h3 className="text-base font-bold text-[#071A3A]">1. Agreement to Terms</h3>
            <p>
              By accessing the Web Leading India website or engaging our services, you agree to these Terms and Conditions. Our services include healthcare digital marketing, search engine optimization, website development, and software consultation.
            </p>

            <h3 className="text-base font-bold text-[#071A3A]">2. Scope of Services & Deliverables</h3>
            <p>
              All service scopes, timelines, milestone deliverables, and fees are defined in individual statements of work (SOW) or package specifications. Web Leading India executes projects with high professional diligence.
            </p>

            <h3 className="text-base font-bold text-[#071A3A]">3. Ownership of Digital Assets</h3>
            <p>
              Upon receipt of final milestone payments, the client retains 100% legal ownership of their custom website codebase, domain credentials, and ad account setups.
            </p>
          </div>
        )}

        {type === 'cookie' && (
          <div className="prose prose-slate max-w-none text-xs sm:text-sm text-slate-700 space-y-4 leading-relaxed">
            <h3 className="text-base font-bold text-[#071A3A]">1. What Are Cookies</h3>
            <p>
              Cookies are small text files placed on your device to enhance navigation, analyze site traffic, and optimize user experience.
            </p>
            <h3 className="text-base font-bold text-[#071A3A]">2. Cookies We Utilize</h3>
            <p>
              We utilize essential technical cookies for page navigation, session management, and anonymous analytical metrics to understand which healthcare service pages are most valuable to practitioners.
            </p>
          </div>
        )}

        {type === 'disclaimer' && (
          <div className="prose prose-slate max-w-none text-xs sm:text-sm text-slate-700 space-y-4 leading-relaxed">
            <div className="p-4 bg-amber-50 border-l-4 border-amber-500 rounded-r-xl text-amber-900 text-xs">
              <strong>Strict Clinical & Advertising Disclaimer:</strong> Web Leading India is a digital marketing, search engine optimization, and website engineering consultancy. We do not provide clinical medical diagnosis, medical treatments, medical advice, or physician services.
            </div>

            <h3 className="text-base font-bold text-[#071A3A]">1. No Guarantee of Marketing Metrics or ROI</h3>
            <p>
              In accordance with responsible marketing ethics and medical advertising standards, Web Leading India does not guarantee specific patient volumes, #1 Google rankings, or guaranteed return on investment. Search engine visibility and advertising outcomes vary based on clinical specialty, local geographical competition, doctor credentials, and front-desk appointment response speed.
            </p>

            <h3 className="text-base font-bold text-[#071A3A]">2. Medical Advertising Compliance</h3>
            <p>
              Practitioners and hospitals engaging our services remain responsible for ensuring that all published medical credentials, council registrations, and clinical claims comply with the Medical Council of India (NMC) regulations and applicable local healthcare laws.
            </p>
          </div>
        )}

        {type === 'refund' && (
          <div className="prose prose-slate max-w-none text-xs sm:text-sm text-slate-700 space-y-4 leading-relaxed">
            <h3 className="text-base font-bold text-[#071A3A]">1. Milestone-Based Service Policy</h3>
            <p>
              Web Leading India operates with clear milestone approvals for website development and digital setup. For one-time website packages, advance mobilization fees cover initial UI design, wireframing, and architecture setup and are non-refundable once work has commenced.
            </p>
            <h3 className="text-base font-bold text-[#071A3A]">2. Monthly Marketing Retainers</h3>
            <p>
              Monthly digital marketing services (SEO, PPC, Social Media) operate on 30-day billing cycles with no long-term lock-ins. Clients may cancel or pause retainers by providing 15 days written notice prior to the subsequent monthly billing cycle.
            </p>
          </div>
        )}

        {type === 'sitemap' && (
          <div className="space-y-6 text-xs text-slate-700">
            <div>
              <h3 className="text-sm font-bold text-[#071A3A] mb-2">Main Pages</h3>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                {[
                  { label: 'Home', path: '/' },
                  { label: 'About Us', path: '/about' },
                  { label: 'Services', path: '/services' },
                  { label: 'Industries', path: '/industries' },
                  { label: 'Solutions', path: '/solutions' },
                  { label: 'Portfolio', path: '/portfolio' },
                  { label: 'Case Studies', path: '/case-studies' },
                  { label: 'Pricing', path: '/pricing' },
                  { label: 'Process', path: '/process' },
                  { label: 'Blog', path: '/blog' },
                  { label: 'Resources', path: '/resources' },
                  { label: 'Locations', path: '/locations' },
                  { label: 'Service Area Directory', path: '/service-area' },
                  { label: 'FAQs', path: '/faq' },
                  { label: 'Get Free Strategy', path: '/get-quote' },
                  { label: 'Contact', path: '/contact' }
                ].map(link => (
                  <button
                    key={link.path}
                    onClick={() => onNavigate(link.path)}
                    className="text-left text-[#0B5ED7] hover:underline p-1.5 rounded hover:bg-slate-50 cursor-pointer"
                  >
                    {link.label}
                  </button>
                ))}
              </div>
            </div>

            <div className="pt-4 border-t border-slate-200">
              <h3 className="text-sm font-bold text-[#071A3A] mb-2">Key Service Pages</h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                {servicesData.map(s => (
                  <button
                    key={s.id}
                    onClick={() => onNavigate(`/services/${s.slug}`)}
                    className="text-left text-slate-600 hover:text-[#0B5ED7] p-1 truncate"
                  >
                    {s.title}
                  </button>
                ))}
              </div>
            </div>

            <div className="pt-4 border-t border-slate-200">
              <h3 className="text-sm font-bold text-[#071A3A] mb-2">Medical Specialties</h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                {industriesData.map(ind => (
                  <button
                    key={ind.id}
                    onClick={() => onNavigate(`/industries/${ind.slug}`)}
                    className="text-left text-slate-600 hover:text-[#0B5ED7] p-1 truncate"
                  >
                    {ind.title}
                  </button>
                ))}
              </div>
            </div>

            <div className="pt-4 border-t border-slate-200">
              <h3 className="text-sm font-bold text-[#071A3A] mb-2">Service Metro Hubs</h3>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                {locationsData.map(loc => (
                  <button
                    key={loc.slug}
                    onClick={() => onNavigate(`/locations/${loc.slug}`)}
                    className="text-left text-slate-600 hover:text-[#0B5ED7] p-1 truncate"
                  >
                    {loc.city} ({loc.state})
                  </button>
                ))}
              </div>
            </div>
          </div>
        )}

        <div className="pt-6 border-t border-slate-200">
          <button
            onClick={() => onNavigate('/')}
            className="text-xs font-bold text-[#0B5ED7] hover:underline flex items-center gap-1.5 cursor-pointer"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Return to Homepage</span>
          </button>
        </div>

      </div>
    </div>
  );
};
