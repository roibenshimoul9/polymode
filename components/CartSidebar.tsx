import React, { useState } from 'react';
import { CartItem } from '../types';

interface CartSidebarProps {
  isOpen: boolean;
  onClose: () => void;
  items: CartItem[];
  onRemove: (id: string, type: string) => void;
  onUpdateQuantity: (id: string, type: string, delta: number) => void;
}

const PRINT_FEE = 90.00; // עלות בסיס להדפסה פיזית
const PHONE_NUMBER = "0502156056";

const CartSidebar: React.FC<CartSidebarProps> = ({ isOpen, onClose, items, onRemove, onUpdateQuantity }) => {
  const [address, setAddress] = useState('');
  
  const hasPhysical = items.some(i => i.purchaseType === 'פיזי');
  
  const calculateItemPrice = (item: CartItem) => {
    return item.purchaseType === 'פיזי' ? item.price + PRINT_FEE : item.price;
  };

  const total = items.reduce((sum, item) => sum + calculateItemPrice(item) * item.quantity, 0);

  const handleCheckout = () => {
    const itemSummary = items.map(i => `• ${i.name} (${i.purchaseType}) - כמות: ${i.quantity}`).join('\n');
    const message = `שלום Polymode! אני מעוניין להזמין את הפריטים הבאים:\n\n${itemSummary}\n\nסה"כ לתשלום: ₪${total.toFixed(2)}${address ? `\nכתובת למשלוח: ${address}` : ''}\n\nאשמח שתחזרו אלי להשלמת הרכישה.`;
    const encodedMessage = encodeURIComponent(message);
    window.open(`https://wa.me/972${PHONE_NUMBER.substring(1)}?text=${encodedMessage}`, '_blank');
  };

  return (
    <>
      <div 
        className={`fixed inset-0 bg-black/70 backdrop-blur-sm z-[70] transition-opacity duration-300 ${isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
        onClick={onClose}
      />
      
      <div className={`fixed top-0 right-0 h-full w-full max-w-md bg-[#0a0a0a] border-l border-white/10 z-[80] transform transition-transform duration-300 ease-in-out ${isOpen ? 'translate-x-0' : 'translate-x-full'} flex flex-col text-right`}>
        <div className="p-6 border-b border-white/10 flex justify-between items-center bg-[#0d0d0d]">
          <h2 className="text-xl font-black flex items-center gap-2">
            הסל שלך
            <span className="text-xs bg-blue-600/20 text-blue-400 px-2 py-0.5 rounded-full font-bold">
              {items.length}
            </span>
          </h2>
          <button onClick={onClose} className="p-2 hover:bg-white/5 rounded-full text-gray-400 hover:text-white transition-colors">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
          </button>
        </div>

        <div className="flex-grow overflow-y-auto p-6 space-y-6">
          {items.length === 0 ? (
            <div className="h-full flex flex-col items-center justify-center text-gray-600 space-y-4">
              <div className="w-20 h-20 rounded-full bg-white/5 flex items-center justify-center">
                <svg className="w-10 h-10 opacity-20" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" /></svg>
              </div>
              <p className="font-bold">הסל שלך ריק כרגע</p>
              <button onClick={onClose} className="text-blue-500 text-sm hover:underline">חזרה לקטלוג</button>
            </div>
          ) : (
            items.map((item) => {
              const itemPrice = calculateItemPrice(item);
              return (
                <div key={`${item.id}-${item.purchaseType}`} className="flex flex-row-reverse gap-4 bg-white/5 p-4 rounded-2xl border border-white/5 group hover:border-white/10 transition-colors">
                  <div className="relative flex-shrink-0">
                    <img src={item.images[0]} alt={item.name} className="w-20 h-20 object-cover rounded-xl border border-white/10" />
                    <span className={`absolute -top-2 -right-2 px-1.5 py-0.5 rounded text-[8px] font-black uppercase shadow-lg ${item.purchaseType === 'פיזי' ? 'bg-cyan-500 text-black' : 'bg-blue-600 text-white'}`}>
                      {item.purchaseType}
                    </span>
                  </div>
                  <div className="flex-grow text-right flex flex-col justify-between">
                    <div>
                      <div className="flex justify-between items-start">
                        <button onClick={() => onRemove(item.id, item.purchaseType)} className="text-gray-600 hover:text-red-500 p-1 transition-colors">
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" strokeWidth="2"/></svg>
                        </button>
                        <h3 className="font-bold text-gray-100 text-sm line-clamp-1">{item.name}</h3>
                      </div>
                      <p className="text-[10px] text-gray-500 mt-1">
                        {item.purchaseType === 'פיזי' ? `כולל הדפסה וחומרים` : `קובץ דיגיטלי`}
                      </p>
                    </div>
                    <div className="flex items-center justify-between mt-2">
                      <span className="text-sm font-black text-white">₪{(itemPrice * item.quantity).toFixed(2)}</span>
                      <div className="flex items-center gap-2 bg-black/40 rounded-lg p-1 border border-white/10">
                        <button 
                          onClick={() => onUpdateQuantity(item.id, item.purchaseType, -1)}
                          className="w-6 h-6 flex items-center justify-center hover:bg-white/10 rounded font-bold"
                        >-</button>
                        <span className="text-xs font-black w-4 text-center">{item.quantity}</span>
                        <button 
                          onClick={() => onUpdateQuantity(item.id, item.purchaseType, 1)}
                          className="w-6 h-6 flex items-center justify-center hover:bg-white/10 rounded font-bold"
                        >+</button>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })
          )}

          {hasPhysical && items.length > 0 && (
            <div className="mt-8 space-y-3 bg-cyan-950/20 p-5 rounded-2xl border border-cyan-500/20">
              <h4 className="text-sm font-bold text-cyan-400 flex items-center justify-start gap-2">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" strokeWidth="2"/></svg>
                כתובת למשלוח
              </h4>
              <textarea 
                value={address}
                onChange={(e) => setAddress(e.target.value)}
                placeholder="הכנס כתובת מלאה למשלוח (עיר, רחוב, מספר בית)..."
                className="w-full bg-black/50 border border-white/10 rounded-xl p-3 text-xs text-white focus:outline-none focus:ring-1 focus:ring-cyan-500 min-h-[80px] text-right placeholder:text-gray-700"
              />
            </div>
          )}
        </div>

        {items.length > 0 && (
          <div className="p-6 border-t border-white/10 space-y-4 bg-[#0d0d0d]">
            <div className="space-y-2">
              <div className="flex justify-between text-xs text-gray-500 font-bold">
                <span>₪{total.toFixed(2)}</span>
                <span>סיכום</span>
              </div>
              <div className="flex justify-between items-center text-2xl font-black">
                <span className="text-blue-500">₪{total.toFixed(2)}</span>
                <span>סה"כ</span>
              </div>
            </div>
            
            <div className="pt-2 text-center">
              <p className="text-[11px] text-gray-500 mb-4">
                לביצוע הרכישה ותיאום תשלום, לחצו על הכפתור למעבר לוואטסאפ או התקשרו: 
                <a href={`tel:${PHONE_NUMBER}`} className="block text-blue-400 font-black text-lg mt-1 hover:underline tracking-widest">{PHONE_NUMBER}</a>
              </p>
              
              <button 
                onClick={handleCheckout}
                disabled={hasPhysical && !address.trim()}
                className="w-full bg-[#25D366] hover:bg-[#20bd5c] disabled:opacity-50 disabled:grayscale disabled:cursor-not-allowed text-white py-4 rounded-2xl font-black transition-all shadow-xl hover:shadow-green-500/20 active:scale-[0.98] flex items-center justify-center gap-3"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/></svg>
                {hasPhysical ? 'שליחת הזמנה לוואטסאפ' : 'צור קשר ורכישה'}
              </button>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default CartSidebar;