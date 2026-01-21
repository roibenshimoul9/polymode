
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
    <div className="max-w-7xl mx-auto px-4 md:px-6 py-12 md:py-20 text-right animate-in fade-in slide-in-from-bottom-4 duration-700">
      <header className="mb-10 md:mb-16 text-center md:text-right">
        <div className="inline-block bg-red-600/10 border border-red-500/20 px-4 py-1.5 rounded-full mb-4">
          <span className="text-red-500 text-xs font-black uppercase tracking-widest">🔥 הצעות מוגבלות בזמן</span>
        </div>
        <h1 className="text-4xl md:text-7xl font-black mb-4 md:mb-6 leading-tight text-white">
          מבצעים <span className="text-red-500">חמים</span>
        </h1>
        <p className="text-base md:text-xl text-gray-400 max-w-2xl md:mr-0 leading-relaxed">
          ריכזנו עבורכם את כל ההנחות הכי שוות על מודלים פרימיום ומוצרי יודאיקה.
        </p>
      </header>

      {specialModels.length > 0 ? (
        <>
          <div className="mb-8 flex items-center justify-between border-b border-white/5 pb-6 flex-row-reverse">
            <div className="flex items-center gap-2">
              <span className="text-gray-500 text-xs md:text-sm font-bold">נמצאו</span>
              <span className="bg-white/5 px-2 md:px-3 py-1 rounded-lg text-white font-black text-xs md:text-base">{specialModels.length}</span>
              <span className="text-gray-500 text-xs md:text-sm font-bold">פריטים</span>
            </div>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3 md:gap-8">
            {specialModels.map(model => (
              <div key={model.id} className="relative">
                {/* Sale Tag Badge - Scaled for mobile */}
                <div className="absolute -top-2 -right-2 md:-top-3 md:-right-3 z-10 bg-red-600 text-white font-black px-2 md:px-4 py-1 md:py-2 rounded-lg md:rounded-xl shadow-xl shadow-red-900/40 rotate-12 scale-90 md:scale-110 pointer-events-none">
                  {model.originalPrice && (
                    <span className="text-[8px] md:text-xs">
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
        <div className="py-20 text-center bg-[#111] rounded-[2rem] border border-white/5">
          <div className="w-16 h-16 bg-white/5 rounded-full flex items-center justify-center mx-auto mb-6">
             <svg className="w-8 h-8 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M20 12H4" strokeWidth="2" strokeLinecap="round"/></svg>
          </div>
          <h3 className="text-xl font-black text-white mb-2">אין מבצעים פעילים</h3>
          <button 
            onClick={() => window.history.back()}
            className="mt-6 bg-blue-600 text-white px-8 py-3 rounded-2xl font-black hover:bg-blue-500 transition-all text-sm"
          >
            חזרה לקטלוג
          </button>
        </div>
      )}
    </div>
  );
};

export default SpecialsPage;
