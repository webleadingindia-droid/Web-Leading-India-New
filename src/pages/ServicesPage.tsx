import React, { useState } from 'react';
import { 
  ArrowRight, 
  CheckCircle2, 
  Sparkles, 
  Target, 
  Building2, 
  Stethoscope, 
  ShieldCheck, 
  Search,
  Filter
} from 'lucide-react';
import { servicesData } from '../data/websiteData';
import { Breadcrumbs } from '../components/Breadcrumbs';

interface ServicesPageProps {
  onNavigate: (path: string) => void;
  onOpenAudit: () => void;
}

export const ServicesPage: React.FC<ServicesPageProps> = ({ onNavigate, onOpenAudit }) => {
  const [filterCategory, setFilterCategory] = useState<'All' | 'Marketing' | 'Website & Technology' | 'Branding & Growth'>('All');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredServices = servicesData.filter(service => {
    const matchesCategory = filterCategory === 'All' || service.category === filterCategory;
    const matchesSearch = service.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          service.shortDesc.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="space-y-12">
      <Breadcrumbs 
        items={[
          { label: 'Healthcare Services' }
        ]} 
        onNavigate={onNavigate} 
      />

      {/* Hero */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#071A3A] text-white rounded-3xl p-8 sm:p-14 relative overflow-hidden">
          <div className="max-w-3xl space-y-4">
            <span className="text-xs font-bold uppercase tracking-wider text-[#14B8C4]">
              Healthcare Growth Services
            </span>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-display tracking-tight text-white leading-tight">
              Everything Your Healthcare Practice Needs To Grow Online
            </h1>
            <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
              Explore our comprehensive suite of medical digital marketing, healthcare SEO, custom website development, and patient acquisition solutions engineered exclusively for doctors, clinics, and hospitals.
            </p>
            <div className="pt-2 flex flex-wrap items-center gap-3">
              <button
                onClick={() => onNavigate('/get-quote')}
                className="px-5 py-2.5 bg-[#0B5ED7] hover:bg-blue-600 text-white text-xs font-bold rounded-xl transition-colors cursor-pointer"
              >
                Get Custom Practice Proposal
              </button>
              <button
                onClick={onOpenAudit}
                className="px-5 py-2.5 bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-semibold rounded-xl border border-slate-700 transition-colors flex items-center gap-1.5 cursor-pointer"
              >
                <Sparkles className="w-3.5 h-3.5 text-[#14B8C4]" />
                <span>Free AI Website & SEO Audit</span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Search & Filter Bar */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pb-6 border-b border-slate-200">
          
          {/* Category Tabs */}
          <div className="flex items-center gap-1.5 p-1 bg-slate-100 rounded-xl overflow-x-auto w-full sm:w-auto">
            {(['All', 'Marketing', 'Website & Technology', 'Branding & Growth'] as const).map(cat => (
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

          {/* Search Input */}
          <div className="relative w-full sm:w-72">
            <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search healthcare services..."
              className="w-full pl-9 pr-4 py-2 bg-white border border-slate-300 rounded-xl text-xs text-slate-800 focus:outline-none focus:ring-1 focus:ring-[#0B5ED7]"
            />
          </div>

        </div>
      </section>

      {/* Services Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredServices.map(service => (
            <div
              key={service.id}
              className="bg-white rounded-2xl p-6 sm:p-7 border border-slate-200 shadow-xs hover:shadow-md transition-all flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400">
                    {service.category}
                  </span>
                  {service.category === 'Marketing' && <Target className="w-4 h-4 text-[#0B5ED7]" />}
                  {service.category === 'Website & Technology' && <Building2 className="w-4 h-4 text-[#14B8C4]" />}
                  {service.category === 'Branding & Growth' && <Stethoscope className="w-4 h-4 text-[#082B63]" />}
                </div>

                <h3 className="text-lg font-bold font-display text-[#071A3A] mb-2">
                  {service.title}
                </h3>

                <p className="text-xs text-slate-600 leading-relaxed mb-4">
                  {service.shortDesc}
                </p>

                {/* Key Inclusions Preview */}
                <div className="space-y-1.5 border-t border-slate-100 pt-3">
                  <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block">
                    Core Deliverables:
                  </span>
                  {service.inclusions.slice(0, 3).map((inc, i) => (
                    <div key={i} className="flex items-start gap-2 text-[11px] text-slate-600">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0 mt-0.5" />
                      <span className="line-clamp-1">{inc}</span>
                    </div>
                  ))}
                </div>

                {/* Ideal For */}
                <div className="mt-3 pt-3 border-t border-slate-100 text-[11px] text-slate-500">
                  <span className="font-semibold text-slate-700">Ideal For: </span>
                  <span>{service.whoItIsFor.slice(0, 2).join(', ')}</span>
                </div>
              </div>

              <div className="pt-6 mt-6 border-t border-slate-100">
                <button
                  onClick={() => onNavigate(`/services/${service.slug}`)}
                  className="w-full py-2.5 bg-slate-50 hover:bg-[#0B5ED7] text-slate-700 hover:text-white text-xs font-semibold rounded-xl transition-all flex items-center justify-center gap-1.5 cursor-pointer"
                >
                  <span>Explore Detailed Service Blueprint</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {filteredServices.length === 0 && (
          <div className="text-center py-16 bg-white rounded-2xl border border-slate-200">
            <p className="text-sm font-semibold text-slate-700">No services match your search filter.</p>
            <button
              onClick={() => { setFilterCategory('All'); setSearchQuery(''); }}
              className="mt-2 text-xs text-[#0B5ED7] font-semibold hover:underline"
            >
              Reset Filters
            </button>
          </div>
        )}
      </section>

      {/* Need Custom Solution Banner */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-12">
        <div className="p-8 bg-[#071A3A] text-white rounded-3xl flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
          <div>
            <h3 className="text-xl font-bold font-display text-white">
              Need A Customized Multi-Department Healthcare Strategy?
            </h3>
            <p className="text-xs text-slate-300 mt-1 max-w-xl">
              We design specialized bespoke marketing stacks combining hospital departmental landing pages, geo-fenced PPC, and local SEO for multi-branch healthcare groups.
            </p>
          </div>
          <button
            onClick={() => onNavigate('/get-quote')}
            className="px-6 py-3 bg-[#0B5ED7] hover:bg-blue-600 text-white text-xs font-bold rounded-xl transition-colors cursor-pointer shrink-0"
          >
            Request Custom Proposal
          </button>
        </div>
      </section>
    </div>
  );
};
