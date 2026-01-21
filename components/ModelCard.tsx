
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

  const handleAddToCart = (e: React.MouseEvent, type: PurchaseType) => {
    e.stopPropagation();
    onAddToCart(model, type);
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
        
        <h3 className="font-bold text-gray-100 text-[11px] md:text-base mb-1 md:mb-2 line-clamp-1">{model.name}</h3>
        
        <div className="mt-auto pt-2 md:pt-4 border-t border-white/5 space-y-2">
          <div className="flex flex-wrap items-baseline gap-1 md:gap-2 justify-end mb-1">
            {model.price === 0 ? (
              <span className="text-[11px] md:text-lg font-bold text-cyan-400">בתיאום אישי</span>
            ) : (
              <>
                <span className="text-xs md:text-lg font-bold text-white">₪{model.price.toFixed(0)}</span>
                {model.originalPrice && (
                  <span className="text-[8px] md:text-xs text-gray-600 line-through">₪{model.originalPrice.toFixed(0)}</span>
                )}
              </>
            )}
          </div>
          
          <div className="flex flex-col gap-1.5">
            {model.price === 0 ? (
              <button 
                onClick={handleContactClick}
                className="w-full py-1.5 md:py-2.5 bg-cyan-600 hover:bg-cyan-500 rounded-lg md:rounded-xl text-[9px] md:text-xs font-bold text-white transition-all"
              >
                צרו קשר
              </button>
            ) : (
              <>
                <button 
                  onClick={(e) => handleAddToCart(e, 'דיגיטלי')}
                  className="w-full py-1.5 md:py-2.5 bg-blue-600 hover:bg-blue-500 rounded-lg md:rounded-xl text-[9px] md:text-xs font-bold text-white transition-all flex items-center justify-center gap-1"
                >
                  <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"/></svg>
                  הורדה
                </button>
                {model.isPrintReady && (
                  <button 
                    onClick={(e) => handleAddToCart(e, 'פיזי')}
                    className="w-full py-1.5 md:py-2.5 bg-white/5 hover:bg-white/10 border border-white/10 rounded-lg md:rounded-xl text-[9px] md:text-xs font-bold text-cyan-400 transition-all flex items-center justify-center gap-1"
                  >
                    <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"/></svg>
                    הזמנה פיזית
                  </button>
                )}
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModelCard;
