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
      {/* Background with Silk Texture Image */}
      <motion.div 
        style={{ 
          opacity: backgroundOpacity,
          willChange: 'opacity',
          transform: 'translate3d(0, 0, 0)'
        }} 
        className="fixed inset-0 z-0 pointer-events-none bg-[#fdfbf6] overflow-hidden"
      >
        {/* Blurred Silk Background */}
        <div 
          className="absolute -inset-4 bg-cover bg-center bg-no-repeat blur-[5px]"
          style={{ 
            backgroundImage: `url('https://res.cloudinary.com/djv6v984k/image/upload/v1781372874/EE216FEA-E066-4C7F-AD13-5E1FCEEF0FEC_q71hxp.png')`,
          }}
        />
        {/* Center Light mask for solid text readability */}
        <div className="absolute inset-0 bg-[#fdfbf6]/20 z-10" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(253,251,246,0.85)_0%,rgba(253,251,246,0.4)_50%,rgba(253,251,246,0.1)_100%)] z-10" />
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
          className="text-xl md:text-3xl text-[#3e2723] max-w-2xl font-medium mb-4 md:mb-6 tracking-wide drop-shadow-sm"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: 'easeOut', delay: 0.6 }}
        >
          הופכים כל רעיון למוצר בהתאמה אישית
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
