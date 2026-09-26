import React, { useState, useEffect } from 'react';
import { 
  ChevronDown, 
  Menu, 
  X, 
  Phone, 
  ArrowRight, 
  Sparkles, 
  MapPin, 
  Stethoscope, 
  Building2, 
  Target, 
  FileText,
  Search
} from 'lucide-react';
import { businessInfo, servicesData, industriesData, locationsData } from '../data/websiteData';

interface HeaderProps {
  currentPath: string;
  onNavigate: (path: string) => void;
  onOpenAudit: () => void;
}

export const Header: React.FC<HeaderProps> = ({ currentPath, onNavigate, onOpenAudit }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeMegaMenu, setActiveMegaMenu] = useState<string | null>(null);
  const [mobileAccordion, setMobileAccordion] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNav = (path: string) => {
    onNavigate(path);
    setActiveMegaMenu(null);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      {/* Top micro strip */}
      <div className="bg-[#071A3A] text-slate-300 text-xs py-1.5 px-4 hidden md:block border-b border-slate-800">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-4">
            <span className="text-slate-400">Healthcare Digital Marketing • Website Development • Patient Growth Agency</span>
            <span className="text-slate-600">|</span>
            <span className="flex items-center gap-1 text-slate-300">
              <MapPin className="w-3 h-3 text-[#14B8C4]" /> Pan-India Healthcare Specialists
            </span>
          </div>
          <div className="flex items-center gap-6">
            <a href={`tel:${businessInfo.phone}`} className="flex items-center gap-1.5 text-white hover:text-[#14B8C4] transition-colors font-medium">
              <Phone className="w-3 h-3 text-[#14B8C4]" />
              <span>{businessInfo.phone}</span>
            </a>
            <span className="text-slate-600">|</span>
            <button 
              onClick={onOpenAudit}
              className="text-[#14B8C4] hover:text-white font-medium flex items-center gap-1 transition-colors cursor-pointer"
            >
              <Sparkles className="w-3 h-3" />
              <span>Free Healthcare AI Audit</span>
            </button>
          </div>
        </div>
      </div>

      {/* Main Sticky Header */}
      <header 
        className={`sticky top-0 z-50 transition-all duration-200 ${
          isScrolled 
            ? 'bg-white/95 backdrop-blur-md shadow-sm border-b border-slate-200/80' 
            : 'bg-white border-b border-slate-100'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-18">
            
            {/* Zone 1: Single Text Element Brand Wordmark */}
            <div className="flex items-center">
              <button 
                onClick={() => handleNav('/')}
                className="group flex items-center gap-2.5 text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-[#0B5ED7] rounded-md"
              >
                <div className="w-9 h-9 rounded-lg bg-[#0B5ED7] flex items-center justify-center text-white font-bold text-lg shadow-sm group-hover:bg-[#082B63] transition-colors">
                  <span className="font-display">W</span>
                </div>
                <div>
                  <span className="text-xl font-bold font-display tracking-tight text-[#071A3A] group-hover:text-[#0B5ED7] transition-colors block">
                    Web Leading India
                  </span>
                  <span className="text-[10px] uppercase tracking-wider text-slate-500 font-semibold block -mt-0.5">
                    Healthcare Growth Agency
                  </span>
                </div>
              </button>
            </div>

            {/* Zone 2: Primary Clean Nav Links (Desktop) */}
            <nav className="hidden lg:flex items-center gap-1 text-sm font-medium text-slate-700">
              <button 
                onClick={() => handleNav('/')}
                className={`px-3 py-2 rounded-md transition-colors hover:text-[#0B5ED7] ${currentPath === '/' ? 'text-[#0B5ED7] font-semibold' : ''}`}
              >
                Home
              </button>

              {/* Services Mega Menu Trigger */}
              <div 
                className="relative"
                onMouseEnter={() => setActiveMegaMenu('services')}
                onMouseLeave={() => setActiveMegaMenu(null)}
              >
                <button 
                  onClick={() => handleNav('/services')}
                  className={`px-3 py-2 rounded-md inline-flex items-center gap-1 transition-colors hover:text-[#0B5ED7] ${currentPath.startsWith('/services') ? 'text-[#0B5ED7] font-semibold' : ''}`}
                >
                  Services
                  <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-150 ${activeMegaMenu === 'services' ? 'rotate-180' : ''}`} />
                </button>

                {/* Services Mega Menu Dropdown */}
                {activeMegaMenu === 'services' && (
                  <div className="absolute top-full -left-20 w-[780px] bg-white rounded-xl shadow-xl border border-slate-200 p-6 grid grid-cols-3 gap-6 animate-in fade-in slide-in-from-top-1 duration-150">
                    <div>
                      <div className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-3 flex items-center gap-1.5">
                        <Target className="w-3.5 h-3.5 text-[#0B5ED7]" /> Healthcare Marketing
                      </div>
                      <div className="space-y-1.5">
                        {servicesData.filter(s => s.category === 'Marketing').slice(0, 5).map(service => (
                          <button
                            key={service.id}
                            onClick={() => handleNav(`/services/${service.slug}`)}
                            className="block w-full text-left p-1.5 rounded-md hover:bg-slate-50 text-xs font-medium text-slate-700 hover:text-[#0B5ED7] transition-colors"
                          >
                            <span className="font-semibold block">{service.title}</span>
                            <span className="text-[11px] text-slate-500 line-clamp-1">{service.shortDesc}</span>
                          </button>
                        ))}
                      </div>
                    </div>

                    <div>
                      <div className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-3 flex items-center gap-1.5">
                        <Building2 className="w-3.5 h-3.5 text-[#14B8C4]" /> Website & Technology
                      </div>
                      <div className="space-y-1.5">
                        {servicesData.filter(s => s.category === 'Website & Technology').slice(0, 5).map(service => (
                          <button
                            key={service.id}
                            onClick={() => handleNav(`/services/${service.slug}`)}
                            className="block w-full text-left p-1.5 rounded-md hover:bg-slate-50 text-xs font-medium text-slate-700 hover:text-[#0B5ED7] transition-colors"
                          >
                            <span className="font-semibold block">{service.title}</span>
                            <span className="text-[11px] text-slate-500 line-clamp-1">{service.shortDesc}</span>
                          </button>
                        ))}
                      </div>
                    </div>

                    <div>
                      <div className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-3 flex items-center gap-1.5">
                        <Stethoscope className="w-3.5 h-3.5 text-[#082B63]" /> Branding & Growth
                      </div>
                      <div className="space-y-1.5">
                        {servicesData.filter(s => s.category === 'Branding & Growth').slice(0, 5).map(service => (
                          <button
                            key={service.id}
                            onClick={() => handleNav(`/services/${service.slug}`)}
                            className="block w-full text-left p-1.5 rounded-md hover:bg-slate-50 text-xs font-medium text-slate-700 hover:text-[#0B5ED7] transition-colors"
                          >
                            <span className="font-semibold block">{service.title}</span>
                            <span className="text-[11px] text-slate-500 line-clamp-1">{service.shortDesc}</span>
                          </button>
                        ))}
                      </div>
                      <div className="mt-4 pt-3 border-t border-slate-100">
                        <button
                          onClick={() => handleNav('/services')}
                          className="text-xs font-semibold text-[#0B5ED7] hover:underline flex items-center gap-1"
                        >
                          Explore All Services <ArrowRight className="w-3 h-3" />
                        </button>
                      </div>
                    </div>
                  </div>
                )}
              </div>

              {/* Industries Mega Menu Trigger */}
              <div 
                className="relative"
                onMouseEnter={() => setActiveMegaMenu('industries')}
                onMouseLeave={() => setActiveMegaMenu(null)}
              >
                <button 
                  onClick={() => handleNav('/industries')}
                  className={`px-3 py-2 rounded-md inline-flex items-center gap-1 transition-colors hover:text-[#0B5ED7] ${currentPath.startsWith('/industries') ? 'text-[#0B5ED7] font-semibold' : ''}`}
                >
                  Industries
                  <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-150 ${activeMegaMenu === 'industries' ? 'rotate-180' : ''}`} />
                </button>

                {/* Industries Mega Menu Dropdown */}
                {activeMegaMenu === 'industries' && (
                  <div className="absolute top-full -left-36 w-[800px] bg-white rounded-xl shadow-xl border border-slate-200 p-6 animate-in fade-in slide-in-from-top-1 duration-150">
                    <div className="flex items-center justify-between pb-3 border-b border-slate-100 mb-4">
                      <div>
                        <span className="text-sm font-bold text-[#071A3A]">Healthcare Marketing By Medical Specialty</span>
                        <p className="text-xs text-slate-500">Customized patient acquisition strategies tailored for doctors and clinics</p>
                      </div>
                      <button 
                        onClick={() => handleNav('/industries')}
                        className="text-xs font-semibold text-[#0B5ED7] hover:underline flex items-center gap-1"
                      >
                        View All Specialties <ArrowRight className="w-3 h-3" />
                      </button>
                    </div>
                    <div className="grid grid-cols-4 gap-3 text-xs">
                      {industriesData.map(ind => (
                        <button
                          key={ind.id}
                          onClick={() => handleNav(`/industries/${ind.slug}`)}
                          className="text-left p-2 rounded-lg hover:bg-slate-50 text-slate-700 hover:text-[#0B5ED7] transition-colors"
                        >
                          <span className="font-semibold block truncate">{ind.title}</span>
                          <span className="text-[11px] text-slate-500 line-clamp-1">{ind.category}</span>
                        </button>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              {/* Solutions */}
              <button 
                onClick={() => handleNav('/solutions')}
                className={`px-3 py-2 rounded-md transition-colors hover:text-[#0B5ED7] ${currentPath.startsWith('/solutions') ? 'text-[#0B5ED7] font-semibold' : ''}`}
              >
                Solutions
              </button>

              {/* Portfolio */}
              <button 
                onClick={() => handleNav('/portfolio')}
                className={`px-3 py-2 rounded-md transition-colors hover:text-[#0B5ED7] ${currentPath === '/portfolio' ? 'text-[#0B5ED7] font-semibold' : ''}`}
              >
                Portfolio
              </button>

              {/* Pricing */}
              <button 
                onClick={() => handleNav('/pricing')}
                className={`px-3 py-2 rounded-md transition-colors hover:text-[#0B5ED7] ${currentPath === '/pricing' ? 'text-[#0B5ED7] font-semibold' : ''}`}
              >
                Pricing
              </button>

              {/* Resources & Audit */}
              <div 
                className="relative"
                onMouseEnter={() => setActiveMegaMenu('resources')}
                onMouseLeave={() => setActiveMegaMenu(null)}
              >
                <button 
                  onClick={() => handleNav('/resources')}
                  className={`px-3 py-2 rounded-md inline-flex items-center gap-1 transition-colors hover:text-[#0B5ED7] ${currentPath.startsWith('/resources') || currentPath.startsWith('/blog') ? 'text-[#0B5ED7] font-semibold' : ''}`}
                >
                  Resources
                  <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-150 ${activeMegaMenu === 'resources' ? 'rotate-180' : ''}`} />
                </button>

                {activeMegaMenu === 'resources' && (
                  <div className="absolute top-full -left-10 w-72 bg-white rounded-xl shadow-xl border border-slate-200 p-4 space-y-2 animate-in fade-in slide-in-from-top-1 duration-150">
                    <button
                      onClick={() => handleNav('/blog')}
                      className="w-full text-left p-2 rounded-lg hover:bg-slate-50 transition-colors"
                    >
                      <span className="text-xs font-bold text-[#071A3A] block">Healthcare Marketing Blog</span>
                      <span className="text-[11px] text-slate-500">In-depth guides on SEO, ads, and clinic branding</span>
                    </button>
                    <button
                      onClick={() => handleNav('/resources')}
                      className="w-full text-left p-2 rounded-lg hover:bg-slate-50 transition-colors"
                    >
                      <span className="text-xs font-bold text-[#071A3A] block">Guides & Checklists</span>
                      <span className="text-[11px] text-slate-500">Actionable PDFs for doctors and hospital teams</span>
                    </button>
                    <button
                      onClick={() => handleNav('/faq')}
                      className="w-full text-left p-2 rounded-lg hover:bg-slate-50 transition-colors"
                    >
                      <span className="text-xs font-bold text-[#071A3A] block">Knowledge Base / FAQs</span>
                      <span className="text-[11px] text-slate-500">40+ comprehensive answers on medical marketing</span>
                    </button>
                    <button
                      onClick={onOpenAudit}
                      className="w-full text-left p-2 rounded-lg bg-blue-50 text-[#0B5ED7] hover:bg-blue-100 transition-colors flex items-center justify-between"
                    >
                      <div>
                        <span className="text-xs font-bold block flex items-center gap-1">
                          <Sparkles className="w-3.5 h-3.5" /> Free AI Practice Audit
                        </span>
                        <span className="text-[11px] text-blue-700">Instant evaluation of your practice presence</span>
                      </div>
                    </button>
                  </div>
                )}
              </div>

              {/* Locations */}
              <button 
                onClick={() => handleNav('/locations')}
                className={`px-3 py-2 rounded-md transition-colors hover:text-[#0B5ED7] ${currentPath.startsWith('/locations') ? 'text-[#0B5ED7] font-semibold' : ''}`}
              >
                Locations
              </button>

              {/* About */}
              <button 
                onClick={() => handleNav('/about')}
                className={`px-3 py-2 rounded-md transition-colors hover:text-[#0B5ED7] ${currentPath === '/about' ? 'text-[#0B5ED7] font-semibold' : ''}`}
              >
                About
              </button>

              {/* Contact */}
              <button 
                onClick={() => handleNav('/contact')}
                className={`px-3 py-2 rounded-md transition-colors hover:text-[#0B5ED7] ${currentPath === '/contact' ? 'text-[#0B5ED7] font-semibold' : ''}`}
              >
                Contact
              </button>
            </nav>

            {/* Zone 3: Primary Actions (Desktop) */}
            <div className="hidden lg:flex items-center gap-3">
              <button
                onClick={() => handleNav('/get-quote')}
                className="px-4 py-2 text-xs font-semibold text-white bg-[#0B5ED7] hover:bg-[#082B63] rounded-lg transition-colors whitespace-nowrap shadow-sm hover:shadow"
              >
                Get Free Strategy
              </button>
            </div>

            {/* Mobile Menu Hamburger */}
            <div className="flex lg:hidden items-center gap-2">
              <a 
                href={`tel:${businessInfo.phone}`}
                className="p-2 rounded-lg text-[#0B5ED7] hover:bg-blue-50 transition-colors"
                aria-label="Call Web Leading India"
              >
                <Phone className="w-5 h-5" />
              </a>
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2 rounded-lg text-slate-700 hover:bg-slate-100 transition-colors"
                aria-label="Toggle Navigation Menu"
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>

          </div>
        </div>

        {/* Mobile Slide-Out / Fullscreen Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden fixed inset-x-0 top-18 bottom-0 bg-white z-50 overflow-y-auto border-t border-slate-200 p-6 flex flex-col justify-between">
            <div className="space-y-4">
              <button 
                onClick={() => handleNav('/')}
                className="block w-full text-left py-2 text-base font-semibold text-[#071A3A] border-b border-slate-100"
              >
                Home
              </button>

              {/* Services Accordion */}
              <div>
                <button 
                  onClick={() => setMobileAccordion(mobileAccordion === 'services' ? null : 'services')}
                  className="flex items-center justify-between w-full py-2 text-base font-semibold text-[#071A3A] border-b border-slate-100"
                >
                  <span>Services</span>
                  <ChevronDown className={`w-4 h-4 transition-transform ${mobileAccordion === 'services' ? 'rotate-180' : ''}`} />
                </button>
                {mobileAccordion === 'services' && (
                  <div className="pl-4 py-2 space-y-2 text-sm text-slate-600 bg-slate-50 rounded-lg my-2">
                    <button onClick={() => handleNav('/services')} className="block py-1 text-left font-semibold text-[#0B5ED7]">
                      All Services Overview →
                    </button>
                    {servicesData.slice(0, 8).map(s => (
                      <button key={s.id} onClick={() => handleNav(`/services/${s.slug}`)} className="block py-1 text-left w-full">
                        {s.title}
                      </button>
                    ))}
                  </div>
                )}
              </div>

              {/* Industries Accordion */}
              <div>
                <button 
                  onClick={() => setMobileAccordion(mobileAccordion === 'industries' ? null : 'industries')}
                  className="flex items-center justify-between w-full py-2 text-base font-semibold text-[#071A3A] border-b border-slate-100"
                >
                  <span>Industries</span>
                  <ChevronDown className={`w-4 h-4 transition-transform ${mobileAccordion === 'industries' ? 'rotate-180' : ''}`} />
                </button>
                {mobileAccordion === 'industries' && (
                  <div className="pl-4 py-2 space-y-2 text-sm text-slate-600 bg-slate-50 rounded-lg my-2">
                    <button onClick={() => handleNav('/industries')} className="block py-1 text-left font-semibold text-[#0B5ED7]">
                      All Medical Specialties →
                    </button>
                    {industriesData.slice(0, 8).map(ind => (
                      <button key={ind.id} onClick={() => handleNav(`/industries/${ind.slug}`)} className="block py-1 text-left w-full">
                        {ind.title}
                      </button>
                    ))}
                  </div>
                )}
              </div>

              <button 
                onClick={() => handleNav('/solutions')}
                className="block w-full text-left py-2 text-base font-semibold text-[#071A3A] border-b border-slate-100"
              >
                Solutions
              </button>

              <button 
                onClick={() => handleNav('/portfolio')}
                className="block w-full text-left py-2 text-base font-semibold text-[#071A3A] border-b border-slate-100"
              >
                Portfolio
              </button>

              <button 
                onClick={() => handleNav('/pricing')}
                className="block w-full text-left py-2 text-base font-semibold text-[#071A3A] border-b border-slate-100"
              >
                Pricing Packages
              </button>

              <button 
                onClick={() => handleNav('/resources')}
                className="block w-full text-left py-2 text-base font-semibold text-[#071A3A] border-b border-slate-100"
              >
                Resources & Blog
              </button>

              <button 
                onClick={() => handleNav('/locations')}
                className="block w-full text-left py-2 text-base font-semibold text-[#071A3A] border-b border-slate-100"
              >
                Locations
              </button>

              <button 
                onClick={() => handleNav('/about')}
                className="block w-full text-left py-2 text-base font-semibold text-[#071A3A] border-b border-slate-100"
              >
                About Web Leading India
              </button>

              <button 
                onClick={() => handleNav('/contact')}
                className="block w-full text-left py-2 text-base font-semibold text-[#071A3A] border-b border-slate-100"
              >
                Contact Us
              </button>
            </div>

            {/* Mobile Bottom Actions */}
            <div className="pt-6 border-t border-slate-200 space-y-3">
              <button
                onClick={() => handleNav('/get-quote')}
                className="w-full py-3 text-center text-sm font-semibold text-white bg-[#0B5ED7] rounded-lg shadow-sm"
              >
                Get Free Strategy Proposal
              </button>
              <a
                href={`tel:${businessInfo.phone}`}
                className="w-full py-3 flex items-center justify-center gap-2 text-sm font-semibold text-[#071A3A] bg-slate-100 rounded-lg"
              >
                <Phone className="w-4 h-4 text-[#0B5ED7]" /> Call {businessInfo.phone}
              </a>
            </div>
          </div>
        )}
      </header>
    </>
  );
};
