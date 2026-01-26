
import React, { useState } from 'react';
import { Model3D, PurchaseType } from '../types';
import { PRINT_FEE } from '../constants';

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
    const message = `שלום Polymode! אני מעוניין בפרטים לגבי עיצוב אישי לפי דרישה: "${model.name}". אשמח לייעוץ ראשוני.`;
    const encodedMessage = encodeURIComponent(message);
    window.open(`https://wa.me/972${PHONE_NUMBER.substring(1)}?text=${encodedMessage}`, '_blank');
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-0 md:p-6 text-right overflow-hidden">
      <div className="absolute inset-0 bg-black/95 backdrop-blur-xl animate-in fade-in duration-300" onClick={onClose} />
      
      <div className="relative w-full h-full md:h-auto md:max-w-6xl md:max-h-[90vh] bg-[#0d0d0d] md:rounded-[2rem] border-none md:border md:border-white/10 shadow-2xl flex flex-col md:flex-row-reverse overflow-y-auto no-scrollbar animate-in zoom-in-95 duration-500">
        
        <button 
          onClick={onClose}
          className="sticky md:absolute top-4 left-4 md:top-6 md:left-6 z-50 p-2.5 bg-black/50 hover:bg-white/10 backdrop-blur-md rounded-full text-white transition-all border border-white/5 self-start"
        >
          <svg className="w-5 h-5 md:w-6 md:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M6 18L18 6M6 6l12 12" strokeWidth="2.5"/></svg>
        </button>

        <div className="w-full md:w-3/5 bg-black flex flex-col border-l border-white/5 shrink-0">
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
              <div className="flex flex-col items-center justify-center text-gray-500 p-8 text-center">
                <svg className="w-16 h-16 mb-4 opacity-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                <p className="font-bold text-sm">התמונה לא נמצאה</p>
              </div>
            )}
            
            {model.images.length > 1 && (
              <>
                <button 
                  onClick={prevImg}
                  className="absolute left-4 p-3 bg-white/5 hover:bg-blue-600 rounded-full text-white transition-all border border-white/10 hidden md:block"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M15 19l-7-7 7-7" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/></svg>
                </button>
                <button 
                  onClick={nextImg}
                  className="absolute right-4 p-3 bg-white/5 hover:bg-blue-600 rounded-full text-white transition-all border border-white/10 hidden md:block"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M9 5l7 7-7 7" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/></svg>
                </button>
              </>
            )}

            <div className="absolute bottom-4 left-4 bg-black/50 backdrop-blur-md px-2 py-1 rounded text-[9px] font-black text-white/50 border border-white/5">
              {activeImgIndex + 1} / {model.images.length}
            </div>
          </div>
          
          <div className="p-4 md:p-6 bg-white/[0.02] flex justify-start md:justify-center gap-3 md:gap-4 overflow-x-auto no-scrollbar border-t border-white/5">
            {model.images.map((img, idx) => (
              <button
                key={idx}
                onClick={() => handleThumbClick(idx)}
                className={`relative w-14 h-14 md:w-20 md:h-20 flex-shrink-0 rounded-xl md:rounded-2xl overflow-hidden border-2 transition-all duration-300 ${idx === activeImgIndex ? 'border-blue-500 scale-105' : 'border-white/10 opacity-50'}`}
              >
                <img src={img} className="w-full h-full object-cover" />
              </button>
            ))}
          </div>
        </div>

        <div className="w-full md:w-2/5 p-6 md:p-12 flex flex-col">
          <div className="mb-6 flex justify-between items-center">
             <span className="text-[10px] font-black uppercase tracking-widest text-blue-500 bg-blue-500/10 px-3 py-1 rounded-full border border-blue-500/20">{model.category}</span>
             <div className="flex items-center gap-1.5">
               <span className="font-black text-yellow-500 text-sm">{model.rating}</span>
               <svg className="w-3.5 h-3.5 fill-current text-yellow-500" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/></svg>
             </div>
          </div>

          <h1 className="text-2xl md:text-4xl font-black mb-4 leading-tight tracking-tight text-white">{model.name}</h1>
          <p className="text-gray-400 leading-relaxed mb-8 text-sm md:text-lg">{model.description}</p>

          <div className="grid grid-cols-2 gap-3 md:gap-4 mb-8">
            <div className="bg-white/5 p-4 rounded-2xl border border-white/5">
              <span className="block text-[9px] text-gray-500 uppercase font-black tracking-widest mb-1">פורמטים</span>
              <div className="flex flex-wrap gap-1.5">
                {model.fileFormat.map(f => <span key={f} className="text-[10px] text-blue-400 font-black">{f}</span>)}
              </div>
            </div>
            <div className="bg-white/5 p-4 rounded-2xl border border-white/5">
              <span className="block text-[9px] text-gray-500 uppercase font-black tracking-widest mb-1">פירוט</span>
              <span className="text-[10px] text-white font-black">{model.vertices}</span>
            </div>
          </div>

          <div className="mt-auto space-y-4 pt-6 border-t border-white/10">
            <div className="flex items-center justify-between">
              <div className="flex flex-col items-end gap-1">
                {model.price === 0 ? (
                  <span className="text-2xl font-black text-cyan-400">בתיאום אישי</span>
                ) : (
                  <>
                    <div className="flex items-baseline gap-2">
                      <span className="text-3xl font-black text-white">₪{physicalPrice.toFixed(0)}</span>
                      {originalPhysicalPrice && (
                        <span className="text-sm text-gray-600 line-through">₪{originalPhysicalPrice.toFixed(0)}</span>
                      )}
                    </div>
                    <span className="text-[10px] text-gray-500 font-bold uppercase tracking-wider">מחיר להזמנה פיזית (הדפסה)</span>
                  </>
                )}
              </div>
            </div>

            <div className="grid grid-cols-1 gap-3 pt-2">
              {model.price === 0 ? (
                <button 
                  onClick={handleContactClick}
                  className="w-full bg-cyan-600 hover:bg-cyan-500 py-4 rounded-xl font-black text-white transition-all active:scale-[0.98] text-base"
                >
                  ייעוץ ראשוני בחינם
                </button>
              ) : (
                <>
                  <button 
                    onClick={handleDigitalContact}
                    className="w-full bg-white/5 hover:bg-white/10 border border-white/10 py-4 rounded-xl font-black text-gray-300 transition-all active:scale-[0.98] text-base"
                  >
                    לרכישת קובץ דיגיטלי (וואטסאפ)
                  </button>
                  
                  {model.isPrintReady && (
                    <button 
                      onClick={() => onAddToCart(model, 'פיזי')}
                      className="w-full bg-blue-600 hover:bg-blue-500 py-4 rounded-xl font-black text-white transition-all active:scale-[0.98] text-base flex items-center justify-center gap-2"
                    >
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" strokeWidth="2"/></svg>
                      הזמנת הדפסה פיזית
                    </button>
                  )}
                </>
              )}
            </div>
            <p className="text-[10px] text-gray-500 text-center">התשלום מתבצע מול נציג לאחר תיאום בוואטסאפ</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModelDetailsModal;
