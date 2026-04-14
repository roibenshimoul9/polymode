
import React from 'react';
import { Link } from 'react-router-dom';

interface NavbarProps {
  onCartToggle: () => void;
  cartCount: number;
}

const PHONE_NUMBER = "0546843548";

const Navbar: React.FC<NavbarProps> = ({ onCartToggle, cartCount }) => {
  const handleSupportClick = (e: React.MouseEvent) => {
    e.preventDefault();
    const message = `שלום Polymode! אני זקוק לתמיכה או ייעוץ בנושא מודלים ותלת-ממד.`;
    const encodedMessage = encodeURIComponent(message);
    window.open(`https://wa.me/972${PHONE_NUMBER.substring(1)}?text=${encodedMessage}`, '_blank');
  };

  return (
    <nav className="sticky top-0 z-50 bg-[#fcf8ee]/90 backdrop-blur-md border-b border-[#3e2723]/10 px-6 py-4">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <Link to="/" className="flex items-center space-x-2 space-x-reverse group">
          <div className="relative w-16 h-16 flex items-center justify-center overflow-visible">
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
              
              <g transform="translate(10, 15)" className="group-hover:scale-105 transition-transform duration-500 origin-center">
                <path d="M50 15 L85 30 L50 45 L15 30 Z" fill="url(#topFace)" className="opacity-95" />
                <path d="M50 45 L85 30 L85 70 L50 85 Z" fill="url(#sideFace)" />
                <path d="M15 30 L50 45 L50 85 L15 70 Z" fill="url(#frontFace)" />
                <text x="32.5" y="58" fill="white" fontSize="22" fontWeight="900" textAnchor="middle" transform="skewY(20)">P</text>
                <text x="67.5" y="92" fill="white" fontSize="22" fontWeight="900" textAnchor="middle" transform="skewY(-20)">M</text>
              </g>
            </svg>
          </div>
          <span className="text-2xl font-black tracking-tighter bg-gradient-to-r from-[#3e2723] via-[#5d4037] to-[#8d6e63] bg-clip-text text-transparent uppercase mr-2 select-none group-hover:from-blue-600 group-hover:to-[#3e2723] transition-all duration-500">
            Polymode
          </span>
        </Link>

        <div className="hidden md:flex space-x-8 space-x-reverse text-sm font-bold text-[#5d4037]">
          <Link to="/" className="hover:text-blue-600 transition-colors uppercase tracking-widest">חנות</Link>
          <Link to="/guide" className="hover:text-blue-600 transition-colors uppercase tracking-widest">מדריך הדפסה</Link>
          <Link to="/specials" className="hover:text-blue-600 transition-colors uppercase tracking-widest text-red-500/80">מבצעים</Link>
          <a 
            href={`https://wa.me/972${PHONE_NUMBER.substring(1)}`}
            onClick={handleSupportClick}
            className="hover:text-blue-600 transition-colors uppercase tracking-widest text-blue-600/80"
          >
            תמיכה
          </a>
        </div>

        <div className="flex items-center space-x-6 space-x-reverse">
          <button 
            onClick={onCartToggle}
            className="relative p-2 text-[#5d4037] hover:text-[#3e2723] transition-colors"
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
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
