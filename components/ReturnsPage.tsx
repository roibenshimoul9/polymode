import React from 'react';

const ReturnsPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-[#fcf8ee] text-[#3e2723] pt-24 pb-16" dir="rtl">
      <div className="max-w-4xl mx-auto px-4 md:px-6">
        <h1 className="text-3xl md:text-5xl font-black mb-8 text-[#3e2723] text-center tracking-tight">מדיניות החזרות וביטולים</h1>
        
        <div className="bg-white/80 p-8 md:p-12 rounded-[2rem] shadow-sm border border-[#3e2723]/5 space-y-8">
          <p className="text-lg leading-relaxed text-[#5d4037]">
            אנו בטוחים באיכות מוצרי התלת-ממד שאנו מדפיסים ומספקים. עם זאת, בהיותנו מייצרים במיוחד עבור כל הזמנה, מדיניות ההחזרים מותאמת לאופי השירות.
          </p>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-[#3e2723]">ביטול הזמנה</h2>
            <p className="text-[#5d4037] leading-relaxed">
              מכיוון שההדפסות במפעלנו נעשות לפי דרישה (Made-to-order) ובהתאמות אישיות (כגון בחירת צבע וחומרים ספציפיים), ניתן לבטל הזמנה רק בטרם תהליך הייצור החל בפועל. במידה וברצונכם לבטל – פנו לשירות הלקוחות שלנו בהקדם האפשרי. אם ההדפסה כבר החלה או הסתיימה, לא יתאפשר ביטול והחזר כספי מלא על הפריט.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-[#3e2723]">מוצרים פגומים או שגויים</h2>
            <p className="text-[#5d4037] leading-relaxed">
              במידה וקיבלתם פריט שמודפס בצורה לקויה, נשבר במשלוח, או שאינו תואם למה שהוזמן (למשל צבע שגוי) – פנו אלינו תוך 48 שעות מקבלת המשלוח. אנא צרפו תמונה של הפגם. אנו נדאג להדפיס ולשלוח לכם מוצר חלופי במהירות ללא תוספת תשלום, או לחילופין נזכה אתכם בחזרה.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-[#3e2723]">החזרת מוצרים (שאינם פגומים)</h2>
            <p className="text-[#5d4037] leading-relaxed">
              מוצרים שעברו ייצור אישי והדפסה במיוחד עבור לקוח אינם ניתנים להחזרה לפי חוק הגנת הצרכן (מוצר שיוצר במיוחד בעבור הלקוח). במקרים של מודלים אוניברסליים לחלוטין ולפנים משורת הדין בלבד – אנא צרו קשר ונבחן את הבקשה. ייתכן שיחולו דמי ביטול ומשלוח כחוק.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-[#3e2723]">כיצד לפנות אלינו בנושאי החזרות?</h2>
            <p className="text-[#5d4037] leading-relaxed">
              לכל שאלה או פנייה בנושא ביטולים והחזרות, אנא פנו אלינו לכתובת הדוא"ל: <a href="mailto:polymode3d@gmail.com" className="font-bold text-blue-600 hover:text-blue-700">polymode3d@gmail.com</a> או דרך הוואטסאפ. ציינו בפנייה את מספר ההזמנה שלכם.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default ReturnsPage;
