import React, { useState, useMemo } from 'react';
import { HashRouter as Router, Routes, Route, Link } from 'react-router-dom';
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

const CATEGORIES: Category[] = ['הכל', 'דמויות', 'אביזרים', 'יודאיקה', 'DIY', 'קבצי הדפסת תלת מימד'];

const Catalog: React.FC<{ 
  searchQuery: string, 
  setSearchQuery: (s: string) => void,
  selectedCategory: Category,
  setSelectedCategory: (c: Category) => void,
  filteredModels: Model3D[],
  onAddToCart: (m: Model3D, t: PurchaseType) => void,
  onOpenDetails: (m: Model3D) => void
}> = ({ searchQuery, setSearchQuery, selectedCategory, setSelectedCategory, filteredModels, onAddToCart, onOpenDetails }) => (
  <>
    {/* Hero Section */}
    <section className="relative py-20 overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[400px] bg-blue-600/20 blur-[120px] rounded-full -z-10" />
      <div className="max-w-7xl mx-auto px-6 text-center">
        <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight mb-6 leading-tight text-white">
          מהמסך למציאות:<br />
          <span className="text-blue-500 uppercase tracking-wide">Polymode</span>
        </h1>
        <p className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto mb-10">
          זירת המסחר המקצועית למודלים ו<span className="text-cyan-400 font-semibold">הדפסות תלת-ממד במשלוח עד הבית</span>.
        </p>
        
        <div className="max-w-xl mx-auto relative group">
          <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 to-cyan-600 rounded-2xl blur opacity-25 group-hover:opacity-50 transition duration-1000 group-hover:duration-200"></div>
          <div className="relative flex items-center bg-[#111] border border-white/10 rounded-2xl p-2 flex-row-reverse">
            <svg className="w-5 h-5 text-gray-500 mr-4 ml-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
            <input 
              type="text" 
              placeholder="חפש דמויות, DIY, יודאיקה או מודלים להדפסה..."
              className="flex-grow bg-transparent border-none focus:ring-0 text-white px-4 py-3 text-sm md:text-base text-right"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <button className="bg-blue-600 text-white px-6 py-3 rounded-xl font-semibold hover:bg-blue-500 transition-colors hidden sm:block">
              חיפוש
            </button>
          </div>
        </div>
      </div>
    </section>

    {/* Catalog Controls */}
    <section className="sticky top-[73px] z-40 bg-black/95 border-b border-white/5 py-4">
      <div className="max-w-7xl mx-auto px-6 overflow-x-auto no-scrollbar flex items-center justify-start space-x-2 space-x-reverse">
        {CATEGORIES.map(cat => (
          <button
            key={cat}
            onClick={() => setSelectedCategory(cat)}
            className={`whitespace-nowrap px-6 py-2 rounded-full text-xs font-bold uppercase tracking-wider transition-all ${
              selectedCategory === cat 
                ? 'bg-blue-600 text-white shadow-lg shadow-blue-600/30' 
                : 'bg-white/5 text-gray-400 hover:bg-white/10 hover:text-white'
            }`}
          >
            {cat === 'קבצי הדפסת תלת מימד' ? '🖨️ ' + cat : cat}
          </button>
        ))}
      </div>
    </section>

    {/* Catalog Grid */}
    <section className="max-w-7xl mx-auto px-6 py-12">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {filteredModels.map(model => (
          <ModelCard 
            key={model.id} 
            model={model} 
            onAddToCart={onAddToCart} 
            onOpenDetails={onOpenDetails}
          />
        ))}
      </div>
    </section>
  </>
);

const App: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<Category>('הכל');
  const [searchQuery, setSearchQuery] = useState('');
  const [cart, setCart] = useState<CartItem[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [selectedModel, setSelectedModel] = useState<Model3D | null>(null);

  const filteredModels = useMemo(() => {
    return MODELS.filter(model => {
      const matchesCategory = selectedCategory === 'הכל' || 
                             (selectedCategory === 'קבצי הדפסת תלת מימד' ? model.isPrintReady : model.category === selectedCategory);
      const matchesSearch = model.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
                           model.description.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, searchQuery]);

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
      <div className="min-h-screen flex flex-col text-right bg-[#0a0a0a]">
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
          </Routes>
        </main>

        <footer className="bg-black border-t border-white/10 py-12">
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
                <Link to="/" className="font-black tracking-widest text-xl uppercase bg-gradient-to-l from-white to-gray-400 bg-clip-text text-transparent">Polymode</Link>
              </div>
              <p className="text-xs text-gray-600 max-w-xs leading-relaxed">זירת המסחר המקצועית בישראל לנכסי תלת-ממד, פרימיום ושירותי הדפסה איכותיים.</p>
            </div>
            
            <div className="flex flex-wrap justify-center gap-8 text-[10px] font-semibold text-gray-500 uppercase tracking-[0.2em]">
              <Link to="/guide" className="hover:text-blue-400 transition-colors">מדריך הדפסה פיזית</Link>
              <Link to="/licenses" className="hover:text-white transition-colors">רישיונות דיגיטליים</Link>
              <Link to="/privacy" className="hover:text-white transition-colors">מדיניות פרטיות</Link>
              <a href="https://discord.com" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors border-r border-white/10 pr-8">קהילת דיסקורד</a>
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