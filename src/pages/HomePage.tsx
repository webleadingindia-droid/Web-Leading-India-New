import React, { useState } from 'react';
import { 
  ArrowRight, 
  CheckCircle2, 
  Sparkles, 
  Search, 
  ShieldCheck, 
  PhoneCall, 
  TrendingUp, 
  Users, 
  Building2, 
  Stethoscope, 
  Monitor, 
  MapPin, 
  ChevronRight, 
  Layers, 
  Activity, 
  BarChart3, 
  Clock, 
  Award,
  ChevronDown
} from 'lucide-react';
import { 
  businessInfo, 
  servicesData, 
  industriesData, 
  pricingPackages, 
  processSteps, 
  portfolioData, 
  faqsData 
} from '../data/websiteData';
import { InteractiveFunnel } from '../components/InteractiveFunnel';

interface HomePageProps {
  onNavigate: (path: string) => void;
  onOpenAudit: () => void;
}

export const HomePage: React.FC<HomePageProps> = ({ onNavigate, onOpenAudit }) => {
  const [selectedIndustryTab, setSelectedIndustryTab] = useState('hospitals');
  const [openFaqId, setOpenFaqId] = useState<string | null>(null);

  const selectedIndustry = industriesData.find(i => i.id === selectedIndustryTab) || industriesData[0];
  const homepageFaqs = faqsData.slice(0, 8);

  const problems = [
    { title: 'Low Google Visibility', desc: 'Patients searching for treatments in your locality find aggregator directories instead of your clinic.' },
    { title: 'Weak Google Maps 3-Pack', desc: 'Losing high-intent neighborhood footfall to competitors who optimized local map signals.' },
    { title: 'Outdated & Slow Website', desc: 'Over 60% of mobile visitors bounce before seeing doctor credentials if loading exceeds 3 seconds.' },
    { title: 'Poor Patient Inquiries', desc: 'Traffic arrives on the website but fails to convert into confirmed phone calls or WhatsApp messages.' },
    { title: 'Expensive & Wasted Google Ads', desc: 'Bidding blindly on general symptoms instead of surgical and high-value consultation keywords.' },
    { title: 'Inactive Social Media', desc: 'Irregular, generic medical posts that fail to humanize the doctor or build local patient loyalty.' },
    { title: 'Fragile Online Reputation', desc: 'Vulnerable to isolated negative Google reviews without a systematic collection framework for happy patients.' },
    { title: 'No Conversion Funnel', desc: 'No structured tracking connecting digital ad spend to actual front-desk appointment show-ups.' }
  ];

  return (
    <div className="space-y-24">
      
      {/* SECTION 1 — HERO */}
      <section className="relative overflow-hidden pt-8 pb-16 lg:pt-16 lg:pb-24">
        {/* Soft background glow */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-blue-400/10 blur-[120px] rounded-full pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Column: Proposition */}
            <div className="lg:col-span-7 space-y-6">
              
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-50 border border-blue-200/80 text-[#0B5ED7] text-xs font-semibold">
                <Sparkles className="w-3.5 h-3.5 text-[#14B8C4]" />
                <span>Dedicated Healthcare Digital Marketing Agency</span>
              </div>

              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-display text-[#071A3A] tracking-tight leading-[1.15] text-balance">
                Grow Your Healthcare Practice With Digital Marketing That Brings Patients.
              </h1>

              <p className="text-sm sm:text-base text-slate-600 leading-relaxed max-w-2xl">
                Web Leading India helps hospitals, clinics, doctors, and healthcare brands attract, engage, and convert patients through specialized healthcare SEO, high-intent Google Ads, modern medical websites, and patient acquisition systems.
              </p>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center gap-3 pt-2">
                <button
                  onClick={() => onNavigate('/get-quote')}
                  className="px-6 py-3.5 bg-[#0B5ED7] hover:bg-[#082B63] text-white text-xs sm:text-sm font-bold rounded-xl transition-all shadow-md hover:shadow-lg flex items-center gap-2 cursor-pointer"
                >
                  <span>Get Free Strategy</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
                <button
                  onClick={() => onNavigate('/portfolio')}
                  className="px-6 py-3.5 bg-white hover:bg-slate-50 text-[#071A3A] text-xs sm:text-sm font-semibold rounded-xl border border-slate-300 transition-colors shadow-xs"
                >
                  View Our Work
                </button>
                <button
                  onClick={onOpenAudit}
                  className="px-4 py-3.5 text-xs text-[#0B5ED7] font-semibold hover:bg-blue-50/60 rounded-xl transition-colors flex items-center gap-1.5"
                >
                  <Sparkles className="w-3.5 h-3.5" /> Free AI Practice Audit
                </button>
              </div>

              {/* Verified Trust Strip */}
              <div className="pt-6 border-t border-slate-200/80 grid grid-cols-2 sm:grid-cols-4 gap-4 text-xs">
                <div>
                  <div className="font-extrabold text-[#071A3A] text-lg font-display tabular-nums">5+ Years</div>
                  <div className="text-slate-500 text-[11px]">Healthcare Marketing</div>
                </div>
                <div>
                  <div className="font-extrabold text-[#071A3A] text-lg font-display tabular-nums">200+</div>
                  <div className="text-slate-500 text-[11px]">Healthcare Clients</div>
                </div>
                <div>
                  <div className="font-extrabold text-[#071A3A] text-lg font-display">Specialized</div>
                  <div className="text-slate-500 text-[11px]">Medical Focus Team</div>
                </div>
                <div>
                  <div className="font-extrabold text-[#071A3A] text-lg font-display">Pan-India</div>
                  <div className="text-slate-500 text-[11px]">Service Coverage</div>
                </div>
              </div>

            </div>

            {/* Right Column: Hero Visual - Healthcare Growth Dashboard (Illustrative) */}
            <div className="lg:col-span-5">
              <div className="bg-white rounded-2xl border border-slate-200 shadow-xl p-5 sm:p-6 space-y-4 relative">
                
                <div className="flex items-center justify-between pb-3 border-b border-slate-100">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full bg-emerald-500 animate-pulse" />
                    <span className="text-xs font-bold text-[#071A3A]">Patient Growth Engine</span>
                  </div>
                  <span className="text-[11px] text-slate-400 font-medium">Practice Growth Model</span>
                </div>

                {/* Dashboard Card 1: Search Visibility */}
                <div className="bg-[#F5F9FF] p-3.5 rounded-xl border border-blue-100 flex items-center justify-between">
                  <div>
                    <span className="text-[11px] text-slate-500 font-medium block">Local Search Visibility</span>
                    <span className="text-sm font-bold text-[#071A3A]">Google 3-Pack Optimization</span>
                  </div>
                  <div className="w-9 h-9 rounded-lg bg-[#0B5ED7]/10 text-[#0B5ED7] flex items-center justify-center">
                    <MapPin className="w-4 h-4" />
                  </div>
                </div>

                {/* Dashboard Card 2: Website Performance */}
                <div className="grid grid-cols-2 gap-3">
                  <div className="bg-slate-50 p-3 rounded-xl border border-slate-200/80">
                    <span className="text-[10px] uppercase font-bold text-slate-400 tracking-wider block">Website Speed</span>
                    <span className="text-xs font-bold text-slate-800 mt-1 block">Sub-Second Mobile Load</span>
                    <span className="text-[10px] text-emerald-600 font-semibold mt-0.5 block">Core Web Vitals Pass</span>
                  </div>
                  <div className="bg-slate-50 p-3 rounded-xl border border-slate-200/80">
                    <span className="text-[10px] uppercase font-bold text-slate-400 tracking-wider block">Lead Flow</span>
                    <span className="text-xs font-bold text-slate-800 mt-1 block">1-Tap WhatsApp & Call</span>
                    <span className="text-[10px] text-[#0B5ED7] font-semibold mt-0.5 block">Instant Alert to Desk</span>
                  </div>
                </div>

                {/* Dashboard Card 3: Inquiries & Appointments Funnel */}
                <div className="p-3.5 bg-white rounded-xl border border-slate-200 space-y-2">
                  <div className="flex items-center justify-between text-xs font-bold text-[#071A3A]">
                    <span>Inquiry Qualification Funnel</span>
                    <span className="text-[11px] text-[#14B8C4]">Multi-Channel Tracking</span>
                  </div>
                  <div className="space-y-1.5 pt-1">
                    <div className="w-full bg-slate-100 h-2 rounded-full overflow-hidden">
                      <div className="bg-[#0B5ED7] h-full rounded-full w-[85%]" />
                    </div>
                    <div className="flex justify-between text-[10px] text-slate-500">
                      <span>Search Traffic</span>
                      <span>Verified Inquiries</span>
                      <span>Consultation Booking</span>
                    </div>
                  </div>
                </div>

                {/* Direct Action */}
                <div className="pt-2">
                  <button
                    onClick={() => onNavigate('/contact')}
                    className="w-full py-2.5 bg-[#071A3A] hover:bg-[#082B63] text-white text-xs font-bold rounded-lg transition-colors flex items-center justify-center gap-1.5 cursor-pointer"
                  >
                    <span>Consult Our Healthcare Strategists</span>
                    <ChevronRight className="w-3.5 h-3.5 text-[#14B8C4]" />
                  </button>
                </div>

              </div>
            </div>

          </div>
        </div>
      </section>

      {/* SECTION 2 — TRUST STRIP */}
      <section className="border-y border-slate-200 bg-white py-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-6">
            <span className="text-xs font-bold uppercase tracking-wider text-slate-500">
              Healthcare Businesses Trust Us To Build Their Digital Growth
            </span>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-4 text-center">
            {[
              'Hospitals',
              'Specialty Clinics',
              'Doctors & Surgeons',
              'Dental Practices',
              'Eye Hospitals',
              'Fertility Centres',
              'Diagnostic Centres',
              'Healthcare Brands'
            ].map((category, idx) => (
              <div 
                key={idx} 
                className="p-3 rounded-xl bg-slate-50 border border-slate-200/80 text-xs font-semibold text-slate-700 flex items-center justify-center text-center"
              >
                {category}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 3 — HEALTHCARE GROWTH PROBLEMS */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-xs font-bold uppercase tracking-wider text-[#0B5ED7] block mb-2">
            Practice Growth Bottlenecks
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold font-display text-[#071A3A] tracking-tight">
            Your Patients Are Searching. Can They Find You?
          </h2>
          <p className="text-slate-600 text-xs sm:text-sm mt-3">
            Every day, patients in your city search for specialists and clinical treatments. Without a cohesive healthcare marketing system, prospective patients choose corporate aggregators or competing practices.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {problems.map((p, idx) => (
            <div key={idx} className="bg-white p-5 rounded-2xl border border-slate-200 shadow-xs hover:border-slate-300 transition-all flex flex-col justify-between">
              <div>
                <div className="w-8 h-8 rounded-lg bg-rose-50 text-rose-600 flex items-center justify-center font-bold text-xs mb-3">
                  0{idx + 1}
                </div>
                <h3 className="text-sm font-bold text-[#071A3A] mb-2">{p.title}</h3>
                <p className="text-xs text-slate-500 leading-relaxed">{p.desc}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-10">
          <button
            onClick={onOpenAudit}
            className="px-6 py-3 bg-[#0B5ED7] hover:bg-[#082B63] text-white text-xs font-bold rounded-xl transition-colors shadow-sm inline-flex items-center gap-2 cursor-pointer"
          >
            <span>Find Your Growth Opportunities With AI Audit</span>
            <Sparkles className="w-3.5 h-3.5 text-[#14B8C4]" />
          </button>
        </div>
      </section>

      {/* SECTION 4 — WHAT WE DO */}
      <section className="bg-slate-50/60 py-16 border-y border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-[#0B5ED7] block mb-1">
                Full-Service Capabilities
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold font-display text-[#071A3A] tracking-tight">
                Complete Digital Growth Solutions For Healthcare
              </h2>
            </div>
            <button
              onClick={() => onNavigate('/services')}
              className="text-xs font-bold text-[#0B5ED7] hover:underline flex items-center gap-1 self-start md:self-auto cursor-pointer"
            >
              <span>Explore All 25 Services</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {servicesData.slice(0, 6).map((service) => (
              <div 
                key={service.id} 
                className="bg-white rounded-2xl p-6 border border-slate-200 shadow-xs hover:shadow-md transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="text-[10px] font-bold uppercase tracking-wider text-slate-400 mb-2">
                    {service.category}
                  </div>
                  <h3 className="text-base font-bold font-display text-[#071A3A] mb-2">
                    {service.title}
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed mb-4">
                    {service.shortDesc}
                  </p>
                  <div className="space-y-1.5 border-t border-slate-100 pt-3">
                    {service.inclusions.slice(0, 3).map((inc, i) => (
                      <div key={i} className="flex items-center gap-2 text-[11px] text-slate-500">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0" />
                        <span className="truncate">{inc}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-6 mt-6 border-t border-slate-100">
                  <button
                    onClick={() => onNavigate(`/services/${service.slug}`)}
                    className="w-full py-2 bg-slate-50 hover:bg-blue-50 text-slate-700 hover:text-[#0B5ED7] text-xs font-semibold rounded-lg transition-colors flex items-center justify-center gap-1 cursor-pointer"
                  >
                    <span>Explore Service Details</span>
                    <ArrowRight className="w-3 h-3" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 5 — HEALTHCARE SEO HIGHLIGHT */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#071A3A] rounded-3xl p-8 sm:p-12 text-white relative overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-7 space-y-4">
              <span className="text-xs font-bold uppercase tracking-wider text-[#14B8C4]">
                Medical Search Engine Optimization
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold font-display tracking-tight text-white">
                Be Where Your Patients Are Searching When Symptoms Arise.
              </h2>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                Google prioritizes healthcare websites with high E-E-A-T and clinical accuracy. We build authoritative condition pages, doctor profiles with Medical Schema, and local map dominance so your practice ranks for high-intent treatment queries.
              </p>
              
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-2 text-xs">
                <div className="p-2.5 rounded-lg bg-slate-800/80 border border-slate-700">
                  <span className="font-bold block text-white">Medical Schema</span>
                  <span className="text-[11px] text-slate-400">Physician & Hospital tags</span>
                </div>
                <div className="p-2.5 rounded-lg bg-slate-800/80 border border-slate-700">
                  <span className="font-bold block text-white">Google 3-Pack</span>
                  <span className="text-[11px] text-slate-400">Local map dominance</span>
                </div>
                <div className="p-2.5 rounded-lg bg-slate-800/80 border border-slate-700">
                  <span className="font-bold block text-white">Clinical E-E-A-T</span>
                  <span className="text-[11px] text-slate-400">Helpful Content compliance</span>
                </div>
              </div>

              <div className="pt-4">
                <button
                  onClick={() => onNavigate('/services/healthcare-seo')}
                  className="px-5 py-2.5 bg-[#0B5ED7] hover:bg-blue-600 text-white text-xs font-bold rounded-lg transition-colors cursor-pointer"
                >
                  Explore Healthcare SEO Services →
                </button>
              </div>
            </div>

            <div className="lg:col-span-5 bg-slate-800/60 p-6 rounded-2xl border border-slate-700 space-y-3 text-xs">
              <div className="text-xs font-bold text-[#14B8C4] uppercase tracking-wider">
                SEO Implementation Roadmap
              </div>
              <ul className="space-y-2.5 text-slate-300">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#14B8C4] shrink-0 mt-0.5" />
                  <span>Full technical crawl & Core Web Vitals optimization</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#14B8C4] shrink-0 mt-0.5" />
                  <span>Symptom-to-treatment keyword mapping for each specialty</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#14B8C4] shrink-0 mt-0.5" />
                  <span>Physician bio schema, qualification & registration markup</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#14B8C4] shrink-0 mt-0.5" />
                  <span>Hyper-local citation synchronization across 40+ medical directories</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 6 — PATIENT ACQUISITION FUNNEL */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <InteractiveFunnel />
      </section>

      {/* SECTION 7 — GOOGLE ADS */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-6 space-y-4">
            <span className="text-xs font-bold uppercase tracking-wider text-[#0B5ED7]">
              Google Ads / PPC Management
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold font-display text-[#071A3A] tracking-tight">
              Reach Patients Actively Searching For Immediate Treatment.
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              Google Ads connects your surgical department or specialty clinic with patients at the peak of intent. We utilize strict negative keyword pruning to eliminate wasted spend on home remedies, focusing 100% of your budget on qualified consultation inquiries.
            </p>

            <div className="grid grid-cols-2 gap-3 pt-2 text-xs">
              <div className="p-3 bg-slate-50 border border-slate-200 rounded-xl">
                <span className="font-bold text-slate-900 block">Surgical Search Ads</span>
                <span className="text-slate-500 text-[11px]">Knee replacement, IVF, LASIK, Implants</span>
              </div>
              <div className="p-3 bg-slate-50 border border-slate-200 rounded-xl">
                <span className="font-bold text-slate-900 block">Call-Only Campaigns</span>
                <span className="text-slate-500 text-[11px]">Direct mobile clicks to clinic reception</span>
              </div>
            </div>

            <div className="pt-2">
              <button
                onClick={() => onNavigate('/services/google-ads')}
                className="px-5 py-2.5 bg-[#0B5ED7] hover:bg-[#082B63] text-white text-xs font-semibold rounded-lg transition-colors cursor-pointer"
              >
                Explore Google Ads Campaigns →
              </button>
            </div>
          </div>

          <div className="lg:col-span-6 bg-blue-50/50 p-6 sm:p-8 rounded-2xl border border-blue-100 space-y-4">
            <h3 className="text-sm font-bold text-[#071A3A]">
              Why Most Healthcare Google Ads Fail (And Our Solution):
            </h3>
            <div className="space-y-3 text-xs">
              <div className="p-3 bg-white rounded-xl border border-slate-200 shadow-xs">
                <span className="font-bold text-rose-600 block">Typical Mistake:</span>
                <p className="text-slate-500 text-[11px] mt-0.5">Bidding on broad keywords like "causes of knee pain", burning ad budget on informational searchers.</p>
                <span className="font-bold text-emerald-600 block mt-2">Web Leading India Solution:</span>
                <p className="text-slate-600 text-[11px] mt-0.5">Exhaustive negative keyword lists and procedure-specific phrases like "knee replacement surgeon in [City]".</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 8 — SOCIAL MEDIA MARKETING */}
      <section className="bg-slate-50 py-16 border-y border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-10">
            <span className="text-xs font-bold uppercase tracking-wider text-[#0B5ED7] block mb-1">
              Social Media & Video
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold font-display text-[#071A3A] tracking-tight">
              Build Trust Before The Patient Walks Through Your Door.
            </h2>
            <p className="text-slate-600 text-xs sm:text-sm mt-2">
              Patients want to see and hear their doctor before scheduling an appointment. We script and produce bite-sized medical education videos that establish warmth and clinical authority.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {[
              { title: 'Doctor-Led Reels', desc: '60-second video answers explaining common patient doubts and surgical recovery.' },
              { title: 'Patient Education Posts', desc: 'Clinically verified carousels breaking down myths and preventive measures.' },
              { title: 'Community Inquiries', desc: 'Direct message monitoring routing patient questions to clinic WhatsApp.' },
              { title: 'Verified Medical Branding', desc: 'Visual identity reflecting medical precision across Instagram, YouTube & LinkedIn.' }
            ].map((card, i) => (
              <div key={i} className="bg-white p-5 rounded-2xl border border-slate-200 shadow-xs">
                <div className="w-8 h-8 rounded-lg bg-blue-50 text-[#0B5ED7] flex items-center justify-center font-bold text-xs mb-3">
                  0{i + 1}
                </div>
                <h3 className="font-bold text-sm text-[#071A3A] mb-1">{card.title}</h3>
                <p className="text-xs text-slate-500 leading-relaxed">{card.desc}</p>
              </div>
            ))}
          </div>

          <div className="text-center mt-8">
            <button
              onClick={() => onNavigate('/services/social-media-marketing')}
              className="text-xs font-bold text-[#0B5ED7] hover:underline"
            >
              Explore Social Media Marketing Packages →
            </button>
          </div>
        </div>
      </section>

      {/* SECTION 9 — WEBSITE DEVELOPMENT */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-br from-white to-blue-50/40 p-8 sm:p-12 rounded-3xl border border-slate-200 shadow-sm">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-7 space-y-4">
              <span className="text-xs font-bold uppercase tracking-wider text-[#0B5ED7]">
                Engineering & UI/UX
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold font-display text-[#071A3A] tracking-tight">
                Healthcare Websites Built For Trust, Speed & Practice Growth.
              </h2>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Generic agency templates fail in healthcare. We build ultra-fast, mobile-first web platforms with intuitive doctor profile directories, department architecture, and direct appointment integrations.
              </p>

              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-2 text-xs">
                <div className="p-3 bg-white rounded-xl border border-slate-200 shadow-xs">
                  <span className="font-bold text-slate-800 block">Clinic Website</span>
                  <span className="text-[11px] text-slate-500">₹35,000 one-time</span>
                </div>
                <div className="p-3 bg-white rounded-xl border border-slate-200 shadow-xs">
                  <span className="font-bold text-slate-800 block">Practice System</span>
                  <span className="text-[11px] text-slate-500">₹75,000 one-time</span>
                </div>
                <div className="p-3 bg-white rounded-xl border border-slate-200 shadow-xs">
                  <span className="font-bold text-slate-800 block">Hospital Portal</span>
                  <span className="text-[11px] text-slate-500">Custom enterprise</span>
                </div>
              </div>

              <div className="pt-2 flex items-center gap-3">
                <button
                  onClick={() => onNavigate('/services/healthcare-website-development')}
                  className="px-5 py-2.5 bg-[#0B5ED7] hover:bg-[#082B63] text-white text-xs font-semibold rounded-lg transition-colors cursor-pointer"
                >
                  Explore Website Development →
                </button>
                <button
                  onClick={() => onNavigate('/pricing')}
                  className="px-4 py-2.5 text-xs text-slate-700 font-semibold hover:text-[#0B5ED7]"
                >
                  View Website Packages
                </button>
              </div>
            </div>

            <div className="lg:col-span-5 bg-white p-6 rounded-2xl border border-slate-200 shadow-md space-y-3 text-xs">
              <span className="text-xs font-bold text-[#071A3A] block">Key Healthcare Website Features:</span>
              <ul className="space-y-2 text-slate-600">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                  <span>Sub-second load times on mobile 4G/5G</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                  <span>1-Tap WhatsApp and direct call triggers</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                  <span>Physician bio & medical council credentials</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                  <span>Emergency triage banner & insurance empanelment</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                  <span>Easy content manager for clinic staff</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 10 — INDUSTRIES SELECTOR */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-10">
          <span className="text-xs font-bold uppercase tracking-wider text-[#0B5ED7] block mb-1">
            Specialized Experience
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold font-display text-[#071A3A] tracking-tight">
            Healthcare Marketing For Every Medical Specialty
          </h2>
          <p className="text-slate-600 text-xs sm:text-sm mt-2">
            Patient behavior varies dramatically between an emergency cardiac procedure and an elective dental implant. We tailor marketing funnels to the specific clinical reality of your specialty.
          </p>
        </div>

        {/* Industry Tabs */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 text-xs whitespace-nowrap justify-start lg:justify-center">
          {industriesData.slice(0, 8).map((ind) => (
            <button
              key={ind.id}
              onClick={() => setSelectedIndustryTab(ind.id)}
              className={`px-4 py-2 rounded-xl font-semibold transition-all cursor-pointer ${
                selectedIndustryTab === ind.id
                  ? 'bg-[#0B5ED7] text-white shadow-sm'
                  : 'bg-white text-slate-700 hover:bg-slate-100 border border-slate-200'
              }`}
            >
              {ind.title.split('&')[0]}
            </button>
          ))}
        </div>

        {/* Selected Industry Card */}
        <div className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-sm mt-4">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            <div className="lg:col-span-7 space-y-4">
              <span className="text-[11px] font-bold text-[#14B8C4] uppercase tracking-wider">
                {selectedIndustry.category}
              </span>
              <h3 className="text-xl font-bold font-display text-[#071A3A]">
                {selectedIndustry.title}
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                {selectedIndustry.shortDesc}
              </p>

              <div className="p-3.5 bg-slate-50 rounded-xl border border-slate-200 text-xs space-y-1">
                <span className="font-bold text-[#071A3A] block">Patient Search Behavior:</span>
                <p className="text-slate-500 text-[11px] leading-relaxed">
                  {selectedIndustry.patientSearchBehavior}
                </p>
              </div>

              <div className="pt-2">
                <button
                  onClick={() => onNavigate(`/industries/${selectedIndustry.slug}`)}
                  className="px-5 py-2.5 bg-[#0B5ED7] hover:bg-[#082B63] text-white text-xs font-semibold rounded-lg transition-colors cursor-pointer"
                >
                  Explore Full {selectedIndustry.title} Strategy →
                </button>
              </div>
            </div>

            <div className="lg:col-span-5 bg-slate-50 p-5 rounded-xl border border-slate-200 text-xs space-y-3">
              <span className="font-bold text-[#071A3A] block">Recommended Growth Channels:</span>
              <div className="space-y-2">
                <div className="p-2.5 bg-white rounded-lg border border-slate-200">
                  <span className="font-semibold text-slate-800 block text-[11px]">SEO Focus:</span>
                  <span className="text-slate-500 text-[11px]">{selectedIndustry.seoStrategy[0]}</span>
                </div>
                <div className="p-2.5 bg-white rounded-lg border border-slate-200">
                  <span className="font-semibold text-slate-800 block text-[11px]">PPC / Ads Focus:</span>
                  <span className="text-slate-500 text-[11px]">{selectedIndustry.adsStrategy[0]}</span>
                </div>
                <div className="p-2.5 bg-white rounded-lg border border-slate-200">
                  <span className="font-semibold text-slate-800 block text-[11px]">Website Must-Have:</span>
                  <span className="text-slate-500 text-[11px]">{selectedIndustry.websiteRequirements[0]}</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="text-center mt-6">
          <button
            onClick={() => onNavigate('/industries')}
            className="text-xs font-bold text-[#0B5ED7] hover:underline"
          >
            View All 28+ Medical Specialties →
          </button>
        </div>
      </section>

      {/* SECTION 11 — WHY WEB LEADING INDIA */}
      <section className="bg-[#071A3A] text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="text-xs font-bold uppercase tracking-wider text-[#14B8C4] block mb-1">
              Our Core Differentiation
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold font-display tracking-tight text-white">
              Why Healthcare Businesses Choose Web Leading India
            </h2>
            <p className="text-slate-400 text-xs sm:text-sm mt-2">
              We are not a generic marketing agency that also takes doctors. We are a specialized healthcare growth partner with 5+ years of verified medical domain focus.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: 'Healthcare-Exclusive Focus',
                desc: 'Deep familiarity with medical terminology, patient anxiety, doctor schedules, and clinical compliance.'
              },
              {
                title: 'Complete Growth Stack',
                desc: 'From custom sub-second website development to Google Ads, Local SEO, and CRM lead routing.'
              },
              {
                title: 'Transparent Collaboration',
                desc: 'No lock-in contracts, no inflated jargon, and no false guarantees. You own 100% of your digital assets.'
              },
              {
                title: 'Data-Driven Attribution',
                desc: 'Comprehensive call tracking and WhatsApp attribution identifying which channels produce confirmed visits.'
              }
            ].map((item, idx) => (
              <div key={idx} className="bg-slate-800/60 p-6 rounded-2xl border border-slate-700">
                <div className="w-8 h-8 rounded-lg bg-[#0B5ED7] text-white flex items-center justify-center font-bold text-xs mb-3">
                  0{idx + 1}
                </div>
                <h3 className="text-base font-bold text-white mb-2">{item.title}</h3>
                <p className="text-xs text-slate-400 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 12 — PROCESS */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-xs font-bold uppercase tracking-wider text-[#0B5ED7] block mb-1">
            Structured Execution
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold font-display text-[#071A3A] tracking-tight">
            From Strategy To Sustainable Digital Growth
          </h2>
          <p className="text-slate-600 text-xs sm:text-sm mt-2">
            A disciplined 10-step methodology engineered to launch medical websites and patient acquisition funnels on time and with zero clinical disruption.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
          {processSteps.slice(0, 5).map((step, idx) => (
            <div key={idx} className="bg-white p-5 rounded-2xl border border-slate-200 shadow-xs flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs font-bold text-[#0B5ED7]">{step.number}</span>
                  <span className="text-[10px] text-slate-400 font-medium">{step.timeline}</span>
                </div>
                <h3 className="font-bold text-xs text-[#071A3A] mb-1">{step.title}</h3>
                <p className="text-[11px] text-slate-500 leading-relaxed">{step.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-8">
          <button
            onClick={() => onNavigate('/process')}
            className="px-5 py-2.5 bg-slate-100 hover:bg-slate-200 text-[#071A3A] text-xs font-bold rounded-xl transition-colors cursor-pointer"
          >
            Explore All 10 Process Stages →
          </button>
        </div>
      </section>

      {/* SECTION 13 — PORTFOLIO PREVIEW */}
      <section className="bg-slate-50/80 py-16 border-y border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-[#0B5ED7] block mb-1">
                Representative Projects
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold font-display text-[#071A3A] tracking-tight">
                Explore Our Healthcare Digital Work
              </h2>
            </div>
            <button
              onClick={() => onNavigate('/portfolio')}
              className="text-xs font-bold text-[#0B5ED7] hover:underline flex items-center gap-1"
            >
              <span>View All Portfolio Entries</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {portfolioData.slice(0, 3).map((item) => (
              <div key={item.id} className="bg-white rounded-2xl p-6 border border-slate-200 shadow-xs flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between text-[11px] text-slate-400 mb-2">
                    <span>{item.industry}</span>
                    <span className="text-[#0B5ED7] font-semibold">{item.serviceCategory}</span>
                  </div>
                  <h3 className="text-base font-bold font-display text-[#071A3A] mb-2">{item.name}</h3>
                  <p className="text-xs text-slate-600 leading-relaxed mb-4">{item.summary}</p>
                  
                  <div className="flex flex-wrap gap-1.5 pt-2 border-t border-slate-100">
                    {item.techStack.map((tech, tIdx) => (
                      <span key={tIdx} className="text-[10px] text-slate-500 bg-slate-100 px-2 py-0.5 rounded">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="pt-4 mt-4 border-t border-slate-100">
                  <button
                    onClick={() => onNavigate('/portfolio')}
                    className="text-xs font-bold text-[#0B5ED7] hover:underline"
                  >
                    View Project Breakdown →
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 14 — PRICING PREVIEW */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-xs font-bold uppercase tracking-wider text-[#0B5ED7] block mb-1">
            Transparent Investment
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold font-display text-[#071A3A] tracking-tight">
            Solutions Designed For Your Healthcare Practice
          </h2>
          <p className="text-slate-600 text-xs sm:text-sm mt-2">
            Transparent pricing with verified milestones. Final investment depends on clinical scope, medical specialty, and practice location.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {pricingPackages.slice(0, 3).map((pkg) => (
            <div 
              key={pkg.id} 
              className={`bg-white rounded-2xl p-6 sm:p-8 border shadow-xs flex flex-col justify-between ${
                pkg.popular ? 'border-[#0B5ED7] ring-1 ring-[#0B5ED7] relative' : 'border-slate-200'
              }`}
            >
              {pkg.popular && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 bg-[#0B5ED7] text-white text-[10px] font-bold rounded-full uppercase tracking-wider">
                  Most Popular For Clinics
                </div>
              )}
              <div>
                <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400 block mb-1">
                  {pkg.category}
                </span>
                <h3 className="text-lg font-bold font-display text-[#071A3A] mb-2">{pkg.name}</h3>
                <div className="flex items-baseline gap-1 my-3">
                  <span className="text-2xl sm:text-3xl font-extrabold font-display text-[#071A3A]">{pkg.price}</span>
                  <span className="text-xs text-slate-500">/ {pkg.billingPeriod}</span>
                </div>
                <p className="text-xs text-slate-600 leading-relaxed mb-4">{pkg.description}</p>

                <div className="space-y-2 border-t border-slate-100 pt-4 text-xs">
                  {pkg.inclusions.slice(0, 4).map((inc, i) => (
                    <div key={i} className="flex items-start gap-2 text-slate-600">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0 mt-0.5" />
                      <span className="text-[11px]">{inc}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-6 mt-6 border-t border-slate-100">
                <button
                  onClick={() => onNavigate('/get-quote')}
                  className={`w-full py-2.5 text-xs font-bold rounded-xl transition-colors cursor-pointer ${
                    pkg.popular
                      ? 'bg-[#0B5ED7] hover:bg-[#082B63] text-white shadow-sm'
                      : 'bg-slate-100 hover:bg-slate-200 text-[#071A3A]'
                  }`}
                >
                  Request Package Proposal
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-8">
          <button
            onClick={() => onNavigate('/pricing')}
            className="text-xs font-bold text-[#0B5ED7] hover:underline"
          >
            Explore Complete Pricing & Service Plans →
          </button>
        </div>
      </section>

      {/* SECTION 15 — FAQ ACCORDION */}
      <section className="bg-slate-50 py-16 border-y border-slate-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <span className="text-xs font-bold uppercase tracking-wider text-[#0B5ED7] block mb-1">
              Got Questions?
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold font-display text-[#071A3A] tracking-tight">
              Frequently Asked Questions
            </h2>
            <p className="text-slate-600 text-xs sm:text-sm mt-2">
              Common questions doctors and hospital administrators ask before partnering with Web Leading India.
            </p>
          </div>

          <div className="space-y-3">
            {homepageFaqs.map((faq) => {
              const isOpen = openFaqId === faq.id;
              return (
                <div key={faq.id} className="bg-white rounded-xl border border-slate-200 overflow-hidden shadow-xs">
                  <button
                    onClick={() => setOpenFaqId(isOpen ? null : faq.id)}
                    className="w-full text-left p-4.5 flex items-center justify-between gap-4 cursor-pointer hover:bg-slate-50/60 transition-colors"
                  >
                    <span className="text-xs sm:text-sm font-bold text-[#071A3A]">{faq.question}</span>
                    <ChevronDown className={`w-4 h-4 text-slate-400 shrink-0 transition-transform ${isOpen ? 'rotate-180' : ''}`} />
                  </button>
                  {isOpen && (
                    <div className="p-4.5 pt-0 text-xs text-slate-600 leading-relaxed border-t border-slate-100 bg-slate-50/30">
                      {faq.answer}
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          <div className="text-center mt-8">
            <button
              onClick={() => onNavigate('/faq')}
              className="text-xs font-bold text-[#0B5ED7] hover:underline"
            >
              Browse All 40+ Healthcare Marketing FAQs →
            </button>
          </div>
        </div>
      </section>

      {/* SECTION 16 — FINAL CTA */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-12">
        <div className="bg-[#071A3A] text-white rounded-3xl p-8 sm:p-14 text-center relative overflow-hidden">
          <div className="max-w-2xl mx-auto space-y-6 relative z-10">
            <span className="text-xs font-bold uppercase tracking-wider text-[#14B8C4]">
              Start Your Patient Growth Journey
            </span>
            <h2 className="text-2xl sm:text-4xl font-extrabold font-display tracking-tight text-white">
              Ready To Grow Your Healthcare Brand?
            </h2>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              Let’s build a digital strategy that helps your healthcare business connect with the right audience. Speak with our healthcare marketing directors today.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
              <button
                onClick={() => onNavigate('/get-quote')}
                className="px-6 py-3 bg-[#0B5ED7] hover:bg-blue-600 text-white text-xs sm:text-sm font-bold rounded-xl transition-colors cursor-pointer shadow-md"
              >
                Get Free Strategy Proposal
              </button>
              <button
                onClick={() => onNavigate('/contact')}
                className="px-6 py-3 bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs sm:text-sm font-semibold rounded-xl border border-slate-700 transition-colors"
              >
                Contact Consultation Desk
              </button>
            </div>
            <div className="pt-4 text-xs text-slate-400">
              Direct Phone: <a href={`tel:${businessInfo.phone}`} className="text-[#14B8C4] font-semibold hover:underline">{businessInfo.phone}</a> · Delhi, India
            </div>
          </div>
        </div>
      </section>

    </div>
  );
};
