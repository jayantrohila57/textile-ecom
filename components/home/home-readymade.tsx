import React from "react";
import { Card, CardFooter, CardHeader } from "../ui/card";
import Image from "next/image";
import Link from "next/link";
import LikeDislike from "./likeDislike";
import { Button } from "../ui/button";

const data = [
  {
    id: 1,
    name: "Man Trouser",
    title: "Businessman wear formal pent",
    image:
      "https://img.freepik.com/premium-photo/businessman-carrying-briefcase_13339-60742.jpg?w=360",
    price: "₹399",
    rating: 4.3,
    delay: "0",
  },
  {
    id: 2,
    name: "Man Shirt",
    title: "Slim formal men's shirt",
    image:
      "https://plus.unsplash.com/premium_photo-1689977968861-9c91dbb16049?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    price: "₹499",
    rating: 4.3,
    delay: "400",
  },
  {
    id: 3,
    name: "Man Trouser",
    title: "A man wearing casual pant",
    image:
      "https://img.freepik.com/premium-photo/man-wearing-casual-pant-posing-white-background_970907-6210.jpg?w=360",
    price: "₹519",
    rating: 4.3,
    delay: "800",
  },
  {
    id: 4,
    name: "Man Shirt",
    title: "Slim-cut formal men's shirt",
    image:
      "https://images.unsplash.com/photo-1535931737580-a99567967ddc?q=80&w=1780&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    price: "₹529",
    rating: 4.3,
    delay: "1200",
  },
];

function HomeReadymade() {
  return (
    <div className="w-full flex flex-col justify-center items-center md:gap-14 gap-10 px-2 md:px-20 md:mt-10 mt-5 overflow-hidden ">
      <div className="w-full flex flex-col items-center justify-center gap-5">
        <h2
          className="md:text-4xl text-2xl  font-bold"
          data-aos="fade-up"
          data-aos-duration="1000"
        >
          Men ReadyMade Styles
        </h2>
        <p
          className="text-center text-sm md:text-base"
          data-aos="fade-up"
          data-aos-duration="1000"
        >
          New Arrivals - Best Sellers - Sale Items
        </p>
      </div>
      <div className="w-full">
        <div className="grid gap-x-4 gap-y-8 sm:grid-cols-2 md:gap-x-6 lg:grid-cols-3 xl:grid-cols-4">
          {data.map(
            ({ id, image, name, price, title, rating, delay }, index) => (
              <Card
                className="rounded-xl relative"
                key={index + id}
                data-aos="fade-left"
                data-aos-duration="1000"
                data-aos-delay={delay}
              >
                <CardHeader className="p-0 h-72">
                  <Link
                    href="#"
                    className="group relative block h-72 overflow-hidden rounded-xl bg-gray-100"
                  >
                    <Image
                      src={image}
                      width={500}
                      height={600}
                      loading="lazy"
                      alt={name}
                      className="h-full w-full object-cover object-center transition duration-200 group-hover:scale-110"
                    />
                  </Link>
                </CardHeader>

                <LikeDislike />

                <CardFooter className="w-full flex flex-col items-center justify-between p-0 pb-1">
                  <div className="w-full flex items-center justify-between p-1">
                    <div className="flex flex-col items-start justify-start">
                      <h3 className="font-bold text-gray-700  lg:text-lg">
                        {name}
                      </h3>
                      <p className="text-gray-700 text-sm">{title}</p>
                    </div>
                    <div className="flex flex-col items-end justify-end gap-1">
                      <span className="font-bold text-gray-700 lg:text-lg">
                        {price}
                      </span>
                      <span className="font-bold text-gray-700 text-sm">
                        ⭐{rating}
                      </span>
                    </div>
                  </div>
                  <div className="w-full flex items-center justify-between p-1">
                    <Button variant={"outline"}>Add to Cart</Button>
                    <Button>But Now</Button>
                  </div>
                </CardFooter>
              </Card>
            )
          )}
        </div>
      </div>
    </div>
  );
}

export default HomeReadymade;
