import React, { useState } from 'react';
import { ArrowRight, CheckCircle2, Filter, Layers, Code, Sparkles } from 'lucide-react';
import { portfolioData } from '../data/websiteData';
import { Breadcrumbs } from '../components/Breadcrumbs';

interface PortfolioPageProps {
  onNavigate: (path: string) => void;
}

export const PortfolioPage: React.FC<PortfolioPageProps> = ({ onNavigate }) => {
  const [activeFilter, setActiveFilter] = useState<string>('All');

  const filters = ['All', 'Web Development', 'SEO', 'Google Ads', 'Social Media', 'Branding', 'Healthcare Technology'];

  const filteredItems = portfolioData.filter(item => {
    if (activeFilter === 'All') return true;
    return item.serviceCategory.toLowerCase().includes(activeFilter.toLowerCase()) ||
           item.techStack.some(t => t.toLowerCase().includes(activeFilter.toLowerCase()));
  });

  return (
    <div className="space-y-12">
      <Breadcrumbs 
        items={[
          { label: 'Portfolio' }
        ]} 
        onNavigate={onNavigate} 
      />

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#071A3A] text-white rounded-3xl p-8 sm:p-14 relative overflow-hidden">
          <div className="max-w-3xl space-y-4">
            <span className="text-xs font-bold uppercase tracking-wider text-[#14B8C4]">
              Work Architecture & Sample Showcases
            </span>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-display tracking-tight text-white leading-tight">
              Explore Our Healthcare Digital Work
            </h1>
            <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
              Examine our medical website architectures, high-performance appointment funnels, and practice management technology solutions.
            </p>
          </div>
        </div>
      </section>

      {/* Filter Bar */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-1.5 p-1 bg-slate-100 rounded-xl overflow-x-auto">
          {filters.map(f => (
            <button
              key={f}
              onClick={() => setActiveFilter(f)}
              className={`px-4 py-2 text-xs font-semibold rounded-lg transition-colors whitespace-nowrap cursor-pointer ${
                activeFilter === f
                  ? 'bg-white text-[#071A3A] shadow-xs'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              {f}
            </button>
          ))}
        </div>
      </section>

      {/* Portfolio Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map(item => (
            <div key={item.id} className="bg-white rounded-2xl p-6 sm:p-7 border border-slate-200 shadow-xs hover:shadow-md transition-all flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between text-xs text-slate-400 mb-2">
                  <span className="font-semibold text-slate-500">{item.industry}</span>
                  <span className="text-[#0B5ED7] font-semibold">{item.serviceCategory}</span>
                </div>

                <h3 className="text-lg font-bold font-display text-[#071A3A] mb-2">{item.name}</h3>
                <p className="text-xs text-slate-600 leading-relaxed mb-4">{item.summary}</p>

                <div className="space-y-2 border-t border-slate-100 pt-3 text-xs">
                  <div>
                    <span className="font-bold text-slate-700 text-[11px] block">Challenge:</span>
                    <p className="text-slate-500 text-[11px]">{item.challenge}</p>
                  </div>
                  <div>
                    <span className="font-bold text-slate-700 text-[11px] block">Solution Implemented:</span>
                    <p className="text-slate-500 text-[11px]">{item.solution}</p>
                  </div>
                </div>

                <div className="flex flex-wrap gap-1 mt-4 pt-3 border-t border-slate-100">
                  {item.techStack.map((tech, i) => (
                    <span key={i} className="text-[10px] bg-slate-50 text-slate-600 px-2 py-0.5 rounded border border-slate-200">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="pt-6 mt-6 border-t border-slate-100">
                <button
                  onClick={() => onNavigate('/case-studies')}
                  className="w-full py-2.5 bg-slate-50 hover:bg-[#0B5ED7] text-slate-700 hover:text-white text-xs font-semibold rounded-xl transition-all flex items-center justify-center gap-1.5 cursor-pointer"
                >
                  <span>Explore Healthcare Case Studies</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};
