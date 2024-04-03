import * as React from "react";

import { Card, CardContent, CardHeader } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Image from "next/image";
import { Button } from "../ui/button";
import { ArrowRightIcon } from "lucide-react";

function HomeFullCarousal() {
  return (
    <div className="mx-auto max-w-screen-2xl w-full mt-10">
      <Carousel>
        <CarouselContent>
          <CarouselItem className="h-screen relative  w-full ">
            <Image
              src="https://images.unsplash.com/photo-1659767151200-f2543af40c44?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              fill
              alt="hero image"
              className="absolute inset-0 h-full w-full object-cover object-center"
            />

            <div className="relative flex flex-col items-start justify-center  w-full h-full bg-gradient-to-r from-black/80 via-black/20 to-transparent ">
              <div className=" p-5 sm:p-14 md:p-20 max-w-3xl flex justify-start items-start text-left flex-col">
                <h2 className="mb-8 text-left drop-shadow-lg text-3xl font-black text-white sm:text-5xl md:mb-8 md:text-5xl">
                  Fully optimized & customizable shop samples, visually bold
                  design & beautiful effects
                </h2>
                <p className="text-white/90 drop-shadow-lg font-light text-lg sm:text-xl md:text-2xl">
                  Whether you’re planning a fabulous wedding, preparing for a
                  new baby, creating that special gift, or making that
                  one-of-a-kind party dress, you’ll find everything you need to
                  make your dreams a reality right here.
                </p>
              </div>
            </div>
          </CarouselItem>
          <CarouselItem className="h-screen relative  w-full ">
            <Image
              src="https://images.unsplash.com/photo-1608841802877-d37c913623e2?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              fill
              alt="hero image"
              className="absolute inset-0 h-full w-full object-cover object-center"
            />

            <div className="relative flex flex-col items-start justify-center  w-full h-full bg-gradient-to-r from-black/80 via-black/20 to-transparent ">
              <div className=" p-5 sm:p-14 md:p-20 max-w-3xl flex justify-start items-start text-left flex-col">
                <h2 className="mb-8 text-left drop-shadow-lg text-3xl font-black text-white sm:text-5xl md:mb-8 md:text-5xl">
                  Fully optimized & customizable shop samples, visually bold
                  design & beautiful effects
                </h2>
                <p className="text-white/90 drop-shadow-lg font-light text-lg sm:text-xl md:text-2xl">
                  Whether you’re planning a fabulous wedding, preparing for a
                  new baby, creating that special gift, or making that
                  one-of-a-kind party dress, you’ll find everything you need to
                  make your dreams a reality right here.
                </p>
              </div>
            </div>
          </CarouselItem>
        </CarouselContent>
        <div className="px-0 md:px-0 py-5 md:pt-10 flex justify-center">
          <div className="relative md:w-32 w-24">
            <CarouselPrevious className="bg-primary text-secondary left-0" />
            <CarouselNext className="bg-primary text-secondary right-0" />
          </div>
        </div>
      </Carousel>
    </div>
  );
}

export default HomeFullCarousal;
