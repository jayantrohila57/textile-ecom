"use client";

import * as React from "react";
import Image from "next/image";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { PlaceholderImage } from "../ui/placeholder-image";


export function ProductImageCarousel({
  images,
  className,
}: {
  images: string[];
  className: string;
}) {
  const [selectedIndex, setSelectedIndex] = React.useState(images[0]);

  if (images?.length === 0) {
    return <PlaceholderImage />;
  }

  return (
    <div
      aria-label="Product image carousel"
      className={cn("grid grid-cols-12 gap-2 h-[80vh]", className)}
    >
      <div className="col-span-3 flex justify-end items-center">
        {images && images?.length > 1 ? (
          <div className="flex w-full flex-col items-center justify-center gap-2">
            {images && images?.map((image: string, i: number) => (
              <Button
                key={i}
                variant="outline"
                size="icon"
                className={cn(
                  "group relative aspect-square size-full max-w-[100px] rounded-none shadow-sm hover:bg-transparent focus-visible:ring-foreground",
                  image === selectedIndex && "ring-1 ring-foreground"
                )}
                onClick={() => setSelectedIndex(image)}
              >
                <div className="absolute inset-0 z-10 bg-zinc-950/20 group-hover:bg-zinc-950/40" />
                <Image
                  src={image}
                  alt={image}
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  fill
                />
                <span className="sr-only">
                  Slide {i + 1} of {images?.length}
                </span>
              </Button>
            ))}
          </div>
        ) : null}
      </div>

      <div className="overflow-hidden col-span-9 h-auto">
        <div className="w-full flex flex-col">
          {images && images?.map((image: string, index: number) => (
            <div
              className="relative aspect-square min-w-0 flex-[0_0_100%] pl-4"
              key={index}
            >
              <Image
                aria-label={`Slide ${index + 1} of ${images?.length}`}
                role="group"
                key={index}
                aria-roledescription="slide"
                src={selectedIndex}
                alt={image}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                className="object-cover"
                priority={index === 0}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
