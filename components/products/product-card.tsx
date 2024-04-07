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
import { AspectRatio } from "../ui/aspect-ratio";
import { PlaceholderImage } from "../ui/placeholder-image";
import { Button } from "../ui/button";
import { Loader } from "lucide-react";
import { IProduct } from "@/types/interface";


export function ProductCard({ data }: { data: IProduct }) {
  return (
    <Card className="group">
      <Link aria-label={data?.productName} href={`/textile/kurta/${data?.slug}`}>
        <CardHeader className="border-b p-0 overflow-hidden">
          <AspectRatio ratio={4 / 4} className="overflow-hidden">
            {data?.image?.length ? (
              <Image
                src={data?.image ?? "/images/product-placeholder.webp"}
                alt={data?.productName}
                className="object-cover group-hover:scale-110 transition-all duration-300"
                sizes="(min-width: 1024px) 20vw, (min-width: 768px) 25vw, (min-width: 640px) 33vw, (min-width: 475px) 50vw, 100vw"
                fill
                loading="lazy"
              />
            ) : (
              <PlaceholderImage className="rounded-none" asChild />
            )}
          </AspectRatio>
        </CardHeader>
        <span className="sr-only">{data?.productName}</span>
      </Link>
      <Link href={`/products/${data?.slug}`} tabIndex={-1}>
        <CardContent className="space-y-1.5 p-2 h-28">
          <CardTitle className="line-clamp-3 text-sm">
            {data?.productName}
          </CardTitle>
          <CardDescription className="line-clamp-1 font-bold">
            ₹{data?.productRate}
          </CardDescription>
        </CardContent>
      </Link>
      <CardFooter className="p-4 pt-1">
        <div className="flex w-full items-center space-x-2">
          <Button
            aria-label="Add to cart"
            size="sm"
            className="h-8 w-full rounded-sm"
            // disabled={isAddingToCart}
          >
            {/* {isAddingToCart && (
              <Loader className="mr-2 size-4 animate-spin" aria-hidden="true" />
            )} */}
            Add to cart
          </Button>
        </div>
      </CardFooter>
    </Card>
  );
}
