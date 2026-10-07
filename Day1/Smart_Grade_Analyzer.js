/*
Xây dựng chương trình phân tích kết quả học tập của một sinh viên.

Input
JavaScript

Copy
const studentName = "Tommy";
const math = 85;
const javascript = 92;
const english = 78;
const attendance = 87;
Yêu cầu
Tính toán và xác định:

Điểm trung bình.
Xếp loại A / B / C / D / F.
Trạng thái Passed / Failed.
Trạng thái chuyên cần.
Thông báo kết quả bằng Template Literals.
Quy tắc xếp loại
TEXT

Copy
Average >= 90 → A
Average >= 80 → B
Average >= 70 → C
Average >= 60 → D
Average < 60  → F
Quy tắc Passed / Failed
Sinh viên chỉ được Passed khi thỏa mãn cả hai điều kiện:

TEXT

Copy
Average >= 50
AND
Attendance >= 80
Nếu không thỏa mãn một trong hai điều kiện trên:

TEXT

Copy
Failed
Quy tắc chuyên cần
Kiểm tra trạng thái chuyên cần dựa trên attendance:

TEXT

Copy
Attendance >= 80 → Good Attendance
Attendance < 80  → Poor Attendance
Edge Cases
Tự kiểm tra chương trình với các trường hợp:

TEXT

Copy
Average = 100
Average = 50
Average = 49
Attendance = 80
Attendance = 79
Đảm bảo chương trình xử lý đúng các giá trị nằm ngay tại ranh giới.

Kết quả mong muốn
Sử dụng Template Literals để tạo một báo cáo kết quả.

Ví dụ:

TEXT

Copy
Student: Tommy
Average: 85
Grade: B
Status: Passed
Attendance: 87%
Attendance Status: Good Attendance
Yêu cầu thêm 🚀
Không viết toàn bộ logic vào một if duy nhất.

Hãy chia bài toán thành các bước rõ ràng:

TEXT

Copy
Input
  ↓
Validate
  ↓
Calculate
  ↓
Classify
  ↓
Generate Report
Mỗi bước nên có nhiệm vụ riêng để code dễ đọc và dễ kiểm tra hơn.

Constraints
Không sử dụng thư viện bên ngoài.
Sử dụng những kiến thức JavaScript đã học.
Ưu tiên sử dụng:
if / else
toán tử so sánh
toán tử logic
biến
Template Literals
phép tính số học
*/

// khao bao ten cac bien
let studentName = prompt("Enter student name:");
let math = parseFloat(prompt("Enter Math score:"));
let javascript = parseFloat(prompt("Enter JavaScript score:"));
let english = parseFloat(prompt("Enter English score:"));
let attendance = parseFloat(prompt("Enter Attendance percentage:"));

// tinh toan diem trung binh
let average = (math + javascript + english) / 3;
let ranking = "";

// xep loai A/B/C/D/F
if (average >= 90) {
  ranking = "A";
} else if (average >= 80) {
  ranking = "B";
} else if (average >= 70) {
  ranking = "C";
} else if (average >= 60) {
  ranking = "D";
} else {
  ranking = "F";
}

// xac dinh trang thai Passed/Failed
let isPassed = average >= 50 && attendance >= 80 ? "Passed" : "Failed";

// xac dinh trang thai chuyen can
let attendanceStatus = attendance >= 80 ? "Good Attendance" : "Poor Attendance";

// tao bao cao ket qua
console.log(`Student: ${studentName}
Average: ${average}
Grade : ${ranking}
Status : ${isPassed}
Attendace : ${attendance}%
Attendance Status: ${attendanceStatus}`);