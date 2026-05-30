# 💜 Family Finance App - Ứng dụng Quản lý Tài chính Gia đình

Một ứng dụng web hiện đại giúp quản lý tài chính gia đình cho 2 vợ chồng, với giao diện pastel tím dễ thương.

## ✨ Tính năng chính

- 📊 **Ghi chi tiêu hàng ngày** - Số tiền, danh mục, ngày, ghi chú
- 🗂️ **Phân loại chi tiêu** - Ăn uống, Xăng xe, Giáo dục, Mua sắm, Giải trí, Gia đình, Khác
- 📈 **Báo cáo tài chính** - Biểu đồ, lọc tháng/năm, so sánh hạn mức
- 💰 **Lên kế hoạch ngân sách** - Tự động áp dụng, chỉnh sửa từng tháng
- 🔔 **Thông báo real-time** - Khi vợ/chồng ghi chi tiêu
- 💎 **Tính toán tiết kiệm** - Thu nhập - Chi tiêu
- 👥 **Multi-user** - 2 tài khoản riêng biệt (vợ + chồng)

## 🛠️ Stack công nghệ

- **Frontend**: React + Tailwind CSS + Chart.js
- **Backend**: Node.js + Express
- **Database**: MongoDB (hoặc Supabase)
- **Authentication**: JWT
- **Deployment**: Vercel + Render

## 📁 Cấu trúc project

```
family-finance-app/
├── backend/                 # Server (Node.js + Express)
│   ├── models/             # Schema database
│   ├── routes/             # API endpoints
│   ├── controllers/        # Business logic
│   ├── middleware/         # Auth, validation
│   ├── config/             # Cấu hình
│   └── server.js           # Entry point
├── frontend/               # Web app (React)
│   ├── src/
│   │   ├── components/     # UI components
│   │   ├── pages/          # Các trang chính
│   │   ├── hooks/          # Custom hooks
│   │   ├── services/       # API calls
│   │   ├── context/        # State management
│   │   ├── styles/         # Tailwind CSS
│   │   └── App.jsx         # Entry point
│   └── package.json
├── .gitignore
├── .env.example
└── README.md
```

## 🚀 Cách sử dụng

### Cài đặt backend
```bash
cd backend
npm install
npm start
```

### Cài đặt frontend
```bash
cd frontend
npm install
npm start
```

## 📝 License

MIT - Miễn phí sử dụng

---

**Phát triển bởi**: Copilot  
**Cho**: tuongvy256 & gia đình  
**Ngày bắt đầu**: 2026-05-30
