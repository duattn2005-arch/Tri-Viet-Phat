import React from 'react';
import { PageTab } from '../types';
import { COMPANY_INFO } from '../data/mockData';

interface FooterProps {
  onSelectTab: (tab: PageTab, categoryFilter?: string) => void;
  onOpenConsultation: (prefilledProduct?: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onSelectTab, onOpenConsultation }) => {
  const handleNav = (tab: PageTab, cat?: string) => {
    onSelectTab(tab, cat);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="w-full bg-[#213145] text-[#eaf1ff] pt-12 pb-8 border-t border-[#131b2e]">
      <div className="max-w-[1720px] mx-auto px-4 sm:px-8 xl:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Column 1: Company Profile */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <img
                src={COMPANY_INFO.logoUrl}
                alt="Logo Trí Việt Phát"
                className="h-10 w-auto max-h-10 object-contain rounded-lg bg-white p-1 shadow-sm"
              />
              <div className="flex flex-col">
                <span className="text-[17px] font-bold text-white tracking-tight leading-none uppercase">
                  TRÍ VIỆT PHÁT
                </span>
                <span className="text-[11px] text-[#bec6e0] tracking-wider uppercase mt-0.5">
                  Medical Equipment Co., Ltd
                </span>
              </div>
            </div>

            <p className="text-[13px] text-[#bfc7d2] leading-relaxed">
              Công ty TNHH Thương mại Dịch vụ Trí Việt Phát. Đơn vị phân phối trang thiết bị xét nghiệm, máy chẩn đoán và hóa chất y tế tiêu chuẩn quốc tế cho bệnh viện, phòng khám trên toàn quốc.
            </p>

            <div className="inline-block px-3 py-1.5 rounded-lg bg-[#0b1c30]/50 border border-[#3f4850] text-[11px] text-[#bec6e0]">
              GPĐKKD: <strong className="text-white font-semibold">{COMPANY_INFO.licenseNo}</strong> do {COMPANY_INFO.licensedBy}.
            </div>

            <div className="flex items-center gap-2 pt-2">
              <a
                href="#facebook"
                aria-label="Facebook"
                className="w-8 h-8 rounded-lg bg-[#0b1c30] flex items-center justify-center text-[#bfc7d2] hover:bg-[#006194] hover:text-white transition-colors"
              >
                <span className="material-symbols-outlined text-[16px]">public</span>
              </a>
              <a
                href="#linkedin"
                aria-label="LinkedIn"
                className="w-8 h-8 rounded-lg bg-[#0b1c30] flex items-center justify-center text-[#bfc7d2] hover:bg-[#006194] hover:text-white transition-colors"
              >
                <span className="material-symbols-outlined text-[16px]">hub</span>
              </a>
              <a
                href="#youtube"
                aria-label="YouTube"
                className="w-8 h-8 rounded-lg bg-[#0b1c30] flex items-center justify-center text-[#bfc7d2] hover:bg-[#006194] hover:text-white transition-colors"
              >
                <span className="material-symbols-outlined text-[16px]">smart_display</span>
              </a>
              <a
                href="#share"
                aria-label="Share"
                className="w-8 h-8 rounded-lg bg-[#0b1c30] flex items-center justify-center text-[#bfc7d2] hover:bg-[#006194] hover:text-white transition-colors"
              >
                <span className="material-symbols-outlined text-[16px]">share</span>
              </a>
            </div>
          </div>

          {/* Column 2: Khám Phá */}
          <div>
            <h4 className="text-[16px] font-bold text-white mb-4 flex items-center gap-2">
              <span className="w-1.5 h-4 bg-[#006194] rounded-full"></span>
              <span>Khám Phá</span>
            </h4>
            <ul className="space-y-2.5 text-[13.5px]">
              <li>
                <button
                  onClick={() => handleNav('gioi-thieu')}
                  className="text-[#bfc7d2] hover:text-white transition-colors flex items-center gap-1.5 text-left"
                >
                  <span className="material-symbols-outlined text-[15px] text-[#006194]">chevron_right</span>
                  <span>Giới thiệu</span>
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav('san-pham')}
                  className="text-[#bfc7d2] hover:text-white transition-colors flex items-center gap-1.5 text-left"
                >
                  <span className="material-symbols-outlined text-[15px] text-[#006194]">chevron_right</span>
                  <span>Sản phẩm</span>
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav('tai-lieu')}
                  className="text-[#bfc7d2] hover:text-white transition-colors flex items-center gap-1.5 text-left"
                >
                  <span className="material-symbols-outlined text-[15px] text-[#006194]">chevron_right</span>
                  <span>Tài liệu kỹ thuật</span>
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav('tin-tuc')}
                  className="text-[#bfc7d2] hover:text-white transition-colors flex items-center gap-1.5 text-left"
                >
                  <span className="material-symbols-outlined text-[15px] text-[#006194]">chevron_right</span>
                  <span>Tin tức & Sự kiện</span>
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav('tin-tuc')}
                  className="text-[#bfc7d2] hover:text-white transition-colors flex items-center gap-1.5 text-left"
                >
                  <span className="material-symbols-outlined text-[15px] text-[#006194]">chevron_right</span>
                  <span>Kiến thức y học xét nghiệm</span>
                </button>
              </li>
              <li>
                <button
                  onClick={() => onOpenConsultation()}
                  className="text-[#bfc7d2] hover:text-white transition-colors flex items-center gap-1.5 text-left"
                >
                  <span className="material-symbols-outlined text-[15px] text-[#006194]">chevron_right</span>
                  <span>Liên hệ báo giá</span>
                </button>
              </li>
            </ul>
          </div>

          {/* Column 3: Danh Mục Thiết Bị */}
          <div>
            <h4 className="text-[16px] font-bold text-white mb-4 flex items-center gap-2">
              <span className="w-1.5 h-4 bg-[#006194] rounded-full"></span>
              <span>Danh Mục Thiết Bị</span>
            </h4>
            <ul className="space-y-2.5 text-[13.5px]">
              <li>
                <button
                  onClick={() => handleNav('san-pham', 'may-xet-nghiem-dien-giai')}
                  className="text-[#bfc7d2] hover:text-white transition-colors flex items-center gap-1.5 text-left"
                >
                  <span className="material-symbols-outlined text-[15px] text-[#006194]">chevron_right</span>
                  <span>Máy xét nghiệm điện giải</span>
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav('san-pham', 'may-phan-tich-dong-mau')}
                  className="text-[#bfc7d2] hover:text-white transition-colors flex items-center gap-1.5 text-left"
                >
                  <span className="material-symbols-outlined text-[15px] text-[#006194]">chevron_right</span>
                  <span>Máy phân tích đông máu</span>
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav('san-pham', 'may-xet-nghiem-nuoc-tieu')}
                  className="text-[#bfc7d2] hover:text-white transition-colors flex items-center gap-1.5 text-left"
                >
                  <span className="material-symbols-outlined text-[15px] text-[#006194]">chevron_right</span>
                  <span>Máy xét nghiệm nước tiểu</span>
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav('san-pham', 'hoa-chat-xet-nghiem')}
                  className="text-[#bfc7d2] hover:text-white transition-colors flex items-center gap-1.5 text-left"
                >
                  <span className="material-symbols-outlined text-[15px] text-[#006194]">chevron_right</span>
                  <span>Hóa chất xét nghiệm chính hãng</span>
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav('san-pham', 'he-thong-xu-ly-mau')}
                  className="text-[#bfc7d2] hover:text-white transition-colors flex items-center gap-1.5 text-left"
                >
                  <span className="material-symbols-outlined text-[15px] text-[#006194]">chevron_right</span>
                  <span>Hệ thống xử lý mẫu tự động</span>
                </button>
              </li>
            </ul>
          </div>

          {/* Column 4: Liên Hệ Trực Tiếp */}
          <div>
            <h4 className="text-[16px] font-bold text-white mb-4 flex items-center gap-2">
              <span className="w-1.5 h-4 bg-[#bb0112] rounded-full"></span>
              <span>Liên Hệ Trực Tiếp</span>
            </h4>
            <div className="space-y-3 text-[13px] text-[#bfc7d2]">
              <div className="flex items-start gap-2.5">
                <span className="material-symbols-outlined text-[#006194] text-[18px] mt-0.5 shrink-0">
                  location_on
                </span>
                <span>Trụ sở & VPGD: {COMPANY_INFO.address}</span>
              </div>
              <div className="flex items-center gap-2.5">
                <span className="material-symbols-outlined text-[#006194] text-[18px] shrink-0">
                  call
                </span>
                <span>Điện thoại: {COMPANY_INFO.phone}</span>
              </div>
              <div className="flex items-center gap-2.5">
                <span className="material-symbols-outlined text-[#bb0112] text-[18px] shrink-0">
                  phone_in_talk
                </span>
                <span className="text-white font-semibold">
                  Hotline: <strong className="text-[#ffb4ab]">{COMPANY_INFO.hotline}</strong>
                </span>
              </div>
              <div className="flex items-center gap-2.5">
                <span className="material-symbols-outlined text-[#006194] text-[18px] shrink-0">
                  mail
                </span>
                <span>{COMPANY_INFO.email}</span>
              </div>
              <div className="flex items-center gap-2.5">
                <span className="material-symbols-outlined text-[#006194] text-[18px] shrink-0">
                  language
                </span>
                <span>{COMPANY_INFO.website}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom copyright */}
        <div className="pt-6 border-t border-[#3f4850]/60 text-center text-[12px] text-[#bfc7d2]/80">
          <p>© 2025 Công ty TNHH Thương mại Dịch vụ Trí Việt Phát. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};
