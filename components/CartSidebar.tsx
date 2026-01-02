
import React, { useState } from 'react';
import { CartItem } from '../types';

interface CartSidebarProps {
  isOpen: boolean;
  onClose: () => void;
  items: CartItem[];
  onRemove: (id: string, type: string) => void;
  onUpdateQuantity: (id: string, type: string, delta: number) => void;
}

const PRINT_FEE = 90.00; // Base physical fee in ILS

const CartSidebar: React.FC<CartSidebarProps> = ({ isOpen, onClose, items, onRemove, onUpdateQuantity }) => {
  const [address, setAddress] = useState('');
  
  const hasPhysical = items.some(i => i.purchaseType === 'פיזי');
  
  const calculateItemPrice = (item: CartItem) => {
    return item.purchaseType === 'פיזי' ? item.price + PRINT_FEE : item.price;
  };

  const total = items.reduce((sum, item) => sum + calculateItemPrice(item) * item.quantity, 0);

  return (
    <>
      <div 
        className={`fixed inset-0 bg-black/60 backdrop-blur-sm z-[70] transition-opacity duration-300 ${isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
        onClick={onClose}
      />
      
      <div className={`fixed top-0 right-0 h-full w-full max-w-md bg-[#0a0a0a] border-l border-white/10 z-[80] transform transition-transform duration-300 ease-in-out ${isOpen ? 'translate-x-0' : 'translate-x-full'} flex flex-col text-right`}>
        <div className="p-6 border-b border-white/10 flex justify-between items-center bg-[#0d0d0d]">
          <h2 className="text-xl font-bold flex items-center gap-2">
            הסל שלך
            <span className="text-xs bg-white/10 px-2 py-0.5 rounded-full text-gray-400 font-normal">
              {items.length} פריטים
            </span>
          </h2>
          <button onClick={onClose} className="p-2 hover:bg-white/5 rounded-full text-gray-400 hover:text-white">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
          </button>
        </div>

        <div className="flex-grow overflow-y-auto p-6 space-y-6">
          {items.length === 0 ? (
            <div className="h-full flex flex-col items-center justify-center text-gray-500 space-y-4">
              <svg className="w-16 h-16 opacity-20" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" /></svg>
              <p>הסל שלך ריק כרגע.</p>
            </div>
          ) : (
            items.map((item) => {
              const itemPrice = calculateItemPrice(item);
              return (
                <div key={`${item.id}-${item.purchaseType}`} className="flex flex-row-reverse space-x-4 bg-white/5 p-4 rounded-2xl border border-white/5 space-x-reverse">
                  <div className="relative">
                    <img src={item.imageUrl} alt={item.name} className="w-16 h-16 object-cover rounded-xl border border-white/10" />
                    <span className={`absolute -top-2 -right-2 px-1.5 py-0.5 rounded text-[8px] font-black uppercase ${item.purchaseType === 'פיזי' ? 'bg-cyan-500 text-black' : 'bg-blue-600 text-white'}`}>
                      {item.purchaseType}
                    </span>
                  </div>
                  <div className="flex-grow text-right">
                    <div className="flex justify-between items-start">
                      <button onClick={() => onRemove(item.id, item.purchaseType)} className="text-gray-500 hover:text-red-500 p-1">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" strokeWidth="2"/></svg>
                      </button>
                      <div>
                        <h3 className="font-bold text-gray-200 text-sm line-clamp-1">{item.name}</h3>
                        <p className="text-[10px] text-gray-500">
                          {item.purchaseType === 'פיזי' ? `כולל עלות הדפסה וחומרים` : `קובץ להורדה מיידית`}
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center justify-between mt-3">
                      <span className="text-sm font-bold text-blue-400">₪{(itemPrice * item.quantity).toFixed(2)}</span>
                      <div className="flex items-center space-x-2 space-x-reverse bg-black/40 rounded-lg p-1 border border-white/5">
                        <button 
                          onClick={() => onUpdateQuantity(item.id, item.purchaseType, -1)}
                          className="w-5 h-5 flex items-center justify-center hover:bg-white/10 rounded"
                        >-</button>
                        <span className="text-xs font-bold w-4 text-center">{item.quantity}</span>
                        <button 
                          onClick={() => onUpdateQuantity(item.id, item.purchaseType, 1)}
                          className="w-5 h-5 flex items-center justify-center hover:bg-white/10 rounded"
                        >+</button>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })
          )}

          {hasPhysical && (
            <div className="mt-8 space-y-3 bg-cyan-900/10 p-5 rounded-2xl border border-cyan-500/20 text-right">
              <h4 className="text-sm font-bold text-cyan-400 flex items-center justify-start gap-2">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" strokeWidth="2"/><path d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" strokeWidth="2"/></svg>
                כתובת למשלוח
              </h4>
              <textarea 
                value={address}
                onChange={(e) => setAddress(e.target.value)}
                placeholder="הכנס כתובת מלאה למשלוח..."
                className="w-full bg-black/50 border border-white/10 rounded-xl p-3 text-xs text-white focus:outline-none focus:ring-1 focus:ring-cyan-500 min-h-[80px] text-right"
              />
              <p className="text-[10px] text-gray-500 leading-tight">
                * זמן אספקה משוער: 3-5 ימי עסקים. תקבל מספר מעקב למייל.
              </p>
            </div>
          )}
        </div>

        {items.length > 0 && (
          <div className="p-6 border-t border-white/10 space-y-4 bg-black/50">
            <div className="space-y-2">
              <div className="flex justify-between text-xs text-gray-500">
                <span>₪{total.toFixed(2)}</span>
                <span>סיכום ביניים</span>
              </div>
              <div className="flex justify-between items-center text-xl font-bold">
                <span className="text-blue-400">₪{total.toFixed(2)}</span>
                <span>סה"כ לתשלום</span>
              </div>
            </div>
            <button 
              disabled={hasPhysical && !address.trim()}
              className="w-full bg-blue-600 hover:bg-blue-500 disabled:opacity-50 disabled:cursor-not-allowed text-white py-4 rounded-xl font-bold transition-all shadow-lg hover:shadow-blue-500/20 active:scale-95"
            >
              {hasPhysical ? 'אישור הזמנה ומשלוח' : 'רכישת קבצים דיגיטליים'}
            </button>
          </div>
        )}
      </div>
    </>
  );
};

export default CartSidebar;
