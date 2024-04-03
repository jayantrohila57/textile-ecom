import React from "react";
import { Card, CardFooter, CardHeader } from "../ui/card";
import Image from "next/image";
import Link from "next/link";

const data = [
  {
    id: 1,
    name: "Trouser",
    image:
      "https://images.unsplash.com/photo-1682369164315-6cc2e383f8f1?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    price: "₹399",
  },
  {
    id: 2,
    name: "Trouser",
    image:
      "https://img.freepik.com/free-photo/realistic-scene-with-clothes-neighborhood-yard-sale_23-2151238287.jpg?w=360",
    price: "₹499",
  },
  {
    id: 3,
    name: "Trouser",
    image:
      "https://img.freepik.com/free-photo/portrait-young-male-tailor-working-his-workshop_23-2148180377.jpg?w=360&t=st=1712147707~exp=1712148307~hmac=fb09fd722824f6cfec8cfb09e79b84d961b2fed88a2f1686fe672a52923d4707",
    price: "₹519",
  },
  {
    id: 4,
    name: "Trouser",
    image:
      "https://img.freepik.com/free-photo/male-fashion-designer-holding-coat-with-his-customer-sitting-chair-shop_23-2148180341.jpg?w=360&t=st=1712147729~exp=1712148329~hmac=18fd4826788632583b0afc23e6a56e9f89c1525162db2d710e23473e444c57ba",
    price: "₹529",
  },
  {
    id: 5,
    name: "Shirt",
    image:
      "https://img.freepik.com/free-photo/close-up-flannel-shirt-detail_23-2149575310.jpg?w=360&t=st=1712147745~exp=1712148345~hmac=2707c346f26d575ab65fdd9034d93efa1497eef5106a4af43e56647223b5b663",
    price: "₹539",
  },
  {
    id: 6,
    name: "Shirt",
    image:
      "https://img.freepik.com/premium-photo/fabric-wallpaper-texture-background_830327-8227.jpg?w=900",
    price: "₹549",
  },
  {
    id: 7,
    name: "Shirt",
    image:
      "https://img.freepik.com/premium-photo/cloth-hangers-with-shirts-closeup-photo-men-shirts-hangers_263512-5753.jpg?w=900",
    price: "₹559",
  },
  {
    id: 8,
    name: "Shirt",
    image:
      "https://img.freepik.com/premium-photo/row-rolled-up-cloths-row_771335-57337.jpg?w=1380",
    price: "₹569",
  },
  {
    id: 9,
    name: "Shirt",
    image:
      "https://img.freepik.com/premium-photo/jeans-fabric_926199-15632.jpg?w=360",
    price: "₹579",
  },
  {
    id: 10,
    name: "Shirt",
    image:
      "https://img.freepik.com/premium-photo/stack-colorful-fabric_771335-57341.jpg?w=900",
    price: "₹589",
  },
];

function HomeTextile() {
  return (
    <div className="w-full flex flex-col justify-center items-center md:gap-14 gap-10 px-2 md:px-6 md:mt-10 mt-5">
      <div className="w-full flex flex-col items-center justify-center gap-5">
        <h2
          className="md:text-4xl text-2xl  font-bold"
          data-aos="fade-up"
          data-aos-duration="1000"
        >
          --- Textile Fashion ---
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
            <Card
              className="rounded-xl"
              key={index + id}
              data-aos="zoom-out-right"
              data-aos-duration="1000"
            >
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

export default HomeTextile;
