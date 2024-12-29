# Website_Phishing_Scan

Khởi động fontend ReacJs
1. Bật terminal trong thư mục fontend
2. Truy cập vào file url-check bằng cách gõ: cd url-check
3. Khởi động giao diện bằng lệnh: yarn dev
4. Truy cập vào đường link: http://localhost:5173/

#=========================================================================#
Trước khi khởi động backend hãy tải Laragon về để làm nơi lưu trữ dữ liệu
1. Tạo table tên phishing_checker
2. Tạo các thuộc tính bằng cách gõ lệnh trên Query

CREATE TABLE history (
    id INT AUTO_INCREMENT PRIMARY KEY,
    url TEXT NOT NULL,
    result VARCHAR(50) NOT NULL,
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE history_email (
    id INT AUTO_INCREMENT PRIMARY KEY,
    email_text TEXT NOT NULL,
    result VARCHAR(50) NOT NULL,
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP
);

#=========================================================================#
Khởi động backend 
1. Bật terminal trong thư mục backend
2. Gõ lệnh: python main.py