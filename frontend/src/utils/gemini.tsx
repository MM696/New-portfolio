import { GoogleGenerativeAI } from "@google/generative-ai";

const genAI = new GoogleGenerativeAI(import.meta.env.VITE_GEMINI_API_KEY as string);

export const askGemini = async (message: string) => {
  try {
    const model = genAI.getGenerativeModel({ model: "gemini-pro" });
    const response = await model.generateContent(message);
    return response.response.text();
  } catch (error) {
    console.error("Gemini API error:", error);
    return "Sorry, something went wrong. Please try again.";
  }
};
