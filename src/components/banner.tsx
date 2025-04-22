"use client";

import { Button } from "./ui/button";
import Link from "next/link";

export function Banner() {
  return (
    <div className="relative overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center z-0"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1494976388531-d1058494cdd8?q=80&w=2070&auto=format&fit=crop')",
          filter: "brightness(0.7)"
        }}
      />
      <div className="relative z-10 flex flex-col items-center justify-center px-4 py-20 text-center text-white md:px-6 md:py-40">
        <h1 className="mb-4 text-3xl font-bold md:text-5xl">
          Tìm chiếc xe mơ ước của bạn với giá tốt nhất!
        </h1>
        <p className="mb-8 max-w-2xl text-lg text-gray-100 md:text-xl">
          BaoBao - Đại lý ô tô chính hãng hàng đầu Việt Nam với đa dạng các dòng xe
        </p>
        <div className="flex flex-col space-y-4 sm:flex-row sm:space-x-4 sm:space-y-0">
          <Link href="/services">
            <Button className="text-lg px-6 py-6" size="lg">
              Khám Phá Dịch Vụ
            </Button>
          </Link>
          <Link href="/contact">
            <Button variant="outline" className="text-lg px-6 py-6 bg-transparent text-white border-white hover:bg-white hover:text-black" size="lg">
              Liên Hệ Ngay
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
