"use client";

import Link from "next/link";

export function Footer() {
  return (
    <footer className="bg-gray-100">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          <div>
            <h3 className="mb-4 text-lg font-bold">BaoBao</h3>
            <p className="text-gray-600">Đại lý ô tô chính hãng hàng đầu Việt Nam</p>
          </div>

          <div>
            <h3 className="mb-4 text-lg font-bold">Thông Tin Liên Hệ</h3>
            <ul className="space-y-2 text-gray-600">
              <li>Hotline: 1900 9999</li>
              <li>Email: contact@baobao.com.vn</li>
              <li>Giờ làm việc: 8:00 - 18:00 (Thứ Hai - Chủ Nhật)</li>
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-lg font-bold">Showroom</h3>
            <p className="text-gray-600">
              14A Đường Huyền Trân Công Chúa, Phường 5, Đà Lạt
            </p>
            <p className="text-gray-600 mt-2">
              B77 KQH Ngô Quyền, Phường 8, Đà Lạt
            </p>
          </div>
        </div>

        <div className="mt-8 border-t border-gray-200 pt-8">
          <div className="flex flex-col items-center justify-between space-y-4 md:flex-row md:space-y-0">
            <p className="text-sm text-gray-600">
              &copy; {new Date().getFullYear()} BaoBao. Tất cả các quyền được bảo lưu.
            </p>

            <div className="flex space-x-4">
              <Link href="#" className="text-gray-600 hover:text-blue-600">
                Facebook
              </Link>
              <Link href="#" className="text-gray-600 hover:text-blue-600">
                Instagram
              </Link>
              <Link href="#" className="text-gray-600 hover:text-blue-600">
                Youtube
              </Link>
              <Link href="#" className="text-gray-600 hover:text-blue-600">
                Zalo
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
