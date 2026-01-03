import React, { useEffect, useMemo } from 'react';
import { MODELS } from '../constants';
import { Model3D, PurchaseType } from '../types';
import ModelCard from './ModelCard';

interface SpecialsPageProps {
  onAddToCart: (model: Model3D, type: PurchaseType) => void;
  onOpenDetails: (model: Model3D) => void;
}

const SpecialsPage: React.FC<SpecialsPageProps> = ({ onAddToCart, onOpenDetails }) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const specialModels = useMemo(() => {
    return MODELS.filter(model => model.isOnSale);
  }, []);

  return (
    <div className="max-w-7xl mx-auto px-6 py-20 text-right animate-in fade-in slide-in-from-bottom-4 duration-700">
      <header className="mb-16 text-center md:text-right">
        <div className="inline-block bg-red-600/10 border border-red-500/20 px-4 py-1.5 rounded-full mb-4">
          <span className="text-red-500 text-xs font-black uppercase tracking-widest">🔥 הצעות מוגבלות בזמן</span>
        </div>
        <h1 className="text-5xl md:text-7xl font-black mb-6 leading-tight text-white">
          מבצעים <span className="text-red-500">שאסור לפספס</span>
        </h1>
        <p className="text-xl text-gray-400 max-w-2xl md:mr-0 leading-relaxed">
          ריכזנו עבורכם את כל ההנחות הכי שוות על מודלים פרימיום, קבצי STL להדפסה ומוצרי יודאיקה.
        </p>
      </header>

      {specialModels.length > 0 ? (
        <>
          <div className="mb-10 flex items-center justify-between border-b border-white/5 pb-6 flex-row-reverse">
            <div className="flex items-center gap-2">
              <span className="text-gray-500 text-sm font-bold">נמצאו</span>
              <span className="bg-white/5 px-3 py-1 rounded-lg text-white font-black">{specialModels.length}</span>
              <span className="text-gray-500 text-sm font-bold">פריטים במבצע</span>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {specialModels.map(model => (
              <div key={model.id} className="relative">
                {/* Sale Tag Badge */}
                <div className="absolute -top-3 -right-3 z-10 bg-red-600 text-white font-black px-4 py-2 rounded-xl shadow-xl shadow-red-900/40 rotate-12 scale-110 pointer-events-none">
                  {model.originalPrice && (
                    <span className="text-xs">
                      {Math.round(((model.originalPrice - model.price) / model.originalPrice) * 100)}% הנחה!
                    </span>
                  )}
                </div>
                <ModelCard 
                  model={model} 
                  onAddToCart={onAddToCart} 
                  onOpenDetails={onOpenDetails}
                />
              </div>
            ))}
          </div>
        </>
      ) : (
        <div className="py-20 text-center bg-[#111] rounded-[3rem] border border-white/5">
          <div className="w-20 h-20 bg-white/5 rounded-full flex items-center justify-center mx-auto mb-6">
             <svg className="w-10 h-10 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M20 12H4" strokeWidth="2" strokeLinecap="round"/></svg>
          </div>
          <h3 className="text-2xl font-black text-white mb-2">אין מבצעים פעילים כרגע</h3>
          <p className="text-gray-500">חזרו בקרוב כדי לראות את ההצעות החדשות שלנו.</p>
          <button 
            onClick={() => window.history.back()}
            className="mt-8 bg-blue-600 text-white px-8 py-3 rounded-2xl font-black hover:bg-blue-500 transition-all"
          >
            חזרה לקטלוג המלא
          </button>
        </div>
      )}

      {/* Trust Badges */}
      <section className="mt-32 grid grid-cols-1 md:grid-cols-3 gap-8">
        {[
          { title: 'מחירים ללא תחרות', desc: 'ההנחות הטובות ביותר על מודלים באיכות פרימיום.', icon: '💰' },
          { title: 'תמיכה טכנית מלאה', desc: 'אנחנו כאן לכל שאלה לגבי ההדפסה שלכם.', icon: '🛠️' },
          { title: 'קבצים נקיים', desc: 'כל המודלים נבדקו ונמצאו תקינים להדפסה.', icon: '✨' }
        ].map((item, i) => (
          <div key={i} className="bg-white/[0.02] p-8 rounded-[2rem] border border-white/5 text-center">
            <div className="text-4xl mb-4">{item.icon}</div>
            <h4 className="text-lg font-black text-white mb-2">{item.title}</h4>
            <p className="text-sm text-gray-500">{item.desc}</p>
          </div>
        ))}
      </section>
    </div>
  );
};

export default SpecialsPage;