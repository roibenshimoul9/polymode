import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { User } from '../types';

interface NavbarProps {
  onCartToggle: () => void;
  cartCount: number;
  user: User | null;
  onLoginClick: () => void;
  onLogout: () => void;
}

const PHONE_NUMBER = "0502156056";

const Navbar: React.FC<NavbarProps> = ({ onCartToggle, cartCount, user, onLoginClick, onLogout }) => {
  const [isUserMenuOpen, setIsUserMenuOpen] = useState(false);

  const handleSupportClick = (e: React.MouseEvent) => {
    e.preventDefault();
    const message = `שלום Polymode! אני זקוק לתמיכה או ייעוץ בנושא מודלים ותלת-ממד.`;
    const encodedMessage = encodeURIComponent(message);
    window.open(`https://wa.me/972${PHONE_NUMBER.substring(1)}?text=${encodedMessage}`, '_blank');
  };

  return (
    <nav className="sticky top-0 z-50 bg-black/80 backdrop-blur-md border-b border-white/10 px-6 py-4">
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
          <span className="text-2xl font-black tracking-tighter bg-gradient-to-r from-white via-gray-300 to-gray-500 bg-clip-text text-transparent uppercase mr-2 select-none group-hover:from-blue-400 group-hover:to-white transition-all duration-500">
            Polymode
          </span>
        </Link>

        <div className="hidden md:flex space-x-8 space-x-reverse text-sm font-bold text-gray-400">
          <Link to="/" className="hover:text-blue-400 transition-colors uppercase tracking-widest">חנות</Link>
          <Link to="/guide" className="hover:text-blue-400 transition-colors uppercase tracking-widest">מדריך הדפסה</Link>
          <Link to="/specials" className="hover:text-blue-400 transition-colors uppercase tracking-widest text-red-500/80">מבצעים</Link>
          <a 
            href={`https://wa.me/972${PHONE_NUMBER.substring(1)}`}
            onClick={handleSupportClick}
            className="hover:text-blue-400 transition-colors uppercase tracking-widest text-blue-500/80"
          >
            תמיכה
          </a>
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

          {user ? (
            <div className="relative">
              <button 
                onClick={() => setIsUserMenuOpen(!isUserMenuOpen)}
                className="flex items-center gap-2 bg-white/5 hover:bg-white/10 p-1 pr-3 rounded-full border border-white/10 transition-all"
              >
                <span className="text-xs font-bold text-gray-200 hidden sm:inline">{user.name}</span>
                <img src={user.avatar} alt={user.name} className="w-8 h-8 rounded-full border border-blue-500/50" />
              </button>

              {isUserMenuOpen && (
                <div className="absolute top-full mt-2 left-0 w-48 bg-[#111] border border-white/10 rounded-2xl shadow-2xl py-2 animate-in fade-in slide-in-from-top-2 duration-200">
                  <Link 
                    to="/profile" 
                    onClick={() => setIsUserMenuOpen(false)}
                    className="block px-4 py-3 text-sm text-gray-300 hover:bg-white/5 hover:text-white text-right"
                  >
                    אזור אישי
                  </Link>
                  <button 
                    onClick={() => { onLogout(); setIsUserMenuOpen(false); }}
                    className="w-full block px-4 py-3 text-sm text-red-500 hover:bg-red-500/10 text-right font-bold border-t border-white/5"
                  >
                    התנתקות
                  </button>
                </div>
              )}
            </div>
          ) : (
            <button 
              onClick={onLoginClick}
              className="bg-white text-black px-6 py-2 rounded-full text-sm font-black hover:bg-blue-400 hover:text-white transition-all transform active:scale-95 shadow-lg shadow-white/5"
            >
              התחברות
            </button>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;