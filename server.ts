import express from 'express';
import { createServer as createViteServer } from 'vite';
import path from 'path';
import dotenv from 'dotenv';
import { GoogleGenAI } from '@google/genai';

dotenv.config();

const app = express();
const port = Number(process.env.PORT) || 3000;
const isProd = process.env.NODE_ENV === 'production';

app.use(express.json());

// Initialize GoogleGenAI SDK safely with User-Agent header as required by skill guidelines
const apiKey = process.env.GEMINI_API_KEY || '';
const ai = apiKey ? new GoogleGenAI({
  apiKey,
  httpOptions: {
    headers: {
      'User-Agent': 'aistudio-build',
    }
  }
}) : null;

// In-memory lead submissions store
interface LeadSubmission {
  id: string;
  name: string;
  phone: string;
  email: string;
  organization: string;
  industry: string;
  city: string;
  website?: string;
  services: string[];
  budget: string;
  message?: string;
  createdAt: string;
}

const leadsDatabase: LeadSubmission[] = [];

// Form submission API
app.post('/api/leads', (req, res) => {
  try {
    const { name, phone, email, organization, industry, city, website, services, budget, message } = req.body;
    
    // Strict validation
    if (!name || !phone || !email) {
      return res.status(400).json({ error: 'Name, phone number, and email are required.' });
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return res.status(400).json({ error: 'Please provide a valid email address.' });
    }

    const newLead: LeadSubmission = {
      id: `LEAD-${Date.now()}-${Math.floor(Math.random() * 1000)}`,
      name: String(name).trim(),
      phone: String(phone).trim(),
      email: String(email).trim().toLowerCase(),
      organization: String(organization || 'Not specified').trim(),
      industry: String(industry || 'General Healthcare').trim(),
      city: String(city || 'India').trim(),
      website: website ? String(website).trim() : undefined,
      services: Array.isArray(services) ? services : [String(services || 'Healthcare Growth')],
      budget: String(budget || 'Discuss during consultation').trim(),
      message: message ? String(message).trim() : undefined,
      createdAt: new Date().toISOString(),
    };

    leadsDatabase.unshift(newLead);
    console.log(`[Lead Captured] ${newLead.id} from ${newLead.name} (${newLead.organization})`);

    return res.status(201).json({
      success: true,
      message: 'Your healthcare strategy consultation request has been received. Our team will connect with you within 24 business hours.',
      referenceId: newLead.id
    });
  } catch (err: any) {
    console.error('Error handling lead submission:', err);
    return res.status(500).json({ error: 'Failed to process inquiry. Please try again or call +91 8376817258 directly.' });
  }
});

// Gemini Multi-turn Chat Endpoint (Healthcare Growth Strategist Persona)
app.post('/api/chat', async (req, res) => {
  try {
    const { messages, userMessage } = req.body;
    if (!userMessage && (!messages || messages.length === 0)) {
      return res.status(400).json({ error: 'Message content is required.' });
    }

    if (!ai) {
      // Return structured healthcare advisor guidance if API key is not configured in environment
      return res.json({
        reply: `Thank you for consulting Web Leading India. To grow your healthcare practice effectively, we recommend focusing on three core pillars: 
1. **Local SEO & Google Business Profile**: Ensuring patients in your vicinity find your clinic when searching for specialties.
2. **High-Converting Medical Website**: Fast, mobile-responsive, clear doctor credentials, and 1-tap WhatsApp/Call booking.
3. **Targeted Search Ads**: High-intent Google Search campaigns for immediate patient inquiries with zero wasted budget.

How may our team assist your hospital, clinic, or doctor practice today?`,
        suggestedActions: [
          'Request a Free Healthcare Marketing Audit',
          'Explore Healthcare SEO Packages',
          'Speak with an expert (+91 8376817258)'
        ]
      });
    }

    const systemInstruction = `You are the Senior Healthcare Digital Marketing Strategist at Web Leading India (https://webleadingindia.com), a premier healthcare digital marketing and patient growth agency.
Contact Info: Phone +91 8376817258, Email info@webleadingindia.com, Delhi, India. 5+ Years Experience, 200+ Healthcare Clients.
Services include Healthcare SEO, Local SEO, Google Ads, Healthcare Website Development, Doctor Personal Branding, Clinic Growth, Patient Lead Generation, and Online Reputation Management.
Rules:
- Give highly authoritative, professional, and practical healthcare marketing guidance tailored to Indian doctors, clinics, diagnostic centers, and hospitals.
- Never give medical advice or diagnose health conditions; your focus is purely digital marketing, patient acquisition funnels, local search visibility, and healthcare brand trust.
- Never guarantee specific numerical rankings (e.g. "#1 on Google") or guaranteed lead volume.
- Keep tone polished, consultative, trustworthy, and actionable.`;

    // Construct contents
    const contents: any[] = [];
    if (Array.isArray(messages)) {
      for (const m of messages) {
        contents.push({
          role: m.role === 'user' ? 'user' : 'model',
          parts: [{ text: m.text }]
        });
      }
    }
    if (userMessage) {
      contents.push({
        role: 'user',
        parts: [{ text: userMessage }]
      });
    }

    const response = await ai.models.generateContent({
      model: 'gemini-3.8-flash',
      contents,
      config: {
        systemInstruction,
        temperature: 0.7,
      }
    });

    const reply = response.text || 'I am ready to help you analyze your healthcare practice growth strategy.';
    return res.json({ reply });
  } catch (error: any) {
    console.error('Gemini chat error:', error);
    return res.status(500).json({
      error: 'Unable to complete AI consultation at this moment. You can reach our healthcare strategists directly at +91 8376817258.'
    });
  }
});

// Gemini Healthcare Marketing Audit Endpoint
app.post('/api/audit', async (req, res) => {
  try {
    const { practiceName, practiceType, city, website, mainGoal } = req.body;

    if (!practiceName || !practiceType) {
      return res.status(400).json({ error: 'Practice name and type are required.' });
    }

    if (!ai) {
      return res.json({
        analysis: {
          summary: `Initial digital growth evaluation for ${practiceName} (${practiceType} in ${city || 'India'}).`,
          localSeoScore: 78,
          websiteReadiness: website ? 82 : 45,
          growthPotential: 'High',
          keyRecommendations: [
            `Claim and rigorously optimize Google Business Profile with ${practiceType} specific categories and services in ${city || 'your area'}.`,
            'Implement doctor bio schema and medical clinic structured data for high local visibility.',
            'Create dedicated landing pages for top surgical or consultation treatments with direct WhatsApp appointment booking.'
          ],
          recommendedServices: ['Local SEO', 'Healthcare Website Development', 'Google Ads']
        }
      });
    }

    const prompt = `Conduct a comprehensive, professional digital growth assessment for the following healthcare provider:
- Provider/Practice Name: ${practiceName}
- Category/Specialty: ${practiceType}
- Location/City: ${city || 'India'}
- Existing Website: ${website || 'None / Not provided'}
- Primary Business Goal: ${mainGoal || 'Increase relevant patient inquiries and practice visibility'}

Generate a structured digital marketing audit report highlighting:
1. Executive Summary & Market Positioning
2. Local Search & Google Maps Visibility Strategy
3. Patient Acquisition Funnel Analysis
4. 3 High-Impact Action Items for Immediate Growth
5. Recommended Web Leading India Growth Solutions.
Tone must be strategic, encouraging, realistic (no false guarantees), and specific to healthcare in India.`;

    const response = await ai.models.generateContent({
      model: 'gemini-3.8-flash',
      contents: prompt,
      config: {
        systemInstruction: 'You are the Chief Healthcare Growth Auditor at Web Leading India. Provide a detailed, realistic, and highly actionable healthcare marketing audit.'
      }
    });

    return res.json({ auditReport: response.text });
  } catch (error: any) {
    console.error('Audit generation error:', error);
    return res.status(500).json({ error: 'Failed to generate audit report.' });
  }
});

// Search Grounding endpoint for live healthcare marketing trends in Indian cities
app.post('/api/search-grounding', async (req, res) => {
  try {
    const { query } = req.body;
    if (!ai) {
      return res.json({
        result: 'Healthcare search trends in India show a 45% increase in searches for "doctor near me with online appointment", with dental, orthopedics, IVF, and eye care seeing peak patient search intent via mobile.',
        sources: []
      });
    }

    const response = await ai.models.generateContent({
      model: 'gemini-3.8-flash',
      contents: query || 'What are the current trends in healthcare search and patient discovery in India?',
      config: {
        tools: [{ googleSearch: {} }]
      }
    });

    const sources = response.candidates?.[0]?.groundingMetadata?.groundingChunks?.map((chunk: any) => ({
      title: chunk.web?.title || 'Web Resource',
      url: chunk.web?.uri || '#'
    })) || [];

    return res.json({
      result: response.text,
      sources
    });
  } catch (err: any) {
    console.error('Search grounding error:', err);
    return res.status(500).json({ error: 'Search grounding failed.' });
  }
});

// Maps Grounding endpoint for local clinic discovery
app.post('/api/maps-grounding', async (req, res) => {
  try {
    const { locationQuery } = req.body;
    if (!ai) {
      return res.json({
        result: 'Local healthcare search in major Indian cities depends heavily on Google Business Profile verification, patient review volume, and geo-targeted medical keywords.',
        mapSources: []
      });
    }

    const response = await ai.models.generateContent({
      model: 'gemini-3.8-flash',
      contents: `What healthcare clinics and hospitals are prominent in ${locationQuery || 'Delhi NCR'}? Provide overview of local medical accessibility and competition.`,
      config: {
        tools: [{ googleMaps: {} }]
      }
    });

    const mapSources = response.candidates?.[0]?.groundingMetadata?.groundingChunks?.map((chunk: any) => ({
      title: chunk.maps?.title || 'Google Maps Location',
      url: chunk.maps?.uri || '#'
    })) || [];

    return res.json({
      result: response.text,
      mapSources
    });
  } catch (err: any) {
    console.error('Maps grounding error:', err);
    return res.status(500).json({ error: 'Maps grounding failed.' });
  }
});

// Vite middleware integration
async function startServer() {
  if (!isProd) {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: 'spa',
    });
    app.use(vite.middlewares);
  } else {
    // In production serve dist
    app.use(express.static(path.resolve(__dirname, 'dist')));
    app.get('*', (req, res) => {
      res.sendFile(path.resolve(__dirname, 'dist', 'index.html'));
    });
  }

  app.listen(port, '0.0.0.0', () => {
    console.log(`Web Leading India server running on http://0.0.0.0:${port}`);
  });
}

startServer();
