import React, { useState, useMemo } from 'react';
import { PRODUCTS } from '../../data/mockData';
import { Product } from '../../types';

interface ProductsScreenProps {
  initialCategory?: string;
  onSelectProduct: (product: Product) => void;
  onOpenConsultation: (prefilledProduct?: string) => void;
}

const CATEGORIES = [
  { key: 'all', label: 'Tất cả thiết bị' },
  { key: 'hoa-chat-xet-nghiem', label: 'Hóa chất xét nghiệm' },
  { key: 'may-xet-nghiem-sinh-hoa', label: 'Sinh hóa' },
  { key: 'may-xet-nghiem-dien-giai', label: 'Điện giải' },
  { key: 'may-xet-nghiem-nuoc-tieu', label: 'Nước tiểu' },
  { key: 'may-xet-nghiem-mien-dich', label: 'Miễn dịch' },
  { key: 'may-phan-tich-dong-mau', label: 'Đông máu' },
  { key: 'he-thong-xu-ly-mau', label: 'Xử lý mẫu tự động' },
];

export const ProductsScreen: React.FC<ProductsScreenProps> = ({
  initialCategory = 'all',
  onSelectProduct,
  onOpenConsultation,
}) => {
  const [selectedCategory, setSelectedCategory] = useState(initialCategory);
  const [searchQuery, setSearchQuery] = useState('');

  const filteredProducts = useMemo(() => {
    return PRODUCTS.filter((p) => {
      const matchCategory =
        selectedCategory === 'all' || p.category === selectedCategory;
      const matchSearch =
        !searchQuery.trim() ||
        p.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        p.categoryLabel.toLowerCase().includes(searchQuery.toLowerCase()) ||
        p.brand.toLowerCase().includes(searchQuery.toLowerCase());
      return matchCategory && matchSearch;
    });
  }, [selectedCategory, searchQuery]);

  return (
    <div className="w-full bg-[#f8fafc] py-10 lg:py-16">
      <div className="max-w-[1720px] mx-auto px-4 sm:px-8 xl:px-12 space-y-8">
        {/* Page Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <span className="inline-block px-3.5 py-1 rounded-full bg-[#cce5ff] text-[#006194] text-[12px] font-bold uppercase tracking-wider">
            Danh Mục Thiết Bị Y Tế & Chẩn Đoán
          </span>
          <h1 className="text-[30px] sm:text-[38px] font-extrabold text-[#006194] tracking-tight uppercase">
            HỆ THỐNG MÁY XÉT NGHIỆM & HÓA CHẤT
          </h1>
          <div className="w-20 h-1 bg-[#bb0112] rounded-full mx-auto"></div>
          <p className="text-[15px] text-[#475569] leading-relaxed">
            Cam kết 100% sản phẩm chính hãng, đầy đủ CO/CQ, chế độ bảo hành 24/7 và dịch vụ bảo dưỡng định kỳ miễn phí.
          </p>
        </div>

        {/* Filter Bar & Search */}
        <div className="bg-white p-4 sm:p-5 rounded-2xl shadow-sm border border-[#e2e8f0] space-y-4">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            {/* Search Input */}
            <div className="relative w-full sm:w-80">
              <span className="material-symbols-outlined absolute left-3 top-2.5 text-[#475569] text-[20px]">
                search
              </span>
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Tìm theo tên máy, hãng..."
                className="w-full pl-10 pr-3 py-2 rounded-xl bg-[#f1f5f9] text-[13.5px] text-[#0f172a] focus:outline-none focus:bg-white focus:ring-2 focus:ring-[#006194]"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="absolute right-3 top-2 text-[#475569] hover:text-[#0f172a] text-[12px]"
                >
                  Xóa
                </button>
              )}
            </div>

            <div className="text-[13px] text-[#475569]">
              Hiển thị: <strong>{filteredProducts.length}</strong> thiết bị
            </div>
          </div>

          {/* Category Chips */}
          <div className="flex flex-wrap items-center gap-2 pt-2 border-t border-[#f1f5f9]">
            {CATEGORIES.map((cat) => (
              <button
                key={cat.key}
                onClick={() => setSelectedCategory(cat.key)}
                className={`px-3.5 py-1.5 rounded-xl text-[13px] font-semibold transition-colors cursor-pointer ${
                  selectedCategory === cat.key
                    ? 'bg-[#006194] text-white shadow-sm'
                    : 'bg-[#f1f5f9] text-[#475569] hover:bg-[#e0f2fe] hover:text-[#006194]'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* Products Grid */}
        {filteredProducts.length === 0 ? (
          <div className="bg-white rounded-2xl p-12 text-center border border-[#e2e8f0] space-y-4">
            <span className="material-symbols-outlined text-[48px] text-[#bfc7d2]">
              manage_search
            </span>
            <h3 className="text-[18px] font-bold text-[#0f172a]">
              Không tìm thấy sản phẩm phù hợp
            </h3>
            <p className="text-[14px] text-[#475569]">
              Vui lòng thử tìm kiếm bằng từ khóa khác hoặc chọn danh mục khác.
            </p>
            <button
              onClick={() => {
                setSelectedCategory('all');
                setSearchQuery('');
              }}
              className="px-5 py-2 rounded-xl bg-[#006194] text-white text-[13px] font-bold"
            >
              Xem tất cả sản phẩm
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch">
            {filteredProducts.map((prod) => (
              <div
                key={prod.id}
                className="flex flex-col h-full bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all border border-[#e2e8f0] group"
              >
                <div className="relative bg-[#f8fafc] p-6 flex items-center justify-center h-56 shrink-0 border-b border-[#f1f5f9]">
                  <span className="absolute top-3 left-3 bg-[#e0f2fe] text-[#075985] text-[11px] px-2.5 py-1 rounded-md font-bold z-10">
                    {prod.categoryLabel}
                  </span>
                  <span className="absolute top-3 right-3 bg-white text-[#475569] text-[10px] px-2 py-0.5 rounded shadow-xs font-semibold z-10">
                    {prod.brand}
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

                  <div className="space-y-2 pt-2 border-t border-[#f1f5f9] mt-auto">
                    <button
                      onClick={() => onSelectProduct(prod)}
                      className="w-full inline-flex items-center justify-center gap-1 py-2.5 rounded-xl bg-[#bb0112] hover:bg-[#b91c1c] text-white text-[13px] font-bold tracking-wide transition-colors shadow cursor-pointer"
                    >
                      <span>XEM CHI TIẾT</span>
                      <span className="material-symbols-outlined text-[16px]">chevron_right</span>
                    </button>
                    <button
                      onClick={() => onOpenConsultation(prod.name)}
                      className="w-full inline-flex items-center justify-center gap-1 py-2 rounded-xl bg-[#e0f2fe] hover:bg-[#bae6fd] text-[#006194] text-[12.5px] font-semibold transition-colors cursor-pointer"
                    >
                      <span className="material-symbols-outlined text-[15px]">request_quote</span>
                      <span>Nhận báo giá</span>
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};
