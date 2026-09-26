import React, { useState } from 'react';
import { 
  ArrowRight, 
  CheckCircle2, 
  ChevronDown, 
  Phone, 
  Sparkles, 
  Search, 
  Target, 
  Monitor, 
  MessageSquare, 
  Video,
  ShieldAlert,
  HelpCircle
} from 'lucide-react';
import { industriesData, businessInfo, IndustryItem } from '../data/websiteData';
import { Breadcrumbs } from '../components/Breadcrumbs';

interface IndustryDetailPageProps {
  slug: string;
  onNavigate: (path: string) => void;
  onOpenAudit: () => void;
}

export const IndustryDetailPage: React.FC<IndustryDetailPageProps> = ({ slug, onNavigate, onOpenAudit }) => {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const industry: IndustryItem = industriesData.find(ind => ind.slug === slug) || industriesData[0];
  const relatedIndustries = industriesData.filter(ind => ind.slug !== industry.slug && ind.category === industry.category).slice(0, 3);

  return (
    <div className="space-y-16">
      
      <Breadcrumbs 
        items={[
          { label: 'Specialties', path: '/industries' },
          { label: industry.title }
        ]} 
        onNavigate={onNavigate} 
      />

      {/* 1. HERO */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#071A3A] text-white rounded-3xl p-8 sm:p-14 relative overflow-hidden">
          <div className="max-w-3xl space-y-4">
            <span className="text-xs font-bold uppercase tracking-wider text-[#14B8C4]">
              {industry.category} · Practice Marketing
            </span>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-display tracking-tight text-white leading-tight">
              {industry.title}
            </h1>
            <p className="text-sm sm:text-base text-slate-300 leading-relaxed max-w-2xl">
              {industry.shortDesc}
            </p>

            <div className="p-4 bg-slate-800/80 rounded-xl border border-slate-700 text-xs space-y-1 max-w-2xl">
              <span className="text-[#14B8C4] font-bold block">Patient Search Psychology:</span>
              <p className="text-slate-300 leading-relaxed text-[11px]">
                {industry.patientSearchBehavior}
              </p>
            </div>

            <div className="pt-4 flex flex-wrap items-center gap-3">
              <button
                onClick={() => onNavigate('/get-quote')}
                className="px-6 py-3 bg-[#0B5ED7] hover:bg-blue-600 text-white text-xs sm:text-sm font-bold rounded-xl transition-colors cursor-pointer shadow-md"
              >
                Get Custom Practice Strategy
              </button>
              <button
                onClick={onOpenAudit}
                className="px-5 py-3 bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs sm:text-sm font-semibold rounded-xl border border-slate-700 transition-colors flex items-center gap-1.5 cursor-pointer"
              >
                <Sparkles className="w-4 h-4 text-[#14B8C4]" />
                <span>Run Free Specialty Audit</span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* 2. SPECIALTY CHALLENGES */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-10">
          <span className="text-xs font-bold uppercase tracking-wider text-[#0B5ED7] block mb-1">
            Clinical Obstacles
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold font-display text-[#071A3A] tracking-tight">
            Key Marketing Challenges In {industry.title}
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {industry.challenges.map((challenge, idx) => (
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

      {/* 3. SEO & GOOGLE ADS STRATEGY */}
      <section className="bg-slate-50 py-16 border-y border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            
            {/* SEO Strategy */}
            <div className="p-6 sm:p-8 bg-white rounded-2xl border border-slate-200 shadow-xs space-y-4">
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#0B5ED7]">
                <Search className="w-4 h-4" /> Healthcare SEO Blueprint
              </div>
              <h3 className="text-lg font-bold font-display text-[#071A3A]">
                How We Rank Your Practice For {industry.title}
              </h3>
              <div className="space-y-3">
                {industry.seoStrategy.map((seo, i) => (
                  <div key={i} className="flex items-start gap-3 text-xs sm:text-sm text-slate-700">
                    <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                    <span>{seo}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Google Ads Strategy */}
            <div className="p-6 sm:p-8 bg-white rounded-2xl border border-slate-200 shadow-xs space-y-4">
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#0B5ED7]">
                <Target className="w-4 h-4" /> High-Intent Search Ads
              </div>
              <h3 className="text-lg font-bold font-display text-[#071A3A]">
                Capturing High-Value Inquiries via PPC
              </h3>
              <div className="space-y-3">
                {industry.adsStrategy.map((ads, i) => (
                  <div key={i} className="flex items-start gap-3 text-xs sm:text-sm text-slate-700">
                    <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                    <span>{ads}</span>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 4. WEBSITE & LEAD GEN BLUEPRINT */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          
          <div className="p-6 sm:p-8 bg-white rounded-2xl border border-slate-200 shadow-xs space-y-4">
            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#0B5ED7]">
              <Monitor className="w-4 h-4" /> Digital Experience
            </div>
            <h3 className="text-lg font-bold font-display text-[#071A3A]">
              Essential Website Requirements
            </h3>
            <div className="space-y-3">
              {industry.websiteRequirements.map((req, i) => (
                <div key={i} className="flex items-start gap-3 text-xs sm:text-sm text-slate-700">
                  <CheckCircle2 className="w-4 h-4 text-[#0B5ED7] shrink-0 mt-0.5" />
                  <span>{req}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="p-6 sm:p-8 bg-white rounded-2xl border border-slate-200 shadow-xs space-y-4">
            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#0B5ED7]">
              <MessageSquare className="w-4 h-4" /> Patient Conversion
            </div>
            <h3 className="text-lg font-bold font-display text-[#071A3A]">
              Lead Capture & Reception Protocol
            </h3>
            <div className="space-y-3">
              {industry.leadGenerationStrategy.map((lead, i) => (
                <div key={i} className="flex items-start gap-3 text-xs sm:text-sm text-slate-700">
                  <CheckCircle2 className="w-4 h-4 text-[#0B5ED7] shrink-0 mt-0.5" />
                  <span>{lead}</span>
                </div>
              ))}
            </div>
          </div>

        </div>
      </section>

      {/* 5. CONTENT IDEAS */}
      <section className="bg-slate-50 py-16 border-y border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-8">
            <span className="text-xs font-bold uppercase tracking-wider text-[#0B5ED7] block mb-1">
              Thought Leadership & Video
            </span>
            <h2 className="text-2xl font-bold font-display text-[#071A3A]">
              Recommended Patient Education Content
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-4xl mx-auto">
            {industry.contentIdeas.map((idea, idx) => (
              <div key={idx} className="p-5 bg-white rounded-xl border border-slate-200 shadow-xs flex items-center gap-3">
                <Video className="w-5 h-5 text-[#0B5ED7] shrink-0" />
                <span className="text-xs font-medium text-slate-700">{idea}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. SPECIALTY FAQS */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <span className="text-xs font-bold uppercase tracking-wider text-[#0B5ED7] block mb-1">
            Questions & Answers
          </span>
          <h2 className="text-2xl font-bold font-display text-[#071A3A]">
            {industry.title} Marketing FAQs
          </h2>
        </div>

        <div className="space-y-3">
          {industry.faqs.map((faq, i) => {
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

      {/* 7. BOTTOM CTA */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-12">
        <div className="bg-[#071A3A] text-white rounded-3xl p-8 sm:p-12 text-center relative overflow-hidden">
          <div className="max-w-xl mx-auto space-y-4 relative z-10">
            <h3 className="text-2xl font-bold font-display text-white">
              Ready to grow your {industry.title} practice?
            </h3>
            <p className="text-xs text-slate-300">
              Speak with our healthcare growth directors to develop a tailored patient acquisition strategy.
            </p>
            <div className="pt-2 flex flex-wrap items-center justify-center gap-3">
              <button
                onClick={() => onNavigate('/get-quote')}
                className="px-6 py-3 bg-[#0B5ED7] hover:bg-blue-600 text-white text-xs font-bold rounded-xl transition-colors cursor-pointer"
              >
                Request Free Proposal
              </button>
              <a
                href={`tel:${businessInfo.phone}`}
                className="px-5 py-3 bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-semibold rounded-xl border border-slate-700 transition-colors flex items-center gap-2"
              >
                <Phone className="w-4 h-4 text-[#14B8C4]" />
                <span>Call {businessInfo.phone}</span>
              </a>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
};
