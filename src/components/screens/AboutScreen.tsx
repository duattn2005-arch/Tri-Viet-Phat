import React from 'react';
import { COMPANY_INFO, CORE_VALUES, BUSINESS_AREAS, PARTNERS } from '../../data/mockData';

interface AboutScreenProps {
  onOpenConsultation: () => void;
}

export const AboutScreen: React.FC<AboutScreenProps> = ({ onOpenConsultation }) => {
  return (
    <div className="w-full bg-[#f8fafc] py-10 lg:py-16">
      <div className="max-w-[1720px] mx-auto px-4 sm:px-8 xl:px-12 space-y-12">
        {/* Page Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <span className="inline-block px-3.5 py-1 rounded-full bg-[#cce5ff] text-[#006194] text-[12px] font-bold uppercase tracking-wider">
            16 Năm Đồng Hành Y Tế Việt
          </span>
          <h1 className="text-[30px] sm:text-[38px] font-extrabold text-[#006194] tracking-tight uppercase">
            GIỚI THIỆU VỀ TRÍ VIỆT PHÁT
          </h1>
          <div className="w-20 h-1 bg-[#bb0112] rounded-full mx-auto"></div>
          <p className="text-[15px] text-[#475569] leading-relaxed">
            {COMPANY_INFO.slogan}
          </p>
        </div>

        {/* Story Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-6 rounded-2xl overflow-hidden shadow-xl bg-white border border-[#e2e8f0]">
            <img
              src={COMPANY_INFO.aboutImage}
              alt="Đội ngũ chuyên gia Trí Việt Phát"
              className="w-full h-[420px] object-cover"
            />
          </div>
          <div className="lg:col-span-6 space-y-5">
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-[#e2e8f0] space-y-3">
              <h2 className="text-[20px] font-bold text-[#0f172a]">
                Hành Trình Xây Dựng & Phát Triển
              </h2>
              <p className="text-[14px] text-[#475569] leading-relaxed">
                Được thành lập theo Giấy phép ĐKKD số{' '}
                <strong className="text-[#006194]">{COMPANY_INFO.licenseNo}</strong> do{' '}
                {COMPANY_INFO.licensedBy},{' '}
                <strong>Công ty TNHH Thương mại Dịch vụ Trí Việt Phát</strong> đã có hơn 16 năm liên tục phát triển trong ngành cung ứng trang thiết bị y tế và hóa chất xét nghiệm chẩn đoán in vitro (IVD).
              </p>
              <p className="text-[14px] text-[#475569] leading-relaxed">
                Với tôn chỉ “Chất lượng là nền tảng - Uy tín là tài sản”, chúng tôi là cầu nối tin cậy giữa các hãng thiết bị y tế hàng đầu thế giới (DIRUI, Wondfo, EKF, Dewei, Drawray, Audicom) và hệ thống các bệnh viện, phòng khám đa khoa, trung tâm xét nghiệm trên 63 tỉnh thành toàn quốc.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="bg-white p-5 rounded-xl shadow-sm border border-[#e2e8f0]">
                <span className="text-[28px] font-black text-[#006194] block">16+ Năm</span>
                <span className="text-[13px] font-medium text-[#475569]">
                  Kinh nghiệm phân phối và chuyển giao công nghệ
                </span>
              </div>
              <div className="bg-white p-5 rounded-xl shadow-sm border border-[#e2e8f0]">
                <span className="text-[28px] font-black text-[#bb0112] block">100%</span>
                <span className="text-[13px] font-medium text-[#475569]">
                  Hóa chất & máy móc chính hãng có CO/CQ, CFS
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Mission, Vision, Core Values */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch">
          <div className="bg-white p-6 rounded-2xl shadow-sm border border-[#e2e8f0] flex flex-col h-full space-y-3">
            <div className="w-12 h-12 rounded-xl bg-[#e0f2fe] text-[#006194] flex items-center justify-center shrink-0">
              <span className="material-symbols-outlined text-[28px]">visibility</span>
            </div>
            <h3 className="text-[18px] font-bold text-[#0f172a]">Tầm nhìn chiến lược</h3>
            <p className="text-[13.5px] text-[#475569] leading-relaxed flex-1">
              Trở thành thương hiệu hàng đầu Việt Nam về cung cấp giải pháp trọn gói phòng xét nghiệm y khoa, chuẩn hóa quy trình chẩn đoán lâm sàng theo tiêu chuẩn quốc tế ISO 15189.
            </p>
          </div>

          <div className="bg-white p-6 rounded-2xl shadow-sm border border-[#e2e8f0] flex flex-col h-full space-y-3">
            <div className="w-12 h-12 rounded-xl bg-[#fee2e2] text-[#bb0112] flex items-center justify-center shrink-0">
              <span className="material-symbols-outlined text-[28px]">flag</span>
            </div>
            <h3 className="text-[18px] font-bold text-[#0f172a]">Sứ mệnh cao cả</h3>
            <p className="text-[13.5px] text-[#475569] leading-relaxed flex-1">
              Cung cấp trang thiết bị chuẩn xác, an toàn, hỗ trợ tối đa các y bác sĩ đưa ra quyết định điều trị kịp thời, chính xác cho hàng triệu bệnh nhân mỗi năm.
            </p>
          </div>

          <div className="bg-white p-6 rounded-2xl shadow-sm border border-[#e2e8f0] flex flex-col h-full space-y-3">
            <div className="w-12 h-12 rounded-xl bg-[#f1f5f9] text-[#006194] flex items-center justify-center shrink-0">
              <span className="material-symbols-outlined text-[28px]">military_tech</span>
            </div>
            <h3 className="text-[18px] font-bold text-[#0f172a]">Giá trị cốt lõi</h3>
            <p className="text-[13.5px] text-[#475569] leading-relaxed flex-1">
              Chất lượng tối ưu - Uy tín tuyệt đối - Đồng hành dài lâu. Mọi hoạt động của công ty luôn đặt sự an toàn của người bệnh lên hàng đầu.
            </p>
          </div>
        </div>

        {/* Business Activities */}
        <div className="bg-white p-8 rounded-2xl shadow-sm border border-[#e2e8f0] space-y-6">
          <div className="border-b border-[#f1f5f9] pb-4">
            <h3 className="text-[22px] font-bold text-[#0f172a]">
              Lĩnh Vực Hoạt Động Chuyên Môn
            </h3>
            <p className="text-[13.5px] text-[#475569]">
              Danh mục các sản phẩm và dịch vụ thế mạnh của Trí Việt Phát
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 items-stretch">
            {BUSINESS_AREAS.map((area, idx) => (
              <div
                key={idx}
                className="p-5 rounded-xl bg-[#f8fafc] hover:bg-[#e0f2fe]/40 transition-colors border border-[#e2e8f0] h-full flex flex-col justify-start"
              >
                <div className="flex items-center gap-2 mb-2">
                  <span className="material-symbols-outlined text-[#006194] text-[20px] shrink-0">
                    check_circle
                  </span>
                  <h4 className="text-[15px] font-bold text-[#0f172a]">{area.title}</h4>
                </div>
                <p className="text-[13px] text-[#475569] leading-relaxed flex-1">{area.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Banner */}
        <div className="p-8 rounded-2xl bg-[#006194] text-white flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="space-y-1 text-center sm:text-left">
            <h3 className="text-[20px] font-bold">Hợp tác cùng Trí Việt Phát</h3>
            <p className="text-[14px] text-[#cce5ff]">
              Liên hệ ngay để nhận catalog chi tiết và chính sách ưu đãi cho cơ sở y tế
            </p>
          </div>
          <button
            onClick={onOpenConsultation}
            className="px-6 py-3 rounded-xl bg-[#bb0112] hover:bg-[#b91c1c] text-white font-bold text-[14px] transition-colors shadow-lg cursor-pointer shrink-0"
          >
            Đăng ký hợp tác / Nhận báo giá
          </button>
        </div>
      </div>
    </div>
  );
};
