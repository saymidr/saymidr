import { GoogleGenAI } from "@google/genai";

const apiKey = process.env.API_KEY || '';
const ai = new GoogleGenAI({ apiKey });

export const generateCreativeIdea = async (prompt: string): Promise<string> => {
  try {
    if (!apiKey) {
      return "Error: API Key is missing. Please check your configuration.";
    }

    const systemInstruction = `
      You are an award-winning creative director and video editor.
      Your goal is to help a client brainstorm video concepts.
      They will give you a rough idea, and you will provide:
      1. A catchy title.
      2. A visual style/mood board description (lighting, colors, camera movement).
      3. A rough structure or shot list (Beginning, Middle, End).
      4. Suggestion for music/audio vibe.
      
      Keep the tone professional yet inspiring. Format nicely with markdown.
      Be concise but evocative.
    `;

    const response = await ai.models.generateContent({
      model: 'gemini-2.5-flash',
      contents: prompt,
      config: {
        systemInstruction,
        temperature: 0.8, // Slightly creative
      }
    });

    return response.text || "I couldn't generate an idea at this moment. Please try again.";
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "Something went wrong while communicating with the AI. Please try again later.";
  }
};