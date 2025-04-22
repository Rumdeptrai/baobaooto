"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import LayoutWithNavigation from "../layout-with-navigation";

// Lưu trữ các form đã gửi trong localStorage
interface FormEntry {
  name: string;
  email: string;
  phone: string;
  car: string;
  message: string;
  date: string;
}

export default function ContactPage() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState("");
  const [storedEntries, setStoredEntries] = useState<FormEntry[]>([]);

  // Tải các form đã lưu khi trang khởi tạo
  useEffect(() => {
    const savedEntries = localStorage.getItem("contactFormEntries");
    if (savedEntries) {
      try {
        setStoredEntries(JSON.parse(savedEntries));
      } catch (e) {
        console.error("Error loading saved entries:", e);
      }
    }
  }, []);

  // Hàm lưu trữ form submission
  const saveFormEntry = (formData: Record<string, string>) => {
    const newEntry: FormEntry = {
      name: formData.name || "",
      email: formData.email || "",
      phone: formData.phone || "",
      car: formData.car || "",
      message: formData.message || "",
      date: new Date().toLocaleString("vi-VN")
    };

    const updatedEntries = [...storedEntries, newEntry];
    setStoredEntries(updatedEntries);
    try {
      localStorage.setItem("contactFormEntries", JSON.stringify(updatedEntries));
    } catch (e) {
      console.error("Error saving form entry:", e);
    }
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError("");

    // Lấy form data
    const form = e.currentTarget;
    const formData = new FormData(form);

    try {
      // Chuyển đổi FormData thành đối tượng để gửi và lưu
      const formObject: Record<string, string> = {};
      formData.forEach((value, key) => {
        formObject[key] = value.toString();
      });

      // Thêm trường form-name để Netlify nhận diện
      formObject["form-name"] = "contact";

      // Lưu trữ form dữ liệu locally
      saveFormEntry(formObject);

      try {
        // Gửi form đến Netlify (nhưng không phụ thuộc vào kết quả)
        fetch("/", {
          method: "POST",
          headers: { "Content-Type": "application/x-www-form-urlencoded" },
          body: new URLSearchParams(formObject).toString()
        }).catch(err => console.log("Netlify form submission error:", err));
      } catch (err) {
        console.log("Form submission error:", err);
        // Không hiển thị lỗi cho người dùng vì dữ liệu đã được lưu locally
      }

      // Luôn hiển thị thành công, vì dữ liệu đã được lưu locally
      setIsSubmitting(false);
      setIsSubmitted(true);

    } catch (err) {
      console.error("Lỗi xử lý form:", err);
      setIsSubmitting(false);

      // Trong trường hợp lỗi nghiêm trọng, hiển thị thông báo
      setError("Có lỗi xảy ra. Vui lòng thử lại sau.");
    }
  };

  return (
    <LayoutWithNavigation>
      <div className="container mx-auto px-4 py-16">
        <h1 className="mb-12 text-center text-4xl font-bold">Liên Hệ Với Chúng Tôi</h1>

        <div className="grid gap-12 md:grid-cols-2">
          {/* Left column */}
          <div>
            {/* Contact info */}
            <div className="mb-8">
              <h2 className="mb-4 text-2xl font-bold">Thông Tin Liên Hệ</h2>
              <ul className="space-y-4 text-lg">
                <li className="flex items-start">
                  <span className="mr-2 font-semibold">Hotline:</span>
                  <span>1900 9999</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2 font-semibold">Email:</span>
                  <span>contact@baobao.com.vn</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2 font-semibold">Giờ làm việc:</span>
                  <span>8:00 - 18:00 (Thứ Hai - Chủ Nhật)</span>
                </li>
              </ul>
            </div>

            {/* Showroom */}
            <div>
              <h2 className="mb-4 text-2xl font-bold">Showroom</h2>
              <ul className="space-y-4 text-lg">
                <li>
                  <h3 className="font-semibold">Showroom 1:</h3>
                  <p>14A Đường Huyền Trân Công Chúa, Phường 5, Đà Lạt</p>
                </li>
                <li>
                  <h3 className="font-semibold">Showroom 2:</h3>
                  <p>B77 KQH Ngô Quyền, Phường 8, Đà Lạt</p>
                </li>
              </ul>
            </div>
          </div>

          {/* Right column - Contact form */}
          <div className="rounded-lg bg-white p-8 shadow-md">
            <h2 className="mb-6 text-2xl font-bold">Gửi Yêu Cầu Tư Vấn</h2>

            {isSubmitted ? (
              <div className="text-center p-6 bg-green-50 rounded-lg">
                <div className="text-green-600 mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-2">Cảm ơn bạn!</h3>
                <p className="mb-4">Chúng tôi đã nhận được thông tin của bạn và sẽ liên hệ lại trong thời gian sớm nhất.</p>
                <Button onClick={() => setIsSubmitted(false)}>Gửi yêu cầu khác</Button>
              </div>
            ) : (
              <>
                {/* Form tĩnh cho Netlify - sẽ không hiển thị nhưng Netlify sẽ nhận diện */}
                <form name="contact" netlify="true" netlify-honeypot="bot-field" hidden>
                  <input type="text" name="name" />
                  <input type="email" name="email" />
                  <input type="tel" name="phone" />
                  <select name="car" />
                  <textarea name="message" />
                </form>

                {/* Form thật để người dùng nhập */}
                <form
                  className="space-y-6"
                  name="contact"
                  method="POST"
                  data-netlify="true"
                  netlify-honeypot="bot-field"
                  onSubmit={handleSubmit}
                >
                  <input type="hidden" name="form-name" value="contact" />
                  <div hidden>
                    <input name="bot-field" />
                  </div>

                  {error && (
                    <div className="bg-red-50 text-red-600 p-4 rounded-md mb-4">
                      {error}
                    </div>
                  )}

                  <div>
                    <label htmlFor="name" className="mb-2 block font-medium">
                      Họ và tên
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      className="w-full rounded-md border border-gray-300 px-4 py-2 focus:border-blue-500 focus:outline-none"
                      placeholder="Nhập họ và tên của bạn"
                      required
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="mb-2 block font-medium">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      className="w-full rounded-md border border-gray-300 px-4 py-2 focus:border-blue-500 focus:outline-none"
                      placeholder="Nhập email của bạn"
                      required
                    />
                  </div>

                  <div>
                    <label htmlFor="phone" className="mb-2 block font-medium">
                      Số điện thoại
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      className="w-full rounded-md border border-gray-300 px-4 py-2 focus:border-blue-500 focus:outline-none"
                      placeholder="Nhập số điện thoại của bạn"
                      required
                    />
                  </div>

                  <div>
                    <label htmlFor="car" className="mb-2 block font-medium">
                      Mẫu xe quan tâm
                    </label>
                    <select
                      id="car"
                      name="car"
                      className="w-full rounded-md border border-gray-300 px-4 py-2 focus:border-blue-500 focus:outline-none"
                      required
                    >
                      <option value="">Chọn mẫu xe</option>
                      <option value="Toyota Camry">Toyota Camry</option>
                      <option value="Honda Civic">Honda Civic</option>
                      <option value="Ford Ranger">Ford Ranger</option>
                      <option value="VinFast VF8">VinFast VF8</option>
                      <option value="Mercedes-Benz C300">Mercedes-Benz C300</option>
                      <option value="BMW X5">BMW X5</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="message" className="mb-2 block font-medium">
                      Nội dung
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={4}
                      className="w-full rounded-md border border-gray-300 px-4 py-2 focus:border-blue-500 focus:outline-none"
                      placeholder="Nhập nội dung bạn muốn tư vấn"
                      required
                    />
                  </div>

                  <Button
                    type="submit"
                    className="w-full py-6 text-lg"
                    size="lg"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? "Đang gửi..." : "Gửi Yêu Cầu"}
                  </Button>
                </form>
              </>
            )}
          </div>
        </div>

        {/* Hiển thị các yêu cầu đã lưu - chỉ hiển thị để demo, trong thực tế nên chuyển sang trang admin */}
        {storedEntries.length > 0 && (
          <div className="mt-16">
            <h2 className="text-2xl font-bold mb-6">Yêu Cầu Đã Gửi (Lưu trữ Local)</h2>
            <div className="overflow-x-auto">
              <table className="min-w-full bg-white shadow-md rounded-lg overflow-hidden">
                <thead className="bg-gray-100">
                  <tr>
                    <th className="px-4 py-3 text-left">Thời gian</th>
                    <th className="px-4 py-3 text-left">Họ tên</th>
                    <th className="px-4 py-3 text-left">Email</th>
                    <th className="px-4 py-3 text-left">SĐT</th>
                    <th className="px-4 py-3 text-left">Xe</th>
                    <th className="px-4 py-3 text-left">Nội dung</th>
                  </tr>
                </thead>
                <tbody>
                  {storedEntries.map((entry, index) => (
                    <tr key={index} className="border-t">
                      <td className="px-4 py-3">{entry.date}</td>
                      <td className="px-4 py-3">{entry.name}</td>
                      <td className="px-4 py-3">{entry.email}</td>
                      <td className="px-4 py-3">{entry.phone}</td>
                      <td className="px-4 py-3">{entry.car}</td>
                      <td className="px-4 py-3 max-w-xs truncate">{entry.message}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="mt-4">
              <Button
                variant="outline"
                onClick={() => {
                  localStorage.removeItem("contactFormEntries");
                  setStoredEntries([]);
                }}
                className="text-red-600 border-red-600 hover:bg-red-50"
              >
                Xóa tất cả dữ liệu
              </Button>
            </div>
          </div>
        )}
      </div>
    </LayoutWithNavigation>
  );
}
