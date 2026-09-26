import React, { useState } from 'react';
import { ArrowRight, CheckCircle2, ShieldCheck, HelpCircle } from 'lucide-react';
import { pricingPackages } from '../data/websiteData';
import { Breadcrumbs } from '../components/Breadcrumbs';

interface PricingPageProps {
  onNavigate: (path: string) => void;
}

export const PricingPage: React.FC<PricingPageProps> = ({ onNavigate }) => {
  const [selectedCategory, setSelectedCategory] = useState<'All' | 'Website Development' | 'Social Media' | 'Website Design' | 'Enterprise / Systems'>('All');

  const categories = ['All', 'Website Development', 'Social Media', 'Website Design', 'Enterprise / Systems'] as const;

  const filteredPackages = pricingPackages.filter(p => {
    if (selectedCategory === 'All') return true;
    return p.category === selectedCategory;
  });

  return (
    <div className="space-y-12">
      <Breadcrumbs 
        items={[
          { label: 'Pricing' }
        ]} 
        onNavigate={onNavigate} 
      />

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#071A3A] text-white rounded-3xl p-8 sm:p-14 relative overflow-hidden">
          <div className="max-w-3xl space-y-4">
            <span className="text-xs font-bold uppercase tracking-wider text-[#14B8C4]">
              Transparent Healthcare Investment
            </span>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-display tracking-tight text-white leading-tight">
              Predictable Healthcare Marketing & Engineering Packages
            </h1>
            <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
              We believe in honest, milestone-driven investment models. Explore our verified packages for medical websites, practice management systems, and monthly growth retainers.
            </p>
            <div className="p-3 bg-slate-800/80 rounded-xl border border-slate-700 text-xs text-slate-300 max-w-xl">
              <strong className="text-white">Pricing Transparency Note:</strong> Final pricing depends on project scope, clinical functionality, multi-department requirements, and geographical market.
            </div>
          </div>
        </div>
      </section>

      {/* Filter Tabs */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-1.5 p-1 bg-slate-100 rounded-xl overflow-x-auto w-full sm:w-auto">
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-2 text-xs font-semibold rounded-lg transition-colors whitespace-nowrap cursor-pointer ${
                selectedCategory === cat
                  ? 'bg-white text-[#071A3A] shadow-xs'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </section>

      {/* Pricing Cards Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredPackages.map(pkg => (
            <div
              key={pkg.id}
              className={`bg-white rounded-2xl p-6 sm:p-8 border shadow-xs flex flex-col justify-between ${
                pkg.popular ? 'border-[#0B5ED7] ring-1 ring-[#0B5ED7] relative' : 'border-slate-200'
              }`}
            >
              {pkg.popular && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 bg-[#0B5ED7] text-white text-[10px] font-bold rounded-full uppercase tracking-wider">
                  Recommended For Clinics
                </div>
              )}

              <div>
                <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400 block mb-1">
                  {pkg.category}
                </span>
                <h3 className="text-xl font-bold font-display text-[#071A3A] mb-2">{pkg.name}</h3>

                <div className="flex items-baseline gap-1 my-3">
                  <span className="text-2xl sm:text-3xl font-extrabold font-display text-[#071A3A]">{pkg.price}</span>
                  <span className="text-xs text-slate-500">/ {pkg.billingPeriod}</span>
                </div>

                <p className="text-xs text-slate-600 leading-relaxed mb-4">{pkg.description}</p>

                <div className="space-y-2 border-t border-slate-100 pt-4 text-xs">
                  <span className="font-semibold text-slate-800 block text-[11px] uppercase tracking-wider">
                    Inclusions:
                  </span>
                  {pkg.inclusions.map((inc, i) => (
                    <div key={i} className="flex items-start gap-2 text-slate-600">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0 mt-0.5" />
                      <span className="text-[11px]">{inc}</span>
                    </div>
                  ))}
                </div>

                <div className="mt-4 pt-3 border-t border-slate-100 text-[11px] text-slate-500">
                  <span className="font-bold text-slate-700">Ideal For: </span>
                  <span>{pkg.idealFor}</span>
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

        {/* Custom Quote Notice */}
        <div className="mt-12 p-6 sm:p-8 bg-slate-50 border border-slate-200 rounded-2xl flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
          <div>
            <h4 className="text-base font-bold font-display text-[#071A3A]">
              Need a Custom Multi-Department Proposal?
            </h4>
            <p className="text-xs text-slate-600 mt-1 max-w-2xl">
              For large hospitals, surgical chains, and multi-location diagnostic networks, our team prepares custom scopes with dedicated SLA support and customized CRM integrations.
            </p>
          </div>
          <button
            onClick={() => onNavigate('/contact')}
            className="px-5 py-2.5 bg-[#071A3A] hover:bg-[#082B63] text-white text-xs font-bold rounded-xl transition-colors shrink-0"
          >
            Speak With Practice Directors
          </button>
        </div>
      </section>
    </div>
  );
};
