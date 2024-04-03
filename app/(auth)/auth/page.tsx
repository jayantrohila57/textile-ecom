"use client";

import { usePathname } from "next/navigation";

export default function AuthPage() {
  const pathname = usePathname();
  return (
    <p className="h-screen flex justify-center items-center w-full">
      Current pathname: {pathname}
    </p>
  );
}
