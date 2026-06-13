import React from 'react';
import { motion, AnimatePresence, useScroll, useTransform } from 'motion/react';
import { MODELS } from '../constants.ts';
import { Model3D } from '../types.ts';

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
      
      {/* Indicator dots */}
      <div className="absolute bottom-2 md:bottom-3 left-1/2 -translate-x-1/2 flex gap-1.5 z-20 pointer-events-auto">
        {models.map((_, i) => (
          <button
            key={i}
            onClick={(e) => {
              e.stopPropagation();
              setIndex(i);
            }}
            className={`w-1.5 h-1.5 rounded-full transition-all duration-300 ${
              i === index ? 'bg-white scale-125 opacity-100' : 'bg-white/40 hover:bg-white/70 opacity-60'
            }`}
            aria-label={`Go to image ${i + 1}`}
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
      {/* Background with Live Mesh Gradient */}
      <motion.div 
        style={{ 
          opacity: backgroundOpacity,
          willChange: 'opacity',
          transform: 'translate3d(0, 0, 0)'
        }} 
        className="fixed inset-0 z-0 pointer-events-none bg-[#fdfbf6] overflow-hidden"
      >
        <style>{`
          @keyframes mesh-blob-1 {
            0%   { transform: translate(0px, 0px) scale(1); }
            33%  { transform: translate(5vw, -5vh) scale(1.1); }
            66%  { transform: translate(-3vw, 4vh) scale(0.9); }
            100% { transform: translate(0px, 0px) scale(1); }
          }
          @keyframes mesh-blob-2 {
            0%   { transform: translate(0px, 0px) scale(1.1); }
            33%  { transform: translate(-5vw, 6vh) scale(0.9); }
            66%  { transform: translate(4vw, -4vh) scale(1.05); }
            100% { transform: translate(0px, 0px) scale(1.1); }
          }
          @keyframes mesh-blob-3 {
            0%   { transform: translate(0px, 0px) scale(0.9); }
            33%  { transform: translate(4vw, 4vh) scale(1.1); }
            66%  { transform: translate(-4vw, -3vh) scale(0.95); }
            100% { transform: translate(0px, 0px) scale(0.9); }
          }
          @media (prefers-reduced-motion: reduce) {
            .mesh-animate {
              animation: none !important;
              transform: none !important;
            }
          }
          .mesh-blob-1 { animation: mesh-blob-1 25s infinite alternate ease-in-out; }
          .mesh-blob-2 { animation: mesh-blob-2 28s infinite alternate-reverse ease-in-out; }
          .mesh-blob-3 { animation: mesh-blob-3 22s infinite alternate ease-in-out; }
        `}</style>
        
        {/* Animated Mesh Blobs */}
        {/* Subtle Blue */}
        <div className="absolute top-[-20%] left-[-10%] w-[60vw] h-[60vw] md:w-[40vw] md:h-[40vw] rounded-full bg-blue-300/40 mix-blend-multiply blur-[100px] md:blur-[140px] mesh-animate mesh-blob-1 opacity-70" />
        {/* Warm Golden-Brown */}
        <div className="absolute bottom-[-20%] right-[-10%] w-[70vw] h-[70vw] md:w-[50vw] md:h-[50vw] rounded-full bg-[#d7ccc8]/60 mix-blend-multiply blur-[100px] md:blur-[150px] mesh-animate mesh-blob-2 opacity-80" />
        {/* Soft Peach/Pink touch */}
        <div className="absolute top-[20%] right-[-20%] w-[50vw] h-[50vw] md:w-[35vw] md:h-[35vw] rounded-full bg-rose-200/40 mix-blend-multiply blur-[90px] md:blur-[130px] mesh-animate mesh-blob-3 opacity-60" />
        {/* Secondary Base adjustment blob */}
        <div className="absolute bottom-[-10%] left-[10%] w-[55vw] h-[55vw] md:w-[30vw] md:h-[30vw] rounded-full bg-[#f5ede0]/80 mix-blend-multiply blur-[100px] md:blur-[120px] mesh-animate mesh-blob-1 opacity-70" style={{ animationDelay: '-10s' }} />

        {/* Center Light mask for solid text readability */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(253,251,246,0.6)_0%,rgba(253,251,246,0)_70%)] z-10" />

        {/* 3D Wireframe Cubes */}
        {/* Cube 1 (Top Right) */}
        <div className="absolute top-[15%] right-[5%] w-24 h-24 md:w-40 md:h-40 opacity-[0.04] z-10">
           <svg viewBox="0 0 100 100" className="w-full h-full text-[#3e2723]" fill="none" stroke="currentColor" strokeWidth="1.5">
              <path d="M50 15 L85 30 L50 45 L15 30 Z" />
              <path d="M50 45 L85 30 L85 70 L50 85 Z" />
              <path d="M15 30 L50 45 L50 85 L15 70 Z" />
           </svg>
        </div>
        {/* Cube 2 (Bottom Left) */}
        <div className="absolute bottom-[25%] left-[5%] w-32 h-32 md:w-48 md:h-48 opacity-[0.03] z-10">
           <svg viewBox="0 0 100 100" className="w-full h-full text-[#3e2723]" fill="none" stroke="currentColor" strokeWidth="1">
              <path d="M50 15 L85 30 L50 45 L15 30 Z" />
              <path d="M50 45 L85 30 L85 70 L50 85 Z" />
              <path d="M15 30 L50 45 L50 85 L15 70 Z" />
           </svg>
        </div>
        {/* Cube 3 (Mid Top Left) */}
        <div className="absolute top-[35%] left-[10%] w-16 h-16 md:w-20 md:h-20 opacity-[0.02] z-10">
           <svg viewBox="0 0 100 100" className="w-full h-full text-[#3e2723]" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M50 15 L85 30 L50 45 L15 30 Z" />
              <path d="M50 45 L85 30 L85 70 L50 85 Z" />
              <path d="M15 30 L50 45 L50 85 L15 70 Z" />
           </svg>
        </div>
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
          className="text-6xl md:text-8xl font-black text-[#3e2723] mb-0 md:mb-1 tracking-tighter uppercase drop-shadow-[0_4px_8px_rgba(62,39,35,0.15)]"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: 'easeOut', delay: 0.4 }}
        >
          Polymode
        </motion.h1>
        
        {/* Subtitle */}
        <motion.p 
          className="text-xl md:text-3xl text-[#3e2723] max-w-2xl font-semibold mb-4 md:mb-6 tracking-wide drop-shadow-sm"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: 'easeOut', delay: 0.6 }}
        >
          מהמסך למציאות בעיצוב אישי
        </motion.p>

        {/* Premium Imagery Row */}
        {carouselImages.length >= 4 && (
          <motion.div
            className="w-full max-w-full md:max-w-[1240px] mx-auto px-4 mt-8 md:mt-12"
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
        className="absolute bottom-12 z-20 flex flex-col items-center justify-center text-[#3e2723] hover:text-blue-600 transition-colors cursor-pointer drop-shadow-md"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1 }}
      >
        <span className="text-sm md:text-base tracking-widest uppercase font-black mb-3">למעבר לקטלוג</span>
        <motion.svg 
          className="w-8 h-8 md:w-10 md:h-10" 
          fill="none" 
          stroke="currentColor" 
          viewBox="0 0 24 24"
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 1.5, ease: 'easeInOut' }}
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </motion.svg>
      </motion.button>
    </div>
  );
};

export default LandingHero;
