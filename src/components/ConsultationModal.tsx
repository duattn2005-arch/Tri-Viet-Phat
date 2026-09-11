import React, { useState, useEffect } from 'react';
import { COMPANY_INFO } from '../data/mockData';
import { MAJOR_CITIES, PROVINCES_28 } from '../data/provinces';

interface ConsultationModalProps {
  isOpen: boolean;
  onClose: () => void;
  prefilledProduct?: string;
}

export const ConsultationModal: React.FC<ConsultationModalProps> = ({
  isOpen,
  onClose,
  prefilledProduct = '',
}) => {
  const [fullName, setFullName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [province, setProvince] = useState('Hà Nội');
  const [note, setNote] = useState('');
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    if (prefilledProduct) {
      setNote(`Tôi quan tâm và cần nhận bảng báo giá thiết bị: ${prefilledProduct}`);
    } else {
      setNote('');
    }
    setSubmitted(false);
  }, [prefilledProduct, isOpen]);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      // Auto close after 2.5s
      setTimeout(() => {
        setSubmitted(false);
        onClose();
      }, 2500);
    }, 500);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs animate-in fade-in duration-200">
      <div
        className="bg-white rounded-2xl max-w-xl w-full p-6 sm:p-8 shadow-2xl relative border border-[#e2e8f0]"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          aria-label="Đóng"
          className="absolute top-4 right-4 w-9 h-9 rounded-full bg-[#f1f5f9] hover:bg-[#e2e8f0] text-[#475569] flex items-center justify-center transition-colors"
        >
          <span className="material-symbols-outlined text-[20px]">close</span>
        </button>

        {submitted ? (
          <div className="text-center py-8 space-y-4 animate-in zoom-in-95 duration-200">
            <div className="w-16 h-16 rounded-full bg-[#e0f2fe] text-[#006194] flex items-center justify-center mx-auto">
              <span className="material-symbols-outlined text-[36px]">verified</span>
            </div>
            <h3 className="text-[20px] font-bold text-[#0f172a]">
              Đã gửi yêu cầu thành công!
            </h3>
            <p className="text-[14px] text-[#475569] max-w-sm mx-auto leading-relaxed">
              Cảm ơn Quý khách! Kỹ sư chuyên môn của Trí Việt Phát sẽ liên hệ phản hồi và gửi bảng báo giá qua số điện thoại <strong>{phone}</strong> trong vòng 15 phút.
            </p>
          </div>
        ) : (
          <div>
            <div className="mb-5 text-left">
              <span className="inline-block px-3 py-1 rounded-full bg-[#bb0112] text-white text-[11px] font-bold uppercase tracking-wider mb-2">
                Tư Vấn Chuyên Sâu 24/7
              </span>
              <h3 className="text-[20px] font-bold text-[#0f172a]">
                Đăng ký tư vấn & Báo giá thiết bị y tế
              </h3>
              <p className="text-[13px] text-[#475569] mt-1">
                Kỹ sư y sinh của Trí Việt Phát cam kết bảo mật thông tin và tư vấn giải pháp tối ưu chi phí nhất.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                <div>
                  <label className="block text-[12px] font-semibold text-[#0f172a] mb-1">
                    Họ tên/Đơn vị <span className="text-[#bb0112]">*</span>
                  </label>
                  <div className="relative">
                    <span className="material-symbols-outlined absolute left-3 top-2.5 text-[#475569] text-[18px]">
                      person
                    </span>
                    <input
                      type="text"
                      required
                      value={fullName}
                      onChange={(e) => setFullName(e.target.value)}
                      placeholder="Họ và tên hoặc tên đơn vị"
                      className="w-full pl-9 pr-3 py-2 rounded-xl bg-[#f1f5f9] text-[13.5px] text-[#0f172a] focus:outline-none focus:bg-white focus:ring-2 focus:ring-[#006194]"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-[12px] font-semibold text-[#0f172a] mb-1">
                    Số điện thoại <span className="text-[#bb0112]">*</span>
                  </label>
                  <div className="relative">
                    <span className="material-symbols-outlined absolute left-3 top-2.5 text-[#475569] text-[18px]">
                      call
                    </span>
                    <input
                      type="tel"
                      required
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      placeholder="Số điện thoại liên hệ"
                      className="w-full pl-9 pr-3 py-2 rounded-xl bg-[#f1f5f9] text-[13.5px] text-[#0f172a] focus:outline-none focus:bg-white focus:ring-2 focus:ring-[#006194]"
                    />
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                <div>
                  <label className="block text-[12px] font-semibold text-[#0f172a] mb-1">
                    Địa chỉ email
                  </label>
                  <div className="relative">
                    <span className="material-symbols-outlined absolute left-3 top-2.5 text-[#475569] text-[18px]">
                      mail
                    </span>
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="Email nhận báo giá (nếu có)"
                      className="w-full pl-9 pr-3 py-2 rounded-xl bg-[#f1f5f9] text-[13.5px] text-[#0f172a] focus:outline-none focus:bg-white focus:ring-2 focus:ring-[#006194]"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-[12px] font-semibold text-[#0f172a] mb-1">
                    Khu vực tỉnh/thành phố <span className="text-[#bb0112]">*</span>
                  </label>
                  <div className="relative">
                    <span className="material-symbols-outlined absolute left-3 top-2.5 text-[#475569] text-[18px]">
                      location_on
                    </span>
                    <select
                      value={province}
                      onChange={(e) => setProvince(e.target.value)}
                      className="w-full pl-9 pr-3 py-2 rounded-xl bg-[#f1f5f9] text-[13.5px] text-[#0f172a] focus:outline-none focus:bg-white focus:ring-2 focus:ring-[#006194]"
                    >
                      <optgroup label="6 Thành phố trực thuộc TW">
                        {MAJOR_CITIES.map((city) => (
                          <option key={city} value={city}>
                            {city}
                          </option>
                        ))}
                      </optgroup>
                      <optgroup label="28 Tỉnh sau sáp nhập">
                        {PROVINCES_28.map((prov) => (
                          <option key={prov} value={prov}>
                            {prov}
                          </option>
                        ))}
                      </optgroup>
                    </select>
                  </div>
                </div>
              </div>

              <div>
                <label className="block text-[12px] font-semibold text-[#0f172a] mb-1">
                  Nội dung quan tâm / Thiết bị cần báo giá
                </label>
                <textarea
                  rows={3}
                  value={note}
                  onChange={(e) => setNote(e.target.value)}
                  placeholder="Ví dụ: Cần tư vấn lắp đặt máy xét nghiệm điện giải và bảng giá hóa chất huyết học Dewei..."
                  className="w-full p-3 rounded-xl bg-[#f1f5f9] text-[13.5px] text-[#0f172a] focus:outline-none focus:bg-white focus:ring-2 focus:ring-[#006194]"
                ></textarea>
              </div>

              <div className="pt-2 flex items-center gap-3">
                <button
                  type="submit"
                  className="flex-1 py-3 rounded-xl bg-[#bb0112] hover:bg-[#b91c1c] text-white text-[14px] font-bold uppercase tracking-wider transition-all shadow hover:shadow-md flex items-center justify-center gap-2 cursor-pointer"
                >
                  <span className="material-symbols-outlined text-[18px]">send</span>
                  <span>GỬI YÊU CẦU</span>
                </button>
              </div>
            </form>
          </div>
        )}
      </div>
    </div>
  );
};
