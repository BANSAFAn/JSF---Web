import express from 'express';
import cors from 'cors';
import { GoogleGenerativeAI } from '@google/generative-ai';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(express.json({ limit: '50mb' }));

// Initialize Gemini API
const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);
const model = genAI.getGenerativeModel({ model: 'gemini-pro' });
const visionModel = genAI.getGenerativeModel({ model: 'gemini-pro-vision' });

// Chat endpoint
app.post('/api/chat', async (req, res) => {
  try {
    const { message, context, attachments } = req.body;
    
    // If there are image attachments, use the vision model
    if (attachments && attachments.some(att => att.type === 'image')) {
      const imageAttachments = attachments.filter(att => att.type === 'image');
      const imagePromises = imageAttachments.map(async (attachment) => {
        // Convert data URL to base64
        const base64Data = attachment.url.split(',')[1];
        return {
          inlineData: {
            data: base64Data,
            mimeType: 'image/jpeg'
          }
        };
      });
      
      const imageContents = await Promise.all(imagePromises);
      
      // Prepare prompt with context
      const prompt = `Context: You are an AI assistant for a Minecraft Java Finder application. 
      The user is looking for help with Minecraft Java Edition. ${context || ''}
      
      User message: ${message}`;
      
      const result = await visionModel.generateContent([prompt, ...imageContents]);
      const response = await result.response;
      const text = response.text();
      
      return res.json({ response: text });
    } else {
      // Use text-only model
      const prompt = `Context: You are an AI assistant for a Minecraft Java Finder application. 
      The user is looking for help with Minecraft Java Edition. ${context || ''}
      
      User message: ${message}`;
      
      const result = await model.generateContent(prompt);
      const response = await result.response;
      const text = response.text();
      
      return res.json({ response: text });
    }
  } catch (error) {
    console.error('Error processing chat request:', error);
    res.status(500).json({ error: 'Failed to process request', details: error.message });
  }
});

// Start server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});