import { headerData } from "@/data";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const CategoryPage = ({ cat }: { cat: string }) => {
  // Find the category data based on the provided category
  const categoryData = headerData.find(
    (item) => item?.title?.toLowerCase() === cat?.toLowerCase() || "collection"
  )?.category;

  return (
    <div className="w-full flex flex-col justify-center items-center md:gap-14 gap-10 px-2 md:px-16 md:mt-10 mt-5">
      <div className="flex flex-col items-center justify-center gap-3 w-full">
        <h2 className="md:text-4xl text-2xl capitalize font-bold">
          Featured {cat}
        </h2>
        <p className="text-center text-sm capitalize md:text-base">
          Top New {cat} With CSK Explore Now
        </p>
      </div>

      {/* Map through each category group */}
      {categoryData?.map((categoryGroup) => (
        <div key={categoryGroup.title} className="mb-8 w-full">
          {/* Display the category group title */}
          <h3 className="text-xl font-semibold mb-2">{categoryGroup.title}</h3>
          <div className="grid h-full w-full grid-cols-12 grid-row-12 gap-2 p-2">
            {/* Map through each category within the category group */}
            {categoryGroup.categories.map((category) => (
              <Link
                href={category.link}
                className="col-span-4 row-span-4 flex h-96 w-full items-center justify-center text-3xl font-bold text-white rounded-xl relative overflow-hidden  bg-gradient-to-r from-black/30 via-black/20 to-transparent "
                key={category.title}
              >
                <p className="text-secondary">{category.title}</p>
                <Image
                  src={category.image}
                  alt={category.title}
                  width={500}
                  height={500}
                  className="w-full h-full object-cover absolute -z-50"
                />
              </Link>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default CategoryPage;
