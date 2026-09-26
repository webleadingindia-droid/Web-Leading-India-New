import React, { useState } from 'react';
import { 
  ArrowRight, 
  CheckCircle2, 
  AlertCircle, 
  ChevronDown, 
  Phone, 
  Sparkles, 
  Building2, 
  ShieldCheck, 
  Clock,
  Layers,
  FileCheck2
} from 'lucide-react';
import { servicesData, businessInfo, ServiceItem } from '../data/websiteData';
import { Breadcrumbs } from '../components/Breadcrumbs';

interface ServiceDetailPageProps {
  slug: string;
  onNavigate: (path: string) => void;
  onOpenAudit: () => void;
}

export const ServiceDetailPage: React.FC<ServiceDetailPageProps> = ({ slug, onNavigate, onOpenAudit }) => {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  // Find exact service or fallback
  const service: ServiceItem = servicesData.find(s => s.slug === slug) || servicesData[0];
  const relatedServices = servicesData.filter(s => s.slug !== service.slug && s.category === service.category).slice(0, 3);

  return (
    <div className="space-y-16">
      
      <Breadcrumbs 
        items={[
          { label: 'Services', path: '/services' },
          { label: service.title }
        ]} 
        onNavigate={onNavigate} 
      />

      {/* 1. HERO SECTION */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#071A3A] text-white rounded-3xl p-8 sm:p-14 relative overflow-hidden">
          <div className="max-w-3xl space-y-4">
            <span className="text-xs font-bold uppercase tracking-wider text-[#14B8C4]">
              {service.category} · Healthcare Specialization
            </span>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-display tracking-tight text-white leading-tight">
              {service.title}
            </h1>
            <p className="text-base sm:text-lg text-slate-300 font-medium">
              {service.heroTagline}
            </p>
            <p className="text-xs sm:text-sm text-slate-400 leading-relaxed max-w-2xl">
              {service.shortDesc}
            </p>

            <div className="pt-4 flex flex-wrap items-center gap-3">
              <button
                onClick={() => onNavigate('/get-quote')}
                className="px-6 py-3 bg-[#0B5ED7] hover:bg-blue-600 text-white text-xs sm:text-sm font-bold rounded-xl transition-colors cursor-pointer shadow-md"
              >
                Request Custom Strategy Proposal
              </button>
              <a
                href={`tel:${businessInfo.phone}`}
                className="px-5 py-3 bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs sm:text-sm font-semibold rounded-xl border border-slate-700 transition-colors flex items-center gap-2"
              >
                <Phone className="w-4 h-4 text-[#14B8C4]" />
                <span>Call {businessInfo.phone}</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* 2. HEALTHCARE BUSINESS CHALLENGES */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-10">
          <span className="text-xs font-bold uppercase tracking-wider text-[#0B5ED7] block mb-1">
            Clinical Obstacles
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold font-display text-[#071A3A] tracking-tight">
            Key Challenges Healthcare Providers Face
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {service.challenges.map((challenge, idx) => (
            <div key={idx} className="p-6 bg-white rounded-2xl border border-slate-200 shadow-xs space-y-3">
              <div className="w-8 h-8 rounded-lg bg-rose-50 text-rose-600 flex items-center justify-center font-bold text-xs">
                0{idx + 1}
              </div>
              <p className="text-xs sm:text-sm text-slate-700 font-medium leading-relaxed">
                {challenge}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* 3. OUR APPROACH */}
      <section className="bg-slate-50 py-16 border-y border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <span className="text-xs font-bold uppercase tracking-wider text-[#0B5ED7] block mb-1">
              Methodology
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold font-display text-[#071A3A] tracking-tight">
              Our Strategic Growth Approach
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {service.approach.map((item, idx) => (
              <div key={idx} className="p-6 bg-white rounded-2xl border border-slate-200 shadow-xs space-y-2">
                <span className="text-xs font-bold text-[#0B5ED7]">Phase 0{idx + 1}</span>
                <p className="text-xs sm:text-sm text-slate-700 leading-relaxed font-medium">
                  {item}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. INCLUSIONS & DELIVERABLES */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          
          {/* Services Included */}
          <div className="p-6 sm:p-8 bg-white rounded-2xl border border-slate-200 shadow-xs space-y-4">
            <h3 className="text-lg font-bold font-display text-[#071A3A]">
              What Is Included In This Service
            </h3>
            <div className="space-y-3">
              {service.inclusions.map((inc, i) => (
                <div key={i} className="flex items-start gap-3 text-xs sm:text-sm text-slate-700">
                  <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                  <span>{inc}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Tangible Deliverables */}
          <div className="p-6 sm:p-8 bg-white rounded-2xl border border-slate-200 shadow-xs space-y-4">
            <h3 className="text-lg font-bold font-display text-[#071A3A]">
              Concrete Deliverables You Receive
            </h3>
            <div className="space-y-3">
              {service.deliverables.map((deliv, i) => (
                <div key={i} className="flex items-start gap-3 text-xs sm:text-sm text-slate-700">
                  <FileCheck2 className="w-4 h-4 text-[#0B5ED7] shrink-0 mt-0.5" />
                  <span>{deliv}</span>
                </div>
              ))}
            </div>
          </div>

        </div>
      </section>

      {/* 5. PROCESS WORKFLOW */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-10">
          <span className="text-xs font-bold uppercase tracking-wider text-[#0B5ED7] block mb-1">
            Implementation Timeline
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold font-display text-[#071A3A] tracking-tight">
            How We Execute This Service
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {service.process.map((step, idx) => (
            <div key={idx} className="p-5 bg-white rounded-2xl border border-slate-200 shadow-xs">
              <span className="text-xs font-bold text-[#0B5ED7] block mb-2">{step.step}</span>
              <h4 className="text-xs font-bold text-[#071A3A] mb-1">{step.title}</h4>
              <p className="text-[11px] text-slate-500 leading-relaxed">{step.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 6. WHO THIS SERVICE IS FOR & BENEFITS */}
      <section className="bg-slate-50 py-16 border-y border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            
            <div className="space-y-4">
              <span className="text-xs font-bold uppercase tracking-wider text-[#0B5ED7]">
                Ideal Target
              </span>
              <h3 className="text-xl font-bold font-display text-[#071A3A]">
                Who Benefits Most From This Service
              </h3>
              <ul className="space-y-2 text-xs sm:text-sm text-slate-700">
                {service.whoItIsFor.map((who, i) => (
                  <li key={i} className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#0B5ED7]" />
                    <span>{who}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="space-y-4">
              <span className="text-xs font-bold uppercase tracking-wider text-[#14B8C4]">
                Practice Impact
              </span>
              <h3 className="text-xl font-bold font-display text-[#071A3A]">
                Measurable Practice Growth Benefits
              </h3>
              <ul className="space-y-2 text-xs sm:text-sm text-slate-700">
                {service.benefits.map((benefit, i) => (
                  <li key={i} className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                    <span>{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>

          </div>
        </div>
      </section>

      {/* 7. SERVICE FAQS */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <span className="text-xs font-bold uppercase tracking-wider text-[#0B5ED7] block mb-1">
            Questions & Answers
          </span>
          <h2 className="text-2xl font-bold font-display text-[#071A3A]">
            Service Specific FAQs
          </h2>
        </div>

        <div className="space-y-3">
          {service.faqs.map((faq, i) => {
            const isOpen = openFaq === i;
            return (
              <div key={i} className="bg-white rounded-xl border border-slate-200 overflow-hidden shadow-xs">
                <button
                  onClick={() => setOpenFaq(isOpen ? null : i)}
                  className="w-full text-left p-4 flex items-center justify-between gap-4 cursor-pointer hover:bg-slate-50 transition-colors"
                >
                  <span className="text-xs sm:text-sm font-bold text-[#071A3A]">{faq.question}</span>
                  <ChevronDown className={`w-4 h-4 text-slate-400 shrink-0 transition-transform ${isOpen ? 'rotate-180' : ''}`} />
                </button>
                {isOpen && (
                  <div className="p-4 pt-0 text-xs text-slate-600 leading-relaxed border-t border-slate-100 bg-slate-50/50">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </section>

      {/* 8. RELATED SERVICES */}
      {relatedServices.length > 0 && (
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="border-t border-slate-200 pt-10">
            <h3 className="text-lg font-bold font-display text-[#071A3A] mb-6">
              Complementary Healthcare Growth Services
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {relatedServices.map(rel => (
                <div key={rel.id} className="bg-white p-5 rounded-2xl border border-slate-200 shadow-xs flex flex-col justify-between">
                  <div>
                    <h4 className="text-sm font-bold text-[#071A3A] mb-1">{rel.title}</h4>
                    <p className="text-xs text-slate-500 leading-relaxed line-clamp-2">{rel.shortDesc}</p>
                  </div>
                  <button
                    onClick={() => onNavigate(`/services/${rel.slug}`)}
                    className="text-xs font-semibold text-[#0B5ED7] hover:underline flex items-center gap-1 mt-4 cursor-pointer"
                  >
                    <span>View Service</span>
                    <ArrowRight className="w-3 h-3" />
                  </button>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* 9. BOTTOM CTA */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-12">
        <div className="bg-[#071A3A] text-white rounded-3xl p-8 sm:p-12 text-center relative overflow-hidden">
          <div className="max-w-xl mx-auto space-y-4 relative z-10">
            <h3 className="text-2xl font-bold font-display text-white">
              Ready to implement {service.title}?
            </h3>
            <p className="text-xs text-slate-300">
              Schedule a 1-on-1 consultation with our healthcare growth directors to review your practice goals.
            </p>
            <div className="pt-2 flex flex-wrap items-center justify-center gap-3">
              <button
                onClick={() => onNavigate('/get-quote')}
                className="px-6 py-3 bg-[#0B5ED7] hover:bg-blue-600 text-white text-xs font-bold rounded-xl transition-colors cursor-pointer"
              >
                Request Free Proposal
              </button>
              <button
                onClick={onOpenAudit}
                className="px-5 py-3 bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-semibold rounded-xl border border-slate-700 transition-colors"
              >
                Run Practice Audit
              </button>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
};
