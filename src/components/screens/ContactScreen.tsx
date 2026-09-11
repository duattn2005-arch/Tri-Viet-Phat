import React, { useState } from 'react';
import { COMPANY_INFO } from '../../data/mockData';

export const ContactScreen: React.FC = () => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setName('');
      setPhone('');
      setEmail('');
      setMessage('');
    }, 4000);
  };

  return (
    <div className="w-full bg-[#f8fafc] py-10 lg:py-16">
      <div className="max-w-[1720px] mx-auto px-4 sm:px-8 xl:px-12 space-y-10">
        {/* Page Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <span className="inline-block px-3.5 py-1 rounded-full bg-[#cce5ff] text-[#006194] text-[12px] font-bold uppercase tracking-wider">
            Kết Nối Nhanh Chóng
          </span>
          <h1 className="text-[30px] sm:text-[38px] font-extrabold text-[#006194] tracking-tight uppercase">
            LIÊN HỆ & TRỤ SỞ DOANH NGHIỆP
          </h1>
          <div className="w-20 h-1 bg-[#bb0112] rounded-full mx-auto"></div>
          <p className="text-[15px] text-[#475569] leading-relaxed">
            Đội ngũ kỹ thuật viên và chuyên viên kinh doanh của Trí Việt Phát luôn sẵn sàng tiếp nhận yêu cầu, cung cấp giải pháp và báo giá nhanh chóng nhất.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Contact Details Card */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-white p-6 sm:p-8 rounded-2xl shadow-sm border border-[#e2e8f0] space-y-6">
              <div className="flex items-center gap-3">
                <img
                  src={COMPANY_INFO.logoUrl}
                  alt="Logo Trí Việt Phát"
                  className="h-12 w-auto max-h-12 object-contain rounded-lg border border-[#e2e8f0] p-1 shadow-xs"
                />
                <div>
                  <h3 className="text-[17px] font-bold text-[#006194] uppercase leading-snug">
                    {COMPANY_INFO.name}
                  </h3>
                  <span className="text-[12px] text-[#475569]">
                    MST/GPĐKKD: <strong>{COMPANY_INFO.licenseNo}</strong>
                  </span>
                </div>
              </div>

              <div className="space-y-4 text-[14px] text-[#475569]">
                <div className="flex items-start gap-3">
                  <div className="w-9 h-9 rounded-lg bg-[#e0f2fe] text-[#006194] flex items-center justify-center shrink-0">
                    <span className="material-symbols-outlined text-[20px]">location_on</span>
                  </div>
                  <div>
                    <strong className="text-[#0f172a] block">Trụ sở & Văn phòng giao dịch:</strong>
                    <span>{COMPANY_INFO.address}</span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-9 h-9 rounded-lg bg-[#fee2e2] text-[#bb0112] flex items-center justify-center shrink-0">
                    <span className="material-symbols-outlined text-[20px]">phone_in_talk</span>
                  </div>
                  <div>
                    <strong className="text-[#0f172a] block">Hotline 24/7:</strong>
                    <a
                      href={`tel:${COMPANY_INFO.hotline.replace(/\./g, '')}`}
                      className="text-[#bb0112] font-bold text-[16px] hover:underline"
                    >
                      {COMPANY_INFO.hotline}
                    </a>
                    <span className="text-[12px] text-[#475569] block">
                      Điện thoại bàn: {COMPANY_INFO.phone}
                    </span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-9 h-9 rounded-lg bg-[#e0f2fe] text-[#006194] flex items-center justify-center shrink-0">
                    <span className="material-symbols-outlined text-[20px]">mail</span>
                  </div>
                  <div>
                    <strong className="text-[#0f172a] block">Email tiếp nhận thông tin:</strong>
                    <a
                      href={`mailto:${COMPANY_INFO.email}`}
                      className="text-[#006194] hover:underline"
                    >
                      {COMPANY_INFO.email}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-9 h-9 rounded-lg bg-[#f1f5f9] text-[#475569] flex items-center justify-center shrink-0">
                    <span className="material-symbols-outlined text-[20px]">schedule</span>
                  </div>
                  <div>
                    <strong className="text-[#0f172a] block">Giờ làm việc:</strong>
                    <span>Thứ Hai – Thứ Bảy: 08:00 – 17:30 (Kỹ thuật trực cấp cứu 24/7)</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Zalo Direct Box */}
            <div className="p-6 rounded-2xl bg-[#006194] text-white flex items-center justify-between gap-4 shadow-sm">
              <div>
                <h4 className="text-[16px] font-bold">Chat trực tiếp qua Zalo</h4>
                <p className="text-[12px] text-[#cce5ff]">
                  Gặp kỹ sư hỗ trợ báo giá và tài liệu kỹ thuật
                </p>
              </div>
              <a
                href={COMPANY_INFO.zaloUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 rounded-xl bg-white text-[#006194] font-bold text-[13px] hover:bg-[#e0f2fe] transition-colors"
              >
                Mở Zalo ngay
              </a>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-7">
            <div className="bg-white p-6 sm:p-8 rounded-2xl shadow-sm border border-[#e2e8f0]">
              <h3 className="text-[20px] font-bold text-[#0f172a] mb-2">
                Gửi Thắc Mắc & Yêu Cầu Cho Chúng Tôi
              </h3>
              <p className="text-[13.5px] text-[#475569] mb-6">
                Vui lòng điền thông tin bên dưới, chuyên viên của Trí Việt Phát sẽ phản hồi sớm nhất.
              </p>

              {submitted ? (
                <div className="text-center py-10 space-y-3 bg-[#f8fafc] rounded-xl border border-[#e2e8f0]">
                  <span className="material-symbols-outlined text-[44px] text-[#006194]">
                    check_circle
                  </span>
                  <h4 className="text-[18px] font-bold text-[#0f172a]">
                    Cảm ơn Quý khách đã gửi tin nhắn!
                  </h4>
                  <p className="text-[13.5px] text-[#475569] max-w-sm mx-auto">
                    Chúng tôi đã ghi nhận nội dung và sẽ liên hệ lại với Quý khách qua số điện thoại <strong>{phone}</strong> trong thời gian sớm nhất.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-[12px] font-bold text-[#0f172a] mb-1">
                        Họ và tên <span className="text-[#bb0112]">*</span>
                      </label>
                      <input
                        type="text"
                        required
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="Họ tên của bạn"
                        className="w-full px-3 py-2.5 rounded-xl bg-[#f1f5f9] text-[13.5px] text-[#0f172a] focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#006194]"
                      />
                    </div>
                    <div>
                      <label className="block text-[12px] font-bold text-[#0f172a] mb-1">
                        Số điện thoại <span className="text-[#bb0112]">*</span>
                      </label>
                      <input
                        type="tel"
                        required
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        placeholder="Số điện thoại liên hệ"
                        className="w-full px-3 py-2.5 rounded-xl bg-[#f1f5f9] text-[13.5px] text-[#0f172a] focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#006194]"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-[12px] font-bold text-[#0f172a] mb-1">
                      Địa chỉ Email <span className="text-[#bb0112]">*</span>
                    </label>
                    <input
                      type="email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="Email nhận thông tin"
                      className="w-full px-3 py-2.5 rounded-xl bg-[#f1f5f9] text-[13.5px] text-[#0f172a] focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#006194]"
                    />
                  </div>

                  <div>
                    <label className="block text-[12px] font-bold text-[#0f172a] mb-1">
                      Nội dung yêu cầu / Báo giá thiết bị
                    </label>
                    <textarea
                      rows={4}
                      required
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      placeholder="Chi tiết câu hỏi, mã máy cần tư vấn hoặc dịch vụ sửa chữa bảo dưỡng..."
                      className="w-full p-3 rounded-xl bg-[#f1f5f9] text-[13.5px] text-[#0f172a] focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#006194]"
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3.5 rounded-xl bg-[#bb0112] hover:bg-[#b91c1c] text-white text-[14px] font-bold uppercase tracking-wider transition-colors shadow cursor-pointer"
                  >
                    GỬI THÔNG ĐIỆP
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
