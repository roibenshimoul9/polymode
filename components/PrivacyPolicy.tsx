import React, { useEffect } from 'react';

const PrivacyPolicy: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="max-w-4xl mx-auto px-6 py-20 text-right animate-in fade-in slide-in-from-bottom-4 duration-700">
      <header className="mb-16">
        <h1 className="text-4xl md:text-6xl font-black mb-8 leading-tight">
          מדיניות פרטיות: <br />
          <span className="text-blue-500">המידע שלך בידיים טובות</span>
        </h1>
        <p className="text-xl text-gray-400 leading-relaxed">
          ב-Polymode אנו מכבדים את הפרטיות שלך ומתחייבים לשמור על המידע האישי שלך בצורה המאובטחת ביותר.
        </p>
      </header>

      <div className="space-y-12">
        <section>
          <h2 className="text-2xl font-black mb-4 text-white">איזה מידע אנחנו אוספים?</h2>
          <p className="text-gray-400 leading-relaxed">
            כאשר אתם מבצעים הזמנה להדפסה פיזית, אנו אוספים מידע בסיסי הכולל: שם מלא, מספר טלפון וכתובת למשלוח. מידע זה משמש אך ורק לצורך ביצוע ההזמנה ושליחתה אליכם.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-black mb-4 text-white">שימוש בוואטסאפ (WhatsApp)</h2>
          <p className="text-gray-400 leading-relaxed">
            הקשר איתנו מתבצע באופן ישיר דרך וואטסאפ לצורך התאמה אישית של מוצרים ותיאום תשלום. היסטוריית ההתכתבות משמשת אותנו למתן שירות לקוחות מיטבי בלבד.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-black mb-4 text-white">אבטחת מידע</h2>
          <p className="text-gray-400 leading-relaxed">
            אנו מיישמים אמצעי הגנה מתקדמים כדי להגן על המידע האישי שלכם מפני גישה לא מורשית. המידע שלכם לעולם לא יימכר או יועבר לצד ג' למטרות שיווקיות.
          </p>
        </section>

        <section className="p-8 bg-blue-600/5 border border-blue-500/20 rounded-3xl">
          <h2 className="text-xl font-black mb-4 text-blue-400">עוגיות (Cookies)</h2>
          <p className="text-gray-400 text-sm leading-relaxed">
            האתר משתמש בטכנולוגיות בסיסיות לשיפור חוויית הגלישה (כמו שמירת הפריטים בסל הקניות שלך באופן זמני). תוכלו לחסום את השימוש בעוגיות דרך הגדרות הדפדפן שלכם.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-black mb-4 text-white">יצירת קשר</h2>
          <p className="text-gray-400 leading-relaxed">
            בכל שאלה בנושא פרטיות, ניתן לפנות אלינו ישירות דרך כפתור הצ'אט באתר או בוואטסאפ.
          </p>
        </section>
      </div>

      <footer className="mt-20 text-center">
        <button 
          onClick={() => window.history.back()}
          className="bg-white text-black px-12 py-4 rounded-2xl font-black hover:bg-blue-500 hover:text-white transition-all transform active:scale-95"
        >
          הבנתי, חזרה לאתר
        </button>
      </footer>
    </div>
  );
};

export default PrivacyPolicy;