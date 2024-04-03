import React from "react";
import { Card, CardFooter, CardHeader } from "../ui/card";
import Image from "next/image";
import Link from "next/link";

const data = [
  {
    id: 1,
    name: "Trouser",
    image:
      "https://img.freepik.com/premium-photo/young-man-formal-wear-with-crossed-legs-hands-pockets_384104-20.jpg?w=360",
    price: "₹399",
  },
  {
    id: 2,
    name: "Trouser",
    image:
      "https://img.freepik.com/premium-photo/model-wearing-cargo-pants-cargo-trousers_38810-2988.jpg?w=900",
    price: "₹499",
  },
  {
    id: 3,
    name: "Trouser",
    image:
      "https://img.freepik.com/premium-photo/low-section-businessman-standing-against-white-background_1048944-18264552.jpg?w=360",
    price: "₹519",
  },
  {
    id: 4,
    name: "Trouser",
    image:
      "https://img.freepik.com/premium-photo/man-wearing-casual-pant-posing-white-background_970907-6210.jpg?w=360",
    price: "₹529",
  },
  {
    id: 5,
    name: "Shirt",
    image: "https://img.freepik.com/free-photo/man-suit_1303-5853.jpg?w=360",
    price: "₹539",
  },
  {
    id: 6,
    name: "Shirt",
    image:
      "https://img.freepik.com/premium-photo/portrait-young-man-standing-home_1048944-23863658.jpg?w=360",
    price: "₹549",
  },
  {
    id: 7,
    name: "Shirt",
    image:
      "https://img.freepik.com/free-photo/handsome-young-businessman-sunglasses-walking-street-he-holds-hands-pockets_197531-597.jpg?w=360",
    price: "₹559",
  },
  {
    id: 8,
    name: "Shirt",
    image:
      "https://img.freepik.com/free-photo/fashion-portrait-young-caucasian-man-handsome-model-casual-clothes-posing-studio-attractive-male_158538-13547.jpg?w=360",
    price: "₹569",
  },
  {
    id: 9,
    name: "Shirt",
    image:
      "https://img.freepik.com/premium-photo/style-everyday-mens-casual-shirt-photoshoot-poses-boys-shirt_463958-103.jpg?w=826",
    price: "₹579",
  },
  {
    id: 10,
    name: "Shirt",
    image:
      "https://img.freepik.com/premium-photo/young-man-shorts-white-shirt-is-smiling-standing-near-wall-with-glasses_136403-6406.jpg?w=360",
    price: "₹589",
  },
];

function HomeReadymade() {
  return (
    <div className="w-full flex flex-col justify-center items-center md:gap-14 gap-10 px-2 md:px-6 md:mt-10 mt-5">
      <div className="w-full flex flex-col items-center justify-center gap-5">
        <h2
          className="md:text-4xl text-2xl  font-bold"
          data-aos="fade-up"
          data-aos-duration="1000"
        >
          --- Men Fashion ---
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
          {data.map(({ id, image, name, price }, index) => (
            <Card className="rounded-xl" key={index + id}>
              <CardHeader className="p-0">
                <Link
                  href="#"
                  className="group relative mb-2 block h-80 overflow-hidden rounded-xl bg-gray-100 lg:mb-3"
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

              <CardFooter className="w-full flex items-center justify-between p-3">
                <h3 className="font-bold  lg:text-lg">{name}</h3>
                <span className="font-bold text-gray-500 lg:text-lg">
                  {price}
                </span>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}

export default HomeReadymade;
