import React, { useState } from 'react';
import { 
  ArrowRight, 
  Stethoscope, 
  Building2, 
  Search, 
  Sparkles,
  HeartPulse,
  Activity,
  ShieldCheck
} from 'lucide-react';
import { industriesData } from '../data/websiteData';
import { Breadcrumbs } from '../components/Breadcrumbs';

interface IndustriesPageProps {
  onNavigate: (path: string) => void;
  onOpenAudit: () => void;
}

export const IndustriesPage: React.FC<IndustriesPageProps> = ({ onNavigate, onOpenAudit }) => {
  const [filterCategory, setFilterCategory] = useState<'All' | 'Hospitals & Institutions' | 'Primary & Specialty Care' | 'Surgical & Super Specialties' | 'Diagnostics & Wellness'>('All');
  const [searchQuery, setSearchQuery] = useState('');

  const categories = ['All', 'Hospitals & Institutions', 'Primary & Specialty Care', 'Surgical & Super Specialties', 'Diagnostics & Wellness'] as const;

  const filteredIndustries = industriesData.filter(ind => {
    const matchesCat = filterCategory === 'All' || ind.category === filterCategory;
    const matchesSearch = ind.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          ind.shortDesc.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCat && matchesSearch;
  });

  return (
    <div className="space-y-12">
      <Breadcrumbs 
        items={[
          { label: 'Healthcare Specialties' }
        ]} 
        onNavigate={onNavigate} 
      />

      {/* Hero */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#071A3A] text-white rounded-3xl p-8 sm:p-14 relative overflow-hidden">
          <div className="max-w-3xl space-y-4">
            <span className="text-xs font-bold uppercase tracking-wider text-[#14B8C4]">
              Clinical Domains & Medical Sectors
            </span>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-display tracking-tight text-white leading-tight">
              Healthcare Marketing Expertise Across Medical Specialties
            </h1>
            <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
              Patient search psychology differs significantly depending on clinical urgency, procedure complexity, and emotional vulnerability. Explore our specialized marketing strategies tailored to your exact discipline.
            </p>
            <div className="pt-2 flex flex-wrap items-center gap-3">
              <button
                onClick={() => onNavigate('/get-quote')}
                className="px-5 py-2.5 bg-[#0B5ED7] hover:bg-blue-600 text-white text-xs font-bold rounded-xl transition-colors cursor-pointer"
              >
                Discuss Specialty Growth Strategy
              </button>
              <button
                onClick={onOpenAudit}
                className="px-5 py-2.5 bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-semibold rounded-xl border border-slate-700 transition-colors flex items-center gap-1.5 cursor-pointer"
              >
                <Sparkles className="w-3.5 h-3.5 text-[#14B8C4]" />
                <span>Run Free Practice Audit</span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Filter & Search Bar */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pb-6 border-b border-slate-200">
          
          <div className="flex items-center gap-1.5 p-1 bg-slate-100 rounded-xl overflow-x-auto w-full sm:w-auto">
            {categories.map(cat => (
              <button
                key={cat}
                onClick={() => setFilterCategory(cat)}
                className={`px-3.5 py-1.5 text-xs font-semibold rounded-lg transition-colors whitespace-nowrap cursor-pointer ${
                  filterCategory === cat
                    ? 'bg-white text-[#071A3A] shadow-xs'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          <div className="relative w-full sm:w-72">
            <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search medical specialty..."
              className="w-full pl-9 pr-4 py-2 bg-white border border-slate-300 rounded-xl text-xs text-slate-800 focus:outline-none focus:ring-1 focus:ring-[#0B5ED7]"
            />
          </div>

        </div>
      </section>

      {/* Industries Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredIndustries.map(ind => (
            <div
              key={ind.id}
              className="bg-white rounded-2xl p-6 sm:p-7 border border-slate-200 shadow-xs hover:shadow-md transition-all flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400">
                    {ind.category}
                  </span>
                  <HeartPulse className="w-4 h-4 text-[#0B5ED7]" />
                </div>

                <h3 className="text-lg font-bold font-display text-[#071A3A] mb-2">
                  {ind.title}
                </h3>

                <p className="text-xs text-slate-600 leading-relaxed mb-4">
                  {ind.shortDesc}
                </p>

                <div className="p-3 bg-slate-50 rounded-xl border border-slate-100 text-xs mb-3">
                  <span className="font-semibold text-slate-700 text-[11px] block mb-1">
                    Key Search Behavior:
                  </span>
                  <p className="text-[11px] text-slate-500 line-clamp-2">
                    {ind.patientSearchBehavior}
                  </p>
                </div>
              </div>

              <div className="pt-4 border-t border-slate-100">
                <button
                  onClick={() => onNavigate(`/industries/${ind.slug}`)}
                  className="w-full py-2.5 bg-slate-50 hover:bg-[#0B5ED7] text-slate-700 hover:text-white text-xs font-semibold rounded-xl transition-all flex items-center justify-center gap-1.5 cursor-pointer"
                >
                  <span>Explore Specialty Growth Plan</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-12">
        <div className="p-8 bg-blue-50 border border-blue-200 rounded-3xl flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
          <div>
            <h3 className="text-lg font-bold font-display text-[#071A3A]">
              Don't See Your Specialty Listed Here?
            </h3>
            <p className="text-xs text-slate-600 mt-1">
              We design customized digital patient acquisition models for all 30+ medical and surgical sub-specialties across India.
            </p>
          </div>
          <button
            onClick={() => onNavigate('/contact')}
            className="px-6 py-3 bg-[#0B5ED7] hover:bg-[#082B63] text-white text-xs font-bold rounded-xl transition-colors cursor-pointer shrink-0"
          >
            Speak With A Healthcare Strategist
          </button>
        </div>
      </section>
    </div>
  );
};
