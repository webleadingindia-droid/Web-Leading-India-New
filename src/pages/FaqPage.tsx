import React, { useState } from 'react';
import { ChevronDown, Search, HelpCircle, ArrowRight } from 'lucide-react';
import { faqsData } from '../data/websiteData';
import { Breadcrumbs } from '../components/Breadcrumbs';

interface FaqPageProps {
  onNavigate: (path: string) => void;
}

export const FaqPage: React.FC<FaqPageProps> = ({ onNavigate }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [openFaqId, setOpenFaqId] = useState<string | null>(null);

  const categories = [
    'All',
    'Healthcare SEO',
    'Website Development',
    'Google Ads',
    'Social Media',
    'Lead Generation',
    'Hospital Marketing',
    'Doctor Marketing',
    'Pricing',
    'Process',
    'Healthcare Technology'
  ];

  const filteredFaqs = faqsData.filter(faq => {
    const matchesCat = selectedCategory === 'All' || faq.category === selectedCategory;
    const matchesSearch = faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          faq.answer.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCat && matchesSearch;
  });

  return (
    <div className="space-y-12">
      <Breadcrumbs 
        items={[
          { label: 'Healthcare FAQs' }
        ]} 
        onNavigate={onNavigate} 
      />

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#071A3A] text-white rounded-3xl p-8 sm:p-14 relative overflow-hidden">
          <div className="max-w-3xl space-y-4">
            <span className="text-xs font-bold uppercase tracking-wider text-[#14B8C4]">
              Healthcare Growth Knowledge Base
            </span>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-display tracking-tight text-white leading-tight">
              Frequently Asked Questions About Healthcare Digital Marketing
            </h1>
            <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
              Find transparent, clinically responsible answers on medical search engine optimization, Google Ads compliance, custom doctor websites, and patient acquisition funnels.
            </p>
          </div>
        </div>
      </section>

      {/* Filter Tabs & Search */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
        
        {/* Search */}
        <div className="max-w-md">
          <div className="relative">
            <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search by topic or question (e.g. SEO, pricing, ads)..."
              className="w-full pl-9 pr-4 py-2.5 bg-white border border-slate-300 rounded-xl text-xs text-slate-800 focus:outline-none focus:ring-1 focus:ring-[#0B5ED7]"
            />
          </div>
        </div>

        {/* Categories Bar */}
        <div className="flex items-center gap-1.5 p-1 bg-slate-100 rounded-xl overflow-x-auto w-full">
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-3.5 py-1.5 text-xs font-semibold rounded-lg transition-colors whitespace-nowrap cursor-pointer ${
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

      {/* Accordion FAQ Grid */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
        <div className="space-y-3">
          {filteredFaqs.map(faq => {
            const isOpen = openFaqId === faq.id;
            return (
              <div key={faq.id} className="bg-white rounded-xl border border-slate-200 overflow-hidden shadow-xs">
                <button
                  onClick={() => setOpenFaqId(isOpen ? null : faq.id)}
                  className="w-full text-left p-4.5 flex items-center justify-between gap-4 cursor-pointer hover:bg-slate-50 transition-colors"
                >
                  <div className="space-y-0.5">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-[#0B5ED7] block">
                      {faq.category}
                    </span>
                    <span className="text-xs sm:text-sm font-bold text-[#071A3A] block">
                      {faq.question}
                    </span>
                  </div>
                  <ChevronDown className={`w-4 h-4 text-slate-400 shrink-0 transition-transform ${isOpen ? 'rotate-180' : ''}`} />
                </button>
                {isOpen && (
                  <div className="p-4.5 pt-0 text-xs text-slate-600 leading-relaxed border-t border-slate-100 bg-slate-50/40">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {filteredFaqs.length === 0 && (
          <div className="text-center py-12 bg-white rounded-2xl border border-slate-200 text-xs text-slate-500">
            No FAQs found matching your search. Please reach out to our team directly.
          </div>
        )}

        <div className="mt-12 p-8 bg-blue-50 border border-blue-200 rounded-3xl text-center space-y-3">
          <h3 className="text-lg font-bold font-display text-[#071A3A]">
            Have a question specific to your clinic or hospital?
          </h3>
          <p className="text-xs text-slate-600 max-w-md mx-auto">
            Our healthcare strategists are available for a direct phone or virtual consultation.
          </p>
          <div className="pt-2">
            <button
              onClick={() => onNavigate('/contact')}
              className="px-5 py-2.5 bg-[#0B5ED7] hover:bg-[#082B63] text-white text-xs font-bold rounded-xl transition-colors cursor-pointer"
            >
              Contact Consultation Desk
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};
