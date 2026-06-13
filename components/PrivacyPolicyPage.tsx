import React from 'react';

const PrivacyPolicyPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-[#fcf8ee] text-[#3e2723] pt-24 pb-16" dir="rtl">
      <div className="max-w-4xl mx-auto px-4 md:px-6">
        <h1 className="text-3xl md:text-5xl font-black mb-8 text-[#3e2723] text-center tracking-tight">מדיניות פרטיות</h1>
        
        <div className="bg-white/80 p-8 md:p-12 rounded-[2rem] shadow-sm border border-[#3e2723]/5 space-y-8">
          <p className="text-lg leading-relaxed text-[#5d4037]">
            אנו ב-POLYMODE מתחייבים לשמור על פרטיות לקוחותינו ולאבטח את המידע האישי שנמסר לנו. מדיניות פרטיות זו מפרטת כיצד אנו אוספים, עושים שימוש ושומרים על המידע שלכם בעת השימוש באתר.
          </p>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-[#3e2723]">1. איסוף מידע</h2>
            <p className="text-[#5d4037] leading-relaxed">
              בעת ביצוע הזמנה, יצירת קשר או שימוש בשירותי האתר, אנו עשויים לאסוף מידע בסיסי כגון שם מלא, כתובת דוא"ל, מספר טלפון וכתובת למשלוח. מידע זה נאסף כדי לאפשר את מתן השירות בצורה הטובה ביותר.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-[#3e2723]">2. שימוש במידע</h2>
            <p className="text-[#5d4037] leading-relaxed">
              המידע שנאסף ישמש אך ורק למטרות הבאות: מילוי וסיום תהליך ההזמנה (כולל משלוח והדפסה), יצירת קשר במקרה של בעיות או שאלות לגבי ההזמנה, ושיפור השירות באתר. לא נעביר את פרטיכם האישיים לצדדים שלישיים ללא אישורכם המפורש.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-[#3e2723]">3. אבטחת מידע</h2>
            <p className="text-[#5d4037] leading-relaxed">
              אנו נוקטים באמצעי אבטחה מחמירים כדי לשמור על בטיחות המידע שלכם. יחד עם זאת, חשוב לזכור ששום אמצעי העברת מידע באינטרנט אינו בטוח ב-100%, ולכן איננו יכולים להבטיח ביטחון מוחלט.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-[#3e2723]">4. עוגיות (Cookies)</h2>
            <p className="text-[#5d4037] leading-relaxed">
              האתר עשוי להשתמש בעוגיות על מנת לשפר את חווית הגלישה, לזכור את העדפותיכם ולאסוף נתונים סטטיסטיים אנונימיים לגבי השימוש באתר. באפשרותכם לשנות את הגדרות הדפדפן שלכם כך שיחסום עוגיות.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicyPage;
