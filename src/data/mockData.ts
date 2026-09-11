import { Product, Article, Partner, DocumentItem, JobOpening } from '../types';

export const COMPANY_INFO = {
  name: 'CÔNG TY TNHH THIẾT BỊ Y TẾ TRÍ VIỆT PHÁT',
  shortName: 'TRÍ VIỆT PHÁT',
  subTitle: '',
  englishName: 'Medical Equipment Co., Ltd',
  licenseNo: '0105558779',
  licensedBy: 'Sở Kế hoạch và Đầu tư thành phố Hà Nội cấp',
  slogan: '“Sự tin tưởng của quý khách hàng là chìa khóa thành công của Công ty”',
  summary: 'Cung cấp giải pháp tổng thể cho phòng xét nghiệm y khoa: từ hệ thống phân tích tự động, máy xét nghiệm huyết học, sinh hóa, nước tiểu đến hóa chất chuẩn và dịch vụ hiệu chuẩn chuẩn mực quốc tế.',
  hotline: '0984.567.890',
  phone: '0912.345.678',
  email: 'infothietbiyte168@gmail.com',
  address: 'Số 5, nhà P16 TT Trương Định, P. Tương Mai, Q. Hoàng Mai, Hà Nội',
  website: 'www.thietbiytegroup.com',
  yearsOfExperience: '16+',
  genuineReagents: '100%',
  provincesCovered: '63',
  zaloUrl: 'https://zalo.me/0984567890',
  logoUrl: '/tri-viet-phat1.jpg',
  heroImage: 'https://lh3.googleusercontent.com/aida-public/AB6AXuB1NM5vdfpcge4IOvCHv0ZtXWueMsjA4dvK1lqrK_gw4m8LjeSfsqphPQGwQfoozRSlLtYdeIpBE1ICsbhIx0RwUUV1WzP7Ugr5ay1Y57Bg4TXrodqsdY0Ud-Wisbb9iT-VObiofZNG6msqtn-7Ti9lMKS8hRi8Th4a_Lk1GXod7BLVOnb_rPZ_f3N1wZs14LDhg5lAVTUQJ6vX20OcbmEdhgd7iNTiY8DIDN_8yrUTVHmL2Vt39Wh53A',
  aboutImage: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDF63WwJj_P_XstrFS-qvb_72lkEQsYYWJBVs8Nfedx2CZFhSWHTaCF2xSnevdwwl9Msji72ah9_fV1mfynBJ8tDTHgHVuxWqOlds-4u6xvi7HboTEkB8nB34AP8MRDCd8rjVMblvABIKwdlxLkjsK1O3cHdqcFGRCRkiIOqS61ceVDzxHMZ1qASS_-L-CiwOnTBloez4MGD_eUejZpmokFvbWPMS6xTOeyvKOPCbtqarekRQbeWjtNAg',
  formBgImage: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBfHyCzMk0MvoPL423GD2WtWUHx_FXHbyQMji2GlBvpnmr1XmEISyIgrHbX5T-WMgDeAG9r40lWl6_mVAZTe7NUTP9tOtfqXSZqx-IRtTK6oDktnFGyejL5dE0ODYfNu3IYuwwf2YTEKKBTnBRQLVU1_FhB4ip_O3qgRLm-vZWOvYhDlbOeNR_3Do2J8cwQ8KyxzUpAkpii8R_fiD1Zk0qoLe2urFOz-c-JuxPWBMz6QVGBHCQWEaDbjQ',
};

export const CORE_VALUES = [
  {
    title: 'Chất lượng',
    desc: 'Tạo uy tín về dịch vụ thiết bị y tế và vật tư tiêu hao cam kết tốt nhất.',
    icon: 'verified',
    color: 'bg-secondary',
  },
  {
    title: 'Uy tín',
    desc: 'Với 16 năm xây dựng và phát triển về thiết bị y tế và vật tư tiêu hao trên toàn quốc.',
    icon: 'workspace_premium',
    color: 'bg-[#001d31]',
  },
  {
    title: 'Hợp tác',
    desc: 'Trí Việt Phát số 1 về máy móc thiết bị y tế và vật tư tiêu hao ngành y.',
    icon: 'handshake',
    color: 'bg-secondary',
  },
];

export const BUSINESS_AREAS = [
  {
    title: 'Máy móc trang thiết bị y tế',
    desc: 'Hệ thống máy xét nghiệm sinh hóa, huyết học, miễn dịch, đông máu, nước tiểu tự động.',
  },
  {
    title: 'Hóa chất xét nghiệm',
    desc: 'Hóa chất phân tích dùng trong y tế đạt chuẩn kiểm định CE & FDA.',
  },
  {
    title: 'Thiết bị đo lường kiểm nghiệm',
    desc: 'Máy phân tích chuyên sâu cho nghiên cứu và chẩn đoán lâm sàng.',
  },
  {
    title: 'Hóa chất y tế & công nghiệp',
    desc: 'Các loại dung môi, chất tẩy rửa sinh học và vật tư phụ trợ phòng Lab.',
  },
  {
    title: 'Dịch vụ lắp đặt bảo trì',
    desc: 'Bảo dưỡng định kỳ, sửa chữa thiết bị y tế theo chuẩn nhà sản xuất.',
  },
  {
    title: 'Tư vấn thiết kế chuyên sâu',
    desc: 'Thiết kế lắp đặt phòng xét nghiệm đạt tiêu chuẩn an toàn sinh học cấp I, II.',
  },
];

export const PRODUCTS: Product[] = [
  {
    id: 'ac-9803',
    name: 'Máy xét nghiệm điện giải AC9803 gồm các chất NA, K, CL, CA/LI',
    category: 'may-xet-nghiem-dien-giai',
    categoryLabel: 'Điện giải',
    image: '/mayxetnghiem.png',
    alt: 'Máy xét nghiệm điện giải AC9803',
    shortDesc: 'Độ chính xác cao, tự động rửa buồng đo, điện cực tuổi thọ bền bỉ phù hợp phòng khám và bệnh viện.',
    fullDesc: 'Máy phân tích điện giải tự động AC9803 được thiết kế chuyên dụng cho các phòng xét nghiệm y khoa với khả năng phân tích nhanh và chính xác các chỉ số K, Na, Cl, Ca, pH. Thiết bị ứng dụng công nghệ điện cực chọn lọc ion (ISE) tiên tiến giúp kéo dài tuổi thọ điện cực và giảm thiểu chi phí bảo trì.',
    brand: 'Audicom',
    model: 'AC9803',
    manufacturer: 'Jiangsu Audicom Medical Technology Co. Ltd.',
    countryOfOrigin: 'Trung Quốc',
    origin: 'Chính hãng Jiangsu Audicom',
    benefits: [
      'Nhà cung cấp uy tín thiết bị y tế ở Việt Nam',
      'Thiết bị y tế đạt chất lượng giá cả hợp lý',
      'Thời gian bảo hành 12 tháng, dịch vụ chuyên nghiệp',
      'Hàng có sẵn kho có thể giao ngay',
      'Ưu đãi khi mua hàng với số lượng lớn'
    ],
    specs: [
      { label: 'Thông số đo', value: 'K, Na, Cl, Ca, pH' },
      { label: 'Thông số tính toán', value: 'nCa, TCa' },
      { label: 'Thời gian đo', value: '≤ 90s (thời gian lấy mẫu và xả)' },
      { label: 'Thể tích mẫu', value: '160µl' },
      { label: 'Nguyên lý đo', value: 'Điện cực chọn lọc ion (ISE)' },
      { label: 'Vị trí khay mẫu', value: '26 vị trí mẫu tự động' },
      { label: 'Kết nối máy quét', value: 'Hỗ trợ súng quét mã vạch Barcode trực tiếp' },
    ],
    detailedFeatures: [
      {
        title: 'Ống xét nghiệm ban đầu để lấy mẫu',
        desc: 'Máy xét nghiệm có thể sử dụng ống xét nghiệm ban đầu để lấy mẫu trực tiếp để đơn giản hoá quá trình lấy mẫu hoặc có thể chọn sử dụng cốc mẫu lấy mẫu để đáp ứng các quy định xét nghiệm khác nhau.'
      },
      {
        title: 'Giao diện cho máy quét mã vạch',
        desc: 'Người dùng có thể định cấu hình súng quét theo yêu cầu, lấy thông tin mẫu trực tiếp, giúp giảm khối lượng công việc nhập thủ công'
      },
      {
        title: 'Nhiều vị trí mẫu',
        desc: 'Vị trí mẫu được tăng lên 26 vị trí, sử dụng phạm vi rộng.'
      }
    ],
    features: [
      'Ống xét nghiệm ban đầu để lấy mẫu trực tiếp hoặc dùng cốc mẫu linh hoạt',
      'Giao diện định cấu hình súng quét mã vạch giảm thao tác nhập thủ công',
      'Khay nạp mẫu tăng lên 26 vị trí mở rộng phạm vi ứng dụng',
      'Tự động rửa buồng đo và xả mẫu với thời gian phân tích ≤ 90s'
    ],
    certifications: ['CE Mark', 'ISO 13485:2016', 'FDA Approved']
  },
  {
    id: 'dewei-reagents',
    name: 'Bảng hóa chất huyết học Dewei',
    category: 'hoa-chat-xet-nghiem',
    categoryLabel: 'Hóa chất huyết học',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDWUPAsMi-U_QNTXmFllU_rnh1eQaZWQqrZf_pze8DjEIiXqNUbzY08DGB8bLezfdVU0nhyq_g-JjkWAcSUtDj5fzJC0mormbVq-hywkNoWcisRYKBUImvp3K3dmUueudFABm5P_S3VFP4JVqQseY52zcPiU6trAow75iuf-qZ2jYNAarNzEghe8uviKmHxdRsnRrE72D809_T1JSU9JgrBXHirbFe-iue7Q_hVB07z_A3i4LLrnNtLdg',
    alt: 'Bảng hóa chất huyết học Dewei',
    shortDesc: 'Đồng bộ tương thích hoàn hảo với máy phân tích huyết học 3 thành phần và 5 thành phần bạch cầu.',
    fullDesc: 'Bộ hóa chất xét nghiệm huyết học Dewei chính hãng được sản xuất theo quy trình kiểm định nghiêm ngặt quốc tế, đảm bảo độ ổn định cao, tương thích với hầu hết các dòng máy xét nghiệm huyết học phổ biến hiện nay như Mindray, Sysmex, Dirui, URIT.',
    brand: 'dewei 德威',
    origin: 'Chính hãng Dewei Medical',
    specs: [
      { label: 'Dung dịch pha loãng (Diluent)', value: '20L/thùng, pH đệm sinh lý chuẩn' },
      { label: 'Dung dịch ly giải (Lyse)', value: '500ml/1000ml chai, phá vỡ hồng cầu chọn lọc' },
      { label: 'Dung dịch rửa (Cleaner/Rinse)', value: '5L/10L hoặc dung dịch tẩy rửa tập trung' },
      { label: 'Thời hạn bảo quản', value: '24 tháng kể từ ngày sản xuất' },
      { label: 'Nhiệt độ lưu trữ', value: '2°C - 30°C' },
    ],
    features: [
      'Công thức không chứa Cyanide an toàn với môi trường và người vận hành',
      'Độ lặp lại (CV) các thông số tế bào máu < 2.0%',
      'Hạn chế tối đa bám cặn buồng đếm và tắc kim hút',
      'Giá thành kinh tế, tối ưu chi phí vận hành phòng khám'
    ],
    certifications: ['ISO 13485', 'CE-IVD', 'Giấy phép lưu hành Bộ Y Tế']
  },
  {
    id: 'h-1600',
    name: 'Máy xét nghiệm nước tiểu tự động H-1600',
    category: 'may-xet-nghiem-nuoc-tieu',
    categoryLabel: 'Nước tiểu tự động',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCGfh725Zu2hF3LhzH90nNT6RW3HCmCNB38kfmwcaqRMr4E-b3RtJIe2YgAxBRjG6SPZJfNqQhuNPvp_VRwhqKe8FyMPaUMSHSDVN-y-AL6X5vFEOF3W37bQ3uKT64AxhNMIYtQ_WiUVvebj3RW5RitMYbq1kiHmd4D4D91skPUkZUpCjjXnLievrx4wV4TAao1KE5GC75obt72L6id99GdGu7dG16vyXR56TfJaaqerBLCxboaDdBeHA',
    alt: 'Máy xét nghiệm nước tiểu tự động H-1600',
    shortDesc: 'Công suất phân tích tốc độ cao, nhận diện que thử thông minh và kết nối LIS tiện lợi.',
    fullDesc: 'Máy phân tích nước tiểu tự động H-1600 mang lại giải pháp hoàn chỉnh cho phòng xét nghiệm nước tiểu từ quy mô vừa đến lớn. Máy có khả năng tự động nạp que thử, tự động nhận diện vị trí mẫu, và phân tích đa thông số sinh hóa nước tiểu với độ nhạy cao.',
    brand: 'DIRUI',
    origin: 'Dirui Industrial',
    specs: [
      { label: 'Công suất', value: '300 - 500 mẫu/giờ' },
      { label: 'Số thông số đo', value: '11, 12 hoặc 14 thông số sinh hóa nước tiểu' },
      { label: 'Thông số', value: 'Uro, Bil, Ket, Bld, Pro, Nit, Leu, Glu, SG, pH, VC, Microalbumin, Creatinine' },
      { label: 'Khay nạp mẫu tự động', value: 'Sức chứa lên tới 100 mẫu liên tục' },
      { label: 'Đầu đọc mã vạch', value: 'Tích hợp sẵn đọc Barcode ống mẫu' },
      { label: 'Bộ nhớ lưu', value: 'Hơn 20.000 dữ liệu bệnh nhân' },
    ],
    features: [
      'Công nghệ cảm biến quang học lạnh đa bước sóng kéo dài tuổi thọ bóng đèn',
      'Tự động bù trừ màu sắc nước tiểu tự nhiên tránh âm tính/dương tính giả',
      'Tích hợp máy in nhiệt tốc độ cao',
      'Dễ dàng kết nối đồng bộ với máy soi cặn nước tiểu tự động tạo hệ thống trạm kép'
    ],
    certifications: ['CE Mark', 'ISO 9001', 'ISO 13485']
  },
  {
    id: 'istar-500',
    name: 'Máy xét nghiệm miễn dịch hóa phát quang – iStar 500',
    category: 'may-xet-nghiem-mien-dich',
    categoryLabel: 'Miễn dịch CLIA',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBClnbgTc2a92rYNggxJsmLEN2q-GmcF8VsmAuIZNOXJt7uD5sjUOlCZMd8qBYoYuD1W27dF1_NeElY41GekWrmHEYzahjmzr3IiOBcIhku-_Gx6d9gQvAvRVxwICq-bXnnuTnePehlXn9vukTObVFk1gL1u_P6dA8qyeRTme6MxrgIEjCAA__LhEAGLYjXnqklGKYz2rmVbn1ZVuGf9clxMS7qjI5STE3Kl94IzbA__6stHyOcvYLpzA',
    alt: 'Máy xét nghiệm miễn dịch hóa phát quang iStar 500',
    shortDesc: 'Đo nồng độ hormone, dấu ấn ung thư, bệnh truyền nhiễm với độ nhạy phân tích vượt trội.',
    fullDesc: 'Hệ thống phân tích miễn dịch tự động iStar 500 áp dụng công nghệ hóa phát quang trực tiếp vi hạt từ tính (CLIA). Được trang bị danh mục xét nghiệm phong phú bao gồm: Tuyến giáp, Sinh sản, Dấu ấn tim mạch, Dấu ấn khối u ung thư, Bệnh nhiễm trùng và Viêm nhiễm.',
    brand: 'Wondfo',
    origin: 'Wondfo Biotech',
    specs: [
      { label: 'Công nghệ', value: 'Hóa phát quang hạt nano từ tính (Magnetic Particle CLIA)' },
      { label: 'Tốc độ xét nghiệm', value: '180 - 240 test/giờ' },
      { label: 'Thời gian có kết quả đầu tiên', value: 'Chỉ sau 14 phút' },
      { label: 'Vị trí hóa chất', value: '25 vị trí làm lạnh liên tục 24/7 (4°C - 8°C)' },
      { label: 'Vị trí mẫu', value: '60 vị trí mẫu hỗ trợ nạp liên tục và mẫu khẩn STAT' },
      { label: 'Hệ thống đo quang', value: 'Ống đếm photon (PMT) độ nhạy cực cao' },
    ],
    features: [
      'Công nghệ rửa từ tính 4 bước triệt tiêu hiệu ứng nền',
      'Đầu tip dùng một lần loại bỏ hoàn toàn nhiễm chéo mẫu',
      'Hóa chất dạng sẵn sàng sử dụng (ready-to-use) với mã QR định danh lô',
      'Tự động pha loãng mẫu nồng độ cao'
    ],
    certifications: ['CE-IVD', 'FDA Cleared', 'ISO 13485:2016']
  },
  {
    id: 'quo-test-hba1c',
    name: 'Máy xét nghiệm HbA1c Quo-Test',
    category: 'may-xet-nghiem-sinh-hoa',
    categoryLabel: 'Tiểu đường HbA1c',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDbVUgFi_CwF6HfDvHtmPNIaYDYmGGdMr_HEQwI_pXPha-ccNs1QRwyray0dlgCB3O6mVYCmKkSyEfX3NtpR3xJnjkLPkGujn6x-vLJBWu3bxV6JEjkeklGdw27BGQJR6DV5IScNjP7xsqltNmgK3MASsTXXEFEzqbXcjH8xW327MVhVnKhOzNRbROB0KSeEHyHpE13T9WxAB4fpW7KBRb2i2UUUFsUOBItvvXkUw1RwLbj0eN7shmdEg',
    alt: 'Máy xét nghiệm HbA1c Quo-Test',
    shortDesc: 'Kết quả trong vòng 4 phút chỉ từ một giọt máu mao mạch, chuẩn quốc tế IFCC/NGSP.',
    fullDesc: 'Máy đo HbA1c tại điểm chăm sóc (POCT) Quo-Test đến từ hãng EKF Diagnostics (Đức/Anh). Thiết bị nhỏ gọn, vận hành đơn giản, không bị ảnh hưởng bởi các biến thể hemoglobin bất thường (HbS, HbC, HbD, HbE), mang lại kết quả theo dõi bệnh nhân tiểu đường tin cậy chuẩn vàng.',
    brand: 'EKF',
    origin: 'EKF Diagnostics (Châu Âu)',
    specs: [
      { label: 'Phương pháp', value: 'Sắc ký ái lực Boronate Affinity' },
      { label: 'Thời gian phân tích', value: '4 phút / mẫu' },
      { label: 'Lượng mẫu', value: '4 µL máu mao mạch hoặc tĩnh mạch' },
      { label: 'Đơn vị đo', value: '% DCCT hoặc mmol/mol IFCC' },
      { label: 'Dải đo', value: '4% - 15% DCCT (20 - 140 mmol/mol)' },
      { label: 'Độ chính xác', value: 'CV < 3.0% tại HbA1c 7%' },
    ],
    features: [
      'Không bị can thiệp bởi biến thể huyết sắc tố (Hemoglobin variants)',
      'Thao tác cực nhanh: Lấy máu -> Đưa vào cartridge -> Đọc kết quả',
      'Bảo quản cartridge ở nhiệt độ phòng lên đến 90 ngày',
      'Được khuyến cáo bởi Hội Đái tháo đường Hoa Kỳ (ADA)'
    ],
    certifications: ['NGSP Certified', 'IFCC Standard', 'CE-IVD']
  },
  {
    id: 'ocg-102',
    name: 'Máy phân tích đông máu quang học OCG-102',
    category: 'may-phan-tich-dong-mau',
    categoryLabel: 'Đông máu',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCiemcAl9rCbN7_wh_EuhHqNfVR2kSGRWK4FFmQPjYkeLNIlEdJrJBzSLdVNaSmeV3UOA5qetRepPfOUwKf0IaPZGySiz6P-0g2WLTyIDgf1ce1AogfMofyxIFKGWz8IzeWCvancQymcEf1vxexMqio92WFb7a_L0RJHvx23fLz_ZbhsNaFx6ZhDYEg_t8oPyII5RkUNAAr2NMYQA4qMaSOV3eC6Wdu5ORFnAenuQlCbfUh1YXX-z81qw',
    alt: 'Máy phân tích đông máu quang học OCG-102',
    shortDesc: 'Đo PT, APTT, TT, FIB và D-Dimer chính xác, hỗ trợ chẩn đoán rối loạn đông cầm máu.',
    fullDesc: 'Máy đông máu bán tự động 2 kênh đo OCG-102 thích hợp cho các phòng xét nghiệm vừa và nhỏ, khoa phòng cấp cứu cần phân tích nhanh chức năng đông máu trước phẫu thuật hoặc giám sát liệu pháp kháng đông (Warfarin/Heparin).',
    brand: 'Drawray',
    origin: 'Chính hãng',
    specs: [
      { label: 'Số kênh đo', value: '2 kênh quang học độc lập' },
      { label: 'Vị trí ủ ấm', value: '16 vị trí ủ mẫu và hóa chất ở 37°C ± 0.5°C' },
      { label: 'Các xét nghiệm hỗ trợ', value: 'PT (INR), APTT, Fibrinogen (FIB), Thrombin Time (TT), D-Dimer' },
      { label: 'Hệ thống quang', value: 'LED bước sóng 470nm chống đục và tán xạ' },
      { label: 'Tự động kích hoạt', value: 'Tự tính thời gian đông máu ngay khi bơm hóa chất' },
    ],
    features: [
      'Pipette điện tử đồng bộ kích hoạt đo tự động',
      'Tiết kiệm hóa chất xét nghiệm: chỉ cần 25µL - 50µL mỗi test',
      'Màn hình hiển thị đường cong đông máu theo thời gian thực',
      'Tích hợp máy in nhiệt nội bộ'
    ],
    certifications: ['CE Mark', 'ISO 13485:2016']
  },
  {
    id: 'cs-1600',
    name: 'Máy xét nghiệm sinh hóa tự động CS-1600',
    category: 'may-xet-nghiem-sinh-hoa',
    categoryLabel: 'Sinh hóa tự động',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuD648j0NmDPFOaJr8wkC2wz6ncpAQPpZYccosvzKZwhs78RVJFiHqA8ygC_2NwJ1KREkQ_UQoUwlqetMy_90gWpbUlyZfVNcdytRwh4QVzE4thHaPHcWIo2krDP9-FJ3AjQiAofD_E5vhxFga3Rjo_tQMkwNyUDKWy-EU1RdAT8aLAcb-GQm4t72KhyyEnhCKSrMZOU02JNg_EImFYfsYsQaPkI0qWBvjZlkWYWywlc5P5DLBaNfJvZUw',
    alt: 'Máy xét nghiệm sinh hóa tự động CS-1600',
    shortDesc: 'Công suất cao 1600 test/giờ, hệ thống quang học trắc quang tiên tiến, tiết kiệm hóa chất.',
    fullDesc: 'Máy xét nghiệm sinh hóa công suất lớn CS-1600 là lựa chọn tối ưu cho các bệnh viện tuyến tỉnh, trung ương và trung tâm xét nghiệm tập trung. Tốc độ phân tích quang học lên đến 1.200 test/giờ (đạt 1.600 test/giờ khi kết hợp ISE), xử lý trơn tru lưu lượng hàng nghìn bệnh nhân mỗi ngày.',
    brand: 'DIRUI',
    origin: 'Dirui Industrial Co., Ltd',
    specs: [
      { label: 'Công suất', value: '1.200 test/giờ (quang) và 1.600 test/giờ (với ISE)' },
      { label: 'Nguyên lý đo', value: 'Đo độ hấp thụ quang học, trắc quang tỷ lệ, ISE' },
      { label: 'Vị trí hóa chất', value: '160 vị trí (hai đĩa R1, R2 làm lạnh 24/24)' },
      { label: 'Vị trí mẫu', value: 'Hệ thống nạp thanh ray rack 140 mẫu + 10 khẩn STAT' },
      { label: 'Cuvette phản ứng', value: 'Thủy tinh cứng vĩnh cửu, tự động rửa 8 bước' },
      { label: 'Lượng phản ứng tối thiểu', value: 'Chỉ 100 µL - tiết kiệm tối đa hóa chất' },
    ],
    features: [
      'Công nghệ khuấy trộn bằng sóng siêu âm không tiếp xúc, tránh lây nhiễm chéo',
      'Đầu dò chống va chạm 3 chiều thông minh và phát hiện bọt khí/cục máu đông',
      'Kiểm soát chất lượng nội kiểm QC biểu đồ Levey-Jennings tự động',
      'Bộ phận làm lạnh Peltier bảo đảm hóa chất luôn ở trạng thái tốt nhất'
    ],
    certifications: ['CE Mark', 'ISO 13485:2016', 'TUV Rheinland']
  },
  {
    id: 'he-thong-xu-ly-mau',
    name: 'Hệ thống xử lý mẫu tự động',
    category: 'he-thong-xu-ly-mau',
    categoryLabel: 'Tự động hóa Lab',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuA20a8Cd0cFT7IM62Pij2DSPzZJ1s-gA4pG4inrHYxcPDHhYaHry0jTDn3XNNUe-auKw9iM6BzWzyGN6QgNhaiWQBpF0BoMs9M1fwisacvkB6MlDYL6xcD-wtbrXS8gr8IIKVduRbjWNEM8lgWb3FKkv3MCE_pCEDYNObutJPopaiYOstkNM6XpS-hz2aayV4jaaYXia9Nxy_5EY2M2ZawGe3MsRPfH-dgrPuJw7UrdCeeAa127XosnSQ',
    alt: 'Hệ thống xử lý mẫu tự động',
    shortDesc: 'Tối ưu quy trình trước xét nghiệm: ly tâm, mở nắp, phân chia ống mẫu và lưu trữ mẫu tự động.',
    fullDesc: 'Giải pháp tự động hóa toàn diện cho phòng xét nghiệm (TLA - Total Laboratory Automation). Hệ thống kết nối liền mạch từ khâu nhận mẫu máu, kiểm tra thể tích mẫu, ly tâm tự động cân bằng, mở nắp chân không, phân chia mẫu con (aliquoting), dán nhãn tự động và chuyển trực tiếp tới các phân hệ máy sinh hóa, miễn dịch.',
    brand: 'Convergent Technologies',
    origin: 'Đức / Châu Âu',
    specs: [
      { label: 'Công suất nạp mẫu', value: 'Lên đến 1.000 ống mẫu/giờ' },
      { label: 'Module tích hợp', value: 'Ly tâm tự động, Mở nắp, Đóng nắp, Chia mẫu, Lưu kho lạnh' },
      { label: 'Khả năng lưu trữ', value: 'Tủ lạnh lưu mẫu tự động sức chứa 15.000 ống' },
      { label: 'Độ an toàn sinh học', value: 'Cấp II - Bảo vệ tuyệt đối người vận hành' },
      { label: 'Phần mềm quản lý', value: 'Middleware thông minh tự định tuyến ống mẫu ưu tiên' },
    ],
    features: [
      'Cắt giảm đến 80% thời gian thao tác thủ công của kỹ thuật viên',
      'Loại bỏ 99.9% sai sót do con người trong quá trình dán nhãn và phân mẫu',
      'Cảnh báo sớm mẫu tán huyết, đục lipid và vàng da trước khi xét nghiệm',
      'Định tuyến tự động các mẫu cấp cứu (STAT) vào luồng ưu tiên số 1'
    ],
    certifications: ['CE-IVD', 'ISO 15189 Ready', 'ISO 13485']
  }
];

export const PARTNERS: Partner[] = [
  { name: 'DIRUI', textColor: 'text-secondary', highlight: true },
  { name: 'CHEMA', subName: 'DIAGNOSTICA', textColor: 'text-[#0b1c30]' },
  { name: 'Wondfo', textColor: 'text-primary', highlight: true },
  { name: 'EKF', textColor: 'text-secondary', bgColor: 'bg-secondary-fixed' },
  { name: 'Drawray', textColor: 'text-primary' },
  { name: 'AUDICOM', textColor: 'text-medical-blue-deep' },
  { name: 'Convergent', subName: 'Technologies', textColor: 'text-[#0b1c30]' },
  { name: 'dewei 德威', textColor: 'text-primary' },
];

export const ARTICLES: Article[] = [
  {
    id: 'vat-tu-tieu-hao-y-te-2025',
    title: 'Vật tư tiêu hao y tế 2025: Bảng giá và Dịch vụ từ Trí Việt Phát',
    slug: 'vat-tu-tieu-hao-y-te-2025-bang-gia-va-dich-vu',
    date: '13/01/2025',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuC1iLgI3rum62LyvFc27EuuGdXBBy_BeR9_TkwpZMDvnhFdq_TS1b29E1SzkC5yJTjiRfBQx8n8xv8D1X9wrVcIvzJ7dZZrOO7npZooef6Ih84BGkPhj9RYaEWovlhd53fxZw4WKVFVPgE6IyW-GR6HJ177CzQawJhC3AYgWWRXi3hDxX5sDxouL4gfxUu9YR4MW35wnP095_feYWedemzdYIlFHXN8nhDF4VHUaouGBZMYGAkuUSmDVw',
    alt: 'Bảng giá vật tư tiêu hao y tế 2025',
    category: 'Thị trường y tế',
    readTime: '5 phút đọc',
    excerpt: 'Giới thiệu: Trong bối cảnh ngành y tế ngày càng phát triển, nhu cầu về vật tư tiêu hao y tế trở nên cường độ hơn bao giờ hết. Năm 2025 được dự báo sẽ có những bước ngoặt mới về tiêu chuẩn kỹ thuật...',
    content: [
      'Bước sang năm 2025, thị trường thiết bị và vật tư tiêu hao y tế tại Việt Nam chứng kiến sự chuyển dịch mạnh mẽ hướng tới các tiêu chuẩn chất lượng khắt khe hơn. Các bệnh viện công lập và hệ thống y tế tư nhân ngày càng chú trọng vào nguồn gốc xuất xứ minh bạch, độ tinh khiết hóa chất và chứng chỉ kiểm định quốc tế như CE và FDA.',
      'Công ty TNHH Thiết bị Y tế Trí Việt Phát với vị thế là nhà cung cấp uy tín 16 năm qua, chính thức công bố khung bảng giá ưu đãi mới cho các dòng vật tư tiêu hao phòng xét nghiệm: cuvette nhựa trắc quang, kim lấy mẫu chân không, ống nghiệm chống đông EDTA/Heparin, và các loại hóa chất tẩy rửa sinh học chuyên dụng.',
      'Đặc biệt, dịch vụ hậu mãi năm 2025 được nâng cấp toàn diện: cam kết giao hàng hỏa tốc trong 2-4 giờ tại khu vực nội thành Hà Nội và TP.HCM, hỗ trợ bảo quản lạnh tiêu chuẩn GDP từ kho đến tận phòng xét nghiệm của quý khách hàng.'
    ],
    keyPoints: [
      'Cập nhật chính sách giá sỉ ưu đãi năm 2025 cho bệnh viện và phòng khám',
      'Cam kết 100% hàng hóa có CO/CQ và giấy phép lưu hành của Bộ Y Tế',
      'Hỗ trợ kỹ sư test thử mẫu và hiệu chuẩn máy móc miễn phí'
    ]
  },
  {
    id: 'cach-chon-vat-tu-tieu-hao',
    title: 'Cách chọn vật tư tiêu hao cho phòng thí nghiệm y tế',
    slug: 'cach-chon-vat-tu-tieu-hao-cho-phong-thi-nghiem-y-te',
    date: '29/11/2024',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAhap8zGfKiJ5CAmjRZOuk0bD3up_QRLPH5vgLn2aihvrFVl3ZNvUV1irv7gfUl4NVy3OZVAcHjloAKUxauDliA4VCLeCnuqTGJfyDeOKnF1XOimlgioxcoKGC2aai0Ti5a40WX7KcRKZUUPMozsZw3Vgq8yK6EPejSUTJp1lxw32UuvE4Wp2bRW_K0tMeqUv2HFIfBHt38IGhtY14-E5vLv8X5-Oc9tckdKTOWdh5018akfjHtB9-vvA',
    alt: 'Cách chọn vật tư tiêu hao phòng xét nghiệm',
    category: 'Kiến thức xét nghiệm',
    readTime: '6 phút đọc',
    excerpt: 'Cách Chọn Vật Tư Tiêu Hao Cho Phòng Thí Nghiệm Y Tế: Hướng Dẫn Từ Trí Việt Phát. Trong lĩnh vực y tế, phòng thí nghiệm đóng vai trò quyết định trong việc bảo đảm kết quả chẩn đoán chính xác...',
    content: [
      'Trong thực hành xét nghiệm lâm sàng, kết quả phân tích chỉ có thể chính xác khi mẫu bệnh phẩm được xử lý bằng những vật tư tiêu hao đạt chuẩn. Một chiếc đầu tip pipette bị nhiễm hạt bụi vi mô hay một ống nghiệm chứa sai tỷ lệ chất chống đông có thể làm sai lệch hoàn toàn kết quả chẩn đoán của bác sĩ.',
      'Khi lựa chọn vật tư tiêu hao, nhà quản lý phòng Lab cần lưu ý 4 tiêu chí cốt lõi: 1) Tương thích sinh học tuyệt đối không gây tán huyết; 2) Dung sai kích thước cơ học chuẩn xác để không kẹt kim máy tự động; 3) Khả năng chịu hóa chất và ly tâm tốc độ cao; 4) Giấy chứng nhận vô trùng (Sterile) và không chứa enzyme phân giải RNA/DNA.',
      'Trí Việt Phát luôn hỗ trợ khách hàng kiểm tra độ tương thích của vật tư tiêu hao với hệ thống máy hiện hữu trước khi ký kết hợp đồng cung cấp lâu dài.'
    ],
    keyPoints: [
      'Tiêu chuẩn kích thước và độ trong suốt quang học của cuvette xét nghiệm',
      'Cách nhận biết ống lấy máu chân không đạt chuẩn ISO 6710',
      'Kinh nghiệm quản lý hạn sử dụng và lưu kho hóa chất phòng Lab'
    ]
  },
  {
    id: 'vat-tu-tieu-hao-y-te-la-gi',
    title: 'Vật tư tiêu hao y tế là gì',
    slug: 'vat-tu-tieu-hao-y-te-la-gi-dinh-nghia-va-phan-loai',
    date: '27/11/2024',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDepxvuGtVt4cJwusq-vtbZuWuB5jJ4YIssTWNehTvw_vwhgrHlzp194ZsV1cU0zzIBGbgvtxxb06vWJB1Wlz71SZu77pewcmg_oG5x2u9jwsJXfqmDpbIN4NGq2JmkWw87CRVn-roKa3FiqMKztL0pmdgin0udvTpEXOJWd1Nq0TxZVAf7XqdECerDnHHDQufZwt2jUsD-LemIJSrlvDcApjcAn_0BFiKnMZpakPoBr2hKKSPl27F0Vg',
    alt: 'Định nghĩa vật tư tiêu hao y tế',
    category: 'Thuật ngữ ngành y',
    readTime: '4 phút đọc',
    excerpt: 'Trong ngành y tế, vật tư tiêu hao y tế là một trong những yếu tố quan trọng không thể thiếu trong quy trình chăm sóc và điều trị bệnh nhân. Định nghĩa chi tiết và phân loại theo thông tư mới...',
    content: [
      'Vật tư tiêu hao y tế (Medical Consumables / Disposables) là những sản phẩm, dụng cụ, vật liệu y tế chỉ được sử dụng một lần hoặc có số lần tái sử dụng giới hạn theo khuyến cáo của nhà sản xuất nhằm ngăn ngừa nguy cơ nhiễm trùng chéo trong bệnh viện.',
      'Theo phân loại của Bộ Y Tế, vật tư tiêu hao bao gồm: vật tư phòng xét nghiệm (que thử, hóa chất, đầu tip, phiến kính), vật tư can thiệp ngoại khoa (chỉ khâu, bông gạc, găng tay vô trùng), và vật tư tiêm truyền, hồi sức (bơm kim tiêm, dây truyền dịch, catheter).',
      'Việc phân loại chính xác theo phân nhóm A, B, C, D là căn cứ pháp lý quan trọng để cơ sở y tế thực hiện thủ tục đấu thầu và bảo hiểm y tế thanh toán đúng quy định.'
    ],
    keyPoints: [
      'Định nghĩa pháp lý theo Nghị định 98/2021/NĐ-CP và Nghị định 07/2023/NĐ-CP',
      'Bảng danh mục các nhóm vật tư tiêu hao xét nghiệm trọng yếu',
      'Nguyên tắc kiểm soát nhiễm khuẩn và xử lý rác thải y tế sau sử dụng'
    ]
  },
  {
    id: 'mua-vat-tu-tieu-hao-o-dau-gia-tot',
    title: 'Mua vật tư tiêu hao y tế ở đâu giá tốt',
    slug: 'mua-vat-tu-tieu-hao-y-te-o-dau-gia-tot-chinh-hang',
    date: '27/11/2024',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAC8d--QjRpPFGyYzV8M3mEUC0TBlvE9Amyt3FiIaNAtfP6l3IYAGmG5X2NiqlHeSRo9bLFUs0610JrwMDP7UOaaPyYSnfQYqdAHw7OowLttAdb3v-juVx5vvblnGUOUuIKUZhxv_n5uB01QFxNLasyRPmaOX5GCQ6rt_EKwflL2TJNUfsQ0e-XD7kJyhgLQn0x7YSLs8dc9GtVA7VDHCYRzbmjFynzDLDxt7U5QmtP340MXzXpj_rsmA',
    alt: 'Địa chỉ mua vật tư tiêu hao y tế giá tốt',
    category: 'Tư vấn mua sắm',
    readTime: '4 phút đọc',
    excerpt: 'Mua Vật Tư Tiêu Hao Y Tế Ở Đâu Giá Tốt? Tìm Hiểu Về Trí Việt Phát. Trong ngành y tế, vật tư tiêu hao đóng vai trò vô cùng quan trọng, giúp giảm thiểu chi phí và tối ưu hoạt động phòng khám...',
    content: [
      'Một trong những bài toán đau đầu nhất của các chủ đầu tư phòng khám và giám đốc bệnh viện là làm sao cân bằng giữa chi phí vật tư và chất lượng xét nghiệm. Mua hàng giá rẻ trôi nổi dễ gặp nguy cơ hóa chất kém phẩm chất, hỏng điện cực máy hoặc kết quả sai lệch.',
      'Trí Việt Phát giải quyết triệt để bài toán này bằng cách nhập khẩu trực tiếp số lượng lớn từ các nhà máy sản xuất chính hãng, cắt giảm toàn bộ các khâu trung gian, từ đó mang đến mức giá cạnh tranh nhất thị trường kèm hóa đơn VAT đầy đủ.',
      'Bên cạnh đó, chính sách chiết khấu lũy tiến và công nợ linh hoạt cho các đơn vị ký hợp đồng định kỳ hàng năm giúp tối ưu dòng tiền vận hành cho phòng khám.'
    ],
    keyPoints: [
      'Trực tiếp phân phối không qua đại lý trung gian',
      'Hóa đơn chứng từ, kiểm định xuất xứ rõ ràng 100%',
      'Chính sách công nợ và đổi trả hàng linh hoạt trong 48 giờ'
    ]
  },
  {
    id: 'quy-dinh-chat-luong-vat-tu-tieu-hao',
    title: 'Quy định về chất lượng vật tư tiêu hao y tế tại Việt Nam',
    slug: 'quy-dinh-ve-chat-luong-vat-tu-tieu-hao-y-te-tai-viet-nam',
    date: '27/11/2024',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuA-70MzlqT9ogbEiYoeFBNvSZsYkvXNwJMJE-bYzZQYgeaKmawgsWtIIgyucOWpLNgnTXl-vjomrGw3rlu5a8XlVLonHd4da_1XSwzBdK8l5iMQ9skfLD7kyI3yC1oGXbdghS5_RtziBwIf_cJQcU3y04ZFXyO5F0sWRXUoZ-Gxs6ugucgTyDdr-ZWFJdWf0W0kLAz9CG1a9TnmcmRO7cGni7oRXUGQzHHUBGpZ1LFrRdJAMyS2PA922A',
    alt: 'Quy định chất lượng vật tư y tế',
    category: 'Pháp lý y tế',
    readTime: '5 phút đọc',
    excerpt: 'Ngày nay, sự phát triển của ngành y tế tại Việt Nam đòi hỏi phải bảo đảm chất lượng cao trong mọi loại vật tư tiêu hao y tế. Chất lượng y tế không chỉ bảo vệ an toàn cho bệnh nhân...',
    content: [
      'Bộ Y Tế Việt Nam áp dụng hệ thống tiêu chuẩn kỹ thuật quốc gia TCVN kết hợp tiêu chuẩn quốc tế ISO 13485 đối với tất cả các đơn vị sản xuất, nhập khẩu và phân phối trang thiết bị y tế. Mọi lô hàng vật tư tiêu hao nhập khẩu đều phải có số lưu hành hoặc giấy phép nhập khẩu hợp lệ.',
      'Ngoài ra, các hóa chất chẩn đoán in vitro (IVD) phải trải qua quy trình đánh giá lâm sàng hoặc thử nghiệm tại các viện đầu ngành trước khi được cấp phép thương mại.',
      'Trí Việt Phát luôn chủ động tuân thủ 100% hồ sơ công bố tiêu chuẩn áp dụng đối với trang thiết bị y tế loại A, B và đăng ký lưu hành đối với loại C, D.'
    ],
    keyPoints: [
      'Hệ thống quản lý chất lượng ISO 13485:2016 trong phân phối thiết bị y tế',
      'Hồ sơ kỹ thuật chung ASEAN (CSDT) trong quản lý thiết bị y tế',
      'Trách nhiệm bảo đảm chất lượng và giải trình kiểm tra của nhà phân phối'
    ]
  },
  {
    id: 'thu-tuc-nhap-khau-vat-tu-tieu-hao',
    title: 'Thủ tục nhập khẩu vật tư tiêu hao y tế như thế nào',
    slug: 'thu-tuc-nhap-khau-vat-tu-tieu-hao-y-te-nhu-the-nao',
    date: '27/11/2024',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuA1kbm0dlfyilRPXaxQCd5t9L5LUg0t41TGQG9IWIi2c10b01PdwmAwDJa3f7FZ5qY6TAfaP8vAvrfdiqCk6ziftjJ7kuadjmydE_uDfTMtLOlghlSh-MJPt_CLixNSgRtZzF-RUgQnsyUrxPmrZtN2FMyMc9xipVKrUxtcwh6llsyHr2nhuIPEaPJ75f0q9RRnJV3jxiKFOofl67ZPLffSkPW5zALSuLBBg-gOglW2TniEPIFu1JxsdQ',
    alt: 'Thủ tục nhập khẩu trang thiết bị y tế',
    category: 'Thương mại quốc tế',
    readTime: '6 phút đọc',
    excerpt: 'Thủ Tục Nhập Khẩu Vật Tư Tiêu Hao Y Tế: Hướng Dẫn Từ Trí Việt Phát. Hướng dẫn toàn diện về quy trình xin giấy phép lưu hành, phân loại thiết bị y tế loại A, B, C, D theo nghị định mới nhất...',
    content: [
      'Quy trình thông quan hàng hóa y tế đòi hỏi sự chuẩn bị kỹ lưỡng về mặt chứng từ hải quan: phân loại trang thiết bị y tế theo mức độ rủi ro, giấy chứng nhận lưu hành tự do CFS (Certificate of Free Sale), chứng nhận chất lượng ISO 13485 của nhà sản xuất.',
      'Với các mặt hàng hóa chất xét nghiệm cần bảo quản lạnh (2 - 8°C), thủ tục mở tờ khai hải quan và đưa hàng về bảo quản tại kho đạt chuẩn phải diễn ra nhanh chóng để tránh đứt gãy chuỗi cung ứng lạnh.',
      'Đội ngũ xuất nhập khẩu giàu kinh nghiệm của Trí Việt Phát đã xử lý hàng trăm lô hàng nhập khẩu từ Đức, Mỹ, Nhật Bản và Trung Quốc, đảm bảo tiến độ giao hàng đúng cam kết cho các dự án thầu y tế trên cả nước.'
    ],
    keyPoints: [
      'Phân loại mức độ rủi ro thiết bị y tế theo 4 nhóm A, B, C, D',
      'Các loại giấy phép: Giấy chứng nhận CFS, CO, CQ và số đăng ký lưu hành',
      'Quy trình bảo quản chuỗi lạnh (Cold Chain) đối với sinh phẩm xét nghiệm'
    ]
  }
];

export const DOCUMENTS: DocumentItem[] = [
  {
    id: 'doc-1',
    title: 'Catalog Tổng Hợp Thiết Bị Xét Nghiệm & Hóa Chất Trí Việt Phát 2025',
    code: 'CAT-TVP-2025-VN',
    type: 'catalog',
    category: 'Catalog sản phẩm',
    fileSize: '14.8 MB',
    updateDate: '15/01/2025',
    description: 'Bản in màu điện tử chi tiết toàn bộ máy xét nghiệm sinh hóa, huyết học, nước tiểu, miễn dịch và hóa chất chẩn đoán.'
  },
  {
    id: 'doc-2',
    title: 'Chứng nhận Hệ thống Quản lý Chất lượng ISO 13485:2016',
    code: 'ISO-13485-TVP',
    type: 'certificate',
    category: 'Chứng nhận chất lượng',
    fileSize: '2.4 MB',
    updateDate: '10/12/2024',
    description: 'Giấy chứng nhận đạt chuẩn quốc tế ISO 13485 cho lĩnh vực kinh doanh, phân phối và bảo trì trang thiết bị y tế.'
  },
  {
    id: 'doc-3',
    title: 'Hướng dẫn sử dụng & Bảo dưỡng định kỳ Máy xét nghiệm AC9803',
    code: 'UM-AC9803-VIE',
    type: 'manual',
    category: 'Hướng dẫn sử dụng',
    fileSize: '5.2 MB',
    updateDate: '05/11/2024',
    description: 'Tài liệu hướng dẫn vận hành, quy trình rửa điện cực tự động và khắc phục sự cố thường gặp cho kỹ thuật viên phòng xét nghiệm.'
  },
  {
    id: 'doc-4',
    title: 'Bảng dữ liệu an toàn vật liệu (MSDS) Hóa chất huyết học Dewei',
    code: 'MSDS-DEWEI-HEM',
    type: 'specification',
    category: 'Dữ liệu kỹ thuật & An toàn',
    fileSize: '3.1 MB',
    updateDate: '20/10/2024',
    description: 'Báo cáo độc tính, hướng dẫn xử lý tràn đổ và bảo quản an toàn sinh học theo chuẩn quốc tế GHS.'
  },
  {
    id: 'doc-5',
    title: 'Hồ sơ năng lực Công ty TNHH Thiết bị Y tế Trí Việt Phát',
    code: 'PROFILE-TVP-2025',
    type: 'catalog',
    category: 'Hồ sơ doanh nghiệp',
    fileSize: '8.6 MB',
    updateDate: '01/01/2025',
    description: 'Giới thiệu 16 năm kinh nghiệm, mạng lưới 63 tỉnh thành, năng lực nhân sự kỹ sư y sinh và danh sách dự án tiêu biểu.'
  }
];

export const JOB_OPENINGS: JobOpening[] = [
  {
    id: 'job-1',
    title: 'Kỹ sư Y sinh - Chuyên viên Lắp đặt & Bảo trì Thiết bị xét nghiệm',
    department: 'Phòng Kỹ thuật Dịch vụ',
    location: 'Hà Nội & các tỉnh lân cận',
    type: 'Toàn thời gian cố định',
    salary: '15.000.000 - 25.000.000 VNĐ + Thưởng dự án',
    deadline: '28/02/2025',
    experience: 'Từ 1 - 3 năm kinh nghiệm trong ngành thiết bị y tế',
    description: 'Chịu trách nhiệm bàn giao, lắp đặt, hướng dẫn vận hành và thực hiện bảo dưỡng định kỳ các hệ thống máy xét nghiệm sinh hóa, huyết học, nước tiểu cho bệnh viện và phòng khám đối tác.',
    requirements: [
      'Tốt nghiệp Đại học/Cao đẳng chuyên ngành Điện tử Y sinh, Thiết bị Y tế, Tự động hóa hoặc liên quan',
      'Hiểu biết cơ bản về cơ điện tử, mạch quang học và hệ thống thủy lực trong máy xét nghiệm',
      'Sẵn sàng đi công tác ngắn ngày khi có yêu cầu chuyển giao công nghệ',
      'Trung thực, cẩn trọng, có tinh thần trách nhiệm cao đối với thiết bị y tế'
    ],
    benefits: [
      'Được gửi đi đào tạo chuyên sâu chính hãng bởi các chuyên gia nước ngoài (DIRUI, Wondfo, EKF)',
      'Đóng BHXH, BHYT đầy đủ theo Luật Lao động, bảo hiểm sức khỏe cao cấp',
      'Thưởng tháng lương 13, thưởng hiệu quả kinh doanh dự án định kỳ',
      'Môi trường làm việc nhân văn, đồng nghiệp chuyên nghiệp, hỗ trợ tối đa'
    ]
  },
  {
    id: 'job-2',
    title: 'Chuyên viên Kinh doanh Thiết bị Y tế & Hóa chất phòng Lab',
    department: 'Phòng Kinh doanh Thiết bị',
    location: 'Hà Nội',
    type: 'Toàn thời gian',
    salary: '12.000.000 - 30.000.000 VNĐ (Lương cứng + Hoa hồng không giới hạn)',
    deadline: '15/03/2025',
    experience: 'Tối thiểu 1 năm sales B2B hoặc thiết bị khoa học kỹ thuật',
    description: 'Tìm kiếm, tiếp cận và phát triển quan hệ khách hàng là các bệnh viện công, bệnh viện tư nhân, phòng khám đa khoa và trung tâm xét nghiệm trên địa bàn được phân công.',
    requirements: [
      'Tốt nghiệp chuyên ngành Dược, Y tế công cộng, Quản trị kinh doanh hoặc Sinh học',
      'Kỹ năng giao tiếp, đàm phán hợp đồng thương mại xuất sắc',
      'Nhanh nhẹn, có khả năng làm việc độc lập và chịu áp lực doanh số'
    ],
    benefits: [
      'Hoa hồng doanh số hấp dẫn, thanh toán minh bạch theo từng kỳ bán lẻ/thầu',
      'Cung cấp data khách hàng tiềm năng và hỗ trợ kỹ thuật viên đi demo sản phẩm',
      'Cơ hội thăng tiến lên Trưởng nhóm / Giám đốc kinh doanh vùng'
    ]
  },
  {
    id: 'job-3',
    title: 'Chuyên viên Ứng dụng Lâm sàng (Application Specialist)',
    department: 'Phòng R&D và Hỗ trợ Khách hàng',
    location: 'Hà Nội',
    type: 'Toàn thời gian',
    salary: '14.000.000 - 22.000.000 VNĐ',
    deadline: '10/03/2025',
    experience: 'Từ 1 năm kinh nghiệm tại phòng xét nghiệm y khoa',
    description: 'Hỗ trợ kỹ thuật viên xét nghiệm tối ưu hóa thông số hóa chất, kiểm soát chất lượng nội kiểm QC/ngoại kiểm EQAS và xử lý các vấn đề chuyên môn xét nghiệm.',
    requirements: [
      'Tốt nghiệp Cử nhân Kỹ thuật Xét nghiệm Y học (Đại học Y Hà Nội, ĐH Dược...)',
      'Thành thạo quy trình xét nghiệm sinh hóa, miễn dịch và kiểm tra chất lượng phòng Lab',
      'Có khả năng đọc hiểu tài liệu kỹ thuật tiếng Anh'
    ],
    benefits: [
      'Được tiếp cận các công nghệ xét nghiệm tiên tiến nhất trên thế giới',
      'Thời gian làm việc linh hoạt, phụ cấp công tác và điện thoại đầy đủ',
      'Lộ trình phát triển chuyên gia ứng dụng sản phẩm y khoa hàng đầu'
    ]
  }
];
