"use client";

import Image from "next/image";
import Link from "next/link";
import { Button } from "./ui/button";
import { Card, CardContent, CardFooter } from "./ui/card";

interface CarCardProps {
  id: string;
  name: string;
  price: string;
  imageUrl: string;
}

export function CarCard({ id, name, price, imageUrl }: CarCardProps) {
  return (
    <Card className="overflow-hidden transition-all hover:shadow-lg">
      <div className="relative aspect-video w-full overflow-hidden">
        <Image
          src={imageUrl}
          alt={name}
          fill
          className="object-cover transition-transform hover:scale-105"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </div>
      <CardContent className="p-4">
        <h3 className="text-lg font-bold">{name}</h3>
        <p className="mt-2 text-xl font-semibold text-blue-600">{price}</p>
      </CardContent>
      <CardFooter className="pb-4 px-4 pt-0">
        <Link href={`/cars/${id}`} className="w-full">
          <Button className="w-full">Xem Chi Tiết</Button>
        </Link>
      </CardFooter>
    </Card>
  );
}
