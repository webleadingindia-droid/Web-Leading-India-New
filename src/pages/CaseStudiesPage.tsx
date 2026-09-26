import React from 'react';
import { ArrowRight, CheckCircle2, Award, Clock } from 'lucide-react';
import { caseStudiesData } from '../data/websiteData';
import { Breadcrumbs } from '../components/Breadcrumbs';

interface CaseStudiesPageProps {
  onNavigate: (path: string) => void;
}

export const CaseStudiesPage: React.FC<CaseStudiesPageProps> = ({ onNavigate }) => {
  return (
    <div className="space-y-12">
      <Breadcrumbs 
        items={[
          { label: 'Case Studies' }
        ]} 
        onNavigate={onNavigate} 
      />

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#071A3A] text-white rounded-3xl p-8 sm:p-14 relative overflow-hidden">
          <div className="max-w-3xl space-y-4">
            <span className="text-xs font-bold uppercase tracking-wider text-[#14B8C4]">
              In-Depth Analyses
            </span>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-display tracking-tight text-white leading-tight">
              Healthcare Digital Case Studies
            </h1>
            <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
              Explore how we analyze clinical challenges, formulate medical search and advertising strategies, and deploy patient acquisition funnels.
            </p>
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16 space-y-8">
        {caseStudiesData.map((study) => (
          <div key={study.id} className="bg-white rounded-2xl p-6 sm:p-10 border border-slate-200 shadow-xs space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-4 border-b border-slate-200 gap-2">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-[#0B5ED7] block">
                  {study.industry}
                </span>
                <h3 className="text-2xl font-bold font-display text-[#071A3A] mt-1">
                  {study.client}
                </h3>
              </div>
              <div className="flex flex-wrap gap-1.5">
                {study.services.map((s, i) => (
                  <span key={i} className="text-xs bg-blue-50 text-[#0B5ED7] px-2.5 py-1 rounded-md font-medium">
                    {s}
                  </span>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-xs sm:text-sm text-slate-700">
              <div className="space-y-4">
                <div>
                  <h4 className="font-bold text-[#071A3A] mb-1">Clinical & Marketing Challenge:</h4>
                  <p className="text-slate-600 leading-relaxed">{study.challenge}</p>
                </div>
                <div>
                  <h4 className="font-bold text-[#071A3A] mb-1">Strategic Intervention:</h4>
                  <p className="text-slate-600 leading-relaxed">{study.strategy}</p>
                </div>
                <div>
                  <h4 className="font-bold text-[#071A3A] mb-1">Key Clinical Learnings:</h4>
                  <ul className="space-y-1.5 text-slate-600">
                    {study.keyLearnings.map((k, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                        <span>{k}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="space-y-4 bg-slate-50 p-6 rounded-xl border border-slate-200">
                <div>
                  <h4 className="font-bold text-[#071A3A] mb-2">Execution Roadmap:</h4>
                  <ul className="space-y-2 text-slate-600">
                    {study.execution.map((e, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-[#0B5ED7] mt-1.5" />
                        <span>{e}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="pt-3 border-t border-slate-200">
                  <h4 className="font-bold text-[#071A3A] mb-1">Practice Outcome:</h4>
                  <p className="text-slate-600 leading-relaxed">{study.outcome}</p>
                </div>
              </div>
            </div>

            <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
              <button
                onClick={() => onNavigate('/get-quote')}
                className="px-5 py-2.5 bg-[#0B5ED7] hover:bg-[#082B63] text-white text-xs font-semibold rounded-lg transition-colors cursor-pointer"
              >
                Request Similar Strategy For Your Practice →
              </button>
            </div>
          </div>
        ))}
      </section>
    </div>
  );
};
