import Link from "next/link";
import { Button } from "@/components/ui/button";
import LayoutWithNavigation from "../../layout-with-navigation";

export default function ContactThanksPage() {
  return (
    <LayoutWithNavigation>
      <div className="container mx-auto px-4 py-16">
        <div className="flex flex-col items-center justify-center text-center max-w-2xl mx-auto">
          <div className="bg-green-100 text-green-800 p-4 rounded-full mb-6">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
          </div>

          <h1 className="text-3xl font-bold mb-4">Cảm ơn bạn đã liên hệ!</h1>

          <p className="text-lg text-gray-600 mb-8">
            Chúng tôi đã nhận được thông tin của bạn. Nhân viên tư vấn của BaoBao sẽ liên hệ với bạn trong thời gian sớm nhất.
          </p>

          <div className="space-y-4">
            <Link href="/">
              <Button className="mr-4">Về Trang Chủ</Button>
            </Link>

            <Link href="/services">
              <Button variant="outline">Xem Dịch Vụ</Button>
            </Link>
          </div>
        </div>
      </div>
    </LayoutWithNavigation>
  );
}
