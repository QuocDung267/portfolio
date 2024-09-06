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
    
    return 0;
}
