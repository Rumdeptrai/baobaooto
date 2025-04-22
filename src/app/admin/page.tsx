"use client";

import { useState, useEffect } from "react";
import LayoutWithNavigation from "../layout-with-navigation";
import { Button } from "@/components/ui/button";

// Định nghĩa kiểu dữ liệu cho submissions
interface FormSubmission {
  id: string;
  name: string;
  email: string;
  phone: string;
  car: string;
  message: string;
  date: string;
}

// Dữ liệu mẫu
const mockSubmissions: FormSubmission[] = [
  {
    id: "1",
    name: "Nguyễn Văn A",
    email: "nguyenvana@gmail.com",
    phone: "0901234567",
    car: "Toyota Camry",
    message: "Tôi muốn tham khảo giá xe Toyota Camry và lịch lái thử.",
    date: "2025-04-15 09:32"
  },
  {
    id: "2",
    name: "Trần Thị B",
    email: "tranthib@gmail.com",
    phone: "0912345678",
    car: "Honda Civic RS",
    message: "Tôi cần biết thêm thông tin về các gói tài chính khi mua Honda Civic RS trả góp.",
    date: "2025-04-14 15:47"
  },
  {
    id: "3",
    name: "Lê Văn C",
    email: "levanc@hotmail.com",
    phone: "0823456789",
    car: "VinFast VF8",
    message: "Tôi quan tâm đến xe điện VinFast VF8, vui lòng liên hệ tư vấn thêm.",
    date: "2025-04-13 11:23"
  }
];

export default function AdminPage() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [submissions, setSubmissions] = useState<FormSubmission[]>([]);
  const [error, setError] = useState("");

  useEffect(() => {
    // Trong thực tế, đây sẽ là API call đến Netlify hoặc backend
    if (isLoggedIn) {
      setSubmissions(mockSubmissions);
    }
  }, [isLoggedIn]);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();

    // Demo login đơn giản - trong thực tế bạn cần xác thực an toàn hơn
    if (username === "admin" && password === "baobao2025") {
      setIsLoggedIn(true);
      setError("");
    } else {
      setError("Tên đăng nhập hoặc mật khẩu không đúng");
    }
  };

  return (
    <LayoutWithNavigation>
      <div className="container mx-auto px-4 py-16">
        <h1 className="mb-12 text-center text-4xl font-bold">Quản Trị Hệ Thống</h1>

        {!isLoggedIn ? (
          <div className="max-w-md mx-auto">
            <div className="bg-white shadow-md rounded-lg p-8">
              <h2 className="text-2xl font-bold mb-6">Đăng Nhập</h2>
              {error && <p className="text-red-500 mb-4">{error}</p>}
              <form onSubmit={handleLogin} className="space-y-4">
                <div>
                  <label htmlFor="username" className="block mb-2 font-medium">
                    Tên đăng nhập
                  </label>
                  <input
                    type="text"
                    id="username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    className="w-full rounded-md border border-gray-300 px-4 py-2 focus:border-blue-500 focus:outline-none"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="password" className="block mb-2 font-medium">
                    Mật khẩu
                  </label>
                  <input
                    type="password"
                    id="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="w-full rounded-md border border-gray-300 px-4 py-2 focus:border-blue-500 focus:outline-none"
                    required
                  />
                </div>
                <Button type="submit" className="w-full">
                  Đăng Nhập
                </Button>
              </form>
              <div className="mt-4 text-sm text-gray-600">
                <p>Demo: Username: "admin", Password: "baobao2025"</p>
              </div>
            </div>
          </div>
        ) : (
          <div>
            <div className="flex justify-between items-center mb-8">
              <h2 className="text-2xl font-bold">Danh Sách Thông Tin Liên Hệ</h2>
              <Button
                variant="outline"
                onClick={() => setIsLoggedIn(false)}
              >
                Đăng Xuất
              </Button>
            </div>

            <div className="bg-white shadow-md rounded-lg overflow-hidden">
              <div className="overflow-x-auto">
                <table className="min-w-full divide-y divide-gray-200">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        ID
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Họ và tên
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Email
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Số điện thoại
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Mẫu xe
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Thời gian
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Thao tác
                      </th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    {submissions.map((submission) => (
                      <tr key={submission.id}>
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                          {submission.id}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                          {submission.name}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                          {submission.email}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                          {submission.phone}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                          {submission.car}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                          {submission.date}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                          <button
                            className="text-blue-600 hover:text-blue-900"
                            onClick={() => alert(`Nội dung: ${submission.message}`)}
                          >
                            Xem chi tiết
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            <div className="mt-8 bg-gray-50 p-6 rounded-lg">
              <h3 className="text-lg font-semibold mb-4">Lưu ý quan trọng</h3>
              <p className="text-gray-700">
                Đây là trang demo để minh họa cách xem thông tin khách hàng. Trong thực tế:
              </p>
              <ul className="list-disc pl-5 mt-2 space-y-1 text-gray-700">
                <li>Để xem thông tin form thật, vui lòng đăng nhập vào tài khoản Netlify của bạn</li>
                <li>Vào mục Forms trong menu thanh bên</li>
                <li>Xem danh sách tất cả các form đã gửi</li>
                <li>Bạn cũng có thể cài đặt thông báo email khi có form mới</li>
              </ul>
            </div>
          </div>
        )}
      </div>
    </LayoutWithNavigation>
  );
}
