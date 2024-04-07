import React from "react";
import { Card, CardFooter, CardHeader } from "../ui/card";
import Image from "next/image";
import Link from "next/link";
import LikeDislike from "./likeDislike";
import { Button } from "../ui/button";

const data = [
  {
    id: 1,
    name: "Man 3P Suit",
    title: "Party Wear",
    image:
      "https://plus.unsplash.com/premium_photo-1661328065408-c6738b9a66b1?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    price: "₹1399",
    rating: 5.0,
  },
  {
    id: 2,
    name: "Man 3P Suit",
    title: "Party Wear",
    image:
      "https://plus.unsplash.com/premium_photo-1664297814064-661d433c03d9?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    price: "₹499",
    rating: 4.6,
  },
  {
    id: 3,
    name: "Man Blazer",
    title: "Office Wear",
    image:
      "https://plus.unsplash.com/premium_photo-1661326286990-fcf770fcb4a7?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    price: "₹519",
    rating: 4.0,
  },
  {
    id: 4,
    name: "Man Shirt",
    title: "Daily Wear",
    image:
      "https://images.unsplash.com/photo-1579038773867-044c48829161?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    price: "₹529",
    rating: 3.3,
  },
];

function HomeCollection() {
  return (
    <div className="w-full flex flex-col justify-center items-center md:gap-14 gap-10 px-2 md:px-20 md:mt-10 mt-5 overflow-hidden ">
      <div className="w-full flex flex-col items-center justify-center gap-5">
        <h2
          className="md:text-4xl text-2xl  font-bold"
          data-aos="fade-up"
          data-aos-duration="1000"
        >
          Men Collection Styles
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
          {data.map(({ id, image, name, price, title, rating }, index) => (
            <Card
              className="rounded-xl relative"
              key={index + id}
              data-aos="fade-right"
              data-aos-duration="1000"
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
          ))}
        </div>
      </div>
    </div>
  );
}

export default HomeCollection;
