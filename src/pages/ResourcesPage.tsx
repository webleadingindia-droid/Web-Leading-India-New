import React, { useState } from 'react';
import { ArrowRight, Download, FileText, CheckCircle2, Sparkles, BookOpen } from 'lucide-react';
import { resourcesData } from '../data/websiteData';
import { Breadcrumbs } from '../components/Breadcrumbs';

interface ResourcesPageProps {
  onNavigate: (path: string) => void;
  onOpenAudit: () => void;
}

export const ResourcesPage: React.FC<ResourcesPageProps> = ({ onNavigate, onOpenAudit }) => {
  const [downloadSuccess, setDownloadSuccess] = useState<string | null>(null);

  const handleDownload = (title: string) => {
    setDownloadSuccess(title);
    setTimeout(() => setDownloadSuccess(null), 4000);
  };

  return (
    <div className="space-y-12">
      <Breadcrumbs 
        items={[
          { label: 'Healthcare Resources' }
        ]} 
        onNavigate={onNavigate} 
      />

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#071A3A] text-white rounded-3xl p-8 sm:p-14 relative overflow-hidden">
          <div className="max-w-3xl space-y-4">
            <span className="text-xs font-bold uppercase tracking-wider text-[#14B8C4]">
              Knowledge Hub & Toolkits
            </span>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-display tracking-tight text-white leading-tight">
              Free Healthcare Marketing Guides & Checklists
            </h1>
            <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
              Download our tactical playbooks, website checklists, and SEO guides designed to help doctors and healthcare administrators evaluate their digital growth potential.
            </p>
          </div>
        </div>
      </section>

      {/* Featured Lead Magnet Card */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-r from-blue-50 to-indigo-50 border border-blue-200 rounded-3xl p-8 sm:p-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div className="space-y-2 max-w-2xl">
            <span className="text-xs font-bold uppercase tracking-wider text-[#0B5ED7] flex items-center gap-1.5">
              <Sparkles className="w-4 h-4 text-[#14B8C4]" /> Featured Interactive Tool
            </span>
            <h3 className="text-2xl font-bold font-display text-[#071A3A]">
              Free AI Healthcare Marketing & SEO Audit
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              Instant evaluation of your clinic or hospital’s local Google search visibility, website readiness, and patient acquisition funnel with customized action items.
            </p>
          </div>
          <button
            onClick={onOpenAudit}
            className="px-6 py-3.5 bg-[#0B5ED7] hover:bg-[#082B63] text-white text-xs sm:text-sm font-bold rounded-xl transition-colors cursor-pointer shrink-0 shadow-sm"
          >
            Launch Free Audit Tool →
          </button>
        </div>
      </section>

      {downloadSuccess && (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="p-4 bg-emerald-50 border border-emerald-200 rounded-xl text-xs text-emerald-800 flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
            <span>Thank you! Your download link for <strong>"{downloadSuccess}"</strong> has been prepared.</span>
          </div>
        </div>
      )}

      {/* Resources Cards Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {resourcesData.map((res) => (
            <div key={res.id} className="bg-white rounded-2xl p-6 sm:p-7 border border-slate-200 shadow-xs flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between text-xs text-slate-400 mb-2">
                  <span className="font-semibold text-[#0B5ED7]">{res.type}</span>
                  <span>{res.pagesOrItems}</span>
                </div>

                <h3 className="text-base font-bold font-display text-[#071A3A] mb-2">{res.title}</h3>
                <p className="text-xs text-slate-600 leading-relaxed mb-4">{res.description}</p>
              </div>

              <div className="pt-4 border-t border-slate-100">
                <button
                  onClick={() => handleDownload(res.title)}
                  className="w-full py-2.5 bg-slate-50 hover:bg-[#0B5ED7] text-slate-700 hover:text-white text-xs font-semibold rounded-xl transition-all flex items-center justify-center gap-2 cursor-pointer"
                >
                  <Download className="w-3.5 h-3.5" />
                  <span>Download Resource ({res.format})</span>
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};
