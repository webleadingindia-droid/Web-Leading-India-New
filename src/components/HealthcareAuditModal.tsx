import React, { useState } from 'react';
import { X, Sparkles, Building2, Globe, MapPin, CheckCircle2, ArrowRight, Loader2, Phone } from 'lucide-react';
import { businessInfo } from '../data/websiteData';

interface HealthcareAuditModalProps {
  isOpen: boolean;
  onClose: () => void;
  onNavigate: (path: string) => void;
}

export const HealthcareAuditModal: React.FC<HealthcareAuditModalProps> = ({ isOpen, onClose, onNavigate }) => {
  const [practiceName, setPracticeName] = useState('');
  const [practiceType, setPracticeType] = useState('Specialty Clinic');
  const [city, setCity] = useState('');
  const [website, setWebsite] = useState('');
  const [mainGoal, setMainGoal] = useState('Increase patient inquiries & local Google Maps visibility');
  const [isLoading, setIsLoading] = useState(false);
  const [auditResult, setAuditResult] = useState<string | null>(null);

  if (!isOpen) return null;

  const handleRunAudit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!practiceName.trim()) return;

    setIsLoading(true);
    setAuditResult(null);

    try {
      const response = await fetch('/api/audit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          practiceName,
          practiceType,
          city,
          website,
          mainGoal
        })
      });

      const data = await response.json();
      if (data.auditReport) {
        setAuditResult(data.auditReport);
      } else if (data.analysis) {
        const a = data.analysis;
        setAuditResult(`**Growth Evaluation for ${practiceName} (${practiceType})**\n\n- **Summary**: ${a.summary}\n- **Estimated Local SEO Health**: ${a.localSeoScore}%\n- **Website Readiness**: ${a.websiteReadiness}%\n- **Practice Growth Potential**: ${a.growthPotential}\n\n**Actionable Recommendations:**\n${a.keyRecommendations.map((r: string) => `• ${r}`).join('\n')}\n\n**Recommended Solutions:**\n${a.recommendedServices.join(', ')}`);
      } else {
        setAuditResult('Audit assessment generated. Our healthcare marketing directors recommend focusing on Google Business Profile 3-Pack optimization, mobile landing pages, and procedure-specific negative keyword lists.');
      }
    } catch (err) {
      setAuditResult('Your practice evaluation request has been recorded. Our team will review your local market competition and send a tailored audit to your contact info.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-xs flex items-center justify-center p-4 overflow-y-auto animate-in fade-in duration-150">
      <div className="bg-white rounded-2xl max-w-2xl w-full p-6 sm:p-8 shadow-2xl relative border border-slate-200 my-8">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-lg text-slate-400 hover:text-slate-700 hover:bg-slate-100 transition-colors cursor-pointer"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Title */}
        <div className="flex items-center gap-3 mb-2">
          <div className="w-10 h-10 rounded-xl bg-blue-50 text-[#0B5ED7] flex items-center justify-center">
            <Sparkles className="w-5 h-5 text-[#14B8C4]" />
          </div>
          <div>
            <h3 className="text-xl font-bold font-display text-[#071A3A] tracking-tight">
              Instant AI Healthcare Marketing Audit
            </h3>
            <p className="text-xs text-slate-500">
              Evaluate your clinic or hospital’s digital search visibility and patient acquisition readiness.
            </p>
          </div>
        </div>

        {!auditResult ? (
          <form onSubmit={handleRunAudit} className="space-y-4 mt-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">
                  Practice / Hospital Name *
                </label>
                <input
                  type="text"
                  required
                  value={practiceName}
                  onChange={(e) => setPracticeName(e.target.value)}
                  placeholder="e.g. City Dental & Implant Center"
                  className="w-full text-xs px-3.5 py-2.5 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-[#0B5ED7]"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">
                  Healthcare Category *
                </label>
                <select
                  value={practiceType}
                  onChange={(e) => setPracticeType(e.target.value)}
                  className="w-full text-xs px-3.5 py-2.5 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-[#0B5ED7] bg-white"
                >
                  <option value="Multi-Specialty Hospital">Multi-Specialty Hospital</option>
                  <option value="Specialty Clinic">Specialty Clinic</option>
                  <option value="Dental Clinic">Dental Clinic</option>
                  <option value="Eye Hospital">Eye Hospital</option>
                  <option value="IVF & Fertility Center">IVF & Fertility Center</option>
                  <option value="Individual Doctor / Surgeon">Individual Doctor / Surgeon</option>
                  <option value="Orthopedic Center">Orthopedic Center</option>
                  <option value="Diagnostic Laboratory">Diagnostic Laboratory</option>
                  <option value="Dermatology & Aesthetics">Dermatology & Aesthetics</option>
                  <option value="Telemedicine Platform">Telemedicine Platform</option>
                </select>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">
                  City / Location
                </label>
                <input
                  type="text"
                  value={city}
                  onChange={(e) => setCity(e.target.value)}
                  placeholder="e.g. Delhi NCR, Mumbai, Bengaluru"
                  className="w-full text-xs px-3.5 py-2.5 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-[#0B5ED7]"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">
                  Current Website (optional)
                </label>
                <input
                  type="url"
                  value={website}
                  onChange={(e) => setWebsite(e.target.value)}
                  placeholder="https://yourclinic.com"
                  className="w-full text-xs px-3.5 py-2.5 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-[#0B5ED7]"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-700 mb-1">
                Primary Business Goal
              </label>
              <select
                value={mainGoal}
                onChange={(e) => setMainGoal(e.target.value)}
                className="w-full text-xs px-3.5 py-2.5 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-[#0B5ED7] bg-white"
              >
                <option value="Increase patient inquiries & local Google Maps visibility">Increase patient inquiries & local Google Maps visibility</option>
                <option value="Fill appointment slots for surgical / high-ticket treatments">Fill appointment slots for surgical / high-ticket treatments</option>
                <option value="Build a new high-converting mobile healthcare website">Build a new high-converting mobile healthcare website</option>
                <option value="Establish doctor authority & video marketing presence">Establish doctor authority & video marketing presence</option>
                <option value="Reduce reliance on aggregators & commissions">Reduce reliance on aggregators & commissions</option>
              </select>
            </div>

            <div className="pt-2">
              <button
                type="submit"
                disabled={isLoading}
                className="w-full py-3 px-4 bg-[#0B5ED7] hover:bg-[#082B63] text-white text-xs font-bold rounded-xl transition-colors flex items-center justify-center gap-2 cursor-pointer shadow-sm"
              >
                {isLoading ? (
                  <>
                    <Loader2 className="w-4 h-4 animate-spin" />
                    <span>Analyzing Medical Catchment & Search Presence...</span>
                  </>
                ) : (
                  <>
                    <Sparkles className="w-4 h-4 text-[#14B8C4]" />
                    <span>Generate Practice Growth Audit</span>
                  </>
                )}
              </button>
            </div>
          </form>
        ) : (
          <div className="mt-6 space-y-4">
            <div className="p-4 bg-slate-50 border border-slate-200 rounded-xl text-xs text-slate-800 leading-relaxed max-h-96 overflow-y-auto whitespace-pre-wrap">
              {auditResult}
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-between gap-3 pt-2">
              <button
                onClick={() => setAuditResult(null)}
                className="text-xs text-slate-500 hover:text-slate-800 underline"
              >
                Run Another Audit
              </button>
              <div className="flex items-center gap-2 w-full sm:w-auto">
                <button
                  onClick={() => {
                    onClose();
                    onNavigate('/get-quote');
                  }}
                  className="w-full sm:w-auto px-4 py-2 bg-[#0B5ED7] hover:bg-[#082B63] text-white text-xs font-semibold rounded-lg transition-colors cursor-pointer text-center"
                >
                  Discuss Implementation Strategy →
                </button>
              </div>
            </div>
          </div>
        )}

      </div>
    </div>
  );
};
