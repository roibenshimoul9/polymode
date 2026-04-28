import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';
import { Link } from 'react-router-dom';
import { MODELS } from '../constants';
import { Model3D, PurchaseType } from '../types';
import ModelCard from './ModelCard';

interface JudaicaPageProps {
  onAddToCart: (model: Model3D, type: PurchaseType) => void;
  onOpenDetails: (model: Model3D) => void;
}

const JudaicaPage: React.FC<JudaicaPageProps> = ({ onAddToCart, onOpenDetails }) => {
  const judaicaModels = MODELS.filter(m => m.category === 'יודאיקה ולבית');
  
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollY } = useScroll({ container: containerRef });
  const backgroundOpacity = useTransform(scrollY, [0, 500], [0.3, 0]);

  return (
    <motion.div 
      ref={containerRef}
      initial={{ opacity: 0 }} 
      animate={{ opacity: 1 }} 
      exit={{ opacity: 0 }} 
      transition={{ duration: 1, ease: "easeInOut" }}
      className="fixed inset-0 z-[100] bg-[#fcf8ee] text-[#3e2723] overflow-y-auto"
    >
      {/* Scrollable Background Image */}
      <motion.div 
        style={{ opacity: backgroundOpacity }} 
        className="fixed inset-0 z-0 pointer-events-none"
      >
        <img 
          src="https://images.unsplash.com/photo-1582299839420-1a12d1b54b1f?auto=format&fit=crop&q=80" 
          alt="Western Wall Background" 
          className="absolute inset-0 w-full h-full object-cover object-center grayscale mix-blend-multiply opacity-50"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#fcf8ee]/50 via-[#fcf8ee]/80 to-[#fcf8ee]" />
      </motion.div>

      {/* Decorative background elements */}
      <div className="fixed top-0 left-0 w-full h-full overflow-hidden pointer-events-none opacity-10">
        <div className="absolute top-[-10%] right-[-5%] w-[500px] h-[500px] rounded-full border-[1px] border-[#3e2723]"></div>
        <div className="absolute bottom-[-20%] left-[-10%] w-[800px] h-[800px] rounded-full border-[1px] border-[#3e2723]"></div>
      </div>

      <div className="relative z-10 min-h-[50vh] flex flex-col items-center justify-center px-6 pt-20 pb-12 text-center">
        <motion.h1 
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4, duration: 1, ease: "easeOut" }}
          className="text-7xl md:text-9xl font-black mb-6 tracking-tighter bg-clip-text text-transparent bg-gradient-to-l from-[#3e2723] via-[#8d6e63] to-[#3e2723] drop-shadow-sm"
          style={{ fontFamily: "'Assistant', sans-serif" }}
        >
          אור החיים
        </motion.h1>
        
        <motion.div 
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ delay: 0.8, duration: 1, ease: "easeInOut" }}
          className="h-[2px] w-32 bg-[#8d6e63] mx-auto mb-8 origin-center"
        />

        <motion.p 
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.8 }}
          className="text-xl md:text-3xl text-[#5d4037] max-w-2xl mx-auto leading-relaxed mb-12 font-light"
        >
          קולקציית יודאיקה ועיצוב הבית
          <br />
          <span className="text-lg md:text-xl mt-4 block opacity-80">מסורת עתיקה פוגשת חדשנות בתלת-ממד</span>
        </motion.p>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.6, duration: 0.8 }}
        >
          <Link 
            to="/" 
            className="inline-flex items-center justify-center px-8 py-3 border border-[#3e2723] text-[#3e2723] hover:bg-[#3e2723] hover:text-[#fcf8ee] transition-all duration-500 rounded-full font-medium text-lg tracking-wide uppercase"
          >
            חזרה לקטלוג
          </Link>
        </motion.div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-6 pb-24">
        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3 md:gap-6">
          {judaicaModels.map((model, index) => (
            <motion.div
              key={model.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.8 + (index * 0.1), duration: 0.5 }}
            >
              <ModelCard 
                model={model} 
                onAddToCart={onAddToCart} 
                onOpenDetails={onOpenDetails}
                theme="light"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default JudaicaPage;
