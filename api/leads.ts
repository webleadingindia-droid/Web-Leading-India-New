export default async function handler(req: any, res: any) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const { name, phone, email, organization, industry, city, website, services, budget, message } = req.body || {};

    if (!name || !phone || !email) {
      return res.status(400).json({ error: 'Name, phone number, and email are required.' });
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return res.status(400).json({ error: 'Please provide a valid email address.' });
    }

    const refId = `LEAD-${Date.now()}-${Math.floor(Math.random() * 1000)}`;
    console.log(`[Vercel Lead Captured] ${refId} for ${name} (${organization || 'Individual'})`);

    return res.status(200).json({
      success: true,
      message: 'Your healthcare strategy consultation request has been received. Our team will connect with you within 24 business hours.',
      referenceId: refId
    });
  } catch (error: any) {
    console.error('Lead submission error:', error);
    return res.status(500).json({ error: 'Failed to process inquiry. Please call +91 8376817258 directly.' });
  }
}
