import React, { useEffect } from 'react';

const LicensesPage: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="max-w-4xl mx-auto px-6 py-20 text-right animate-in fade-in slide-in-from-bottom-4 duration-700">
      <header className="mb-16">
        <h1 className="text-4xl md:text-6xl font-black mb-8 leading-tight text-[#3e2723]">
          רישיונות דיגיטליים: <br />
          <span className="text-blue-600">הגנה על יצירה וחדשנות</span>
        </h1>
        <p className="text-xl text-[#5d4037] leading-relaxed">
          כל מודל שנרכש ב-Polymode מגיע עם רישיון שימוש ברור המגן גם עליך כמשתמש וגם על היוצרים שלנו.
        </p>
      </header>

      <div className="grid gap-12">
        <section className="bg-white/60 p-10 rounded-[2.5rem] border border-[#3e2723]/10 shadow-sm">
          <h2 className="text-2xl font-black mb-6 text-[#3e2723] flex items-center gap-3 flex-row-reverse">
            <span className="w-10 h-10 bg-blue-600 rounded-xl flex items-center justify-center text-sm text-white">01</span>
            רישיון שימוש אישי (סטנדרט)
          </h2>
          <ul className="space-y-4 text-[#5d4037]">
            <li className="flex gap-3 flex-row-reverse">
              <span className="text-blue-600">✓</span>
              <span>זכות להדפסה פיזית של המודל ללא הגבלה לשימוש אישי.</span>
            </li>
            <li className="flex gap-3 flex-row-reverse">
              <span className="text-blue-600">✓</span>
              <span>שימוש במודל בפרויקטים פרטיים שאינם מיועדים למכירה.</span>
            </li>
            <li className="flex gap-3 flex-row-reverse">
              <span className="text-red-600">✗</span>
              <span>איסור מוחלט על מכירה חוזרת, שיתוף או הפצה של הקבצים הדיגיטליים.</span>
            </li>
          </ul>
        </section>

        <section className="bg-white/60 p-10 rounded-[2.5rem] border border-[#3e2723]/10 shadow-sm">
          <h2 className="text-2xl font-black mb-6 text-[#3e2723] flex items-center gap-3 flex-row-reverse">
            <span className="w-10 h-10 bg-cyan-600 rounded-xl flex items-center justify-center text-sm text-white">02</span>
            רישיון מסחרי (Merchant)
          </h2>
          <p className="text-[#5d4037] mb-6 leading-relaxed">
            עבור חלק מהמודלים ניתן לרכוש רישיון מסחרי המאפשר מכירה של **תוצרים פיזיים**.
          </p>
          <ul className="space-y-4 text-[#5d4037]">
            <li className="flex gap-3 flex-row-reverse">
              <span className="text-cyan-600">✓</span>
              <span>זכות למכור הדפסות פיזיות של המודל בחנות שלך.</span>
            </li>
            <li className="flex gap-3 flex-row-reverse">
              <span className="text-red-600">✗</span>
              <span>חל איסור מוחלט למכור או להפיץ את קובץ ה-STL עצמו.</span>
            </li>
          </ul>
        </section>

        <section className="bg-red-50 border border-red-200 p-8 rounded-3xl">
          <h3 className="font-black text-red-600 mb-4">מדיניות החזרים על מוצרים דיגיטליים</h3>
          <p className="text-sm text-[#5d4037] leading-relaxed">
            בשל אופיו של המידע הדיגיטלי (קבצים הניתנים להורדה מיידית), לא ניתן לבצע החזר כספי לאחר רכישת קובץ דיגיטלי. אנו ממליצים לעיין היטב בתיאור המודל ובתמונות לפני הרכישה.
          </p>
        </section>
      </div>

      <footer className="mt-20 text-center">
        <button 
          onClick={() => window.history.back()}
          className="bg-blue-600 text-white px-12 py-4 rounded-2xl font-black hover:bg-blue-500 transition-all transform active:scale-95 shadow-md"
        >
          חזרה לחנות
        </button>
      </footer>
    </div>
  );
};

export default LicensesPage;