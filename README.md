# React + Vite
**1. Slide 1: Title Slide**

- Title: Hướng dẫn tạo một Portfolio
- Subtitle: Sử dụng HTML, CSS, TypeScript và React
- Presented by: [Tên của bạn]

**2. Slide 2: Cấu trúc bài thuyết trình**

- Giới thiệu
- Portfolio là gì?
- Chuẩn bị trước khi bắt đầu
- Thiết lập môi trường làm việc
- Tạo portfolio với HTML, CSS, TypeScript, và React
- Tối ưu hóa và triển khai
- Kết luận và Q&A

**3. Slide 3: Giới thiệu**
- Giới thiệu về bản thân
  Tên
  Chuyên môn
  Kinh nghiệm
- Mục tiêu của bài thuyết trình
  Hướng dẫn cách tạo một portfolio cá nhân

**4. Slide 4: Portfolio là gì?**
- Định nghĩa Portfolio
  Trang web cá nhân giúp trưng bày dự án, kỹ năng và kinh nghiệm
- Tại sao cần có Portfolio?
  Tăng cường thương hiệu cá nhân
  Thu hút nhà tuyển dụng và khách hàng

**5. Slide 5: Chuẩn bị trước khi bắt đầu**
- Lên kế hoạch
Xác định mục tiêu của portfolio
Đối tượng khán giả
- Thu thập nội dung
Dự án, kỹ năng, thông tin cá nhân
- Thiết kế ban đầu
Wireframe, Mockup

**6. Slide 6: Thiết lập môi trường làm việc**
- Công cụ cần thiết
- Visual Studio Code, Node.js, Create React App

**7. Slide 7: Tạo portfolio với HTML, CSS, TypeScript, và React**
- HTML và CSS cơ bản
Tạo các thành phần: Header, Giới thiệu, Dự án, Kỹ năng, Liên hệ
Sử dụng CSS để tạo kiểu và responsive design
- Tích hợp TypeScript
Hỗ trợ kiểu tĩnh, phát hiện lỗi sớm
- Tạo các thành phần React
Header, About, Projects, Skills, Contact
Sử dụng props và state

**8. Slide 8: Tối ưu hóa và triển khai**
- Tối ưu hóa
Sử dụng React hooks, Lazy loading, code splitting
- Triển khai
Sử dụng Netlify, Vercel hoặc GitHub Pages

**9. Slide 9: Kết luận và Q&A**   
- Tóm tắt
Các bước chính để tạo một portfolio
Công cụ và công nghệ sử dụng
- Lợi ích của việc có một portfolio
- Q&A
Trả lời các câu hỏi từ khán giả

**10. Nhược điểm của react**
- react chỉ là view library chứ không phải là một mvc framework như những framwork. được phát triển bởi facebook và giúp render ra phần view, không có model và controler nên phải kết hợp với thư viện khác
- tốc độ phát triển nhanh,
- không có cấu trúc mạnh mẽ và jsx khó cho người bắt đầu
- https://blackwind.vn/
- https://www.quickstart.com/web-development/10-front-end-web-developer-portfolios-to-inspire-you/
**11. :hover card**
.project-card-view:hover {
    box-shadow: 0 4px 4px 5px rgba(129, 72, 144, .561) !important;
    overflow: hidden !important;
    -webkit-transform: scale(1.02) !important;
    /* transform: scale(1.02) !important; */
}
'''

#include <iostream>
#include <vector>

int removeElement(std::vector<int>& nums, int val) {
    int i = 0;  // Pointer to keep track of the next position for non-val elements
    
    for (int j = 0; j < nums.size(); ++j) {
        if (nums[j] != val) {
            nums[i] = nums[j];  // Copy non-val element to the current i position
            i++;
        }
    }
    
    return i;  // i is the number of elements not equal to val
}

int main() {
    // Example 1
    std::vector<int> nums1 = {3, 2, 2, 3};
    int val1 = 3;
    int k1 = removeElement(nums1, val1);
    std::cout << "Output for example 1: " << k1 << ", nums = [";
    for (int i = 0; i < k1; i++) {
        std::cout << nums1[i] << (i < k1 - 1 ? ", " : "");
    }
    std::cout << "]\n";

    // Example 2
    std::vector<int> nums2 = {0, 1, 2, 2, 3, 0, 4, 2};
    int val2 = 2;
    int k2 = removeElement(nums2, val2);
    std::cout << "Output for example 2: " << k2 << ", nums = [";
    for (int i = 0; i < k2; i++) {
        std::cout << nums2[i] << (i < k2 - 1 ? ", " : "");
    }
    std::cout << "]\n";
  1. I am able to complete my work and maintain work-life balance
 -->  đang quản lý tốt thời gian của mình giữa công việc và cuộc sống cá nhân. Công việc được hoàn thành đúng hạn mà vẫn có thời gian dành cho bản thân và gia đình. Môi trường làm việc của bạn hỗ trợ các chính sách giúp nhân viên cân bằng giữa công việc và cuộc sống, chẳng hạn như giờ làm việc linh hoạt hoặc chính sách làm việc từ xa. Bạn có khả năng xác định ưu tiên công việc và lập kế hoạch hợp lý để cân bằng giữa công việc và các hoạt động cá nhân
  2. I am able to locus on my work without too many unnecessary disruptions and distractions, 90 điểm
--> cảm thấy môi trường làm việc phần lớn yên tĩnh và thuận lợi cho việc tập trung. Những phiền nhiễu không cần thiết không quá nhiều, giúp bạn giữ được sự tập trung vào công việc chính.
3. The meetings I carticipate in are efficient and effective, 95
--> Mục tiêu rõ ràng: Các cuộc họp thường có nội dung và mục tiêu rõ ràng, giúp bạn và đồng nghiệp tập trung vào những vấn đề cốt lõi cần giải quyết.

Quản lý thời gian tốt: Cuộc họp diễn ra đúng giờ và thời gian được phân bổ hợp lý, không kéo dài ngoài dự kiến và đảm bảo rằng các vấn đề quan trọng được thảo luận mà không gây lãng phí thời gian.

Kết quả cụ thể: Sau mỗi cuộc họp, bạn nhận được các quyết định hoặc hành động cụ thể, giúp mọi người biết phải làm gì tiếp theo và đẩy nhanh tiến độ công việc.

Sự tham gia tích cực: Mọi người trong cuộc họp đều tham gia một cách tích cực, có đóng góp và thảo luận mang tính xây dựng, không làm lãng phí thời gian của cả nhóm.
4. My team is contenusly improving the way we work together to be more effective.
--> Tinh thần cải tiến liên tục: Đội nhóm của bạn luôn có ý thức về việc cải tiến các quy trình làm việc, thử nghiệm những cách tiếp cận mới để tăng hiệu quả và giảm lãng phí thời gian.

Phản hồi tích cực và xây dựng: Nhóm thường xuyên chia sẻ phản hồi xây dựng để học hỏi từ những sai lầm và tìm cách khắc phục, giúp nâng cao hiệu quả làm việc của cả nhóm.

Hợp tác và giao tiếp tốt: Sự hợp tác giữa các thành viên rất tốt, với giao tiếp rõ ràng và chia sẻ ý tưởng một cách chủ động, giúp tránh các xung đột và đảm bảo công việc diễn ra trôi chảy.

Ứng dụng công nghệ và công cụ mới: Đội ngũ của bạn có thể đang sử dụng các công cụ hiện đại và công nghệ mới để tối ưu hóa quy trình làm việc và nâng cao năng suất.

Khả năng thích ứng và linh hoạt: Đội nhóm của bạn luôn sẵn sàng thay đổi và thích ứng với những điều kiện mới, giúp nâng cao khả năng làm việc hiệu quả trong mọi hoàn cảnh.
5.c
Hầu hết các quyết định đều tập trung vào việc cải thiện quy trình và hỗ trợ trực tiếp cho công việc, giúp tôi hoàn thành nhiệm vụ hiệu quả hơn.
6.Quản lý của tôi quan tâm đến sự phát triển nghề nghiệp của tôi và đã có những cuộc thảo luận ý nghĩa để giúp tôi định hướng tương lai công việc.
7. "Tôi cho mục này 90 điểm vì công ty cung cấp cơ hội và sự tự do để ứng tuyển vào các vị trí khác thông qua các cơ hội nghề nghiệp nội bộ, giúp nhân viên phát triển và thăng tiến trong sự nghiệp."
8. "Nhóm của tôi phát triển và nâng cao chuyên môn cũng như kỹ năng bằng cách học hỏi lẫn nhau, tạo ra một môi trường hợp tác và hỗ trợ để cải tiến liên tục."
9. "Tôi hài lòng với công việc vì nó cho phép tôi phát triển, học hỏi và đóng góp ý nghĩa vào thành công của cả nhóm."
10. "Sự hợp tác trong nhóm đạt 90 điểm vì chúng tôi làm việc cùng nhau hiệu quả, chia sẻ kiến thức và hỗ trợ nhau để đạt được mục tiêu chung."
11. "Điểm 95 cho việc các thành viên trong nhóm luôn tích cực hỗ trợ lẫn nhau trong công ty, tạo ra một môi trường làm việc gắn kết và hiệu quả."
12. "Tôi cho 100 điểm vì các thành viên trong nhóm luôn hợp tác chặt chẽ và chia sẻ kiến thức, góp phần nâng cao hiệu quả công việc."
13. Các thành viên trong nhóm của tôi luôn trân trọng những góc nhìn đa dạng
14.Tôi cho 95 điểm vì quản lý của tôi luôn khuyến khích các cuộc thảo luận mở và đối thoại, giúp tôi cảm thấy thoải mái chia sẻ ý kiến và trao đổi.

My team members and I collaborate and share information with each other. (100)
Giải thích: Tôi cho 100 điểm vì sự hợp tác và chia sẻ thông tin giữa các thành viên trong nhóm diễn ra rất tốt, giúp công việc tiến triển nhanh chóng và hiệu quả.

My team members value diverse perspectives. (95)
Giải thích: Tôi cho 95 điểm vì các thành viên trong nhóm luôn lắng nghe và đánh giá cao những góc nhìn khác nhau, điều này giúp chúng tôi đưa ra những giải pháp sáng tạo hơn.

My manager encourages open discussions and dialogue with me. (95)
Giải thích: Quản lý luôn khuyến khích tôi tham gia vào các cuộc thảo luận mở, cho phép tôi bày tỏ ý kiến một cách thoải mái. Điều này thúc đẩy sự giao tiếp hiệu quả trong nhóm.

My manager recognizes me and shows appreciation when I do good work. (95)
Giải thích: Tôi được quản lý ghi nhận và đánh giá cao khi hoàn thành tốt công việc, giúp tôi có thêm động lực để tiếp tục phấn đấu và cống hiến.

My manager gives me actionable feedback that helps me improve my performance. (100)
Giải thích: Tôi cho 100 điểm vì phản hồi của quản lý luôn có tính xây dựng và giúp tôi cải thiện rõ rệt hiệu suất làm việc.

I understand how my work impacts the organization. (97)
Giải thích: Tôi hiểu rõ cách công việc của mình đóng góp vào thành công của tổ chức, điều này giúp tôi có cái nhìn rõ ràng hơn về vai trò của mình.

My manager is supportive in resolving challenges I face at work. (100)
Giải thích: Tôi cho 100 điểm vì quản lý luôn sẵn lòng giúp đỡ và hỗ trợ tôi giải quyết các khó khăn trong công việc.

I would recommend my team to others as a great team to work on. (100)
Giải thích: Tôi hoàn toàn hài lòng với đội ngũ của mình và sẽ không ngần ngại giới thiệu nhóm cho người khác vì đây là một nhóm làm việc chuyên nghiệp và gắn kết.

Trust (100)
Giải thích: Tôi cho 100 điểm vì sự tin tưởng lẫn nhau giữa các thành viên trong nhóm rất cao, tạo nền tảng vững chắc cho sự hợp tác và phát triển.

This Company has a clear vision for the future. (95)
Giải thích: Tôi cho 95 điểm vì công ty có tầm nhìn chiến lược rõ ràng, giúp tôi cảm thấy yên tâm về hướng đi lâu dài và sự phát triển của tổ chức.

This Company has a clear vision for the future. (95)
"Tôi cho 95 điểm vì công ty có tầm nhìn rõ ràng cho tương lai, tuy nhiên có thể cải thiện thêm về việc truyền đạt chi tiết kế hoạch dài hạn đến tất cả các bộ phận."

Our CEOs (business and regional) value the role of social responsibility, including giving back to local communities and caring about the environment. (95)
"Tôi cho 95 điểm vì ban lãnh đạo rất coi trọng trách nhiệm xã hội, nhưng có thể tăng cường thêm các hoạt động cụ thể và minh bạch để nhân viên cảm nhận rõ hơn."

This Company communicates well with employees about the organization's overall goals and strategies. (95)
"Tôi cho 95 điểm vì công ty giao tiếp tốt về các mục tiêu và chiến lược tổng thể, tuy nhiên cần cải thiện cách cập nhật thông tin thường xuyên và chi tiết hơn."

Our CEOs (business and regional) listen to employee concerns and suggestions for improvement, and they make an effort to incorporate employees' ideas where appropriate. (95)
"Tôi cho 95 điểm vì ban lãnh đạo lắng nghe và xem xét ý kiến nhân viên, tuy nhiên việc triển khai và phản hồi có thể nhanh chóng và rõ ràng hơn."

This Company communicates openly and transparently with employees when making changes to HR policies and procedures. (95)
"Tôi cho 95 điểm vì công ty minh bạch trong việc thay đổi chính sách nhân sự, tuy nhiên cần nhiều hơn các buổi thảo luận và phản hồi để nhân viên hiểu rõ hơn về các thay đổi."

My contribution and performance are evaluated fairly. (95)
"Tôi cho 95 điểm vì cảm thấy sự đóng góp của mình được đánh giá công bằng, nhưng có thể minh bạch hơn trong các tiêu chí đánh giá."

In this Company, I am treated fairly regardless of age, gender, gender identity, race, sexual orientation, military status, disabilities, religion, and national origin. (100)
"Tôi cho 100 điểm vì tôi cảm nhận được sự công bằng trong cách công ty đối xử với mọi người, không phân biệt tuổi tác, giới tính hay xuất thân."

I am rewarded fairly through my compensation and benefits for the work that I do. (90)
"Tôi cho 90 điểm vì tôi thấy quyền lợi và lương thưởng của mình tương đối hợp lý, nhưng vẫn có thể điều chỉnh để phù hợp hơn với thị trường và đóng góp của từng cá nhân."

I would recommend this Company as a great place to work. (95)
"Tôi cho 95 điểm vì tôi tin đây là một môi trường làm việc tốt, nhưng vẫn còn không gian để cải thiện về sự cân bằng giữa công việc và đời sống cá nhân cũng như các phúc lợi."



**Kinh nghiệm sử dụng và tùy chỉnh các framework UI thành phần:**

Có khả năng làm việc với các thư viện giao diện người dùng phổ biến như Ant Design, Tailwind CSS với Flowbite, và Material Design.
Đã từng tham gia phát triển và tùy chỉnh giao diện người dùng cho các dự án, đảm bảo tính tương thích trên nhiều loại thiết bị và trình duyệt.
Hiểu cách tối ưu hóa và tùy chỉnh các component để phù hợp với yêu cầu thiết kế và trải nghiệm người dùng.
**Hiểu biết về các tiêu chuẩn W3C:**

Nắm vững các tiêu chuẩn của W3C (World Wide Web Consortium) và cách áp dụng chúng trong quá trình phát triển web.
Có kinh nghiệm phát hiện và xử lý các lỗi không tuân thủ tiêu chuẩn W3C, nhằm đảm bảo trang web hoạt động mượt mà trên tất cả các trình duyệt và nền tảng.
Đã từng tham gia vào việc cải thiện trải nghiệm người dùng bằng cách đảm bảo các quy tắc truy cập và tính tuân thủ của giao diện.
**Kinh nghiệm viết và thực hiện unit test cho ứng dụng web:**

Đã từng tham gia viết và thực hiện unit tests cho các ứng dụng web sử dụng các công cụ như Jest, Mocha, và Cypress.
Hiểu biết về quy trình kiểm thử tự động và cách xây dựng các bài kiểm tra hiệu quả, nhằm đảm bảo chất lượng và độ tin cậy của mã nguồn.
Có kinh nghiệm trong việc kiểm thử các thành phần UI, xử lý dữ liệu, và logic ứng dụng để phát hiện và khắc phục sớm các lỗi tiềm ẩn.
HTML là gì?
HTML (HyperText Markup Language) là ngôn ngữ đánh dấu sử dụng để tạo cấu trúc cho trang web.
Thẻ <div> và <span> khác nhau như thế nào?
<div> là phần tử block-level, còn <span> là inline-level. <div> dùng để nhóm các phần tử lớn, còn <span> thường dùng cho văn bản hoặc nhóm nhỏ.
Thẻ <head> và <body> có chức năng gì?
<head> chứa thông tin về tài liệu (metadata), còn <body> chứa nội dung hiển thị trên trang web.
Thẻ <meta> có công dụng gì?
Thẻ <meta> cung cấp metadata về tài liệu HTML như charset, mô tả, từ khóa, viewport, v.v.
Các thuộc tính global trong HTML là gì?
Các thuộc tính áp dụng cho tất cả thẻ HTML như id, class, style, title, lang, v.v.
Thẻ <section> dùng để làm gì?
<section> được dùng để nhóm các nội dung liên quan thành một phần trong tài liệu.
Sự khác biệt giữa thẻ <ol> và <ul> là gì?
<ol> tạo danh sách có thứ tự (số thứ tự), còn <ul> tạo danh sách không thứ tự (dấu chấm).
Thẻ <a> có tác dụng gì?
<a> được dùng để tạo liên kết đến trang khác hoặc phần tử khác trong trang.
Công dụng của thuộc tính alt trong thẻ <img> là gì?
alt cung cấp văn bản thay thế cho hình ảnh khi không thể hiển thị hoặc cho các công cụ đọc màn hình.
Thẻ <iframe> dùng để làm gì?
<iframe> nhúng một tài liệu HTML hoặc trang web khác vào trong trang hiện tại.
HTML5 là gì?
HTML5 là phiên bản mới của HTML, với nhiều thẻ và API mới như <canvas>, <audio>, <video>, v.v.
Thẻ <form> dùng để làm gì?
<form> được sử dụng để tạo biểu mẫu thu thập dữ liệu từ người dùng.
Thuộc tính action trong thẻ <form> dùng để làm gì?
action chỉ định URL nơi dữ liệu biểu mẫu sẽ được gửi đến khi người dùng gửi biểu mẫu.
Thẻ nào trong HTML5 để nhúng video?
Thẻ <video>.
Thẻ <canvas> trong HTML5 có công dụng gì?
<canvas> cung cấp một vùng để vẽ đồ họa động bằng cách sử dụng JavaScript.
Sự khác biệt giữa thẻ <input type="button"> và <button> là gì?
<input type="button"> chỉ tạo nút đơn giản, còn <button> có thể chứa văn bản hoặc HTML bên trong.
Làm thế nào để tạo liên kết mở trong một tab mới?
Sử dụng thuộc tính target="_blank" trong thẻ <a>.
Thẻ <nav> dùng để làm gì?
<nav> dùng để định nghĩa một khối chứa các liên kết điều hướng trong trang web.
Thẻ <table> dùng để tạo gì?
Thẻ <table> dùng để tạo bảng trong HTML.
Thẻ <figure> và <figcaption> có chức năng gì?
<figure> chứa nội dung như hình ảnh hoặc biểu đồ, còn <figcaption> là mô tả cho nội dung đó.
CSS:
CSS là gì?
CSS (Cascading Style Sheets) là ngôn ngữ dùng để định dạng và bố trí trang web.
Các cách để nhúng CSS vào HTML là gì?
Có ba cách: inline (trực tiếp trong thẻ), internal (trong thẻ <style>), và external (liên kết với file .css bên ngoài).
Sự khác biệt giữa class và id trong CSS là gì?
id là duy nhất cho mỗi phần tử và chỉ dùng một lần, còn class có thể áp dụng cho nhiều phần tử.
Box model là gì?
Box model bao gồm: content, padding, border, và margin – xác định kích thước và khoảng cách của phần tử.
Thuộc tính position trong CSS có những giá trị nào?
Các giá trị gồm: static, relative, absolute, fixed, và sticky.
Flexbox trong CSS là gì?
Flexbox là một cách bố trí mới giúp sắp xếp và phân bố không gian các phần tử trong container một cách linh hoạt.
Làm thế nào để tạo hình tròn trong CSS?
Sử dụng thuộc tính border-radius: 50% cho phần tử vuông.
Grid layout trong CSS là gì?
CSS Grid là hệ thống bố trí dạng lưới cho phép sắp xếp phần tử thành hàng và cột.
Thuộc tính z-index trong CSS dùng để làm gì?
z-index xác định thứ tự xếp chồng của các phần tử, phần tử có z-index cao hơn sẽ hiển thị trước.
Công dụng của media queries là gì?
media queries dùng để điều chỉnh bố cục và kiểu dáng dựa trên kích thước và loại thiết bị.
Pseudo-class và pseudo-element là gì?
Pseudo-class chọn phần tử dựa trên trạng thái (:hover, :focus), pseudo-element chọn một phần cụ thể của phần tử (::before, ::after).
Sự khác nhau giữa display: inline và display: block là gì?
inline không bắt đầu dòng mới và chỉ chiếm không gian vừa nội dung, còn block chiếm toàn bộ chiều rộng dòng và bắt đầu dòng mới.
Cách tạo gradient trong CSS?
Sử dụng background: linear-gradient() hoặc background: radial-gradient().
Thuộc tính opacity làm gì?
opacity điều chỉnh độ trong suốt của phần tử (giá trị từ 0 đến 1).
Công dụng của thuộc tính float là gì?
float đẩy phần tử sang trái hoặc phải để các phần tử khác bao quanh nó.
CSS có thể thực hiện animation không?
Có, thông qua các thuộc tính như @keyframes, animation, transition.
Sự khác biệt giữa margin và padding là gì?
margin là khoảng cách bên ngoài phần tử, còn padding là khoảng cách bên trong giữa nội dung và border.
Cách viết CSS để thiết kế trang responsive là gì?
Sử dụng media queries, Flexbox, Grid và kích thước theo tỷ lệ phần trăm.
Cách ẩn phần tử trong CSS là gì?
Sử dụng display: none hoặc visibility: hidden.
Công dụng của thuộc tính box-shadow là gì?
box-shadow thêm hiệu ứng đổ bóng cho các phần tử.
JavaScript:
JavaScript là gì?
JavaScript là ngôn ngữ lập trình phía client giúp tương tác và thao tác với nội dung trang web.
Sự khác biệt giữa var, let, và const là gì?
var có phạm vi hàm, let và const có phạm vi khối; const không cho phép thay đổi giá trị sau khi gán.
Callback function là gì?
Callback function là một hàm được truyền như tham số và gọi lại trong hàm khác sau khi thực hiện xong.
Sự khác nhau giữa == và === là gì?
== kiểm tra bằng giá trị, còn === kiểm tra bằng cả giá trị và kiểu dữ liệu.
Closure trong JavaScript là gì?
Closure xảy ra khi một hàm "ghi nhớ" biến từ phạm vi bên ngoài của nó, ngay cả sau khi hàm đó đã được thực thi.
Event bubbling và event capturing là gì?
Event bubbling là sự kiện bắt đầu từ phần tử con và lan ra cha, event capturing ngược lại.
Async/await trong JavaScript có công dụng gì?
Async/await là cú pháp giúp xử lý các thao tác bất đồng bộ một cách dễ đọc hơn so với Promises.
Sự khác biệt giữa null và undefined là gì?
undefined là khi biến chưa được gán giá trị, còn null là giá trị rỗng được gán cố ý.
DOM là gì?
DOM (Document Object Model) là mô hình cây biểu diễn cấu trúc tài liệu HTML, cho phép JavaScript tương tác với nội dung.
Cách bắt sự kiện khi nhấn nút trên trang web là gì?
Sử dụng phương thức addEventListener để lắng nghe sự kiện click.
'''
