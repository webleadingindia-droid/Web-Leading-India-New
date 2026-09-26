import { GoogleGenAI } from '@google/genai';

export default async function handler(req: any, res: any) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const { messages, userMessage } = req.body || {};
    const apiKey = process.env.GEMINI_API_KEY || '';

    if (!apiKey) {
      return res.status(200).json({
        reply: `Thank you for consulting Web Leading India. To grow your healthcare practice effectively, we recommend focusing on three core pillars:
1. **Local SEO & Google Business Profile**: Ensuring patients in your vicinity find your clinic when searching for specialties.
2. **High-Converting Medical Website**: Fast, mobile-responsive, clear doctor credentials, and 1-tap WhatsApp/Call booking.
3. **Targeted Search Ads**: High-intent Google Search campaigns for immediate patient inquiries with zero wasted budget.

How may our team assist your hospital, clinic, or doctor practice today?`
      });
    }

    const ai = new GoogleGenAI({
      apiKey,
      httpOptions: {
        headers: {
          'User-Agent': 'aistudio-build'
        }
      }
    });

    const systemInstruction = `You are the Senior Healthcare Digital Marketing Strategist at Web Leading India (https://webleadingindia.com), a premier healthcare digital marketing and patient growth agency.
Contact Info: Phone +91 8376817258, Email info@webleadingindia.com, Delhi, India. 5+ Years Experience, 200+ Healthcare Clients.
Services include Healthcare SEO, Local SEO, Google Ads, Healthcare Website Development, Doctor Personal Branding, Clinic Growth, Patient Lead Generation, and Online Reputation Management.
Rules:
- Give highly authoritative, professional, and practical healthcare marketing guidance tailored to Indian doctors, clinics, diagnostic centers, and hospitals.
- Never give medical advice or diagnose health conditions; your focus is purely digital marketing, patient acquisition funnels, local search visibility, and healthcare brand trust.
- Never guarantee specific numerical rankings (e.g. "#1 on Google") or guaranteed lead volume.
- Keep tone polished, consultative, trustworthy, and actionable.`;

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

    return res.status(200).json({ reply: response.text || 'I am ready to help you analyze your healthcare practice growth strategy.' });
  } catch (error: any) {
    console.error('Chat API error:', error);
    return res.status(200).json({
      reply: 'Our healthcare strategy team can assist you directly. Please contact Web Leading India at +91 8376817258 or info@webleadingindia.com.'
    });
  }
}
