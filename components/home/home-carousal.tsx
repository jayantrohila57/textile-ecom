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

function HomeCarousal() {
  return (
    <div className="w-full mt-5 md:mt-10">
      <div className="md:py-10 py-5">
        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          className="w-full"
        >
          <CarouselContent>
            <CarouselItem className="md:basis-1/3 lg:basis-1/3 cursor-pointer">
              <Card className="rounded-xl">
                <CardHeader className="p-0 overflow-hidden rounded-xl h-96 w-full">
                  <Image
                    alt="image"
                    src="https://images.unsplash.com/photo-1612797748239-a83ed306dcfc?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    width={1600}
                    height={900}
                    className="w-full h-full object-cover rounded-xl hover:scale-110 duration-300 transition-all"
                  />
                </CardHeader>
              </Card>
            </CarouselItem>
            <CarouselItem className="md:basis-1/3 lg:basis-1/3 cursor-pointer">
              <Card
                className="rounded-xl"
                data-aos="zoom-in"
                data-aos-duration="1000"
              >
                <CardHeader className="p-0 overflow-hidden rounded-xl h-96 w-full">
                  <Image
                    alt="image"
                    src="https://images.unsplash.com/photo-1614676459401-34413f54cc73?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    width={1600}
                    height={900}
                    className="w-full h-full object-cover rounded-xl hover:scale-110 duration-300 transition-all"
                  />
                </CardHeader>
              </Card>
            </CarouselItem>
            <CarouselItem className="md:basis-1/3 lg:basis-1/3 cursor-pointer">
              <Card
                className="rounded-xl"
                data-aos="zoom-in"
                data-aos-duration="1000"
              >
                <CardHeader className="p-0 overflow-hidden rounded-xl h-96 w-full">
                  <Image
                    alt="image"
                    src="https://images.unsplash.com/photo-1609175086681-28a822dfd86b?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    width={1600}
                    height={900}
                    className="w-full h-full object-cover rounded-xl hover:scale-110 duration-300 transition-all"
                  />
                </CardHeader>
              </Card>
            </CarouselItem>
            <CarouselItem className="md:basis-1/3 lg:basis-1/3 cursor-pointer">
              <Card
                className="rounded-xl"
                data-aos="zoom-in"
                data-aos-duration="1000"
              >
                <CardHeader className="p-0 overflow-hidden rounded-xl h-96 w-full">
                  <Image
                    alt="image"
                    src="https://images.unsplash.com/photo-1632469188022-b5db09a70fbc?q=80&w=1957&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    width={1600}
                    height={900}
                    className="w-full h-full object-cover rounded-xl hover:scale-110 duration-300 transition-all"
                  />
                </CardHeader>
              </Card>
            </CarouselItem>
            <CarouselItem className="md:basis-1/3 lg:basis-1/3 cursor-pointer">
              <Card
                className="rounded-xl"
                data-aos="zoom-in"
                data-aos-duration="1000"
              >
                <CardHeader className="p-0 overflow-hidden rounded-xl h-96 w-full">
                  <Image
                    alt="image"
                    src="https://images.unsplash.com/photo-1614676471928-2ed0ad1061a4?q=80&w=1941&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    width={1600}
                    height={900}
                    className="w-full h-full object-cover rounded-xl hover:scale-110 duration-300 transition-all"
                  />
                </CardHeader>
              </Card>
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
    </div>
  );
}

export default HomeCarousal;
