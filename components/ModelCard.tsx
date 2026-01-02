
import React from 'react';
import { Model3D, PurchaseType } from '../types';

interface ModelCardProps {
  model: Model3D;
  onAddToCart: (model: Model3D, type: PurchaseType) => void;
}

const ModelCard: React.FC<ModelCardProps> = ({ model, onAddToCart }) => {
  return (
    <div className="group bg-[#111] border border-white/5 rounded-2xl overflow-hidden hover:border-blue-500/50 transition-all duration-300 flex flex-col h-full">
      <div className="relative aspect-[4/3] overflow-hidden">
        <img 
          src={model.imageUrl} 
          alt={model.name} 
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
        />
        <div className="absolute top-3 right-3 flex flex-col gap-2">
          {model.isOnSale && (
            <div className="bg-red-600 text-white text-[10px] font-black px-2 py-1 rounded uppercase tracking-wider">
              מבצע
            </div>
          )}
          {model.isPrintReady && (
            <div className="bg-cyan-500 text-black text-[10px] font-black px-2 py-1 rounded uppercase tracking-wider flex items-center gap-1">
              <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 24 24"><path d="M19 8h-1V3H6v5H5c-1.66 0-3 1.34-3 3v6h4v4h12v-4h4v-6c0-1.66-1.34-3-3-3zM8 5h8v3H8V5zm8 14H8v-4h8v4zm2-4v-2H6v2H4v-4c0-.55.45-1 1-1h14c.55 0 1 .45 1 1v4h-2z"/><circle cx="18" cy="11.5" r="1"/></svg>
              מוכן להדפסה
            </div>
          )}
        </div>
      </div>

      <div className="p-4 flex-grow flex flex-col text-right">
        <div className="flex justify-between items-start mb-1">
          <span className="text-[10px] uppercase tracking-widest text-blue-400 font-bold">{model.category}</span>
          <div className="flex items-center space-x-1 space-x-reverse">
            <svg className="w-3 h-3 text-yellow-500 fill-current" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/></svg>
            <span className="text-xs text-gray-400">{model.rating}</span>
          </div>
        </div>
        
        <h3 className="font-bold text-gray-100 mb-2 line-clamp-1">{model.name}</h3>
        <p className="text-xs text-gray-400 line-clamp-2 mb-2">{model.description}</p>
        
        <div className="flex flex-wrap gap-2 mb-4 justify-start">
           {model.fileFormat.map(format => (
              <span key={format} className="text-[8px] border border-white/10 text-gray-500 px-1 py-0.5 rounded uppercase font-bold">
                {format}
              </span>
            ))}
        </div>

        <div className="mt-auto pt-4 border-t border-white/5 space-y-3">
          <div className="flex items-baseline space-x-2 space-x-reverse">
            <span className="text-lg font-bold text-white">₪{model.price.toFixed(2)}</span>
            {model.originalPrice && (
              <span className="text-xs text-gray-500 line-through">₪{model.originalPrice.toFixed(2)}</span>
            )}
          </div>
          
          <div className="grid grid-cols-1 gap-2">
            <button 
              onClick={() => onAddToCart(model, 'דיגיטלי')}
              className="w-full flex items-center justify-center gap-2 py-2.5 bg-blue-600 hover:bg-blue-500 rounded-xl text-xs font-bold text-white transition-all shadow-lg shadow-blue-900/20"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" strokeWidth="2"/></svg>
              הורדה דיגיטלית
            </button>
            
            {model.isPrintReady && (
              <button 
                onClick={() => onAddToCart(model, 'פיזי')}
                className="w-full flex items-center justify-center gap-2 py-2.5 bg-white/5 hover:bg-white/10 rounded-xl text-xs font-bold text-cyan-400 border border-cyan-500/20 transition-all"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" strokeWidth="2"/></svg>
                הזמנת מודל מודפס
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModelCard;
