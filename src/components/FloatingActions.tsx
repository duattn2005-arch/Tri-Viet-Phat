import React, { useState, useEffect, useRef } from 'react';
import { COMPANY_INFO } from '../data/mockData';

interface FloatingActionsProps {
  onToggleAiChat: () => void;
  isAiChatOpen: boolean;
  onNavigateContact?: () => void;
}

export const FloatingActions: React.FC<FloatingActionsProps> = ({
  onToggleAiChat,
  isAiChatOpen,
  onNavigateContact,
}) => {
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [isSupportOpen, setIsSupportOpen] = useState(false);
  const supportMenuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowScrollTop(true);
      } else {
        setShowScrollTop(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close support menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        supportMenuRef.current &&
        !supportMenuRef.current.contains(event.target as Node)
      ) {
        setIsSupportOpen(false);
      }
    };

    if (isSupportOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isSupportOpen]);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleOpenContactPage = () => {
    setIsSupportOpen(false);
    if (onNavigateContact) {
      onNavigateContact();
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const supportChannels = [
    {
      id: 'facebook',
      title: 'Facebook Fanpage',
      subtitle: 'fb.com/thietbiyte168',
      href: 'https://www.facebook.com/thietbiyte168',
      isExternal: true,
      iconType: 'facebook',
      iconBg: 'bg-[#1877f2]',
      subtitleClass: 'text-[#64748b]',
    },
    {
      id: 'zalo-trivietphat',
      title: 'Zalo Hỗ Trợ 24/7',
      subtitle: '0984.567.890',
      href: COMPANY_INFO.zaloUrl,
      isExternal: true,
      iconType: 'zalo',
      iconBg: 'bg-[#0068FF]',
      subtitleClass: 'text-[#0068FF] font-semibold',
    },
    {
      id: 'hotline-son',
      title: 'Hotline (Mr. Sơn)',
      subtitle: '0984.567.890',
      href: 'tel:0984567890',
      isExternal: false,
      iconType: 'phone',
      iconBg: 'bg-[#00c853]',
      subtitleClass: 'text-[#00c853] font-semibold',
    },
    {
      id: 'hotline-tu',
      title: 'Hotline (Ms. Tú)',
      subtitle: '0912.345.678',
      href: 'tel:0912345678',
      isExternal: false,
      iconType: 'phone',
      iconBg: 'bg-[#00c853]',
      subtitleClass: 'text-[#00c853] font-semibold',
    },
    {
      id: 'email',
      title: 'Email',
      subtitle: COMPANY_INFO.email,
      href: `mailto:${COMPANY_INFO.email}?subject=Yêu%20cầu%20hỗ%20trợ%20Trí%20Việt%20Phát`,
      isExternal: false,
      iconType: 'email',
      iconBg: 'bg-[#ea1d75]',
      subtitleClass: 'text-[#64748b]',
    },
  ];

  return (
    <div
      ref={supportMenuRef}
      className="fixed bottom-6 right-6 z-40 flex flex-col items-center gap-3"
    >
      {/* Scroll to Top */}
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          aria-label="Lên đầu trang"
          title="Lên đầu trang"
          className="w-9 h-9 rounded-full bg-white/95 backdrop-blur-xs text-[#006194] shadow-md flex items-center justify-center hover:bg-[#e0f2fe] hover:scale-105 transition-all border border-[#cbd5e1] cursor-pointer"
        >
          <span className="material-symbols-outlined text-[18px]">arrow_upward</span>
        </button>
      )}

      {/* QUICK SUPPORT POPUP MODAL (IDENTICAL TO USER SCREENSHOT) */}
      {isSupportOpen && (
        <div className="absolute bottom-20 right-0 w-[335px] sm:w-[365px] bg-white rounded-[26px] shadow-[0_20px_50px_rgba(0,0,0,0.25)] border border-[#f1f5f9] overflow-hidden animate-in fade-in slide-in-from-bottom-4 duration-200 z-50">
          {/* Header Banner - Hot Pink / Magenta */}
          <div className="bg-[#ea1d75] text-white px-5 py-4 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-xs flex items-center justify-center text-white shrink-0">
                {/* Facebook Messenger SVG logo */}
                <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
                  <path d="M12 2C6.477 2 2 6.145 2 11.259c0 2.912 1.453 5.518 3.727 7.215V22l3.39-1.86c.928.257 1.91.396 2.924.396 5.523 0 10-4.145 10-9.259C22.041 6.145 17.523 2 12 2zm1.068 12.438l-2.613-2.79-5.1 2.79 5.61-5.955 2.678 2.79 5.035-2.79-5.61 5.955z" />
                </svg>
              </div>
              <div className="flex flex-col">
                <div className="flex items-center gap-1.5">
                  <span className="font-bold text-[16px] tracking-tight">Quick Support</span>
                  <span className="w-2 h-2 rounded-full bg-white/70"></span>
                </div>
                <span className="text-[12px] text-white/90 font-normal">
                  We are here to help
                </span>
              </div>
            </div>

            {/* Close Button */}
            <button
              onClick={() => setIsSupportOpen(false)}
              className="w-8 h-8 rounded-full bg-white/20 hover:bg-white/30 text-white flex items-center justify-center transition-colors cursor-pointer"
              aria-label="Đóng Quick Support"
            >
              <span className="material-symbols-outlined text-[18px]">close</span>
            </button>
          </div>

          {/* Cards Body */}
          <div className="p-4 space-y-2.5 max-h-[460px] overflow-y-auto">
            {supportChannels.map((item) => (
              <a
                key={item.id}
                href={item.href}
                target={item.isExternal ? '_blank' : undefined}
                rel={item.isExternal ? 'noopener noreferrer' : undefined}
                onClick={() => {
                  if (!item.isExternal) {
                    setIsSupportOpen(false);
                  }
                }}
                className="group flex items-center gap-3.5 p-3 rounded-2xl bg-white border border-[#e2e8f0] hover:border-[#ea1d75]/40 hover:shadow-md transition-all cursor-pointer"
              >
                {/* Channel Icon Squircle */}
                <div
                  className={`w-11 h-11 rounded-2xl ${item.iconBg} text-white flex items-center justify-center shrink-0 shadow-xs group-hover:scale-105 transition-transform`}
                >
                  {item.iconType === 'facebook' && (
                    <span className="font-bold text-[22px] leading-none font-sans">f</span>
                  )}
                  {item.iconType === 'phone' && (
                    <span className="material-symbols-outlined text-[20px]">call</span>
                  )}
                  {item.iconType === 'zalo' && (
                    <span className="font-black text-[12px] tracking-tight">Zalo</span>
                  )}
                  {item.iconType === 'email' && (
                    <span className="material-symbols-outlined text-[20px]">mail</span>
                  )}
                </div>

                {/* Channel Titles */}
                <div className="flex-1 min-w-0">
                  <h5 className="text-[13.5px] font-bold text-[#0f172a] group-hover:text-[#ea1d75] transition-colors truncate">
                    {item.title}
                  </h5>
                  <p className={`text-[12px] ${item.subtitleClass} truncate`}>
                    {item.subtitle}
                  </p>
                </div>

                {/* Right Chevron */}
                <span className="material-symbols-outlined text-[18px] text-[#94a3b8] group-hover:text-[#ea1d75] group-hover:translate-x-0.5 transition-all">
                  chevron_right
                </span>
              </a>
            ))}

            {/* Bottom Button: Open Contact Page */}
            <button
              type="button"
              onClick={handleOpenContactPage}
              className="w-full mt-2 bg-[#ea1d75] hover:bg-[#d41465] text-white py-3 px-4 rounded-2xl font-bold text-[13.5px] flex items-center justify-center gap-2 shadow-md hover:shadow-lg transition-all cursor-pointer active:scale-[0.99]"
            >
              <span className="material-symbols-outlined text-[18px] -rotate-45">near_me</span>
              <span>Open Contact Page</span>
            </button>
          </div>
        </div>
      )}

      {/* BONG BÓNG 1: TRỢ LÝ AI TRÍ VIỆT PHÁT */}
      <div className="relative group flex items-center">
        <span className="absolute right-16 bg-[#0f172a] text-white text-[12px] font-semibold py-1.5 px-3 rounded-xl shadow-xl whitespace-nowrap opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity flex items-center gap-1.5">
          <span>Trợ lý AI Trí Việt Phát</span>
          <span className="text-[#86efac] font-bold">Online</span>
        </span>

        <button
          type="button"
          onClick={onToggleAiChat}
          aria-label="Mở Trợ lý AI Trí Việt Phát"
          className={`relative w-13 h-13 rounded-full text-white flex items-center justify-center shadow-[0_8px_22px_rgba(0,97,148,0.45)] hover:scale-110 active:scale-95 transition-all border-2 border-white cursor-pointer ${
            isAiChatOpen
              ? 'bg-[#0f172a]'
              : 'bg-linear-to-tr from-[#006194] via-[#0284c7] to-[#0ea5e9]'
          }`}
        >
          {!isAiChatOpen && (
            <span className="absolute -inset-1 rounded-full bg-[#0284c7] opacity-25 animate-pulse group-hover:opacity-50 pointer-events-none"></span>
          )}

          {isAiChatOpen ? (
            <span className="material-symbols-outlined text-[24px]">close</span>
          ) : (
            <div className="relative flex items-center justify-center">
              <span className="material-symbols-outlined text-[26px]">smart_toy</span>
              <span className="absolute -bottom-0.5 -right-0.5 w-3 h-3 rounded-full bg-[#10b981] border-2 border-white"></span>
            </div>
          )}
        </button>
      </div>

      {/* BONG BÓNG 2: QUICK SUPPORT BUBBLE (MAGENTA/PINK WITH GREEN DOT AS IN SCREENSHOT) */}
      <div className="relative group flex items-center">
        <span className="absolute right-16 bg-[#0f172a] text-white text-[12px] font-semibold py-1.5 px-3 rounded-xl shadow-xl whitespace-nowrap opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity flex items-center gap-1.5">
          <span>Quick Support 24/7</span>
          <span className="text-[#38bdf8] font-bold">Trợ giúp</span>
        </span>

        <button
          type="button"
          onClick={() => setIsSupportOpen(!isSupportOpen)}
          aria-label="Mở bảng hỗ trợ nhanh Quick Support"
          className="relative w-14 h-14 rounded-full bg-[#ea1d75] hover:bg-[#d41465] text-white flex items-center justify-center shadow-[0_8px_25px_rgba(234,29,117,0.5)] hover:scale-105 active:scale-95 transition-all border-2 border-white cursor-pointer"
        >
          {/* Green online dot at top-right corner exactly as shown in screenshot */}
          <span className="absolute top-0 right-0 w-3.5 h-3.5 rounded-full bg-[#00e676] border-2 border-white shadow-xs z-10"></span>

          {isSupportOpen ? (
            <span className="material-symbols-outlined text-[26px] font-bold">close</span>
          ) : (
            <svg className="w-7 h-7 fill-current" viewBox="0 0 24 24">
              <path d="M12 2C6.477 2 2 6.145 2 11.259c0 2.912 1.453 5.518 3.727 7.215V22l3.39-1.86c.928.257 1.91.396 2.924.396 5.523 0 10-4.145 10-9.259C22.041 6.145 17.523 2 12 2zm1.068 12.438l-2.613-2.79-5.1 2.79 5.61-5.955 2.678 2.79 5.035-2.79-5.61 5.955z" />
            </svg>
          )}
        </button>
      </div>
    </div>
  );
};
