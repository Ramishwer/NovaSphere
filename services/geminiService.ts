
import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY || '' });

export const getAIResponse = async (userMessage: string) => {
  try {
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: userMessage,
      config: {
        systemInstruction: "You are the AI Assistant for 'NovaSphere Digital', a premium technology consulting company. Your goal is to help potential clients understand our services (Cloud Architecture, AI Integration, Product Strategy, Security) and provide professional advice. Be professional, concise, and helpful. If asked about prices, suggest scheduling a consultation.",
      },
    });
    return response.text;
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "I apologize, but I'm having trouble connecting to my central processing unit right now. Please try again or contact our human team directly!";
  }
};
