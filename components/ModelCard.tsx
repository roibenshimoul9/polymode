
import React, { useState } from 'react';
import { Model3D, PurchaseType } from '../types';
import { PRINT_FEE } from '../constants';
import ProductPrice from './ProductPrice.tsx';

interface ModelCardProps {
  model: Model3D;
  onAddToCart: (model: Model3D, type: PurchaseType) => void;
  onOpenDetails: (model: Model3D) => void;
  theme?: 'dark' | 'light';
}

const PHONE_NUMBER = "0546843548";

const ModelCard: React.FC<ModelCardProps> = ({ model, onAddToCart, onOpenDetails, theme = 'light' }) => {
  const [currentImgIndex, setCurrentImgIndex] = useState(0);
  const [imgError, setImgError] = useState(false);

  const isLight = theme === 'light';

  const effectivePrintFee = model.printFee !== undefined ? model.printFee : PRINT_FEE;
  const physicalPrice = model.price > 0 ? model.price + effectivePrintFee : 0;
  const originalPhysicalPrice = model.originalPrice ? model.originalPrice + effectivePrintFee : null;

  // Logic for "New" label (within 7 days)
  const createdDate = new Date(model.createdAt);
  const diffTime = Date.now() - createdDate.getTime();
  const diffInDays = diffTime / (1000 * 60 * 60 * 24);
  const isNew = diffInDays >= 0 && diffInDays <= 7;

  const nextImg = (e: React.MouseEvent) => {
    e.stopPropagation();
    setImgError(false);
    setCurrentImgIndex((prev) => (prev + 1) % model.images.length);
  };

  const prevImg = (e: React.MouseEvent) => {
    e.stopPropagation();
    setImgError(false);
    setCurrentImgIndex((prev) => (prev - 1 + model.images.length) % model.images.length);
  };

  const handleDotClick = (e: React.MouseEvent, index: number) => {
    e.stopPropagation();
    setImgError(false);
    setCurrentImgIndex(index);
  };

  const handleAddToCart = (e: React.MouseEvent, type: PurchaseType) => {
    e.stopPropagation();
    onAddToCart(model, type);
  };

  const handleDigitalContact = (e: React.MouseEvent) => {
    e.stopPropagation();
    const message = `שלום Polymode! אני מעוניין ברכישת הקובץ הדיגיטלי של המודל: "${model.name}".`;
    const encodedMessage = encodeURIComponent(message);
    window.open(`https://wa.me/972${PHONE_NUMBER.substring(1)}?text=${encodedMessage}`, '_blank');
  };

  const handleContactClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    const message = `שלום Polymode! אני מעוניין בהצעת מחיר עבור המודל: "${model.name}". אשמח לפרטים נוספים.`;
    const encodedMessage = encodeURIComponent(message);
    window.open(`https://wa.me/972${PHONE_NUMBER.substring(1)}?text=${encodedMessage}`, '_blank');
  };

  return (
    <div 
      className={`group rounded-xl md:rounded-2xl overflow-hidden transition-all duration-300 flex flex-col h-full cursor-pointer shadow-lg border ${
        isLight 
          ? 'bg-white/60 border-[#3e2723]/10 hover:border-[#3e2723]/40 shadow-[#3e2723]/5 backdrop-blur-sm' 
          : 'bg-[#111] border-white/5 hover:border-blue-500/50'
      }`}
      onClick={() => onOpenDetails(model)}
    >
      <div className={`relative aspect-[4/3] overflow-hidden ${isLight ? 'bg-[#3e2723]/5' : 'bg-black/20'}`}>
        {!imgError ? (
          <img 
            src={model.images[currentImgIndex]} 
            alt={model.name} 
            onError={() => {
              console.error(`Failed to load image at: ${model.images[currentImgIndex]}`);
              setImgError(true);
            }}
            loading="lazy"
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 transform-gpu backface-hidden"
          />
        ) : (
          <div className={`w-full h-full flex flex-col items-center justify-center p-4 text-center ${isLight ? 'bg-[#3e2723]/5 text-[#8d6e63]' : 'bg-white/5 text-gray-600'}`}>
            <svg className="w-10 h-10 mb-2 opacity-20" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            <span className={`text-[10px] font-bold ${isLight ? 'text-[#8d6e63]' : 'text-gray-500'}`}>התמונה לא נמצאה</span>
          </div>
        )}
        
        {model.images.length > 1 && (
          <div className="absolute inset-0 hidden md:flex items-center justify-between px-2 opacity-0 group-hover:opacity-100 transition-opacity z-20">
            <button 
              onClick={prevImg}
              className="p-1.5 bg-black/60 backdrop-blur-md rounded-full text-white hover:bg-blue-600 transition-all"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M15 19l-7-7 7-7" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
            </button>
            <button 
              onClick={nextImg}
              className="p-1.5 bg-black/60 backdrop-blur-md rounded-full text-white hover:bg-blue-600 transition-all"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M9 5l7 7-7 7" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
            </button>
          </div>
        )}

        <div className="absolute bottom-2 md:bottom-3 left-1/2 -translate-x-1/2 flex gap-1.5 md:gap-2 z-20">
          {model.images.map((_, idx) => (
            <button 
              key={idx} 
              onClick={(e) => handleDotClick(e, idx)}
              className={`w-1.5 h-1.5 md:w-2 md:h-2 rounded-full transition-all ${
                idx === currentImgIndex 
                  ? (isLight ? 'bg-[#3e2723] w-3 md:w-4' : 'bg-blue-500 w-3 md:w-4') 
                  : (isLight ? 'bg-[#3e2723]/30' : 'bg-white/40')
              }`}
              aria-label={`Go to image ${idx + 1}`}
            />
          ))}
        </div>

        {/* Labels Layer */}
        <div className="absolute top-2 right-2 left-2 z-20 flex justify-between items-start pointer-events-none">
          <div className="flex flex-col gap-1 items-start">
            {isNew && (
              <div className="bg-emerald-500 text-black text-[8px] md:text-[10px] font-black px-1.5 md:px-2 py-0.5 md:py-1 rounded uppercase tracking-wider shadow-[0_4px_12px_rgba(16,185,129,0.4)] animate-in fade-in zoom-in duration-500">
                חדש באתר
              </div>
            )}
          </div>
          <div className="flex flex-col gap-1 items-end">
            {model.isOnSale && (
              <div className="bg-red-600 text-white text-[8px] md:text-[10px] font-black px-1.5 md:px-2 py-0.5 md:py-1 rounded uppercase tracking-wider shadow-lg">
                מבצע
              </div>
            )}
          </div>
        </div>

        {/* Feature Tags (Bottom Right) */}
        <div className="absolute bottom-2 right-2 z-20 flex gap-1.5 pointer-events-auto">
          <div 
            className="w-6 h-6 rounded-full bg-white/90 backdrop-blur shadow-sm ring-1 ring-black/10 hover:scale-110 transition-transform cursor-help flex items-center justify-center"
            title="ניתן להתאמה אישית של צבע"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="w-3.5 h-3.5 rounded-full bg-[conic-gradient(red,orange,yellow,green,blue,purple,red)]" />
          </div>
          <div 
            className="w-6 h-6 rounded-full bg-white/90 backdrop-blur shadow-sm ring-1 ring-black/10 hover:scale-110 transition-transform cursor-help flex items-center justify-center"
            title="זמין במגוון גדלים"
            onClick={(e) => e.stopPropagation()}
          >
            <svg className="w-3.5 h-3.5 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M15 3h6v6M9 21H3v-6M21 3l-7 7M3 21l7-7" />
            </svg>
          </div>
        </div>
      </div>

      <div className="p-3 md:p-4 flex-grow flex flex-col text-right">
        <div className="flex justify-between items-start mb-1">
          <span className={`text-[8px] md:text-[10px] uppercase tracking-widest font-bold ${isLight ? 'text-[#8d6e63]' : 'text-blue-400'}`}>{model.category}</span>
          <div className="flex items-center space-x-1 space-x-reverse">
            <svg className="w-2.5 h-2.5 text-yellow-500 fill-current" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/></svg>
            <span className={`text-[10px] md:text-xs ${isLight ? 'text-[#8d6e63]' : 'text-gray-400'}`}>{model.rating}</span>
          </div>
        </div>
        
        <h3 className={`font-bold text-[11px] md:text-base mb-1 md:mb-2 line-clamp-1 ${isLight ? 'text-[#3e2723]' : 'text-gray-100'}`}>{model.name}</h3>
        
        <div className={`mt-auto pt-2 md:pt-4 border-t space-y-2 ${isLight ? 'border-[#3e2723]/10' : 'border-white/5'}`}>
          <div className="flex flex-col items-end mb-1">
            {model.price === 0 ? (
              <span className={`text-[10px] md:text-sm font-bold ${isLight ? 'text-[#5d4037]' : 'text-cyan-400'}`}>להצעת מחיר צרו קשר</span>
            ) : (
              <>
                <ProductPrice 
                  price={physicalPrice} 
                  originalPrice={originalPhysicalPrice}
                  containerClassName="flex items-baseline gap-1 md:gap-2 justify-end"
                  priceClassName={`text-xs md:text-lg font-bold ${isLight ? 'text-[#3e2723]' : 'text-white'}`}
                  originalPriceClassName={`text-[8px] md:text-xs line-through ${isLight ? 'text-[#8d6e63]' : 'text-gray-600'}`}
                  prefixClassName={`text-[10px] md:text-xs ${isLight ? 'text-[#8d6e63]' : 'text-gray-400'}`}
                />
                <span className={`text-[7px] md:text-[9px] font-medium ${isLight ? 'text-[#8d6e63]' : 'text-gray-500'}`}>מחיר להזמנה פיזית</span>
              </>
            )}
          </div>
          
          <div className="flex flex-col gap-1.5">
            {model.price === 0 ? (
              <button 
                onClick={handleContactClick}
                className={`w-full py-1.5 md:py-2.5 rounded-lg md:rounded-xl text-[9px] md:text-xs font-bold transition-all shadow-md active:scale-95 flex items-center justify-center gap-1 ${
                  isLight ? 'bg-[#25D366] hover:bg-[#20bd5c] text-white' : 'bg-[#25D366] hover:bg-[#20bd5c] text-white'
                }`}
              >
                <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/></svg>
                פנייה בוואטסאפ
              </button>
            ) : (
              <>
                {model.isPrintReady && (
                  <button 
                    onClick={(e) => handleAddToCart(e, 'פיזי')}
                    className={`w-full py-1.5 md:py-2.5 rounded-lg md:rounded-xl text-[9px] md:text-xs font-bold transition-all flex items-center justify-center gap-1 shadow-md active:scale-95 ${
                      isLight 
                        ? 'bg-[#3e2723] hover:bg-[#5d4037] text-[#f4ebd0]' 
                        : 'bg-[#3e2723] hover:bg-[#5d4037] text-white'
                    }`}
                  >
                    הזמנה פיזית (הדפסה)
                  </button>
                )}
                <button 
                  onClick={handleDigitalContact}
                  className={`w-full py-1.5 md:py-2.5 bg-transparent border rounded-lg md:rounded-xl text-[9px] md:text-xs font-bold transition-all flex items-center justify-center gap-1 active:scale-95 ${
                    isLight 
                      ? 'border-[#3e2723]/30 text-[#3e2723] hover:bg-[#3e2723]/5 hover:border-[#3e2723]/60' 
                      : 'border-white/20 text-gray-300 hover:bg-white/5 hover:border-white/40'
                  }`}
                >
                  לרכישת קובץ דיגיטלי
                </button>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModelCard;
