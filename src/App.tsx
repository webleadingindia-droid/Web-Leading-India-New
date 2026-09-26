import React, { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { GeminiHealthcareAdvisor } from './components/GeminiHealthcareAdvisor';
import { HealthcareAuditModal } from './components/HealthcareAuditModal';

// Pages
import { HomePage } from './pages/HomePage';
import { AboutPage } from './pages/AboutPage';
import { ServicesPage } from './pages/ServicesPage';
import { ServiceDetailPage } from './pages/ServiceDetailPage';
import { IndustriesPage } from './pages/IndustriesPage';
import { IndustryDetailPage } from './pages/IndustryDetailPage';
import { SolutionsPage } from './pages/SolutionsPage';
import { SolutionDetailPage } from './pages/SolutionDetailPage';
import { PortfolioPage } from './pages/PortfolioPage';
import { CaseStudiesPage } from './pages/CaseStudiesPage';
import { PricingPage } from './pages/PricingPage';
import { ProcessPage } from './pages/ProcessPage';
import { BlogPage } from './pages/BlogPage';
import { BlogPostDetailPage } from './pages/BlogPostDetailPage';
import { ResourcesPage } from './pages/ResourcesPage';
import { LocationsPage } from './pages/LocationsPage';
import { LocationDetailPage } from './pages/LocationDetailPage';
import { ServiceAreaPage } from './pages/ServiceAreaPage';
import { ContactPage } from './pages/ContactPage';
import { GetQuotePage } from './pages/GetQuotePage';
import { FaqPage } from './pages/FaqPage';
import { LegalPages } from './pages/LegalPages';
import { NotFoundPage } from './pages/NotFoundPage';

export default function App() {
  const [currentPath, setCurrentPath] = useState<string>(
    typeof window !== 'undefined' ? window.location.pathname || '/' : '/'
  );
  const [isAuditModalOpen, setIsAuditModalOpen] = useState(false);

  useEffect(() => {
    const handlePopState = () => {
      setCurrentPath(window.location.pathname || '/');
    };
    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  const handleNavigate = (path: string) => {
    if (typeof window !== 'undefined') {
      window.history.pushState({}, '', path);
    }
    setCurrentPath(path);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const renderCurrentPage = () => {
    const cleanPath = currentPath.replace(/\/+$/, '') || '/';

    // 1. Home
    if (cleanPath === '/') {
      return (
        <HomePage 
          onNavigate={handleNavigate} 
          onOpenAudit={() => setIsAuditModalOpen(true)} 
        />
      );
    }

    // 2. About & Subsections
    if (cleanPath === '/about') {
      return <AboutPage onNavigate={handleNavigate} />;
    }
    if (cleanPath === '/about/our-team') {
      return <AboutPage onNavigate={handleNavigate} subSection="team" />;
    }
    if (cleanPath === '/about/our-process') {
      return <AboutPage onNavigate={handleNavigate} subSection="process" />;
    }
    if (cleanPath === '/about/our-values') {
      return <AboutPage onNavigate={handleNavigate} subSection="values" />;
    }
    if (cleanPath === '/about/why-web-leading-india') {
      return <AboutPage onNavigate={handleNavigate} subSection="why-us" />;
    }
    if (cleanPath === '/about/healthcare-expertise') {
      return <AboutPage onNavigate={handleNavigate} subSection="expertise" />;
    }

    // 3. Services Main & Detail
    if (cleanPath === '/services') {
      return (
        <ServicesPage 
          onNavigate={handleNavigate} 
          onOpenAudit={() => setIsAuditModalOpen(true)} 
        />
      );
    }
    if (cleanPath.startsWith('/services/')) {
      const slug = cleanPath.replace('/services/', '');
      return (
        <ServiceDetailPage 
          slug={slug} 
          onNavigate={handleNavigate} 
          onOpenAudit={() => setIsAuditModalOpen(true)} 
        />
      );
    }

    // 4. Industries Main & Detail
    if (cleanPath === '/industries') {
      return (
        <IndustriesPage 
          onNavigate={handleNavigate} 
          onOpenAudit={() => setIsAuditModalOpen(true)} 
        />
      );
    }
    if (cleanPath.startsWith('/industries/')) {
      const slug = cleanPath.replace('/industries/', '');
      return (
        <IndustryDetailPage 
          slug={slug} 
          onNavigate={handleNavigate} 
          onOpenAudit={() => setIsAuditModalOpen(true)} 
        />
      );
    }

    // 5. Solutions Main & Detail
    if (cleanPath === '/solutions') {
      return (
        <SolutionsPage 
          onNavigate={handleNavigate} 
          onOpenAudit={() => setIsAuditModalOpen(true)} 
        />
      );
    }
    if (cleanPath.startsWith('/solutions/')) {
      const slug = cleanPath.replace('/solutions/', '');
      return (
        <SolutionDetailPage 
          slug={slug} 
          onNavigate={handleNavigate} 
          onOpenAudit={() => setIsAuditModalOpen(true)} 
        />
      );
    }

    // 6. Portfolio
    if (cleanPath === '/portfolio' || cleanPath.startsWith('/portfolio/')) {
      return <PortfolioPage onNavigate={handleNavigate} />;
    }

    // 7. Case Studies
    if (cleanPath === '/case-studies' || cleanPath.startsWith('/case-studies/')) {
      return <CaseStudiesPage onNavigate={handleNavigate} />;
    }

    // 8. Pricing
    if (cleanPath === '/pricing' || cleanPath.startsWith('/pricing/')) {
      return <PricingPage onNavigate={handleNavigate} />;
    }

    // 9. Process
    if (cleanPath === '/process') {
      return <ProcessPage onNavigate={handleNavigate} />;
    }

    // 10. Blog Main & Detail
    if (cleanPath === '/blog') {
      return <BlogPage onNavigate={handleNavigate} />;
    }
    if (cleanPath.startsWith('/blog/')) {
      const slug = cleanPath.replace('/blog/', '');
      return (
        <BlogPostDetailPage 
          slug={slug} 
          onNavigate={handleNavigate} 
          onOpenAudit={() => setIsAuditModalOpen(true)} 
        />
      );
    }

    // 11. Resources
    if (cleanPath === '/resources' || cleanPath.startsWith('/resources/')) {
      return (
        <ResourcesPage 
          onNavigate={handleNavigate} 
          onOpenAudit={() => setIsAuditModalOpen(true)} 
        />
      );
    }

    // 12. Locations Main & Detail
    if (cleanPath === '/locations') {
      return <LocationsPage onNavigate={handleNavigate} />;
    }
    if (cleanPath.startsWith('/locations/')) {
      const slug = cleanPath.replace('/locations/', '');
      return (
        <LocationDetailPage 
          slug={slug} 
          onNavigate={handleNavigate} 
          onOpenAudit={() => setIsAuditModalOpen(true)} 
        />
      );
    }

    // 13. Service Area Directory
    if (cleanPath === '/service-area') {
      return <ServiceAreaPage onNavigate={handleNavigate} />;
    }

    // 14. Contact
    if (cleanPath === '/contact') {
      return <ContactPage onNavigate={handleNavigate} />;
    }

    // 15. Get Quote
    if (cleanPath === '/get-quote') {
      return <GetQuotePage onNavigate={handleNavigate} />;
    }

    // 16. FAQ
    if (cleanPath === '/faq') {
      return <FaqPage onNavigate={handleNavigate} />;
    }

    // 17. Legal Pages
    if (cleanPath === '/privacy-policy') {
      return <LegalPages type="privacy" onNavigate={handleNavigate} />;
    }
    if (cleanPath === '/terms-and-conditions') {
      return <LegalPages type="terms" onNavigate={handleNavigate} />;
    }
    if (cleanPath === '/cookie-policy') {
      return <LegalPages type="cookie" onNavigate={handleNavigate} />;
    }
    if (cleanPath === '/disclaimer') {
      return <LegalPages type="disclaimer" onNavigate={handleNavigate} />;
    }
    if (cleanPath === '/refund-policy') {
      return <LegalPages type="refund" onNavigate={handleNavigate} />;
    }
    if (cleanPath === '/sitemap') {
      return <LegalPages type="sitemap" onNavigate={handleNavigate} />;
    }

    // 18. Fallback 404
    return <NotFoundPage onNavigate={handleNavigate} />;
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#F5F9FF] text-[#10233F]">
      {/* Sticky Header with Mega Menus */}
      <Header 
        currentPath={currentPath} 
        onNavigate={handleNavigate} 
        onOpenAudit={() => setIsAuditModalOpen(true)} 
      />

      {/* Main Content Area */}
      <main className="flex-1">
        {renderCurrentPage()}
      </main>

      {/* Comprehensive 5-Column Footer */}
      <Footer onNavigate={handleNavigate} />

      {/* Floating AI Healthcare Growth Advisor Chat */}
      <GeminiHealthcareAdvisor onNavigate={handleNavigate} />

      {/* Instant Practice Growth Audit Modal */}
      <HealthcareAuditModal 
        isOpen={isAuditModalOpen} 
        onClose={() => setIsAuditModalOpen(false)} 
        onNavigate={handleNavigate} 
      />
    </div>
  );
}
