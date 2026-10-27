import React, { useState } from 'react';
import { usePWAInstall } from './usePWAInstall';

export const PWAInstallButton: React.FC = () => {
  const { isInstallable, isInstalled, isIOS, install } = usePWAInstall();
  const [showGuide, setShowGuide] = useState(false);

  // If already running as an installed PWA / standalone app, hide the button
  if (isInstalled) {
    return null;
  }

  return (
    <>
      {/* Install Button for Navbar or Top Bar */}
      {isInstallable ? (
        <button
          onClick={install}
          className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white text-xs font-bold transition shadow-sm hover:shadow-blue-500/25"
          title="התקנת אפליקציה למכשיר"
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
          </svg>
          <span className="hidden sm:inline">התקן אפליקציה</span>
        </button>
      ) : (
        <button
          onClick={() => setShowGuide(true)}
          className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-xl border border-blue-500/30 bg-blue-50/50 hover:bg-blue-100/70 text-blue-700 text-xs font-semibold transition"
          title="הוספה למסך הבית באייפון ובנייד"
        >
          <img src="/apple-touch-icon-180x180.png" alt="Polymode Icon" className="w-4 h-4 rounded-md shadow-xs" />
          <span className="hidden sm:inline">הוסף למסך הבית</span>
        </button>
      )}

      {/* Guide Modal for iOS Safari / Add to Home Screen */}
      {showGuide && (
        <div 
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/70 backdrop-blur-sm p-4 animate-in fade-in duration-200"
          onClick={() => setShowGuide(false)}
        >
          <div 
            className="w-full max-w-sm rounded-3xl bg-[#0f172a] border border-blue-500/30 p-6 shadow-2xl text-right text-white relative overflow-hidden"
            onClick={(e) => e.stopPropagation()}
            dir="rtl"
          >
            {/* Background subtle glow */}
            <div className="absolute top-0 right-1/2 translate-x-1/2 w-48 h-48 bg-blue-600/20 rounded-full blur-3xl pointer-events-none" />

            {/* App Icon preview */}
            <div className="flex flex-col items-center text-center mb-5 relative z-10">
              <div className="relative group">
                <div className="absolute -inset-2 bg-gradient-to-r from-blue-500 to-cyan-400 rounded-3xl blur-md opacity-75"></div>
                <img 
                  src="/apple-touch-icon.png" 
                  alt="POLYMODE Logo" 
                  className="relative w-20 h-20 rounded-2xl shadow-xl border border-white/10"
                />
              </div>
              <h3 className="text-xl font-black mt-3 text-white tracking-wide">
                POLYMODE
              </h3>
              <p className="text-xs text-blue-300/80 mt-0.5">
                הוספת קיצור אפליקציה למסך הבית
              </p>
            </div>

            {/* Instructions */}
            <div className="space-y-3.5 bg-slate-900/80 rounded-2xl p-4 border border-slate-800 text-sm relative z-10">
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-blue-600/30 text-blue-400 font-bold flex items-center justify-center shrink-0 text-xs border border-blue-500/30">
                  1
                </div>
                <p className="text-slate-200 text-xs leading-relaxed">
                  בסרגל התחתון של <strong>Safari</strong> (ספארי), לחצו על כפתור השיתוף{' '}
                  <span className="inline-flex items-center px-1.5 py-0.5 rounded bg-slate-800 border border-slate-700 text-blue-400 text-[11px] font-bold mx-1">
                    <svg className="w-3.5 h-3.5 inline mr-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" />
                    </svg>
                    שיתוף
                  </span>
                </p>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-blue-600/30 text-blue-400 font-bold flex items-center justify-center shrink-0 text-xs border border-blue-500/30">
                  2
                </div>
                <p className="text-slate-200 text-xs leading-relaxed">
                  גללו מעט למטה ובחרו ב-
                  <strong className="text-white mx-1">״הוסף למסך הבית״ (Add to Home Screen)</strong>
                  <span className="inline-block text-blue-400 font-bold mr-1">➕</span>
                </p>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-blue-600/30 text-blue-400 font-bold flex items-center justify-center shrink-0 text-xs border border-blue-500/30">
                  3
                </div>
                <p className="text-slate-200 text-xs leading-relaxed">
                  לחצו על <strong className="text-blue-400">״הוסף״ (Add)</strong> בפינה העליונה — וסמל הקוביה הכחולה עם PM יופיע ישירות על מסך הבית שלכם כאפליקציה!
                </p>
              </div>
            </div>

            {/* Close button */}
            <button
              onClick={() => setShowGuide(false)}
              className="mt-5 w-full py-2.5 rounded-xl bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-500 hover:to-blue-400 text-white font-bold text-sm shadow-lg shadow-blue-600/30 transition relative z-10"
            >
              הבנתי, תודה!
            </button>
          </div>
        </div>
      )}
    </>
  );
};
