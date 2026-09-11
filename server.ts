import express from 'express';
import path from 'path';
import dotenv from 'dotenv';
import { GoogleGenAI } from '@google/genai';
import { createServer as createViteServer } from 'vite';

dotenv.config();

const app = express();
const PORT = 3000;

app.use(express.json());

// Lazy-initialized Gemini AI client
let aiClient: GoogleGenAI | null = null;
function getGeminiClient(): GoogleGenAI | null {
  const apiKey = process.env.GEMINI_API_KEY;
  if (!apiKey) {
    return null;
  }
  if (!aiClient) {
    aiClient = new GoogleGenAI({
      apiKey,
      httpOptions: {
        headers: {
          'User-Agent': 'aistudio-build',
        },
      },
    });
  }
  return aiClient;
}

const SYSTEM_INSTRUCTION = `
Bạn là "Trợ lý AI Trí Việt Phát" - Chuyên gia tư vấn kỹ thuật y sinh và trang thiết bị xét nghiệm y khoa của CÔNG TY TNHH THIẾT BỊ Y TẾ TRÍ VIỆT PHÁT (16+ năm kinh nghiệm).

Thông tin công ty:
- Tên: CÔNG TY TNHH THIẾT BỊ Y TẾ TRÍ VIỆT PHÁT
- Giấy phép ĐKKD: 0105558779 do Sở KH&ĐT Hà Nội cấp
- Trụ sở: Số 5, nhà P16 TT Trương Định, P. Tương Mai, Q. Hoàng Mai, Hà Nội
- Hotline 24/7: 0904.698.699
- Điện thoại bàn: 0392.123.688
- Email: infothietbiyte168@gmail.com
- Website: www.thietbiytegroup.com

Các dòng sản phẩm & giải pháp chủ lực:
1. Máy xét nghiệm điện giải Audicom AC9803: Đo Na+, K+, Cl-, Ca++, Li, pH; công nghệ ISE 60 mẫu/giờ, tự động rửa buồng đo, điện cực bền bỉ.
2. Hóa chất xét nghiệm huyết học Dewei chính hãng: Dung dịch pha loãng (Diluent), ly giải (Lyse), rửa (Cleaner), tương thích máy huyết học 3 & 5 thành phần bạch cầu (Mindray, Sysmex, Dirui, URIT...).
3. Máy xét nghiệm nước tiểu tự động H-1600 (DIRUI): 300-500 test/giờ, 11-14 thông số, cảm biến quang học lạnh, tự bù màu nước tiểu.
4. Máy xét nghiệm miễn dịch hóa phát quang iStar 500 (Wondfo CLIA): 180-240 test/giờ, đo hormone, tuyến giáp, tim mạch, dấu ấn khối u ung thư, viêm nhiễm.
5. Máy xét nghiệm HbA1c Quo-Test (EKF - Châu Âu): Sắc ký ái lực Boronate, kết quả 4 phút từ 4µL máu mao mạch, chuẩn NGSP/IFCC.
6. Máy phân tích đông máu quang học OCG-102 (Drawray): 2 kênh độc lập, đo PT (INR), APTT, FIB, TT, D-Dimer.
7. Máy xét nghiệm sinh hóa tự động CS-1600 (DIRUI): 1200 - 1600 test/giờ, khay nạp rack 140 mẫu, cuvette thủy tinh vĩnh cửu.
8. Hệ thống xử lý mẫu tự động (Convergent Technologies): Tự động hóa phòng Lab (TLA), ly tâm, mở nắp, chia mẫu tự động.
9. Vật tư tiêu hao: Cuvette trắc quang, kim lấy máu chân không, ống nghiệm chống đông, que thử nước tiểu, hóa chất tẩy rửa chuyên dụng.
10. Dịch vụ: Lắp đặt, chuyển giao công nghệ, bảo dưỡng định kỳ, hiệu chuẩn máy đo, tư vấn thiết kế phòng Lab an toàn sinh học.

Hướng dẫn phản hồi:
- Trả lời bằng tiếng Việt lịch sự, nhiệt tình, chuyên nghiệp, súc tích và có căn cứ khoa học kỹ thuật y sinh.
- Định dạng câu trả lời rõ ràng, dùng gạch đầu dòng khi liệt kê tính năng hoặc thông số kỹ thuật.
- Khi khách hàng hỏi giá hoặc cần mua, hãy giải thích rõ ưu điểm và hướng dẫn để lại số điện thoại hoặc gọi Hotline: 0904.698.699 để nhận báo giá chiết khấu đại lý tốt nhất.
`;

function getDomainFallbackReply(message: string): string {
  const lower = message.toLowerCase();
  
  if (lower.includes('giá') || lower.includes('báo giá') || lower.includes('chi phí') || lower.includes('bao nhiêu')) {
    return 'Dạ để nhận bảng báo giá chi tiết và chính sách chiết khấu tốt nhất cho các dòng máy xét nghiệm hoặc hóa chất tiêu hao, Quý khách vui lòng để lại số điện thoại hoặc liên hệ trực tiếp **Hotline 24/7: 0904.698.699**. Đội ngũ chuyên viên kinh doanh Trí Việt Phát sẽ gửi báo giá kèm hồ sơ kỹ thuật trong vòng 15 phút!';
  }
  
  if (lower.includes('điện giải') || lower.includes('ac9803') || lower.includes('audicom')) {
    return 'Máy xét nghiệm điện giải tự động **Audicom AC9803** do Trí Việt Phát phân phối:\n- **Nguyên lý đo:** Điện cực chọn lọc ion (ISE) tiên tiến.\n- **Thông số đo:** Na⁺, K⁺, Cl⁻, Ca⁺⁺ / T.Ca, pH và Li⁺.\n- **Tốc độ đo:** ~60 mẫu/giờ, cho kết quả nhanh và chính xác.\n- **Tính năng nổi bật:** Tự động hiệu chuẩn, tự động rửa buồng đo và đường ống, điện cực tuổi thọ cao dễ thay thế độc lập.\n- **Ứng dụng:** Thích hợp cho mọi phòng khám và khoa xét nghiệm bệnh viện.\n\nQuý khách có thể gọi **0904.698.699** để nhận tài liệu catalogue hoặc xem máy trực tiếp ạ!';
  }
  
  if (lower.includes('huyết học') || lower.includes('dewei') || lower.includes('hóa chất') || lower.includes('pha loãng') || lower.includes('ly giải')) {
    return 'Bộ hóa chất xét nghiệm huyết học **Dewei** do Trí Việt Phát cung cấp bao gồm:\n- **Dung dịch pha loãng (Diluent)**, dung dịch ly giải hồng cầu (Lyse) và dung dịch rửa (Cleaner).\n- **Tương thích:** Các hệ thống máy xét nghiệm huyết học laser 3 thành phần và 5 thành phần bạch cầu (Mindray, Sysmex, Dirui, URIT, Nihon Kohden...).\n- **Tiêu chuẩn chất lượng:** Đạt chứng nhận quốc tế ISO 13485:2016, CE Mark và giấy phép lưu hành thiết bị y tế của Bộ Y Tế.\n- **Ưu điểm:** Nền hóa chất ổn định, không làm nghẹt buồng đếm aperture, giá thành cạnh tranh giúp tiết kiệm chi phí xét nghiệm.';
  }
  
  if (lower.includes('sinh hóa') || lower.includes('cs-1600') || lower.includes('cs1600') || lower.includes('cs 1600')) {
    return 'Hệ thống máy xét nghiệm sinh hóa tự động **CS-1600 (DIRUI)**:\n- **Công suất:** 1200 xét nghiệm quang học/giờ (lên tới 1600 test/giờ khi tích hợp ISE).\n- **Hệ thống nạp mẫu:** Khay nạp rack tự động liên tục chứa 140 mẫu bệnh phẩm.\n- **Cuvette phản ứng:** Cuvette thạch anh vĩnh cửu, tự động rửa 8 bước sấy khô thông minh.\n- **Khuấy phản ứng:** Công nghệ khuấy sóng siêu âm không tiếp xúc, triệt tiêu nhiễm chéo.\n- **Phù hợp:** Bệnh viện đa khoa tuyến tỉnh, trung tâm xét nghiệm quy mô vừa và lớn.';
  }
  
  if (lower.includes('nước tiểu') || lower.includes('h-1600') || lower.includes('h1600') || lower.includes('dirui')) {
    return 'Máy phân tích nước tiểu tự động **DIRUI H-1600**:\n- **Công suất:** 300 - 500 mẫu/giờ, tự động nạp mẫu liên tục lên đến 100 ống nghiệm.\n- **Thông số xét nghiệm:** 11 - 14 thông số sinh hóa nước tiểu (Urobilinogen, Bilirubin, Ketone, Blood, Protein, Nitrite, Leukocytes, Glucose, Specific Gravity, pH, Microalbumin, Creatinine...).\n- **Quang học:** Cảm biến quang học lạnh đa bước sóng độ nhạy cao, tự động bù màu mẫu nước tiểu bệnh nhân.';
  }
  
  if (lower.includes('miễn dịch') || lower.includes('istar') || lower.includes('wondfo')) {
    return 'Máy xét nghiệm miễn dịch hóa phát quang **iStar 500 (Wondfo CLIA)**:\n- **Công nghệ:** Hóa phát quang hạt từ tính trực tiếp (Direct Magnetic Chemiluminescence).\n- **Tốc độ:** 180 - 240 test/giờ, cho kết quả đầu tiên chỉ sau 12-15 phút.\n- **Danh mục xét nghiệm phong phú:** Tuyến giáp (FT3, FT4, TSH), dấu ấn tim mạch (Troponin I, NT-proBNP), dấu ấn khối u ung thư (AFP, CEA, PSA, CA125, CA19-9), hormone sinh sản, marker nhiễm trùng (PCT, IL-6).';
  }
  
  if (lower.includes('hba1c') || lower.includes('quo-test') || lower.includes('quotest') || lower.includes('tiểu đường')) {
    return 'Máy đo HbA1c tại chỗ **Quo-Test (EKF Diagnostics - Châu Âu)**:\n- **Nguyên lý:** Sắc ký ái lực Boronate độc quyền, không bị ảnh hưởng bởi các biến thể Hemoglobin.\n- **Lượng mẫu:** Chỉ cần 4µL máu mao mạch (đầu ngón tay) hoặc máu tĩnh mạch.\n- **Thời gian phân tích:** 4 phút có kết quả định lượng chính xác.\n- **Chứng nhận:** Chuẩn hóa theo NGSP và IFCC, đạt tiêu chuẩn CE-IVD Châu Âu.';
  }
  
  if (lower.includes('đông máu') || lower.includes('ocg-102') || lower.includes('drawray')) {
    return 'Máy phân tích đông máu bán tự động **OCG-102 (Drawray)**:\n- **Cấu hình:** 2 kênh đo độc lập, tích hợp vị trí ủ mẫu và vị trí ủ thuốc thử nhiệt độ ổn định 37°C.\n- **Các xét nghiệm thực hiện:** PT (INR), APTT, Fibrinogen (FIB), Thrombin Time (TT), D-Dimer.\n- **Ưu điểm:** Phương pháp đo quang học độ chính xác cao, thao tác đơn giản, máy nhỏ gọn phù hợp phòng khám.';
  }
  
  if (lower.includes('bảo hành') || lower.includes('bảo dưỡng') || lower.includes('sửa chữa') || lower.includes('kỹ thuật')) {
    return 'Chính sách dịch vụ kỹ thuật của **Trí Việt Phát**:\n- **Bảo hành:** 12 - 24 tháng theo tiêu chuẩn chính hãng của nhà sản xuất.\n- **Thời gian phản hồi:** Hỗ trợ kỹ thuật 24/7. Có mặt xử lý sự cố trong vòng 2-4 giờ tại khu vực nội thành Hà Nội và trong 24 giờ tại các tỉnh lân cận.\n- **Linh kiện:** Cam kết 100% linh kiện, board mạch và phụ tùng thay thế chính hãng, có sẵn tại kho.';
  }
  
  if (lower.includes('địa chỉ') || lower.includes('liên hệ') || lower.includes('hotline') || lower.includes('ở đâu') || lower.includes('công ty')) {
    return '**CÔNG TY TNHH THIẾT BỊ Y TẾ TRÍ VIỆT PHÁT** (16+ năm phát triển):\n- **Trụ sở:** Số 5, nhà P16 TT Trương Định, Phường Tương Mai, Quận Hoàng Mai, Hà Nội.\n- **Hotline 24/7:** **0904.698.699** (Zalo / Call)\n- **Điện thoại:** 0392.123.688\n- **Email:** infothietbiyte168@gmail.com\n- **Website:** www.thietbiytegroup.com';
  }
  
  return 'Xin kính chào Quý khách! **Trí Việt Phát** là đơn vị hơn 16 năm kinh nghiệm chuyên phân phối trang thiết bị y tế và hóa chất xét nghiệm đạt chuẩn **ISO 13485 & CE** (máy điện giải Audicom AC9803, hóa chất Dewei, máy sinh hóa DIRUI CS-1600, máy nước tiểu H-1600, máy miễn dịch iStar 500, máy đo HbA1c Quo-Test...).\n\nQuý khách đang quan tâm đến dòng thiết bị xét nghiệm nào hoặc cần nhận báo giá thiết bị cho phòng khám/bệnh viện ạ? Hoặc Quý khách có thể gọi trực tiếp **Hotline: 0904.698.699** để được kỹ sư y sinh tư vấn nhanh nhất!';
}

// Health check endpoint
app.get('/api/health', (req, res) => {
  res.json({ status: 'ok', timestamp: new Date().toISOString() });
});

// AI Chat Endpoint with multi-model failover & graceful fallback
app.post('/api/chat', async (req, res) => {
  try {
    const { message, history } = req.body;

    if (!message || typeof message !== 'string') {
      return res.status(400).json({ error: 'Nội dung tin nhắn không hợp lệ' });
    }

    const ai = getGeminiClient();

    if (!ai) {
      return res.json({ reply: getDomainFallbackReply(message) });
    }

    // Format previous context if provided
    let conversationContext = '';
    if (Array.isArray(history) && history.length > 0) {
      conversationContext = history
        .slice(-6)
        .map((h: { sender: string; text: string }) => `${h.sender === 'user' ? 'Khách hàng' : 'Trợ lý Trí Việt Phát'}: ${h.text}`)
        .join('\n');
    }

    const promptText = conversationContext
      ? `Lịch sử hội thoại:\n${conversationContext}\n\nKhách hàng hỏi: ${message}\n\nHãy trả lời khách hàng:`
      : message;

    // Ordered list of models to try. If one experiences 503 (high demand) or 429, fall back to the next
    const candidateModels = ['gemini-2.5-flash', 'gemini-3.8-flash', 'gemini-2.0-flash'];
    let reply: string | null = null;
    let lastError: unknown = null;

    for (const modelName of candidateModels) {
      try {
        const response = await ai.models.generateContent({
          model: modelName,
          contents: promptText,
          config: {
            systemInstruction: SYSTEM_INSTRUCTION,
            temperature: 0.7,
          },
        });

        if (response && response.text) {
          reply = response.text;
          break;
        }
      } catch (err: unknown) {
        lastError = err;
        const errString = String(err);
        console.warn(`Model ${modelName} gặp lỗi: ${errString.slice(0, 120)}... Đang thử model tiếp theo.`);
        // Continue loop to try fallback model
      }
    }

    if (reply) {
      return res.json({ reply });
    }

    // If all models encounter high demand (503) or rate limits, deliver the domain-specific medical reply
    console.warn('Tất cả models tạm thời bận hoặc gặp lỗi tải. Kích hoạt phản hồi y tế chuẩn xác.', lastError);
    return res.json({ reply: getDomainFallbackReply(message) });
  } catch (error) {
    console.error('Lỗi khi xử lý chat:', error);
    const { message } = req.body || {};
    return res.json({
      reply: getDomainFallbackReply(typeof message === 'string' ? message : ''),
    });
  }
});

// Vite Middleware for development & static serving for production
async function startServer() {
  if (process.env.NODE_ENV !== 'production') {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: 'spa',
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), 'dist');
    app.use(express.static(distPath));
    app.get('*', (req, res) => {
      res.sendFile(path.join(distPath, 'index.html'));
    });
  }

  app.listen(PORT, '0.0.0.0', () => {
    console.log(`Server Trí Việt Phát đang chạy trên http://0.0.0.0:${PORT}`);
  });
}

startServer();
