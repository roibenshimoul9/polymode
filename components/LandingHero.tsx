import React from 'react';
import { motion, AnimatePresence, useScroll, useTransform } from 'motion/react';
import { MODELS } from '../constants.ts';
import { Model3D } from '../types.ts';

const BACKGROUND_IMAGE = 'https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc?auto=format&fit=crop&q=80';
const carouselImages = MODELS.filter(m => m.images && m.images.length > 0);

const PremiumFrame: React.FC<{
  models: Model3D[]; 
  intervalMs: number; 
  className?: string;
  onClick: (m: Model3D) => void;
}> = ({ models, intervalMs, className, onClick }) => {
  const [index, setIndex] = React.useState(0);

  React.useEffect(() => {
    if (models.length <= 1) return;
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    if (mediaQuery.matches) return;

    const interval = setInterval(() => {
      setIndex((i) => (i + 1) % models.length);
    }, intervalMs);
    return () => clearInterval(interval);
  }, [intervalMs, models.length]);

  if (models.length === 0) return null;

  return (
    <div 
      className={`relative w-full aspect-square rounded-xl md:rounded-[14px] shadow-[0_10px_30px_-15px_rgba(0,0,0,0.15)] border border-[#3e2723]/5 overflow-hidden bg-[#fcf8ee]/50 cursor-pointer transition-transform hover:scale-[1.03] duration-500 ease-out will-change-transform ${className || ''}`}
      onClick={() => onClick(models[index])}
    >
      <div className="absolute inset-0 bg-[#fcf8ee]">
        {models.map((model, i) => (
          <img
            key={`${model.id}-${i}`}
            src={model.images[0]}
            alt={model.name}
            loading="lazy"
            className={`absolute inset-0 w-full h-full object-cover object-center transition-opacity duration-1000 ease-in-out will-change-opacity ${
              i === index ? 'opacity-100 z-10' : 'opacity-0 z-0'
            }`}
          />
        ))}
      </div>
    </div>
  );
};

interface LandingHeroProps {
  onOpenDetails?: (m: Model3D) => void;
}

const LandingHero: React.FC<LandingHeroProps> = ({ onOpenDetails }) => {
  const { scrollY } = useScroll();
  const backgroundOpacity = useTransform(scrollY, [0, 800], [1, 0]);

  const scrollToCatalog = () => {
    const catalogElement = document.getElementById('catalog-section');
    if (catalogElement) {
      catalogElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="relative w-full min-h-[100dvh] pt-12 pb-32 overflow-hidden flex flex-col items-center justify-center bg-transparent">
      {/* Background */}
      <motion.div 
        style={{ 
          opacity: backgroundOpacity,
          willChange: 'opacity',
          transform: 'translate3d(0, 0, 0)'
        }} 
        className="fixed inset-0 z-0 pointer-events-none"
      >
        <motion.img
          src={BACKGROUND_IMAGE}
          alt="Background"
          className="absolute inset-0 w-full h-full object-cover object-center"
          initial={{ opacity: 0, scale: 1.05 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.5, ease: 'easeInOut' }}
        />
        {/* Overlay to ensure text readability and maintain site's beige feel */}
        <div className="absolute inset-0 bg-[#fcf8ee]/70 mix-blend-overlay z-10" />
        <div className="absolute inset-0 bg-gradient-to-b from-[#fcf8ee]/90 via-[#fcf8ee]/60 to-[#fcf8ee] z-10" />
      </motion.div>

      {/* Content */}
      <div className="relative z-20 flex flex-col items-center justify-center text-center px-4 w-full h-full mt-[-20px]">
        {/* Logo Icon */}
        <motion.div 
          className="relative w-40 h-40 md:w-56 md:h-56 mb-1 md:mb-0 flex items-center justify-center"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: 'easeOut', delay: 0.2 }}
        >
          <svg viewBox="0 0 120 120" className="w-full h-full drop-shadow-[0_15px_30px_rgba(62,39,35,0.2)] overflow-visible">
            <g transform="translate(10, 15)">
              <path d="M50 15 L85 30 L50 45 L15 30 Z" fill="#3b82f6" />
              <path d="M50 45 L85 30 L85 70 L50 85 Z" fill="#1e3a8a" />
              <path d="M15 30 L50 45 L50 85 L15 70 Z" fill="#2563eb" />
              <text x="32" y="58" fill="#fcf8ee" fontSize="22" fontWeight="900" transform="skewY(20)" textAnchor="middle">P</text>
              <text x="68" y="92" fill="#fcf8ee" fontSize="22" fontWeight="900" transform="skewY(-20)" textAnchor="middle">M</text>
            </g>
          </svg>
        </motion.div>

        {/* Title */}
        <motion.h1 
          className="text-6xl md:text-8xl font-black text-[#3e2723] mb-0 md:mb-1 tracking-tighter uppercase"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: 'easeOut', delay: 0.4 }}
        >
          Polymode
        </motion.h1>
        
        {/* Subtitle */}
        <motion.p 
          className="text-xl md:text-3xl text-[#5d4037] max-w-2xl font-light mb-4 md:mb-6 tracking-wide"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: 'easeOut', delay: 0.6 }}
        >
          מהמסך למציאות בעיצוב אישי
        </motion.p>

        {/* Premium Imagery Row */}
        {carouselImages.length >= 4 && (
          <motion.div
            className="w-full max-w-[1020px] mx-auto px-4 mt-8 md:mt-12"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: 'easeOut', delay: 0.8 }}
          >
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4 lg:gap-[14px] w-full">
              <PremiumFrame 
                models={carouselImages.filter((_, i) => i % 4 === 0)} 
                intervalMs={5000} 
                onClick={(m) => onOpenDetails ? onOpenDetails(m) : scrollToCatalog()} 
              />
              <PremiumFrame 
                models={carouselImages.filter((_, i) => i % 4 === 1)} 
                intervalMs={6200} 
                onClick={(m) => onOpenDetails ? onOpenDetails(m) : scrollToCatalog()} 
              />
              <PremiumFrame 
                models={carouselImages.filter((_, i) => i % 4 === 2)} 
                intervalMs={7400} 
                onClick={(m) => onOpenDetails ? onOpenDetails(m) : scrollToCatalog()} 
              />
              <PremiumFrame 
                models={carouselImages.filter((_, i) => i % 4 === 3)} 
                intervalMs={8100} 
                onClick={(m) => onOpenDetails ? onOpenDetails(m) : scrollToCatalog()} 
              />
            </div>
          </motion.div>
        )}
      </div>

      {/* Scroll Down Indicator */}
      <motion.button 
        onClick={scrollToCatalog}
        className="absolute bottom-12 z-20 flex flex-col items-center justify-center text-[#5d4037] hover:text-[#3e2723] transition-colors cursor-pointer"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1 }}
      >
        <span className="text-sm tracking-widest uppercase font-bold mb-3">למעבר לקטלוג</span>
        <motion.svg 
          className="w-8 h-8" 
          fill="none" 
          stroke="currentColor" 
          viewBox="0 0 24 24"
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 1.5, ease: 'easeInOut' }}
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </motion.svg>
      </motion.button>
    </div>
  );
};

export default LandingHero;
