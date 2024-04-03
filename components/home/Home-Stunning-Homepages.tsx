import React from "react";
import { Card, CardFooter, CardHeader, CardTitle } from "../ui/card";
import Image from "next/image";
import Link from "next/link";

function HomeStunningHomepages() {
  return (
    <div className="w-full flex flex-col justify-center items-center md:gap-20 gap-10 px-3 md:px-10">
      <div className="md:w-1/2 w-full mx-auto flex flex-col items-center justify-center gap-5">
        <h2
          className="md:text-4xl text-2xl  font-bold"
          data-aos="fade-up"
          data-aos-duration="1000"
        >
          --- Trending Deals! ---
        </h2>
        <p
          className="text-center text-sm md:text-base"
          data-aos="fade-up"
          data-aos-duration="1000"
        >
          New Arrivals - Best Sellers - Sale Items
        </p>
      </div>
      <div className="mx-auto max-w-screen-2xl px-4 md:px-8">
        <div className="grid gap-x-4 gap-y-8 sm:grid-cols-2 md:gap-x-6 lg:grid-cols-3 xl:grid-cols-3">
          <Card className="rounded-xl">
            <CardHeader className="p-0">
              <Link
                href="#"
                className="group relative mb-2 block h-80 overflow-hidden rounded-xl bg-gray-100 lg:mb-3"
              >
                <Image
                  src="https://images.unsplash.com/photo-1572187076010-85d894e06d82?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  width={500}
                  height={600}
                  loading="lazy"
                  alt="Photo by Rachit Tank"
                  className="h-full w-full object-cover object-center transition duration-200 group-hover:scale-110"
                />
              </Link>
            </CardHeader>

            <CardFooter className="w-full flex items-center justify-between p-3">
              <h3 className="font-bold  lg:text-lg">Textile Cloths</h3>
              <span className="font-bold text-gray-500 lg:text-lg">$15.00</span>
            </CardFooter>
          </Card>
          <Card className="rounded-xl">
            <CardHeader className="p-0">
              <Link
                href="#"
                className="group relative mb-2 block h-80 overflow-hidden rounded-xl bg-gray-100 lg:mb-3"
              >
                <Image
                  src="https://images.unsplash.com/photo-1641642231157-0849081598a2?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  width={500}
                  height={600}
                  loading="lazy"
                  alt="Photo by Rachit Tank"
                  className="h-full w-full object-cover object-center transition duration-200 group-hover:scale-110"
                />
              </Link>
            </CardHeader>

            <CardFooter className="w-full flex items-center justify-between p-3">
              <h3 className="font-bold  lg:text-lg">Textile Cloths</h3>
              <span className="font-bold text-gray-500 lg:text-lg">$15.00</span>
            </CardFooter>
          </Card>
          <Card className="rounded-xl">
            <CardHeader className="p-0">
              <Link
                href="#"
                className="group relative mb-2 block h-80 overflow-hidden rounded-xl bg-gray-100 lg:mb-3"
              >
                <Image
                  src="https://plus.unsplash.com/premium_photo-1661508448683-81d467eb3ee3?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  width={500}
                  height={600}
                  loading="lazy"
                  alt="Photo by Rachit Tank"
                  className="h-full w-full object-cover object-center transition duration-200 group-hover:scale-110"
                />
              </Link>
            </CardHeader>

            <CardFooter className="w-full flex items-center justify-between p-3">
              <h3 className="font-bold  lg:text-lg">Textile Cloths</h3>
              <span className="font-bold text-gray-500 lg:text-lg">$15.00</span>
            </CardFooter>
          </Card>
          <Card className="rounded-xl">
            <CardHeader className="p-0">
              <Link
                href="#"
                className="group relative mb-2 block h-80 overflow-hidden rounded-xl bg-gray-100 lg:mb-3"
              >
                <Image
                  src="https://images.unsplash.com/photo-1602706294170-1fed8eecd9f9?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  width={500}
                  height={600}
                  loading="lazy"
                  alt="Photo by Rachit Tank"
                  className="h-full w-full object-cover object-center transition duration-200 group-hover:scale-110"
                />
              </Link>
            </CardHeader>

            <CardFooter className="w-full flex items-center justify-between p-3">
              <h3 className="font-bold  lg:text-lg">Textile Cloths</h3>
              <span className="font-bold text-gray-500 lg:text-lg">$15.00</span>
            </CardFooter>
          </Card>
          <Card className="rounded-xl">
            <CardHeader className="p-0">
              <Link
                href="#"
                className="group relative mb-2 block h-80 overflow-hidden rounded-xl bg-gray-100 lg:mb-3"
              >
                <Image
                  src="https://images.unsplash.com/photo-1630920501459-f3e99320c4a5?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  width={500}
                  height={600}
                  loading="lazy"
                  alt="Photo by Rachit Tank"
                  className="h-full w-full object-cover object-center transition duration-200 group-hover:scale-110"
                />
              </Link>
            </CardHeader>

            <CardFooter className="w-full flex items-center justify-between p-3">
              <h3 className="font-bold  lg:text-lg">Textile Cloths</h3>
              <span className="font-bold text-gray-500 lg:text-lg">$15.00</span>
            </CardFooter>
          </Card>
          <Card className="rounded-xl">
            <CardHeader className="p-0">
              <Link
                href="#"
                className="group relative mb-2 block h-80 overflow-hidden rounded-xl bg-gray-100 lg:mb-3"
              >
                <Image
                  src="https://images.unsplash.com/photo-1601056639638-c53c50e13ead?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  width={500}
                  height={600}
                  loading="lazy"
                  alt="Photo by Rachit Tank"
                  className="h-full w-full object-cover object-center transition duration-200 group-hover:scale-110"
                />
              </Link>
            </CardHeader>

            <CardFooter className="w-full flex items-center justify-between p-3">
              <h3 className="font-bold  lg:text-lg">Textile Cloths</h3>
              <span className="font-bold text-gray-500 lg:text-lg">$15.00</span>
            </CardFooter>
          </Card>
          <Card className="rounded-xl">
            <CardHeader className="p-0">
              <Link
                href="#"
                className="group relative mb-2 block h-80 overflow-hidden rounded-xl bg-gray-100 lg:mb-3"
              >
                <Image
                  src="https://images.unsplash.com/photo-1561578428-c59823044e25?q=80&w=1888&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  width={500}
                  height={600}
                  loading="lazy"
                  alt="Photo by Rachit Tank"
                  className="h-full w-full object-cover object-center transition duration-200 group-hover:scale-110"
                />
              </Link>
            </CardHeader>

            <CardFooter className="w-full flex items-center justify-between p-3">
              <h3 className="font-bold  lg:text-lg">Textile Cloths</h3>
              <span className="font-bold text-gray-500 lg:text-lg">$15.00</span>
            </CardFooter>
          </Card>
          <Card className="rounded-xl">
            <CardHeader className="p-0">
              <Link
                href="#"
                className="group relative mb-2 block h-80 overflow-hidden rounded-xl bg-gray-100 lg:mb-3"
              >
                <Image
                  src="https://images.unsplash.com/photo-1562869929-bda0650edb1f?q=80&w=1784&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  width={500}
                  height={600}
                  loading="lazy"
                  alt="Photo by Rachit Tank"
                  className="h-full w-full object-cover object-center transition duration-200 group-hover:scale-110"
                />
              </Link>
            </CardHeader>

            <CardFooter className="w-full flex items-center justify-between p-3">
              <h3 className="font-bold  lg:text-lg">Textile Cloths</h3>
              <span className="font-bold text-gray-500 lg:text-lg">$15.00</span>
            </CardFooter>
          </Card>
        </div>
      </div>
    </div>
  );
}

export default HomeStunningHomepages;
