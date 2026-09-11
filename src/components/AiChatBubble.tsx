import React, { useState, useEffect, useRef } from 'react';
import { COMPANY_INFO } from '../data/mockData';

interface ChatMessage {
  id: string;
  sender: 'user' | 'assistant';
  text: string;
  timestamp: string;
}

interface AiChatBubbleProps {
  isOpen: boolean;
  onClose: () => void;
  onOpenConsultation?: (prodName?: string) => void;
}

const INITIAL_MESSAGES: ChatMessage[] = [
  {
    id: 'welcome-1',
    sender: 'assistant',
    text: `Kính chào Quý khách! Tôi là **Trợ lý AI Trí Việt Phát** - chuyên gia tư vấn kỹ thuật y sinh và trang thiết bị xét nghiệm y khoa.\n\nTôi có thể hỗ trợ Quý khách giải đáp:\n- Thông số kỹ thuật các dòng máy xét nghiệm (sinh hóa, huyết học, nước tiểu, điện giải, miễn dịch, đông máu...)\n- Bộ hóa chất xét nghiệm Dewei chính hãng\n- Quy trình bảo hành, hiệu chuẩn thiết bị\n- Báo giá và giải pháp tối ưu cho phòng khám & bệnh viện`,
    timestamp: 'Vừa xong',
  },
];

const SUGGESTIONS = [
  'Tư vấn máy điện giải AC9803',
  'Báo giá hóa chất huyết học Dewei',
  'Thông số máy nước tiểu H-1600',
  'Máy xét nghiệm HbA1c Quo-Test',
  'Địa chỉ và hotline công ty',
];

export const AiChatBubble: React.FC<AiChatBubbleProps> = ({
  isOpen,
  onClose,
  onOpenConsultation,
}) => {
  const [messages, setMessages] = useState<ChatMessage[]>(INITIAL_MESSAGES);
  const [inputValue, setInputValue] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [showInvitation, setShowInvitation] = useState(true);

  const messagesEndRef = useRef<HTMLDivElement | null>(null);
  const inputRef = useRef<HTMLInputElement | null>(null);

  useEffect(() => {
    if (isOpen) {
      setShowInvitation(false);
      setTimeout(() => {
        inputRef.current?.focus();
        scrollToBottom();
      }, 150);
    }
  }, [isOpen]);

  useEffect(() => {
    if (isOpen) {
      scrollToBottom();
    }
  }, [messages, isLoading]);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const getCurrentTime = () => {
    const now = new Date();
    return `${String(now.getHours()).padStart(2, '0')}:${String(now.getMinutes()).padStart(2, '0')}`;
  };

  const handleSendMessage = async (textToSend?: string) => {
    const messageContent = (textToSend || inputValue).trim();
    if (!messageContent || isLoading) return;

    const userMsg: ChatMessage = {
      id: `user-${Date.now()}`,
      sender: 'user',
      text: messageContent,
      timestamp: getCurrentTime(),
    };

    setMessages((prev) => [...prev, userMsg]);
    setInputValue('');
    setIsLoading(true);

    try {
      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          message: messageContent,
          history: messages.slice(-6).map((m) => ({
            sender: m.sender,
            text: m.text,
          })),
        }),
      });

      const data = await response.json();
      const replyText =
        data.reply ||
        data.fallback ||
        'Cảm ơn Quý khách! Quý khách vui lòng liên hệ Hotline 0984.567.890 để được chuyên viên kỹ thuật giải đáp chi tiết nhất.';

      const aiMsg: ChatMessage = {
        id: `ai-${Date.now()}`,
        sender: 'assistant',
        text: replyText,
        timestamp: getCurrentTime(),
      };

      setMessages((prev) => [...prev, aiMsg]);
    } catch (error) {
      console.error('Chat error:', error);
      const errorMsg: ChatMessage = {
        id: `ai-${Date.now()}`,
        sender: 'assistant',
        text: 'Hiện tại hệ thống tư vấn trực tuyến đang bảo trì kết nối. Quý khách vui lòng gọi trực tiếp Hotline **0984.567.890** để gặp kỹ sư tư vấn ngay lập tức ạ!',
        timestamp: getCurrentTime(),
      };
      setMessages((prev) => [...prev, errorMsg]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      handleSendMessage();
    }
  };

  const renderFormattedText = (text: string) => {
    return text.split('\n').map((line, idx) => {
      const parts = line.split(/(\*\*.*?\*\*)/g);
      return (
        <p key={idx} className={line.trim() === '' ? 'h-2' : 'min-h-[1.2em]'}>
          {parts.map((part, pIdx) => {
            if (part.startsWith('**') && part.endsWith('**')) {
              return (
                <strong key={pIdx} className="font-bold text-[#006194]">
                  {part.slice(2, -2)}
                </strong>
              );
            }
            if (part.startsWith('- ')) {
              return (
                <span key={pIdx} className="flex items-start gap-1.5 pl-1 my-0.5">
                  <span className="text-[#006194] font-bold shrink-0">•</span>
                  <span>{part.slice(2)}</span>
                </span>
              );
            }
            return <span key={pIdx}>{part}</span>;
          })}
        </p>
      );
    });
  };

  return (
    <>
      {/* Floating Invitation Tooltip above the 2 bubbles when closed */}
      {showInvitation && !isOpen && (
        <div className="fixed bottom-38 right-6 z-40 bg-white px-4 py-3 rounded-2xl shadow-xl border border-[#bae6fd] max-w-[280px] animate-in fade-in slide-in-from-bottom-2 duration-300 relative group">
          <button
            onClick={(e) => {
              e.stopPropagation();
              setShowInvitation(false);
            }}
            className="absolute -top-2 -left-2 w-5 h-5 rounded-full bg-[#f1f5f9] text-[#64748b] hover:bg-[#e2e8f0] flex items-center justify-center text-[12px] shadow-sm cursor-pointer"
            title="Đóng"
          >
            ×
          </button>
          <div className="flex items-center justify-between mb-1.5">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#10b981] animate-ping"></span>
              <span className="text-[12.5px] font-bold text-[#006194]">Hỗ trợ Trí Việt Phát 24/7</span>
            </div>
            <span className="text-[10px] bg-[#e0f2fe] text-[#0369a1] font-semibold px-1.5 py-0.5 rounded-sm">Online</span>
          </div>
          <p className="text-[12px] text-[#334155] leading-relaxed mb-2">
            Cần thông số máy xét nghiệm, báo giá hóa chất Dewei hoặc hỗ trợ kỹ thuật?
          </p>
          <div className="flex items-center gap-1.5 pt-1 border-t border-[#f1f5f9] text-[11px]">
            <a
              href={`tel:${COMPANY_INFO.hotline.replace(/\./g, '')}`}
              className="text-[#bb0112] font-bold hover:underline flex items-center gap-0.5"
            >
              <span className="material-symbols-outlined text-[13px]">call</span>
              {COMPANY_INFO.hotline}
            </a>
            <span className="text-[#cbd5e1]">•</span>
            <a
              href={COMPANY_INFO.zaloUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#006194] font-semibold hover:underline"
            >
              Zalo
            </a>
            <span className="text-[#cbd5e1]">•</span>
            <span className="text-[#0284c7] font-medium">Chat AI</span>
          </div>
        </div>
      )}

      {/* Floating Chat Dialog Window */}
      {isOpen && (
        <div
          className="fixed bottom-6 right-4 sm:right-6 z-50 w-[94vw] sm:w-[420px] h-[600px] max-h-[88vh] bg-white rounded-3xl shadow-[0_20px_60px_rgba(0,0,0,0.25)] border border-[#bae6fd]/80 flex flex-col overflow-hidden animate-in fade-in slide-in-from-bottom-5 duration-200"
          role="dialog"
          aria-label="Cửa sổ Trợ lý AI & Liên hệ Trí Việt Phát"
        >
          {/* Chat Header */}
          <div className="bg-linear-to-r from-[#006194] to-[#0284c7] px-4 sm:px-5 py-3.5 text-white flex items-center justify-between shadow-md shrink-0">
            <div className="flex items-center gap-3">
              <div className="relative w-10 h-10 rounded-full bg-white/20 backdrop-blur flex items-center justify-center border border-white/40">
                <span className="material-symbols-outlined text-white text-[24px]">smart_toy</span>
                <span className="absolute bottom-0 right-0 w-2.5 h-2.5 rounded-full bg-[#10b981] border-2 border-[#006194]"></span>
              </div>
              <div>
                <div className="flex items-center gap-1.5">
                  <h3 className="text-[14.5px] font-bold leading-tight tracking-wide">
                    Trợ Lý AI Trí Việt Phát
                  </h3>
                  <span className="material-symbols-outlined text-[15px] text-[#38bdf8]" title="Đã chứng thực">
                    verified
                  </span>
                </div>
                <p className="text-[11.5px] text-[#e0f2fe] flex items-center gap-1 opacity-90">
                  <span>Kỹ sư y sinh AI</span>
                  <span>•</span>
                  <span className="text-[#86efac] font-semibold">Trực tuyến 24/7</span>
                </p>
              </div>
            </div>

            <div className="flex items-center gap-1">
              <button
                onClick={() => setMessages(INITIAL_MESSAGES)}
                title="Làm mới cuộc trò chuyện"
                className="w-8 h-8 rounded-full text-white/80 hover:text-white hover:bg-white/15 flex items-center justify-center transition-colors cursor-pointer"
              >
                <span className="material-symbols-outlined text-[19px]">refresh</span>
              </button>
              <button
                onClick={onClose}
                title="Đóng chat"
                className="w-8 h-8 rounded-full text-white/80 hover:text-white hover:bg-white/15 flex items-center justify-center transition-colors cursor-pointer"
              >
                <span className="material-symbols-outlined text-[20px]">close</span>
              </button>
            </div>
          </div>

          {/* Direct Multi-Channel Contact Bar (Gộp tất cả liên hệ vào trong bong bóng chat) */}
          <div className="bg-[#f8fafc] px-3.5 py-2.5 border-b border-[#e2e8f0] flex items-center gap-2 shrink-0">
            {/* Hotline Call Button */}
            <a
              href={`tel:${COMPANY_INFO.hotline.replace(/\./g, '')}`}
              className="flex-1 flex items-center justify-center gap-1.5 bg-[#bb0112] hover:bg-[#99000e] text-white py-1.5 px-2 rounded-xl text-[11.5px] font-bold shadow-xs transition-colors cursor-pointer group"
            >
              <span className="material-symbols-outlined text-[15px] animate-pulse">call</span>
              <span>Hotline {COMPANY_INFO.hotline}</span>
            </a>

            {/* Zalo Button */}
            <a
              href={COMPANY_INFO.zaloUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 flex items-center justify-center gap-1.5 bg-[#006194] hover:bg-[#004e77] text-white py-1.5 px-2 rounded-xl text-[11.5px] font-bold shadow-xs transition-colors cursor-pointer"
            >
              <span className="w-4 h-4 rounded-full bg-white text-[#006194] text-[10px] font-black flex items-center justify-center">Z</span>
              <span>Chat Zalo</span>
            </a>

            {/* Request Quote Button */}
            {onOpenConsultation && (
              <button
                type="button"
                onClick={() => {
                  onClose();
                  onOpenConsultation();
                }}
                className="flex items-center justify-center gap-1 bg-white hover:bg-[#e0f2fe] text-[#006194] border border-[#bae6fd] py-1.5 px-2.5 rounded-xl text-[11.5px] font-semibold transition-colors cursor-pointer"
                title="Đăng ký nhận báo giá chiết khấu"
              >
                <span className="material-symbols-outlined text-[14px]">request_quote</span>
                <span>Báo giá</span>
              </button>
            )}
          </div>

          {/* Messages Body */}
          <div className="flex-1 overflow-y-auto p-4 space-y-3.5 bg-[#f8fafc]">
            {messages.map((msg) => {
              const isUser = msg.sender === 'user';
              return (
                <div
                  key={msg.id}
                  className={`flex gap-2.5 max-w-[88%] ${isUser ? 'ml-auto flex-row-reverse' : 'mr-auto'}`}
                >
                  {!isUser && (
                    <div className="w-7 h-7 rounded-full bg-[#006194] text-white flex items-center justify-center shrink-0 text-[14px] mt-0.5 shadow-sm">
                      <span className="material-symbols-outlined text-[16px]">smart_toy</span>
                    </div>
                  )}
                  <div>
                    <div
                      className={`px-3.5 py-2.5 rounded-2xl text-[13px] leading-relaxed shadow-xs ${
                        isUser
                          ? 'bg-[#006194] text-white rounded-br-xs'
                          : 'bg-white text-[#1e293b] border border-[#e2e8f0] rounded-bl-xs'
                      }`}
                    >
                      {isUser ? msg.text : renderFormattedText(msg.text)}
                    </div>
                    <span
                      className={`block text-[10px] text-[#94a3b8] mt-1 ${
                        isUser ? 'text-right' : 'text-left'
                      }`}
                    >
                      {msg.timestamp}
                    </span>
                  </div>
                </div>
              );
            })}

            {/* AI Typing Indicator */}
            {isLoading && (
              <div className="flex gap-2.5 max-w-[85%] mr-auto items-center">
                <div className="w-7 h-7 rounded-full bg-[#006194] text-white flex items-center justify-center shrink-0 text-[14px]">
                  <span className="material-symbols-outlined text-[16px]">smart_toy</span>
                </div>
                <div className="bg-white border border-[#e2e8f0] px-4 py-3 rounded-2xl rounded-bl-xs shadow-xs flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-[#006194] animate-bounce"></span>
                  <span
                    className="w-2 h-2 rounded-full bg-[#0284c7] animate-bounce"
                    style={{ animationDelay: '0.15s' }}
                  ></span>
                  <span
                    className="w-2 h-2 rounded-full bg-[#38bdf8] animate-bounce"
                    style={{ animationDelay: '0.3s' }}
                  ></span>
                  <span className="text-[11px] text-[#64748b] ml-1.5">Kỹ sư AI đang soạn trả lời...</span>
                </div>
              </div>
            )}

            <div ref={messagesEndRef} />
          </div>

          {/* Quick Suggestion Chips */}
          <div className="px-3 py-2 bg-white border-t border-[#f1f5f9] flex items-center gap-1.5 overflow-x-auto no-scrollbar shrink-0">
            <span className="text-[11px] font-bold text-[#64748b] shrink-0 flex items-center gap-0.5">
              <span className="material-symbols-outlined text-[14px]">bolt</span>
              Gợi ý:
            </span>
            {SUGGESTIONS.map((sug, i) => (
              <button
                key={i}
                disabled={isLoading}
                onClick={() => handleSendMessage(sug)}
                className="text-[11.5px] px-2.5 py-1 rounded-full bg-[#f1f5f9] hover:bg-[#e0f2fe] text-[#334155] hover:text-[#006194] transition-colors whitespace-nowrap shrink-0 border border-transparent hover:border-[#bae6fd] cursor-pointer disabled:opacity-50"
              >
                {sug}
              </button>
            ))}
          </div>

          {/* Chat Input Bar */}
          <div className="p-3 bg-white border-t border-[#e2e8f0] shrink-0">
            <div className="flex items-center gap-2 bg-[#f8fafc] rounded-2xl border border-[#e2e8f0] focus-within:border-[#006194] focus-within:ring-2 focus-within:ring-[#006194]/20 px-3 py-1.5 transition-all">
              <input
                ref={inputRef}
                type="text"
                disabled={isLoading}
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyDown={handleKeyDown}
                placeholder="Nhập câu hỏi kỹ thuật, thiết bị cần tư vấn..."
                className="flex-1 bg-transparent text-[13px] text-[#0f172a] placeholder-[#94a3b8] focus:outline-none py-1.5 disabled:opacity-60"
              />

              {onOpenConsultation && (
                <button
                  type="button"
                  onClick={() => {
                    onClose();
                    onOpenConsultation();
                  }}
                  title="Mở biểu mẫu báo giá chính thức"
                  className="text-[#64748b] hover:text-[#006194] p-1 rounded-lg transition-colors cursor-pointer"
                >
                  <span className="material-symbols-outlined text-[19px]">assignment</span>
                </button>
              )}

              <button
                type="button"
                disabled={!inputValue.trim() || isLoading}
                onClick={() => handleSendMessage()}
                className="w-8 h-8 rounded-xl bg-[#006194] hover:bg-[#0284c7] disabled:bg-[#cbd5e1] text-white flex items-center justify-center transition-colors shadow-xs cursor-pointer disabled:cursor-not-allowed shrink-0"
              >
                <span className="material-symbols-outlined text-[18px]">send</span>
              </button>
            </div>
            <div className="mt-1.5 flex items-center justify-between text-[10.5px] text-[#94a3b8] px-1">
              <span>Được hỗ trợ bởi Gemini 3.8 Flash</span>
              <a
                href={COMPANY_INFO.zaloUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#006194] hover:underline"
              >
                Chat Zalo trực tiếp
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
