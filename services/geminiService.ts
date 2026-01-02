import { GoogleGenAI } from "@google/genai";

const getAIClient = () => {
  return new GoogleGenAI({ apiKey: process.env.API_KEY || '' });
};

export const chatWithAssistant = async (history: { role: 'user' | 'model', message: string }[]) => {
  const ai = getAIClient();
  const chat = ai.chats.create({
    model: 'gemini-3-flash-preview',
    config: {
      systemInstruction: 'שמך פולי, אתה המומחה של Polymode. תפקידך לעזור למשתמשים למצוא מודלים בתלת-ממד (כולל דמויות, יודאיקה, אביזרים, פתרונות DIY וקבצי הדפסת תלת מימד) ולתת ייעוץ טכני על הדפסת תלת-ממד. עליך לענות תמיד בעברית רהוטה ומקצועית. אם שואלים אותך על הדפסה פיזית, הסבר שאנחנו מציעים שירות הדפסה ומשלוח עד הבית.',
    }
  });

  const lastMessage = history[history.length - 1];
  try {
    const response = await chat.sendMessage({ message: lastMessage.message });
    return response.text;
  } catch (error) {
    console.error("Chat error:", error);
    return "מצטער, נתקלתי בבעיה בחיבור. בוא ננסה שוב!";
  }
};