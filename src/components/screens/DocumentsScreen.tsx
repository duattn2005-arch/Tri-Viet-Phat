import React, { useState } from 'react';
import { DOCUMENTS } from '../../data/mockData';
import { DocumentItem } from '../../types';

export const DocumentsScreen: React.FC = () => {
  const [downloadNotice, setDownloadNotice] = useState<string | null>(null);

  const handleDownload = (doc: DocumentItem) => {
    setDownloadNotice(`Đang tải tài liệu: ${doc.title} (${doc.fileSize})`);
    setTimeout(() => {
      setDownloadNotice(null);
    }, 3500);
  };

  return (
    <div className="w-full bg-[#f8fafc] py-10 lg:py-16">
      <div className="max-w-[1720px] mx-auto px-4 sm:px-8 xl:px-12 space-y-8">
        {/* Page Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <span className="inline-block px-3.5 py-1 rounded-full bg-[#cce5ff] text-[#006194] text-[12px] font-bold uppercase tracking-wider">
            Tài Nguyên Kỹ Thuật
          </span>
          <h1 className="text-[30px] sm:text-[38px] font-extrabold text-[#006194] tracking-tight uppercase">
            TÀI LIỆU KỸ THUẬT & CATALOGUE
          </h1>
          <div className="w-20 h-1 bg-[#bb0112] rounded-full mx-auto"></div>
          <p className="text-[15px] text-[#475569] leading-relaxed">
            Tra cứu và tải về các tài liệu hướng dẫn sử dụng, bảng thông số kỹ thuật, chứng nhận ISO và catalog sản phẩm mới nhất từ Trí Việt Phát.
          </p>
        </div>

        {downloadNotice && (
          <div className="p-4 rounded-xl bg-[#e0f2fe] border border-[#bae6fd] text-[#006194] flex items-center justify-between shadow-sm animate-in fade-in">
            <div className="flex items-center gap-3">
              <span className="material-symbols-outlined text-[24px]">download_done</span>
              <span className="text-[14px] font-semibold">{downloadNotice}</span>
            </div>
            <button
              onClick={() => setDownloadNotice(null)}
              className="text-[#006194] hover:text-[#0369a1] text-[13px] font-bold"
            >
              Đóng
            </button>
          </div>
        )}

        {/* Documents List */}
        <div className="space-y-4">
          {DOCUMENTS.map((doc) => (
            <div
              key={doc.id}
              className="bg-white p-6 rounded-2xl shadow-sm hover:shadow-md transition-shadow border border-[#e2e8f0] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-5"
            >
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-[#fee2e2] text-[#bb0112] flex items-center justify-center shrink-0">
                  <span className="material-symbols-outlined text-[28px]">
                    picture_as_pdf
                  </span>
                </div>
                <div className="space-y-1">
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="px-2 py-0.5 rounded bg-[#f1f5f9] text-[#475569] text-[11px] font-bold">
                      {doc.category}
                    </span>
                    <span className="text-[11px] text-[#475569]">Mã: {doc.code}</span>
                    <span className="text-[11px] text-[#475569]">Cập nhật: {doc.updateDate}</span>
                  </div>
                  <h3 className="text-[16px] font-bold text-[#0f172a]">{doc.title}</h3>
                  <p className="text-[13px] text-[#475569]">{doc.description}</p>
                </div>
              </div>

              <div className="flex items-center gap-3 self-end sm:self-center shrink-0">
                <span className="text-[12px] font-medium text-[#475569]">{doc.fileSize}</span>
                <button
                  onClick={() => handleDownload(doc)}
                  className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-[#006194] hover:bg-[#0369a1] text-white text-[13px] font-bold transition-colors shadow-sm cursor-pointer"
                >
                  <span className="material-symbols-outlined text-[18px]">download</span>
                  <span>Tải về</span>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
