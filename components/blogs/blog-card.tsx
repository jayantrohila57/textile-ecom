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
import { IBlog } from "@/types/interface";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";

export function BlogCard({ data }: { data: IBlog }) {
  return (
    <Card className="group">
      <Link aria-label={data?.blogName} href={`/blog/${data?.slug}`}>
        <CardHeader className="border-b p-0 overflow-hidden">
          <AspectRatio ratio={4 / 2} className="overflow-hidden">
            {data?.image?.length ? (
              <Image
                src={data?.image ?? "/images/product-placeholder.webp"}
                alt={data?.blogName}
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
        <span className="sr-only">{data?.blogName}</span>
      </Link>
      <Link href={`/blog/${data?.slug}`} tabIndex={-1}>
        <CardContent className="space-y-1.5 p-2 h-32">
          <CardTitle className="line-clamp-2 text-sm">
            {data?.blogName}
          </CardTitle>
          <CardDescription className="line-clamp-3 font-bold">
            {data?.description}
          </CardDescription>
        </CardContent>
      </Link>
      <CardFooter className="p-4 pt-1 flex flex-col">
        <div className="flex flex-row justify-start items-center w-full gap-2 pb-2">
          <Avatar className="h-8 w-8">
            <AvatarImage
              src={data?.author?.image}
              alt={data?.author?.authorName}
            />
            <AvatarFallback>
              {data?.author?.authorName?.slice(0, 2).toUpperCase()}
            </AvatarFallback>
          </Avatar>
          <div className="flex flex-col">
            <p className="text-xs">{data?.author?.authorName}</p>
            <p className="text-xs">{data?.createdAt}</p>
          </div>
        </div>
        <div className="flex w-full items-center space-x-2">
          <Button
            aria-label="Add to cart"
            size="sm"
            className="h-8 w-full rounded-sm"
            asChild
          >
            <Link href={`/blog/${data?.slug}`}>Read More</Link>
          </Button>
        </div>
      </CardFooter>
    </Card>
  );
}
