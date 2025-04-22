"use client";

import { useState } from "react";
import Link from "next/link";
import { Button } from "./ui/button";
import { Car, Menu, X } from "lucide-react";

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="w-full border-b">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        <div className="flex items-center">
          <Link href="/" className="flex items-center text-blue-600">
            <Car className="mr-2 h-8 w-8" />
            <span className="text-2xl font-bold">BaoBao</span>
          </Link>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden space-x-6 md:flex">
          <Link href="/" className="font-medium hover:text-blue-600">
            Trang Chủ
          </Link>
          <Link href="/services" className="font-medium hover:text-blue-600">
            Dịch Vụ
          </Link>
          <Link href="/contact" className="font-medium hover:text-blue-600">
            Liên Hệ
          </Link>
        </nav>

        {/* Desktop Buttons */}
        <div className="hidden items-center space-x-2 md:flex">
          <Button variant="outline">Đăng Nhập</Button>
          <Button>Đăng Ký</Button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="text-gray-600 md:hidden"
          onClick={toggleMenu}
          aria-label={isMenuOpen ? "Đóng menu" : "Mở menu"}
        >
          {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="border-t md:hidden">
          <div className="container mx-auto px-4 py-4">
            <nav className="flex flex-col space-y-4">
              <Link
                href="/"
                className="py-2 font-medium hover:text-blue-600"
                onClick={() => setIsMenuOpen(false)}
              >
                Trang Chủ
              </Link>
              <Link
                href="/services"
                className="py-2 font-medium hover:text-blue-600"
                onClick={() => setIsMenuOpen(false)}
              >
                Dịch Vụ
              </Link>
              <Link
                href="/contact"
                className="py-2 font-medium hover:text-blue-600"
                onClick={() => setIsMenuOpen(false)}
              >
                Liên Hệ
              </Link>
            </nav>

            <div className="mt-6 flex flex-col space-y-4">
              <Button variant="outline" onClick={() => setIsMenuOpen(false)}>Đăng Nhập</Button>
              <Button onClick={() => setIsMenuOpen(false)}>Đăng Ký</Button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
