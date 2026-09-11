import React, { useState } from 'react';
import { PageTab } from '../types';
import { COMPANY_INFO } from '../data/mockData';

interface HeaderProps {
  currentTab: PageTab;
  onSelectTab: (tab: PageTab, categoryFilter?: string) => void;
  onOpenConsultation: (prefilledProduct?: string) => void;
  onOpenSearch: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  currentTab,
  onSelectTab,
  onOpenConsultation,
  onOpenSearch,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [productsDropdownOpen, setProductsDropdownOpen] = useState(false);

  const handleNavClick = (tab: PageTab, categoryFilter?: string) => {
    onSelectTab(tab, categoryFilter);
    setMobileMenuOpen(false);
    setProductsDropdownOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-[#ffffff] shadow-[0_1px_8px_rgba(0,0,0,0.04)] border-b border-[#e2e8f0]">
      {/* Top Utility Bar */}
      <div className="bg-[#f1f5f9] text-[#475569] text-[12px] font-medium border-b border-[#e2e8f0]/60">
        <div className="max-w-[1720px] mx-auto px-4 sm:px-8 xl:px-12 flex items-center justify-between h-9">
          <div className="flex items-center gap-4 sm:gap-6">
            <a
              href={`tel:${COMPANY_INFO.hotline.replace(/\./g, '')}`}
              className="flex items-center gap-1.5 hover:text-[#006194] transition-colors"
            >
              <span className="material-symbols-outlined text-[15px] text-[#006194]">phone_in_talk</span>
              <span>
                Hotline: <strong className="text-[#bb0112] font-bold">{COMPANY_INFO.hotline}</strong>
              </span>
            </a>
            <span className="text-[#bfc7d2] hidden sm:inline">|</span>
            <a
              href={`mailto:${COMPANY_INFO.email}`}
              className="hidden sm:flex items-center gap-1.5 hover:text-[#006194] transition-colors"
            >
              <span className="material-symbols-outlined text-[15px] text-[#006194]">mail</span>
              <span>{COMPANY_INFO.email}</span>
            </a>
          </div>

          <div className="flex items-center gap-3">
            <span className="hidden md:inline text-[11px] text-[#475569]">Kết nối:</span>
            <div className="flex items-center gap-1">
              <a
                href="#facebook"
                aria-label="Facebook"
                className="w-6 h-6 rounded flex items-center justify-center text-[#475569] hover:bg-[#e5eeff] hover:text-[#006194] transition-colors"
              >
                <span className="material-symbols-outlined text-[15px]">public</span>
              </a>
              <a
                href="#linkedin"
                aria-label="LinkedIn"
                className="w-6 h-6 rounded flex items-center justify-center text-[#475569] hover:bg-[#e5eeff] hover:text-[#006194] transition-colors"
              >
                <span className="material-symbols-outlined text-[15px]">hub</span>
              </a>
              <a
                href="#youtube"
                aria-label="YouTube"
                className="w-6 h-6 rounded flex items-center justify-center text-[#475569] hover:bg-[#e5eeff] hover:text-[#006194] transition-colors"
              >
                <span className="material-symbols-outlined text-[15px]">smart_display</span>
              </a>
              <a
                href="#share"
                aria-label="Share"
                className="w-6 h-6 rounded flex items-center justify-center text-[#475569] hover:bg-[#e5eeff] hover:text-[#006194] transition-colors"
              >
                <span className="material-symbols-outlined text-[15px]">share</span>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <div className="max-w-[1720px] mx-auto px-4 sm:px-8 xl:px-12 flex items-center justify-between h-20">
        {/* Brand Logo & Name */}
        <button
          onClick={() => handleNavClick('trang-chu')}
          className="flex items-center gap-3 text-left focus:outline-none group"
        >
          <img
            alt="Logo Trí Việt Phát"
            className="h-10 sm:h-12 w-auto max-h-12 object-contain group-hover:scale-105 transition-transform"
            src={COMPANY_INFO.logoUrl}
          />
          <div className="flex flex-col">
            <span className="text-[19px] sm:text-[21px] font-bold text-[#006194] tracking-tight leading-none uppercase font-sans">
              TRÍ VIỆT PHÁT
            </span>
          </div>
        </button>

        {/* Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center gap-1 xl:gap-2 text-[14px] font-semibold">
          <button
            onClick={() => handleNavClick('trang-chu')}
            className={`px-3 py-2 rounded-lg transition-colors ${
              currentTab === 'trang-chu'
                ? 'text-[#006194] font-bold bg-[#e0f2fe]/50'
                : 'text-[#3f4850] hover:text-[#006194] hover:bg-[#f1f5f9]'
            }`}
          >
            Trang chủ
          </button>

          <button
            onClick={() => handleNavClick('gioi-thieu')}
            className={`px-3 py-2 rounded-lg transition-colors ${
              currentTab === 'gioi-thieu'
                ? 'text-[#006194] font-bold bg-[#e0f2fe]/50'
                : 'text-[#3f4850] hover:text-[#006194] hover:bg-[#f1f5f9]'
            }`}
          >
            Giới thiệu
          </button>

          {/* Sản phẩm with Dropdown */}
          <div
            className="relative"
            onMouseEnter={() => setProductsDropdownOpen(true)}
            onMouseLeave={() => setProductsDropdownOpen(false)}
          >
            <button
              onClick={() => handleNavClick('san-pham')}
              className={`px-3 py-2 rounded-lg transition-colors inline-flex items-center gap-1 ${
                currentTab === 'san-pham'
                  ? 'text-[#006194] font-bold bg-[#e0f2fe]/50'
                  : 'text-[#3f4850] hover:text-[#006194] hover:bg-[#f1f5f9]'
              }`}
            >
              <span>Sản phẩm</span>
              <span className="material-symbols-outlined text-[18px]">expand_more</span>
            </button>

            {productsDropdownOpen && (
              <div className="absolute left-0 top-full w-72 bg-white shadow-[0_12px_28px_rgba(15,23,42,0.12)] rounded-xl py-2 border border-[#e2e8f0] z-50 animate-in fade-in slide-in-from-top-2 duration-150">
                <button
                  onClick={() => handleNavClick('san-pham', 'all')}
                  className="w-full text-left px-4 py-2.5 text-[13px] font-semibold text-[#006194] hover:bg-[#f1f5f9] transition-colors border-b border-[#f1f5f9]"
                >
                  Tất cả sản phẩm & thiết bị
                </button>
                <button
                  onClick={() => handleNavClick('san-pham', 'hoa-chat-xet-nghiem')}
                  className="w-full text-left px-4 py-2 text-[13px] text-[#3f4850] hover:bg-[#e0f2fe]/50 hover:text-[#006194] transition-colors flex items-center justify-between"
                >
                  <span>Hóa chất xét nghiệm</span>
                  <span className="material-symbols-outlined text-[14px] text-[#bfc7d2]">chevron_right</span>
                </button>
                <button
                  onClick={() => handleNavClick('san-pham', 'may-xet-nghiem-sinh-hoa')}
                  className="w-full text-left px-4 py-2 text-[13px] text-[#3f4850] hover:bg-[#e0f2fe]/50 hover:text-[#006194] transition-colors flex items-center justify-between"
                >
                  <span>Máy xét nghiệm sinh hóa</span>
                  <span className="material-symbols-outlined text-[14px] text-[#bfc7d2]">chevron_right</span>
                </button>
                <button
                  onClick={() => handleNavClick('san-pham', 'may-xet-nghiem-dien-giai')}
                  className="w-full text-left px-4 py-2 text-[13px] text-[#3f4850] hover:bg-[#e0f2fe]/50 hover:text-[#006194] transition-colors flex items-center justify-between"
                >
                  <span>Máy xét nghiệm điện giải</span>
                  <span className="material-symbols-outlined text-[14px] text-[#bfc7d2]">chevron_right</span>
                </button>
                <button
                  onClick={() => handleNavClick('san-pham', 'may-xet-nghiem-nuoc-tieu')}
                  className="w-full text-left px-4 py-2 text-[13px] text-[#3f4850] hover:bg-[#e0f2fe]/50 hover:text-[#006194] transition-colors flex items-center justify-between"
                >
                  <span>Máy xét nghiệm nước tiểu</span>
                  <span className="material-symbols-outlined text-[14px] text-[#bfc7d2]">chevron_right</span>
                </button>
                <button
                  onClick={() => handleNavClick('san-pham', 'may-phan-tich-dong-mau')}
                  className="w-full text-left px-4 py-2 text-[13px] text-[#3f4850] hover:bg-[#e0f2fe]/50 hover:text-[#006194] transition-colors flex items-center justify-between"
                >
                  <span>Máy phân tích đông máu</span>
                  <span className="material-symbols-outlined text-[14px] text-[#bfc7d2]">chevron_right</span>
                </button>
                <button
                  onClick={() => handleNavClick('san-pham', 'he-thong-xu-ly-mau')}
                  className="w-full text-left px-4 py-2 text-[13px] text-[#3f4850] hover:bg-[#e0f2fe]/50 hover:text-[#006194] transition-colors flex items-center justify-between"
                >
                  <span>Hệ thống xử lý mẫu tự động</span>
                  <span className="material-symbols-outlined text-[14px] text-[#bfc7d2]">chevron_right</span>
                </button>
              </div>
            )}
          </div>

          <button
            onClick={() => handleNavClick('tai-lieu')}
            className={`px-3 py-2 rounded-lg transition-colors ${
              currentTab === 'tai-lieu'
                ? 'text-[#006194] font-bold bg-[#e0f2fe]/50'
                : 'text-[#3f4850] hover:text-[#006194] hover:bg-[#f1f5f9]'
            }`}
          >
            Tài liệu
          </button>

          <button
            onClick={() => handleNavClick('tin-tuc')}
            className={`px-3 py-2 rounded-lg transition-colors ${
              currentTab === 'tin-tuc'
                ? 'text-[#006194] font-bold bg-[#e0f2fe]/50'
                : 'text-[#3f4850] hover:text-[#006194] hover:bg-[#f1f5f9]'
            }`}
          >
            Tin tức
          </button>

          <button
            onClick={() => handleNavClick('tuyen-dung')}
            className={`px-3 py-2 rounded-lg transition-colors ${
              currentTab === 'tuyen-dung'
                ? 'text-[#006194] font-bold bg-[#e0f2fe]/50'
                : 'text-[#3f4850] hover:text-[#006194] hover:bg-[#f1f5f9]'
            }`}
          >
            Tuyển dụng
          </button>

          <button
            onClick={() => handleNavClick('lien-he')}
            className={`px-3 py-2 rounded-lg transition-colors ${
              currentTab === 'lien-he'
                ? 'text-[#006194] font-bold bg-[#e0f2fe]/50'
                : 'text-[#3f4850] hover:text-[#006194] hover:bg-[#f1f5f9]'
            }`}
          >
            Liên hệ
          </button>
        </nav>

        {/* Action Buttons */}
        <div className="flex items-center gap-2 sm:gap-3">
          <button
            onClick={onOpenSearch}
            aria-label="Tìm kiếm thiết bị"
            className="w-10 h-10 rounded-xl bg-[#f1f5f9] flex items-center justify-center text-[#475569] hover:bg-[#e5eeff] hover:text-[#006194] transition-colors"
          >
            <span className="material-symbols-outlined text-[20px]">search</span>
          </button>

          <button
            onClick={() => onOpenConsultation()}
            className="hidden sm:inline-flex items-center gap-1.5 bg-[#bb0112] hover:bg-[#b91c1c] text-white px-4 py-2.5 rounded-xl text-[14px] font-semibold transition-all shadow hover:shadow-md cursor-pointer"
          >
            <span className="material-symbols-outlined text-[18px]">support_agent</span>
            <span>Tư vấn ngay</span>
          </button>

          {/* Mobile hamburger menu button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Menu"
            className="lg:hidden w-10 h-10 rounded-xl bg-[#f1f5f9] flex items-center justify-center text-[#475569] hover:bg-[#e5eeff] hover:text-[#006194] transition-colors"
          >
            <span className="material-symbols-outlined text-[22px]">
              {mobileMenuOpen ? 'close' : 'menu'}
            </span>
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-b border-[#e2e8f0] px-4 py-4 space-y-2 shadow-lg animate-in slide-in-from-top-2">
          <button
            onClick={() => handleNavClick('trang-chu')}
            className={`w-full text-left px-3 py-2.5 rounded-lg text-[14px] font-semibold ${
              currentTab === 'trang-chu' ? 'bg-[#e0f2fe] text-[#006194]' : 'text-[#3f4850]'
            }`}
          >
            Trang chủ
          </button>
          <button
            onClick={() => handleNavClick('gioi-thieu')}
            className={`w-full text-left px-3 py-2.5 rounded-lg text-[14px] font-semibold ${
              currentTab === 'gioi-thieu' ? 'bg-[#e0f2fe] text-[#006194]' : 'text-[#3f4850]'
            }`}
          >
            Giới thiệu
          </button>
          <button
            onClick={() => handleNavClick('san-pham')}
            className={`w-full text-left px-3 py-2.5 rounded-lg text-[14px] font-semibold ${
              currentTab === 'san-pham' ? 'bg-[#e0f2fe] text-[#006194]' : 'text-[#3f4850]'
            }`}
          >
            Sản phẩm & Thiết bị y tế
          </button>
          <button
            onClick={() => handleNavClick('tai-lieu')}
            className={`w-full text-left px-3 py-2.5 rounded-lg text-[14px] font-semibold ${
              currentTab === 'tai-lieu' ? 'bg-[#e0f2fe] text-[#006194]' : 'text-[#3f4850]'
            }`}
          >
            Tài liệu kỹ thuật
          </button>
          <button
            onClick={() => handleNavClick('tin-tuc')}
            className={`w-full text-left px-3 py-2.5 rounded-lg text-[14px] font-semibold ${
              currentTab === 'tin-tuc' ? 'bg-[#e0f2fe] text-[#006194]' : 'text-[#3f4850]'
            }`}
          >
            Tin tức & Sự kiện
          </button>
          <button
            onClick={() => handleNavClick('tuyen-dung')}
            className={`w-full text-left px-3 py-2.5 rounded-lg text-[14px] font-semibold ${
              currentTab === 'tuyen-dung' ? 'bg-[#e0f2fe] text-[#006194]' : 'text-[#3f4850]'
            }`}
          >
            Tuyển dụng kỹ sư
          </button>
          <button
            onClick={() => handleNavClick('lien-he')}
            className={`w-full text-left px-3 py-2.5 rounded-lg text-[14px] font-semibold ${
              currentTab === 'lien-he' ? 'bg-[#e0f2fe] text-[#006194]' : 'text-[#3f4850]'
            }`}
          >
            Liên hệ báo giá
          </button>
          <div className="pt-2 border-t border-[#f1f5f9]">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenConsultation();
              }}
              className="w-full py-2.5 rounded-xl bg-[#bb0112] text-white text-[14px] font-bold text-center flex items-center justify-center gap-2"
            >
              <span className="material-symbols-outlined text-[18px]">support_agent</span>
              <span>Tư vấn ngay</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
