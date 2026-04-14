
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

const CATEGORIES: Category[] = ['הכל', 'דגמים ודמויות תלת־ממד', 'פידג\'טים', 'אביזרים', 'יודאיקה ולבית', 'בעלי חיים', 'DIY'];

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
    {/* Hero Section */}
    <section className="relative py-12 md:py-20 overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[400px] bg-blue-400/20 blur-[120px] rounded-full -z-10" />
      <div className="max-w-7xl mx-auto px-6 text-center">
        <h1 className="text-4xl md:text-7xl font-extrabold tracking-tight mb-4 md:mb-6 leading-tight text-[#3e2723]">
          מהמסך למציאות:<br />
          <span className="text-blue-600 uppercase tracking-wide">Polymode</span>
        </h1>
        <p className="text-[#5d4037] text-base md:text-xl max-w-2xl mx-auto mb-8 md:mb-10">
          זירת המסחר המקצועית למודלים ו<span className="text-blue-600 font-semibold">הדפסות תלת-ממד במשלוח עד הבית</span>.
        </p>
        
        <div className="max-w-xl mx-auto relative group">
          <div className="absolute -inset-1 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-2xl blur opacity-25 group-hover:opacity-50 transition duration-1000 group-hover:duration-200"></div>
          <div className="relative flex items-center bg-white/80 backdrop-blur-md border border-[#3e2723]/10 rounded-2xl p-1.5 md:p-2 flex-row-reverse shadow-sm">
            <svg className="w-5 h-5 text-[#8d6e63] mr-3 ml-3 md:mr-4 md:ml-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
            <input 
              type="text" 
              placeholder="חפש מודלים להדפסה..."
              className="flex-grow bg-transparent border-none focus:ring-0 text-[#3e2723] placeholder:text-[#8d6e63] px-2 md:px-4 py-2 md:py-3 text-sm md:text-base text-right"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <button className="bg-blue-600 text-white px-4 md:px-6 py-2 md:py-3 rounded-xl font-semibold hover:bg-blue-500 transition-colors hidden sm:block">
              חיפוש
            </button>
          </div>
        </div>
      </div>
    </section>

    {/* Catalog Controls */}
    <section className="sticky top-[73px] z-40 bg-[#fcf8ee]/95 backdrop-blur-md border-b border-[#3e2723]/10 py-3 md:py-4">
      <div className="max-w-7xl mx-auto px-6 space-y-4">
        {/* Category Row */}
        <div className="overflow-x-auto no-scrollbar flex items-center justify-start space-x-2 space-x-reverse pb-1">
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
              className={`whitespace-nowrap px-4 md:px-6 py-1.5 md:py-2 rounded-full text-[10px] md:text-xs font-bold uppercase tracking-wider transition-all ${
                selectedCategory === cat 
                  ? 'bg-blue-600 text-white shadow-lg shadow-blue-600/30' 
                  : 'bg-[#3e2723]/5 text-[#5d4037] hover:bg-[#3e2723]/10 hover:text-[#3e2723]'
              }`}
            >
              {cat}
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
      <div 
        className="min-h-screen flex flex-col text-right bg-[#fcf8ee]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)' opacity='0.04'/%3E%3C/svg%3E")`,
        }}
      >
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

        <footer className="bg-[#f4ebd0] border-t border-[#3e2723]/10 py-12">
          <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row-reverse justify-between items-center gap-8 text-center md:text-right">
            <div className="space-y-4">
              <div className="flex items-center justify-center md:justify-start space-x-2 space-x-reverse">
                <div className="relative w-12 h-12 flex items-center justify-center">
                  <svg viewBox="0 0 120 120" className="w-full h-full drop-shadow-[0_5px_15px_rgba(59,130,246,0.3)] overflow-visible">
                    <g transform="translate(10, 15)">
                      <path d="M50 15 L85 30 L50 45 L15 30 Z" fill="#3b82f6" />
                      <path d="M50 45 L85 30 L85 70 L50 85 Z" fill="#1e3a8a" />
                      <path d="M15 30 L50 45 L50 85 L15 70 Z" fill="#2563eb" />
                      <text x="32" y="58" fill="white" fontSize="22" fontWeight="900" transform="skewY(20)" textAnchor="middle">P</text>
                      <text x="68" y="92" fill="white" fontSize="22" fontWeight="900" transform="skewY(-20)" textAnchor="middle">M</text>
                    </g>
                  </svg>
                </div>
                <Link to="/" className="font-black tracking-widest text-xl uppercase bg-gradient-to-l from-[#3e2723] to-[#8d6e63] bg-clip-text text-transparent">Polymode</Link>
              </div>
              <p className="text-xs text-[#5d4037] max-w-xs leading-relaxed">זירת המסחר המקצועית בישראל לנכסי תלת-ממד, פרימיום ושירותי הדפסה איכותיים.</p>
            </div>
            
            <div className="flex flex-wrap justify-center gap-8 text-[10px] font-semibold text-[#8d6e63] uppercase tracking-[0.2em]">
              <Link to="/guide" className="hover:text-blue-600 transition-colors">מדריך הדפסה פיזית</Link>
              <Link to="/licenses" className="hover:text-[#3e2723] transition-colors">רישיונות דיגיטליים</Link>
              <Link to="/privacy" className="hover:text-[#3e2723] transition-colors">מדיניות פרטיות</Link>
              <a href="https://discord.com" target="_blank" rel="noopener noreferrer" className="hover:text-[#3e2723] transition-colors border-r border-[#3e2723]/10 pr-8">קהילת דיסקורד</a>
            </div>
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
