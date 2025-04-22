import { Button } from "@/components/ui/button";
import Link from "next/link";
import LayoutWithNavigation from "../layout-with-navigation";

export default function ServicesPage() {
  return (
    <LayoutWithNavigation>
      <div className="container mx-auto px-4 py-16">
        <h1 className="mb-12 text-center text-4xl font-bold">Dịch Vụ</h1>

        <div className="grid gap-12 md:grid-cols-1">
          {/* Service 1 */}
          <div className="rounded-lg bg-white p-8 shadow-lg">
            <h2 className="mb-6 text-2xl font-bold text-blue-600">1. Tư vấn & Bán hàng chuyên nghiệp</h2>
            <ul className="space-y-4 text-lg">
              <li className="flex items-start">
                <span className="mr-2 text-blue-600">•</span>
                <span>Cung cấp thông tin chi tiết về từng dòng xe.</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2 text-blue-600">•</span>
                <span>Hướng dẫn khách lựa chọn mẫu xe phù hợp với nhu cầu & tài chính.</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2 text-blue-600">•</span>
                <span>Hỗ trợ đăng ký, đăng kiểm và các thủ tục pháp lý sau khi mua xe.</span>
              </li>
            </ul>
          </div>

          {/* Service 2 */}
          <div className="rounded-lg bg-white p-8 shadow-lg">
            <h2 className="mb-6 text-2xl font-bold text-blue-600">2. Dịch vụ hậu mãi & bảo dưỡng</h2>
            <ul className="space-y-4 text-lg">
              <li className="flex items-start">
                <span className="mr-2 text-blue-600">•</span>
                <span>Bảo hành chính hãng.</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2 text-blue-600">•</span>
                <span>Bảo trì, bảo dưỡng định kỳ.</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2 text-blue-600">•</span>
                <span>Sửa chữa với linh kiện chính hãng.</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2 text-blue-600">•</span>
                <span>Có thể cung cấp dịch vụ rửa xe, kiểm tra nhanh miễn phí cho khách hàng thân thiết.</span>
              </li>
            </ul>
          </div>

          {/* Service 3 */}
          <div className="rounded-lg bg-white p-8 shadow-lg">
            <h2 className="mb-6 text-2xl font-bold text-blue-600">3. Hỗ trợ tài chính & mua xe trả góp</h2>
            <ul className="space-y-4 text-lg">
              <li className="flex items-start">
                <span className="mr-2 text-blue-600">•</span>
                <span>Kết nối ngân hàng để hỗ trợ khách hàng vay mua xe.</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2 text-blue-600">•</span>
                <span>Tư vấn thủ tục nhanh chóng, rõ ràng.</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2 text-blue-600">•</span>
                <span>Hỗ trợ khách hàng tính toán chi phí trả góp và lựa chọn phương án phù hợp.</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </LayoutWithNavigation>
  );
}
