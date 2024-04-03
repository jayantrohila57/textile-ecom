import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { IProduct } from "@/types/interface";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { PlaceholderImage } from "@/components/ui/placeholder-image";
import { Button } from "@/components/ui/button";
import { Heart } from "lucide-react";
import { FaHeart } from "react-icons/fa";

function Wishlist() {
  return (
    <section className="min-h-screen md:p-5 p-2">
      <div className="w-full flex items-center justify-between">
        <h2 className="text-lg font-semibold">Your Wishlist</h2>
        <span>3 Items</span>
      </div>
      <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-3 mt-4">
        <Card className="group">
          <CardHeader className="p-2">
            <AspectRatio ratio={4 / 4} className="overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1710866566821-faec7d460f0e?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="product image"
                width={500}
                height={500}
                className="w-full h-full rounded-lg object-cover object-center group-hover:scale-105 transition-all duration-300"
              />
            </AspectRatio>
          </CardHeader>
          <CardContent className="p-2 flex items-center justify-between w-full">
            <CardTitle className="text-lg font-semibold">
              Electric Car
            </CardTitle>
            <FaHeart className="text-red-500 h-5 w-5 hover:scale-110 transition-all duration-300 cursor-pointer" />
          </CardContent>
          <CardFooter className="p-2 flex items-center justify-between">
            <span>It is a powerful car</span>
            <span>₹ 3,000,00</span>
          </CardFooter>
          <Button className="w-full">Add to Cart</Button>
        </Card>
        <Card className="group">
          <CardHeader className="p-2">
            <AspectRatio ratio={4 / 4} className="overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1710866566821-faec7d460f0e?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="product image"
                width={500}
                height={500}
                className="w-full h-full rounded-lg object-cover object-center group-hover:scale-105 transition-all duration-300"
              />
            </AspectRatio>
          </CardHeader>
          <CardContent className="p-2 flex items-center justify-between w-full">
            <CardTitle className="text-lg font-semibold">
              Electric Car
            </CardTitle>
            <FaHeart className="text-red-500 h-5 w-5 hover:scale-110 transition-all duration-300 cursor-pointer" />
          </CardContent>
          <CardFooter className="p-2 flex items-center justify-between">
            <span>It is a powerful car</span>
            <span>₹ 3,000,00</span>
          </CardFooter>
          <Button className="w-full">Add to Cart</Button>
        </Card>
        <Card className="group">
          <CardHeader className="p-2">
            <AspectRatio ratio={4 / 4} className="overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1710866566821-faec7d460f0e?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="product image"
                width={500}
                height={500}
                className="w-full h-full rounded-lg object-cover object-center group-hover:scale-105 transition-all duration-300"
              />
            </AspectRatio>
          </CardHeader>
          <CardContent className="p-2 flex items-center justify-between w-full">
            <CardTitle className="text-lg font-semibold">
              Electric Car
            </CardTitle>
            <FaHeart className="text-red-500 h-5 w-5 hover:scale-110 transition-all duration-300 cursor-pointer" />
          </CardContent>
          <CardFooter className="p-2 flex items-center justify-between">
            <span>It is a powerful car</span>
            <span>₹ 3,000,00</span>
          </CardFooter>
          <Button className="w-full">Add to Cart</Button>
        </Card>
        <Card className="group">
          <CardHeader className="p-2">
            <AspectRatio ratio={4 / 4} className="overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1710866566821-faec7d460f0e?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="product image"
                width={500}
                height={500}
                className="w-full h-full rounded-lg object-cover object-center group-hover:scale-105 transition-all duration-300"
              />
            </AspectRatio>
          </CardHeader>
          <CardContent className="p-2 flex items-center justify-between w-full">
            <CardTitle className="text-lg font-semibold">
              Electric Car
            </CardTitle>
            <FaHeart className="text-red-500 h-5 w-5 hover:scale-110 transition-all duration-300 cursor-pointer" />
          </CardContent>
          <CardFooter className="p-2 flex items-center justify-between">
            <span>It is a powerful car</span>
            <span>₹ 3,000,00</span>
          </CardFooter>
          <Button className="w-full">Add to Cart</Button>
        </Card>
        <Card className="group">
          <CardHeader className="p-2">
            <AspectRatio ratio={4 / 4} className="overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1710866566821-faec7d460f0e?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="product image"
                width={500}
                height={500}
                className="w-full h-full rounded-lg object-cover object-center group-hover:scale-105 transition-all duration-300"
              />
            </AspectRatio>
          </CardHeader>
          <CardContent className="p-2 flex items-center justify-between w-full">
            <CardTitle className="text-lg font-semibold">
              Electric Car
            </CardTitle>
            <FaHeart className="text-red-500 h-5 w-5 hover:scale-110 transition-all duration-300 cursor-pointer" />
          </CardContent>
          <CardFooter className="p-2 flex items-center justify-between">
            <span>It is a powerful car</span>
            <span>₹ 3,000,00</span>
          </CardFooter>
          <Button className="w-full">Add to Cart</Button>
        </Card>
        <Card className="group">
          <CardHeader className="p-2">
            <AspectRatio ratio={4 / 4} className="overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1710866566821-faec7d460f0e?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="product image"
                width={500}
                height={500}
                className="w-full h-full rounded-lg object-cover object-center group-hover:scale-105 transition-all duration-300"
              />
            </AspectRatio>
          </CardHeader>
          <CardContent className="p-2 flex items-center justify-between w-full">
            <CardTitle className="text-lg font-semibold">
              Electric Car
            </CardTitle>
            <FaHeart className="text-red-500 h-5 w-5 hover:scale-110 transition-all duration-300 cursor-pointer" />
          </CardContent>
          <CardFooter className="p-2 flex items-center justify-between">
            <span>It is a powerful car</span>
            <span>₹ 3,000,00</span>
          </CardFooter>
          <Button className="w-full">Add to Cart</Button>
        </Card>
        <Card className="group">
          <CardHeader className="p-2">
            <AspectRatio ratio={4 / 4} className="overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1710866566821-faec7d460f0e?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="product image"
                width={500}
                height={500}
                className="w-full h-full rounded-lg object-cover object-center group-hover:scale-105 transition-all duration-300"
              />
            </AspectRatio>
          </CardHeader>
          <CardContent className="p-2 flex items-center justify-between w-full">
            <CardTitle className="text-lg font-semibold">
              Electric Car
            </CardTitle>
            <FaHeart className="text-red-500 h-5 w-5 hover:scale-110 transition-all duration-300 cursor-pointer" />
          </CardContent>
          <CardFooter className="p-2 flex items-center justify-between">
            <span>It is a powerful car</span>
            <span>₹ 3,000,00</span>
          </CardFooter>
          <Button className="w-full">Add to Cart</Button>
        </Card>
        <Card className="group">
          <CardHeader className="p-2">
            <AspectRatio ratio={4 / 4} className="overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1710866566821-faec7d460f0e?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="product image"
                width={500}
                height={500}
                className="w-full h-full rounded-lg object-cover object-center group-hover:scale-105 transition-all duration-300"
              />
            </AspectRatio>
          </CardHeader>
          <CardContent className="p-2 flex items-center justify-between w-full">
            <CardTitle className="text-lg font-semibold">
              Electric Car
            </CardTitle>
            <FaHeart className="text-red-500 h-5 w-5 hover:scale-110 transition-all duration-300 cursor-pointer" />
          </CardContent>
          <CardFooter className="p-2 flex items-center justify-between">
            <span>It is a powerful car</span>
            <span>₹ 3,000,00</span>
          </CardFooter>
          <Button className="w-full">Add to Cart</Button>
        </Card>
        <Card className="group">
          <CardHeader className="p-2">
            <AspectRatio ratio={4 / 4} className="overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1710866566821-faec7d460f0e?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="product image"
                width={500}
                height={500}
                className="w-full h-full rounded-lg object-cover object-center group-hover:scale-105 transition-all duration-300"
              />
            </AspectRatio>
          </CardHeader>
          <CardContent className="p-2 flex items-center justify-between w-full">
            <CardTitle className="text-lg font-semibold">
              Electric Car
            </CardTitle>
            <FaHeart className="text-red-500 h-5 w-5 hover:scale-110 transition-all duration-300 cursor-pointer" />
          </CardContent>
          <CardFooter className="p-2 flex items-center justify-between">
            <span>It is a powerful car</span>
            <span>₹ 3,000,00</span>
          </CardFooter>
          <Button className="w-full">Add to Cart</Button>
        </Card>
        <Card className="group">
          <CardHeader className="p-2">
            <AspectRatio ratio={4 / 4} className="overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1710866566821-faec7d460f0e?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="product image"
                width={500}
                height={500}
                className="w-full h-full rounded-lg object-cover object-center group-hover:scale-105 transition-all duration-300"
              />
            </AspectRatio>
          </CardHeader>
          <CardContent className="p-2 flex items-center justify-between w-full">
            <CardTitle className="text-lg font-semibold">
              Electric Car
            </CardTitle>
            <FaHeart className="text-red-500 h-5 w-5 hover:scale-110 transition-all duration-300 cursor-pointer" />
          </CardContent>
          <CardFooter className="p-2 flex items-center justify-between">
            <span>It is a powerful car</span>
            <span>₹ 3,000,00</span>
          </CardFooter>
          <Button className="w-full">Add to Cart</Button>
        </Card>
      </div>
    </section>
  );
}

export default Wishlist;
