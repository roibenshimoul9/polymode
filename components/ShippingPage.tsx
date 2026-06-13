import React from 'react';

const ShippingPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-[#fcf8ee] text-[#3e2723] pt-24 pb-16" dir="rtl">
      <div className="max-w-4xl mx-auto px-4 md:px-6">
        <h1 className="text-3xl md:text-5xl font-black mb-8 text-[#3e2723] text-center tracking-tight">משלוחים וזמני אספקה</h1>
        
        <div className="bg-white/80 p-8 md:p-12 rounded-[2rem] shadow-sm border border-[#3e2723]/5 space-y-8">
          <p className="text-lg leading-relaxed text-[#5d4037]">
            צוות POLYMODE עושה את מרב המאמצים על מנת לוודא תהליך הדפסה מהיר ומשלוח יעיל אליכם, תוך שמירה על איכות ללא פשרות.
          </p>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-[#3e2723]">תהליך ההדפסה</h2>
            <p className="text-[#5d4037] leading-relaxed">
              מאחר שכל מוצר מיוצר בהתאמה אישית רק לאחר ביצוע ההזמנה (On-Demand), יש לקחת בחשבון שזמן ההדפסה הוא חלק מזמן האספקה הכולל. זמן ההדפסה הסטנדרטי משתנה בהתאם למורכבות המודל וגודלו, ולרוב לוקח בין 1-4 ימי עסקים.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-[#3e2723]">זמני משלוח (לאחר סיום ההדפסה)</h2>
            <ul className="list-disc list-inside space-y-2 text-[#5d4037] leading-relaxed pr-2">
              <li><strong>שליח עד הבית:</strong> בהתאם לאזור החלוקה, יש לרוב להוסיף כ- 2-4 ימי עסקים משעת סיום ההדפסה.</li>
              <li><strong>נקודת איסוף (נקודות חלוקה/לוקרים):</strong> הגעה לנקודה תוך כ- 3-5 ימי עסקים מזמן שליחת החבילה.</li>
              <li><strong>איסוף עצמי:</strong> בתיאום מראש בלבד מהסטודיו שלנו. יש להמתין לקבלת מסרון/מייל שהזמנתכם מוכנה לאיסוף.</li>
            </ul>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-[#3e2723]">מעקב המשלוח</h2>
            <p className="text-[#5d4037] leading-relaxed">
              כאשר ההזמנה שלכם מודפסת, ארוזה ומוכנה למשלוח, יישלח אליכם עדכון (לוואטסאפ או למייל) יחד עם מספר מעקב, כדי שתוכלו להתעדכן בסטטוס המשלוח בכל רגע.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default ShippingPage;
