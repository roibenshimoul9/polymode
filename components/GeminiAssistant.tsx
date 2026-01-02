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

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages]);

  const handleSend = async () => {
    if (!input.trim() || isLoading) return;

    const userMsg = input.trim();
    const newHistory = [...messages, { role: 'user', message: userMsg }] as const;
    setMessages([...newHistory]);
    setInput('');
    setIsLoading(true);

    const response = await chatWithAssistant([...newHistory]);
    setMessages(prev => [...prev, { role: 'model', message: response || "מצטער, משהו השתבש. תוכל לנסות שוב?" }]);
    setIsLoading(false);
  };

  return (
    <div className="fixed bottom-6 left-6 z-[60]">
      {isOpen ? (
        <div className="bg-[#1a1a1a] border border-white/10 w-80 md:w-96 h-[500px] rounded-2xl shadow-2xl flex flex-col overflow-hidden animate-in fade-in slide-in-from-bottom-4 duration-300 text-right">
          <div className="bg-blue-600 p-4 flex justify-between items-center flex-row-reverse">
            <div className="flex items-center space-x-2 space-x-reverse">
              <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">
                <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2-2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <span className="font-bold text-white">פולי - עוזר חכם</span>
            </div>
            <button onClick={() => setIsOpen(false)} className="text-white hover:bg-white/10 p-1 rounded">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
            </button>
          </div>

          <div ref={scrollRef} className="flex-grow overflow-y-auto p-4 space-y-4 bg-black/30">
            {messages.map((msg, idx) => (
              <div key={idx} className={`flex ${msg.role === 'user' ? 'justify-start' : 'justify-end'}`}>
                <div className={`max-w-[85%] rounded-2xl p-3 text-sm ${
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
                <div className="bg-[#2a2a2a] rounded-2xl p-3 flex space-x-1">
                  <div className="w-1.5 h-1.5 bg-gray-500 rounded-full animate-bounce"></div>
                  <div className="w-1.5 h-1.5 bg-gray-500 rounded-full animate-bounce delay-100"></div>
                  <div className="w-1.5 h-1.5 bg-gray-500 rounded-full animate-bounce delay-200"></div>
                </div>
              </div>
            )}
          </div>

          <div className="p-4 border-t border-white/10 bg-[#1a1a1a]">
            <div className="flex space-x-2 flex-row-reverse">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && handleSend()}
                placeholder="שאל את פולי..."
                className="flex-grow bg-[#2a2a2a] border border-white/5 rounded-xl px-4 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-blue-500 text-white text-right"
              />
              <button 
                onClick={handleSend}
                disabled={isLoading}
                className="bg-blue-600 text-white p-2 rounded-xl hover:bg-blue-500 disabled:opacity-50"
              >
                <svg className="w-5 h-5 rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
              </button>
            </div>
          </div>
        </div>
      ) : (
        <button 
          onClick={() => setIsOpen(true)}
          className="bg-blue-600 hover:bg-blue-500 text-white p-4 rounded-full shadow-2xl hover:scale-105 transition-all flex items-center space-x-2 relative group-active:scale-95"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2-2v10a2 2 0 002 2z" />
          </svg>
          <span className="font-bold hidden md:inline">צ'אט עם פולי</span>
        </button>
      )}
    </div>
  );
};

export default GeminiAssistant;