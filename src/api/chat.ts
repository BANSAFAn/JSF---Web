
// API endpoint для подключения к Gemini AI
// Этот файл нужно будет настроить с backend сервером

export interface ChatRequest {
  message: string;
  context?: string;
}

export interface ChatResponse {
  response: string;
  timestamp: string;
}

export const sendChatMessage = async (request: ChatRequest): Promise<ChatResponse> => {
  // В production версии здесь будет реальный API call к вашему backend
  // который будет использовать GEMINI_API_KEY из переменных окружения
  
  const response = await fetch('/api/chat', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(request),
  });

  if (!response.ok) {
    throw new Error('Failed to get AI response');
  }

  return response.json();
};

// Пример backend endpoint (Node.js/Express):
/*
app.post('/api/chat', async (req, res) => {
  try {
    const { GoogleGenerativeAI } = require('@google/generative-ai');
    const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);
    
    const model = genAI.getGenerativeModel({ model: 'gemini-pro' });
    const { message, context } = req.body;
    
    const prompt = `
    Контекст: Ты AI помощник для сайта Minecraft Java Finder. 
    Помогаешь пользователям с вопросами о Java, Minecraft, модах и их совместимости.
    
    Пользователь спрашивает: ${message}
    
    Дай краткий и полезный ответ на русском языке.
    `;
    
    const result = await model.generateContent(prompt);
    const response = await result.response;
    const text = response.text();
    
    res.json({
      response: text,
      timestamp: new Date().toISOString()
    });
  } catch (error) {
    console.error('Gemini API Error:', error);
    res.status(500).json({ error: 'Failed to generate response' });
  }
});
*/
