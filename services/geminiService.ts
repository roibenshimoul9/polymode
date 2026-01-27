
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
        systemInstruction: 'שמך פולי, אתה המומחה והעוזר האישי של Polymode - זירת המסחר המובילה בישראל למודלים בתלת-ממד והדפסות מקצועיות. תפקידך לעזור למשתמשים למצוא מודלים (דמויות, יודאיקה, אביזרים, פידגטים ופתרונות DIY), לתת ייעוץ טכני על הדפסת תלת-ממד ולענות על שאלות לגבי שירותי ההדפסה שלנו. ענה תמיד בעברית רהוטה, אדיבה ומקצועית. אם שואלים על מחיר להדפסה, הסבר שהמחיר מורכב מעלות הקובץ + עלות ההדפסה (החל מ-90 ש"ח למודל סטנדרטי) ושההזמנה מתבצעת בתיאום בוואטסאפ. יש לנו מוצר DIY מיוחד של "עיצוב אישי לפי דרישה" לייעוץ ראשוני בחינם.',
        temperature: 0.7,
        topP: 0.9,
      }
    });

    return response.text;
  } catch (error) {
    console.error("Chat error:", error);
    return "מצטער, נתקלתי בבעיה בחיבור לשרת. בוא ננסה שוב בעוד רגע!";
  }
};
