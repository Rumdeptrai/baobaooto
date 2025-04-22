"use client";

import LayoutWithNavigation from "../../layout-with-navigation";

export default function CarDetailLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <LayoutWithNavigation>{children}</LayoutWithNavigation>;
}
