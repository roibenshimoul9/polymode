import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { User } from '../types';

interface PersonalAreaProps {
  user: User | null;
  onLogout: () => void;
}

const PersonalArea: React.FC<PersonalAreaProps> = ({ user, onLogout }) => {
  const navigate = useNavigate();

  useEffect(() => {
    if (!user) {
      navigate('/');
    }
  }, [user, navigate]);

  if (!user) return null;

  return (
    <div className="max-w-6xl mx-auto px-6 py-20 text-right animate-in fade-in duration-700">
      <header className="flex flex-col md:flex-row-reverse items-center gap-10 mb-20 bg-white/60 p-10 rounded-[3rem] border border-[#3e2723]/10 shadow-sm">
        <div className="relative">
          <img src={user.avatar} alt={user.name} className="w-32 h-32 md:w-40 md:h-40 rounded-[2.5rem] border-4 border-blue-600 shadow-2xl" />
          <div className="absolute -bottom-2 -right-2 bg-blue-600 text-white p-2 rounded-xl shadow-lg">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" strokeWidth="2"/></svg>
          </div>
        </div>

        <div className="flex-grow space-y-2 text-center md:text-right">
          <h1 className="text-4xl md:text-5xl font-black text-[#3e2723]">{user.name}</h1>
          <p className="text-[#5d4037] font-bold">{user.email}</p>
          <div className="flex flex-row-reverse items-center justify-center md:justify-start gap-4 mt-4">
            <span className="bg-[#3e2723]/5 px-4 py-1.5 rounded-full text-xs text-[#5d4037] border border-[#3e2723]/10">
              חבר ב-Polymode מאז: <span className="text-[#3e2723] font-black">{user.joinedAt}</span>
            </span>
            <span className="bg-blue-600/10 px-4 py-1.5 rounded-full text-xs text-blue-600 border border-blue-500/20 font-black">
              לקוח פרימיום
            </span>
          </div>
        </div>

        <button 
          onClick={() => { onLogout(); navigate('/'); }}
          className="bg-red-500/10 hover:bg-red-500 text-red-500 hover:text-white px-8 py-3 rounded-2xl font-black transition-all border border-red-500/20"
        >
          התנתקות מהחשבון
        </button>
      </header>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Orders Column */}
        <div className="lg:col-span-2 space-y-8">
          <section className="bg-white/60 rounded-[2.5rem] border border-[#3e2723]/10 overflow-hidden shadow-sm">
            <div className="p-8 border-b border-[#3e2723]/10 flex justify-between items-center flex-row-reverse">
              <h2 className="text-2xl font-black text-[#3e2723]">הזמנות אחרונות</h2>
              <button className="text-xs text-blue-600 font-bold hover:underline">צפה בכל ההיסטוריה</button>
            </div>
            
            <div className="divide-y divide-[#3e2723]/10">
              {[
                { id: 'ORD-882', item: 'רונין סייברפאנק', type: 'דיגיטלי', date: '12.02.2024', status: 'הושלם', price: '165.00' },
                { id: 'ORD-841', item: 'בית מזוזה מינימליסטי', type: 'פיזי', date: '01.02.2024', status: 'במשלוח', price: '130.00' }
              ].map(order => (
                <div key={order.id} className="p-6 hover:bg-[#3e2723]/5 transition-colors flex items-center justify-between flex-row-reverse">
                  <div className="flex items-center gap-4 flex-row-reverse">
                    <div className="w-12 h-12 bg-[#3e2723]/5 rounded-2xl flex items-center justify-center">
                      <svg className="w-6 h-6 text-[#8d6e63]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" strokeWidth="2"/></svg>
                    </div>
                    <div>
                      <h4 className="font-bold text-[#3e2723] text-sm">{order.item}</h4>
                      <p className="text-[10px] text-[#8d6e63]">מספר הזמנה: {order.id} • {order.date}</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-8">
                    <span className="text-sm font-black text-[#3e2723]">₪{order.price}</span>
                    <span className={`px-3 py-1 rounded-lg text-[10px] font-black uppercase tracking-wider ${
                      order.status === 'הושלם' ? 'bg-green-500/10 text-green-600' : 'bg-cyan-500/10 text-cyan-600'
                    }`}>
                      {order.status}
                    </span>
                    <button className="p-2 bg-[#3e2723]/5 hover:bg-[#3e2723]/10 rounded-xl transition-all">
                      <svg className="w-4 h-4 text-[#8d6e63]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" strokeWidth="2"/></svg>
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </section>

          <section className="bg-white/60 rounded-[2.5rem] border border-[#3e2723]/10 p-8 shadow-sm">
            <h2 className="text-2xl font-black text-[#3e2723] mb-8">ספריית הקבצים שלי</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                { name: 'Ronin_Cyberpunk_V1.stl', size: '42 MB', format: 'STL' },
                { name: 'Mezuzah_Shell_A.step', size: '12 MB', format: 'STEP' }
              ].map((file, i) => (
                <div key={i} className="p-6 bg-[#3e2723]/5 rounded-3xl border border-[#3e2723]/10 flex items-center justify-between flex-row-reverse group hover:border-blue-500/30 transition-all">
                  <div className="flex items-center gap-3 flex-row-reverse">
                    <div className="w-10 h-10 bg-blue-600/10 text-blue-600 rounded-xl flex items-center justify-center font-black text-[10px] group-hover:bg-blue-600 group-hover:text-white transition-all">
                      {file.format}
                    </div>
                    <div>
                      <h5 className="text-xs font-bold text-[#3e2723]">{file.name}</h5>
                      <p className="text-[10px] text-[#8d6e63]">{file.size}</p>
                    </div>
                  </div>
                  <button className="text-blue-600 hover:text-[#3e2723] transition-colors">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" strokeWidth="2"/></svg>
                  </button>
                </div>
              ))}
            </div>
          </section>
        </div>

        {/* Sidebar Info */}
        <div className="space-y-8">
          <div className="bg-gradient-to-br from-blue-600 to-blue-900 rounded-[2.5rem] p-8 text-white shadow-2xl">
            <h3 className="text-xl font-black mb-4">Polymode Rewards</h3>
            <div className="mb-6">
              <div className="flex justify-between items-end mb-2 flex-row-reverse">
                <span className="text-2xl font-black">450</span>
                <span className="text-[10px] uppercase font-bold opacity-60">נקודות צבורות</span>
              </div>
              <div className="w-full h-2 bg-black/30 rounded-full overflow-hidden">
                <div className="h-full bg-white w-2/3"></div>
              </div>
              <p className="text-[10px] mt-2 opacity-70">עוד 150 נקודות לקבלת הנחה של ₪50 על הדפסה פיזית!</p>
            </div>
            <button className="w-full py-3 bg-white text-blue-900 rounded-xl font-black text-sm hover:scale-105 transition-transform">
              מימוש נקודות
            </button>
          </div>

          <div className="bg-white/60 rounded-[2.5rem] border border-[#3e2723]/10 p-8 space-y-6 shadow-sm">
            <h3 className="text-lg font-black text-[#3e2723]">הגדרות חשבון</h3>
            <ul className="space-y-1">
              {['פרטי התקשרות', 'כתובות למשלוח', 'שיטות תשלום', 'התראות במייל'].map(item => (
                <li key={item}>
                  <a href="#" className="block p-3 rounded-xl hover:bg-[#3e2723]/5 text-[#5d4037] hover:text-[#3e2723] text-sm transition-all flex items-center justify-between flex-row-reverse">
                    <span>{item}</span>
                    <svg className="w-4 h-4 opacity-30" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M15 19l-7-7 7-7" strokeWidth="2.5"/></svg>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PersonalArea;