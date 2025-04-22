import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { notFound } from "next/navigation";

// Mock car data (in a real app, this would come from a database or API)
const cars = [
  {
    id: "1",
    name: "Toyota Camry 2.5Q 2024",
    brand: "Toyota",
    year: "2024",
    price: "850.000.000 VNĐ",
    engine: "2.5L, 4 xi-lanh",
    transmission: "Tự động 8 cấp",
    fuel: "Xăng",
    mileage: "0 km",
    imageUrl: "https://images.unsplash.com/photo-1580273916550-e323be2ae537?q=80&w=2064&auto=format&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1580273916550-e323be2ae537?q=80&w=2064&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1542362567-b07e54358753?q=80&w=2070&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1543465077-db45d34b88a5?q=80&w=2065&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?q=80&w=2070&auto=format&fit=crop"
    ],
    description: "Toyota Camry 2.5Q 2024 là một chiếc sedan hạng D sang trọng, được trang bị động cơ 2.5L mạnh mẽ cùng hộp số tự động 8 cấp mượt mà. Xe sở hữu nhiều tính năng an toàn tiên tiến như Toyota Safety Sense, hệ thống cảnh báo điểm mù, cảnh báo phương tiện cắt ngang phía sau."
  },
  {
    id: "2",
    name: "Honda Civic RS 2023",
    brand: "Honda",
    year: "2023",
    price: "650.000.000 VNĐ",
    engine: "1.5L, VTEC Turbo",
    transmission: "Tự động vô cấp CVT",
    fuel: "Xăng",
    mileage: "0 km",
    imageUrl: "https://cdn.honda.co.za/main-03/general/civic-rs/Civic_Gallery_Large2c_2023-11-20-193903_jgza.jpg",
    images: [
      "https://cdn.honda.co.za/main-03/general/civic-rs/Civic_Gallery_Large2c_2023-11-20-193903_jgza.jpg",
      "https://cdn.honda.co.za/main-03/general/civic-rs/thumbnail/Civic_Gallery_Thumb1c_2023-11-20-193903_vrew.jpg",
      "https://cdn.honda.co.za/main-03/general/civic-rs/thumbnail/Civic_Gallery_Thumb8c_2023-11-20-193908_ssvu.jpg",
      "https://cdn.honda.co.za/main-03/general/civic-rs/thumbnail/Civic_Gallery_Thumb2c_2023-11-20-193904_yqen.jpg"
    ],
    description: "Honda Civic RS 2023 là phiên bản thể thao của dòng sedan hạng C của Honda. Xe được trang bị động cơ 1.5L VTEC Turbo mạnh mẽ kết hợp với hộp số vô cấp CVT, mang đến cảm giác lái phấn khích. Civic RS sở hữu thiết kế thể thao với lưới tản nhiệt màu đen bóng, mâm xe 18 inch và cánh gió sau thể thao."
  },
  {
    id: "3",
    name: "Ford Ranger Wildtrak 2024",
    brand: "Ford",
    year: "2024",
    price: "999.000.000 VNĐ",
    engine: "2.0L Bi-Turbo Diesel",
    transmission: "Tự động 10 cấp",
    fuel: "Dầu",
    mileage: "0 km",
    imageUrl: "https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?q=80&w=2070&auto=format&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?q=80&w=2070&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1501066927591-314112b5888e?q=80&w=2070&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1583121274602-3e2820c69888?q=80&w=2070&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1669216033372-18509e8903bd?q=80&w=2070&auto=format&fit=crop"
    ],
    description: "Ford Ranger Wildtrak 2024 là phiên bản cao cấp nhất của dòng bán tải Ford Ranger. Xe được trang bị động cơ 2.0L Bi-Turbo Diesel mạnh mẽ kết hợp với hộp số tự động 10 cấp, mang đến khả năng vận hành mạnh mẽ trên mọi địa hình. Wildtrak sở hữu nhiều tính năng cao cấp như hệ thống trợ lái ADAS, hệ thống giải trí SYNC 4 với màn hình cảm ứng 12 inch và hệ thống âm thanh Bang & Olufsen 10 loa."
  },
  {
    id: "4",
    name: "VinFast VF8 2023",
    brand: "VinFast",
    year: "2023",
    price: "1.059.000.000 VNĐ",
    engine: "Điện, công suất 300kW",
    transmission: "Hộp số tự động 1 cấp",
    fuel: "Điện",
    mileage: "0 km",
    imageUrl: "https://images.unsplash.com/photo-1549399542-7e3f8b79c341?q=80&w=2071&auto=format&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1549399542-7e3f8b79c341?q=80&w=2071&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1549399542-7e3f8b79c341?q=80&w=2071&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1549399542-7e3f8b79c341?q=80&w=2071&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1549399542-7e3f8b79c341?q=80&w=2071&auto=format&fit=crop"
    ],
    description: "VinFast VF8 2023 là mẫu SUV điện 5 chỗ của thương hiệu VinFast, sở hữu thiết kế hiện đại với nhiều công nghệ tiên tiến. Xe có phạm vi hoạt động lên đến 400km sau mỗi lần sạc đầy, động cơ điện công suất 300kW cho khả năng tăng tốc từ 0-100km/h trong 5.9 giây. VF8 được trang bị nhiều tính năng thông minh như hỗ trợ lái tự động cấp độ 2, màn hình cảm ứng trung tâm 15.6 inch và hệ thống trợ lý ảo thông minh."
  },
  {
    id: "5",
    name: "Mercedes-Benz C300 AMG 2023",
    brand: "Mercedes-Benz",
    year: "2023",
    price: "2.399.000.000 VNĐ",
    engine: "2.0L, Turbo, 4 xi-lanh",
    transmission: "Tự động 9 cấp 9G-TRONIC",
    fuel: "Xăng",
    mileage: "0 km",
    imageUrl: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?q=80&w=2070&auto=format&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1503376780353-7e6692767b70?q=80&w=2070&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1503376780353-7e6692767b70?q=80&w=2070&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1503376780353-7e6692767b70?q=80&w=2070&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1503376780353-7e6692767b70?q=80&w=2070&auto=format&fit=crop"
    ],
    description: "Mercedes-Benz C300 AMG 2023 là mẫu sedan hạng sang thể thao với gói ngoại thất AMG Line nổi bật. Xe được trang bị động cơ 2.0L tăng áp cho công suất 255 mã lực và mô-men xoắn 370 Nm, kết hợp cùng hộp số tự động 9 cấp 9G-TRONIC. C300 AMG sở hữu nhiều công nghệ tiên tiến như hệ thống thông tin giải trí MBUX với màn hình cảm ứng 11.9 inch, hệ thống đèn LED MULTIBEAM và gói hỗ trợ lái xe thông minh Driving Assistance Package."
  },
  {
    id: "6",
    name: "BMW X5 xDrive40i 2024",
    brand: "BMW",
    year: "2024",
    price: "3.889.000.000 VNĐ",
    engine: "3.0L, Turbo, 6 xi-lanh thẳng hàng",
    transmission: "Tự động 8 cấp Steptronic",
    fuel: "Xăng",
    mileage: "0 km",
    imageUrl: "https://images.unsplash.com/photo-1556189250-72ba954cfc2b?q=80&w=2070&auto=format&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1556189250-72ba954cfc2b?q=80&w=2070&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1556189250-72ba954cfc2b?q=80&w=2070&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1556189250-72ba954cfc2b?q=80&w=2070&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1556189250-72ba954cfc2b?q=80&w=2070&auto=format&fit=crop"
    ],
    description: "BMW X5 xDrive40i 2024 là mẫu SUV hạng sang cỡ trung với thiết kế mạnh mẽ và sang trọng. Xe được trang bị động cơ 3.0L 6 xi-lanh thẳng hàng tăng áp cho công suất 375 mã lực và mô-men xoắn 520 Nm, kết hợp với hệ thống dẫn động 4 bánh toàn thời gian xDrive. X5 xDrive40i sở hữu nhiều trang bị cao cấp như hệ thống giải trí BMW iDrive 8.0 với màn hình cong kép, hệ thống âm thanh Harman Kardon, điều hòa tự động 4 vùng và gói hỗ trợ lái xe Professional với các tính năng lái bán tự động."
  }
];

export function generateStaticParams() {
  return cars.map((car) => ({
    id: car.id,
  }));
}

export default function CarDetailPage({ params }: { params: { id: string } }) {
  const car = cars.find((c) => c.id === params.id);

  if (!car) {
    notFound();
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <Link href="/" className="mb-8 flex items-center text-blue-600 hover:underline">
        <ArrowLeft className="mr-2 h-4 w-4" />
        Quay lại trang chủ
      </Link>

      <div className="grid gap-8 md:grid-cols-2">
        <div>
          <div className="relative aspect-video w-full overflow-hidden rounded-lg">
            <Image
              src={car.imageUrl}
              alt={car.name}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
              priority
            />
          </div>
          <div className="mt-4 grid grid-cols-4 gap-2">
            {car.images.map((img) => (
              <div key={img} className="relative aspect-video w-full overflow-hidden rounded-lg">
                <Image
                  src={img}
                  alt={`${car.name} - Ảnh phụ`}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 25vw, 12vw"
                />
              </div>
            ))}
          </div>
        </div>

        <div>
          <h1 className="mb-2 text-3xl font-bold">{car.name}</h1>
          <p className="mb-6 text-3xl font-bold text-blue-600">{car.price}</p>

          <div className="mb-6 grid grid-cols-2 gap-4">
            <div className="rounded-lg bg-gray-100 p-4">
              <p className="text-sm text-gray-600">Thương hiệu</p>
              <p className="font-semibold">{car.brand}</p>
            </div>
            <div className="rounded-lg bg-gray-100 p-4">
              <p className="text-sm text-gray-600">Năm sản xuất</p>
              <p className="font-semibold">{car.year}</p>
            </div>
            <div className="rounded-lg bg-gray-100 p-4">
              <p className="text-sm text-gray-600">Động cơ</p>
              <p className="font-semibold">{car.engine}</p>
            </div>
            <div className="rounded-lg bg-gray-100 p-4">
              <p className="text-sm text-gray-600">Hộp số</p>
              <p className="font-semibold">{car.transmission}</p>
            </div>
            <div className="rounded-lg bg-gray-100 p-4">
              <p className="text-sm text-gray-600">Nhiên liệu</p>
              <p className="font-semibold">{car.fuel}</p>
            </div>
            <div className="rounded-lg bg-gray-100 p-4">
              <p className="text-sm text-gray-600">Số km đã đi</p>
              <p className="font-semibold">{car.mileage}</p>
            </div>
          </div>

          <div className="mb-8">
            <h2 className="mb-2 text-xl font-bold">Mô tả</h2>
            <p className="text-gray-700">{car.description}</p>
          </div>

          <div className="flex flex-col space-y-4 sm:flex-row sm:space-x-4 sm:space-y-0">
            <Button className="text-lg" size="lg">
              Mua Ngay
            </Button>
            <Button variant="outline" className="text-lg" size="lg">
              Liên Hệ Tư Vấn
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
