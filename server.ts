import express from 'express';
import { createServer as createViteServer } from 'vite';
import { GoogleGenAI } from '@google/genai';
import dotenv from 'dotenv';
import path from 'path';

dotenv.config();

const app = express();
const port = 3000;

app.use(express.json());

// Initialize Google GenAI client if key is available
const apiKey = process.env.GEMINI_API_KEY;
let ai: GoogleGenAI | null = null;
if (apiKey) {
  ai = new GoogleGenAI({
    apiKey: apiKey,
    httpOptions: {
      headers: {
        'User-Agent': 'aistudio-build',
      },
    },
  });
}

const SYSTEM_INSTRUCTION = `You are the AI Assistant for KLM Ventures (Smart Technology. Built Into Your Space).
KLM Ventures specializes in architectural smart home automation, Lutron lighting design, commercial AV, low-voltage cabling infrastructure, 24/7 security & CCTV, and enterprise Wi-Fi networks.
Target Phone for SMS / Direct dispatch: (323) 990-1101 (Mike / Lead Systems Engineer).

Your job:
1. Answer visitor questions professionally about smart home systems, Lutron, Control4, Crestron, Savant, Wi-Fi networking, cameras, and pre-wiring.
2. If the user wants to get in touch, request a quote, book a consultation, or send a text message directly to Mike, assist them in summarizing their request and offer to send a direct SMS to (323) 990-1101 via their device's SMS app (or click-to-SMS).
3. Be concise, luxurious, knowledgeable, and polite. Keep responses to 2-3 sentences where possible unless deep technical detail is requested.`;

// Chat endpoint
app.post('/api/chat', async (req, res) => {
  try {
    const { messages, userMessage } = req.body;

    if (!userMessage) {
      return res.status(400).json({ error: 'Message is required' });
    }

    let reply = '';
    if (ai) {
      try {
        // Format chat history
        const formattedContents = [];
        if (Array.isArray(messages)) {
          for (const msg of messages) {
            if (msg.role === 'user' || msg.role === 'assistant') {
              formattedContents.push({
                role: msg.role === 'assistant' ? 'model' : 'user',
                parts: [{ text: msg.content }],
              });
            }
          }
        }
        formattedContents.push({
          role: 'user',
          parts: [{ text: userMessage }],
        });

        const genPromise = ai.models.generateContent({
          model: 'gemini-3.8-flash',
          contents: formattedContents,
          config: {
            systemInstruction: SYSTEM_INSTRUCTION,
            temperature: 0.7,
          },
        });

        // Race with a 3.5s timeout so the chat user never experiences lag
        const timeoutPromise = new Promise<null>((_, reject) =>
          setTimeout(() => reject(new Error('AI generation timeout')), 3500)
        );

        const response: any = await Promise.race([genPromise, timeoutPromise]);
        reply = response?.text || '';
      } catch (genAiError) {
        console.warn('Gemini generateContent timeout/fallback triggered:', genAiError);
      }
    }

    if (!reply) {
      // High-quality contextual fallback
      const lower = userMessage.toLowerCase();
      reply = "Thank you for contacting KLM Ventures. I'm here to help with smart home automation, architectural lighting, security, and low-voltage infrastructure. Would you like to text Mike directly at (323) 990-1101?";
      if (lower.includes('lighting') || lower.includes('lutron') || lower.includes('dim')) {
        reply = "We engineer certified Lutron HomeWorks and RadioRA 3 architectural lighting controls, complete with warm-dim LEDs and motorized shading. Would you like me to prepare a direct text message for Mike regarding your lighting project?";
      } else if (lower.includes('price') || lower.includes('cost') || lower.includes('quote') || lower.includes('estimate')) {
        reply = "Every project is tailored to the architecture and scope of your residence or commercial facility. You can text Mike directly at (323) 990-1101 with your square footage and project scope for an immediate initial assessment.";
      } else if (lower.includes('security') || lower.includes('camera') || lower.includes('cctv')) {
        reply = "We deploy NDAA-compliant 4K IP security cameras, encrypted AI facial/vehicle perimeter alerts, and biometric access controls with zero monthly maintenance lock-ins.";
      }
    }

    return res.json({ reply });
  } catch (error) {
    console.error('Chat API error:', error);
    return res.json({
      reply: "We received your inquiry. You can send a direct text message to Mike at (323) 990-1101 right from your phone.",
    });
  }
});

// Vite middleware for development
async function startServer() {
  if (process.env.NODE_ENV !== 'production') {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: 'spa',
    });
    app.use(vite.middlewares);
  } else {
    app.use(express.static(path.resolve(__dirname, 'dist')));
    app.get('*', (req, res) => {
      res.sendFile(path.resolve(__dirname, 'dist', 'index.html'));
    });
  }

  app.listen(port, '0.0.0.0', () => {
    console.log(`KLM Ventures server running on port ${port}`);
  });
}

startServer();
