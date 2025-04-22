import { Banner } from "@/components/banner";
import { CarCard } from "@/components/car-card";
import LayoutWithNavigation from "./layout-with-navigation";

// Mock featured car data
const featuredCars = [
  {
    id: "1",
    name: "Toyota Camry 2.5Q 2024",
    price: "850.000.000 VNĐ",
    imageUrl: "https://images.unsplash.com/photo-1580273916550-e323be2ae537?q=80&w=2064&auto=format&fit=crop"
  },
  {
    id: "2",
    name: "Honda Civic RS 2023",
    price: "650.000.000 VNĐ",
    imageUrl: "https://cdn.honda.co.za/main-03/general/civic-rs/Civic_Gallery_Large2c_2023-11-20-193903_jgza.jpg"
  },
  {
    id: "3",
    name: "Ford Ranger Wildtrak 2024",
    price: "999.000.000 VNĐ",
    imageUrl: "https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?q=80&w=2070&auto=format&fit=crop"
  },
  {
    id: "4",
    name: "VinFast VF8 2023",
    price: "1.059.000.000 VNĐ",
    imageUrl: "https://images.unsplash.com/photo-1549399542-7e3f8b79c341?q=80&w=2071&auto=format&fit=crop"
  },
  {
    id: "5",
    name: "Mercedes-Benz C300 AMG 2023",
    price: "2.399.000.000 VNĐ",
    imageUrl: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?q=80&w=2070&auto=format&fit=crop"
  },
  {
    id: "6",
    name: "BMW X5 xDrive40i 2024",
    price: "3.889.000.000 VNĐ",
    imageUrl: "https://images.unsplash.com/photo-1556189250-72ba954cfc2b?q=80&w=2070&auto=format&fit=crop"
  }
];

export default function Home() {
  return (
    <LayoutWithNavigation>
      <Banner />

      <section className="container mx-auto px-4 py-16">
        <h2 className="mb-12 text-center text-3xl font-bold">Xe Nổi Bật</h2>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {featuredCars.map((car) => (
            <CarCard
              key={car.id}
              id={car.id}
              name={car.name}
              price={car.price}
              imageUrl={car.imageUrl}
            />
          ))}
        </div>
      </section>

      <section className="bg-gray-100 py-16">
        <div className="container mx-auto px-4">
          <h2 className="mb-12 text-center text-3xl font-bold">Tại Sao Chọn BaoBao?</h2>

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            <div className="rounded-lg bg-white p-6 shadow-md">
              <h3 className="mb-4 text-xl font-bold text-blue-600">Chất Lượng Đảm Bảo</h3>
              <p className="text-gray-700">
                Tất cả các xe tại BaoBao đều được kiểm tra kỹ lưỡng và đảm bảo chất lượng trước khi đến tay khách hàng.
              </p>
            </div>

            <div className="rounded-lg bg-white p-6 shadow-md">
              <h3 className="mb-4 text-xl font-bold text-blue-600">Giá Cả Cạnh Tranh</h3>
              <p className="text-gray-700">
                Chúng tôi cam kết mang đến cho khách hàng mức giá tốt nhất thị trường với nhiều ưu đãi hấp dẫn.
              </p>
            </div>

            <div className="rounded-lg bg-white p-6 shadow-md">
              <h3 className="mb-4 text-xl font-bold text-blue-600">Dịch Vụ Hậu Mãi</h3>
              <p className="text-gray-700">
                BaoBao cung cấp dịch vụ hậu mãi chuyên nghiệp, đảm bảo khách hàng luôn hài lòng sau khi mua xe.
              </p>
            </div>
          </div>
        </div>
      </section>
    </LayoutWithNavigation>
  );
}
