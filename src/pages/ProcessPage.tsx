import React from 'react';
import { ArrowRight, CheckCircle2, Clock, Calendar, Sparkles } from 'lucide-react';
import { processSteps } from '../data/websiteData';
import { Breadcrumbs } from '../components/Breadcrumbs';

interface ProcessPageProps {
  onNavigate: (path: string) => void;
}

export const ProcessPage: React.FC<ProcessPageProps> = ({ onNavigate }) => {
  return (
    <div className="space-y-12">
      <Breadcrumbs 
        items={[
          { label: 'Our Process' }
        ]} 
        onNavigate={onNavigate} 
      />

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#071A3A] text-white rounded-3xl p-8 sm:p-14 relative overflow-hidden">
          <div className="max-w-3xl space-y-4">
            <span className="text-xs font-bold uppercase tracking-wider text-[#14B8C4]">
              Structured Growth Lifecycle
            </span>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-display tracking-tight text-white leading-tight">
              From Practice Discovery To Sustainable Patient Growth
            </h1>
            <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
              Our 10-stage execution framework guarantees transparency, clinical accuracy, and zero downtime for your active medical practice.
            </p>
          </div>
        </div>
      </section>

      {/* 10-Step Timeline */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
        <div className="space-y-8 relative before:absolute before:inset-0 before:left-8 before:w-0.5 before:bg-slate-200 before:hidden sm:before:block">
          {processSteps.map((step, idx) => (
            <div key={idx} className="relative sm:pl-16 space-y-3">
              {/* Timeline Marker */}
              <div className="hidden sm:flex absolute left-4.5 -translate-x-1/2 top-4 w-7 h-7 rounded-full bg-[#0B5ED7] text-white text-xs font-bold items-center justify-center ring-4 ring-white shadow-xs">
                {idx + 1}
              </div>

              <div className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-xs space-y-3">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 pb-3 border-b border-slate-100">
                  <div className="flex items-center gap-3">
                    <span className="text-xs font-bold text-[#0B5ED7] sm:hidden">Stage {step.number}:</span>
                    <h3 className="text-lg font-bold font-display text-[#071A3A]">{step.title}</h3>
                  </div>
                  <div className="flex items-center gap-1.5 text-xs text-slate-500 font-semibold bg-slate-50 px-2.5 py-1 rounded-md">
                    <Clock className="w-3.5 h-3.5 text-[#0B5ED7]" />
                    <span>{step.timeline}</span>
                  </div>
                </div>

                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  {step.description}
                </p>

                <div className="pt-2">
                  <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider block mb-2">
                    Key Outputs & Deliverables:
                  </span>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                    {step.deliverables.map((deliv, dIdx) => (
                      <div key={dIdx} className="p-2.5 bg-slate-50 rounded-lg border border-slate-200/80 text-xs text-slate-700 flex items-start gap-2">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0 mt-0.5" />
                        <span className="text-[11px] leading-snug">{deliv}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <button
            onClick={() => onNavigate('/get-quote')}
            className="px-6 py-3.5 bg-[#0B5ED7] hover:bg-[#082B63] text-white text-xs sm:text-sm font-bold rounded-xl transition-colors cursor-pointer shadow-md inline-flex items-center gap-2"
          >
            <span>Start Your 10-Step Growth Process</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </section>
    </div>
  );
};
