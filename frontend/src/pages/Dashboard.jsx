import React from 'react';
import { useNavigate } from 'react-router-dom';

const Dashboard = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-purple-100 p-6">
      <div className="max-w-6xl mx-auto">
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-purple-900 mb-2">💜 Dashboard</h1>
          <p className="text-purple-600">Xin chào, Vợ!</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition">
            <p className="text-purple-600 text-sm font-semibold">Chi tiêu hôm nay</p>
            <p className="text-3xl font-bold text-purple-900 mt-2">350,000đ</p>
          </div>
          <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition">
            <p className="text-purple-600 text-sm font-semibold">Chi tiêu tháng</p>
            <p className="text-3xl font-bold text-purple-900 mt-2">8,500,000đ</p>
          </div>
          <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition">
            <p className="text-purple-600 text-sm font-semibold">Hạn mức tháng</p>
            <p className="text-3xl font-bold text-purple-900 mt-2">10,000,000đ</p>
          </div>
          <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition">
            <p className="text-purple-600 text-sm font-semibold">Tiết kiệm</p>
            <p className="text-3xl font-bold text-green-500 mt-2">5,200,000đ</p>
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          <button onClick={() => navigate('/add-expense')} className="bg-purple-400 text-white py-3 rounded-2xl font-bold hover:bg-purple-500 transition shadow-lg">➕ Ghi chi tiêu</button>
          <button onClick={() => navigate('/reports')} className="bg-purple-300 text-white py-3 rounded-2xl font-bold hover:bg-purple-400 transition shadow-lg">📈 Báo cáo</button>
          <button onClick={() => navigate('/budget')} className="bg-purple-300 text-white py-3 rounded-2xl font-bold hover:bg-purple-400 transition shadow-lg">💰 Ngân sách</button>
          <button onClick={() => navigate('/settings')} className="bg-purple-300 text-white py-3 rounded-2xl font-bold hover:bg-purple-400 transition shadow-lg">⚙️ Cài đặt</button>
        </div>

        <div className="bg-white rounded-2xl p-6 shadow-lg">
          <h2 className="text-xl font-bold text-purple-900 mb-4">🔔 Thông báo (2 cái mới)</h2>
          <div className="space-y-3">
            <div className="p-4 bg-purple-50 rounded-lg border-l-4 border-purple-400 hover:shadow-md transition">
              <p className="text-purple-900 font-semibold">✓ Chồng: 500,000đ - Xăng xe</p>
              <p className="text-purple-600 text-sm mt-1">2 giờ trước</p>
            </div>
            <div className="p-4 bg-purple-50 rounded-lg border-l-4 border-purple-400 hover:shadow-md transition">
              <p className="text-purple-900 font-semibold">✓ Chồng: 150,000đ - Giải trí</p>
              <p className="text-purple-600 text-sm mt-1">4 giờ trước</p>
            </div>
          </div>
          <button onClick={() => navigate('/notifications')} className="mt-4 text-purple-600 font-bold hover:text-purple-700">Xem tất cả →</button>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
