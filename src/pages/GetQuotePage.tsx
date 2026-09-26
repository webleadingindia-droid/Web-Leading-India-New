import React, { useState } from 'react';
import { 
  ArrowRight, 
  ArrowLeft, 
  CheckCircle2, 
  Send, 
  ShieldCheck, 
  Sparkles, 
  Building2, 
  Loader2 
} from 'lucide-react';
import { Breadcrumbs } from '../components/Breadcrumbs';

interface GetQuotePageProps {
  onNavigate: (path: string) => void;
}

export const GetQuotePage: React.FC<GetQuotePageProps> = ({ onNavigate }) => {
  const [currentStep, setCurrentStep] = useState(1);
  const totalSteps = 7;

  const [formData, setFormData] = useState({
    // Step 1: Business info
    name: '',
    phone: '',
    email: '',
    organization: '',
    // Step 2: Category
    category: 'Specialty Clinic',
    city: '',
    // Step 3: Current website
    hasWebsite: 'Yes',
    websiteUrl: '',
    websiteIssue: 'Outdated design / slow mobile speed',
    // Step 4: Goals
    primaryGoal: 'Increase patient inquiries for specific procedures',
    // Step 5: Services
    selectedServices: ['Healthcare SEO', 'Google Ads'],
    // Step 6: Budget
    budgetRange: '₹25,000 - ₹50,000 / month',
    timeframe: 'Immediately (within 2-4 weeks)',
    // Step 7: Consent
    consentGiven: true
  });

  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [referenceId, setReferenceId] = useState('');

  const nextStep = () => {
    if (currentStep < totalSteps) setCurrentStep(currentStep + 1);
  };

  const prevStep = () => {
    if (currentStep > 1) setCurrentStep(currentStep - 1);
  };

  const handleServiceToggle = (serviceName: string) => {
    if (formData.selectedServices.includes(serviceName)) {
      setFormData({
        ...formData,
        selectedServices: formData.selectedServices.filter(s => s !== serviceName)
      });
    } else {
      setFormData({
        ...formData,
        selectedServices: [...formData.selectedServices, serviceName]
      });
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const response = await fetch('/api/leads', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: formData.name,
          phone: formData.phone,
          email: formData.email,
          organization: formData.organization,
          industry: formData.category,
          city: formData.city || 'India',
          website: formData.websiteUrl,
          services: formData.selectedServices,
          budget: formData.budgetRange,
          message: `Goals: ${formData.primaryGoal}. Timeline: ${formData.timeframe}. Has Website: ${formData.hasWebsite}. Known issues: ${formData.websiteIssue}`
        })
      });

      const data = await response.json();
      if (response.ok) {
        setIsSuccess(true);
        setReferenceId(data.referenceId || `PROP-${Date.now().toString().slice(-4)}`);
      } else {
        alert(data.error || 'Failed to submit proposal request. Please call +91 8376817258 directly.');
      }
    } catch (err) {
      alert('Network error. Please call +91 8376817258.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="space-y-12">
      <Breadcrumbs 
        items={[
          { label: 'Get Free Strategy Proposal' }
        ]} 
        onNavigate={onNavigate} 
      />

      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
        
        {/* Progress Bar Container */}
        <div className="bg-white rounded-3xl border border-slate-200 shadow-sm p-6 sm:p-10 space-y-8">
          
          <div className="space-y-2">
            <div className="flex items-center justify-between text-xs text-slate-500">
              <span className="font-bold text-[#0B5ED7] uppercase tracking-wider">
                Step {currentStep} of {totalSteps}
              </span>
              <span>{Math.round((currentStep / totalSteps) * 100)}% Complete</span>
            </div>
            {/* Progress bar */}
            <div className="w-full bg-slate-100 h-2 rounded-full overflow-hidden">
              <div 
                className="bg-[#0B5ED7] h-full rounded-full transition-all duration-300"
                style={{ width: `${(currentStep / totalSteps) * 100}%` }}
              />
            </div>
          </div>

          {!isSuccess ? (
            <div>
              {/* STEP 1: BUSINESS INFO */}
              {currentStep === 1 && (
                <div className="space-y-4 animate-in fade-in duration-150">
                  <div>
                    <h3 className="text-xl font-bold font-display text-[#071A3A]">
                      Step 1: Contact & Practice Information
                    </h3>
                    <p className="text-xs text-slate-500 mt-1">
                      Who should our healthcare directors address the custom proposal to?
                    </p>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-1">Doctor / Manager Full Name *</label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="e.g. Dr. Sunita Mehra"
                        className="w-full text-xs px-3.5 py-2.5 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-[#0B5ED7]"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-1">Phone Number *</label>
                      <input
                        type="tel"
                        required
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="+91 98765 43210"
                        className="w-full text-xs px-3.5 py-2.5 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-[#0B5ED7]"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-1">Official Email Address *</label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="doctor@hospital.com"
                        className="w-full text-xs px-3.5 py-2.5 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-[#0B5ED7]"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-1">Hospital / Clinic Name</label>
                      <input
                        type="text"
                        value={formData.organization}
                        onChange={(e) => setFormData({ ...formData, organization: e.target.value })}
                        placeholder="e.g. Mehra Eye Care Hospital"
                        className="w-full text-xs px-3.5 py-2.5 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-[#0B5ED7]"
                      />
                    </div>
                  </div>
                </div>
              )}

              {/* STEP 2: CATEGORY */}
              {currentStep === 2 && (
                <div className="space-y-4 animate-in fade-in duration-150">
                  <div>
                    <h3 className="text-xl font-bold font-display text-[#071A3A]">
                      Step 2: Healthcare Category & Geography
                    </h3>
                    <p className="text-xs text-slate-500 mt-1">
                      Select your operational category so we tailor the clinical keyword strategy.
                    </p>
                  </div>

                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-2 text-xs">
                    {[
                      'Multi-Specialty Hospital',
                      'Specialty Clinic',
                      'Dental Practice',
                      'Eye Hospital',
                      'IVF & Fertility Center',
                      'Individual Doctor',
                      'Orthopedic Center',
                      'Diagnostic Center',
                      'Dermatology Clinic',
                      'Telemedicine Startup',
                      'Physiotherapy Center',
                      'Other Specialty'
                    ].map((cat) => (
                      <button
                        type="button"
                        key={cat}
                        onClick={() => setFormData({ ...formData, category: cat })}
                        className={`p-3 rounded-xl border text-left font-medium transition-all cursor-pointer ${
                          formData.category === cat
                            ? 'bg-blue-50 border-[#0B5ED7] text-[#0B5ED7] font-bold shadow-xs'
                            : 'bg-white border-slate-200 text-slate-700 hover:bg-slate-50'
                        }`}
                      >
                        {cat}
                      </button>
                    ))}
                  </div>

                  <div className="pt-2">
                    <label className="block text-xs font-semibold text-slate-700 mb-1">Practice City / Catchment Area</label>
                    <input
                      type="text"
                      value={formData.city}
                      onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                      placeholder="e.g. Delhi NCR, Mumbai, Bengaluru, Pune..."
                      className="w-full text-xs px-3.5 py-2.5 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-[#0B5ED7]"
                    />
                  </div>
                </div>
              )}

              {/* STEP 3: CURRENT WEBSITE */}
              {currentStep === 3 && (
                <div className="space-y-4 animate-in fade-in duration-150">
                  <div>
                    <h3 className="text-xl font-bold font-display text-[#071A3A]">
                      Step 3: Current Digital Presence
                    </h3>
                    <p className="text-xs text-slate-500 mt-1">
                      Do you have an existing clinic or doctor website?
                    </p>
                  </div>

                  <div className="flex gap-4 pt-2">
                    {['Yes', 'No (Need New Website)'].map(option => (
                      <button
                        type="button"
                        key={option}
                        onClick={() => setFormData({ ...formData, hasWebsite: option })}
                        className={`px-5 py-2.5 rounded-xl border text-xs font-semibold cursor-pointer ${
                          formData.hasWebsite === option
                            ? 'bg-[#0B5ED7] text-white border-[#0B5ED7]'
                            : 'bg-white text-slate-700 border-slate-200 hover:bg-slate-50'
                        }`}
                      >
                        {option}
                      </button>
                    ))}
                  </div>

                  {formData.hasWebsite === 'Yes' && (
                    <div className="space-y-4 pt-2">
                      <div>
                        <label className="block text-xs font-semibold text-slate-700 mb-1">Existing Website URL</label>
                        <input
                          type="url"
                          value={formData.websiteUrl}
                          onChange={(e) => setFormData({ ...formData, websiteUrl: e.target.value })}
                          placeholder="https://yourclinic.com"
                          className="w-full text-xs px-3.5 py-2.5 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-[#0B5ED7]"
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-semibold text-slate-700 mb-1">What is the biggest issue with your current site?</label>
                        <select
                          value={formData.websiteIssue}
                          onChange={(e) => setFormData({ ...formData, websiteIssue: e.target.value })}
                          className="w-full text-xs px-3.5 py-2.5 rounded-lg border border-slate-300 bg-white"
                        >
                          <option value="Outdated design / slow mobile speed">Outdated design / slow mobile speed</option>
                          <option value="Does not rank on Google">Does not rank on Google</option>
                          <option value="Visitors do not convert into calls or WhatsApp appointments">Visitors do not convert into calls or WhatsApp appointments</option>
                          <option value="Hard to update doctor timings and content">Hard to update doctor timings and content</option>
                        </select>
                      </div>
                    </div>
                  )}
                </div>
              )}

              {/* STEP 4: MARKETING GOALS */}
              {currentStep === 4 && (
                <div className="space-y-4 animate-in fade-in duration-150">
                  <div>
                    <h3 className="text-xl font-bold font-display text-[#071A3A]">
                      Step 4: Primary Practice Goals
                    </h3>
                    <p className="text-xs text-slate-500 mt-1">
                      What is the single most important outcome you want to achieve?
                    </p>
                  </div>

                  <div className="space-y-2.5 pt-2 text-xs">
                    {[
                      'Rank in Google 3-Pack Maps for neighborhood searches',
                      'Increase patient inquiries for specific high-ticket surgeries / procedures',
                      'Build a new high-converting mobile healthcare website',
                      'Establish doctor thought leadership & short-form video branding',
                      'Scale hospital multi-department bed occupancy and admissions',
                      'Reduce reliance on aggregators & third-party booking commissions'
                    ].map((goal) => (
                      <button
                        type="button"
                        key={goal}
                        onClick={() => setFormData({ ...formData, primaryGoal: goal })}
                        className={`w-full p-3.5 rounded-xl border text-left font-medium transition-all cursor-pointer flex items-center justify-between ${
                          formData.primaryGoal === goal
                            ? 'bg-blue-50 border-[#0B5ED7] text-[#0B5ED7] font-bold shadow-xs'
                            : 'bg-white border-slate-200 text-slate-700 hover:bg-slate-50'
                        }`}
                      >
                        <span>{goal}</span>
                        {formData.primaryGoal === goal && <CheckCircle2 className="w-4 h-4 text-[#0B5ED7]" />}
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* STEP 5: SERVICES REQUIRED */}
              {currentStep === 5 && (
                <div className="space-y-4 animate-in fade-in duration-150">
                  <div>
                    <h3 className="text-xl font-bold font-display text-[#071A3A]">
                      Step 5: Services You Wish To Include
                    </h3>
                    <p className="text-xs text-slate-500 mt-1">
                      Select all relevant services for your practice growth plan.
                    </p>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2 text-xs">
                    {[
                      'Healthcare SEO',
                      'Local SEO & Google Maps',
                      'Google Ads / PPC',
                      'Clinic Website Development (₹35k)',
                      'Social Media & Video Marketing',
                      'Practice Management System (₹75k)',
                      'Doctor Personal Branding',
                      'Reputation Management & Reviews',
                      'Patient Lead Generation Funnel',
                      'Hospital Enterprise Growth'
                    ].map((service) => {
                      const isSelected = formData.selectedServices.includes(service);
                      return (
                        <button
                          type="button"
                          key={service}
                          onClick={() => handleServiceToggle(service)}
                          className={`p-3.5 rounded-xl border text-left font-medium transition-all cursor-pointer flex items-center justify-between ${
                            isSelected
                              ? 'bg-blue-50 border-[#0B5ED7] text-[#0B5ED7] font-bold shadow-xs'
                              : 'bg-white border-slate-200 text-slate-700 hover:bg-slate-50'
                          }`}
                        >
                          <span>{service}</span>
                          {isSelected && <CheckCircle2 className="w-4 h-4 text-[#0B5ED7]" />}
                        </button>
                      );
                    })}
                  </div>
                </div>
              )}

              {/* STEP 6: BUDGET & TIMEFRAME */}
              {currentStep === 6 && (
                <div className="space-y-4 animate-in fade-in duration-150">
                  <div>
                    <h3 className="text-xl font-bold font-display text-[#071A3A]">
                      Step 6: Estimated Budget & Execution Timeline
                    </h3>
                    <p className="text-xs text-slate-500 mt-1">
                      Helps our strategists allocate appropriate search keyword volume and campaign radius.
                    </p>
                  </div>

                  <div className="space-y-3 pt-2">
                    <label className="block text-xs font-semibold text-slate-700">Estimated Monthly Marketing Budget</label>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 text-xs">
                      {[
                        'Under ₹25,000 / month',
                        '₹25,000 - ₹50,000 / month',
                        '₹50,000 - ₹1,00,000 / month',
                        '₹1,00,000+ / month (Hospital Enterprise)',
                        'One-Time Website / Software Build Only'
                      ].map((budget) => (
                        <button
                          type="button"
                          key={budget}
                          onClick={() => setFormData({ ...formData, budgetRange: budget })}
                          className={`p-3 rounded-xl border text-left transition-all cursor-pointer ${
                            formData.budgetRange === budget
                              ? 'bg-blue-50 border-[#0B5ED7] text-[#0B5ED7] font-bold shadow-xs'
                              : 'bg-white border-slate-200 text-slate-700 hover:bg-slate-50'
                          }`}
                        >
                          {budget}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div className="pt-2">
                    <label className="block text-xs font-semibold text-slate-700 mb-1">When would you like to start?</label>
                    <select
                      value={formData.timeframe}
                      onChange={(e) => setFormData({ ...formData, timeframe: e.target.value })}
                      className="w-full text-xs px-3.5 py-2.5 rounded-lg border border-slate-300 bg-white"
                    >
                      <option value="Immediately (within 2-4 weeks)">Immediately (within 2-4 weeks)</option>
                      <option value="Next 1-2 months">Next 1-2 months</option>
                      <option value="Exploring options & budgeting">Exploring options & budgeting</option>
                    </select>
                  </div>
                </div>
              )}

              {/* STEP 7: SUMMARY & SUBMIT */}
              {currentStep === 7 && (
                <div className="space-y-4 animate-in fade-in duration-150">
                  <div>
                    <h3 className="text-xl font-bold font-display text-[#071A3A]">
                      Step 7: Review & Request My Free Strategy
                    </h3>
                    <p className="text-xs text-slate-500 mt-1">
                      Please verify your proposal details below.
                    </p>
                  </div>

                  <div className="p-4 bg-slate-50 rounded-xl border border-slate-200 space-y-2.5 text-xs text-slate-700">
                    <div className="flex justify-between py-1 border-b border-slate-200">
                      <span className="text-slate-500">Contact:</span>
                      <span className="font-semibold">{formData.name} ({formData.phone})</span>
                    </div>
                    <div className="flex justify-between py-1 border-b border-slate-200">
                      <span className="text-slate-500">Email:</span>
                      <span className="font-semibold">{formData.email}</span>
                    </div>
                    <div className="flex justify-between py-1 border-b border-slate-200">
                      <span className="text-slate-500">Practice & Category:</span>
                      <span className="font-semibold">{formData.organization || 'Practice'} · {formData.category}</span>
                    </div>
                    <div className="flex justify-between py-1 border-b border-slate-200">
                      <span className="text-slate-500">City / Location:</span>
                      <span className="font-semibold">{formData.city || 'India'}</span>
                    </div>
                    <div className="flex justify-between py-1 border-b border-slate-200">
                      <span className="text-slate-500">Selected Services:</span>
                      <span className="font-semibold">{formData.selectedServices.join(', ')}</span>
                    </div>
                    <div className="flex justify-between py-1 border-b border-slate-200">
                      <span className="text-slate-500">Primary Goal:</span>
                      <span className="font-semibold truncate max-w-xs">{formData.primaryGoal}</span>
                    </div>
                    <div className="flex justify-between py-1">
                      <span className="text-slate-500">Budget Range:</span>
                      <span className="font-semibold">{formData.budgetRange}</span>
                    </div>
                  </div>

                  <div className="pt-2">
                    <label className="flex items-start gap-2 text-xs text-slate-600 cursor-pointer">
                      <input
                        type="checkbox"
                        checked={formData.consentGiven}
                        onChange={(e) => setFormData({ ...formData, consentGiven: e.target.checked })}
                        className="mt-0.5 rounded text-[#0B5ED7]"
                      />
                      <span>
                        I consent to Web Leading India evaluating my practice digital presence and contacting me with a customized strategy proposal via phone, WhatsApp, or email.
                      </span>
                    </label>
                  </div>
                </div>
              )}

              {/* Navigation Controls */}
              <div className="flex items-center justify-between pt-6 border-t border-slate-200 mt-6">
                {currentStep > 1 ? (
                  <button
                    type="button"
                    onClick={prevStep}
                    className="px-4 py-2 text-xs font-semibold text-slate-600 hover:text-slate-900 border border-slate-200 rounded-lg hover:bg-slate-50 transition-colors flex items-center gap-1.5 cursor-pointer"
                  >
                    <ArrowLeft className="w-3.5 h-3.5" /> Back
                  </button>
                ) : <div />}

                {currentStep < totalSteps ? (
                  <button
                    type="button"
                    onClick={nextStep}
                    disabled={currentStep === 1 && (!formData.name || !formData.phone || !formData.email)}
                    className="px-6 py-2.5 bg-[#0B5ED7] hover:bg-[#082B63] text-white text-xs font-bold rounded-lg transition-colors flex items-center gap-1.5 cursor-pointer disabled:opacity-50"
                  >
                    <span>Next Step</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                ) : (
                  <button
                    type="button"
                    onClick={handleSubmit}
                    disabled={isLoading || !formData.consentGiven}
                    className="px-6 py-2.5 bg-[#0B5ED7] hover:bg-[#082B63] text-white text-xs font-bold rounded-lg transition-colors flex items-center gap-2 cursor-pointer shadow-md disabled:opacity-50"
                  >
                    {isLoading ? (
                      <>
                        <Loader2 className="w-4 h-4 animate-spin" />
                        <span>Submitting Strategy Request...</span>
                      </>
                    ) : (
                      <>
                        <Send className="w-3.5 h-3.5" />
                        <span>Submit Strategy Request</span>
                      </>
                    )}
                  </button>
                )}
              </div>
            </div>
          ) : (
            /* SUCCESS STATE */
            <div className="text-center py-10 space-y-4 animate-in fade-in duration-200">
              <div className="w-14 h-14 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto">
                <CheckCircle2 className="w-8 h-8" />
              </div>
              <h3 className="text-2xl font-bold font-display text-[#071A3A]">
                Proposal Request Received!
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 max-w-md mx-auto leading-relaxed">
                Thank you, <strong>{formData.name}</strong>. Our healthcare marketing directors are analyzing your specialty and local competition. We will share your customized strategy within 24 business hours.
              </p>
              <div className="p-3 bg-slate-50 rounded-xl border border-slate-200 max-w-xs mx-auto text-xs text-slate-500">
                Reference ID: <strong className="text-slate-800">{referenceId}</strong>
              </div>
              <div className="pt-4 flex justify-center gap-3">
                <button
                  onClick={() => onNavigate('/')}
                  className="px-5 py-2.5 bg-[#0B5ED7] text-white text-xs font-bold rounded-xl hover:bg-[#082B63] transition-colors"
                >
                  Return to Homepage
                </button>
              </div>
            </div>
          )}

        </div>
      </section>
    </div>
  );
};
