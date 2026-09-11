import React, { useState } from 'react';
import {
  COMPANY_INFO,
  CORE_VALUES,
  BUSINESS_AREAS,
  PRODUCTS,
  PARTNERS,
  ARTICLES,
} from '../../data/mockData';
import { MAJOR_CITIES, PROVINCES_28 } from '../../data/provinces';
import { Product, Article, PageTab } from '../../types';

interface HomeScreenProps {
  onSelectProduct: (product: Product) => void;
  onSelectArticle: (article: Article) => void;
  onNavigateTab: (tab: PageTab, categoryFilter?: string) => void;
  onOpenConsultation: (prefilledProduct?: string) => void;
}

export const HomeScreen: React.FC<HomeScreenProps> = ({
  onSelectProduct,
  onSelectArticle,
  onNavigateTab,
  onOpenConsultation,
}) => {
  const [activeSlide, setActiveSlide] = useState(0);

  // Home Consultation Form State
  const [formName, setFormName] = useState('');
  const [formPhone, setFormPhone] = useState('');
  const [formEmail, setFormEmail] = useState('');
  const [formProvince, setFormProvince] = useState('Hà Nội');
  const [formNote, setFormNote] = useState('');
  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSubmitted(true);
    setTimeout(() => {
      setFormSubmitted(false);
      setFormName('');
      setFormPhone('');
      setFormEmail('');
      setFormNote('');
    }, 4000);
  };

  return (
    <div className="flex flex-col w-full">
      {/* 1. HERO SLIDER & BANNER SHOWCASE */}
      <section className="relative w-full overflow-hidden bg-white border-b border-[#e2e8f0]">
        <div className="relative w-full min-h-[460px] lg:min-h-[540px] flex items-center bg-gradient-to-r from-[#e0f2fe] via-[#f8f9ff] to-white">
          {/* Ambient medical background elements */}
          <div className="absolute inset-0 opacity-15 pointer-events-none">
            <svg
              className="w-full h-full"
              preserveAspectRatio="none"
              viewBox="0 0 1000 500"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                className="text-[#cce5ff]"
                d="M0,200 Q250,150 500,220 T1000,180 L1000,500 L0,500 Z"
                fill="currentColor"
              ></path>
              <line
                className="text-[#006194]"
                stroke="currentColor"
                strokeDasharray="8,8"
                strokeWidth="2"
                x1="80"
                x2="350"
                y1="120"
                y2="120"
              ></line>
              <line
                className="text-[#006194]"
                stroke="currentColor"
                strokeWidth="2"
                x1="350"
                x2="420"
                y1="120"
                y2="280"
              ></line>
            </svg>
          </div>

          <div className="max-w-[1720px] mx-auto px-4 sm:px-8 xl:px-12 w-full py-10 lg:py-16 relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-center">
              {/* Left Column: Heading & CTAs */}
              <div className="lg:col-span-7 flex flex-col items-start space-y-4">
                <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-[#cce5ff] text-[#075985] text-[12px] font-bold tracking-wide">
                  <span className="material-symbols-outlined text-[16px]">verified</span>
                  <span>Đại diện phân phối chính thức tại Việt Nam</span>
                </div>

                <h1 className="text-[28px] sm:text-[36px] lg:text-[42px] xl:text-[46px] font-extrabold text-[#006194] tracking-tight leading-tight uppercase font-sans">
                  {COMPANY_INFO.name}
                </h1>

                <div className="relative pl-4 py-1">
                  <div className="absolute left-0 top-0 bottom-0 w-1.5 rounded-full bg-[#bb0112]"></div>
                  <p className="text-[18px] sm:text-[22px] text-[#bb0112] font-semibold italic">
                    {COMPANY_INFO.slogan}
                  </p>
                </div>

                <p className="text-[15px] sm:text-[16.5px] text-[#475569] max-w-3xl leading-relaxed">
                  {COMPANY_INFO.summary}
                </p>

                <div className="flex flex-wrap items-center gap-3 pt-2">
                  <button
                    onClick={() => {
                      const el = document.getElementById('featured-products');
                      el?.scrollIntoView({ behavior: 'smooth' });
                    }}
                    className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-[#006194] hover:bg-[#0369a1] text-white text-[14px] font-bold transition-all shadow hover:shadow-md cursor-pointer"
                  >
                    <span className="material-symbols-outlined text-[20px]">science</span>
                    <span>Khám phá sản phẩm</span>
                  </button>
                  <button
                    onClick={() => {
                      const el = document.getElementById('tu-van-form');
                      el?.scrollIntoView({ behavior: 'smooth' });
                    }}
                    className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-[#bb0112] hover:bg-[#b91c1c] text-white text-[14px] font-bold transition-all shadow hover:shadow-md cursor-pointer"
                  >
                    <span className="material-symbols-outlined text-[20px]">call</span>
                    <span>Liên hệ tư vấn</span>
                  </button>
                </div>

                {/* Bullet counters */}
                <div className="pt-4 flex flex-wrap items-center gap-6 sm:gap-8">
                  <div className="flex items-center gap-2">
                    <span className="text-[22px] sm:text-[26px] font-black text-[#006194]">
                      {COMPANY_INFO.yearsOfExperience}
                    </span>
                    <span className="text-[12px] font-medium text-[#475569] leading-tight">
                      Năm kinh nghiệm y tế
                    </span>
                  </div>
                  <div className="h-5 w-px bg-[#bfc7d2]"></div>
                  <div className="flex items-center gap-2">
                    <span className="text-[22px] sm:text-[26px] font-black text-[#006194]">
                      {COMPANY_INFO.genuineReagents}
                    </span>
                    <span className="text-[12px] font-medium text-[#475569] leading-tight">
                      Hóa chất chính hãng
                    </span>
                  </div>
                  <div className="h-5 w-px bg-[#bfc7d2]"></div>
                  <div className="flex items-center gap-2">
                    <span className="text-[22px] sm:text-[26px] font-black text-[#006194]">
                      {COMPANY_INFO.provincesCovered}
                    </span>
                    <span className="text-[12px] font-medium text-[#475569] leading-tight">
                      Tỉnh thành phục vụ
                    </span>
                  </div>
                </div>
              </div>

              {/* Right Column: Hero Visual Showcase */}
              <div className="lg:col-span-5 relative mt-6 lg:mt-0">
                <div className="relative w-full rounded-2xl overflow-hidden shadow-2xl bg-white p-3 border border-[#e2e8f0]">
                  <img
                    className="w-full h-80 lg:h-[420px] xl:h-[460px] object-cover rounded-xl"
                    alt="Phòng xét nghiệm y tế công nghệ cao Trí Việt Phát"
                    src={COMPANY_INFO.heroImage}
                  />

                  {/* ISO Certification Badge */}
                  <div className="absolute bottom-6 left-6 right-6 bg-white/95 backdrop-blur rounded-xl p-3.5 sm:p-4 shadow-lg flex items-center justify-between border border-[#e2e8f0]">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-lg bg-[#e0f2fe] text-[#006194] flex items-center justify-center shrink-0">
                        <span className="material-symbols-outlined text-[24px]">verified_user</span>
                      </div>
                      <div>
                        <h4 className="text-[14px] font-bold text-[#0f172a]">ISO 13485 & CE</h4>
                        <p className="text-[12px] text-[#475569]">
                          Đạt chuẩn chất lượng thiết bị y tế
                        </p>
                      </div>
                    </div>
                    <span className="material-symbols-outlined text-[#bb0112] text-[24px]">
                      check_circle
                    </span>
                  </div>
                </div>

                {/* Slide indicator dots */}
                <div className="flex justify-center items-center gap-2 mt-4">
                  {[0, 1, 2, 3].map((idx) => (
                    <button
                      key={idx}
                      onClick={() => setActiveSlide(idx)}
                      aria-label={`Slide ${idx + 1}`}
                      className={`h-2.5 rounded-full transition-all ${
                        activeSlide === idx
                          ? 'w-6 bg-[#bb0112]'
                          : 'w-2.5 bg-[#bfc7d2] hover:bg-[#707881]'
                      }`}
                    ></button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. CORE VALUES BLOCK (3 COLUMNS MEDICAL BLUE) */}
      <section className="w-full bg-[#006194] text-white py-8 shadow-inner">
        <div className="max-w-[1720px] mx-auto px-4 sm:px-8 xl:px-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {CORE_VALUES.map((val, idx) => (
              <div
                key={idx}
                className="flex items-start gap-4 p-5 rounded-xl bg-[#007bb9] shadow-md transition-all hover:bg-[#075985] h-full"
              >
                <div
                  className={`w-14 h-14 shrink-0 rounded-xl ${val.color} flex items-center justify-center text-white shadow-sm`}
                >
                  <span className="material-symbols-outlined text-[32px]">{val.icon}</span>
                </div>
                <div className="flex flex-col flex-1">
                  <h3 className="text-[18px] font-bold text-white mb-1.5">{val.title}</h3>
                  <p className="text-[13.5px] text-[#cce5ff] leading-relaxed">{val.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. ABOUT US (VỀ CHÚNG TÔI) */}
      <section className="w-full py-14 lg:py-20 bg-[#f8f9ff]">
        <div className="max-w-[1720px] mx-auto px-4 sm:px-8 xl:px-12">
          {/* Section Header with decorative red bar */}
          <div className="flex flex-col items-center mb-12 text-center">
            <h2 className="text-[26px] sm:text-[32px] font-extrabold text-[#0f172a] tracking-tight uppercase">
              VỀ CHÚNG TÔI
            </h2>
            <div className="w-16 h-1 bg-[#bb0112] rounded-full mt-2 mb-3"></div>
            <p className="text-[14px] sm:text-[15px] text-[#475569] max-w-xl">
              Đồng hành cùng sự phát triển của hệ thống khám chữa bệnh, bệnh viện và phòng khám hiện đại
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            {/* Visual Column */}
            <div className="lg:col-span-6">
              <div className="relative rounded-2xl overflow-hidden shadow-xl bg-white border border-[#e2e8f0]">
                <img
                  className="w-full h-[400px] object-cover"
                  alt="Kỹ sư y sinh Trí Việt Phát"
                  src={COMPANY_INFO.aboutImage}
                />
                <div className="absolute bottom-0 inset-x-0 p-6 bg-gradient-to-t from-[#0f172a] via-[#0f172a]/75 to-transparent text-white">
                  <span className="text-[12px] font-bold uppercase tracking-wider text-[#93ccff]">
                    Chứng nhận năng lực
                  </span>
                  <p className="text-[17px] font-bold mt-1">
                    Đội ngũ kỹ sư y sinh được đào tạo chính hãng từ nước ngoài
                  </p>
                </div>
              </div>
            </div>

            {/* Info Column */}
            <div className="lg:col-span-6 flex flex-col space-y-4">
              <div className="p-5 rounded-2xl bg-white shadow-sm border border-[#e2e8f0]">
                <p className="text-[15px] text-[#0f172a] leading-relaxed">
                  <strong className="text-[#006194] font-bold">
                    Công ty TNHH Thương Mại Dịch Vụ Trí Việt Phát
                  </strong>{' '}
                  được thành lập theo Quyết định số{' '}
                  <strong className="text-[#bb0112] font-bold">{COMPANY_INFO.licenseNo}</strong> của{' '}
                  {COMPANY_INFO.licensedBy}, tự hào là đối tác chiến lược của hàng trăm đơn vị y tế trên toàn quốc.
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-white shadow-sm border border-[#e2e8f0]">
                <h4 className="text-[16px] font-bold text-[#0f172a] mb-4 flex items-center gap-2">
                  <span className="material-symbols-outlined text-[#006194]">local_hospital</span>
                  <span>Các ngành nghề và lĩnh vực hoạt động chính:</span>
                </h4>
                <ul className="space-y-3 text-[13.5px] text-[#475569]">
                  {BUSINESS_AREAS.map((area, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <span className="material-symbols-outlined text-[#bb0112] text-[18px] shrink-0 mt-0.5">
                        check_circle
                      </span>
                      <span>
                        <strong className="text-[#0f172a]">{area.title}:</strong> {area.desc}
                      </span>
                    </li>
                  ))}
                </ul>

                <div className="pt-6">
                  <button
                    onClick={() => onNavigateTab('gioi-thieu')}
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-[#006194] hover:bg-[#0369a1] text-white text-[13.5px] font-bold tracking-wide transition-all shadow"
                  >
                    <span>TÌM HIỂU THÊM</span>
                    <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. FEATURED PRODUCTS (SẢN PHẨM NỔI BẬT) */}
      <section className="w-full py-14 lg:py-20 bg-[#f1f5f9]" id="featured-products">
        <div className="max-w-[1720px] mx-auto px-4 sm:px-8 xl:px-12">
          <div className="flex flex-col items-center mb-12 text-center">
            <span className="text-[12px] font-bold uppercase tracking-wider text-[#bb0112]">
              Uy Tín Tạo Giá Trị
            </span>
            <h2 className="text-[26px] sm:text-[32px] font-extrabold text-[#0f172a] tracking-tight uppercase mt-1">
              SẢN PHẨM NỔI BẬT
            </h2>
            <div className="w-16 h-1 bg-[#bb0112] rounded-full mt-2 mb-3"></div>
            <p className="text-[14px] sm:text-[15px] text-[#475569] max-w-2xl">
              Trí Việt Phát luôn tiên phong nghiên cứu, phát triển và cung cấp cho thị trường các loại thiết bị, sản phẩm với chất lượng tốt nhất, đáp ứng sự mong chờ và tin tưởng của khách hàng.
            </p>
          </div>

          {/* Products Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch">
            {PRODUCTS.map((prod) => (
              <div
                key={prod.id}
                className="flex flex-col h-full bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all border border-[#e2e8f0] group"
              >
                <div className="relative bg-[#f8fafc] p-6 flex items-center justify-center h-56 shrink-0 border-b border-[#f1f5f9]">
                  <span className="absolute top-3 left-3 bg-[#e0f2fe] text-[#075985] text-[11px] px-2.5 py-1 rounded-md font-bold z-10">
                    {prod.categoryLabel}
                  </span>
                  <img
                    className="max-h-44 object-contain group-hover:scale-105 transition-transform duration-300"
                    alt={prod.alt}
                    src={prod.image}
                  />
                </div>
                <div className="p-5 flex flex-col flex-1 justify-between">
                  <div className="flex flex-col">
                    <h3 className="text-[15px] font-bold text-[#0f172a] line-clamp-2 mb-2 group-hover:text-[#006194] transition-colors leading-snug h-[44px] flex items-start">
                      {prod.name}
                    </h3>
                    <p className="text-[12.5px] text-[#475569] line-clamp-2 mb-4 leading-relaxed h-[38px]">
                      {prod.shortDesc}
                    </p>
                  </div>
                  <button
                    onClick={() => onSelectProduct(prod)}
                    className="w-full inline-flex items-center justify-center gap-1 py-2.5 rounded-xl bg-[#bb0112] hover:bg-[#b91c1c] text-white text-[13px] font-bold tracking-wide transition-colors shadow cursor-pointer mt-auto"
                  >
                    <span>XEM CHI TIẾT</span>
                    <span className="material-symbols-outlined text-[16px]">chevron_right</span>
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-10 text-center">
            <button
              onClick={() => onNavigateTab('san-pham')}
              className="inline-flex items-center gap-2 px-7 py-3 rounded-xl bg-[#006194] hover:bg-[#0369a1] text-white text-[14px] font-bold transition-all shadow"
            >
              <span>XEM TẤT CẢ DANH MỤC THIẾT BỊ & HÓA CHẤT</span>
              <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
            </button>
          </div>
        </div>
      </section>

      {/* 5. PARTNERS & BRANDS (ĐỐI TÁC CỦA CHÚNG TÔI) */}
      <section className="w-full py-14 lg:py-20 bg-white border-b border-[#e2e8f0]">
        <div className="max-w-[1720px] mx-auto px-4 sm:px-8 xl:px-12">
          <div className="flex flex-col items-center mb-12 text-center">
            <h2 className="text-[26px] sm:text-[32px] font-extrabold text-[#0f172a] tracking-tight uppercase">
              ĐỐI TÁC CỦA CHÚNG TÔI
            </h2>
            <div className="w-16 h-1 bg-[#bb0112] rounded-full mt-2 mb-3"></div>
            <p className="text-[14px] sm:text-[15px] text-[#475569] max-w-2xl">
              Chúng tôi tự hào trở thành đối tác và là nhà cung cấp các thiết bị, sản phẩm hàng đầu trong lĩnh vực y tế từ các tập đoàn công nghệ y khoa quốc tế.
            </p>
          </div>

          {/* Partner Logo Badges */}
          <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-4 items-center">
            {PARTNERS.map((partner, idx) => (
              <div
                key={idx}
                className="p-4 rounded-xl bg-[#f8fafc] hover:bg-[#e5eeff] transition-all flex items-center justify-center h-20 shadow-sm border border-[#e2e8f0] text-center"
              >
                {partner.name === 'DIRUI' && (
                  <span className="text-[18px] font-black text-[#bb0112] tracking-wider">
                    DIRUI
                  </span>
                )}
                {partner.name === 'CHEMA' && (
                  <span className="text-[13px] font-bold text-[#475569] tracking-tight">
                    CHEMA <span className="font-normal text-[10px] block text-[#006194]">DIAGNOSTICA</span>
                  </span>
                )}
                {partner.name === 'Wondfo' && (
                  <span className="text-[19px] font-bold text-[#006194] tracking-tight">
                    Wondfo
                  </span>
                )}
                {partner.name === 'EKF' && (
                  <span className="text-[14px] font-black text-[#bb0112] tracking-widest bg-[#ffdad6] px-2 py-0.5 rounded">
                    EKF
                  </span>
                )}
                {partner.name === 'Drawray' && (
                  <span className="text-[16px] font-bold text-[#006194] tracking-wide">
                    Drawray
                  </span>
                )}
                {partner.name === 'AUDICOM' && (
                  <span className="text-[15px] font-bold text-[#075985] tracking-wide">
                    AUDICOM
                  </span>
                )}
                {partner.name === 'Convergent' && (
                  <span className="text-[12px] font-semibold text-[#0f172a] tracking-tighter">
                    Convergent <span className="text-[10px] block font-normal text-[#475569]">Technologies</span>
                  </span>
                )}
                {partner.name === 'dewei 德威' && (
                  <span className="text-[15px] font-bold text-[#006194] tracking-wide">
                    dewei 德威
                  </span>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. CONSULTATION FORM SECTION (ĐĂNG KÝ TƯ VẤN) */}
      <section className="w-full relative overflow-hidden" id="tu-van-form">
        <div
          className="relative w-full bg-cover bg-center py-14 lg:py-20"
          style={{ backgroundImage: `url('${COMPANY_INFO.formBgImage}')` }}
        >
          <div className="absolute inset-0 bg-[#213145]/85 backdrop-blur-[2px]"></div>
          <div className="max-w-[1720px] mx-auto px-4 sm:px-8 xl:px-12 relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
              {/* Left Callout */}
              <div className="lg:col-span-5 text-[#eaf1ff]">
                <span className="inline-block px-3 py-1 rounded-full bg-[#bb0112] text-white text-[12px] font-bold uppercase tracking-wider mb-3">
                  Tư Vấn Chuyên Sâu 24/7
                </span>
                <h2 className="text-[26px] sm:text-[32px] font-bold mb-4 leading-tight">
                  Đăng ký tư vấn & Báo giá thiết bị y tế
                </h2>
                <p className="text-[14px] sm:text-[15px] text-[#dae2fd] mb-6 leading-relaxed">
                  Để giúp quá trình xử lý được tốt hơn, mời anh/chị “ĐIỀN THÊM THÔNG TIN” vào biểu mẫu. Kỹ sư chuyên môn của Trí Việt Phát sẽ liên hệ phản hồi ngay trong 15 phút.
                </p>

                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-[#93ccff]">
                      <span className="material-symbols-outlined">headset_mic</span>
                    </div>
                    <div>
                      <div className="text-[11px] text-[#bec6e0]">Hotline hỗ trợ kỹ thuật:</div>
                      <div className="text-[18px] font-bold text-[#ffdad6]">
                        {COMPANY_INFO.hotline}
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-[#93ccff]">
                      <span className="material-symbols-outlined">mark_email_read</span>
                    </div>
                    <div>
                      <div className="text-[11px] text-[#bec6e0]">Email nhận báo giá:</div>
                      <div className="text-[15px] font-semibold text-[#eaf1ff]">
                        {COMPANY_INFO.email}
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Form Container */}
              <div className="lg:col-span-7">
                <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-2xl border border-white/20">
                  {formSubmitted ? (
                    <div className="text-center py-10 space-y-4 animate-in fade-in">
                      <div className="w-16 h-16 rounded-full bg-[#e0f2fe] text-[#006194] flex items-center justify-center mx-auto">
                        <span className="material-symbols-outlined text-[36px]">verified</span>
                      </div>
                      <h3 className="text-[20px] font-bold text-[#0f172a]">
                        Đã tiếp nhận yêu cầu thành công!
                      </h3>
                      <p className="text-[14px] text-[#475569] max-w-md mx-auto">
                        Kỹ sư phụ trách khu vực <strong>{formProvince}</strong> sẽ liên hệ ngay với anh/chị qua số điện thoại <strong>{formPhone}</strong> để gửi bảng báo giá kèm ưu đãi tốt nhất.
                      </p>
                    </div>
                  ) : (
                    <form onSubmit={handleFormSubmit} className="space-y-4">
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-[12px] font-bold text-[#0f172a] mb-1.5">
                            Họ tên/Đơn vị <span className="text-[#bb0112]">*</span>
                          </label>
                          <div className="relative">
                            <span className="material-symbols-outlined absolute left-3 top-2.5 text-[#475569] text-[20px]">
                              person
                            </span>
                            <input
                              className="w-full pl-10 pr-3 py-2.5 rounded-xl bg-[#f1f5f9] text-[13.5px] text-[#0f172a] focus:outline-none focus:bg-white focus:ring-2 focus:ring-[#006194]"
                              placeholder="Họ và tên hoặc tên đơn vị"
                              type="text"
                              required
                              value={formName}
                              onChange={(e) => setFormName(e.target.value)}
                            />
                          </div>
                        </div>
                        <div>
                          <label className="block text-[12px] font-bold text-[#0f172a] mb-1.5">
                            Số điện thoại <span className="text-[#bb0112]">*</span>
                          </label>
                          <div className="relative">
                            <span className="material-symbols-outlined absolute left-3 top-2.5 text-[#475569] text-[20px]">
                              call
                            </span>
                            <input
                              className="w-full pl-10 pr-3 py-2.5 rounded-xl bg-[#f1f5f9] text-[13.5px] text-[#0f172a] focus:outline-none focus:bg-white focus:ring-2 focus:ring-[#006194]"
                              placeholder="Số điện thoại liên hệ"
                              required
                              type="tel"
                              value={formPhone}
                              onChange={(e) => setFormPhone(e.target.value)}
                            />
                          </div>
                        </div>
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-[12px] font-bold text-[#0f172a] mb-1.5">
                            Địa chỉ email
                          </label>
                          <div className="relative">
                            <span className="material-symbols-outlined absolute left-3 top-2.5 text-[#475569] text-[20px]">
                              mail
                            </span>
                            <input
                              className="w-full pl-10 pr-3 py-2.5 rounded-xl bg-[#f1f5f9] text-[13.5px] text-[#0f172a] focus:outline-none focus:bg-white focus:ring-2 focus:ring-[#006194]"
                              placeholder="Email nhận báo giá (nếu có)"
                              type="email"
                              value={formEmail}
                              onChange={(e) => setFormEmail(e.target.value)}
                            />
                          </div>
                        </div>
                        <div>
                          <label className="block text-[12px] font-bold text-[#0f172a] mb-1.5">
                            Khu vực tỉnh/thành phố <span className="text-[#bb0112]">*</span>
                          </label>
                          <div className="relative">
                            <span className="material-symbols-outlined absolute left-3 top-2.5 text-[#475569] text-[20px]">
                              location_on
                            </span>
                            <select
                              className="w-full pl-10 pr-3 py-2.5 rounded-xl bg-[#f1f5f9] text-[13.5px] text-[#0f172a] focus:outline-none focus:bg-white focus:ring-2 focus:ring-[#006194]"
                              required
                              value={formProvince}
                              onChange={(e) => setFormProvince(e.target.value)}
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
                        <label className="block text-[12px] font-bold text-[#0f172a] mb-1.5">
                          Nội dung quan tâm / Thiết bị cần báo giá
                        </label>
                        <textarea
                          className="w-full p-3 rounded-xl bg-[#f1f5f9] text-[13.5px] text-[#0f172a] focus:outline-none focus:bg-white focus:ring-2 focus:ring-[#006194]"
                          placeholder="Ví dụ: Cần tư vấn lắp đặt máy xét nghiệm điện giải và bảng giá hóa chất huyết học Dewei..."
                          rows={3}
                          value={formNote}
                          onChange={(e) => setFormNote(e.target.value)}
                        ></textarea>
                      </div>

                      <div className="pt-2">
                        <button
                          className="w-full py-3.5 rounded-xl bg-[#bb0112] hover:bg-[#b91c1c] text-white text-[15px] font-bold tracking-wide uppercase transition-all shadow-md hover:shadow-lg flex items-center justify-center gap-2 cursor-pointer"
                          type="submit"
                        >
                          <span className="material-symbols-outlined text-[20px]">send</span>
                          <span>GỬI YÊU CẦU</span>
                        </button>
                      </div>
                    </form>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 7. NEWS & EVENTS SECTION (TIN TỨC SỰ KIỆN) */}
      <section className="w-full py-14 lg:py-20 bg-[#f8f9ff]">
        <div className="max-w-[1720px] mx-auto px-4 sm:px-8 xl:px-12">
          <div className="flex flex-col items-center mb-12 text-center">
            <span className="text-[12px] font-bold uppercase tracking-wider text-[#bb0112]">
              Thông Tin Báo Chí
            </span>
            <h2 className="text-[26px] sm:text-[32px] font-extrabold text-[#0f172a] tracking-tight uppercase mt-1">
              TIN TỨC SỰ KIỆN
            </h2>
            <div className="w-16 h-1 bg-[#bb0112] rounded-full mt-2 mb-3"></div>
            <p className="text-[14px] sm:text-[15px] text-[#475569] max-w-2xl">
              Trí Việt Phát luôn tiên phong nghiên cứu, phát triển và cung cấp cho thị trường các thiết bị, sản phẩm mới với chất lượng tốt nhất, đáp ứng sự mong chờ và tin tưởng của khách hàng.
            </p>
          </div>

          {/* Articles Grid (6 articles faithfully matching snapshot) */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 items-stretch">
            {ARTICLES.map((art) => (
              <div
                key={art.id}
                className="flex flex-col h-full bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-all border border-[#e2e8f0] group"
              >
                <div className="relative h-48 shrink-0 overflow-hidden bg-[#f8fafc]">
                  <img
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    alt={art.alt}
                    src={art.image}
                  />
                </div>
                <div className="p-5 flex flex-col flex-1 justify-between">
                  <div className="flex flex-col">
                    <div className="flex items-center gap-1.5 text-[#475569] text-[12px] font-medium mb-2">
                      <span className="material-symbols-outlined text-[16px] text-[#bb0112]">
                        calendar_today
                      </span>
                      <span>{art.date}</span>
                    </div>
                    <h3 className="text-[15px] font-bold text-[#0f172a] line-clamp-2 mb-2 group-hover:text-[#006194] transition-colors leading-snug h-[44px] flex items-start">
                      {art.title}
                    </h3>
                    <p className="text-[12.5px] text-[#475569] line-clamp-3 mb-4 leading-relaxed h-[58px]">
                      {art.excerpt}
                    </p>
                  </div>
                  <button
                    onClick={() => onSelectArticle(art)}
                    className="inline-flex items-center gap-1 text-[#006194] text-[13px] font-bold hover:text-[#0369a1] text-left cursor-pointer mt-auto pt-2"
                  >
                    <span>Đọc tiếp</span>
                    <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-10 text-center">
            <button
              onClick={() => onNavigateTab('tin-tuc')}
              className="inline-flex items-center gap-2 px-7 py-3 rounded-xl bg-white hover:bg-[#f1f5f9] text-[#006194] border border-[#006194] text-[14px] font-bold transition-all shadow-sm"
            >
              <span>XEM THÊM CÁC BÀI VIẾT KHÁC</span>
              <span className="material-symbols-outlined text-[18px]">menu_book</span>
            </button>
          </div>
        </div>
      </section>

      {/* 8. FAST BOTTOM CONTACT STRIP */}
      <section className="w-full bg-[#075985] text-white py-6">
        <div className="max-w-[1720px] mx-auto px-4 sm:px-8 xl:px-12 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3 text-center sm:text-left">
            <div className="w-12 h-12 rounded-xl bg-[#bb0112] text-white flex items-center justify-center shrink-0 shadow-md">
              <span className="material-symbols-outlined text-[28px]">support_agent</span>
            </div>
            <div>
              <h4 className="text-[16px] font-bold text-white">
                Cần tư vấn thiết bị xét nghiệm chuyên sâu?
              </h4>
              <p className="text-[13px] text-[#cce5ff]">
                Kỹ sư y sinh của chúng tôi sẵn sàng giải đáp kỹ thuật và gửi bảng báo giá chi tiết.
              </p>
            </div>
          </div>
          <div className="flex items-center gap-3 shrink-0">
            <a
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#bb0112] hover:bg-[#b91c1c] text-white text-[14px] font-bold transition-colors shadow"
              href={`tel:${COMPANY_INFO.hotline.replace(/\./g, '')}`}
            >
              <span className="material-symbols-outlined text-[18px]">call</span>
              <span>Gọi: {COMPANY_INFO.hotline}</span>
            </a>
            <button
              onClick={() => onOpenConsultation()}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-white hover:bg-[#f1f5f9] text-[#006194] text-[14px] font-bold transition-colors shadow cursor-pointer"
            >
              <span>Yêu cầu báo giá</span>
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};
