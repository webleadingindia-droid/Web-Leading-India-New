import React from 'react';
import { ArrowRight, CheckCircle2, Target, Sparkles } from 'lucide-react';
import { solutionsData } from '../data/websiteData';
import { Breadcrumbs } from '../components/Breadcrumbs';

interface SolutionsPageProps {
  onNavigate: (path: string) => void;
  onOpenAudit: () => void;
}

export const SolutionsPage: React.FC<SolutionsPageProps> = ({ onNavigate, onOpenAudit }) => {
  return (
    <div className="space-y-12">
      <Breadcrumbs 
        items={[
          { label: 'Healthcare Solutions' }
        ]} 
        onNavigate={onNavigate} 
      />

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#071A3A] text-white rounded-3xl p-8 sm:p-14 relative overflow-hidden">
          <div className="max-w-3xl space-y-4">
            <span className="text-xs font-bold uppercase tracking-wider text-[#14B8C4]">
              Strategic Frameworks
            </span>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-display tracking-tight text-white leading-tight">
              Integrated Healthcare Growth Solutions
            </h1>
            <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
              We bundle multi-channel marketing, engineering, and reputation management into turnkey growth systems designed for specific clinical business outcomes.
            </p>
            <div className="pt-2">
              <button
                onClick={() => onNavigate('/get-quote')}
                className="px-5 py-2.5 bg-[#0B5ED7] hover:bg-blue-600 text-white text-xs font-bold rounded-xl transition-colors cursor-pointer"
              >
                Request Custom Solution Proposal
              </button>
            </div>
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {solutionsData.map((sol) => (
            <div key={sol.id} className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-xs flex flex-col justify-between">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-[#0B5ED7] block mb-1">
                  Growth Engine
                </span>
                <h3 className="text-xl font-bold font-display text-[#071A3A] mb-2">{sol.title}</h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-4">{sol.shortDesc}</p>

                <div className="space-y-2 border-t border-slate-100 pt-4 text-xs">
                  <span className="font-bold text-slate-700 block">Core Problem Solved:</span>
                  <p className="text-slate-500 text-[11px] leading-relaxed">{sol.problem}</p>
                </div>

                <div className="flex flex-wrap gap-1.5 mt-4 pt-3 border-t border-slate-100">
                  {sol.channels.map((ch, i) => (
                    <span key={i} className="text-[10px] bg-slate-100 text-slate-600 px-2 py-0.5 rounded font-medium">
                      {ch}
                    </span>
                  ))}
                </div>
              </div>

              <div className="pt-6 mt-6 border-t border-slate-100">
                <button
                  onClick={() => onNavigate(`/solutions/${sol.slug}`)}
                  className="w-full py-2.5 bg-slate-50 hover:bg-[#0B5ED7] text-slate-700 hover:text-white text-xs font-semibold rounded-xl transition-all flex items-center justify-center gap-1.5 cursor-pointer"
                >
                  <span>Explore Solution Architecture</span>
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
