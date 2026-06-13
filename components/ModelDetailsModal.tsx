
import React, { useState } from 'react';
import { Model3D, PurchaseType } from '../types';
import { PRINT_FEE } from '../constants';
import ProductPrice from './ProductPrice.tsx';

interface ModelDetailsModalProps {
  model: Model3D | null;
  onClose: () => void;
  onAddToCart: (model: Model3D, type: PurchaseType) => void;
}

const PHONE_NUMBER = "0546843548";

const ModelDetailsModal: React.FC<ModelDetailsModalProps> = ({ model, onClose, onAddToCart }) => {
  if (!model) return null;

  const [activeImgIndex, setActiveImgIndex] = useState(0);
  const [imgError, setImgError] = useState(false);

  const effectivePrintFee = model.printFee !== undefined ? model.printFee : PRINT_FEE;
  const physicalPrice = model.price > 0 ? model.price + effectivePrintFee : 0;
  const originalPhysicalPrice = model.originalPrice ? model.originalPrice + effectivePrintFee : null;

  // Logic for "New" label (within 7 days)
  const createdDate = new Date(model.createdAt);
  const diffTime = Date.now() - createdDate.getTime();
  const diffInDays = diffTime / (1000 * 60 * 60 * 24);
  const isNew = diffInDays >= 0 && diffInDays <= 7;

  const nextImg = () => {
    setImgError(false);
    setActiveImgIndex(prev => (prev + 1) % model.images.length);
  };
  
  const prevImg = () => {
    setImgError(false);
    setActiveImgIndex(prev => (prev - 1 + model.images.length) % model.images.length);
  };

  const handleThumbClick = (idx: number) => {
    setImgError(false);
    setActiveImgIndex(idx);
  };

  const handleDigitalContact = () => {
    const message = `שלום Polymode! אני מעוניין ברכישת הקובץ הדיגיטלי של המודל: "${model.name}".`;
    const encodedMessage = encodeURIComponent(message);
    window.open(`https://wa.me/972${PHONE_NUMBER.substring(1)}?text=${encodedMessage}`, '_blank');
  };

  const handleContactClick = () => {
    const message = `שלום Polymode! אני מעוניין בהצעת מחיר עבור המודל: "${model.name}". אשמח לפרטים נוספים לגבי הזמנה פיזית.`;
    const encodedMessage = encodeURIComponent(message);
    window.open(`https://wa.me/972${PHONE_NUMBER.substring(1)}?text=${encodedMessage}`, '_blank');
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-0 md:p-6 text-right overflow-hidden">
      <div className="absolute inset-0 bg-[#fcf8ee]/95 backdrop-blur-xl animate-in fade-in duration-300" onClick={onClose} />
      
      <div className="relative w-full h-full md:h-auto md:max-w-6xl md:max-h-[90vh] bg-[#fcf8ee] md:rounded-[2rem] border-none md:border md:border-[#3e2723]/10 shadow-2xl flex flex-col md:flex-row-reverse overflow-y-auto no-scrollbar animate-in zoom-in-95 duration-500">
        
        <button 
          onClick={onClose}
          className="sticky md:absolute top-4 left-4 md:top-6 md:left-6 z-50 p-2.5 bg-white/50 hover:bg-[#3e2723]/10 backdrop-blur-md rounded-full text-[#3e2723] transition-all border border-[#3e2723]/10 self-start"
        >
          <svg className="w-5 h-5 md:w-6 md:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M6 18L18 6M6 6l12 12" strokeWidth="2.5"/></svg>
        </button>

        <div className="w-full md:w-3/5 bg-white/60 flex flex-col border-l border-[#3e2723]/10 shrink-0">
          <div className="relative aspect-[4/3] md:aspect-auto md:flex-grow flex items-center justify-center overflow-hidden group">
            {!imgError ? (
              <img 
                key={activeImgIndex}
                src={model.images[activeImgIndex]} 
                alt={model.name}
                onError={() => setImgError(true)}
                className="w-full h-full object-contain animate-in fade-in duration-500 p-2 md:p-4"
              />
            ) : (
              <div className="flex flex-col items-center justify-center text-[#8d6e63] p-8 text-center">
                <svg className="w-16 h-16 mb-4 opacity-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                <p className="font-bold text-sm">התמונה לא נמצאה</p>
              </div>
            )}
            
            {/* Overlay Labels for Modal */}
            <div className="absolute top-6 left-6 right-6 z-20 flex justify-between items-start pointer-events-none">
              <div className="flex flex-col gap-2 items-start">
                {isNew && (
                  <div className="bg-emerald-500 text-black text-[10px] md:text-xs font-black px-3 py-1 rounded-lg uppercase tracking-wider shadow-2xl animate-bounce-slow">
                    חדש באתר
                  </div>
                )}
              </div>
            </div>

            {model.images.length > 1 && (
              <>
                <button 
                  onClick={prevImg}
                  className="absolute left-4 p-3 bg-white/60 hover:bg-blue-600 rounded-full text-[#3e2723] hover:text-white transition-all border border-[#3e2723]/10 hidden md:block"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M15 19l-7-7 7-7" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/></svg>
                </button>
                <button 
                  onClick={nextImg}
                  className="absolute right-4 p-3 bg-white/60 hover:bg-blue-600 rounded-full text-[#3e2723] hover:text-white transition-all border border-[#3e2723]/10 hidden md:block"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M9 5l7 7-7 7" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/></svg>
                </button>
              </>
            )}

            <div className="absolute bottom-4 left-4 bg-white/80 backdrop-blur-md px-2 py-1 rounded text-[9px] font-black text-[#5d4037] border border-[#3e2723]/10">
              {activeImgIndex + 1} / {model.images.length}
            </div>
          </div>
          
          <div className="p-4 md:p-6 bg-[#3e2723]/5 flex justify-start md:justify-center gap-3 md:gap-4 overflow-x-auto no-scrollbar border-t border-[#3e2723]/10">
            {model.images.map((img, idx) => (
              <button
                key={idx}
                onClick={() => handleThumbClick(idx)}
                className={`relative w-14 h-14 md:w-20 md:h-20 flex-shrink-0 rounded-xl md:rounded-2xl overflow-hidden border-2 transition-all duration-300 ${idx === activeImgIndex ? 'border-blue-500 scale-105' : 'border-[#3e2723]/10 opacity-50'}`}
              >
                <img src={img} className="w-full h-full object-cover" />
              </button>
            ))}
          </div>
        </div>

        <div className="w-full md:w-2/5 p-6 md:p-12 flex flex-col">
          <div className="mb-6 flex justify-between items-center">
             <span className="text-[10px] font-black uppercase tracking-widest text-blue-600 bg-blue-600/10 px-3 py-1 rounded-full border border-blue-600/20">{model.category}</span>
             <div className="flex items-center gap-1.5">
               <span className="font-black text-yellow-500 text-sm">{model.rating}</span>
               <svg className="w-3.5 h-3.5 fill-current text-yellow-500" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/></svg>
             </div>
          </div>

          <h1 className="text-2xl md:text-4xl font-black mb-4 leading-tight tracking-tight text-[#3e2723]">{model.name}</h1>
          <p className="text-[#5d4037] leading-relaxed mb-8 text-sm md:text-lg">{model.description}</p>

          <div className="grid grid-cols-2 gap-3 md:gap-4 mb-8">
            <div className="bg-white/60 p-4 rounded-2xl border border-[#3e2723]/10 shadow-sm">
              <span className="block text-[9px] text-[#8d6e63] uppercase font-black tracking-widest mb-1">פורמטים</span>
              <div className="flex flex-wrap gap-1.5">
                {model.fileFormat.map(f => <span key={f} className="text-[10px] text-blue-600 font-black">{f}</span>)}
              </div>
            </div>
            <div className="bg-white/60 p-4 rounded-2xl border border-[#3e2723]/10 shadow-sm">
              <span className="block text-[9px] text-[#8d6e63] uppercase font-black tracking-widest mb-1">פירוט</span>
              <span className="text-[10px] text-[#3e2723] font-black">{model.vertices}</span>
            </div>
          </div>

          <div className="mt-auto space-y-4 pt-6 border-t border-[#3e2723]/10">
            <div className="flex items-center justify-between">
              <div className="flex flex-col items-end gap-1">
                {model.price === 0 ? (
                  <span className="text-2xl font-black text-blue-600">להצעת מחיר צרו קשר</span>
                ) : (
                  <>
                    <ProductPrice 
                      price={physicalPrice} 
                      originalPrice={originalPhysicalPrice}
                      containerClassName="flex items-baseline gap-2"
                      priceClassName="text-3xl font-black text-[#3e2723]"
                      originalPriceClassName="text-sm text-[#8d6e63] line-through"
                      prefixClassName="text-sm text-[#8d6e63]"
                    />
                    <span className="text-[10px] text-[#8d6e63] font-bold uppercase tracking-wider">מחיר להזמנה פיזית (הדפסה)</span>
                  </>
                )}
              </div>
            </div>

            <div className="grid grid-cols-1 gap-3 pt-2">
              {model.price === 0 ? (
                <button 
                  onClick={handleContactClick}
                  className="w-full bg-[#25D366] hover:bg-[#20bd5c] py-4 rounded-xl font-black text-white transition-all active:scale-[0.98] text-base flex items-center justify-center gap-3"
                >
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/></svg>
                  פנייה בוואטסאפ להצעת מחיר
                </button>
              ) : (
                <>
                  {model.isPrintReady && (
                    <button 
                      onClick={() => onAddToCart(model, 'פיזי')}
                      className="w-full bg-[#3e2723] hover:bg-[#5d4037] py-4 rounded-xl font-black text-[#f4ebd0] transition-all active:scale-[0.98] text-base flex items-center justify-center gap-2 shadow-md"
                    >
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" strokeWidth="2"/></svg>
                      הזמנת הדפסה פיזית
                    </button>
                  )}
                  <button 
                    onClick={handleDigitalContact}
                    className="w-full bg-transparent border border-[#3e2723]/30 hover:border-[#3e2723]/60 hover:bg-[#3e2723]/5 py-3.5 rounded-xl font-bold text-[#5d4037] transition-all active:scale-[0.98] text-sm"
                  >
                    לרכישת קובץ דיגיטלי (וואטסאפ)
                  </button>
                </>
              )}
            </div>
            <p className="text-[10px] text-[#8d6e63] text-center">התשלום מתבצע מול נציג לאחר תיאום בוואטסאפ</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModelDetailsModal;
