import { Button } from "@/components/ui/button";
import { ChevronLeft } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Layout = async ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <main className="min-h-screen grid grid-cols-12 gap-0 relative">
        <Image
          src="https://images.unsplash.com/photo-1476683874822-744764a2438f?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="farmer image"
          width={1000}
          height={1000}
          className="absolute w-full h-screen object-cover -z-10"
        />
        <div className="col-span-12 md:col-span-6 md:px-20 pt-5 px-5">
          <Link href="/">
            <Button className="group">
              <ChevronLeft className="h-5 w-5 mr-2 transition-all duration-300 group-hover:-translate-x-2" />
              Back to Home
            </Button>
          </Link>
        </div>
        <section className="flex justify-center items-start md:items-center col-span-12 md:col-span-6 h-full w-full">
          {children}
        </section>
      </main>
    </>
  );
};

export default Layout;
