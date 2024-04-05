import Image from "next/image";
import Link from "next/link";
import React from "react";

const collections = [
  {
    id: 1,
    name: "Textile Fabric",
    src: "https://img.freepik.com/free-photo/multi-color-fabric-texture-samples_1373-434.jpg?w=900",
    alt: "textile-fabric-texture-samples",
    link: "/textile",
  },
  {
    id: 2,
    name: "Readymade",
    src: "https://img.freepik.com/premium-photo/man-is-modeling-suit-with-clothes-rack-him_746565-22007.jpg?w=360",
    alt: "",
    link: "",
  },
  {
    id: 3,
    name: "Top Wear",
    src: "https://img.freepik.com/premium-photo/free-young-men-baby-fashion-posing-winter-dress-shirt-pants-elegant-generative-ai_627719-8758.jpg?w=740",
    alt: "",
    link: "",
  },
  {
    id: 4,
    name: "Bottom Wear",
    src: "https://imgs.search.brave.com/O1hAHNgtbb_lh2FzBcUrYYMjQ8aOHlLFbdXNTcLJMt4/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9pbWcz/Lmp1bmFyb2FkLmNv/bS91aXByb2R1Y3Rz/LzE5OTE0Mjc5L3pv/b21fMC0xNjg1MjU4/NjM5LmpwZw",
    alt: "",
    link: "",
  },
  {
    id: 5,
    name: "Blazers",
    src: "https://img.freepik.com/free-psd/realistic-suit-illustration_23-2151236762.jpg?w=740",
    alt: "",
    link: "",
  },
  {
    id: 6,
    name: "Textile",
    src: "https://img.freepik.com/free-photo/line-hanging-textured-fabrics-different-colors-shades_181624-5610.jpg?w=740",
    alt: "textured-fabrics-shades",
    link: "/textile",
  },
];

function Category() {
  return (
    <div className="w-full flex flex-col justify-center items-center md:gap-14 gap-10 px-2 md:px-16 md:mt-10 mt-5">
      <div className="flex flex-col items-center justify-center gap-3 w-full">
        <h2 className="md:text-4xl text-2xl font-bold">Featured Collections</h2>
        <p className="text-center text-sm md:text-base">
          Top New Collections With CSK Explore Now
        </p>
      </div>

      <div className="w-full grid md:grid-cols-9 grid-cols-1 grid-rows-1 md:grid-rows-3 border">
        {collections && (
          <Link href={collections[0].link}  className="w-full md:col-span-3 col-span-1 bg-red-500">
            <div>
              <Image
                src={collections[0].src}
                alt={collections[0].alt}
                width={500}
                height={400}
                className="w-full h-full object-cover"
              />
            </div>
          </Link>
        )}
        {collections && (
          <Link href={collections[1].link} className="w-full md:col-span-3">
            <div className="">
              <Image
                src={collections[1].src}
                alt={collections[1].alt}
                width={500}
                height={400}
              />
            </div>
          </Link>
        )}
        {collections && (
          <Link href={collections[2].link} className="w-full md:col-span-3">
            <div className="">
              <Image
                src={collections[2].src}
                alt={collections[2].alt}
                width={500}
                height={400}
              />
            </div>
          </Link>
        )}
        {collections && (
          <Link href={collections[3].link} className="w-full md:col-span-3">
            <div className="">
              <Image
                src={collections[3].src}
                alt={collections[3].alt}
                width={500}
                height={400}
              />
            </div>
          </Link>
        )}
        {collections && (
          <Link href={collections[4].link} className="w-full md:col-span-3">
            <div className="">
              <Image
                src={collections[4].src}
                alt={collections[4].alt}
                width={500}
                height={400}
              />
            </div>
          </Link>
        )}
        {collections && (
          <Link href={collections[5].link} className="w-full md:col-span-3">
            <div className="">
              <Image
                src={collections[5].src}
                alt={collections[5].alt}
                width={500}
                height={400}
              />
            </div>
          </Link>
        )}
      </div>
    </div>
  );
}

export default Category;
