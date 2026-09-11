import React, { useState } from 'react';
import { ARTICLES } from '../../data/mockData';
import { Article } from '../../types';

interface NewsScreenProps {
  onSelectArticle: (article: Article) => void;
}

export const NewsScreen: React.FC<NewsScreenProps> = ({ onSelectArticle }) => {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const categories = ['all', 'Thị trường y tế', 'Kiến thức xét nghiệm', 'Thuật ngữ ngành y', 'Tư vấn mua sắm', 'Pháp lý y tế', 'Thương mại quốc tế'];

  const filteredArticles = selectedCategory === 'all'
    ? ARTICLES
    : ARTICLES.filter((a) => a.category === selectedCategory);

  return (
    <div className="w-full bg-[#f8fafc] py-10 lg:py-16">
      <div className="max-w-[1720px] mx-auto px-4 sm:px-8 xl:px-12 space-y-8">
        {/* Page Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <span className="inline-block px-3.5 py-1 rounded-full bg-[#cce5ff] text-[#006194] text-[12px] font-bold uppercase tracking-wider">
            Bản Tin Y Tế & Chuyên Ngành
          </span>
          <h1 className="text-[30px] sm:text-[38px] font-extrabold text-[#006194] tracking-tight uppercase">
            TIN TỨC & KIẾN THỨC Y HỌC
          </h1>
          <div className="w-20 h-1 bg-[#bb0112] rounded-full mx-auto"></div>
          <p className="text-[15px] text-[#475569] leading-relaxed">
            Cập nhật thường xuyên các thông tư y tế mới, quy định quản lý trang thiết bị y tế, kỹ thuật phòng xét nghiệm và bảng giá vật tư tiêu hao.
          </p>
        </div>

        {/* Category Filter Chips */}
        <div className="flex flex-wrap items-center justify-center gap-2">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-2 rounded-xl text-[13px] font-semibold transition-colors cursor-pointer ${
                selectedCategory === cat
                  ? 'bg-[#006194] text-white shadow-sm'
                  : 'bg-white text-[#475569] hover:bg-[#e0f2fe] hover:text-[#006194] border border-[#e2e8f0]'
              }`}
            >
              {cat === 'all' ? 'Tất cả chủ đề' : cat}
            </button>
          ))}
        </div>

        {/* Articles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 items-stretch">
          {filteredArticles.map((art) => (
            <div
              key={art.id}
              className="flex flex-col h-full bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all border border-[#e2e8f0] group"
            >
              <div className="relative h-52 shrink-0 overflow-hidden bg-[#f8fafc]">
                <span className="absolute top-3 left-3 bg-[#006194]/85 text-white text-[11px] px-2.5 py-1 rounded-md font-bold backdrop-blur z-10">
                  {art.category}
                </span>
                <img
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  alt={art.alt}
                  src={art.image}
                />
              </div>
              <div className="p-6 flex flex-col flex-1 justify-between">
                <div className="flex flex-col">
                  <div className="flex items-center gap-3 text-[#475569] text-[12px] font-medium mb-2.5">
                    <span className="flex items-center gap-1">
                      <span className="material-symbols-outlined text-[15px] text-[#bb0112]">
                        calendar_today
                      </span>
                      <span>{art.date}</span>
                    </span>
                    <span>•</span>
                    <span className="flex items-center gap-1">
                      <span className="material-symbols-outlined text-[15px] text-[#006194]">
                        schedule
                      </span>
                      <span>{art.readTime}</span>
                    </span>
                  </div>
                  <h3 className="text-[16px] font-bold text-[#0f172a] line-clamp-2 mb-2.5 group-hover:text-[#006194] transition-colors leading-snug h-[48px] flex items-start">
                    {art.title}
                  </h3>
                  <p className="text-[13px] text-[#475569] line-clamp-3 mb-4 leading-relaxed h-[60px]">
                    {art.excerpt}
                  </p>
                </div>
                <button
                  onClick={() => onSelectArticle(art)}
                  className="inline-flex items-center gap-1.5 text-[#006194] text-[13.5px] font-bold hover:text-[#0369a1] text-left cursor-pointer mt-auto pt-2"
                >
                  <span>Đọc toàn bộ bài viết</span>
                  <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
