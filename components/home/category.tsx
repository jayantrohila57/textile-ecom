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

      <div className="grid h-[80vh] w-full grid-cols-12 grid-row-12 gap-2 p-2">
        <div className="col-span-4 row-span-4 flex h-full w-full items-center justify-center bg-gray-500 text-3xl font-bold text-white rounded-xl">
          1
        </div>
        <div className="col-span-4 row-span-8 flex h-full w-full items-center justify-center bg-gray-500 text-3xl font-bold text-white rounded-xl">
          2
        </div>
        <div className="col-span-4 row-span-4 flex h-full w-full items-center justify-center bg-gray-500 text-3xl font-bold text-white rounded-xl">
          3
        </div>
        <div className="col-span-4 row-span-8 flex h-full w-full items-center justify-center bg-gray-500 text-3xl font-bold text-white rounded-xl">
          4
        </div>
        <div className="col-span-4 row-span-8 flex h-full w-full items-center justify-center bg-gray-500 text-3xl font-bold text-white rounded-xl">
          5
        </div>
        <div className="col-span-4 flex row-span-4 h-full w-full items-center justify-center bg-gray-500 text-3xl font-bold text-white rounded-xl">
          6
        </div>
      </div>
    </div>
  );
}

export default Category;
