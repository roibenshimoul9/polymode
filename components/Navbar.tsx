import React from 'react';

interface NavbarProps {
  onCartToggle: () => void;
  cartCount: number;
}

const Navbar: React.FC<NavbarProps> = ({ onCartToggle, cartCount }) => {
  return (
    <nav className="sticky top-0 z-50 bg-black/80 backdrop-blur-md border-b border-white/10 px-6 py-4">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="flex items-center space-x-2 space-x-reverse">
          {/* High-Quality 3D Logo with Peeking Panda */}
          <div className="relative w-16 h-16 flex items-center justify-center group cursor-pointer overflow-visible">
            <svg viewBox="0 0 120 120" className="w-full h-full drop-shadow-[0_12px_24px_rgba(59,130,246,0.6)] overflow-visible">
              <defs>
                <linearGradient id="topFace" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#60a5fa" />
                  <stop offset="100%" stopColor="#3b82f6" />
                </linearGradient>
                <linearGradient id="frontFace" x1="0%" y1="0%" x2="0%" y2="100%">
                  <stop offset="0%" stopColor="#2563eb" />
                  <stop offset="100%" stopColor="#1d4ed8" />
                </linearGradient>
                <linearGradient id="sideFace" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#1e40af" />
                  <stop offset="100%" stopColor="#1e3a8a" />
                </linearGradient>
              </defs>
              
              {/* Panda Character - Peeking from behind the top edge */}
              <g className="transition-all duration-700 ease-out translate-y-4 group-hover:translate-y-1">
                {/* Ears with depth */}
                <circle cx="42" cy="22" r="8.5" fill="#000" />
                <circle cx="78" cy="22" r="8.5" fill="#000" />
                
                {/* White Head Shell */}
                <path d="M30 45 Q60 10 90 45" fill="white" stroke="#e2e8f0" strokeWidth="0.5" />
                
                {/* Expressive Eye Patches */}
                <ellipse cx="48" cy="34" rx="7" ry="9" fill="#111" transform="rotate(-15, 48, 34)" />
                <ellipse cx="72" cy="34" rx="7" ry="9" fill="#111" transform="rotate(15, 72, 34)" />
                
                {/* Eyes with pupils and highlights */}
                <circle cx="49" cy="33" r="3" fill="white" />
                <circle cx="49.5" cy="32.5" r="1.2" fill="#000" />
                <circle cx="71" cy="33" r="3" fill="white" />
                <circle cx="70.5" cy="32.5" r="1.2" fill="#000" />
                
                {/* Small Panda Nose */}
                <path d="M57 40 Q60 43 63 40" fill="none" stroke="#111" strokeWidth="1.5" strokeLinecap="round" />
                
                {/* Paws "holding" the top edge of the cube */}
                <g className="transition-transform duration-300 group-hover:scale-110">
                  <path d="M30 45 Q30 38 40 40" fill="#000" />
                  <path d="M90 45 Q90 38 80 40" fill="#000" />
                </g>
              </g>

              {/* Isometric Cube (Main Frame) */}
              <g transform="translate(10, 15)">
                {/* Top Face - the panda peeks from behind this line */}
                <path d="M50 15 L85 30 L50 45 L15 30 Z" fill="url(#topFace)" className="opacity-95" />
                {/* Right Side Face (M) */}
                <path d="M50 45 L85 30 L85 70 L50 85 Z" fill="url(#sideFace)" />
                {/* Front Left Face (P) */}
                <path d="M15 30 L50 45 L50 85 L15 70 Z" fill="url(#frontFace)" />
                
                {/* Perspective Typography */}
                <text 
                  x="32.5" 
                  y="58" 
                  fill="white" 
                  fontSize="22" 
                  fontWeight="900" 
                  fontFamily="system-ui, -apple-system, sans-serif"
                  textAnchor="middle"
                  transform="skewY(20)"
                  style={{ filter: 'drop-shadow(0px 2px 2px rgba(0,0,0,0.3))' }}
                >
                  P
                </text>

                <text 
                  x="67.5" 
                  y="92" 
                  fill="white" 
                  fontSize="22" 
                  fontWeight="900" 
                  fontFamily="system-ui, -apple-system, sans-serif"
                  textAnchor="middle"
                  transform="skewY(-20)"
                  style={{ filter: 'drop-shadow(0px 2px 2px rgba(0,0,0,0.3))' }}
                >
                  M
                </text>
              </g>
            </svg>
          </div>
          
          <span className="text-2xl font-black tracking-tighter bg-gradient-to-r from-white via-gray-300 to-gray-500 bg-clip-text text-transparent uppercase mr-2 select-none group-hover:from-blue-400 group-hover:to-white transition-all duration-500">
            Polymode
          </span>
        </div>

        <div className="hidden md:flex space-x-8 space-x-reverse text-sm font-bold text-gray-400">
          <a href="#" className="hover:text-blue-400 transition-colors uppercase tracking-widest">חנות</a>
          <a href="#" className="hover:text-blue-400 transition-colors uppercase tracking-widest">קטגוריות</a>
          <a href="#" className="hover:text-blue-400 transition-colors uppercase tracking-widest">מבצעים</a>
          <a href="#" className="hover:text-blue-400 transition-colors uppercase tracking-widest text-blue-500/80">תמיכה</a>
        </div>

        <div className="flex items-center space-x-6 space-x-reverse">
          <button 
            onClick={onCartToggle}
            className="relative p-2 text-gray-400 hover:text-white transition-colors"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
            </svg>
            {cartCount > 0 && (
              <span className="absolute top-0 right-0 -mr-1 bg-blue-600 text-white text-[10px] font-bold px-1.5 py-0.5 rounded-full ring-2 ring-black">
                {cartCount}
              </span>
            )}
          </button>
          <button className="bg-white text-black px-6 py-2 rounded-full text-sm font-black hover:bg-blue-400 hover:text-white transition-all transform active:scale-95 shadow-lg shadow-white/5">
            התחברות
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;