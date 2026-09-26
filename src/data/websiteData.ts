export interface BusinessInfo {
  name: string;
  tagline: string;
  headline: string;
  subheading: string;
  description: string;
  experience: string;
  clients: string;
  phone: string;
  email: string;
  address: string;
  coverage: string;
  hours: {
    weekdays: string;
    saturday: string;
  };
}

export const businessInfo: BusinessInfo = {
  name: "Web Leading India",
  tagline: "Healthcare Digital Marketing & Patient Growth Agency",
  headline: "Grow Your Healthcare Practice With Digital Marketing That Brings Patients.",
  subheading: "Web Leading India helps hospitals, clinics, doctors and healthcare brands attract, engage and convert patients through healthcare SEO, Google Ads, social media, high-performance websites and patient acquisition systems.",
  description: "Web Leading India helps hospitals, clinics, doctors and healthcare brands build a strong online presence, improve search visibility, generate relevant enquiries and create better digital experiences through healthcare marketing, SEO, website development, social media and technology solutions.",
  experience: "5+ Years",
  clients: "200+ Healthcare Clients",
  phone: "+91 8376817258",
  email: "info@webleadingindia.com",
  address: "C-1, 135, Gali No. 11, Ramesh Enclave, Phase 3, Kirari Suleman Nagar, Delhi - 110086",
  coverage: "Delhi NCR, Major Indian Metros, and Pan-India Healthcare Networks",
  hours: {
    weekdays: "Monday–Friday: 9:30 AM – 6:30 PM",
    saturday: "Saturday: 9:30 AM – 2:00 PM"
  }
};

export interface ServiceItem {
  id: string;
  title: string;
  slug: string;
  category: 'Marketing' | 'Website & Technology' | 'Branding & Growth';
  shortDesc: string;
  heroTagline: string;
  challenges: string[];
  approach: string[];
  inclusions: string[];
  deliverables: string[];
  benefits: string[];
  whoItIsFor: string[];
  process: { step: string; title: string; desc: string }[];
  faqs: { question: string; answer: string }[];
}

export const servicesData: ServiceItem[] = [
  {
    id: 'healthcare-digital-marketing',
    title: 'Healthcare Digital Marketing',
    slug: 'healthcare-digital-marketing',
    category: 'Marketing',
    shortDesc: 'Comprehensive, compliant multi-channel digital marketing solutions designed exclusively for medical practices and hospitals.',
    heroTagline: 'Connect With Patients At The Exact Moment They Need Quality Care',
    challenges: [
      'High competition from aggregators and corporate chains in local searches',
      'Difficulty in attracting genuine, high-intent patients for specialized treatments',
      'Ad compliance and ethical constraints governing medical promotion'
    ],
    approach: [
      'Evidence-based patient journey mapping from search to consultation',
      'Omnichannel integration linking Google Search, Maps, social media, and landing pages',
      'Continuous tracking of inquiry-to-appointment conversion metrics'
    ],
    inclusions: [
      'Healthcare SEO & Local Search Visibility',
      'Google Ads & Patient Acquisition Campaigns',
      'Doctor & Clinic Social Media Management',
      'Reputation & Patient Review Strategies',
      'Analytics & Inquiry Attribution Tracking'
    ],
    deliverables: [
      'Monthly patient inquiry and call attribution report',
      'Customized medical landing pages with booking integrations',
      'Targeted search campaigns and weekly optimization',
      'Quarterly digital growth strategy roadmap'
    ],
    benefits: [
      'Higher discovery in local medical searches',
      'Sustainable inbound patient inquiries for key specialties',
      'Protection and enhancement of medical brand reputation'
    ],
    whoItIsFor: [
      'Multi-specialty hospitals expanding patient footfall',
      'Super-specialist doctors establishing independent practices',
      'Diagnostic chains and clinic networks looking for regional dominance'
    ],
    process: [
      { step: '01', title: 'Audit & Analysis', desc: 'Evaluating existing online footprint, patient demographics, and competitors.' },
      { step: '02', title: 'Funnel Blueprint', desc: 'Designing medical landing funnels tailored to specific clinical specialties.' },
      { step: '03', title: 'Multi-Channel Execution', desc: 'Deploying SEO, search ads, and content across patient touchpoints.' },
      { step: '04', title: 'Inquiry Optimization', desc: 'Iterating lead capture flows to maximize confirmed clinic visits.' }
    ],
    faqs: [
      {
        question: 'How is healthcare digital marketing different from standard agency marketing?',
        answer: 'Healthcare marketing requires strict medical compliance, empathy-driven patient communication, understanding of doctor-patient confidentiality, and adherence to medical advertising regulations.'
      },
      {
        question: 'Do you guarantee patient numbers?',
        answer: 'In accordance with ethical marketing and medical standards, Web Leading India focuses on qualified patient reach, visibility, and conversion optimization rather than speculative guarantees.'
      }
    ]
  },
  {
    id: 'healthcare-seo',
    title: 'Healthcare SEO',
    slug: 'healthcare-seo',
    category: 'Marketing',
    shortDesc: 'Search engine optimization tailored to medical terminology, patient intent, and Google Helpful Content guidelines.',
    heroTagline: 'Be Where Your Patients Are Searching When Symptoms Arise',
    challenges: [
      'Google updates prioritize high E-E-A-T (Experience, Expertise, Authoritativeness, Trustworthiness) in medical topics',
      'Aggregator platforms outranking independent clinics for high-value treatment keywords',
      'Lack of clinically accurate, optimized condition and treatment pages'
    ],
    approach: [
      'Condition-and-treatment keyword research focused on patient symptoms and treatment intent',
      'Technical SEO audit addressing core web vitals, mobile speed, and crawl health',
      'Implementation of MedicalWebPage, Physician, and Hospital Schema markup'
    ],
    inclusions: [
      'Comprehensive Technical & On-Page Healthcare SEO Audit',
      'Medical Keyword Research (Symptoms, Treatments, Specialist queries)',
      'Schema.org Structured Data (MedicalOrganization, Physician, FAQPage)',
      'Specialty Treatment Page Optimization & Internal Linking',
      'Google Search Console & Organic Visibility Reporting'
    ],
    deliverables: [
      'Baseline technical audit & monthly ranking progress report',
      'Optimized medical department and condition landing pages',
      'Full Schema.org implementation across doctor and clinic pages',
      'High-authority healthcare citation and backlink architecture'
    ],
    benefits: [
      'Long-term organic visibility without continuous ad spend',
      'Trust-building via authoritative clinical content',
      'High-ranking doctor profile and treatment pages'
    ],
    whoItIsFor: ['Individual doctors', 'Specialty clinics', 'Diagnostic centers', 'Multi-department hospitals'],
    process: [
      { step: '01', title: 'Medical SEO Audit', desc: 'Full indexing, technical crawl, and content gap inspection.' },
      { step: '02', title: 'Keyword Mapping', desc: 'Structuring URLs by specialty, procedure, and geographical radius.' },
      { step: '03', title: 'On-Page & Schema', desc: 'Integrating clinical schema, author bios, and structured FAQs.' },
      { step: '04', title: 'Authority Building', desc: 'Securing citations on relevant medical directories and local listings.' }
    ],
    faqs: [
      {
        question: 'How long does healthcare SEO take to show meaningful search visibility?',
        answer: 'Typically, noticeable improvements in keyword indexing and impressions appear within 8 to 12 weeks, with consistent organic inquiry growth stabilizing across 4 to 6 months.'
      },
      {
        question: 'What is medical schema markup and why is it essential?',
        answer: 'Medical schema (Physician, MedicalCondition, MedicalSpecialty) is structured code that helps search engines understand doctor credentials, hospital services, and clinic operating hours directly in search results.'
      }
    ]
  },
  {
    id: 'local-seo',
    title: 'Local SEO & Google Maps',
    slug: 'local-seo',
    category: 'Marketing',
    shortDesc: 'Dominate the Google 3-Pack and capture immediate patient searches within your hospital or clinic vicinity.',
    heroTagline: 'Capture Immediate Patient Searches in Your Immediate Vicinity',
    challenges: [
      'Inconsistent NAP (Name, Address, Phone) across local business directories',
      'Unclaimed or improperly categorized Google Business Profiles',
      'Low local pack visibility when patients search "doctor near me"'
    ],
    approach: [
      'Hyper-localized keyword mapping across targeted pin codes and neighborhoods',
      'Complete optimization of Google Business Profile attributes, services, and visual media',
      'Systematic patient review collection frameworks that adhere to medical ethics'
    ],
    inclusions: [
      'Google Business Profile Setup, Verification, & Optimization',
      'Local Geo-Targeted Landing Pages by Neighborhood / Sector',
      'NAP Consistency Audit across Indian Local Directories (Justdial, Practo, Sulekha)',
      'Local Map Pack Competitor Tracking and Geo-Grid Ranking Analysis'
    ],
    deliverables: [
      'Optimized Google Business Profile with verified categories',
      'Neighborhood-specific clinic location landing pages',
      'Local citation network setup and verification report',
      'Monthly local pack ranking and call analytics'
    ],
    benefits: [
      'Higher appearance in Google Maps 3-Pack for local patient searches',
      'Direct incoming phone calls and clinic navigation requests',
      'Credible local reputation through authentic patient reviews'
    ],
    whoItIsFor: ['Clinics', 'Dental centers', 'Eye hospitals', 'Diagnostic labs', 'Urgent care centers'],
    process: [
      { step: '01', title: 'Profile Audit', desc: 'Inspect existing Google Business Profile for categories and address match.' },
      { step: '02', title: 'Geo Optimization', desc: 'Add detailed medical services, hours, photos, and insurance details.' },
      { step: '03', title: 'Local Citations', desc: 'Synchronize citations across verified healthcare platforms.' },
      { step: '04', title: 'Review Growth', desc: 'Deploy compliant review-generation workflows for discharged patients.' }
    ],
    faqs: [
      {
        question: 'Can multiple doctors share one clinic Google Business Profile?',
        answer: 'Yes. Google guidelines allow individual practitioner profiles to be associated with a clinic address, provided each practitioner has distinct specialties and operating hours.'
      }
    ]
  },
  {
    id: 'google-ads',
    title: 'Google Ads & PPC Campaigns',
    slug: 'google-ads',
    category: 'Marketing',
    shortDesc: 'Target high-intent patients actively searching for specific surgeries, consultations, and treatments.',
    heroTagline: 'Reach High-Intent Patients Actively Searching For Immediate Treatment',
    challenges: [
      'High cost-per-click (CPC) caused by indiscriminate keyword bidding',
      'Negative keyword negligence leading to wasted budget on informational searches',
      'Strict Google healthcare and medicines advertising restrictions'
    ],
    approach: [
      'Procedure-specific negative keyword pruning (excluding symptoms that require only home remedies)',
      'High-converting, mobile-first medical landing pages built for immediate calls and form fills',
      'Strict conversion tracking measuring qualified phone inquiries and WhatsApp conversations'
    ],
    inclusions: [
      'Google Search, Call-Only, and Performance Max Campaign Architecture',
      'Negative Keyword Lists Tailored to Medical Specialties',
      'Geo-fenced Radius Targeting around Hospital Catchment Areas',
      'Conversion Tracking Integration with CallRail and Clinic CRM'
    ],
    deliverables: [
      'Fully configured Google Ads account structure and campaign groups',
      'Dedicated high-conversion treatment landing page',
      'Conversion tracking tag implementation',
      'Weekly performance and spend efficiency optimization'
    ],
    benefits: [
      'Immediate visibility for high-priority surgical or diagnostic procedures',
      'Strict budget control with transparent cost-per-inquiry tracking',
      'Quality inquiries directly into clinic reception or call center'
    ],
    whoItIsFor: ['Surgical specialists', 'IVF centers', 'Dental implant clinics', 'Cosmetic dermatology centers'],
    process: [
      { step: '01', title: 'Intent Research', desc: 'Identify high-value procedures with strong patient willingness to consult.' },
      { step: '02', title: 'Landing Page Build', desc: 'Craft doctor credentials, procedure details, and simple inquiry forms.' },
      { step: '03', title: 'Campaign Launch', desc: 'Deploy tightly grouped keywords with negative lists and geo-targets.' },
      { step: '04', title: 'Bid & Call Tuning', desc: 'Optimize daily bids based on real clinic appointment conversions.' }
    ],
    faqs: [
      {
        question: 'How do you prevent wasting ad budget on general health questions?',
        answer: 'We utilize exhaustive negative keyword lists that exclude research terms like "causes of", "home remedies", "free", or "wikipedia", bidding strictly on consultation and treatment phrases.'
      }
    ]
  },
  {
    id: 'social-media-marketing',
    title: 'Social Media Marketing',
    slug: 'social-media-marketing',
    category: 'Marketing',
    shortDesc: 'Build authentic patient trust and doctor authority across Instagram, Facebook, YouTube, and LinkedIn.',
    heroTagline: 'Build Patient Trust Before They Step Into Your Consulting Room',
    challenges: [
      'Dense medical jargon alienating everyday patients',
      'Inconsistent posting without clinical credibility or visual polish',
      'Lack of video engagement to humanize the medical team'
    ],
    approach: [
      'Bite-sized medical myth-busting and preventive health educational reels',
      'Doctor-led short video formats showcasing empathy and expertise',
      'Structured content calendars balancing awareness, clinical milestones, and patient guidance'
    ],
    inclusions: [
      'Monthly Content Strategy & Editorial Calendar',
      'High-Resolution Medical Infographics & Patient Educational Carousels',
      'Short-Form Video (Reels / Shorts) Scripting & Creative Direction',
      'Doctor Personal Branding & Community Engagement Management'
    ],
    deliverables: [
      'Monthly themed social media creative pack (12-20 assets)',
      'Custom reels scripts and visual edit templates',
      'Publishing and community engagement management',
      'Monthly reach, engagement, and direct inquiry report'
    ],
    benefits: [
      'Doctor brand recognition across target geographic regions',
      'Warm patient relationships fostering clinic loyalty',
      'Shareable health tips establishing practice authority'
    ],
    whoItIsFor: ['Pediatricians', 'Dermatologists', 'Gynecologists', 'Dental clinics', 'Mental health professionals'],
    process: [
      { step: '01', title: 'Tone & Persona', desc: 'Establish clinical communication style and visual brand guidelines.' },
      { step: '02', title: 'Calendar Planning', desc: 'Map monthly health awareness days and common patient FAQs.' },
      { step: '03', title: 'Production & Review', desc: 'Design graphics and edit doctor video snippets.' },
      { step: '04', title: 'Publishing & Engagement', desc: 'Schedule posts and monitor comments for consultation inquiries.' }
    ],
    faqs: [
      {
        question: 'Does the doctor need to spend hours recording videos?',
        answer: 'No. With our structured scripting and monthly batch recording frameworks, doctors can record a full month of short-form educational content in less than 90 minutes.'
      }
    ]
  },
  {
    id: 'healthcare-website-development',
    title: 'Healthcare Website Development',
    slug: 'healthcare-website-development',
    category: 'Website & Technology',
    shortDesc: 'Fast, secure, mobile-first websites designed specifically for patient appointment conversions and doctor credibility.',
    heroTagline: 'Digital Infrastructure Built For Patient Trust, Speed & Practice Growth',
    challenges: [
      'Slow, bloated legacy medical websites failing Google Core Web Vitals',
      'Complex navigation frustrating anxious patients seeking immediate care',
      'Lack of clear appointment booking mechanisms or mobile accessibility'
    ],
    approach: [
      'Modern Jamstack / React architecture delivering sub-second page loads',
      'Clinical UI/UX prioritizing doctor credentials, treatments, and single-tap appointment booking',
      'Full compliance with mobile accessibility standards and medical schema protocols'
    ],
    inclusions: [
      'Custom Responsive Design for Mobile, Tablet, and Desktop',
      'Doctor Profile Pages with Credentials, Timings, & Booking',
      'Department and Treatment Information Architecture',
      '1-Tap WhatsApp, Direct Calling, and Form Inquiry Integration',
      'Fast Cloud Hosting, SSL Security, and Technical SEO Setup'
    ],
    deliverables: [
      'Fully responsive, high-performance healthcare website',
      'Content management dashboard for clinic staff to update timings and blogs',
      'Integrated inquiry routing to clinic WhatsApp and email',
      'Complete SEO foundation with Google Search Console verification'
    ],
    benefits: [
      'Sub-second load times that keep mobile visitors on your site',
      'Seamless patient conversion from visitor to scheduled appointment',
      'Professional digital presence reflecting high clinical standards'
    ],
    whoItIsFor: ['New clinics opening their doors', 'Hospitals replacing obsolete websites', 'Doctors building private brand assets'],
    process: [
      { step: '01', title: 'Information Architecture', desc: 'Structure departments, treatments, and doctor specialties for effortless navigation.' },
      { step: '02', title: 'UI/UX Prototype', desc: 'Design clean, reassuring medical interfaces aligned with brand palette.' },
      { step: '03', title: 'Full-Stack Development', desc: 'Code lightning-fast frontend with secure form handling.' },
      { step: '04', title: 'Testing & Launch', desc: 'Verify cross-browser responsiveness, mobile speed, and form delivery.' }
    ],
    faqs: [
      {
        question: 'What is the starting investment for a clinic website?',
        answer: 'Our verified Clinic Website Development package starts at ₹35,000 one-time, covering custom design, doctor profiles, treatment pages, mobile optimization, and inquiry integrations.'
      }
    ]
  },
  {
    id: 'healthcare-website-design',
    title: 'Healthcare Website Design (UI/UX)',
    slug: 'healthcare-website-design',
    category: 'Website & Technology',
    shortDesc: 'Clean, empathetic user experience design crafted to reduce patient anxiety and streamline appointment scheduling.',
    heroTagline: 'Empathetic Healthcare Interfaces That Build Immediate Clinical Credibility',
    challenges: [
      'Visually chaotic medical templates that look dated or clinical in an unwelcoming way',
      'Poor contrast and small typography hindering elderly or visually impaired patients',
      'Confusing user flows causing visitors to bounce before booking'
    ],
    approach: [
      'Calming, accessible healthcare color palettes rooted in trust and clarity',
      'Intuitive typographic hierarchy designed for swift scanning of doctor qualifications',
      'Figma-ready design systems with comprehensive component states'
    ],
    inclusions: [
      'User Research & Patient Journey Flow Mapping',
      'Custom Medical UI Kit & Design System (Buttons, Cards, Inputs, Modals)',
      'Desktop and Mobile Wireframes & High-Fidelity Mockups',
      'Clickable Interactive Prototypes for Clinical Team Review'
    ],
    deliverables: [
      'Figma design workspace with organized component tokens',
      'Mobile and desktop visual specifications for engineering handoff',
      'Typography, iconography, and color accessibility audit documentation'
    ],
    benefits: [
      'Reassuring visual presence that instills patient confidence',
      'Frictionless patient navigation from home to appointment confirmation',
      'Consistent design language across all digital clinic touchpoints'
    ],
    whoItIsFor: ['Clinics wanting bespoke design', 'Healthcare SaaS platforms', 'Hospital chains standardizing UI'],
    process: [
      { step: '01', title: 'Discovery & Wireframes', desc: 'Define key patient tasks and layout content structures.' },
      { step: '02', title: 'Visual Styling', desc: 'Develop calm color palettes, crisp typography, and medical card styles.' },
      { step: '03', title: 'Component Library', desc: 'Build reusable UI elements for departments and doctor bios.' },
      { step: '04', title: 'Handoff Ready', desc: 'Prepare developer-ready assets and interactive prototype.' }
    ],
    faqs: [
      {
        question: 'What are the pricing options for healthcare design?',
        answer: 'We offer Clinic Design Starter at ₹25,000, Practice Design Pro at ₹39,000, and Custom Quotes for comprehensive multi-hospital systems.'
      }
    ]
  },
  {
    id: 'patient-lead-generation',
    title: 'Patient Lead Generation',
    slug: 'patient-lead-generation',
    category: 'Marketing',
    shortDesc: 'Systematic inbound inquiry frameworks connecting patients seeking specialized medical procedures with your clinic.',
    heroTagline: 'Predictable, High-Intent Inquiries For Specialized Medical Care',
    challenges: [
      'Over-reliance on third-party aggregators that control patient relationships and charge hefty commissions',
      'Low inquiry qualification leading to wasted reception hours on non-relevant calls',
      'Absence of rapid follow-up mechanisms for incoming digital leads'
    ],
    approach: [
      'Specialty-specific acquisition funnels targeting procedure-focused patient queries',
      'Integrated instant WhatsApp response systems and automated clinic call routing',
      'Real-time inquiry qualification forms capturing treatment readiness'
    ],
    inclusions: [
      'Multi-Channel Funnel Architecture (Search Ads, Local SEO, Social Intent)',
      'Dedicated Treatment Landing Pages with Dynamic Number Insertion',
      'Automated Lead Notification via WhatsApp & Email to Clinic Front Desk',
      'Lead Quality Audits & Inquiry Qualification Optimization'
    ],
    deliverables: [
      'High-converting procedure-specific lead capture funnels',
      'Live inquiry dashboard for clinic reception management',
      'Call tracking and inquiry source attribution reports',
      'Bi-weekly lead quality review and campaign refinement'
    ],
    benefits: [
      'Direct clinic ownership of patient relationships without intermediary fees',
      'Higher proportion of qualified consultations for elective and surgical procedures',
      'Transparent attribution identifying the most profitable marketing channels'
    ],
    whoItIsFor: ['Elective surgery clinics', 'Dental implant specialists', 'Fertility & IVF centers', 'Joint replacement surgeons'],
    process: [
      { step: '01', title: 'Procedure Identification', desc: 'Select high-priority specialties and determine patient search intent.' },
      { step: '02', title: 'Funnel Construction', desc: 'Build landing pages, instant booking forms, and tracking tags.' },
      { step: '03', title: 'Targeted Traffic', desc: 'Drive high-intent prospective patients through search and social channels.' },
      { step: '04', title: 'Reception Training', desc: 'Optimize front-desk inquiry response time and appointment booking rate.' }
    ],
    faqs: [
      {
        question: 'How quickly does the clinic receive patient inquiries?',
        answer: 'Inquiries are dispatched instantaneously via WhatsApp notification, SMS, and email directly to your clinic reception desk or call center.'
      }
    ]
  },
  {
    id: 'online-reputation-management',
    title: 'Online Reputation Management',
    slug: 'online-reputation-management',
    category: 'Branding & Growth',
    shortDesc: 'Protect, cultivate, and showcase authentic patient feedback to build an unassailable digital reputation for your medical practice.',
    heroTagline: 'Build An Unassailable Medical Reputation Across Google & Practo',
    challenges: [
      'Unfair negative reviews tarnishing years of dedicated clinical practice',
      'Satisfied patients rarely leaving reviews without gentle, systematic encouragement',
      'Fragmented reviews across Google, Practo, Justdial, and social platforms'
    ],
    approach: [
      'Post-consultation digital review request workflows sent via SMS or WhatsApp',
      'Professional, empathetic response templates adhering to patient privacy guidelines',
      'Proactive negative feedback mitigation routing complaints directly to clinic management'
    ],
    inclusions: [
      'Google Business Profile Review Strategy & Monitoring',
      'Ethical Patient Feedback Collection Automation',
      'Crisis Communication & Negative Review Response Protocols',
      'Review Widget Integration for Hospital & Doctor Websites'
    ],
    deliverables: [
      'Custom review generation QR codes and automated message templates',
      'Monthly sentiment and review velocity analysis',
      'Standard Operating Procedure (SOP) for clinic staff to handle complaints',
      'Embedded social proof review widgets on website'
    ],
    benefits: [
      'Steady accumulation of authentic 5-star patient testimonials',
      'Higher ranking in local map searches driven by positive review velocity',
      'Immediate de-escalation of patient grievances before they turn into public reviews'
    ],
    whoItIsFor: ['Individual doctors', 'Multi-doctor clinics', 'Hospitals managing diverse patient departments'],
    process: [
      { step: '01', title: 'Reputation Audit', desc: 'Evaluate existing ratings across Google, Practo, and medical directories.' },
      { step: '02', title: 'Workflow Integration', desc: 'Set up seamless post-discharge review request prompts.' },
      { step: '03', title: 'Response Management', desc: 'Provide professional, respectful responses to patient reviews.' },
      { step: '04', title: 'Social Proof Showcase', desc: 'Display top reviews on treatment landing pages to build trust.' }
    ],
    faqs: [
      {
        question: 'Can you delete negative Google reviews for doctors?',
        answer: 'Google only removes reviews that violate its explicit policies (hate speech, spam, conflict of interest). We audit negative reviews for policy violations to flag them for removal and guide ethical resolution for legitimate feedback.'
      }
    ]
  },
  {
    id: 'doctor-personal-branding',
    title: 'Doctor Personal Branding',
    slug: 'doctor-personal-branding',
    category: 'Branding & Growth',
    shortDesc: 'Position senior doctors and surgeons as recognized medical thought leaders in their respective clinical domains.',
    heroTagline: 'Establish Yourself As The Go-To Authority In Your Medical Specialty',
    challenges: [
      'Extensive clinical expertise overshadowed by aggressive digital competitors',
      'Lack of time to craft thought-leadership articles and patient educational videos',
      'Absence of a standalone, personal digital property independent of hospital affiliations'
    ],
    approach: [
      'Executive bio curation highlighting surgical milestones, research, and patient outcomes',
      'Monthly video and article creation capturing the doctor’s authentic clinical voice',
      'Strategic presence across LinkedIn for peer recognition and Instagram/YouTube for patient discovery'
    ],
    inclusions: [
      'Personal Doctor Website & Portfolio Development',
      'Clinical Thought-Leadership Articles & Patient FAQ Videos',
      'LinkedIn & YouTube Executive Channel Management',
      'Media Kit & Press Outreach Profile Creation'
    ],
    deliverables: [
      'Bespoke personal website with doctor biography and booking portal',
      'Bi-weekly ghostwritten medical articles and short video packages',
      'Consistent branded social presence across professional channels',
      'Media coverage strategy and speaker profile kit'
    ],
    benefits: [
      'Independence from hospital branding and aggregator dependency',
      'High organic patient referrals driven by public medical authority',
      'Invitations for keynotes, panel discussions, and medical conferences'
    ],
    whoItIsFor: ['Senior surgeons', 'Department heads', 'Super-specialists in private practice', 'Medical innovators'],
    process: [
      { step: '01', title: 'Positioning Workshop', desc: 'Distill core clinical focus, philosophy of care, and target patient audience.' },
      { step: '02', title: 'Asset Development', desc: 'Build personal digital hub, photography guidelines, and brand kit.' },
      { step: '03', title: 'Content Production', desc: 'Script and edit monthly thought-leadership videos and articles.' },
      { step: '04', title: 'Audience Expansion', desc: 'Distribute content across patient and peer medical networks.' }
    ],
    faqs: [
      {
        question: 'Why should a doctor have their own website separate from the hospital website?',
        answer: 'A personal website belongs exclusively to the doctor. When you change hospitals or launch private consulting rooms, your patient followers, search rankings, and brand equity stay with you permanently.'
      }
    ]
  },
  {
    id: 'healthcare-management-systems',
    title: 'Healthcare Management Systems (HMS)',
    slug: 'healthcare-management-systems',
    category: 'Website & Technology',
    shortDesc: 'Robust practice management software, electronic health records (EHR), and clinic automation tools.',
    heroTagline: 'Streamline Clinic Operations, Appointments, and Patient Records',
    challenges: [
      'Disorganized appointment schedules and missed patient follow-ups',
      'Paper-based clinical notes and fragmented billing processes',
      'Lack of patient retention tools and automated reminder systems'
    ],
    approach: [
      'Cloud-hosted practice management tailored to Indian clinic workflows',
      'Integrated digital prescription, billing, and automated WhatsApp appointment reminders',
      'Role-based access control ensuring patient confidentiality and data safety'
    ],
    inclusions: [
      'Doctor & Staff Scheduling Management',
      'Electronic Health Records & Digital Prescription Generator',
      'Automated Patient Appointment Reminders (SMS/WhatsApp)',
      'Billing, Invoicing, and Treatment History Tracking'
    ],
    deliverables: [
      'Configured cloud practice management portal with clinic branding',
      'Staff onboarding and workflow training session',
      'Historical patient record data migration assistance',
      'Ongoing technical support and data backup architecture'
    ],
    benefits: [
      'Significant reduction in patient no-show rates via automated reminders',
      'Rapid prescription generation and digital patient history retrieval',
      'Unified view of daily clinic revenues and patient volume'
    ],
    whoItIsFor: ['Single-doctor consulting clinics', 'Polyclinics', 'Diagnostic laboratories', 'Daycare surgical centers'],
    process: [
      { step: '01', title: 'Clinic Workflow Mapping', desc: 'Analyze patient check-in, doctor consultation, and billing steps.' },
      { step: '02', title: 'System Setup', desc: 'Configure timings, fee structures, prescription templates, and user roles.' },
      { step: '03', title: 'Team Training', desc: 'Train clinic front desk and nursing staff on daily usage.' },
      { step: '04', title: 'Live Deployment', desc: 'Go live with real-time support and automated daily backups.' }
    ],
    faqs: [
      {
        question: 'What is the package cost for the Practice Management System?',
        answer: 'Our verified Practice Management System package is ₹75,000 one-time, including setup, staff training, prescription templates, and workflow configuration.'
      }
    ]
  },
  {
    id: 'hospital-digital-marketing',
    title: 'Hospital Digital Marketing',
    slug: 'hospital-digital-marketing',
    category: 'Marketing',
    shortDesc: 'Enterprise-grade digital growth strategy for multi-specialty hospitals, surgical departments, and regional healthcare institutions.',
    heroTagline: 'Enterprise Digital Growth For Modern Multi-Specialty Hospitals',
    challenges: [
      'Managing multiple distinct medical departments under one institutional umbrella',
      'High patient acquisition costs across tertiary care specialties',
      'Balancing institutional reputation with individual department visibility'
    ],
    approach: [
      'Department-level growth engines (Cardiology, Orthopedics, Oncology, Neuro)',
      'Geo-targeted multi-city medical tourism and regional patient outreach campaigns',
      'Integrated hospital information architecture with doctor appointment engines'
    ],
    inclusions: [
      'Hospital Department SEO & Dedicated Treatment Funnels',
      'High-Intent Search Ads for Surgical & Inpatient Admissions',
      'Medical Video Documentaries & Patient Journey Case Stories',
      '24/7 Digital Inquiry Routing & Call Center CRM Integration'
    ],
    deliverables: [
      'Multi-department digital marketing roadmap and monthly execution',
      'Custom landing pages for 10+ surgical and inpatient specialties',
      'Cross-channel advertising campaign management',
      'Executive board monthly performance and ROI dashboard'
    ],
    benefits: [
      'Consistent bed occupancy and surgical volume for key departments',
      'Enhanced institutional prestige across regional catchment areas',
      'Attribution tracking showing revenue per marketing channel'
    ],
    whoItIsFor: ['Multi-specialty hospitals (50-500+ beds)', 'Super-specialty surgical institutes', 'Hospital chains'],
    process: [
      { step: '01', title: 'Departmental Audit', desc: 'Assess admission patterns, high-margin procedures, and bed occupancy needs.' },
      { step: '02', title: 'Specialty Prioritization', desc: 'Create campaigns for top departments with dedicated landing pages.' },
      { step: '03', title: 'Omnichannel Outreach', desc: 'Synchronize search ads, Google Maps, and doctor credentials.' },
      { step: '04', title: 'Admission Optimization', desc: 'Monitor conversion from digital inquiry to hospital admission.' }
    ],
    faqs: [
      {
        question: 'How do you handle marketing for 15+ different hospital departments?',
        answer: 'We create distinct digital sub-funnels for each key department (e.g. Cardiology, Orthopedics, Oncology) with dedicated medical landing pages, separate keyword strategies, and customized inquiry routing.'
      }
    ]
  },
  {
    id: 'clinic-digital-marketing',
    title: 'Clinic Digital Marketing',
    slug: 'clinic-digital-marketing',
    category: 'Marketing',
    shortDesc: 'Laser-focused marketing solutions designed to fill appointment diaries for independent clinics and group practices.',
    heroTagline: 'Fill Your Clinic Appointment Book With Local Patients Who Value Quality',
    challenges: [
      'Hyper-local competition from neighborhood dispensaries and corporate clinics',
      'Seasonal fluctuations in patient footfall',
      'Limited internal marketing bandwidth for clinic owners'
    ],
    approach: [
      'Radius-based Google Maps and local SEO dominance (3-5 km catchment zone)',
      'High-converting clinic website with WhatsApp consultation booking',
      'Review generation campaigns turning satisfied patients into clinic advocates'
    ],
    inclusions: [
      'Local SEO & Google Business Profile Management',
      'Clinic Website Optimization for Mobile Appointments',
      'Hyper-Local Google Search Ads within 5km Radius',
      'Patient Education Social Media Content'
    ],
    deliverables: [
      'Local search pack ranking improvement plan',
      'Mobile-optimized clinic appointment landing page',
      'Automated review collection tools for reception',
      'Monthly consultation growth reporting'
    ],
    benefits: [
      'Steady flow of neighborhood patient appointments',
      'Strong local clinic brand that outlasts aggregator changes',
      'Higher appointment show rates through clear communication'
    ],
    whoItIsFor: ['Dental clinics', 'Pediatric clinics', 'Eye clinics', 'Physiotherapy centers', 'Polyclinics'],
    process: [
      { step: '01', title: 'Catchment Analysis', desc: 'Define your 3-7 km primary patient catchment zone and competition.' },
      { step: '02', title: 'Local Search Setup', desc: 'Optimize Google Business Profile and local clinic citations.' },
      { step: '03', title: 'Patient Booking Flow', desc: 'Deploy 1-click WhatsApp and call appointment triggers.' },
      { step: '04', title: 'Reputation Building', desc: 'Engage existing patients for steady positive reviews.' }
    ],
    faqs: [
      {
        question: 'What is the most effective digital channel for a neighborhood clinic?',
        answer: 'Google Business Profile (Local SEO / Google Maps) paired with a fast mobile landing page and 1-tap WhatsApp booking consistently yields the highest conversion rate for neighborhood clinics.'
      }
    ]
  }
];

export interface IndustryItem {
  id: string;
  title: string;
  slug: string;
  category: 'Hospitals & Institutions' | 'Primary & Specialty Care' | 'Surgical & Super Specialties' | 'Diagnostics & Wellness';
  shortDesc: string;
  patientSearchBehavior: string;
  challenges: string[];
  seoStrategy: string[];
  adsStrategy: string[];
  websiteRequirements: string[];
  leadGenerationStrategy: string[];
  contentIdeas: string[];
  faqs: { question: string; answer: string }[];
}

export const industriesData: IndustryItem[] = [
  {
    id: 'hospitals',
    title: 'Hospitals & Healthcare Networks',
    slug: 'hospitals',
    category: 'Hospitals & Institutions',
    shortDesc: 'Comprehensive digital growth strategies for multi-specialty hospitals to boost emergency, outpatient, and surgical admissions.',
    patientSearchBehavior: 'Patients search for trusted hospital reputations, 24/7 emergency facilities, specialist doctor credentials, and insurance/cashless empaneled facilities.',
    challenges: [
      'Balancing multiple medical specialties under a single unified brand',
      'Competing with aggregator portals on primary medical queries',
      'Coordinating patient inquiry response across various OPD desks'
    ],
    seoStrategy: [
      'Department-specific URL architecture with clinical schema',
      'Local map pack dominance for hospital name and emergency services',
      'Rich doctor profiles highlighting qualifications and research papers'
    ],
    adsStrategy: [
      'Search campaigns targeting urgent and elective surgeries',
      'Geo-fenced mobile ads targeting surrounding residential and corporate districts',
      'Performance Max campaigns highlighting advanced robotic technology'
    ],
    websiteRequirements: [
      'Sub-second page speeds with clear emergency helpline banner',
      'Filterable doctor directory by specialty, day, and time slot',
      'Cashless TPA and health insurance empanelment directory'
    ],
    leadGenerationStrategy: [
      'Instant call routing for critical care and elective surgery inquiries',
      'Dedicated landing pages for high-value procedures like knee replacement and cardiac stents'
    ],
    contentIdeas: [
      'Patient recovery case studies and doctor round-table video podcasts',
      'Infographics on hospital infection control and surgical safety protocols'
    ],
    faqs: [
      {
        question: 'How do you coordinate digital marketing across 10+ hospital departments?',
        answer: 'We build dedicated departmental clusters, allocating marketing budgets based on bed capacity, high-value surgical priorities, and seasonal patient demands.'
      }
    ]
  },
  {
    id: 'clinics',
    title: 'Clinics & Polyclinics',
    slug: 'clinics',
    category: 'Primary & Specialty Care',
    shortDesc: 'Hyper-local patient acquisition for neighborhood clinics, specialist consulting rooms, and multi-doctor outpatient centers.',
    patientSearchBehavior: 'Patients search for clinics within a 5km radius, operating timings, walk-in consultation fees, and doctor availability on evenings/weekends.',
    challenges: [
      'High neighborhood competition and walk-in unpredictability',
      'Managing appointment cancellations and patient no-shows'
    ],
    seoStrategy: [
      'Hyper-local Google Business Profile optimization with daily updates',
      'Neighborhood pin-code targeted service pages'
    ],
    adsStrategy: [
      'Radius-targeted search ads running during clinic consultation hours',
      'Call-only ads allowing immediate conversation with clinic reception'
    ],
    websiteRequirements: [
      'Prominent consultation timings and doctor schedule table',
      '1-Tap WhatsApp chat for instant appointment slot confirmation'
    ],
    leadGenerationStrategy: [
      'Local health check-up packages and family consultation plans'
    ],
    contentIdeas: [
      'Preventive seasonal health tips and immunization schedules'
    ],
    faqs: [
      {
        question: 'Can digital marketing reduce clinic patient no-shows?',
        answer: 'Yes, by combining automated WhatsApp appointment confirmations with clear timing reminders, clinics typically experience a 30-40% drop in missed appointments.'
      }
    ]
  },
  {
    id: 'doctors',
    title: 'Individual Doctors & Specialists',
    slug: 'doctors',
    category: 'Primary & Specialty Care',
    shortDesc: 'Personal brand building and private practice growth for senior physicians, surgeons, and medical consultants.',
    patientSearchBehavior: 'Patients search doctor names directly after receiving referrals, checking peer reviews, qualifications, and private clinic locations.',
    challenges: [
      'Heavy reliance on hospital brands without owning an independent patient database',
      'Limited personal time to manage social media and technical websites'
    ],
    seoStrategy: [
      'Exact-match doctor name SEO targeting "Dr. [Name] reviews", "qualification", and "clinic"',
      'Physician schema embedding medical council registration and degrees'
    ],
    adsStrategy: [
      'Brand protection ads ensuring competitor clinics do not bid on the doctor’s name',
      'Targeted search campaigns for the doctor’s signature super-specialty'
    ],
    websiteRequirements: [
      'Clean personal portfolio highlighting surgical volume, awards, and clinic locations',
      'Video introductions helping patients feel familiar with the doctor'
    ],
    leadGenerationStrategy: [
      'Second medical opinion inquiry funnel for complex surgical cases'
    ],
    contentIdeas: [
      'Short 60-second video answers to common clinical dilemmas'
    ],
    faqs: [
      {
        question: 'Will a personal website help a doctor who consults at a large hospital?',
        answer: 'Yes. It establishes your independent authority, captures direct patient inquiries, and ensures your reputation remains portable regardless of your hospital affiliations.'
      }
    ]
  },
  {
    id: 'dental',
    title: 'Dental Clinics & Implant Centers',
    slug: 'dental',
    category: 'Primary & Specialty Care',
    shortDesc: 'High-value patient generation for dental implants, invisible aligners, smile makeovers, and family dentistry.',
    patientSearchBehavior: 'Patients search for pain-free treatments, before/after smile transformations, transparent implant costs, and nearby emergency dentists.',
    challenges: [
      'Intense local price competition on routine scaling and fillings',
      'Educating patients on the value of premium treatments like clear aligners and ceramic implants'
    ],
    seoStrategy: [
      'Local SEO targeting "best dentist near me" and high-ticket procedure terms like "all-on-4 dental implants"',
      'Dedicated pages for clear aligners, root canals, and cosmetic smile designing'
    ],
    adsStrategy: [
      'Google Search campaigns for dental implants and orthodontics',
      'Instagram visual campaigns displaying genuine, compliant smile makeover photos'
    ],
    websiteRequirements: [
      'Interactive smile gallery showcasing genuine clinical cases',
      'Transparent treatment overview with EMI / financing options'
    ],
    leadGenerationStrategy: [
      'Free initial dental assessment or digital smile simulation lead magnets'
    ],
    contentIdeas: [
      'Aligners vs metal braces comparisons and implant longevity guides'
    ],
    faqs: [
      {
        question: 'What dental procedures generate the highest return on marketing?',
        answer: 'Dental implants, full-mouth rehabilitations, clear aligners, and cosmetic veneers offer the highest value and benefit most from targeted search and visual ads.'
      }
    ]
  },
  {
    id: 'eye-hospitals',
    title: 'Eye Hospitals & Ophthalmology Clinics',
    slug: 'eye-hospitals',
    category: 'Surgical & Super Specialties',
    shortDesc: 'Drive inquiries for LASIK, Contoura Vision, advanced cataract surgery, glaucoma, and pediatric ophthalmology.',
    patientSearchBehavior: 'Patients compare laser vision correction technologies (LASIK vs SMILE vs Contoura), cataract lens options, and blade-free surgical safety.',
    challenges: [
      'Overcoming patient fear regarding eye surgery safety and precision',
      'Explaining complex laser lens variations without causing decision paralysis'
    ],
    seoStrategy: [
      'Targeting procedure terms like "blade-free LASIK in [City]" and "robotic cataract surgery"',
      'Educational articles on specs removal eligibility and post-op care'
    ],
    adsStrategy: [
      'Google Search ads targeting working professionals aged 21-35 for specs removal',
      'Geo-targeted family campaigns for senior citizen cataract screenings'
    ],
    websiteRequirements: [
      'Interactive "Am I Eligible for LASIK?" screening questionnaire',
      'Profiles of certified eye surgeons with surgical experience counts'
    ],
    leadGenerationStrategy: [
      'Pre-surgery consultation package booking with corneal topography'
    ],
    contentIdeas: [
      'Myth vs reality reels on laser eye surgery and screen-time eye strain advice'
    ],
    faqs: [
      {
        question: 'How do you convince patients about LASIK safety through digital marketing?',
        answer: 'We focus on educating patients regarding diagnostic safety standards, corneal suitability tests, and surgeon credentials rather than high-pressure promotional discounts.'
      }
    ]
  },
  {
    id: 'ivf-fertility',
    title: 'IVF & Fertility Centers',
    slug: 'ivf-fertility',
    category: 'Surgical & Super Specialties',
    shortDesc: 'Compassionate, sensitive, and compliant digital marketing for fertility clinics, embryology labs, and reproductive specialists.',
    patientSearchBehavior: 'Couples conduct extensive, discreet research comparing lab technology, embryologist expertise, transparent package costs, and ethical practices.',
    challenges: [
      'Emotionally sensitive patient mindset requiring immense empathy and discretion',
      'Strict medical advertising prohibitions against misleading success rate claims'
    ],
    seoStrategy: [
      'In-depth, compassionate educational guides on unexplained infertility, ICSI, and blastocyst transfer',
      'Local map optimization for regional patient convenience'
    ],
    adsStrategy: [
      'Empathetic Google Search ads addressing fertility concerns and preliminary consultations',
      'Exclusion of aggressive or guarantee-based terminology'
    ],
    websiteRequirements: [
      'Discreet, confidential consultation booking form',
      'Detailed overview of advanced embryology laboratory infrastructure'
    ],
    leadGenerationStrategy: [
      'Private fertility counseling consultation booking with senior fertility specialists'
    ],
    contentIdeas: [
      'Educational video series by reproductive endocrinologists demystifying fertility myths'
    ],
    faqs: [
      {
        question: 'How do you handle fertility clinic advertising regulations?',
        answer: 'We adhere strictly to Indian ICMR and regulatory guidelines, never promising guaranteed conception or unrealistic success rates, focusing instead on clinical excellence and patient care.'
      }
    ]
  },
  {
    id: 'cardiology',
    title: 'Cardiology & Heart Care Centers',
    slug: 'cardiology',
    category: 'Surgical & Super Specialties',
    shortDesc: 'Build authority for interventional cardiology, heart valve replacement, bypass surgery, and preventive cardiac wellness.',
    patientSearchBehavior: 'Patients and families search for experienced interventional cardiologists, angioplasty second opinions, and rapid chest pain emergency care.',
    challenges: [
      'High urgency for emergency cardiac care vs planned second opinions for elective bypass'
    ],
    seoStrategy: [
      'Targeting terms like "best cardiologist in [City]", "angioplasty second opinion", and "TAVR surgery"'
    ],
    adsStrategy: [
      'Targeted campaigns for heart health check-ups and second opinions for coronary blockages'
    ],
    websiteRequirements: [
      'Emergency cardiac hotline button and cath lab infrastructure showcase'
    ],
    leadGenerationStrategy: [
      'Specialist second opinion report review funnel for angiography reports'
    ],
    contentIdeas: [
      'Signs of a silent heart attack and lifestyle prevention guides by cardiologists'
    ],
    faqs: [
      {
        question: 'Can digital marketing attract cardiac surgery second opinions?',
        answer: 'Yes, patients with angiography reports frequently search online for second opinions before scheduling bypass or stent procedures. A dedicated review funnel captures these high-value consultations.'
      }
    ]
  },
  {
    id: 'orthopedics',
    title: 'Orthopedics & Joint Replacement',
    slug: 'orthopedics',
    category: 'Surgical & Super Specialties',
    shortDesc: 'Attract patients for robotic knee replacement, hip surgery, sports medicine, spine care, and arthroscopy.',
    patientSearchBehavior: 'Patients research robotic surgical precision, recovery timelines for knee replacement, non-surgical alternatives, and surgeon track records.',
    challenges: [
      'Patients delaying elective joint surgery out of fear of prolonged bed rest and pain'
    ],
    seoStrategy: [
      'SEO addressing "robotic knee replacement recovery time", "minimally invasive hip surgery", and "best orthopedic surgeon in [City]"'
    ],
    adsStrategy: [
      'Search ads targeting knee pain consultations and sports injury MRI reviews'
    ],
    websiteRequirements: [
      'Detailed recovery timeline infographics and physiotherapy rehabilitation guidance'
    ],
    leadGenerationStrategy: [
      'Knee joint assessment consultation booking for senior citizens'
    ],
    contentIdeas: [
      'Demonstrations of modern robotic joint precision and patient mobility milestones'
    ],
    faqs: [
      {
        question: 'How do you market robotic joint replacement effectively?',
        answer: 'By educating patients on the tangible benefits of robotic precision: smaller incisions, minimal blood loss, faster hospital discharge, and quicker return to walking.'
      }
    ]
  },
  {
    id: 'dermatology',
    title: 'Dermatology & Cosmetology',
    slug: 'dermatology',
    category: 'Primary & Specialty Care',
    shortDesc: 'Patient acquisition for clinical dermatology, laser hair reduction, acne scar treatments, hair restoration, and aesthetics.',
    patientSearchBehavior: 'Patients look for visual proof of results, US-FDA approved laser technology, dermatologist credentials, and realistic treatment timelines.',
    challenges: [
      'Distinguishing medical dermatologists from non-medical aesthetic salons and spas'
    ],
    seoStrategy: [
      'Keywords like "dermatologist for acne scars in [City]" and "US-FDA laser hair removal"'
    ],
    adsStrategy: [
      'High-converting Instagram and Google campaigns focused on clinical aesthetic treatments'
    ],
    websiteRequirements: [
      'Interactive skin & hair concern selector with direct doctor appointment booking'
    ],
    leadGenerationStrategy: [
      'Personalized skin analysis consultation booking'
    ],
    contentIdeas: [
      'Dermatologist-approved skincare ingredient breakdowns and laser myths debunked'
    ],
    faqs: [
      {
        question: 'How do dermatologists stand out from commercial beauty salons?',
        answer: 'We highlight MD doctor qualifications, medical safety protocols, US-FDA equipment, and clinical skin pathology expertise that salon chains cannot provide.'
      }
    ]
  },
  {
    id: 'diagnostics',
    title: 'Diagnostics, Pathology & Radiology',
    slug: 'diagnostics',
    category: 'Diagnostics & Wellness',
    shortDesc: 'Drive home blood sample collection bookings, MRI/CT scans, preventive health check-up packages, and ultrasound appointments.',
    patientSearchBehavior: 'Patients search for fast report turnaround, NABL accredited laboratories, home blood collection slots, and affordable scan prices.',
    challenges: [
      'Severe price competition from national aggregator brands'
    ],
    seoStrategy: [
      'Test-specific pages: "MRI scan cost in [City]", "Full body health checkup near me"'
    ],
    adsStrategy: [
      'Hyper-local search ads with 1-click home sample collection booking via WhatsApp'
    ],
    websiteRequirements: [
      'Searchable test directory with fasting guidelines and report delivery times'
    ],
    leadGenerationStrategy: [
      'Instant home sample booking with automated slot confirmation'
    ],
    contentIdeas: [
      'Guides explaining what blood test values mean and routine preventive screening checklists'
    ],
    faqs: [
      {
        question: 'How can independent diagnostic centers compete with national lab chains?',
        answer: 'By offering faster local home sample visits, direct pathologist consultation, same-day report guarantees, and hyper-local neighborhood presence.'
      }
    ]
  },
  {
    id: 'telemedicine',
    title: 'Telemedicine & Digital Health Startups',
    slug: 'telemedicine',
    category: 'Hospitals & Institutions',
    shortDesc: 'Scale online doctor consultations, app installs, and virtual second opinions nationwide.',
    patientSearchBehavior: 'Patients search for instant online doctor availability, encrypted video consultations, and digital prescription delivery.',
    challenges: [
      'Building patient trust without a physical clinic visit and ensuring platform reliability'
    ],
    seoStrategy: [
      'National programmatic SEO for online doctor specialties: "Consult gynecologist online"'
    ],
    adsStrategy: [
      'Pan-India Google Search and performance marketing campaigns for instant tele-consults'
    ],
    websiteRequirements: [
      'Secure, HIPAA-conscious video portal with easy digital payment and prescription download'
    ],
    leadGenerationStrategy: [
      'Instant tele-consultation booking with transparent doctor timing slots'
    ],
    contentIdeas: [
      'Guides on managing chronic conditions virtually and when to opt for tele-consult vs ER'
    ],
    faqs: [
      {
        question: 'Can you assist telemedicine platforms with patient acquisition across India?',
        answer: 'Yes, we design pan-India digital campaigns that match prospective patients with virtual specialist slots based on language preference and specialty.'
      }
    ]
  }
];

export interface SolutionItem {
  id: string;
  title: string;
  slug: string;
  shortDesc: string;
  heroTagline: string;
  problem: string;
  strategy: string;
  implementation: string[];
  channels: string[];
  deliverables: string[];
  measurement: string[];
}

export const solutionsData: SolutionItem[] = [
  {
    id: 'hospital-growth',
    title: 'Hospital Growth Engine',
    slug: 'hospital-growth',
    shortDesc: 'An institutional growth framework designed to optimize bed occupancy, surgical inquiries, and multi-department discovery.',
    heroTagline: 'Sustainable Inpatient Admissions & Departmental Footfall For Hospitals',
    problem: 'Hospitals struggle with fragmented marketing where critical departments remain under-occupied while ad spend is dissipated across untargeted brand promotion.',
    strategy: 'We deploy an integrated departmental marketing model that aligns digital ad budgets with clinical bed capacity, targeting high-intent surgical inquiries.',
    implementation: [
      'Comprehensive audit of hospital catchment area and OPD-to-IPD conversion data',
      'Dedicated digital landing pages for each tertiary care specialty with doctor schedules',
      'Geo-fenced Google Search and Maps campaigns optimized for surgical procedure inquiries',
      'Integration of 24/7 hospital call tracking with clinic CRM systems'
    ],
    channels: ['Google Search Ads', 'Hospital Local SEO', 'YouTube Educational Case Stories', 'Call Tracking'],
    deliverables: [
      'Multi-department digital marketing blueprint',
      'Custom surgical landing pages for 8+ departments',
      'Call attribution and inquiry routing architecture',
      'Monthly executive growth and admission analytics'
    ],
    measurement: ['Qualified surgical inquiries', 'OPD consultation bookings', 'Cost-per-patient-inquiry reduction']
  },
  {
    id: 'clinic-growth',
    title: 'Clinic Growth Accelerator',
    slug: 'clinic-growth',
    shortDesc: 'A rapid local patient acquisition system built to fill appointment diaries for independent clinics within 30 to 60 days.',
    heroTagline: 'Consistent Daily Patient Footfall For Your Neighborhood Clinic',
    problem: 'Private clinics suffer from inconsistent patient flow, aggregator dependency, and loss of neighborhood patients to competitors with higher Google Maps visibility.',
    strategy: 'We establish dominance in the clinic’s immediate 3-7 km radius through Google Maps 3-Pack optimization, high-speed mobile booking, and automated review collection.',
    implementation: [
      'Complete overhaul of Google Business Profile categories, attributes, and photos',
      'Deployment of a sub-second mobile landing page with 1-click WhatsApp appointment booking',
      'Hyper-local radius advertising running during peak consultation hours',
      'Automated post-visit patient feedback system to build verified 5-star reviews'
    ],
    channels: ['Google Business Profile', 'Hyper-Local Search Ads', 'WhatsApp Direct Booking', 'Local Directory Citations'],
    deliverables: [
      'Verified and optimized Google Business Profile',
      'Mobile-first appointment booking page',
      'Staff review-collection toolkit and QR materials',
      'Weekly consultation growth reports'
    ],
    measurement: ['Google Maps direction requests', 'Direct phone calls from local search', 'WhatsApp consultation chats initiated']
  },
  {
    id: 'doctor-branding',
    title: 'Doctor Authority & Branding',
    slug: 'doctor-branding',
    shortDesc: 'Elevate specialist physicians and surgeons into recognized authorities, creating long-term personal brand equity independent of hospitals.',
    heroTagline: 'Build An Enduring Medical Brand That Patients And Peers Trust',
    problem: 'Senior doctors invest decades mastering surgical and clinical skills, yet remain digitally invisible while less experienced practitioners dominate social media.',
    strategy: 'We craft a dignified, clinically authoritative digital persona through thought leadership, video education, and an independent personal web property.',
    implementation: [
      'Development of a signature personal doctor website with surgery logs and credentials',
      'Monthly batch video production turning complex clinical knowledge into bite-sized patient guidance',
      'Reputation protection ensuring the doctor ranks #1 for their own name and specialty',
      'Strategic LinkedIn curation for peer medical recognition and conference visibility'
    ],
    channels: ['Personal Doctor Website', 'YouTube Shorts / Reels', 'LinkedIn Medical Thought Leadership', 'Google Knowledge Panel'],
    deliverables: [
      'Bespoke personal doctor portfolio website',
      'Monthly edited video educational clips',
      'Published clinical articles and media profiles',
      'Google Knowledge Panel verification support'
    ],
    measurement: ['Direct name search volume', 'Referral consultation inquiries', 'Video watch time and patient engagement']
  },
  {
    id: 'patient-acquisition',
    title: 'High-Intent Patient Acquisition Funnel',
    slug: 'patient-acquisition',
    shortDesc: 'End-to-end patient journey engineering from symptom search to confirmed appointment, minimizing leakage and maximizing show-up rates.',
    heroTagline: 'Turn Passive Online Searchers Into Confirmed Consulting Room Visits',
    problem: 'Most healthcare websites lose 95% of visitors because inquiry forms are clunky, reception desks answer calls slowly, and follow-ups are non-existent.',
    strategy: 'We engineer a frictionless patient journey combining instant reassurance, clear credentials, multiple booking channels (Call/WhatsApp/Form), and rapid reception alerts.',
    implementation: [
      'Creation of high-converting medical landing pages stripped of distracting navigation',
      'Integration of instant WhatsApp API triggers notifying clinic reception within 10 seconds',
      'Automated appointment reminder SMS and WhatsApp sequences reducing patient no-shows',
      'Retargeting campaigns reassuring patients who explored treatment details without booking'
    ],
    channels: ['Google Search Ads', 'Dedicated Medical Landing Pages', 'Automated WhatsApp API', 'Call Center CRM'],
    deliverables: [
      'Full-funnel landing page templates',
      'Instant lead notification workflows',
      'Front-desk consultation booking SOP',
      'Comprehensive conversion rate audit'
    ],
    measurement: ['Inquiry-to-appointment conversion rate', 'Patient show-up rate', 'Average front-desk response time']
  },
  {
    id: 'google-maps-growth',
    title: 'Google Maps & Local Search Dominance',
    slug: 'google-maps-growth',
    shortDesc: 'Proprietary local SEO methodology to position your clinic or hospital at the top of the Google 3-Pack for high-intent medical queries.',
    heroTagline: 'Dominate The Map Pack When Patients Search "Best Doctor Near Me"',
    problem: 'Over 70% of local healthcare searches click on the top three Google Maps listings. Being in the 4th position or beyond renders your clinic practically invisible.',
    strategy: 'We optimize geo-relevance, review velocity, medical categories, and citation accuracy to steadily propel your clinic into the coveted Google 3-Pack.',
    implementation: [
      'Geo-grid tracking measuring keyword rankings across 1km increments in your city',
      'Standardization of NAP data across 50+ Indian business and healthcare directories',
      'Regular clinical updates, Q&A seeding, and service attribute enrichment on Google Profile',
      'Deployment of patient review generation frameworks compliant with Google guidelines'
    ],
    channels: ['Google Business Profile', 'Local Citation Directories', 'Geo-Targeted Landing Pages', 'Patient Review Engine'],
    deliverables: [
      'Baseline and ongoing geo-grid ranking map reports',
      'Citation audit and directory synchronization',
      'Google Profile optimization roadmap',
      'Monthly call and navigation request tracking'
    ],
    measurement: ['Google 3-Pack keyword appearances', 'Map direction requests', 'Total incoming phone calls from profile']
  }
];

export interface PortfolioItem {
  id: string;
  name: string;
  slug: string;
  industry: string;
  serviceCategory: string;
  techStack: string[];
  summary: string;
  challenge: string;
  solution: string;
  deliverables: string[];
  isSample: boolean;
}

export const portfolioData: PortfolioItem[] = [
  {
    id: 'medicare-hospital',
    name: 'MediCare Multi-Specialty Hospital',
    slug: 'medicare-hospital',
    industry: 'Hospitals & Institutions',
    serviceCategory: 'Web Development & SEO',
    techStack: ['React', 'Next.js', 'Tailwind CSS', 'Schema.org', 'Node.js'],
    summary: 'A complete digital transformation architecture featuring a multi-department appointment portal, 24/7 emergency triage interface, and clinical SEO.',
    challenge: 'A multi-specialty hospital needed to replace an outdated, slow legacy website that failed Core Web Vitals and offered no mobile booking.',
    solution: 'Designed and engineered a sub-second web architecture with separate landing pages for Cardiology, Orthopedics, and Neurology, paired with local pack optimization.',
    deliverables: ['Custom hospital web application', 'Specialty doctor directory', 'Emergency call routing', 'Technical SEO foundation'],
    isSample: true
  },
  {
    id: 'dental-care-clinic',
    name: 'Apex Dental Care & Implant Center',
    slug: 'dental-care-clinic',
    industry: 'Dental Clinics',
    serviceCategory: 'Local SEO & Google Ads',
    techStack: ['Google Ads', 'Local SEO', 'WhatsApp API', 'Landing Pages'],
    summary: 'Targeted patient acquisition funnel for dental implants, invisible aligners, and aesthetic smile designing with direct WhatsApp consultation bookings.',
    challenge: 'High competition from nearby dental clinics and significant patient leakage on complex implant consultation queries.',
    solution: 'Engineered a hyper-local Google Ads campaign with negative keyword pruning and a mobile-first landing page with an interactive treatment selector.',
    deliverables: ['PPC campaign architecture', 'Mobile implant landing page', 'Google Business Profile optimization', 'Review collection system'],
    isSample: true
  },
  {
    id: 'telemed-platform',
    name: 'TeleMed Digital Health Platform',
    slug: 'telemed-platform',
    industry: 'Telemedicine',
    serviceCategory: 'Healthcare Technology',
    techStack: ['React', 'TypeScript', 'WebRTC', 'Firebase', 'Express'],
    summary: 'Cloud-ready telemedicine consultation platform connecting remote patients with medical specialists through secure video and digital prescriptions.',
    challenge: 'Creating a HIPAA-conscious, intuitive video consultation interface that worked reliably on low-bandwidth mobile connections.',
    solution: 'Developed a lightweight WebRTC consultation interface with automated slot booking, payment gateway integration, and digital PDF prescription generation.',
    deliverables: ['Patient web application', 'Doctor dashboard', 'Video consultation room', 'Prescription generator'],
    isSample: true
  },
  {
    id: 'pharmacare-wellness',
    name: 'PharmaCare Healthcare & Diagnostics',
    slug: 'pharmacare-wellness',
    industry: 'Diagnostics & Wellness',
    serviceCategory: 'E-commerce & Web Apps',
    techStack: ['Next.js', 'PostgreSQL', 'Tailwind CSS', 'REST API'],
    summary: 'Healthcare diagnostic booking and medical product catalog with automated home sample collection scheduling.',
    challenge: 'Diagnostic lab needed to automate blood test bookings and home phlebotomist dispatch without phone-tag delays.',
    solution: 'Built a search-first diagnostic test directory with time-slot selection, pincode validation, and instant SMS confirmation.',
    deliverables: ['Diagnostic booking catalog', 'Pincode validation engine', 'Automated slot dispatch', 'Patient report download portal'],
    isSample: true
  },
  {
    id: 'cardiology-center',
    name: 'Pulse Heart & Vascular Institute',
    slug: 'cardiology-center',
    industry: 'Cardiology',
    serviceCategory: 'Branding & SEO',
    techStack: ['Figma', 'React', 'Google Search Console', 'Medical Schema'],
    summary: 'Dignified institutional branding, surgeon credentials architecture, and second opinion inquiry funnel for interventional cardiology.',
    challenge: 'Senior cardiac surgeons needed a trusted digital identity to attract complex surgical second opinions across regional referral networks.',
    solution: 'Designed an authoritative medical portal highlighting catheterization lab credentials, surgical volume, and a confidential report upload mechanism.',
    deliverables: ['Brand visual identity system', 'Surgeon profile pages', 'Second opinion inquiry funnel', 'Clinical schema markup'],
    isSample: true
  },
  {
    id: 'mindwell-clinic',
    name: 'MindWell Mental Health & Therapy Clinic',
    slug: 'mindwell-clinic',
    industry: 'Primary & Specialty Care',
    serviceCategory: 'Social Media & Content',
    techStack: ['Social Media', 'Content Strategy', 'Video Production', 'Canva Pro'],
    summary: 'Empathetic mental health educational content and social media awareness campaigns destigmatizing therapy and counseling.',
    challenge: 'Overcoming mental health stigma and connecting anxious prospective patients with certified clinical psychologists in a safe, confidential manner.',
    solution: 'Created informative, calm social media carousels and discreet private booking flows ensuring complete patient confidentiality.',
    deliverables: ['Monthly content calendar', 'Educational mental wellness reels', 'Discreet consultation booking form', 'Community guidelines SOP'],
    isSample: true
  }
];

export interface CaseStudyItem {
  id: string;
  client: string;
  slug: string;
  industry: string;
  challenge: string;
  goals: string[];
  strategy: string;
  execution: string[];
  services: string[];
  technology: string[];
  outcome: string;
  keyLearnings: string[];
  isSample: boolean;
}

export const caseStudiesData: CaseStudyItem[] = [
  {
    id: 'case-study-hospital-expansion',
    client: 'Regional Multi-Specialty Hospital',
    slug: 'regional-hospital-patient-growth',
    industry: 'Hospitals & Institutions',
    challenge: 'The hospital had expanded to 150 beds with new robotic surgical equipment, but regional patient awareness was low and prospective patients were choosing corporate metro hospitals.',
    goals: [
      'Increase organic discovery for robotic joint replacement and laparoscopic surgeries',
      'Optimize the hospital Google Business Profile for primary neighborhood emergency searches',
      'Build a streamlined inquiry flow connecting inquiries directly with clinical coordinators'
    ],
    strategy: 'Deployed an integrated departmental growth model, creating dedicated high-performance pages for key departments and running geo-targeted surgical intent campaigns across a 40km radius.',
    execution: [
      'Rebuilt hospital web presence on React with sub-second mobile page speed',
      'Created 12 department-specific landing pages with verified doctor credentials',
      'Standardized hospital NAP across 40+ medical and regional business directories',
      'Integrated live WhatsApp routing directly to hospital admission counseling staff'
    ],
    services: ['Healthcare Website Development', 'Healthcare SEO', 'Google Ads', 'Local SEO'],
    technology: ['React', 'TypeScript', 'Tailwind CSS', 'Call Tracking API', 'Schema.org'],
    outcome: 'Established a consistent, predictable stream of inbound surgical inquiries and achieved top 3 Google Maps placement across regional healthcare queries.',
    keyLearnings: [
      'Patients researching major surgeries prioritize seeing surgeon credentials and clear recovery timelines over generic hospital marketing.',
      'Fast mobile response times from hospital front desks directly correlate with consultation confirmation rates.'
    ],
    isSample: true
  },
  {
    id: 'case-study-dental-implant-clinic',
    client: 'Cosmetic & Implant Dental Practice',
    slug: 'dental-practice-implant-acquisition',
    industry: 'Dental Clinics',
    challenge: 'A modern dental clinic was relying on walk-ins and discounting routine scaling, which eroded profit margins while leaving expensive implant surgery suites underutilized.',
    goals: [
      'Attract high-intent patients searching for full-mouth dental implants and aligners',
      'Differentiate the clinic through clinical sterilisation standards and digital smile previews',
      'Build a steady stream of authentic 5-star Google patient reviews'
    ],
    strategy: 'Built a specialized landing funnel focused exclusively on tooth replacement options and smile makeovers, supported by negative-keyword-optimized Google Search campaigns.',
    execution: [
      'Constructed a focused dental implant landing page with transparent procedure steps',
      'Implemented negative keyword filters eliminating budget and DIY dental queries',
      'Set up an automated post-treatment WhatsApp review request system for discharged patients',
      'Ran localized educational video ads showing the clinic’s digital 3D CBCT scanning tech'
    ],
    services: ['Patient Lead Generation', 'Google Ads', 'Local SEO', 'Reputation Management'],
    technology: ['Google Ads', 'Google Business Profile', 'WhatsApp Business API'],
    outcome: 'Successfully shifted the practice revenue balance toward elective implants and aligners while building a stellar local rating on Google Maps.',
    keyLearnings: [
      'Highlighting advanced diagnostic technology (like 3D CBCT scans) builds immediate patient trust for complex dental procedures.',
      'A structured, polite WhatsApp message sent 24 hours after a painless procedure generates the highest review response rate.'
    ],
    isSample: true
  }
];

export interface PricingPackage {
  id: string;
  name: string;
  category: 'Website Development' | 'Social Media' | 'Website Design' | 'Enterprise / Systems';
  price: string;
  billingPeriod: 'One-time' | 'Monthly' | 'Custom';
  description: string;
  inclusions: string[];
  idealFor: string;
  popular?: boolean;
}

export const pricingPackages: PricingPackage[] = [
  {
    id: 'clinic-website-dev',
    name: 'Clinic Website Development',
    category: 'Website Development',
    price: '₹35,000',
    billingPeriod: 'One-time',
    description: 'High-performance, mobile-responsive custom website built for independent doctors and specialty clinics.',
    inclusions: [
      'Custom Responsive Design (Mobile, Tablet, Desktop)',
      'Up to 8 Pages (Home, About, Services, Doctor Bio, Contact, Blog)',
      '1-Tap WhatsApp & Direct Call Integration',
      'Appointment Inquiry Form with Instant Email Notifications',
      'Google Search Console & Basic Technical SEO Setup',
      'Medical Schema Markup for Doctor & Clinic',
      '1 Year Technical Support & Cloud Hosting Setup'
    ],
    idealFor: 'Independent doctors and specialty clinics needing a professional, fast digital presence.',
    popular: true
  },
  {
    id: 'practice-management-system',
    name: 'Practice Management System (HMS)',
    category: 'Enterprise / Systems',
    price: '₹75,000',
    billingPeriod: 'One-time',
    description: 'Cloud practice management solution to automate appointments, digital prescriptions, and patient records.',
    inclusions: [
      'Doctor & Staff Appointment Scheduling Portal',
      'Electronic Health Records (EHR) & Digital Prescriptions',
      'Automated Patient Appointment Reminders (SMS/WhatsApp)',
      'Billing, Invoicing, and Treatment Records Module',
      'Staff Training & Role-Based Access Configuration',
      'Secure Cloud Data Backup Architecture'
    ],
    idealFor: 'Polyclinics and busy medical practices transitioning from paper records to digital efficiency.'
  },
  {
    id: 'hospital-enterprise-solution',
    name: 'Hospital Enterprise Solution',
    category: 'Enterprise / Systems',
    price: 'Custom Quote',
    billingPeriod: 'Custom',
    description: 'Comprehensive digital infrastructure for multi-specialty hospitals, surgical centers, and healthcare groups.',
    inclusions: [
      'Multi-Department Architecture (Cardiology, Ortho, Neuro, etc.)',
      'Filterable Doctor Directory with Slot Booking Integration',
      'Emergency Triage & TPA / Insurance Empanelment Pages',
      'Multi-Location Infrastructure for Hospital Chains',
      'Dedicated Server Infrastructure, CDN & Security Hardening',
      'Full Healthcare SEO & Analytics Tracking Architecture'
    ],
    idealFor: 'Hospitals (50-500+ beds) seeking enterprise-level patient acquisition and brand dominance.'
  },
  {
    id: 'healthcare-social-starter',
    name: 'Healthcare Social Media Starter',
    category: 'Social Media',
    price: '₹15,000',
    billingPeriod: 'Monthly',
    description: 'Consistent, clinically accurate social media presence across Instagram and Facebook to engage local patients.',
    inclusions: [
      '12 Custom Medical Infographics & Educational Posts / Month',
      'Doctor Bio & Clinic Profile Optimization',
      'Monthly Health Awareness Days Content Planning',
      'Engaging Captions with Specialty Medical Hashtags',
      'Community Comments Monitoring & Inquiry Alerts',
      'Monthly Reach & Follower Growth Performance Report'
    ],
    idealFor: 'Clinics wanting an active, professional presence without investing in heavy video production.'
  },
  {
    id: 'practice-social-growth',
    name: 'Practice Social Media Growth',
    category: 'Social Media',
    price: '₹35,000',
    billingPeriod: 'Monthly',
    description: 'Doctor-led video reels, patient education, and multi-channel distribution for maximum patient engagement.',
    inclusions: [
      '20 Creative Assets/Month (Including 8 Edited Doctor Video Reels/Shorts)',
      'Video Scripting & Remote Recording Direction for Doctors',
      'Multi-Platform Management (Instagram, Facebook, LinkedIn, YouTube Shorts)',
      'Direct Patient Consultation Inquiry Routing to Clinic WhatsApp',
      'Monthly Brand Perception & Engagement Audit',
      'Dedicated Healthcare Social Media Strategist'
    ],
    idealFor: 'Specialists and clinics aiming for regional thought leadership and strong patient loyalty.',
    popular: true
  },
  {
    id: 'hospital-social-media',
    name: 'Hospital Social Media Management',
    category: 'Social Media',
    price: 'Custom Quote',
    billingPeriod: 'Custom',
    description: 'Full-scale social media and video documentary engine for multi-specialty hospitals and medical networks.',
    inclusions: [
      'Multi-Department Content Calendars for 6+ Specialties',
      'On-Site Doctor Interview & Patient Recovery Story Production',
      'Crisis Communication & Reputation Management Protocols',
      'Cross-Channel Distribution across YouTube, LinkedIn, Meta, and X',
      'Paid Social Ad Boosting & Conversion Tracking',
      'Bi-Weekly Strategy Meetings with Hospital Marketing Leadership'
    ],
    idealFor: 'Hospitals requiring high-volume institutional storytelling and community trust-building.'
  },
  {
    id: 'website-design-starter',
    name: 'Healthcare Website Design Starter',
    category: 'Website Design',
    price: '₹25,000',
    billingPeriod: 'One-time',
    description: 'Bespoke UI/UX design prototype in Figma tailored for clinics seeking a clean, trustworthy medical aesthetic.',
    inclusions: [
      'Custom Medical UI/UX Design (Figma Source File)',
      'Mobile & Desktop High-Fidelity Responsive Wireframes',
      'Doctor Profile & Treatment Service Templates',
      'Medical Color Palette & Typography Specification',
      'Interactive Clickable Prototype for Team Review'
    ],
    idealFor: 'Practices that have an internal development team but require world-class healthcare design.'
  },
  {
    id: 'website-design-pro',
    name: 'Healthcare Website Design Pro',
    category: 'Website Design',
    price: '₹39,000',
    billingPeriod: 'One-time',
    description: 'Advanced healthcare design system with deep patient journey research, appointment UI, and component libraries.',
    inclusions: [
      'Complete Healthcare Design System & Component Library',
      'Multi-Department Architecture & Treatment Pages (Up to 15 Screens)',
      'Patient Portal & Doctor Schedule UI Concepts',
      'Accessibility Audit (WCAG AA Compliance Guidelines)',
      'Developer Handoff Specifications with CSS Token Guides'
    ],
    idealFor: 'Healthcare startups, SaaS platforms, and expanding polyclinics needing scalable UI systems.'
  },
  {
    id: 'hospital-design-custom',
    name: 'Hospital Enterprise UI/UX Design',
    category: 'Website Design',
    price: 'Custom Quote',
    billingPeriod: 'Custom',
    description: 'Bespoke digital design for hospital networks, patient portals, and comprehensive medical web applications.',
    inclusions: [
      'Comprehensive Patient Journey Research & Persona Mapping',
      'Design for Patient Portals, Doctor Dashboards, & Hospital Portals (30+ Screens)',
      'Interactive Prototypes with Usability Testing Validation',
      'Design Token Integration for React / Next.js Engineering Teams',
      'Brand Style Guide for Offline & Online Marketing Consistency'
    ],
    idealFor: 'Hospital chains and enterprise healthcare technology platforms.'
  }
];

export interface ProcessStep {
  number: string;
  title: string;
  timeline: string;
  description: string;
  deliverables: string[];
}

export const processSteps: ProcessStep[] = [
  {
    number: '01',
    title: 'Discovery & Practice Audit',
    timeline: 'Week 1',
    description: 'We analyze your medical practice, patient demographics, clinical specialties, and current digital footprint.',
    deliverables: ['Digital Presence Audit Report', 'Competitor Catchment Analysis', 'Primary Opportunity Matrix']
  },
  {
    number: '02',
    title: 'Healthcare Market Analysis',
    timeline: 'Week 1–2',
    description: 'Deep evaluation of patient search queries, neighborhood medical demand, and aggregator competition in your city.',
    deliverables: ['Medical Keyword Demand Map', 'Neighborhood Catchment Analysis', 'Pricing & Positioning Assessment']
  },
  {
    number: '03',
    title: 'Strategic Growth Blueprint',
    timeline: 'Week 2',
    description: 'Formulating a tailored multi-channel patient acquisition and branding plan aligned with your capacity.',
    deliverables: ['Channel Mix Strategy', 'Budget Allocation Plan', 'Expected Inbound Growth Milestones']
  },
  {
    number: '04',
    title: 'Information Architecture Planning',
    timeline: 'Week 2–3',
    description: 'Structuring treatment pages, doctor profiles, and appointment funnels to remove all patient decision friction.',
    deliverables: ['Sitemap & URL Architecture', 'User Journey Flowcharts', 'Conversion Point Specifications']
  },
  {
    number: '05',
    title: 'UI/UX Design & Prototyping',
    timeline: 'Week 3–4',
    description: 'Designing empathetic, accessible, and modern healthcare interfaces that build immediate patient trust.',
    deliverables: ['Figma High-Fidelity Mockups', 'Mobile-Responsive Layouts', 'Interactive Clickable Prototype']
  },
  {
    number: '06',
    title: 'Full-Stack Development',
    timeline: 'Week 4–6',
    description: 'Engineering sub-second web applications with secure form routing, WhatsApp APIs, and clean code.',
    deliverables: ['Production-Grade Web Application', 'Content Management System', 'Form & Notification Integrations']
  },
  {
    number: '07',
    title: 'SEO & Campaign Architecture',
    timeline: 'Week 6–7',
    description: 'Deploying Medical Schema, Google Business Profile optimizations, and tightly budgeted search ad campaigns.',
    deliverables: ['Schema.org Verification', 'Google Ads Account Structure', 'Local Directory Citations Setup']
  },
  {
    number: '08',
    title: 'Rigorous Quality Launch',
    timeline: 'Week 7',
    description: 'Testing cross-browser performance, mobile responsiveness, lead delivery, and security before public release.',
    deliverables: ['Pre-Launch QA Checklist', 'SSL & DNS Verification', 'Live Production Deployment']
  },
  {
    number: '09',
    title: 'Ongoing Optimization & CRO',
    timeline: 'Ongoing',
    description: 'Iterating ad keywords, testing landing page call-to-actions, and refining inquiry conversion rates continuously.',
    deliverables: ['Weekly Bid Adjustments', 'A/B Testing Experiments', 'Negative Keyword Refinements']
  },
  {
    number: '10',
    title: 'Transparent Reporting & Strategy Reviews',
    timeline: 'Monthly',
    description: 'Comprehensive monthly reporting covering patient inquiries, search visibility, ad spend, and next-month priorities.',
    deliverables: ['Executive Performance Dashboard', 'Call Attribution Analytics', 'Quarterly Growth Roadmap']
  }
];

export interface BlogPost {
  id: string;
  slug: string;
  title: string;
  category: string;
  excerpt: string;
  date: string;
  readingTime: string;
  author: string;
  content: string;
}

export const blogPosts: BlogPost[] = [
  {
    id: 'local-seo-guide-clinics-2026',
    slug: 'local-seo-guide-for-clinics',
    title: 'How Clinics Can Win The Google 3-Pack in 2026 Without Aggregators',
    category: 'Local SEO',
    excerpt: 'A practical, actionable framework for doctors and clinics to claim, optimize, and rank their Google Business Profile in neighborhood searches.',
    date: 'February 2026',
    readingTime: '6 min read',
    author: 'Healthcare SEO Strategist',
    content: `When prospective patients experience acute symptoms or need specialized consultations, over 80% search locally on mobile devices using queries like "pediatrician near me" or "best dental clinic in [Area]". 

For independent clinics, appearing in the top three Google Maps results (the Google 3-Pack) is the single most valuable digital asset. Unlike aggregator platforms that charge high per-lead fees and list competing practitioners on the same page, your Google Business Profile directs the patient straight to your clinic reception.

### 1. Pinpoint Category Selection
The primary category on your Google Business Profile holds immense ranking weight. If you are an orthopedic surgeon, choosing "Orthopedic Clinic" or "Orthopedic Surgeon" rather than generic "Medical Clinic" immediately clarifies your clinical focus to Google's ranking algorithms.

### 2. High-Intent Medical Attributes
Google allows clinics to specify critical operational details: walk-in availability, wheelchair accessibility, appointment requirements, and insurance acceptance. Completing every attribute signals trustworthiness and completeness.

### 3. Review Velocity Over Raw Review Count
Google favors active, recently verified patient feedback over a profile that accumulated 50 reviews two years ago and went dormant. Establish an ethical, polite post-consultation workflow requesting feedback from satisfied patients.`
  },
  {
    id: 'google-ads-budget-waste-hospitals',
    slug: 'stopping-google-ads-budget-waste-healthcare',
    title: '5 Reasons Healthcare Google Ads Waste 40% of Budget (And How to Fix It)',
    category: 'Google Ads',
    excerpt: 'Why generic symptom bidding causes clinics to bleed budget on informational queries instead of qualified treatment inquiries.',
    date: 'January 2026',
    readingTime: '5 min read',
    author: 'PPC Healthcare Lead',
    content: `Google Ads is often the fastest vehicle to generate patient inquiries for surgical procedures and specialized consultations. However, because health-related searches carry immense search volume, unoptimized accounts quickly burn thousands of rupees on clicks from people seeking home remedies or academic answers.

### The Negative Keyword Blind Spot
If your clinic bids on "knee pain treatment", you will inevitably pay for queries like "knee pain home remedies", "knee pain exercises yoga", and "why does my knee hurt after running". By building exhaustive negative keyword lists that exclude non-commercial intent, your budget is preserved strictly for consultation-ready patients.

### Mobile Landing Page Friction
Over 75% of healthcare ad clicks originate on smartphones. If your ad points to a heavy homepage requiring multiple clicks to find doctor credentials, visitors will bounce within seconds. Dedicated, lightweight landing pages with 1-tap WhatsApp and call buttons double conversion efficiency.`
  },
  {
    id: 'doctor-personal-brand-equity',
    slug: 'why-doctors-need-personal-websites',
    title: 'Why Senior Doctors Must Build Digital Brand Equity Independent of Hospitals',
    category: 'Doctor Marketing',
    excerpt: 'Understanding why personal domain ownership protects your clinical reputation and patient following throughout your medical career.',
    date: 'March 2026',
    readingTime: '7 min read',
    author: 'Medical Brand Strategist',
    content: `For decades, doctors relied on hospital institutional prestige to fill their OPD waiting rooms. However, the modern healthcare landscape is increasingly patient-centric. Patients seek out individual surgeons based on peer reviews, video explanations, and published credentials.

### Portability of Your Clinical Reputation
When you consult across multiple hospitals or transition into your own private day-care center, having a dedicated personal website (e.g., drfirstname.com) ensures your search rankings and patient relationships remain permanently with you.

### Establishing Thought Leadership
A personal website serves as the definitive digital repository for your academic papers, surgical milestones, patient education guides, and media appearances, distinguishing your clinical authority from commercial clinic chains.`
  }
];

export interface ResourceItem {
  id: string;
  title: string;
  slug: string;
  type: 'Guide' | 'Checklist' | 'Audit' | 'Template';
  description: string;
  format: string;
  pagesOrItems: string;
}

export const resourcesData: ResourceItem[] = [
  {
    id: 'healthcare-seo-guide',
    title: 'The Comprehensive Healthcare SEO Playbook',
    slug: 'healthcare-seo-guide',
    type: 'Guide',
    description: 'A 28-page strategic guide covering Google medical E-E-A-T guidelines, symptom keyword mapping, and physician schema implementation.',
    format: 'PDF Guide',
    pagesOrItems: '28 Pages'
  },
  {
    id: 'medical-website-checklist',
    title: 'Healthcare Website Conversion & Compliance Checklist',
    slug: 'medical-website-checklist',
    type: 'Checklist',
    description: 'A 45-point checklist verifying mobile page speed, patient accessibility, doctor bio credentials, and 1-tap booking flows.',
    format: 'Actionable Checklist',
    pagesOrItems: '45 Points'
  },
  {
    id: 'clinic-marketing-checklist',
    title: 'Neighborhood Clinic Patient Growth Checklist',
    slug: 'clinic-marketing-checklist',
    type: 'Checklist',
    description: 'Step-by-step action plan to dominate local search, optimize Google Business Profile, and generate 5-star patient reviews.',
    format: 'PDF Checklist',
    pagesOrItems: '30 Action Items'
  },
  {
    id: 'healthcare-google-ads-guide',
    title: 'High-Intent Google Ads Architecture for Doctors & Hospitals',
    slug: 'healthcare-google-ads-guide',
    type: 'Guide',
    description: 'Blueprint for structuring surgical campaigns, negative keyword lists, and landing pages that drive qualified inquiries.',
    format: 'Strategic Guide',
    pagesOrItems: '22 Pages'
  },
  {
    id: 'healthcare-social-media-guide',
    title: 'Doctor & Hospital Social Media Playbook',
    slug: 'healthcare-social-media-guide',
    type: 'Guide',
    description: 'How doctors can script engaging 60-second educational reels and build authentic community trust without ethical breaches.',
    format: 'Content Playbook',
    pagesOrItems: '18 Pages'
  }
];

export interface LocationItem {
  city: string;
  slug: string;
  state: string;
  region: string;
  description: string;
  healthcareContext: string;
  keySpecialtiesInDemand: string[];
}

export const locationsData: LocationItem[] = [
  {
    city: 'Delhi',
    slug: 'delhi',
    state: 'Delhi NCR',
    region: 'North India',
    description: 'Comprehensive healthcare digital marketing and patient acquisition services for hospitals, doctors, and clinics across South, North, West, and East Delhi.',
    healthcareContext: 'As the nation’s premier medical hub, Delhi features intense competition among renowned multi-specialty hospitals, private diagnostic centers, and specialized clinics. Dominating local map packs and high-intent surgical search is vital.',
    keySpecialtiesInDemand: ['Cardiology', 'Orthopedics', 'IVF & Fertility', 'Oncology', 'Dermatology & Aesthetics']
  },
  {
    city: 'Gurugram',
    slug: 'gurugram',
    state: 'Haryana',
    region: 'North India',
    description: 'Healthcare SEO, Google Ads, and patient growth solutions tailored for corporate hospitals and premium clinics in Gurugram.',
    healthcareContext: 'Gurugram boasts a tech-savvy patient demographic that expects frictionless mobile appointment booking, video consultations, and transparent doctor credentials.',
    keySpecialtiesInDemand: ['Robotic Joint Replacement', 'Dental Implants', 'Mental Health & Psychiatry', 'Pediatrics']
  },
  {
    city: 'Noida',
    slug: 'noida',
    state: 'Uttar Pradesh',
    region: 'North India',
    description: 'Digital marketing and local SEO strategies for hospitals, polyclinics, and diagnostic centers across Noida and Greater Noida.',
    healthcareContext: 'Rapid residential growth across Noida sectors has created massive demand for trusted neighborhood family clinics and specialized maternity hospitals.',
    keySpecialtiesInDemand: ['Gynecology & Maternity', 'Dental Care', 'Eye Care & LASIK', 'General Surgery']
  },
  {
    city: 'Ghaziabad',
    slug: 'ghaziabad',
    state: 'Uttar Pradesh',
    region: 'North India',
    description: 'Patient lead generation and healthcare website development for clinics and nursing homes across Ghaziabad and NCR East.',
    healthcareContext: 'Patients frequently commute to Delhi for tertiary care. Local clinics can capture immense volume by demonstrating clinical excellence and convenience.',
    keySpecialtiesInDemand: ['Orthopedics', 'Pediatrics', 'Diagnostics & Pathology', 'Ayurveda']
  },
  {
    city: 'Faridabad',
    slug: 'faridabad',
    state: 'Haryana',
    region: 'North India',
    description: 'Targeted healthcare digital marketing helping doctors and medical centers in Faridabad expand their patient reach.',
    healthcareContext: 'With rapid medical infrastructure development, Faridabad healthcare providers benefit significantly from structured Google Maps optimization.',
    keySpecialtiesInDemand: ['Cardiology', 'Dental Implants', 'General Surgery', 'Eye Care']
  },
  {
    city: 'Mumbai',
    slug: 'mumbai',
    state: 'Maharashtra',
    region: 'West India',
    description: 'High-impact healthcare digital marketing, doctor personal branding, and SEO for practices across Mumbai, Thane, and Navi Mumbai.',
    healthcareContext: 'Mumbai’s healthcare market is characterized by dense local clusters where neighborhood proximity and doctor reputation drive 90% of patient choices.',
    keySpecialtiesInDemand: ['Cosmetic Dermatology', 'IVF & Fertility', 'Robotic Surgery', 'Oncology', 'Cardiology']
  },
  {
    city: 'Pune',
    slug: 'pune',
    state: 'Maharashtra',
    region: 'West India',
    description: 'Patient acquisition funnels and clinic websites for healthcare practitioners in Pune, PCMC, and surrounding regions.',
    healthcareContext: 'Pune’s educated working population heavily researches doctor qualifications, hospital accreditations, and patient feedback online before booking.',
    keySpecialtiesInDemand: ['Orthopedics & Sports Medicine', 'Dental Aligners', 'Mental Wellness', 'Pediatrics']
  },
  {
    city: 'Bengaluru',
    slug: 'bengaluru',
    state: 'Karnataka',
    region: 'South India',
    description: 'Cutting-edge digital health marketing, SEO, and clinic automation for medical centers in Bengaluru.',
    healthcareContext: 'India’s technology capital demands digital-first healthcare experiences: instant online appointments, telemedicine options, and verified clinical content.',
    keySpecialtiesInDemand: ['IVF & Fertility', 'Robotic Surgery', 'Dental Aesthetics', 'Dermatology', 'Mental Health']
  },
  {
    city: 'Hyderabad',
    slug: 'hyderabad',
    state: 'Telangana',
    region: 'South India',
    description: 'Digital growth solutions for hospitals and super-specialty clinics across Hyderabad and Secunderabad.',
    healthcareContext: 'A major hub for medical tourism and tertiary care, Hyderabad hospitals require both domestic regional SEO and international patient acquisition campaigns.',
    keySpecialtiesInDemand: ['Cardiology & Heart Surgery', 'Gastroenterology', 'Joint Replacement', 'Nephrology']
  },
  {
    city: 'Chennai',
    slug: 'chennai',
    state: 'Tamil Nadu',
    region: 'South India',
    description: 'Digital marketing and clinical reputation management for healthcare institutions in Chennai, the health capital of India.',
    healthcareContext: 'Chennai patients value clinical track record and diagnostic precision. Authoritative content and clinical schema deliver substantial organic results.',
    keySpecialtiesInDemand: ['Eye Care & Ophthalmology', 'Organ Transplant Centers', 'Cardiology', 'Orthopedics']
  },
  {
    city: 'Kolkata',
    slug: 'kolkata',
    state: 'West Bengal',
    region: 'East India',
    description: 'Patient growth and website development services for hospitals and specialist doctors across Kolkata and Eastern India.',
    healthcareContext: 'Kolkata serves as the primary medical referral hub for Eastern India and neighboring countries, making multi-channel patient discovery essential.',
    keySpecialtiesInDemand: ['Oncology', 'Cardiac Care', 'Neurology', 'Diagnostics & Pathology']
  },
  {
    city: 'Ahmedabad',
    slug: 'ahmedabad',
    state: 'Gujarat',
    region: 'West India',
    description: 'Healthcare marketing, Google Ads, and local SEO for hospitals, surgical clinics, and IVF centers across Ahmedabad.',
    healthcareContext: 'Ahmedabad features thriving specialty surgical centers that benefit from procedure-specific search campaigns and patient inquiry funnels.',
    keySpecialtiesInDemand: ['IVF & Infertility', 'Joint Replacement', 'Gastroenterology', 'Eye Surgery']
  },
  {
    city: 'Jaipur',
    slug: 'jaipur',
    state: 'Rajasthan',
    region: 'North India',
    description: 'Healthcare digital growth and website solutions for doctors, hospitals, and clinics across Jaipur.',
    healthcareContext: 'Jaipur attracts patients from across Rajasthan and neighboring states, making search visibility and clear doctor credentials top priorities.',
    keySpecialtiesInDemand: ['Orthopedics', 'Dental Tourism', 'Ayurveda & Integrative Medicine', 'Cardiology']
  },
  {
    city: 'Lucknow',
    slug: 'lucknow',
    state: 'Uttar Pradesh',
    region: 'North India',
    description: 'Healthcare SEO and clinic lead generation for healthcare practices and diagnostic facilities in Lucknow.',
    healthcareContext: 'As a major referral center for Central and Eastern UP, Lucknow hospitals need robust digital presences to capture expanding patient inquiry volume.',
    keySpecialtiesInDemand: ['Neurology', 'Orthopedics', 'Pediatrics & Neonatology', 'General Surgery']
  },
  {
    city: 'Chandigarh',
    slug: 'chandigarh',
    state: 'Punjab / Haryana',
    region: 'North India',
    description: 'Premium healthcare digital marketing and doctor branding for clinics in Chandigarh, Mohali, and Panchkula (Tricity).',
    healthcareContext: 'Tricity patients seek premier medical care with high clinical standards. Modern website design and transparent consultation booking yield high conversions.',
    keySpecialtiesInDemand: ['Cosmetic & Plastic Surgery', 'Dental Implants', 'Eye Care', 'Cardiology']
  },
  {
    city: 'Indore',
    slug: 'indore',
    state: 'Madhya Pradesh',
    region: 'Central India',
    description: 'Patient acquisition and healthcare website development for clinics and hospitals across Indore.',
    healthcareContext: 'The commercial and healthcare capital of Madhya Pradesh, Indore presents prime opportunities for clinics to dominate local search and Google Maps.',
    keySpecialtiesInDemand: ['Orthopedics', 'Cardiology', 'Dental Care', 'Diagnostics']
  },
  {
    city: 'Bhopal',
    slug: 'bhopal',
    state: 'Madhya Pradesh',
    region: 'Central India',
    description: 'Healthcare SEO, Google Ads, and digital branding for medical practitioners in Bhopal.',
    healthcareContext: 'Expanding hospital infrastructure in Bhopal requires structured digital strategies to build community trust and patient footfall.',
    keySpecialtiesInDemand: ['Gynecology', 'Pediatrics', 'Eye Care', 'General Medicine']
  },
  {
    city: 'Surat',
    slug: 'surat',
    state: 'Gujarat',
    region: 'West India',
    description: 'Digital marketing and patient lead generation for healthcare centers and private clinics in Surat.',
    healthcareContext: 'A vibrant industrial metropolis where private specialty clinics thrive through hyper-local advertising and mobile appointment booking.',
    keySpecialtiesInDemand: ['Dental Implants', 'Eye Hospitals', 'Cosmetic Dermatology', 'Maternity Care']
  },
  {
    city: 'Patna',
    slug: 'patna',
    state: 'Bihar',
    region: 'East India',
    description: 'Healthcare website development and digital marketing for doctors and hospitals in Patna.',
    healthcareContext: 'As the primary healthcare destination for Bihar, Patna doctors who establish verified Google profiles and informative websites capture dominant patient flow.',
    keySpecialtiesInDemand: ['Orthopedics', 'Cardiology', 'Neurology', 'Pathology & Diagnostics']
  },
  {
    city: 'Kanpur',
    slug: 'kanpur',
    state: 'Uttar Pradesh',
    region: 'North India',
    description: 'Healthcare digital growth and local SEO for medical centers and polyclinics in Kanpur.',
    healthcareContext: 'Local patients increasingly search on mobile for trusted specialists, making Google Maps rankings and fast WhatsApp inquiries highly effective.',
    keySpecialtiesInDemand: ['Cardiology', 'Eye Care', 'Pediatrics', 'Orthopedics']
  },
  {
    city: 'Nagpur',
    slug: 'nagpur',
    state: 'Maharashtra',
    region: 'Central India',
    description: 'Strategic healthcare marketing for hospitals and clinics in Nagpur, the medical heart of Central India.',
    healthcareContext: 'Nagpur attracts patients from Madhya Pradesh, Chhattisgarh, and Vidarbha, demanding high search visibility and easy online appointment scheduling.',
    keySpecialtiesInDemand: ['Oncology', 'Spine & Joint Replacement', 'Cardiology', 'Diagnostics']
  },
  {
    city: 'Coimbatore',
    slug: 'coimbatore',
    state: 'Tamil Nadu',
    region: 'South India',
    description: 'Digital marketing and clinic SEO for healthcare institutions and doctors in Coimbatore.',
    healthcareContext: 'Known for high-quality, ethical healthcare delivery, Coimbatore clinics benefit from evidence-based marketing and authoritative patient education.',
    keySpecialtiesInDemand: ['Orthopedics', 'Eye Care', 'Ayurveda', 'Dental Implants']
  },
  {
    city: 'Kochi',
    slug: 'kochi',
    state: 'Kerala',
    region: 'South India',
    description: 'Medical tourism marketing, website development, and SEO for healthcare providers in Kochi and Kerala.',
    healthcareContext: 'Kochi is an international hub for medical tourism and wellness healthcare, requiring multilingual patient funnels and global search visibility.',
    keySpecialtiesInDemand: ['Ayurveda & Wellness', 'Cardiology', 'Robotic Surgery', 'Fertility Care']
  },
  {
    city: 'Dehradun',
    slug: 'dehradun',
    state: 'Uttarakhand',
    region: 'North India',
    description: 'Local healthcare SEO, clinic websites, and patient acquisition for doctors across Dehradun and the Garhwal region.',
    healthcareContext: 'Dehradun serves as the medical gateway for Uttarakhand, with strong patient demand for trustworthy specialists and modern diagnostic centers.',
    keySpecialtiesInDemand: ['Orthopedics', 'Eye Surgery', 'Dental Care', 'Diagnostics & Pathology']
  }
];

export interface FaqItem {
  id: string;
  category: string;
  question: string;
  answer: string;
}

export const faqsData: FaqItem[] = [
  // Healthcare SEO
  {
    id: 'seo-1',
    category: 'Healthcare SEO',
    question: 'How is Healthcare SEO different from generic commercial SEO?',
    answer: 'Healthcare SEO is governed by Google’s strict "Your Money or Your Life" (YMYL) standards and E-E-A-T (Experience, Expertise, Authoritativeness, and Trustworthiness) guidelines. Medical content must be clinically accurate, authored or reviewed by certified medical professionals, and structured with specialized MedicalWebPage, Physician, and Hospital schema markup.'
  },
  {
    id: 'seo-2',
    category: 'Healthcare SEO',
    question: 'How long does it take for a clinic or hospital to rank on Google?',
    answer: 'Typically, local search visibility and Google 3-Pack improvements begin appearing within 6 to 10 weeks of optimizing Google Business Profiles and local citations. Broader organic search rankings for competitive medical specialty keywords stabilize across 4 to 6 months of systematic content and technical optimization.'
  },
  {
    id: 'seo-3',
    category: 'Healthcare SEO',
    question: 'Can Healthcare SEO help independent doctors compete with large aggregator sites?',
    answer: 'Yes. While aggregators rank for broad informational terms, Google’s local algorithms heavily prioritize proximity, verified clinic addresses, and specialized doctor credentials for "near me" and localized medical treatment queries. A well-optimized clinic profile consistently outranks national directories in its local catchment area.'
  },
  {
    id: 'seo-4',
    category: 'Healthcare SEO',
    question: 'What is medical schema markup and why is it crucial?',
    answer: 'Medical schema is standardized code (using Schema.org vocabulary such as MedicalCondition, MedicalProcedure, and Physician) embedded into your website. It allows search engines to directly understand doctor qualifications, medical council registration numbers, consultation timings, and hospital departments.'
  },

  // Website Development
  {
    id: 'web-1',
    category: 'Website Development',
    question: 'What makes a healthcare website truly conversion-focused?',
    answer: 'A high-converting healthcare website loads in under 1.5 seconds on mobile, presents clear doctor credentials and qualifications upfront, simplifies complex treatment explanations into patient-friendly language, and provides prominent 1-tap WhatsApp and call booking triggers without intrusive popups.'
  },
  {
    id: 'web-2',
    category: 'Website Development',
    question: 'What is included in the ₹35,000 Clinic Website Development package?',
    answer: 'Our verified Clinic Website package includes custom responsive design, up to 8 dedicated pages (Home, About, Services, Doctor Bio, Contact, Blog), 1-tap WhatsApp and direct call triggers, appointment inquiry forms with instant email routing, Google Search Console integration, medical schema markup, and 1 year of technical maintenance.'
  },
  {
    id: 'web-3',
    category: 'Website Development',
    question: 'Can clinic reception staff easily update doctor timings and blog articles?',
    answer: 'Yes. All websites developed by Web Leading India come with an intuitive, clean content management interface that allows clinic staff to update consultation timings, add new doctor profiles, and publish patient health articles without touching any code.'
  },
  {
    id: 'web-4',
    category: 'Website Development',
    question: 'Are your healthcare websites compliant with patient data security standards?',
    answer: 'Yes. We implement HTTPS SSL encryption, secure API-based form handling, sanitize all user inputs to prevent injection attacks, and avoid storing sensitive medical records in unsecured browser storage.'
  },

  // Google Ads & PPC
  {
    id: 'ads-1',
    category: 'Google Ads',
    question: 'How do you prevent wasted ad spend on non-paying health queries?',
    answer: 'We utilize rigorous negative keyword lists comprising hundreds of non-commercial terms (such as "home remedies", "free", "causes of", "wikipedia", "homeopathy for surgical conditions") and bid strictly on consultation, procedure, and specialist intent phrases within your geographical catchment radius.'
  },
  {
    id: 'ads-2',
    category: 'Google Ads',
    question: 'Does Web Leading India guarantee a specific number of patient leads or ROI?',
    answer: 'In accordance with ethical marketing principles and medical advertising standards, Web Leading India does not make unsubstantiated or guaranteed lead claims. Instead, we provide transparent cost-per-click management, verified call tracking, and continuous conversion rate optimization.'
  },
  {
    id: 'ads-3',
    category: 'Google Ads',
    question: 'What budget is recommended for a clinic starting with Google Ads?',
    answer: 'Ad budgets vary based on clinical specialty and city competition. For a neighborhood dental or specialized clinic in an Indian metro, a starting media budget of ₹20,000 to ₹35,000 per month typically allows for sufficient high-intent click volume to generate meaningful consultation inquiries.'
  },

  // Social Media Marketing
  {
    id: 'smm-1',
    category: 'Social Media',
    question: 'Why should doctors invest in short-form video and reels?',
    answer: 'Short videos humanize the medical professional, allowing anxious patients to hear the doctor’s reassuring voice and understand their bedside manner before scheduling an appointment. Video content consistently achieves 5x greater engagement than static images on modern social platforms.'
  },
  {
    id: 'smm-2',
    category: 'Social Media',
    question: 'How much time does a busy doctor need to dedicate to social media each month?',
    answer: 'With our structured scripting and batch recording framework, doctors only need to invest 60 to 90 minutes once a month. Our team prepares the scripts, guides the recording, and handles all editing, captioning, and publishing.'
  },
  {
    id: 'smm-3',
    category: 'Social Media',
    question: 'What is included in the ₹15,000 Healthcare Social Media Starter plan?',
    answer: 'It includes 12 professionally branded medical infographics and educational posts per month, clinic profile optimization, monthly health awareness day planning, verified medical hashtag strategy, community comment monitoring, and monthly performance reports.'
  },

  // Lead Generation & Patient Acquisition
  {
    id: 'lead-1',
    category: 'Lead Generation',
    question: 'How quickly does the clinic receive incoming digital inquiries?',
    answer: 'Inquiries are delivered instantaneously (within seconds) via automated WhatsApp alerts, SMS notifications, and email directly to the clinic front desk or patient coordinator.'
  },
  {
    id: 'lead-2',
    category: 'Lead Generation',
    question: 'What is the role of clinic front-desk staff in digital marketing success?',
    answer: 'Front-desk response speed is critical. Studies show patient inquiries responded to within 5 minutes convert at a 400% higher rate than inquiries followed up after hours. We provide reception inquiry handling guidelines to ensure maximum consultation show-up rates.'
  },

  // Hospital Marketing
  {
    id: 'hosp-1',
    category: 'Hospital Marketing',
    question: 'How do you structure digital marketing for 10+ hospital departments?',
    answer: 'We treat each major department (Cardiology, Orthopedics, Oncology, Neuro, etc.) as an independent digital growth engine with dedicated procedure landing pages, focused search campaigns, and tailored doctor profiles, rather than grouping them under generic hospital banners.'
  },
  {
    id: 'hosp-2',
    category: 'Hospital Marketing',
    question: 'Can you help hospitals attract regional and medical tourism patients?',
    answer: 'Yes. We run targeted campaigns across feeder cities and regional districts highlighting tertiary surgical capabilities, dedicated patient concierges, tele-consultation second opinions, and travel coordination.'
  },

  // Doctor Personal Branding
  {
    id: 'doc-1',
    category: 'Doctor Marketing',
    question: 'Why should a doctor have an independent website if they work at a renowned hospital?',
    answer: 'A personal web domain is portable personal brand equity that stays with you throughout your medical career. When you change hospital attachments or open private consulting suites, your patient followers, search rankings, and reviews remain permanently intact.'
  },
  {
    id: 'doc-2',
    category: 'Doctor Marketing',
    question: 'How does personal branding help with medical peer recognition?',
    answer: 'By curating published research, case presentations, and thought leadership articles on LinkedIn and personal channels, doctors gain invitations for national keynote addresses, panel discussions, and clinical collaborations.'
  },

  // Pricing & Engagement
  {
    id: 'price-1',
    category: 'Pricing',
    question: 'Are there hidden fees or long-term lock-in contracts?',
    answer: 'No. Web Leading India operates with complete pricing transparency. Website and technology development projects are billed on clear one-time milestones, and digital marketing retainers operate on flexible monthly agreements without lock-ins.'
  },
  {
    id: 'price-2',
    category: 'Pricing',
    question: 'Does the website development package include hosting and domain charges?',
    answer: 'We assist with cloud hosting setup and DNS configuration on client-owned accounts (e.g. AWS, Vercel, or Hostinger) to ensure you maintain 100% legal ownership of your domain and digital assets.'
  },

  // Process & Implementation
  {
    id: 'proc-1',
    category: 'Process',
    question: 'What is the onboarding process when engaging Web Leading India?',
    answer: 'Engagement begins with a Discovery & Practice Audit call, followed by a customized Growth Blueprint within 5 business days. Once approved, our team initiates technical setup, landing page development, and campaign architecture across weeks 2 to 4.'
  },
  {
    id: 'proc-2',
    category: 'Process',
    question: 'How frequently does Web Leading India provide progress and ROI reporting?',
    answer: 'We provide real-time dashboard access to incoming inquiries, bi-weekly campaign optimization updates, and a comprehensive monthly review call covering search rankings, call volume, and next-month priorities.'
  },

  // Healthcare Technology
  {
    id: 'tech-1',
    category: 'Healthcare Technology',
    question: 'What is the Practice Management System (₹75,000 package) built for?',
    answer: 'It is a comprehensive clinic automation platform covering patient appointment scheduling, digital prescription generation, electronic health records (EHR), automated WhatsApp reminders, and daily billing reports, customized for private practices.'
  },
  {
    id: 'tech-2',
    category: 'Healthcare Technology',
    question: 'Can Web Leading India integrate with existing hospital HMS and CRM software?',
    answer: 'Yes. Our full-stack engineering team has extensive experience integrating medical websites with third-party clinic CRMs, telephony systems (like CallRail, Knowlarity, Exotel), and custom hospital management databases via REST APIs.'
  }
];
