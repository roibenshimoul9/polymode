
import React, { useState, useRef, useEffect } from 'react';
import { chatWithAssistant } from '../services/geminiService';

const GeminiAssistant: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<{role: 'user' | 'model', message: string}[]>([
    { role: 'model', message: "שלום! אני פולי מבית Polymode. מחפש משהו ספציפי היום? ספר לי על הפרויקט שלך ואשמח להמליץ לך על המודלים המתאימים ביותר." }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  // Auto-scroll to bottom on new messages or loading state
  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, isLoading, isOpen]);

  const handleSend = async () => {
    if (!input.trim() || isLoading) return;

    const userMsg = input.trim();
    const updatedMessages = [...messages, { role: 'user', message: userMsg }] as {role: 'user' | 'model', message: string}[];
    setMessages(updatedMessages);
    setInput('');
    setIsLoading(true);

    try {
      const response = await chatWithAssistant(updatedMessages);
      setMessages(prev => [...prev, { role: 'model', message: response || "מצטער, נתקלתי בבעיה. תוכל לנסות שוב?" }]);
    } catch (error) {
      setMessages(prev => [...prev, { role: 'model', message: "סליחה, נראה שיש תקלה בחיבור. נסה שוב בעוד רגע." }]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="fixed bottom-4 left-4 md:bottom-6 md:left-6 z-[60] flex flex-col items-center">
      {isOpen ? (
        <div className="bg-[#1a1a1a] border border-white/10 w-[calc(100vw-2rem)] md:w-96 h-[80svh] md:h-[600px] max-h-[700px] rounded-2xl shadow-2xl flex flex-col overflow-hidden animate-in fade-in slide-in-from-bottom-4 duration-300 text-right">
          {/* Header */}
          <div className="bg-blue-600 p-3 md:p-4 flex justify-between items-center flex-row-reverse shadow-lg">
            <div className="flex items-center space-x-2 space-x-reverse">
              <div className="w-7 h-7 md:w-8 md:h-8 bg-white/20 rounded-full flex items-center justify-center">
                <svg className="w-4 h-4 md:w-5 md:h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2-2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <span className="font-bold text-white text-xs md:text-base">פולי - עוזר חכם</span>
            </div>
            <button onClick={() => setIsOpen(false)} className="text-white hover:bg-white/10 p-1.5 rounded-full transition-colors">
              <svg className="w-4 h-4 md:w-5 md:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M6 18L18 6M6 6l12 12" /></svg>
            </button>
          </div>

          {/* Messages Area */}
          <div ref={scrollRef} className="flex-grow overflow-y-auto p-4 space-y-4 bg-black/40 scroll-smooth">
            {messages.map((msg, idx) => (
              <div key={idx} className={`flex ${msg.role === 'user' ? 'justify-start' : 'justify-end'}`}>
                <div className={`max-w-[85%] rounded-2xl p-3 text-[11px] md:text-sm leading-relaxed shadow-sm ${
                  msg.role === 'user' 
                    ? 'bg-blue-600 text-white rounded-tl-none' 
                    : 'bg-[#2a2a2a] text-gray-200 rounded-tr-none border border-white/5'
                }`}>
                  {msg.message}
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="flex justify-end">
                <div className="bg-[#2a2a2a] rounded-2xl p-3 flex space-x-1.5 border border-white/5">
                  <div className="w-1.5 h-1.5 bg-blue-500 rounded-full animate-bounce"></div>
                  <div className="w-1.5 h-1.5 bg-blue-500 rounded-full animate-bounce [animation-delay:0.2s]"></div>
                  <div className="w-1.5 h-1.5 bg-blue-500 rounded-full animate-bounce [animation-delay:0.4s]"></div>
                </div>
              </div>
            )}
          </div>

          {/* Input Area */}
          <div className="p-3 md:p-4 border-t border-white/10 bg-[#141414]">
            <div className="flex space-x-2 flex-row-reverse items-center">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && handleSend()}
                placeholder="שאל את פולי..."
                className="flex-grow bg-[#222] border border-white/5 rounded-xl px-4 py-2 text-xs md:text-sm focus:outline-none focus:ring-1 focus:ring-blue-500 text-white text-right placeholder:text-gray-600"
              />
              <button 
                onClick={handleSend}
                disabled={isLoading || !input.trim()}
                className="bg-blue-600 text-white p-2 rounded-xl hover:bg-blue-500 disabled:opacity-30 transition-all active:scale-90 shrink-0"
              >
                <svg className="w-5 h-5 rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
              </button>
            </div>
          </div>
        </div>
      ) : (
        <div className="relative group flex flex-col items-center">
          {/* Peeking Panda - Proportional to mobile button */}
          <div className="absolute -top-10 md:-top-14 left-1/2 -translate-x-1/2 w-12 h-12 md:w-20 md:h-20 transition-all duration-500 transform group-hover:-top-16 group-hover:scale-110 pointer-events-none animate-bounce-slow">
            <svg viewBox="0 0 100 100" className="w-full h-full drop-shadow-xl overflow-visible">
              <circle cx="25" cy="30" r="14" fill="white" />
              <circle cx="25" cy="30" r="10.5" fill="#111" />
              <circle cx="75" cy="30" r="14" fill="white" />
              <circle cx="75" cy="30" r="10.5" fill="#111" />
              <circle cx="50" cy="55" r="35" fill="white" />
              <ellipse cx="38" cy="50" rx="10" ry="12" fill="#111" transform="rotate(-15, 38, 50)" />
              <ellipse cx="62" cy="50" rx="10" ry="12" fill="#111" transform="rotate(15, 62, 50)" />
              <circle cx="39" cy="48" r="3" fill="white" />
              <circle cx="61" cy="48" r="3" fill="white" />
              <ellipse cx="50" cy="62" rx="4" ry="2.5" fill="#111" />
              <circle cx="35" cy="88" r="8" fill="#111" />
              <circle cx="65" cy="88" r="8" fill="#111" />
            </svg>
          </div>

          <button 
            onClick={() => setIsOpen(true)}
            className="bg-blue-600 hover:bg-blue-500 text-white p-2.5 md:p-4 rounded-full shadow-2xl hover:scale-105 transition-all flex items-center space-x-1.5 md:space-x-2 space-x-reverse relative group-active:scale-95 z-10 animate-pulse-subtle"
          >
            <svg className="w-4 h-4 md:w-6 md:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2-2v10a2 2 0 002 2z" />
            </svg>
            <span className="font-bold text-[11px] md:text-base pr-1">צ'אט עם פולי</span>
          </button>

          <style dangerouslySetInnerHTML={{ __html: `
            @keyframes bounce-slow {
              0%, 100% { transform: translate(-50%, 0); }
              50% { transform: translate(-50%, -5px); }
            }
            @keyframes pulse-subtle {
              0%, 100% { box-shadow: 0 0 0 0 rgba(37, 99, 235, 0.4); }
              50% { box-shadow: 0 0 0 10px rgba(37, 99, 235, 0); }
            }
            .animate-bounce-slow {
              animation: bounce-slow 3s infinite ease-in-out;
            }
            .animate-pulse-subtle {
              animation: pulse-subtle 3.5s infinite ease-in-out;
            }
          `}} />
        </div>
      )}
    </div>
  );
};

export default GeminiAssistant;
