import React, { useState } from 'react';
import { JOB_OPENINGS } from '../../data/mockData';
import { JobOpening } from '../../types';

export const CareersScreen: React.FC = () => {
  const [selectedJob, setSelectedJob] = useState<JobOpening | null>(null);
  const [appliedNotice, setAppliedNotice] = useState<string | null>(null);

  const [applicantName, setApplicantName] = useState('');
  const [applicantPhone, setApplicantPhone] = useState('');
  const [applicantEmail, setApplicantEmail] = useState('');
  const [applicantExperience, setApplicantExperience] = useState('');

  const handleApplySubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setAppliedNotice(
      `Đã nộp hồ sơ ứng tuyển vị trí "${selectedJob?.title}" thành công. Ban Nhân sự Trí Việt Phát sẽ liên hệ phỏng vấn qua số điện thoại ${applicantPhone}.`
    );
    setSelectedJob(null);
    setApplicantName('');
    setApplicantPhone('');
    setApplicantEmail('');
    setApplicantExperience('');
    setTimeout(() => {
      setAppliedNotice(null);
    }, 6000);
  };

  return (
    <div className="w-full bg-[#f8fafc] py-10 lg:py-16">
      <div className="max-w-[1720px] mx-auto px-4 sm:px-8 xl:px-12 space-y-8">
        {/* Page Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <span className="inline-block px-3.5 py-1 rounded-full bg-[#cce5ff] text-[#006194] text-[12px] font-bold uppercase tracking-wider">
            Gia Nhập Đội Ngũ Trí Việt Phát
          </span>
          <h1 className="text-[30px] sm:text-[38px] font-extrabold text-[#006194] tracking-tight uppercase">
            CƠ HỘI NGHỀ NGHIỆP & TUYỂN DỤNG
          </h1>
          <div className="w-20 h-1 bg-[#bb0112] rounded-full mx-auto"></div>
          <p className="text-[15px] text-[#475569] leading-relaxed">
            Môi trường làm việc y sinh chuyên nghiệp, thu nhập hấp dẫn và cơ hội được đào tạo chuyên sâu chính hãng bởi các chuyên gia quốc tế.
          </p>
        </div>

        {appliedNotice && (
          <div className="p-4 rounded-xl bg-[#e0f2fe] border border-[#bae6fd] text-[#006194] flex items-center justify-between shadow-sm animate-in fade-in">
            <div className="flex items-center gap-3">
              <span className="material-symbols-outlined text-[24px]">verified</span>
              <span className="text-[14px] font-semibold">{appliedNotice}</span>
            </div>
            <button
              onClick={() => setAppliedNotice(null)}
              className="text-[#006194] hover:text-[#0369a1] text-[13px] font-bold"
            >
              Đóng
            </button>
          </div>
        )}

        {/* Benefits Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch">
          <div className="bg-white p-6 rounded-2xl shadow-sm border border-[#e2e8f0] flex flex-col h-full space-y-2">
            <span className="material-symbols-outlined text-[#006194] text-[32px]">
              school
            </span>
            <h4 className="text-[16px] font-bold text-[#0f172a]">Đào tạo chính hãng</h4>
            <p className="text-[13px] text-[#475569] leading-relaxed flex-1">
              Cơ hội tu nghiệp tại nước ngoài và làm việc trực tiếp với kỹ sư của DIRUI, Wondfo, EKF.
            </p>
          </div>

          <div className="bg-white p-6 rounded-2xl shadow-sm border border-[#e2e8f0] flex flex-col h-full space-y-2">
            <span className="material-symbols-outlined text-[#bb0112] text-[32px]">
              payments
            </span>
            <h4 className="text-[16px] font-bold text-[#0f172a]">Chế độ đãi ngộ vượt trội</h4>
            <p className="text-[13px] text-[#475569] leading-relaxed flex-1">
              Lương thưởng cạnh tranh, bảo hiểm sức khỏe cao cấp, thưởng KPI doanh số dự án minh bạch.
            </p>
          </div>

          <div className="bg-white p-6 rounded-2xl shadow-sm border border-[#e2e8f0] flex flex-col h-full space-y-2">
            <span className="material-symbols-outlined text-[#006194] text-[32px]">
              groups
            </span>
            <h4 className="text-[16px] font-bold text-[#0f172a]">Môi trường gắn kết</h4>
            <p className="text-[13px] text-[#475569] leading-relaxed flex-1">
              Đồng nghiệp nhân văn, chia sẻ kinh nghiệm, lộ trình thăng tiến rõ ràng cho từng cá nhân.
            </p>
          </div>
        </div>

        {/* Openings List */}
        <div className="space-y-6">
          <h3 className="text-[20px] font-bold text-[#0f172a]">
            Vị trí tuyển dụng đang mở
          </h3>

          <div className="space-y-4">
            {JOB_OPENINGS.map((job) => (
              <div
                key={job.id}
                className="bg-white p-6 rounded-2xl shadow-sm hover:shadow-md transition-shadow border border-[#e2e8f0] space-y-4"
              >
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  <div>
                    <div className="flex flex-wrap items-center gap-2 mb-2">
                      <span className="px-2.5 py-0.5 rounded-md bg-[#e0f2fe] text-[#006194] text-[11px] font-bold">
                        {job.department}
                      </span>
                      <span className="px-2.5 py-0.5 rounded-md bg-[#f1f5f9] text-[#475569] text-[11px]">
                        {job.type}
                      </span>
                      <span className="text-[11px] text-[#bb0112] font-semibold">
                        Hạn nộp: {job.deadline}
                      </span>
                    </div>
                    <h3 className="text-[18px] font-bold text-[#0f172a]">{job.title}</h3>
                  </div>
                  <button
                    onClick={() => setSelectedJob(job)}
                    className="inline-flex items-center justify-center gap-1.5 px-5 py-2.5 rounded-xl bg-[#bb0112] hover:bg-[#b91c1c] text-white text-[13.5px] font-bold transition-colors shadow-sm cursor-pointer self-start sm:self-center"
                  >
                    <span>Ứng tuyển ngay</span>
                    <span className="material-symbols-outlined text-[18px]">send</span>
                  </button>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-[13px] text-[#475569] bg-[#f8fafc] p-3 rounded-xl">
                  <div>
                    <strong>Địa điểm:</strong> {job.location}
                  </div>
                  <div>
                    <strong>Mức lương:</strong> {job.salary}
                  </div>
                  <div>
                    <strong>Kinh nghiệm:</strong> {job.experience}
                  </div>
                  <div>
                    <strong>Phòng ban:</strong> {job.department}
                  </div>
                </div>

                <p className="text-[13.5px] text-[#475569] leading-relaxed">
                  {job.description}
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
                  <div>
                    <h5 className="text-[12.5px] font-bold text-[#0f172a] uppercase mb-1.5">
                      Yêu cầu công việc:
                    </h5>
                    <ul className="space-y-1 text-[12.5px] text-[#475569]">
                      {job.requirements.map((req, idx) => (
                        <li key={idx} className="flex items-start gap-1.5">
                          <span className="material-symbols-outlined text-[#006194] text-[15px] shrink-0 mt-0.5">
                            check
                          </span>
                          <span>{req}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h5 className="text-[12.5px] font-bold text-[#0f172a] uppercase mb-1.5">
                      Quyền lợi được hưởng:
                    </h5>
                    <ul className="space-y-1 text-[12.5px] text-[#475569]">
                      {job.benefits.map((ben, idx) => (
                        <li key={idx} className="flex items-start gap-1.5">
                          <span className="material-symbols-outlined text-[#bb0112] text-[15px] shrink-0 mt-0.5">
                            star
                          </span>
                          <span>{ben}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Application Modal */}
        {selectedJob && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs animate-in fade-in duration-200">
            <div className="bg-white rounded-2xl max-w-lg w-full p-6 sm:p-8 shadow-2xl relative border border-[#e2e8f0]">
              <button
                onClick={() => setSelectedJob(null)}
                className="absolute top-4 right-4 w-8 h-8 rounded-full bg-[#f1f5f9] text-[#475569] flex items-center justify-center"
              >
                <span className="material-symbols-outlined text-[18px]">close</span>
              </button>

              <div className="mb-4">
                <span className="text-[11px] font-bold uppercase tracking-wider text-[#bb0112]">
                  Nộp hồ sơ ứng tuyển
                </span>
                <h3 className="text-[18px] font-bold text-[#0f172a] mt-0.5">
                  {selectedJob.title}
                </h3>
              </div>

              <form onSubmit={handleApplySubmit} className="space-y-3.5">
                <div>
                  <label className="block text-[12px] font-semibold text-[#0f172a] mb-1">
                    Họ và tên <span className="text-[#bb0112]">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    value={applicantName}
                    onChange={(e) => setApplicantName(e.target.value)}
                    placeholder="Nguyễn Văn A"
                    className="w-full px-3 py-2 rounded-xl bg-[#f1f5f9] text-[13.5px] text-[#0f172a] focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#006194]"
                  />
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="block text-[12px] font-semibold text-[#0f172a] mb-1">
                      Số điện thoại <span className="text-[#bb0112]">*</span>
                    </label>
                    <input
                      type="tel"
                      required
                      value={applicantPhone}
                      onChange={(e) => setApplicantPhone(e.target.value)}
                      placeholder="0912..."
                      className="w-full px-3 py-2 rounded-xl bg-[#f1f5f9] text-[13.5px] text-[#0f172a] focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#006194]"
                    />
                  </div>
                  <div>
                    <label className="block text-[12px] font-semibold text-[#0f172a] mb-1">
                      Email liên hệ <span className="text-[#bb0112]">*</span>
                    </label>
                    <input
                      type="email"
                      required
                      value={applicantEmail}
                      onChange={(e) => setApplicantEmail(e.target.value)}
                      placeholder="example@gmail.com"
                      className="w-full px-3 py-2 rounded-xl bg-[#f1f5f9] text-[13.5px] text-[#0f172a] focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#006194]"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-[12px] font-semibold text-[#0f172a] mb-1">
                    Tóm tắt kinh nghiệm / Trường đào tạo
                  </label>
                  <textarea
                    rows={3}
                    value={applicantExperience}
                    onChange={(e) => setApplicantExperience(e.target.value)}
                    placeholder="Ví dụ: Tốt nghiệp Đại học Bách Khoa ngành Điện tử Y sinh, có 2 năm kinh nghiệm bảo trì máy sinh hóa..."
                    className="w-full p-3 rounded-xl bg-[#f1f5f9] text-[13.5px] text-[#0f172a] focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#006194]"
                  ></textarea>
                </div>

                <div className="pt-2">
                  <button
                    type="submit"
                    className="w-full py-3 rounded-xl bg-[#bb0112] hover:bg-[#b91c1c] text-white text-[14px] font-bold uppercase tracking-wider transition-colors shadow"
                  >
                    GỬI HỒ SƠ ỨNG TUYỂN
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
