# Nhật ký thay đổi

Tất cả những thay đổi đáng chú ý đối với dự án này sẽ được ghi lại trong tệp này.

## [1.2.0]

### Đã thêm
- Mục "Cập nhật tự động" trong bảng cài đặt với ba chế độ:
  - **Kiểm tra và mở bản cập nhật** — định kỳ kiểm tra nguồn cập nhật đáng tin cậy trong nền và mở trang cập nhật khi tìm thấy phiên bản mới hơn
  - **Thông báo cho tôi về các bản cập nhật** — định kỳ kiểm tra và chỉ hiển thị thông báo
  - **Tắt kiểm tra cập nhật** — script không bao giờ tự kiểm tra
- Nút thủ công "Kiểm tra cập nhật", hiển thị bên cạnh phiên bản script hiện tại (được đọc từ siêu dữ liệu của chính userscript)
- Văn bản giải thích làm rõ rằng tính năng tự động cập nhật gốc của Tampermonkey/Violentmonkey là một cơ chế riêng biệt không do cài đặt này kiểm soát
- Hệ thống hiệu ứng âm thanh (SFX) được xây dựng trên Web Audio API gốc, không có tệp âm thanh hoặc thư viện bên ngoài:
  - Công tắc bật/tắt toàn cục và điều khiển âm lượng chính
  - 13 danh mục âm thanh có thể bật/tắt độc lập (nhấp vào nút, dịch thuật, sao chép, thử lại, bảng điều khiển, thẻ, cài đặt, công tắc, bộ nhớ tạm, lịch sử, nhập/xuất, chế độ, dịch tự động)
  - Âm thanh ngắn riêng biệt cho các hành động khác nhau và nút "Kiểm tra âm thanh"
  - Hoàn toàn độc lập với bất kỳ tính năng chuyển văn bản thành giọng nói (TTS) nào
  - Thời gian hồi (cooldowns) cho mỗi sự kiện để tránh tình trạng spam âm thanh, kể cả trong quá trình dịch hàng loạt/tự động
- Biểu tượng cờ SVG thực tế, độc lập cho từng ngôn ngữ được hỗ trợ trong bộ chọn Ngôn ngữ giao diện và Ngôn ngữ dịch, thay thế cho cờ emoji Unicode. Các biểu tượng được nhúng trực tiếp vào script; không có gì được tải qua mạng để hiển thị chúng
- Âm thanh nhấp chuột riêng biệt cho nút "Nhập" và nút "Kiểm tra" của DeepL

### Đã thay đổi
- So sánh phiên bản để kiểm tra cập nhật sử dụng so sánh phiên bản ngữ nghĩa dạng số phù hợp (không phải so sánh chuỗi)

### Bảo mật
- Khóa API DeepL bị loại khỏi các tệp cài đặt được xuất
- Việc nhập tệp cài đặt không còn ghi đè lên các khóa API được lưu trữ cục bộ; khóa chỉ có thể được thay đổi thông qua trường Khóa API DeepL chuyên dụng
- Cấu hình được nhập được xác thực từng trường trước khi được áp dụng (mã ngôn ngữ, chủ đề, công cụ, phạm vi số, cài đặt âm thanh, chế độ cập nhật); các giá trị không hợp lệ hoặc không được công nhận sẽ bị bỏ qua và thay thế bằng các giá trị mặc định hiện có/an toàn thay vì được chấp nhận
- Nguồn cập nhật đáng tin cậy là một giá trị cố định trong script và không thể cấu hình thông qua các cài đặt được nhập
- Kiểm tra cập nhật chỉ đọc số phiên bản từ văn bản script được tải về; không có mã được tải xuống nào được thực thi tại bất kỳ thời điểm nào

### Đã sửa
- Bố cục phản hồi (responsive) cho mục Cập nhật tự động, giúp các nhãn tự động hóa dài hơn xuống dòng thay vì tràn ra ngoài bảng cài đặt

## [1.0.10]

### Đã thêm
- 5 ngôn ngữ UI mới: Tiếng Ý, Tiếng Bồ Đào Nha, Tiếng Hàn, Tiếng Việt, Tiếng Ả Rập — giao diện hiện hỗ trợ tổng cộng 15 ngôn ngữ, với mọi nhãn, nút, chú thích và mục (bao gồm DeepL và Giới hạn yêu cầu) được dịch hoàn toàn
- Ngôn ngữ giao diện hiện được tự động phát hiện từ ngôn ngữ trình duyệt/hệ thống trong lần cài đặt đầu tiên

### Đã thay đổi
- Siêu dữ liệu về tác giả và kho lưu trữ được cập nhật để phản ánh người duy trì hiện tại
- Các mục Khóa API DeepL và Giới hạn yêu cầu hiện được bản địa hóa hoàn toàn bằng tất cả các ngôn ngữ UI được hỗ trợ (trước đây hiển thị bằng tiếng Anh bất kể ngôn ngữ được chọn)
- Thanh trượt độ trễ yêu cầu hiện hiển thị đơn vị thời gian bằng ngôn ngữ chính xác (ví dụ: `ms`, `мс`, `毫秒`)
- Bộ chọn màu tùy chỉnh hiện cập nhật chính xác các giá trị của chúng khi chuyển đổi chủ đề

### Đã xóa
- Chủ đề sáng (Chủ đề Tối, Cyberpunk và Dracula vẫn khả dụng)
- Bộ chọn màu văn bản (nó chỉ ảnh hưởng đến một phần văn bản UI, gây hiểu lầm)
- Chuyển văn bản thành giọng nói (TTS) — đã xóa vì hoạt động không chính xác

### Đã sửa
- Liên kết trợ giúp DeepL trước đây trỏ đến `api-free.deepl.com`; hiện trỏ chính xác đến `deepl.com/pro-api`
- Văn bản nút "Lưu khóa DeepL" bị cắt bớt ở 6 ngôn ngữ UI (Tiếng Nga, Tiếng Ukraine, Tiếng Đức, Tiếng Pháp, Tiếng Tây Ban Nha, Tiếng Thổ Nhĩ Kỳ); các nhãn đã được rút ngắn để phù hợp với mọi kích thước màn hình
- Chuyển đổi chủ đề không còn để lại các màu tùy chỉnh cũ đè lên chủ đề mới

[Xem bản phát hành](https://github.com/ebayybe/reddit-translator/releases#release-v1.0.10)

## [1.0.9]

Đóng góp bởi [Dylan-ZQL](https://github.com/Dylan-ZQL). Đã xác minh bằng cách so sánh các tệp nguồn v1.0.0 và v1.0.9.

### Đã thêm
- Công cụ dịch DeepL, bên cạnh các công cụ Google và MyMemory hiện có
  - Hỗ trợ nhiều khóa API DeepL với khả năng tự động xoay vòng và dự phòng nếu một khóa bị lỗi
  - Tự động phát hiện các điểm cuối API Free vs. Pro
  - Văn bản dài được chia thành các đoạn có kích thước bằng yêu cầu trước khi dịch
  - Giới hạn yêu cầu có thể cấu hình: số yêu cầu đồng thời tối đa, số yêu cầu tối đa mỗi giây, số ký tự tối đa mỗi yêu cầu, số đoạn văn tối đa mỗi yêu cầu
- Tự động dịch khi cuộn: một `IntersectionObserver` bổ sung sẽ tự động dịch nội dung khi nó đi vào khung nhìn, tách biệt với trình quan sát chèn nút lười hiện có
- Nút chuyển đổi "Hiển thị bản gốc / Hiển thị bản dịch", cho phép chuyển đổi toàn bộ trang giữa văn bản gốc và văn bản đã dịch
- Tiền tố khóa lưu trữ (`_x9_`) được áp dụng cho mọi cài đặt được lưu trữ, để tránh xung đột với các userscript khác
- Các trình trợ giúp thoát HTML cơ bản và phân tích cú pháp JSON an toàn được sử dụng trong toàn bộ mã dịch/yêu cầu

### Đã thay đổi
- Viết lại hàng chờ yêu cầu dịch: thay thế chuỗi độ trễ cố định trước đó bằng một hàng chờ tuân thủ tính đồng thời và giới hạn tốc độ mỗi giây có thể cấu hình
- Thiết kế lại nút hành động nổi: thay thế nút "TRANSLATE ALL" có nhãn, thanh tiến trình và nút hủy bằng một nút biểu tượng thu nhỏ duy nhất để dịch nội dung đang hiển thị khi nhấp và mở bảng cài đặt khi nhấp đôi
- Phát lại chuyển văn bản thành giọng nói hiện có trạng thái: nhấp lại vào "nói" trên cùng một văn bản sẽ dừng phát lại, nút đang hoạt động được bật sáng trực quan và giới hạn cắt bớt 500 ký tự trước đó đã được dỡ bỏ

### Đã xóa
- Phím tắt "Dịch tất cả" (`Ctrl+Shift+T`) và cài đặt bảng điều khiển của nó — việc dịch nội dung hiển thị hiện được xử lý bởi nút nổi được thiết kế lại ở trên

- [Xem bản phát hành](https://github.com/ebayybe/reddit-translator/releases#release-v1.0.9)

## [1.0.0]

### Đã thêm
- Bản phát hành công khai đầu tiên

[Xem bản phát hành](https://github.com/ebayybe/reddit-translator/releases#release-v1.0.0)
