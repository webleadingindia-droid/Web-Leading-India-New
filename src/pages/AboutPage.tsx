import React, { useState } from 'react';
import { 
  Building2, 
  Stethoscope, 
  Target, 
  CheckCircle2, 
  Award, 
  ShieldCheck, 
  ArrowRight, 
  Sparkles,
  Users,
  Compass,
  HeartPulse
} from 'lucide-react';
import { businessInfo } from '../data/websiteData';
import { Breadcrumbs } from '../components/Breadcrumbs';

interface AboutPageProps {
  onNavigate: (path: string) => void;
  subSection?: string;
}

export const AboutPage: React.FC<AboutPageProps> = ({ onNavigate, subSection }) => {
  const [activeTab, setActiveTab] = useState<'overview' | 'team' | 'process' | 'values' | 'why-us' | 'expertise'>(
    (subSection as any) || 'overview'
  );

  return (
    <div className="space-y-12">
      <Breadcrumbs 
        items={[
          { label: 'About Us' }
        ]} 
        onNavigate={onNavigate} 
      />

      {/* Hero */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#071A3A] text-white rounded-3xl p-8 sm:p-14 relative overflow-hidden">
          <div className="max-w-3xl space-y-4">
            <span className="text-xs font-bold uppercase tracking-wider text-[#14B8C4]">
              About Web Leading India
            </span>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-display tracking-tight text-white leading-tight">
              Dedicated Healthcare Digital Growth & Patient Marketing
            </h1>
            <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
              We are a healthcare-focused digital marketing, website engineering, and patient growth agency. We bridge the gap between skilled clinical practitioners and patients actively seeking reliable medical care.
            </p>
            <div className="flex flex-wrap items-center gap-6 pt-4 text-xs">
              <div className="border-l-2 border-[#14B8C4] pl-3">
                <div className="font-bold text-white text-base tabular-nums">5+ Years</div>
                <div className="text-slate-400">Healthcare Marketing Experience</div>
              </div>
              <div className="border-l-2 border-[#0B5ED7] pl-3">
                <div className="font-bold text-white text-base tabular-nums">200+</div>
                <div className="text-slate-400">Healthcare Clients Served</div>
              </div>
              <div className="border-l-2 border-emerald-400 pl-3">
                <div className="font-bold text-white text-base">Ethical & Compliant</div>
                <div className="text-slate-400">Medical Advertising Standards</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Navigation Sub-Tabs */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-2 border-b border-slate-200 overflow-x-auto text-xs font-semibold whitespace-nowrap">
          {[
            { id: 'overview', label: 'Company Overview' },
            { id: 'expertise', label: 'Healthcare Expertise' },
            { id: 'why-us', label: 'Why Choose Us' },
            { id: 'values', label: 'Our Values' },
            { id: 'team', label: 'Our Team Philosophy' },
            { id: 'process', label: 'Our Strategic Approach' }
          ].map(tab => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id as any)}
              className={`pb-3 px-3 transition-colors border-b-2 cursor-pointer ${
                activeTab === tab.id
                  ? 'border-[#0B5ED7] text-[#0B5ED7] font-bold'
                  : 'border-transparent text-slate-600 hover:text-slate-900'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </section>

      {/* Tab Content */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
        
        {/* TAB 1: OVERVIEW */}
        {activeTab === 'overview' && (
          <div className="space-y-12">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
              <div className="space-y-4">
                <span className="text-xs font-bold uppercase tracking-wider text-[#0B5ED7]">
                  Our Story & Mission
                </span>
                <h2 className="text-2xl sm:text-3xl font-bold font-display text-[#071A3A]">
                  Pioneering Patient-Centric Growth In Modern Indian Healthcare
                </h2>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  Web Leading India was established to address a persistent challenge in the Indian medical ecosystem: senior doctors, innovative surgical clinics, and multi-specialty hospitals often struggle with digital obscurity while patients are misled by aggressive commercial aggregators.
                </p>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  Over the past 5+ years, we have partnered with more than 200 healthcare clients across India, designing digital marketing funnels, search optimization strategies, and high-performance websites that protect clinical dignity while reliably driving qualified patient appointments.
                </p>
              </div>

              <div className="bg-slate-50 p-6 sm:p-8 rounded-2xl border border-slate-200 space-y-4">
                <h3 className="text-base font-bold font-display text-[#071A3A]">Agency Fast Facts</h3>
                <div className="space-y-3 text-xs">
                  <div className="flex justify-between py-2 border-b border-slate-200">
                    <span className="text-slate-500">Official Name</span>
                    <span className="font-semibold text-slate-800">{businessInfo.name}</span>
                  </div>
                  <div className="flex justify-between py-2 border-b border-slate-200">
                    <span className="text-slate-500">Established Experience</span>
                    <span className="font-semibold text-slate-800">{businessInfo.experience}</span>
                  </div>
                  <div className="flex justify-between py-2 border-b border-slate-200">
                    <span className="text-slate-500">Verified Healthcare Clients</span>
                    <span className="font-semibold text-slate-800">{businessInfo.clients}</span>
                  </div>
                  <div className="flex justify-between py-2 border-b border-slate-200">
                    <span className="text-slate-500">Headquarters</span>
                    <span className="font-semibold text-slate-800">Kirari Suleman Nagar, Delhi - 110086</span>
                  </div>
                  <div className="flex justify-between py-2 border-b border-slate-200">
                    <span className="text-slate-500">Service Coverage</span>
                    <span className="font-semibold text-slate-800">Pan-India Metros & Regional Hubs</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Mission & Vision Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4">
              <div className="bg-white p-6 sm:p-8 rounded-2xl border border-slate-200 shadow-xs space-y-3">
                <div className="w-10 h-10 rounded-xl bg-blue-50 text-[#0B5ED7] flex items-center justify-center">
                  <Target className="w-5 h-5" />
                </div>
                <h3 className="text-lg font-bold font-display text-[#071A3A]">Our Mission</h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  To empower hospitals, specialty clinics, and medical practitioners with dignified, evidence-based digital marketing and technology solutions that simplify patient discovery, enhance clinical credibility, and cultivate lasting doctor-patient trust.
                </p>
              </div>

              <div className="bg-white p-6 sm:p-8 rounded-2xl border border-slate-200 shadow-xs space-y-3">
                <div className="w-10 h-10 rounded-xl bg-teal-50 text-[#14B8C4] flex items-center justify-center">
                  <Compass className="w-5 h-5" />
                </div>
                <h3 className="text-lg font-bold font-display text-[#071A3A]">Our Vision</h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  To become India’s most trusted and authoritative healthcare digital growth consultancy, recognized for scientific rigor, zero misleading claims, ethical compliance, and transformative patient acquisition systems.
                </p>
              </div>
            </div>
          </div>
        )}

        {/* TAB 2: HEALTHCARE EXPERTISE */}
        {activeTab === 'expertise' && (
          <div className="space-y-8">
            <div className="max-w-2xl">
              <span className="text-xs font-bold uppercase tracking-wider text-[#0B5ED7] block mb-1">
                Deep Clinical Acumen
              </span>
              <h2 className="text-2xl font-bold font-display text-[#071A3A]">
                Healthcare Is Our Only Language
              </h2>
              <p className="text-xs sm:text-sm text-slate-600 mt-2 leading-relaxed">
                Unlike general agencies who market shoes one day and cardiology the next, our entire workflow, team structure, and copywriting protocols are engineered exclusively for medical requirements.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="p-6 bg-white rounded-2xl border border-slate-200 shadow-xs space-y-3">
                <h4 className="text-sm font-bold text-[#071A3A]">Medical Terminology & E-E-A-T</h4>
                <p className="text-xs text-slate-600 leading-relaxed">
                  We understand the critical distinction between symptoms, clinical pathology, and surgical procedures. Our content aligns with Google Helpful Content guidelines and Medical Schema vocabulary.
                </p>
              </div>
              <div className="p-6 bg-white rounded-2xl border border-slate-200 shadow-xs space-y-3">
                <h4 className="text-sm font-bold text-[#071A3A]">Patient Psychology & Empathy</h4>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Patients researching surgery are anxious, vulnerable, and seeking reassurance. We design user experiences that reduce fear, clarify recovery timelines, and establish immediate clinical credibility.
                </p>
              </div>
              <div className="p-6 bg-white rounded-2xl border border-slate-200 shadow-xs space-y-3">
                <h4 className="text-sm font-bold text-[#071A3A]">Medical Advertising Ethics</h4>
                <p className="text-xs text-slate-600 leading-relaxed">
                  We respect Medical Council regulations and Indian advertising standards. We never make speculative guarantees or use sensationalist discounts that compromise professional medical prestige.
                </p>
              </div>
            </div>
          </div>
        )}

        {/* TAB 3: WHY CHOOSE US */}
        {activeTab === 'why-us' && (
          <div className="space-y-6">
            <h2 className="text-2xl font-bold font-display text-[#071A3A]">
              Why Healthcare Leaders Choose Web Leading India
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                { title: 'Full Technical Ownership', desc: 'You maintain 100% legal ownership of your website domain, hosting, Google Business Profile, and ad accounts. No agency hostage situations.' },
                { title: 'Sub-Second Website Architecture', desc: 'Engineered on modern React and Jamstack architectures, our websites load 3x faster than heavy WordPress templates.' },
                { title: 'Transparent Milestone Pricing', desc: 'Fixed one-time packages for websites and flexible monthly marketing retainers with no hidden fees or lock-ins.' },
                { title: 'Front-Desk Integration', desc: 'We do not stop at lead forms; we integrate automated WhatsApp alerts that notify your clinic front desk within 10 seconds of an inquiry.' }
              ].map((item, idx) => (
                <div key={idx} className="p-5 bg-white rounded-xl border border-slate-200 shadow-xs flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-emerald-500 shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-xs font-bold text-[#071A3A] mb-1">{item.title}</h4>
                    <p className="text-xs text-slate-500 leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* TAB 4: VALUES */}
        {activeTab === 'values' && (
          <div className="space-y-6">
            <h2 className="text-2xl font-bold font-display text-[#071A3A]">
              Our Guiding Values & Principles
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="p-6 bg-slate-50 rounded-2xl border border-slate-200">
                <span className="text-xs font-bold text-[#0B5ED7] uppercase">Principle 01</span>
                <h4 className="text-sm font-bold text-[#071A3A] mt-1 mb-2">Clinical Integrity First</h4>
                <p className="text-xs text-slate-600 leading-relaxed">
                  We never sacrifice medical accuracy for clickbait. All patient-facing educational materials prioritize safety and factual precision.
                </p>
              </div>
              <div className="p-6 bg-slate-50 rounded-2xl border border-slate-200">
                <span className="text-xs font-bold text-[#0B5ED7] uppercase">Principle 02</span>
                <h4 className="text-sm font-bold text-[#071A3A] mt-1 mb-2">Absolute Transparency</h4>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Clear ad spend reporting, verified call recordings, and realistic timeline expectations without inflated marketing hype.
                </p>
              </div>
              <div className="p-6 bg-slate-50 rounded-2xl border border-slate-200">
                <span className="text-xs font-bold text-[#0B5ED7] uppercase">Principle 03</span>
                <h4 className="text-sm font-bold text-[#071A3A] mt-1 mb-2">Measurable Inbound Impact</h4>
                <p className="text-xs text-slate-600 leading-relaxed">
                  We measure success not by vanity impressions, but by verified patient phone inquiries, WhatsApp consultations, and filled appointment slots.
                </p>
              </div>
            </div>
          </div>
        )}

        {/* TAB 5: TEAM */}
        {activeTab === 'team' && (
          <div className="space-y-6">
            <h2 className="text-2xl font-bold font-display text-[#071A3A]">
              Our Healthcare Strategy & Engineering Team
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 max-w-3xl leading-relaxed">
              Our multidisciplinary team comprises healthcare SEO architects, full-stack engineers, medical copywriters, video production specialists, and paid search analysts working collaboratively across Indian healthcare domains.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
              {[
                { role: 'Healthcare SEO Director', desc: 'Focuses on medical E-E-A-T, Google 3-Pack geo-ranking, and physician schema architecture.' },
                { role: 'Senior Full-Stack Engineer', desc: 'Builds sub-second React platforms, practice management software, and secure form routing.' },
                { role: 'Healthcare Content Strategist', desc: 'Curates clinically accurate patient education guides, doctor bios, and condition pages.' },
                { role: 'Paid Search & CRO Specialist', desc: 'Manages high-intent surgical Google Ads campaigns and negative keyword architectures.' }
              ].map((member, i) => (
                <div key={i} className="bg-white p-5 rounded-xl border border-slate-200 shadow-xs">
                  <div className="w-8 h-8 rounded-lg bg-blue-50 text-[#0B5ED7] flex items-center justify-center font-bold text-xs mb-3">
                    <Users className="w-4 h-4" />
                  </div>
                  <h4 className="font-bold text-xs text-[#071A3A] mb-1">{member.role}</h4>
                  <p className="text-[11px] text-slate-500 leading-relaxed">{member.desc}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* TAB 6: PROCESS */}
        {activeTab === 'process' && (
          <div className="space-y-6">
            <h2 className="text-2xl font-bold font-display text-[#071A3A]">
              Our Strategic Methodology
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 max-w-3xl leading-relaxed">
              We guide healthcare practices through an organized 10-step lifecycle from initial market audit to sustainable inbound patient inquiries.
            </p>
            <button
              onClick={() => onNavigate('/process')}
              className="px-5 py-2.5 bg-[#0B5ED7] text-white text-xs font-semibold rounded-lg hover:bg-[#082B63] transition-colors inline-flex items-center gap-2 cursor-pointer"
            >
              <span>Explore Detailed 10-Step Process</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        )}

      </section>

      {/* Bottom CTA */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-12">
        <div className="p-8 bg-blue-50 border border-blue-200 rounded-3xl flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
          <div>
            <h3 className="text-lg font-bold font-display text-[#071A3A]">
              Schedule a Consultation With Our Healthcare Strategists
            </h3>
            <p className="text-xs text-slate-600 mt-1">
              Call us directly at {businessInfo.phone} or request a tailored practice growth proposal.
            </p>
          </div>
          <button
            onClick={() => onNavigate('/get-quote')}
            className="px-6 py-3 bg-[#0B5ED7] hover:bg-[#082B63] text-white text-xs font-bold rounded-xl transition-colors cursor-pointer shrink-0 shadow-sm"
          >
            Get Free Strategy Proposal
          </button>
        </div>
      </section>
    </div>
  );
};
