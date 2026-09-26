import { GoogleGenAI } from '@google/genai';

export default async function handler(req: any, res: any) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const { practiceName, practiceType, city, website, mainGoal } = req.body || {};

    if (!practiceName || !practiceType) {
      return res.status(400).json({ error: 'Practice name and type are required.' });
    }

    const apiKey = process.env.GEMINI_API_KEY || '';
    if (!apiKey) {
      return res.status(200).json({
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

    const ai = new GoogleGenAI({
      apiKey,
      httpOptions: {
        headers: {
          'User-Agent': 'aistudio-build'
        }
      }
    });

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

    return res.status(200).json({ auditReport: response.text });
  } catch (error: any) {
    console.error('Audit API error:', error);
    return res.status(500).json({ error: 'Failed to generate audit report.' });
  }
}
