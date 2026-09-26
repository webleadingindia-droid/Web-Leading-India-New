import React, { useState } from 'react';
import { Search, Monitor, PhoneCall, CalendarCheck, Stethoscope, HeartHandshake, ArrowDown } from 'lucide-react';

export const InteractiveFunnel: React.FC = () => {
  const [activeStage, setActiveStage] = useState(0);

  const stages = [
    {
      step: 'Stage 01',
      title: 'High-Intent Google Search',
      icon: Search,
      shortDesc: 'Patient searches for specific symptom or specialist (e.g. "robotic knee surgeon near me").',
      detail: 'Patients do not browse aimlessly; they search with acute intent when discomfort or a diagnosis arises. Our healthcare SEO and Google Ads ensure your clinic or hospital appears at this exact moment of decision.'
    },
    {
      step: 'Stage 02',
      title: 'Dedicated Medical Landing Page',
      icon: Monitor,
      shortDesc: 'Visitor arrives at a fast, distraction-free landing page tailored strictly to their condition.',
      detail: 'Instead of losing visitors on an overwhelming generic homepage, we route them to a specialized treatment page highlighting doctor degrees, surgical volume, patient recovery steps, and sterilisation standards.'
    },
    {
      step: 'Stage 03',
      title: '1-Tap Call or WhatsApp Action',
      icon: PhoneCall,
      shortDesc: 'Frictionless choice between direct phone call, WhatsApp booking, or confidential inquiry form.',
      detail: 'Over 80% of patients in India prefer instant WhatsApp chats or direct phone calls over complex forms. We integrate one-tap contact buttons that alert your front desk within 10 seconds.'
    },
    {
      step: 'Stage 04',
      title: 'Appointment Confirmation',
      icon: CalendarCheck,
      shortDesc: 'Trained clinic reception coordinates time slot with automated SMS/WhatsApp calendar reminder.',
      detail: 'Rapid response is decisive. Our inquiry notifications ensure your staff answers within minutes, scheduling the patient and sending automated Google Maps location directions.'
    },
    {
      step: 'Stage 05',
      title: 'Consultation & Clinical Care',
      icon: Stethoscope,
      shortDesc: 'Patient visits consulting room, experiencing professional care backed by pre-visit digital education.',
      detail: 'Because the patient already watched the doctor’s educational videos and reviewed credentials on your website, pre-consultation anxiety is minimized, fostering deep clinical trust.'
    },
    {
      step: 'Stage 06',
      title: 'Post-Care Review & Patient Retention',
      icon: HeartHandshake,
      shortDesc: 'Automated follow-up message prompts a 5-star Google review and future appointment reminders.',
      detail: 'Satisfied patients receive a respectful, polite WhatsApp prompt asking for their feedback on Google Maps. This continuously strengthens your local SEO pack authority for the next patient.'
    }
  ];

  return (
    <div className="bg-white rounded-2xl p-6 sm:p-10 border border-slate-200 shadow-sm">
      <div className="text-center max-w-2xl mx-auto mb-10">
        <span className="text-xs font-bold uppercase tracking-wider text-[#0B5ED7] block mb-1">
          Patient Acquisition Blueprint
        </span>
        <h3 className="text-2xl font-bold font-display text-[#071A3A] tracking-tight">
          How We Turn Online Searchers Into Confirmed Clinic Consultations
        </h3>
        <p className="text-slate-500 text-xs sm:text-sm mt-2">
          Click any step to inspect the patient journey and conversion mechanics at each touchpoint.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-6 gap-3 relative">
        {stages.map((stage, idx) => {
          const Icon = stage.icon;
          const isActive = activeStage === idx;
          return (
            <button
              key={idx}
              onClick={() => setActiveStage(idx)}
              className={`text-left p-4 rounded-xl border transition-all text-xs cursor-pointer relative ${
                isActive 
                  ? 'bg-blue-50/80 border-[#0B5ED7] shadow-sm ring-1 ring-[#0B5ED7]' 
                  : 'bg-white border-slate-200 hover:border-slate-300 hover:bg-slate-50'
              }`}
            >
              <div className="flex items-center justify-between mb-3">
                <div className={`w-8 h-8 rounded-lg flex items-center justify-center ${isActive ? 'bg-[#0B5ED7] text-white' : 'bg-slate-100 text-slate-600'}`}>
                  <Icon className="w-4 h-4" />
                </div>
                <span className={`text-[10px] font-bold ${isActive ? 'text-[#0B5ED7]' : 'text-slate-400'}`}>
                  {stage.step}
                </span>
              </div>
              <h4 className="font-bold text-slate-900 leading-tight mb-1 line-clamp-2">
                {stage.title}
              </h4>
              <p className="text-[11px] text-slate-500 line-clamp-2">
                {stage.shortDesc}
              </p>
            </button>
          );
        })}
      </div>

      {/* Active Stage Deep-Dive Card */}
      <div className="mt-8 p-6 bg-slate-50 border border-slate-200 rounded-xl">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pb-4 border-b border-slate-200">
          <div>
            <span className="text-[11px] font-bold text-[#0B5ED7] uppercase tracking-wider block">
              Stage Deep Dive: {stages[activeStage].step}
            </span>
            <h4 className="text-lg font-bold font-display text-[#071A3A] mt-0.5">
              {stages[activeStage].title}
            </h4>
          </div>
          <div className="text-xs text-slate-500 bg-white px-3 py-1.5 rounded-lg border border-slate-200">
            Step {activeStage + 1} of 6 in Patient Funnel
          </div>
        </div>
        <p className="mt-4 text-xs sm:text-sm text-slate-700 leading-relaxed max-w-3xl">
          {stages[activeStage].detail}
        </p>
      </div>
    </div>
  );
};
