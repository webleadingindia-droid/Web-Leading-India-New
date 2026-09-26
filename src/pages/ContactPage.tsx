import React, { useState } from 'react';
import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock, 
  Send, 
  CheckCircle2, 
  AlertCircle, 
  MessageSquare, 
  Loader2 
} from 'lucide-react';
import { businessInfo } from '../data/websiteData';
import { Breadcrumbs } from '../components/Breadcrumbs';

interface ContactPageProps {
  onNavigate: (path: string) => void;
}

export const ContactPage: React.FC<ContactPageProps> = ({ onNavigate }) => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    organization: '',
    industry: 'Specialty Clinic',
    city: 'Delhi NCR',
    website: '',
    services: 'Healthcare SEO & Google Ads',
    budget: '₹25,000 - ₹50,000 / month',
    message: ''
  });

  const [isLoading, setIsLoading] = useState(false);
  const [statusMessage, setStatusMessage] = useState<{ type: 'success' | 'error'; text: string; refId?: string } | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setStatusMessage(null);

    try {
      const response = await fetch('/api/leads', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });

      const data = await response.json();
      if (response.ok) {
        setStatusMessage({
          type: 'success',
          text: data.message || 'Your consultation request has been received. Our directors will reach out within 24 business hours.',
          refId: data.referenceId
        });
        setFormData({
          name: '',
          phone: '',
          email: '',
          organization: '',
          industry: 'Specialty Clinic',
          city: 'Delhi NCR',
          website: '',
          services: 'Healthcare SEO & Google Ads',
          budget: '₹25,000 - ₹50,000 / month',
          message: ''
        });
      } else {
        setStatusMessage({
          type: 'error',
          text: data.error || 'Failed to submit inquiry. Please call us directly at +91 8376817258.'
        });
      }
    } catch (err) {
      setStatusMessage({
        type: 'error',
        text: 'Network error submitting request. Please call our consultation desk directly at +91 8376817258.'
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="space-y-12">
      <Breadcrumbs 
        items={[
          { label: 'Contact Us' }
        ]} 
        onNavigate={onNavigate} 
      />

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#071A3A] text-white rounded-3xl p-8 sm:p-14 relative overflow-hidden">
          <div className="max-w-3xl space-y-4">
            <span className="text-xs font-bold uppercase tracking-wider text-[#14B8C4]">
              Consultation Desk
            </span>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-display tracking-tight text-white leading-tight">
              Connect With Our Healthcare Marketing Strategists
            </h1>
            <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
              Whether you are an independent doctor launching a clinic or a hospital administrator seeking to scale departmental admissions, our healthcare growth directors are here to assist.
            </p>
          </div>
        </div>
      </section>

      {/* Main Grid: Form + Info */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          
          {/* Contact Details Column */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-white p-6 sm:p-8 rounded-2xl border border-slate-200 shadow-xs space-y-6">
              <h3 className="text-lg font-bold font-display text-[#071A3A]">
                Web Leading India
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Healthcare Digital Marketing & Patient Growth Agency serving hospitals, clinics, and doctors nationwide.
              </p>

              <div className="space-y-4 pt-2 text-xs">
                <div className="flex items-start gap-3">
                  <Phone className="w-4 h-4 text-[#0B5ED7] shrink-0 mt-0.5" />
                  <div>
                    <span className="font-semibold text-slate-700 block">Direct Consultation Line:</span>
                    <a href={`tel:${businessInfo.phone}`} className="text-slate-900 font-bold hover:text-[#0B5ED7] text-sm">
                      {businessInfo.phone}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Mail className="w-4 h-4 text-[#0B5ED7] shrink-0 mt-0.5" />
                  <div>
                    <span className="font-semibold text-slate-700 block">Official Email:</span>
                    <a href={`mailto:${businessInfo.email}`} className="text-slate-900 font-bold hover:text-[#0B5ED7]">
                      {businessInfo.email}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <MapPin className="w-4 h-4 text-[#0B5ED7] shrink-0 mt-0.5" />
                  <div>
                    <span className="font-semibold text-slate-700 block">Registered Office Address:</span>
                    <p className="text-slate-600 leading-relaxed">{businessInfo.address}</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Clock className="w-4 h-4 text-[#0B5ED7] shrink-0 mt-0.5" />
                  <div>
                    <span className="font-semibold text-slate-700 block">Operating Hours:</span>
                    <p className="text-slate-600 leading-relaxed">
                      {businessInfo.hours.weekdays}<br/>
                      {businessInfo.hours.saturday}
                    </p>
                  </div>
                </div>
              </div>

              {/* Quick Actions */}
              <div className="pt-4 border-t border-slate-100 flex flex-col gap-2.5">
                <a
                  href={`tel:${businessInfo.phone}`}
                  className="w-full py-2.5 bg-[#0B5ED7] hover:bg-[#082B63] text-white text-xs font-bold rounded-xl text-center transition-colors flex items-center justify-center gap-2"
                >
                  <Phone className="w-3.5 h-3.5" /> Click To Call Consultation Line
                </a>
                <a
                  href={`https://wa.me/918376817258?text=Hello%20Web%20Leading%20India,%20I%20would%20like%20to%20discuss%20healthcare%20marketing%20for%20my%20practice`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-2.5 bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold rounded-xl text-center transition-colors flex items-center justify-center gap-2"
                >
                  <MessageSquare className="w-3.5 h-3.5" /> Connect via WhatsApp
                </a>
              </div>
            </div>

            {/* Map Placeholder Card */}
            <div className="p-6 bg-slate-50 border border-slate-200 rounded-2xl text-xs space-y-2">
              <span className="font-bold text-slate-800 block flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5 text-[#0B5ED7]" /> Delhi NCR Location Coordinates
              </span>
              <p className="text-slate-500 leading-relaxed text-[11px]">
                Situated in North-West Delhi (Kirari Suleman Nagar, Phase 3). Serving clients locally in Delhi NCR and remotely throughout India.
              </p>
            </div>
          </div>

          {/* Form Column */}
          <div className="lg:col-span-7">
            <div className="bg-white p-6 sm:p-10 rounded-2xl border border-slate-200 shadow-xs">
              <h3 className="text-xl font-bold font-display text-[#071A3A] mb-1">
                Request Free Practice Strategy Consultation
              </h3>
              <p className="text-xs text-slate-500 mb-6">
                Fill out the details below. Our healthcare strategy team will evaluate your local competition and prepare a customized roadmap.
              </p>

              {statusMessage && (
                <div className={`p-4 rounded-xl mb-6 text-xs flex items-start gap-2.5 ${
                  statusMessage.type === 'success' 
                    ? 'bg-emerald-50 text-emerald-800 border border-emerald-200' 
                    : 'bg-rose-50 text-rose-800 border border-rose-200'
                }`}>
                  {statusMessage.type === 'success' ? (
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  ) : (
                    <AlertCircle className="w-4 h-4 text-rose-600 shrink-0 mt-0.5" />
                  )}
                  <div>
                    <p className="font-semibold">{statusMessage.text}</p>
                    {statusMessage.refId && (
                      <p className="text-[11px] mt-1 text-emerald-700">Reference Tracking ID: {statusMessage.refId}</p>
                    )}
                  </div>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">
                      Your Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="e.g. Dr. Rajesh Sharma"
                      className="w-full text-xs px-3.5 py-2.5 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-[#0B5ED7]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">
                      Phone Number *
                    </label>
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
                    <label className="block text-xs font-semibold text-slate-700 mb-1">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="doctor@clinic.com"
                      className="w-full text-xs px-3.5 py-2.5 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-[#0B5ED7]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">
                      Hospital / Clinic / Brand Name
                    </label>
                    <input
                      type="text"
                      value={formData.organization}
                      onChange={(e) => setFormData({ ...formData, organization: e.target.value })}
                      placeholder="e.g. Sharma Heart & Eye Hospital"
                      className="w-full text-xs px-3.5 py-2.5 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-[#0B5ED7]"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">
                      Healthcare Specialty / Category
                    </label>
                    <select
                      value={formData.industry}
                      onChange={(e) => setFormData({ ...formData, industry: e.target.value })}
                      className="w-full text-xs px-3.5 py-2.5 rounded-lg border border-slate-300 bg-white focus:outline-none focus:ring-2 focus:ring-[#0B5ED7]"
                    >
                      <option value="Multi-Specialty Hospital">Multi-Specialty Hospital</option>
                      <option value="Specialty Clinic">Specialty Clinic</option>
                      <option value="Dental Clinic">Dental Clinic</option>
                      <option value="Eye Hospital">Eye Hospital</option>
                      <option value="IVF & Fertility Center">IVF & Fertility Center</option>
                      <option value="Orthopedic Practice">Orthopedic Practice</option>
                      <option value="Cardiology Center">Cardiology Center</option>
                      <option value="Dermatology Clinic">Dermatology Clinic</option>
                      <option value="Diagnostics / Pathology">Diagnostics / Pathology</option>
                      <option value="Individual Doctor Brand">Individual Doctor Brand</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">
                      Practice City / Location
                    </label>
                    <input
                      type="text"
                      value={formData.city}
                      onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                      placeholder="e.g. Delhi, Gurugram, Mumbai"
                      className="w-full text-xs px-3.5 py-2.5 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-[#0B5ED7]"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">
                      Current Website (if existing)
                    </label>
                    <input
                      type="url"
                      value={formData.website}
                      onChange={(e) => setFormData({ ...formData, website: e.target.value })}
                      placeholder="https://yourclinic.com"
                      className="w-full text-xs px-3.5 py-2.5 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-[#0B5ED7]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">
                      Primary Services Required
                    </label>
                    <select
                      value={formData.services}
                      onChange={(e) => setFormData({ ...formData, services: e.target.value })}
                      className="w-full text-xs px-3.5 py-2.5 rounded-lg border border-slate-300 bg-white focus:outline-none focus:ring-2 focus:ring-[#0B5ED7]"
                    >
                      <option value="Healthcare SEO & Google Ads">Healthcare SEO & Google Ads</option>
                      <option value="Healthcare Website Development (₹35k)">Healthcare Website Development (₹35k)</option>
                      <option value="Local SEO & Google Maps 3-Pack">Local SEO & Google Maps 3-Pack</option>
                      <option value="Practice Management System (₹75k)">Practice Management System (₹75k)</option>
                      <option value="Social Media & Doctor Video Branding">Social Media & Doctor Video Branding</option>
                      <option value="Hospital Multi-Department Expansion">Hospital Multi-Department Expansion</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    Monthly Marketing Budget
                  </label>
                  <select
                    value={formData.budget}
                    onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                    className="w-full text-xs px-3.5 py-2.5 rounded-lg border border-slate-300 bg-white focus:outline-none focus:ring-2 focus:ring-[#0B5ED7]"
                  >
                    <option value="Under ₹25,000 / month">Under ₹25,000 / month</option>
                    <option value="₹25,000 - ₹50,000 / month">₹25,000 - ₹50,000 / month</option>
                    <option value="₹50,000 - ₹1,00,000 / month">₹50,000 - ₹1,00,000 / month</option>
                    <option value="₹1,00,000+ / month (Hospital Enterprise)">₹1,00,000+ / month (Hospital Enterprise)</option>
                    <option value="One-Time Website / Software Build Only">One-Time Website / Software Build Only</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    Tell us about your practice goals or current bottlenecks
                  </label>
                  <textarea
                    rows={3}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="e.g. We want to increase patient inquiries for robotic knee surgery in North Delhi..."
                    className="w-full text-xs px-3.5 py-2.5 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-[#0B5ED7]"
                  />
                </div>

                <div className="pt-2">
                  <button
                    type="submit"
                    disabled={isLoading}
                    className="w-full py-3.5 bg-[#0B5ED7] hover:bg-[#082B63] text-white text-xs font-bold rounded-xl transition-colors flex items-center justify-center gap-2 cursor-pointer shadow-sm"
                  >
                    {isLoading ? (
                      <>
                        <Loader2 className="w-4 h-4 animate-spin" />
                        <span>Submitting Consultation Request...</span>
                      </>
                    ) : (
                      <>
                        <Send className="w-4 h-4" />
                        <span>Request Free Strategy Proposal</span>
                      </>
                    )}
                  </button>
                </div>
              </form>
            </div>
          </div>

        </div>
      </section>
    </div>
  );
};
