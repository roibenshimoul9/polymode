
import React, { useState, useMemo } from 'react';
import { HashRouter as Router, Routes, Route, Link, useNavigate } from 'react-router-dom';
import { MODELS } from './constants.ts';
import { Model3D, Category, CartItem, PurchaseType } from './types.ts';
import Navbar from './components/Navbar.tsx';
import ModelCard from './components/ModelCard.tsx';
import CartSidebar from './components/CartSidebar.tsx';
import GeminiAssistant from './components/GeminiAssistant.tsx';
import ModelDetailsModal from './components/ModelDetailsModal.tsx';
import PrintingGuide from './components/PrintingGuide.tsx';
import LicensesPage from './components/LicensesPage.tsx';
import PrivacyPolicy from './components/PrivacyPolicy.tsx';
import SpecialsPage from './components/SpecialsPage.tsx';
import JudaicaPage from './components/JudaicaPage.tsx';

import LandingHero from './components/LandingHero.tsx';

const CATEGORIES: Category[] = ['הכל', 'דגמים ודמויות תלת־ממד', 'מוצרים לרכב', 'פידג\'טים', 'אביזרים', 'יודאיקה ולבית', 'בעלי חיים', 'DIY'];

const Catalog: React.FC<{ 
  searchQuery: string, 
  setSearchQuery: (s: string) => void,
  selectedCategory: Category,
  setSelectedCategory: (c: Category) => void,
  minPrice: number | '',
  setMinPrice: (n: number | '') => void,
  maxPrice: number | '',
  setMaxPrice: (n: number | '') => void,
  filteredModels: Model3D[],
  onAddToCart: (m: Model3D, t: PurchaseType) => void,
  onOpenDetails: (m: Model3D) => void
}> = ({ 
  searchQuery, setSearchQuery, 
  selectedCategory, setSelectedCategory, 
  minPrice, setMinPrice, 
  maxPrice, setMaxPrice, 
  filteredModels, onAddToCart, onOpenDetails 
}) => {
  const navigate = useNavigate();
  
  return (
  <>
    {/* New Landing Hero Section */}
    <LandingHero onOpenDetails={onOpenDetails} />

    <div id="catalog-section" className="scroll-mt-[73px]"></div>

    <div className="max-w-7xl mx-auto px-6 mt-12 md:mt-16 text-center">
      <h2 className="text-2xl md:text-3xl font-black text-[#3e2723] mb-2 tracking-tight">
        הדמיון שלכם, המציאות שלנו
      </h2>
      <p className="text-sm md:text-base text-[#5d4037] max-w-2xl mx-auto">
        כל המודלים בקטלוג ניתנים להתאמה אישית מלאה – החל ממידות מדויקות ועד לבחירת גוונים שיתאימו בדיוק לחזון שלכם.<br/>
        אל תהססו לפנות אלינו, לשאלות לחץ{' '}
        <a 
          href={`https://wa.me/${import.meta.env.VITE_WHATSAPP_NUMBER || '972546843548'}?text=${encodeURIComponent('היי, יש לי שאלה בקשר להתאמה אישית')}`}
          target="_blank" 
          rel="noopener noreferrer"
          className="text-blue-600 font-bold hover:underline cursor-pointer"
        >
          תמיכה
        </a>.
      </p>
    </div>

    {/* Catalog Controls */}
    <section className="relative z-20 bg-[#fcf8ee]/95 backdrop-blur-md border-b border-[#3e2723]/10 py-3 md:py-4 mt-8 md:mt-8">
      <div className="max-w-7xl mx-auto px-6 space-y-4">
        
        {/* Added Search Bar Here */}
        <div className="max-w-xl mx-auto relative group mb-4">
          <div className="absolute -inset-1 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-2xl blur opacity-25 group-hover:opacity-50 transition duration-1000 group-hover:duration-200"></div>
          <div className="relative flex items-center bg-white/80 backdrop-blur-md border border-[#3e2723]/10 rounded-2xl p-1.5 md:p-2 flex-row-reverse shadow-sm">
            <svg className="w-5 h-5 text-[#8d6e63] mr-3 ml-3 md:mr-4 md:ml-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
            <input 
              type="text" 
              placeholder="כאן תמצא את מה שחלמת עליו או שפשוט נייצר לך אותו..."
              className="flex-grow bg-transparent border-none outline-none focus:ring-0 text-[#3e2723] placeholder:text-[#8d6e63] px-2 md:px-4 py-2 md:py-3 text-sm md:text-base text-right"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <button className="bg-blue-600 text-white px-4 md:px-6 py-2 md:py-3 rounded-xl font-semibold hover:bg-blue-500 transition-colors hidden sm:block">
              חיפוש
            </button>
          </div>
        </div>

        {/* Category Row */}
        <div className="overflow-x-auto no-scrollbar flex items-center justify-start space-x-2 space-x-reverse py-6 -my-6 px-1 -mx-1">
          {CATEGORIES.map(cat => (
            <button
              key={cat}
              onClick={() => {
                if (cat === 'יודאיקה ולבית') {
                  navigate('/judaica');
                } else {
                  setSelectedCategory(cat);
                }
              }}
              className={`relative whitespace-nowrap px-4 md:px-6 py-1.5 md:py-2 rounded-full text-[10px] md:text-xs font-bold uppercase tracking-wider transition-all ${
                selectedCategory === cat 
                  ? `bg-blue-600 text-white ${cat === 'יודאיקה ולבית' ? 'shadow-[0_4px_15px_rgba(37,99,235,0.4),0_0_12px_2px_rgba(37,99,235,0.5)]' : 'shadow-lg shadow-blue-600/30'}` 
                  : `bg-[#3e2723]/5 text-[#5d4037] hover:bg-[#3e2723]/10 hover:text-[#3e2723] ${cat === 'יודאיקה ולבית' ? 'shadow-[0_0_12px_2px_rgba(37,99,235,0.4)]' : ''}`
              }`}
            >
              {cat}
              {cat === 'יודאיקה ולבית' && (
                <span className="absolute -top-2.5 rtl:-left-2 ltr:-right-2 bg-gradient-to-tr from-yellow-500 to-yellow-400 text-white text-[8px] md:text-[9px] font-black px-1.5 md:px-2 py-0.5 rounded-full shadow-md z-10 whitespace-nowrap">
                  פופולרי
                </span>
              )}
            </button>
          ))}
        </div>

        {/* Price Range Filter Row */}
        <div className="flex flex-wrap items-center gap-3 md:gap-4 text-right">
          <div className="flex items-center gap-2 md:gap-3 bg-white/60 p-1 rounded-2xl border border-[#3e2723]/10 shadow-sm">
            <span className="text-[9px] md:text-[10px] font-black uppercase tracking-widest text-[#8d6e63] px-2 md:px-3 whitespace-nowrap">מחיר:</span>
            
            <div className="relative flex items-center">
              <span className="absolute right-2 text-[#8d6e63] text-[9px] md:text-[10px]">₪</span>
              <input 
                type="number" 
                placeholder="מ-"
                value={minPrice}
                onChange={(e) => setMinPrice(e.target.value === '' ? '' : Number(e.target.value))}
                className="w-16 md:w-24 bg-white border border-[#3e2723]/10 rounded-xl py-1 md:py-1.5 pr-5 md:pr-7 pl-2 md:pl-3 text-[10px] md:text-xs text-[#3e2723] focus:outline-none focus:border-blue-500 transition-colors"
              />
            </div>

            <div className="relative flex items-center">
              <span className="absolute right-2 text-[#8d6e63] text-[9px] md:text-[10px]">₪</span>
              <input 
                type="number" 
                placeholder="עד"
                value={maxPrice}
                onChange={(e) => setMaxPrice(e.target.value === '' ? '' : Number(e.target.value))}
                className="w-16 md:w-24 bg-white border border-[#3e2723]/10 rounded-xl py-1 md:py-1.5 pr-5 md:pr-7 pl-2 md:pl-3 text-[10px] md:text-xs text-[#3e2723] focus:outline-none focus:border-blue-500 transition-colors"
              />
            </div>

            {(minPrice !== '' || maxPrice !== '') && (
              <button 
                onClick={() => { setMinPrice(''); setMaxPrice(''); }}
                className="p-1 hover:bg-red-500/10 text-[#8d6e63] hover:text-red-500 transition-all rounded-lg ml-1"
              >
                <svg className="w-3 h-3 md:w-4 md:h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
              </button>
            )}
          </div>
          
          <div className="text-[9px] md:text-[10px] text-[#8d6e63] font-bold hidden sm:block">
            {filteredModels.length} תוצאות
          </div>
        </div>
      </div>
    </section>

    {/* Catalog Grid - Updated for 2 columns on mobile */}
    <section className="max-w-7xl mx-auto px-4 md:px-6 py-8 md:py-12">
      {filteredModels.length > 0 ? (
        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3 md:gap-6">
          {filteredModels.map(model => (
            <ModelCard 
              key={model.id} 
              model={model} 
              onAddToCart={onAddToCart} 
              onOpenDetails={onOpenDetails}
              theme="light"
            />
          ))}
        </div>
      ) : (
        <div className="text-center py-24 bg-white/60 rounded-[2rem] md:rounded-[3rem] border border-[#3e2723]/10 shadow-sm">
          <div className="w-16 h-16 md:w-20 md:h-20 bg-[#3e2723]/5 rounded-full flex items-center justify-center mx-auto mb-6 text-[#8d6e63]">
            <svg className="w-8 h-8 md:w-10 md:h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.172 9.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
          </div>
          <h3 className="text-xl md:text-2xl font-black text-[#3e2723] mb-2">לא נמצאו מודלים</h3>
          <p className="text-[#5d4037] text-sm">נסה לשנות את מסנני המחיר.</p>
          <button 
            onClick={() => { setSearchQuery(''); setSelectedCategory('הכל'); setMinPrice(''); setMaxPrice(''); }}
            className="mt-6 text-blue-600 font-bold hover:underline text-sm"
          >
            איפוס מסננים
          </button>
        </div>
      )}
    </section>

    {/* Social Proof Section */}
    <section className="max-w-7xl mx-auto px-4 md:px-6 py-12 md:py-20 mb-16 border-t border-[#3e2723]/10">
      {/* Stats Bar */}
      <div className="flex flex-col md:flex-row justify-center items-center gap-6 md:gap-16 mb-16 text-[#3e2723]">
        <div className="flex items-center gap-3">
          <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M5 13l4 4L19 7" /></svg>
          <span className="font-bold text-lg">מאות מוצרים הודפסו</span>
        </div>
        <div className="hidden md:block w-px h-8 bg-[#3e2723]/10"></div>
        <div className="flex items-center gap-3">
          <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" /></svg>
          <span className="font-bold text-lg">עיצוב אישי מלא</span>
        </div>
        <div className="hidden md:block w-px h-8 bg-[#3e2723]/10"></div>
        <div className="flex items-center gap-3">
          <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4" /></svg>
          <span className="font-bold text-lg">משלוח לכל הארץ</span>
        </div>
      </div>

      <div className="text-center mb-10">
        <h2 className="text-3xl md:text-5xl font-black text-[#3e2723] tracking-tight">לקוחות מספרים</h2>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {[
          { name: "דורין ס.", review: "איכות הדפסה מעולה! הזמנתי מעמד לסוני והגימור פשוט מושלם. שירות לקוחות זמין שעזר לי לבחור את הצבע הנכון לחדר." },
          { name: "עידן כ.", review: "הזמנתי מחזיק מפתחות לרכב בהתאמה אישית כמתנה לאבא שלי, וזה יצא מהמם! המשלוח הגיע מהר מאוד והמוצר נראה ומרגיש איכותי מאוד." },
          { name: "מאיה א.", review: "הקובץ למדפסת שינה לי את כל החוויה. מודלים מאוד נקיים שקל להדפיס אותם, בלי בעיות של תמיכות. אמשיך לקנות עוד ברור!" }
        ].map((item, idx) => (
          <div key={idx} className="bg-white/80 p-6 md:p-8 rounded-[2rem] shadow-sm border border-[#3e2723]/5 flex flex-col items-center text-center transition-transform hover:-translate-y-1">
            <div className="flex text-yellow-400 mb-4 gap-1">
              {[1, 2, 3, 4, 5].map((star) => (
                <svg key={star} className="w-5 h-5 fill-current" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>
              ))}
            </div>
            <p className="text-[#5d4037] text-sm md:text-base leading-relaxed mb-4 flex-grow italic">"{item.review}"</p>
            <h4 className="font-black text-[#3e2723]">{item.name}</h4>
          </div>
        ))}
      </div>
    </section>
  </>
  );
};

const App: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<Category>('הכל');
  const [searchQuery, setSearchQuery] = useState('');
  const [minPrice, setMinPrice] = useState<number | ''>('');
  const [maxPrice, setMaxPrice] = useState<number | ''>('');
  const [cart, setCart] = useState<CartItem[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [selectedModel, setSelectedModel] = useState<Model3D | null>(null);

  const filteredModels = useMemo(() => {
    return MODELS.filter(model => {
      const matchesCategory = selectedCategory === 'הכל' || model.category === selectedCategory;
      
      const matchesSearch = model.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
                           model.description.toLowerCase().includes(searchQuery.toLowerCase());
      
      const matchesMin = minPrice === '' || model.price >= minPrice;
      const matchesMax = maxPrice === '' || model.price <= maxPrice;

      return matchesCategory && matchesSearch && matchesMin && matchesMax;
    });
  }, [selectedCategory, searchQuery, minPrice, maxPrice]);

  const onAddToCart = (model: Model3D, type: PurchaseType) => {
    setCart(prev => {
      const existing = prev.find(item => item.id === model.id && item.purchaseType === type);
      if (existing) {
        return prev.map(item => (item.id === model.id && item.purchaseType === type) ? { ...item, quantity: item.quantity + 1 } : item);
      }
      return [...prev, { ...model, quantity: 1, purchaseType: type }];
    });
    setIsCartOpen(true);
    setSelectedModel(null);
  };

  const onUpdateQuantity = (id: string, type: string, delta: number) => {
    setCart(prev => prev.map(item => {
      if (item.id === id && item.purchaseType === type) {
        const newQty = Math.max(1, item.quantity + delta);
        return { ...item, quantity: newQty };
      }
      return item;
    }));
  };

  const onRemoveFromCart = (id: string, type: string) => {
    setCart(prev => prev.filter(item => !(item.id === id && item.purchaseType === type)));
  };

  return (
    <Router>
      <div className="min-h-screen flex flex-col text-right bg-[#fcf8ee] relative">
        {/* Hardware-accelerated fixed noise overlay for silky-smooth scrolling */}
        <div 
          className="fixed inset-0 z-50 pointer-events-none opacity-[0.03] mix-blend-overlay"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
            willChange: 'transform',
            transform: 'translate3d(0, 0, 0)'
          }}
        />
        <Navbar 
          onCartToggle={() => setIsCartOpen(true)} 
          cartCount={cart.reduce((a, b) => a + b.quantity, 0)} 
        />
        
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={
              <Catalog 
                searchQuery={searchQuery}
                setSearchQuery={setSearchQuery}
                selectedCategory={selectedCategory}
                setSelectedCategory={setSelectedCategory}
                minPrice={minPrice}
                setMinPrice={setMinPrice}
                maxPrice={maxPrice}
                setMaxPrice={setMaxPrice}
                filteredModels={filteredModels}
                onAddToCart={onAddToCart}
                onOpenDetails={setSelectedModel}
              />
            } />
            <Route path="/guide" element={<PrintingGuide />} />
            <Route path="/licenses" element={<LicensesPage />} />
            <Route path="/privacy" element={<PrivacyPolicy />} />
            <Route path="/specials" element={
              <SpecialsPage 
                onAddToCart={onAddToCart} 
                onOpenDetails={setSelectedModel}
              />
            } />
            <Route path="/judaica" element={
              <JudaicaPage 
                onAddToCart={onAddToCart} 
                onOpenDetails={setSelectedModel}
              />
            } />
          </Routes>
        </main>

        <footer className="bg-[#3e2723] text-white py-12 md:py-16">
          <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-12">
            {/* Logo and About */}
            <div className="space-y-4">
              <div className="flex items-center space-x-2 space-x-reverse mb-6">
                <div className="relative w-10 h-10 flex items-center justify-center">
                  <svg viewBox="0 0 120 120" className="w-full h-full overflow-visible">
                    <g transform="translate(10, 15)">
                      <path d="M50 15 L85 30 L50 45 L15 30 Z" fill="#3b82f6" opacity="0.9" />
                      <path d="M50 45 L85 30 L85 70 L50 85 Z" fill="#1e3a8a" opacity="0.9" />
                      <path d="M15 30 L50 45 L50 85 L15 70 Z" fill="#2563eb" opacity="0.9" />
                      <text x="32" y="58" fill="white" fontSize="22" fontWeight="900" transform="skewY(20)" textAnchor="middle">P</text>
                      <text x="68" y="92" fill="white" fontSize="22" fontWeight="900" transform="skewY(-20)" textAnchor="middle">M</text>
                    </g>
                  </svg>
                </div>
                <Link to="/" className="font-black tracking-widest text-xl uppercase text-white">Polymode</Link>
              </div>
              <p className="text-sm text-gray-400 leading-relaxed max-w-xs">
                הדפסות תלת-ממד בעיצוב אישי. זירת המסחר המקצועית בישראל לנכסי תלת-ממד פרימיום ושירותי הדפסה איכותיים.
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-lg font-bold mb-6 text-white tracking-widest uppercase">ניווט מהיר</h4>
              <ul className="space-y-3 text-sm text-gray-400">
                <li><Link to="/#catalog-section" className="hover:text-blue-400 transition-colors">קטלוג / חנות</Link></li>
                <li><Link to="/guide" className="hover:text-blue-400 transition-colors">מדריך הדפסה פיזית</Link></li>
                <li><Link to="/specials" className="hover:text-blue-400 transition-colors">מבצעים</Link></li>
                <li><a href="#" className="hover:text-blue-400 transition-colors">תמיכה ושירות לקוחות</a></li>
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h4 className="text-lg font-bold mb-6 text-white tracking-widest uppercase">צור קשר</h4>
              <ul className="space-y-3 text-sm text-gray-400 flex flex-col items-start border-none">
                <li className="flex items-center gap-2" dir="ltr">
                  <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
                  <a href="tel:050-000-0000" className="hover:text-blue-400 transition-colors">050-000-0000</a>
                </li>
                <li className="flex items-center gap-2" dir="ltr">
                  <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                  <a href="mailto:support@polymode.co.il" className="hover:text-blue-400 transition-colors">support@polymode.co.il</a>
                </li>
                <li className="flex items-center gap-2" dir="ltr">
                  <svg className="w-4 h-4 text-[#25D366]" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" /></svg>
                  <a href="https://wa.me/972500000000" className="hover:text-blue-400 transition-colors">WhatsApp</a>
                </li>
              </ul>
            </div>

            {/* Info */}
            <div>
              <h4 className="text-lg font-bold mb-6 text-white tracking-widest uppercase">מידע חשוב</h4>
              <ul className="space-y-3 text-sm text-gray-400">
                <li><Link to="/licenses" className="hover:text-blue-400 transition-colors">רישיונות דיגיטליים</Link></li>
                <li><Link to="/privacy" className="hover:text-blue-400 transition-colors">מדיניות פרטיות</Link></li>
                <li><a href="#" className="hover:text-blue-400 transition-colors">משלוחים וזמני אספקה</a></li>
                <li><a href="#" className="hover:text-blue-400 transition-colors">מדיניות החזרות וביטולים</a></li>
              </ul>
              
              <div className="mt-8 flex items-center gap-4">
                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors" aria-label="Instagram">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd" /></svg>
                </a>
              </div>
            </div>
          </div>
          
          <div className="max-w-7xl mx-auto px-6 mt-12 pt-8 border-t border-gray-700/50 text-center md:flex md:justify-between items-center text-sm text-gray-500">
            <p>© 2026 POLYMODE — כל הזכויות שמורות.</p>
          </div>
        </footer>

        <GeminiAssistant />
        <CartSidebar 
          isOpen={isCartOpen} 
          onClose={() => setIsCartOpen(false)} 
          items={cart}
          onRemove={onRemoveFromCart}
          onUpdateQuantity={onUpdateQuantity}
        />

        <ModelDetailsModal 
          model={selectedModel} 
          onClose={() => setSelectedModel(null)} 
          onAddToCart={onAddToCart}
        />
      </div>
    </Router>
  );
};

export default App;
