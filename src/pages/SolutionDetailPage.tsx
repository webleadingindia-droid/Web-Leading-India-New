import React from 'react';
import { ArrowRight, CheckCircle2, Phone, Target, Layers, BarChart3, Sparkles } from 'lucide-react';
import { solutionsData, businessInfo, SolutionItem } from '../data/websiteData';
import { Breadcrumbs } from '../components/Breadcrumbs';

interface SolutionDetailPageProps {
  slug: string;
  onNavigate: (path: string) => void;
  onOpenAudit: () => void;
}

export const SolutionDetailPage: React.FC<SolutionDetailPageProps> = ({ slug, onNavigate, onOpenAudit }) => {
  const solution: SolutionItem = solutionsData.find(s => s.slug === slug) || solutionsData[0];

  return (
    <div className="space-y-16">
      <Breadcrumbs 
        items={[
          { label: 'Solutions', path: '/solutions' },
          { label: solution.title }
        ]} 
        onNavigate={onNavigate} 
      />

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#071A3A] text-white rounded-3xl p-8 sm:p-14 relative overflow-hidden">
          <div className="max-w-3xl space-y-4">
            <span className="text-xs font-bold uppercase tracking-wider text-[#14B8C4]">
              Turnkey Growth System
            </span>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-display tracking-tight text-white leading-tight">
              {solution.title}
            </h1>
            <p className="text-base sm:text-lg text-slate-300 font-medium">
              {solution.heroTagline}
            </p>
            <p className="text-xs sm:text-sm text-slate-400 leading-relaxed max-w-2xl">
              {solution.shortDesc}
            </p>

            <div className="pt-4 flex flex-wrap items-center gap-3">
              <button
                onClick={() => onNavigate('/get-quote')}
                className="px-6 py-3 bg-[#0B5ED7] hover:bg-blue-600 text-white text-xs sm:text-sm font-bold rounded-xl transition-colors cursor-pointer shadow-md"
              >
                Request Solution Implementation
              </button>
              <button
                onClick={onOpenAudit}
                className="px-5 py-3 bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs sm:text-sm font-semibold rounded-xl border border-slate-700 transition-colors flex items-center gap-1.5"
              >
                <Sparkles className="w-4 h-4 text-[#14B8C4]" />
                <span>Run Free Practice Audit</span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Problem & Strategy */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="p-6 sm:p-8 bg-white rounded-2xl border border-slate-200 shadow-xs space-y-3">
            <span className="text-xs font-bold uppercase tracking-wider text-rose-600">The Problem</span>
            <h3 className="text-lg font-bold font-display text-[#071A3A]">What Holds Practices Back</h3>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">{solution.problem}</p>
          </div>
          <div className="p-6 sm:p-8 bg-white rounded-2xl border border-slate-200 shadow-xs space-y-3">
            <span className="text-xs font-bold uppercase tracking-wider text-[#0B5ED7]">Our Strategy</span>
            <h3 className="text-lg font-bold font-display text-[#071A3A]">The Web Leading India Engine</h3>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">{solution.strategy}</p>
          </div>
        </div>
      </section>

      {/* Implementation & Deliverables */}
      <section className="bg-slate-50 py-16 border-y border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="p-6 sm:p-8 bg-white rounded-2xl border border-slate-200 shadow-xs space-y-4">
              <h3 className="text-lg font-bold font-display text-[#071A3A]">Implementation Steps</h3>
              <div className="space-y-3">
                {solution.implementation.map((step, i) => (
                  <div key={i} className="flex items-start gap-3 text-xs sm:text-sm text-slate-700">
                    <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                    <span>{step}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="p-6 sm:p-8 bg-white rounded-2xl border border-slate-200 shadow-xs space-y-4">
              <h3 className="text-lg font-bold font-display text-[#071A3A]">Deliverables & Measurement</h3>
              <div className="space-y-3">
                <span className="text-xs font-bold text-slate-500 uppercase tracking-wider block">Deliverables:</span>
                {solution.deliverables.map((deliv, i) => (
                  <div key={i} className="flex items-start gap-2 text-xs sm:text-sm text-slate-700">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#0B5ED7] mt-1.5" />
                    <span>{deliv}</span>
                  </div>
                ))}

                <span className="text-xs font-bold text-slate-500 uppercase tracking-wider block pt-3">Key Metrics Tracked:</span>
                <div className="flex flex-wrap gap-2">
                  {solution.measurement.map((metric, i) => (
                    <span key={i} className="text-xs bg-slate-100 text-slate-700 px-3 py-1 rounded-lg font-medium border border-slate-200">
                      {metric}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-12">
        <div className="bg-[#071A3A] text-white rounded-3xl p-8 sm:p-12 text-center relative overflow-hidden">
          <div className="max-w-xl mx-auto space-y-4 relative z-10">
            <h3 className="text-2xl font-bold font-display text-white">
              Deploy {solution.title} For Your Practice
            </h3>
            <p className="text-xs text-slate-300">
              Schedule a strategy discussion with our directors to see how this system can be configured for your healthcare team.
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
