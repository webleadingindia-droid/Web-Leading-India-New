import React from 'react';
import { ArrowRight, MapPin, CheckCircle2, Phone, Target, Sparkles, Building2 } from 'lucide-react';
import { locationsData, businessInfo, LocationItem } from '../data/websiteData';
import { Breadcrumbs } from '../components/Breadcrumbs';

interface LocationDetailPageProps {
  slug: string;
  onNavigate: (path: string) => void;
  onOpenAudit: () => void;
}

export const LocationDetailPage: React.FC<LocationDetailPageProps> = ({ slug, onNavigate, onOpenAudit }) => {
  const location: LocationItem = locationsData.find(l => l.slug === slug) || locationsData[0];

  return (
    <div className="space-y-16">
      <Breadcrumbs 
        items={[
          { label: 'Locations', path: '/locations' },
          { label: location.city }
        ]} 
        onNavigate={onNavigate} 
      />

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#071A3A] text-white rounded-3xl p-8 sm:p-14 relative overflow-hidden">
          <div className="max-w-3xl space-y-4">
            <span className="text-xs font-bold uppercase tracking-wider text-[#14B8C4]">
              {location.state} · Regional Healthcare Growth
            </span>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-display tracking-tight text-white leading-tight">
              Healthcare Digital Marketing & SEO in {location.city}
            </h1>
            <p className="text-sm sm:text-base text-slate-300 leading-relaxed max-w-2xl">
              {location.description}
            </p>

            <div className="pt-4 flex flex-wrap items-center gap-3">
              <button
                onClick={() => onNavigate('/get-quote')}
                className="px-6 py-3 bg-[#0B5ED7] hover:bg-blue-600 text-white text-xs sm:text-sm font-bold rounded-xl transition-colors cursor-pointer shadow-md"
              >
                Request {location.city} Practice Strategy
              </button>
              <button
                onClick={onOpenAudit}
                className="px-5 py-3 bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs sm:text-sm font-semibold rounded-xl border border-slate-700 transition-colors flex items-center gap-1.5"
              >
                <Sparkles className="w-4 h-4 text-[#14B8C4]" />
                <span>Audit Your {location.city} Clinic Presence</span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Local Healthcare Market Context */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="space-y-4">
            <span className="text-xs font-bold uppercase tracking-wider text-[#0B5ED7]">
              Market Dynamics
            </span>
            <h2 className="text-2xl font-bold font-display text-[#071A3A]">
              Patient Search Behavior in {location.city}
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              {location.healthcareContext}
            </p>
            <div className="p-4 bg-slate-50 rounded-xl border border-slate-200 text-xs text-slate-700 space-y-1">
              <strong className="block text-slate-900">High-Demand Medical Specialties in {location.city}:</strong>
              <div className="flex flex-wrap gap-1.5 pt-1">
                {location.keySpecialtiesInDemand.map((s, i) => (
                  <span key={i} className="bg-white border border-slate-200 px-2.5 py-0.5 rounded text-[11px] font-medium text-[#0B5ED7]">
                    {s}
                  </span>
                ))}
              </div>
            </div>
          </div>

          <div className="bg-white p-6 sm:p-8 rounded-2xl border border-slate-200 shadow-xs space-y-3 text-xs">
            <h3 className="text-sm font-bold text-[#071A3A]">
              Services Deployed for {location.city} Practices:
            </h3>
            <ul className="space-y-2.5 text-slate-600">
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                <span>Google Business Profile & 3-Pack Local SEO tailored to {location.city} neighborhoods</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                <span>Geo-fenced Google Search Ads targeting patients within 3-10 km radius</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                <span>Fast, responsive mobile clinic websites with 1-tap WhatsApp booking</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                <span>Local directory citation consistency across Justdial, Practo, and medical directories</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <span className="text-xs font-bold uppercase tracking-wider text-[#0B5ED7] block mb-1">
            Local FAQs
          </span>
          <h2 className="text-2xl font-bold font-display text-[#071A3A]">
            Healthcare Marketing in {location.city}
          </h2>
        </div>

        <div className="space-y-3 text-xs sm:text-sm">
          <div className="p-4 bg-white rounded-xl border border-slate-200 shadow-xs space-y-1">
            <h4 className="font-bold text-[#071A3A]">How does Web Leading India support practices in {location.city}?</h4>
            <p className="text-slate-600 leading-relaxed text-xs">
              We manage your digital presence remotely with scheduled bi-weekly strategy reviews and full technical support. We do not claim a physical branch in {location.city}, ensuring honest client communications while delivering top-tier performance.
            </p>
          </div>
          <div className="p-4 bg-white rounded-xl border border-slate-200 shadow-xs space-y-1">
            <h4 className="font-bold text-[#071A3A]">How long does it take for a clinic in {location.city} to rank in the Google 3-Pack?</h4>
            <p className="text-slate-600 leading-relaxed text-xs">
              Depending on neighborhood competition, verified Google Business Profile optimizations and citation matching usually begin showing improved local visibility within 6 to 10 weeks.
            </p>
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-12">
        <div className="bg-[#071A3A] text-white rounded-3xl p-8 sm:p-12 text-center relative overflow-hidden">
          <div className="max-w-xl mx-auto space-y-4 relative z-10">
            <h3 className="text-2xl font-bold font-display text-white">
              Grow Your {location.city} Healthcare Practice
            </h3>
            <p className="text-xs text-slate-300">
              Speak with our healthcare growth directors to develop a targeted patient acquisition model for {location.city}.
            </p>
            <div className="pt-2">
              <button
                onClick={() => onNavigate('/get-quote')}
                className="px-6 py-3 bg-[#0B5ED7] hover:bg-blue-600 text-white text-xs font-bold rounded-xl transition-colors cursor-pointer"
              >
                Request Free Proposal
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
