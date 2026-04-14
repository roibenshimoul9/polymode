import React, { useEffect } from 'react';

const PrivacyPolicy: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="max-w-4xl mx-auto px-6 py-20 text-right animate-in fade-in slide-in-from-bottom-4 duration-700">
      <header className="mb-16">
        <h1 className="text-4xl md:text-6xl font-black mb-8 leading-tight text-[#3e2723]">
          מדיניות פרטיות: <br />
          <span className="text-blue-600">המידע שלך בידיים טובות</span>
        </h1>
        <p className="text-xl text-[#5d4037] leading-relaxed">
          ב-Polymode אנו מכבדים את הפרטיות שלך ומתחייבים לשמור על המידע האישי שלך בצורה המאובטחת ביותר.
        </p>
      </header>

      <div className="space-y-12">
        <section>
          <h2 className="text-2xl font-black mb-4 text-[#3e2723]">איזה מידע אנחנו אוספים?</h2>
          <p className="text-[#5d4037] leading-relaxed">
            כאשר אתם מבצעים הזמנה להדפסה פיזית, אנו אוספים מידע בסיסי הכולל: שם מלא, מספר טלפון וכתובת למשלוח. מידע זה משמש אך ורק לצורך ביצוע ההזמנה ושליחתה אליכם.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-black mb-4 text-[#3e2723]">שימוש בוואטסאפ (WhatsApp)</h2>
          <p className="text-[#5d4037] leading-relaxed">
            הקשר איתנו מתבצע באופן ישיר דרך וואטסאפ לצורך התאמה אישית של מוצרים ותיאום תשלום. היסטוריית ההתכתבות משמשת אותנו למתן שירות לקוחות מיטבי בלבד.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-black mb-4 text-[#3e2723]">אבטחת מידע</h2>
          <p className="text-[#5d4037] leading-relaxed">
            אנו מיישמים אמצעי הגנה מתקדמים כדי להגן על המידע האישי שלכם מפני גישה לא מורשית. המידע שלכם לעולם לא יימכר או יועבר לצד ג' למטרות שיווקיות.
          </p>
        </section>

        <section className="p-8 bg-blue-50 border border-blue-200 rounded-3xl shadow-sm">
          <h2 className="text-xl font-black mb-4 text-blue-600">עוגיות (Cookies)</h2>
          <p className="text-[#5d4037] text-sm leading-relaxed">
            האתר משתמש בטכנולוגיות בסיסיות לשיפור חוויית הגלישה (כמו שמירת הפריטים בסל הקניות שלך באופן זמני). תוכלו לחסום את השימוש בעוגיות דרך הגדרות הדפדפן שלכם.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-black mb-4 text-[#3e2723]">יצירת קשר</h2>
          <p className="text-[#5d4037] leading-relaxed">
            בכל שאלה בנושא פרטיות, ניתן לפנות אלינו ישירות דרך כפתור הצ'אט באתר או בוואטסאפ.
          </p>
        </section>
      </div>

      <footer className="mt-20 text-center">
        <button 
          onClick={() => window.history.back()}
          className="bg-blue-600 text-white px-12 py-4 rounded-2xl font-black hover:bg-blue-500 transition-all transform active:scale-95 shadow-md"
        >
          הבנתי, חזרה לאתר
        </button>
      </footer>
    </div>
  );
};

export default PrivacyPolicy;