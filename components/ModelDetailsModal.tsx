
import React, { useState } from 'react';
import { Model3D, PurchaseType } from '../types';

interface ModelDetailsModalProps {
  model: Model3D | null;
  onClose: () => void;
  onAddToCart: (model: Model3D, type: PurchaseType) => void;
}

const PHONE_NUMBER = "0502156056";

const ModelDetailsModal: React.FC<ModelDetailsModalProps> = ({ model, onClose, onAddToCart }) => {
  if (!model) return null;

  const [activeImgIndex, setActiveImgIndex] = useState(0);

  const nextImg = () => setActiveImgIndex(prev => (prev + 1) % model.images.length);
  const prevImg = () => setActiveImgIndex(prev => (prev - 1 + model.images.length) % model.images.length);

  const handleContactClick = () => {
    const message = `שלום Polymode! אני מעוניין בפרטים לגבי עיצוב אישי לפי דרישה: "${model.name}". אשמח לייעוץ ראשוני.`;
    const encodedMessage = encodeURIComponent(message);
    window.open(`https://wa.me/972${PHONE_NUMBER.substring(1)}?text=${encodedMessage}`, '_blank');
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-6 text-right">
      <div className="absolute inset-0 bg-black/90 backdrop-blur-xl animate-in fade-in duration-300" onClick={onClose} />
      
      <div className="relative w-full max-w-6xl bg-[#0d0d0d] rounded-[2rem] overflow-hidden border border-white/10 shadow-[0_0_100px_rgba(0,0,0,0.8)] flex flex-col md:flex-row-reverse animate-in zoom-in-95 duration-500">
        
        {/* Close Button */}
        <button 
          onClick={onClose}
          className="absolute top-6 left-6 z-50 p-3 bg-black/50 hover:bg-white/10 backdrop-blur-md rounded-full text-white transition-all border border-white/5 active:scale-90"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M6 18L18 6M6 6l12 12" strokeWidth="2.5"/></svg>
        </button>

        {/* Image Gallery Side */}
        <div className="w-full md:w-3/5 bg-black flex flex-col border-l border-white/5">
          <div className="relative flex-grow flex items-center justify-center overflow-hidden min-h-[350px] md:min-h-[550px] group">
            <img 
              key={activeImgIndex}
              src={model.images[activeImgIndex]} 
              alt={model.name}
              className="w-full h-full object-contain animate-in fade-in slide-in-from-bottom-2 duration-500 p-4"
            />
            
            {model.images.length > 1 && (
              <>
                <button 
                  onClick={prevImg}
                  className="absolute left-6 p-4 bg-white/5 hover:bg-blue-600 rounded-full text-white transition-all border border-white/10 opacity-0 group-hover:opacity-100 -translate-x-4 group-hover:translate-x-0"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M15 19l-7-7 7-7" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/></svg>
                </button>
                <button 
                  onClick={nextImg}
                  className="absolute right-6 p-4 bg-white/5 hover:bg-blue-600 rounded-full text-white transition-all border border-white/10 opacity-0 group-hover:opacity-100 translate-x-4 group-hover:translate-x-0"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M9 5l7 7-7 7" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/></svg>
                </button>
              </>
            )}

            {/* Pagination Label */}
            <div className="absolute bottom-6 left-6 bg-black/50 backdrop-blur-md px-3 py-1.5 rounded-lg text-[10px] font-black text-white/50 border border-white/5">
              {activeImgIndex + 1} / {model.images.length}
            </div>
          </div>
          
          {/* Interactive Thumbnails */}
          <div className="p-6 bg-white/[0.02] flex justify-center gap-4 overflow-x-auto no-scrollbar border-t border-white/5">
            {model.images.map((img, idx) => (
              <button
                key={idx}
                onClick={() => setActiveImgIndex(idx)}
                className={`relative w-20 h-20 flex-shrink-0 rounded-2xl overflow-hidden border-2 transition-all duration-300 ${idx === activeImgIndex ? 'border-blue-500 scale-110 shadow-lg shadow-blue-500/20' : 'border-white/10 opacity-40 hover:opacity-100'}`}
              >
                <img src={img} className="w-full h-full object-cover" />
              </button>
            ))}
          </div>
        </div>

        {/* Content Side */}
        <div className="w-full md:w-2/5 p-8 md:p-12 flex flex-col overflow-y-auto max-h-[90vh]">
          <div className="mb-8 flex justify-between items-center">
             <span className="text-xs font-black uppercase tracking-widest text-blue-500 bg-blue-500/10 px-4 py-1.5 rounded-full border border-blue-500/20">{model.category}</span>
             <div className="flex items-center gap-1.5">
               <span className="text-xs font-bold text-gray-500 ml-1">({model.reviewsCount} ביקורות)</span>
               <span className="font-black text-yellow-500">{model.rating}</span>
               <svg className="w-4 h-4 fill-current text-yellow-500" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/></svg>
             </div>
          </div>

          <h1 className="text-4xl font-black mb-6 leading-tight tracking-tight">{model.name}</h1>
          <p className="text-gray-400 leading-relaxed mb-10 text-lg">{model.description}</p>

          <div className="grid grid-cols-2 gap-4 mb-10">
            <div className="bg-white/5 p-5 rounded-[1.5rem] border border-white/5">
              <span className="block text-[10px] text-gray-500 uppercase font-black tracking-widest mb-2">פורמטים נתמכים</span>
              <div className="flex flex-wrap gap-2">
                {model.fileFormat.map(f => <span key={f} className="text-xs text-blue-400 font-black">{f}</span>)}
              </div>
            </div>
            <div className="bg-white/5 p-5 rounded-[1.5rem] border border-white/5">
              <span className="block text-[10px] text-gray-500 uppercase font-black tracking-widest mb-2">רמת פירוט</span>
              <span className="text-xs text-white font-black">{model.vertices}</span>
            </div>
          </div>

          <div className="mt-auto space-y-4 pt-8 border-t border-white/10">
            <div className="flex items-center justify-between">
              <div className="flex items-baseline gap-3">
                {model.price === 0 ? (
                  <span className="text-4xl font-black text-cyan-400">בתיאום אישי</span>
                ) : (
                  <>
                    <span className="text-4xl font-black text-white">₪{model.price.toFixed(2)}</span>
                    {model.originalPrice && (
                      <span className="text-lg text-gray-600 line-through">₪{model.originalPrice.toFixed(2)}</span>
                    )}
                  </>
                )}
              </div>
            </div>

            <div className="grid grid-cols-1 gap-4 pt-4">
              {model.price === 0 ? (
                <button 
                  onClick={handleContactClick}
                  className="w-full bg-cyan-600 hover:bg-cyan-500 py-5 rounded-2xl font-black text-white transition-all shadow-2xl shadow-cyan-900/40 active:scale-[0.98] text-lg flex items-center justify-center gap-3"
                >
                  צרו איתנו קשר עכשיו
                </button>
              ) : (
                <>
                  <button 
                    onClick={() => onAddToCart(model, 'דיגיטלי')}
                    className="w-full bg-blue-600 hover:bg-blue-500 py-5 rounded-2xl font-black text-white transition-all shadow-2xl shadow-blue-900/40 active:scale-[0.98] text-lg"
                  >
                    הוסף לסל: הורדה דיגיטלית
                  </button>
                  
                  {model.isPrintReady && (
                    <button 
                      onClick={() => onAddToCart(model, 'פיזי')}
                      className="w-full bg-white/5 hover:bg-white/10 border border-white/10 py-5 rounded-2xl font-black text-white transition-all active:scale-[0.98] text-lg flex items-center justify-center gap-3 group"
                    >
                      <span className="group-hover:text-cyan-400 transition-colors">הזמנת הדפסה פיזית עד הבית</span>
                    </button>
                  )}
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModelDetailsModal;
