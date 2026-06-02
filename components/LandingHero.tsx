import React from 'react';
import { motion, useScroll, useTransform } from 'motion/react';

const BACKGROUND_IMAGE = 'https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc?auto=format&fit=crop&q=80';

const LandingHero: React.FC = () => {
  const { scrollY } = useScroll();
  const backgroundOpacity = useTransform(scrollY, [0, 800], [1, 0]);

  const scrollToCatalog = () => {
    const catalogElement = document.getElementById('catalog-section');
    if (catalogElement) {
      catalogElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="relative w-full h-screen overflow-hidden flex flex-col items-center justify-center bg-transparent">
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
      <div className="relative z-20 flex flex-col items-center justify-center text-center px-4 w-full h-full mt-[-50px]">
        {/* Logo Icon */}
        <motion.div 
          className="relative w-40 h-40 md:w-56 md:h-56 mb-8 flex items-center justify-center"
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
          className="text-6xl md:text-8xl font-black text-[#3e2723] mb-4 tracking-tighter uppercase"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: 'easeOut', delay: 0.4 }}
        >
          Polymode
        </motion.h1>
        
        {/* Subtitle */}
        <motion.p 
          className="text-xl md:text-3xl text-[#5d4037] max-w-2xl font-light mb-16 tracking-wide"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: 'easeOut', delay: 0.6 }}
        >
          מהמסך למציאות בעיצוב אישי
        </motion.p>
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
