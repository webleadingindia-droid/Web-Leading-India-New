import React from 'react';
import { ArrowLeft, Home, Phone } from 'lucide-react';
import { businessInfo } from '../data/websiteData';

interface NotFoundPageProps {
  onNavigate: (path: string) => void;
}

export const NotFoundPage: React.FC<NotFoundPageProps> = ({ onNavigate }) => {
  return (
    <div className="max-w-2xl mx-auto px-4 py-24 text-center space-y-6">
      <div className="w-16 h-16 rounded-2xl bg-blue-50 text-[#0B5ED7] flex items-center justify-center mx-auto text-2xl font-bold font-display">
        404
      </div>
      <h1 className="text-3xl font-extrabold font-display text-[#071A3A] tracking-tight">
        Page Not Found
      </h1>
      <p className="text-xs sm:text-sm text-slate-600 leading-relaxed max-w-md mx-auto">
        The requested medical marketing resource or service page might have been updated or moved. Please explore our navigation or return home.
      </p>

      <div className="pt-2 flex flex-wrap items-center justify-center gap-3">
        <button
          onClick={() => onNavigate('/')}
          className="px-5 py-2.5 bg-[#0B5ED7] hover:bg-[#082B63] text-white text-xs font-bold rounded-xl transition-colors flex items-center gap-2 cursor-pointer shadow-sm"
        >
          <Home className="w-4 h-4" />
          <span>Return To Homepage</span>
        </button>
        <button
          onClick={() => onNavigate('/services')}
          className="px-5 py-2.5 bg-slate-100 hover:bg-slate-200 text-slate-800 text-xs font-semibold rounded-xl transition-colors cursor-pointer"
        >
          Explore Healthcare Services
        </button>
      </div>

      <div className="pt-8 text-xs text-slate-400">
        Need immediate consultation? Call our desk directly at{' '}
        <a href={`tel:${businessInfo.phone}`} className="text-[#0B5ED7] font-semibold hover:underline">
          {businessInfo.phone}
        </a>
      </div>
    </div>
  );
};
