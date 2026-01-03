import React, { useEffect } from 'react';

const PrintingGuide: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="max-w-4xl mx-auto px-6 py-20 text-right animate-in fade-in slide-in-from-bottom-4 duration-700">
      <header className="mb-16">
        <h1 className="text-4xl md:text-6xl font-black mb-8 leading-tight">
          מדריך הדפסה פיזית: <br />
          <span className="text-blue-500">מביטים לקובץ, מדפיסים עולם</span>
        </h1>
        <div className="bg-blue-600/10 border-r-4 border-blue-600 p-6 rounded-l-2xl">
          <p className="text-xl text-gray-300 leading-relaxed">
            קיבלת קובץ STL ורוצה להדפיס אותו במדפסת תלת־ממד? 
            במדריך הבא נסביר שלב־אחר־שלב איך עושים זאת נכון – מהקובץ ועד לאובייקט המודפס.
          </p>
        </div>
      </header>

      <div className="space-y-12">
        {/* Step 1 */}
        <section className="bg-[#111] p-8 rounded-3xl border border-white/5 hover:border-blue-500/30 transition-all">
          <div className="flex items-center gap-4 mb-6 flex-row-reverse">
            <div className="w-12 h-12 bg-blue-600 rounded-2xl flex items-center justify-center font-black text-2xl text-white shadow-lg shadow-blue-600/20">1</div>
            <h2 className="text-2xl font-black">בחירת תוכנת חיתוך (Slicer)</h2>
          </div>
          <p className="text-gray-400 leading-relaxed mb-4">
            השלב הראשון הוא להעביר את קובץ ה-STL דרך "סלייסר". זו תוכנה שמתרגמת את המודל התלת-ממדי לשכבות ולפקודות שהמדפסת מבינה (G-code).
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
            <div className="p-4 bg-white/5 rounded-xl border border-white/5 text-center">
              <span className="block font-bold text-blue-400 mb-1">UltiMaker Cura</span>
              <span className="text-[10px] text-gray-500">הכי פופולרית וקלה למתחילים</span>
            </div>
            <div className="p-4 bg-white/5 rounded-xl border border-white/5 text-center">
              <span className="block font-bold text-blue-400 mb-1">PrusaSlicer</span>
              <span className="text-[10px] text-gray-500">מעולה לדיוק ושליטה מקסימלית</span>
            </div>
            <div className="p-4 bg-white/5 rounded-xl border border-white/5 text-center">
              <span className="block font-bold text-blue-400 mb-1">Bambu Studio</span>
              <span className="text-[10px] text-gray-500">אופטימלית למדפסות Bambu Lab</span>
            </div>
          </div>
        </section>

        {/* Step 2 */}
        <section className="bg-[#111] p-8 rounded-3xl border border-white/5 hover:border-blue-500/30 transition-all">
          <div className="flex items-center gap-4 mb-6 flex-row-reverse">
            <div className="w-12 h-12 bg-blue-600 rounded-2xl flex items-center justify-center font-black text-2xl text-white shadow-lg shadow-blue-600/20">2</div>
            <h2 className="text-2xl font-black">מיקום ואוריינטציה</h2>
          </div>
          <p className="text-gray-400 leading-relaxed">
            ייבאו את הקובץ לסלייסר. חשוב לבחור את הזווית שבה המודל יונח על משטח ההדפסה. 
            <strong>כלל זהב:</strong> נסו להניח את הצד השטוח ביותר של המודל על המשטח כדי להבטיח הידבקות טובה ולמזער צורך בתמיכות.
          </p>
        </section>

        {/* Step 3 */}
        <section className="bg-[#111] p-8 rounded-3xl border border-white/5 hover:border-blue-500/30 transition-all">
          <div className="flex items-center gap-4 mb-6 flex-row-reverse">
            <div className="w-12 h-12 bg-blue-600 rounded-2xl flex items-center justify-center font-black text-2xl text-white shadow-lg shadow-blue-600/20">3</div>
            <h2 className="text-2xl font-black">הגדרות הדפסה קריטיות</h2>
          </div>
          <ul className="space-y-4 text-gray-400">
            <li className="flex gap-3 flex-row-reverse">
              <span className="text-blue-500 font-bold">Infill (מילוי):</span>
              <span>עבור דמויות נוי מספיק 10%-15%. עבור חלקים הנדסיים מומלץ 40% ומעלה.</span>
            </li>
            <li className="flex gap-3 flex-row-reverse">
              <span className="text-blue-500 font-bold">Layer Height:</span>
              <span>0.2mm הוא הסטנדרט. לדיוק גבוה (במיוחד בשרף) רדו ל-0.1mm או פחות.</span>
            </li>
            <li className="flex gap-3 flex-row-reverse">
              <span className="text-blue-500 font-bold">Supports (תמיכות):</span>
              <span>אם יש חלקים "באוויר" בזווית של מעל 45 מעלות, הפעילו תמיכות.</span>
            </li>
          </ul>
        </section>

        {/* Step 4 */}
        <section className="bg-[#111] p-8 rounded-3xl border border-white/5 hover:border-blue-500/30 transition-all">
          <div className="flex items-center gap-4 mb-6 flex-row-reverse">
            <div className="w-12 h-12 bg-blue-600 rounded-2xl flex items-center justify-center font-black text-2xl text-white shadow-lg shadow-blue-600/20">4</div>
            <h2 className="text-2xl font-black">חיתוך והדפסה</h2>
          </div>
          <p className="text-gray-400 leading-relaxed mb-6">
            לחצו על כפתור ה-Slice, העבירו את קובץ ה-Gcode לכרטיס הזיכרון של המדפסת (או שלחו דרך ה-Wi-Fi). וודאו שמשטח ההדפסה נקי ומפולס.
          </p>
          <div className="bg-cyan-900/20 border border-cyan-500/30 p-6 rounded-2xl flex items-center gap-4 flex-row-reverse">
            <div className="p-3 bg-cyan-500 rounded-full text-black">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
            </div>
            <div>
              <p className="font-bold text-cyan-400 mb-1 text-sm">טיפ של מקצוענים</p>
              <p className="text-xs text-gray-300">תמיד תסתכלו על השכבה הראשונה. אם היא נדבקת מושלם, 90% מהעבודה מאחוריכם.</p>
            </div>
          </div>
        </section>
      </div>

      <footer className="mt-20 text-center space-y-6">
        <p className="text-gray-500 text-sm italic">נתקלתם בבעיה? רוצים שנדפיס עבורכם באיכות פרימיום?</p>
        <button 
          onClick={() => window.history.back()}
          className="bg-white text-black px-10 py-4 rounded-2xl font-black hover:bg-blue-500 hover:text-white transition-all transform active:scale-95"
        >
          חזרה לקטלוג המודלים
        </button>
      </footer>
    </div>
  );
};

export default PrintingGuide;