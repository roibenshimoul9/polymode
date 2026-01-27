
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
        systemInstruction: `
          שמך פולי, אתה העוזר האישי והמומחה הטכני של Polymode - פלטפורמת ה-3D והדפסות המובילה בישראל.
          תפקידך:
          1. לסייע למשתמשים למצוא מודלים בקטלוג שלנו (כמו: דגמי יודאיקה, פידג'טים, אביזרי גיימינג, ומוצרים לבית).
          2. לענות על שאלות טכניות לגבי חומרי הדפסה (PLA, PETG, Marble) ושימוש בסלייסר.
          3. להסביר ששירות ההדפסה שלנו מתחיל ב-90 ש"ח למודל, והזמנות פיזיות מתבצעות בתיאום בוואטסאפ (המספר שלנו מופיע באתר).
          4. להציע שירות "עיצוב אישי לפי דרישה" אם המשתמש מחפש משהו שלא קיים בקטלוג.
          
          סגנון המענה:
          - ענה תמיד בעברית טבעית, אדיבה, מקצועית וקצרה יחסית.
          - השתמש באימוג'ים מתאימים מעולם הטכנולוגיה והתלת-ממד (⚙️, 🧊, 🖨️).
          - אם המשתמש שואל על מודל ספציפי (למשל חמסה או מעמד לסוני), החמא על הבחירה ותאר את היתרונות שלו.
          
          חשוב: אל תמציא מחירים שלא קיימים. אם אינך יודע מחיר של מודל מסוים, הפנה את המשתמש לקטלוג או לנציג בוואטסאפ.
        `,
        temperature: 0.8,
        topP: 0.95,
      }
    });

    return response.text;
  } catch (error) {
    console.error("Chat error:", error);
    return "אופס, נראה שיש לי בעיה קטנה בחיבור. אולי תנסה לשאול שוב בעוד רגע? 🛠️";
  }
};
