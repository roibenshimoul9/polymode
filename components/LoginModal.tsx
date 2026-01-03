import React from 'react';
import { User } from '../types';

interface LoginModalProps {
  isOpen: boolean;
  onClose: () => void;
  onLogin: (user: User) => void;
}

const LoginModal: React.FC<LoginModalProps> = ({ isOpen, onClose, onLogin }) => {
  if (!isOpen) return null;

  const handleGoogleLogin = () => {
    // מדמה תהליך התחברות עם גוגל
    const mockUser: User = {
      id: 'google-123',
      name: 'ישראל ישראלי',
      email: 'israel@example.com',
      avatar: 'https://i.pravatar.cc/150?u=israel',
      joinedAt: 'ינואר 2024'
    };
    onLogin(mockUser);
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
      <div className="absolute inset-0 bg-black/80 backdrop-blur-md animate-in fade-in duration-300" onClick={onClose} />
      
      <div className="relative w-full max-w-md bg-[#0d0d0d] rounded-3xl border border-white/10 shadow-2xl overflow-hidden animate-in zoom-in-95 duration-500 text-right">
        <div className="p-8">
          <button 
            onClick={onClose}
            className="absolute top-6 left-6 text-gray-500 hover:text-white transition-colors"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M6 18L18 6M6 6l12 12" strokeWidth="2.5"/></svg>
          </button>

          <div className="text-center mb-10 mt-4">
            <div className="relative w-24 h-24 mx-auto mb-6 flex items-center justify-center overflow-visible">
              <svg viewBox="0 0 120 120" className="w-full h-full drop-shadow-[0_12px_24px_rgba(59,130,246,0.6)] overflow-visible">
                <defs>
                  <linearGradient id="modalTopFace" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#60a5fa" />
                    <stop offset="100%" stopColor="#3b82f6" />
                  </linearGradient>
                  <linearGradient id="modalFrontFace" x1="0%" y1="0%" x2="0%" y2="100%">
                    <stop offset="0%" stopColor="#2563eb" />
                    <stop offset="100%" stopColor="#1d4ed8" />
                  </linearGradient>
                  <linearGradient id="modalSideFace" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#1e40af" />
                    <stop offset="100%" stopColor="#1e3a8a" />
                  </linearGradient>
                </defs>
                
                {/* 3D Cube Core Only */}
                <g transform="translate(10, 15)">
                  <path d="M50 15 L85 30 L50 45 L15 30 Z" fill="url(#modalTopFace)" className="opacity-95" />
                  <path d="M50 45 L85 30 L85 70 L50 85 Z" fill="url(#modalSideFace)" />
                  <path d="M15 30 L50 45 L50 85 L15 70 Z" fill="url(#modalFrontFace)" />
                  <text x="32.5" y="58" fill="white" fontSize="22" fontWeight="900" textAnchor="middle" transform="skewY(20)">P</text>
                  <text x="67.5" y="92" fill="white" fontSize="22" fontWeight="900" textAnchor="middle" transform="skewY(-20)">M</text>
                </g>
              </svg>
            </div>
            <h2 className="text-3xl font-black text-white mb-2">ברוכים הבאים ל-Polymode</h2>
            <p className="text-gray-500">התחברו כדי לשמור את המודלים שלכם ולעקוב אחר הזמנות</p>
          </div>

          <div className="space-y-4">
            <button 
              onClick={handleGoogleLogin}
              className="w-full flex items-center justify-center gap-4 bg-white hover:bg-gray-100 text-black py-4 rounded-2xl font-bold transition-all transform active:scale-[0.98] shadow-lg"
            >
              <svg className="w-6 h-6" viewBox="0 0 24 24">
                <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
                <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z" fill="#FBBC05"/>
                <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
              </svg>
              התחברות באמצעות Google
            </button>

            <button className="w-full bg-[#111] hover:bg-white/5 text-gray-400 py-4 rounded-2xl font-bold transition-all border border-white/10" onClick={onClose}>
              המשך כאורח
            </button>
          </div>

          <p className="text-center text-[10px] text-gray-600 mt-8 leading-relaxed uppercase tracking-widest">
            בהתחברות לאתר אתה מסכים ל<a href="#" className="text-blue-500 underline">תנאי השימוש</a> ול<a href="#" className="text-blue-500 underline">מדיניות הפרטיות</a> שלנו
          </p>
        </div>
      </div>
    </div>
  );
};

export default LoginModal;