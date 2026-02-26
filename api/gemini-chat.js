const GEMINI_API_URL =
  'https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent';

function readMessage(body) {
  if (!body) return '';

  if (typeof body === 'string') {
    try {
      const parsed = JSON.parse(body);
      return typeof parsed.message === 'string' ? parsed.message : '';
    } catch {
      return '';
    }
  }

  if (typeof body === 'object' && typeof body.message === 'string') {
    return body.message;
  }

  return '';
}

function extractReply(payload) {
  const parts = payload?.candidates?.[0]?.content?.parts;
  if (!Array.isArray(parts)) return '';

  return parts
    .map(part => (typeof part?.text === 'string' ? part.text : ''))
    .join('')
    .trim();
}

function buildPrompt(userMessage) {
  return [
    'You are the website assistant for Nino Mark Zaspa (Mackey).',
    'Answer in 2-4 short sentences and stay specific to his portfolio.',
    'If something is unknown, say you do not have that detail and suggest contacting him directly.',
    '',
    'Known details:',
    '- Role: Junior Web Developer',
    '- Location: Santa Fe, Cebu',
    '- Skills: HTML, CSS, JavaScript, PHP, Laravel, MySQL, Tailwind, Bootstrap',
    '- Projects: Visitor Logbook with Face Capture, SFNHS SSLG Voting System, Vibe Map, Barangay Management',
    '- Contact email: ninomarkzaspa27@gmail.com',
    '- LinkedIn: linkedin.com/in/ni%C3%B1o-mark-zaspa-8312b8395/',
    '',
    `User question: ${userMessage}`
  ].join('\n');
}

module.exports = async (req, res) => {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const apiKey = process.env.GEMINI_API_KEY;
  if (!apiKey) {
    return res.status(500).json({ error: 'Missing GEMINI_API_KEY' });
  }

  const message = readMessage(req.body).trim();
  if (!message) {
    return res.status(400).json({ error: 'Message is required' });
  }

  if (message.length > 1200) {
    return res.status(400).json({ error: 'Message is too long' });
  }

  try {
    const response = await fetch(`${GEMINI_API_URL}?key=${encodeURIComponent(apiKey)}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        generationConfig: {
          temperature: 0.6,
          maxOutputTokens: 280
        },
        contents: [
          {
            role: 'user',
            parts: [{ text: buildPrompt(message) }]
          }
        ]
      })
    });

    const payload = await response.json().catch(() => ({}));
    const reply = extractReply(payload);

    if (!response.ok || !reply) {
      const apiError =
        payload?.error?.message || `Gemini request failed with status ${response.status}`;
      throw new Error(apiError);
    }

    return res.status(200).json({ reply });
  } catch (error) {
    console.error('[gemini-chat] error:', error);
    return res.status(500).json({ error: 'Unable to generate a response right now.' });
  }
};
