
import React, { useState } from 'react';
import { Model3D, PurchaseType } from '../types';

interface ModelCardProps {
  model: Model3D;
  onAddToCart: (model: Model3D, type: PurchaseType) => void;
  onOpenDetails: (model: Model3D) => void;
}

const PHONE_NUMBER = "0502156056";

const ModelCard: React.FC<ModelCardProps> = ({ model, onAddToCart, onOpenDetails }) => {
  const [currentImgIndex, setCurrentImgIndex] = useState(0);

  const nextImg = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrentImgIndex((prev) => (prev + 1) % model.images.length);
  };

  const prevImg = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrentImgIndex((prev) => (prev - 1 + model.images.length) % model.images.length);
  };

  const handleContactClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    const message = `שלום Polymode! אני מעוניין בפרטים לגבי עיצוב אישי לפי דרישה. אשמח לייעוץ.`;
    const encodedMessage = encodeURIComponent(message);
    window.open(`https://wa.me/972${PHONE_NUMBER.substring(1)}?text=${encodedMessage}`, '_blank');
  };

  return (
    <div 
      className="group bg-[#111] border border-white/5 rounded-xl md:rounded-2xl overflow-hidden hover:border-blue-500/50 transition-all duration-300 flex flex-col h-full cursor-pointer"
      onClick={() => onOpenDetails(model)}
    >
      <div className="relative aspect-[4/3] overflow-hidden">
        <img 
          src={model.images[currentImgIndex]} 
          alt={model.name} 
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
        />
        
        {/* Navigation Arrows on Card - Hidden on Mobile */}
        {model.images.length > 1 && (
          <div className="absolute inset-0 hidden md:flex items-center justify-between px-2 opacity-0 group-hover:opacity-100 transition-opacity">
            <button 
              onClick={prevImg}
              className="p-1.5 bg-black/50 backdrop-blur-md rounded-full text-white hover:bg-blue-600 transition-colors"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M15 19l-7-7 7-7" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
            </button>
            <button 
              onClick={nextImg}
              className="p-1.5 bg-black/50 backdrop-blur-md rounded-full text-white hover:bg-blue-600 transition-colors"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M9 5l7 7-7 7" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
            </button>
          </div>
        )}

        {/* Indicators - Smaller on Mobile */}
        <div className="absolute bottom-2 md:bottom-3 left-1/2 -translate-x-1/2 flex gap-1 md:gap-1.5">
          {model.images.map((_, idx) => (
            <div 
              key={idx} 
              className={`w-1 md:w-1.5 h-1 md:h-1.5 rounded-full transition-all ${idx === currentImgIndex ? 'bg-blue-500 w-2 md:w-3' : 'bg-white/30'}`}
            />
          ))}
        </div>

        <div className="absolute top-2 right-2 md:top-3 md:right-3 flex flex-col gap-1 md:gap-2">
          {model.isOnSale && (
            <div className="bg-red-600 text-white text-[8px] md:text-[10px] font-black px-1.5 md:px-2 py-0.5 md:py-1 rounded uppercase tracking-wider">
              מבצע
            </div>
          )}
          {model.isPrintReady && (
            <div className="bg-cyan-500 text-black text-[8px] md:text-[10px] font-black px-1.5 md:px-2 py-0.5 md:py-1 rounded uppercase tracking-wider flex items-center gap-1">
              <svg className="w-2.5 h-2.5 md:w-3 md:h-3" fill="currentColor" viewBox="0 0 24 24"><path d="M19 8h-1V3H6v5H5c-1.66 0-3 1.34-3 3v6h4v4h12v-4h4v-6c0-1.66-1.34-3-3-3zM8 5h8v3H8V5zm8 14H8v-4h8v4zm2-4v-2H6v2H4v-4c0-.55.45-1 1-1h14c.55 0 1 .45 1 1v4h-2z"/><circle cx="18" cy="11.5" r="1"/></svg>
              <span className="hidden sm:inline">מוכן להדפסה</span>
              <span className="sm:hidden">פיזי</span>
            </div>
          )}
        </div>
      </div>

      <div className="p-3 md:p-4 flex-grow flex flex-col text-right">
        <div className="flex justify-between items-start mb-1">
          <span className="text-[8px] md:text-[10px] uppercase tracking-widest text-blue-400 font-bold line-clamp-1">{model.category}</span>
          <div className="flex items-center space-x-1 space-x-reverse shrink-0">
            <svg className="w-2.5 h-2.5 md:w-3 md:h-3 text-yellow-500 fill-current" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/></svg>
            <span className="text-[10px] md:text-xs text-gray-400">{model.rating}</span>
          </div>
        </div>
        
        <h3 className="font-bold text-gray-100 text-xs md:text-base mb-1 md:mb-2 line-clamp-1">{model.name}</h3>
        <p className="text-[10px] md:text-xs text-gray-500 line-clamp-2 mb-2 hidden md:block">{model.description}</p>
        
        <div className="mt-auto pt-2 md:pt-4 border-t border-white/5 space-y-2 md:space-y-3">
          <div className="flex flex-wrap items-baseline gap-1 md:gap-2 justify-end">
            {model.price === 0 ? (
              <span className="text-xs md:text-lg font-bold text-cyan-400">בתיאום אישי</span>
            ) : (
              <>
                <span className="text-sm md:text-lg font-bold text-white">₪{model.price.toFixed(0)}</span>
                {model.originalPrice && (
                  <span className="text-[9px] md:text-xs text-gray-600 line-through">₪{model.originalPrice.toFixed(0)}</span>
                )}
              </>
            )}
          </div>
          
          <div className="grid grid-cols-1 gap-1.5">
            {model.price === 0 ? (
              <button 
                onClick={handleContactClick}
                className="w-full py-1.5 md:py-2.5 bg-cyan-600 hover:bg-cyan-500 rounded-lg md:rounded-xl text-[9px] md:text-xs font-bold text-white transition-all shadow-lg shadow-cyan-900/20"
              >
                צרו קשר
              </button>
            ) : (
              <button 
                onClick={(e) => { e.stopPropagation(); onAddToCart(model, 'דיגיטלי'); }}
                className="w-full py-1.5 md:py-2.5 bg-blue-600 hover:bg-blue-500 rounded-lg md:rounded-xl text-[9px] md:text-xs font-bold text-white transition-all shadow-lg shadow-blue-900/20"
              >
                הורדה
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModelCard;
