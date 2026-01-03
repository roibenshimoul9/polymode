import { GoogleGenAI } from "@google/genai";

export const chatWithAssistant = async (history: { role: 'user' | 'model', message: string }[]) => {
  const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
  
  try {
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: history.map(h => ({
        role: h.role,
        parts: [{ text: h.message }]
      })),
      config: {
        systemInstruction: 'שמך פולי, אתה המומחה של Polymode. תפקידך לעזור למשתמשים למצוא מודלים בתלת-ממד (כולל דמויות, יודאיקה, אביזרים, פתרונות DIY וקבצי הדפסת תלת מימד) ולתת ייעוץ טכני על הדפסת תלת-ממד. עליך לענות תמיד בעברית רהוטה ומקצועית. אם שואלים אותך על הדפסה פיזית, הסבר שאנחנו מציעים שירות הדפסה ומשלוח עד הבית. שים לב שיש לנו מוצר DIY מיוחד של "עיצוב אישי לפי דרישה" בחינם לייעוץ ראשוני.',
      }
    });

    return response.text;
  } catch (error) {
    console.error("Chat error:", error);
    return "מצטער, נתקלתי בבעיה בחיבור. בוא ננסה שוב!";
  }
};