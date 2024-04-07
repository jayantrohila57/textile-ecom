import { headerData } from "@/data";
import React from "react";
import { Button } from "../ui/button";
import { MoveRight } from "lucide-react";

interface CollectionProps {
  href: string;
  src: string;
  alt: string;
  delay: string;
  title: string;
  description: string;
}
const dummyData = [
  {
    href: "/textile",
    src: "https://images.unsplash.com/photo-1562869929-bda0650edb1f?q=80&w=1784&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    alt: "textile",
    title: "Our Textile",
    delay: "0",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita, ut est asperiores culpa sit laudantium delectus numquam pariatur nostrum beatae.",
  },
  {
    href: "/readymade",
    src: "https://plus.unsplash.com/premium_photo-1683133553448-4484a17fa6d4?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    alt: "readymade",
    title: "Our ReadyMade ",
    delay: "400",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita, ut est asperiores culpa sit laudantium delectus numquam pariatur nostrum beatae.",
  },
  {
    href: "/collection",
    src: "https://plus.unsplash.com/premium_photo-1682437195849-3eb34c86e59a?q=80&w=1824&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    alt: "collections",
    title: "Our Collection",
    delay: "800",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita, ut est asperiores culpa sit laudantium delectus numquam pariatur nostrum beatae.",
  },
];

const CollectionItem: React.FC<CollectionProps> = ({
  href,
  src,
  alt,
  title,
  description,
  delay,
}) => {
  return (
    <Link
      href={href}
      className="w-full col-span-12 hover:scale-95 transition-all duration-300 md:col-span-4 rounded-xl overflow-hidden"
      data-aos="fade-up"
      data-aos-duration="1000"
      data-aos-delay={delay}
    >
      <div className="relative w-full h-full col-span-12 md:col-span-4 group">
        <Image
          src={src}
          alt={alt}
          width={1000}
          height={1000}
          className="w-full h-full object-cover"
        />

        <div className="absolute w-full -bottom-20 h-10 backdrop-blur md:p-8 p-5 flex flex-col items-center justify-center gap-10 group-hover:h-full transition-all duration-300">
          <div className="w-full flex items-center justify-between">
            <h2 className="text-4xl font-bold text-secondary">{title}</h2>
            <MoveRight className="h-10 w-10 text-primary bg-secondary p-1 rounded-full" />
          </div>
          <div className="w-full ">
            <p className="text-xl text-secondary text-start z-0">
              {description}
            </p>
          </div>
        </div>
      </div>
    </Link>
  );
};

function Category() {
  return (
    <div className="w-full flex flex-col justify-center items-center md:gap-14 gap-10 px-2 md:px-20 md:mt-10 mt-5 overflow-hidden ">
      <div className="flex flex-col items-center justify-center gap-3 w-full">
        <h2 className="md:text-4xl text-2xl font-bold capitalize">
          Select Your Type Of Garments
        </h2>
        <p className="text-center text-sm md:text-base capitalize">
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
};

export default Category;

// import Image from "next/image";
// import Link from "next/link";
// import React from "react";

// const collections = [
//   {
//     id: 1,
//     name: "Textile Fabric",
//     src: "https://img.freepik.com/free-photo/multi-color-fabric-texture-samples_1373-434.jpg?w=900",
//     alt: "textile-fabric-texture-samples",
//     link: "/textile",
//   },
//   {
//     id: 2,
//     name: "Readymade",
//     src: "https://img.freepik.com/premium-photo/man-is-modeling-suit-with-clothes-rack-him_746565-22007.jpg?w=360",
//     alt: "",
//     link: "",
//   },
//   {
//     id: 3,
//     name: "Top Wear",
//     src: "https://img.freepik.com/premium-photo/free-young-men-baby-fashion-posing-winter-dress-shirt-pants-elegant-generative-ai_627719-8758.jpg?w=740",
//     alt: "",
//     link: "",
//   },
//   {
//     id: 4,
//     name: "Bottom Wear",
//     src: "https://imgs.search.brave.com/O1hAHNgtbb_lh2FzBcUrYYMjQ8aOHlLFbdXNTcLJMt4/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9pbWcz/Lmp1bmFyb2FkLmNv/bS91aXByb2R1Y3Rz/LzE5OTE0Mjc5L3pv/b21fMC0xNjg1MjU4/NjM5LmpwZw",
//     alt: "",
//     link: "",
//   },
//   {
//     id: 5,
//     name: "Blazers",
//     src: "https://img.freepik.com/free-psd/realistic-suit-illustration_23-2151236762.jpg?w=740",
//     alt: "",
//     link: "",
//   },
//   {
//     id: 6,
//     name: "Textile",
//     src: "https://img.freepik.com/free-photo/line-hanging-textured-fabrics-different-colors-shades_181624-5610.jpg?w=740",
//     alt: "textured-fabrics-shades",
//     link: "/textile",
//   },
// ];

// function Category() {
//   return (
//     <div className="w-full flex flex-col justify-center items-center md:gap-14 gap-10 px-2 md:px-16 md:mt-10 mt-5">
//       <div className="flex flex-col items-center justify-center gap-3 w-full">
//         <h2 className="md:text-4xl text-2xl font-bold">Featured Collections</h2>
//         <p className="text-center text-sm md:text-base">
//           Top New Collections With CSK Explore Now
//         </p>
//       </div>

//       <div className="grid h-[80vh] w-full grid-cols-12 grid-row-12 gap-2 p-2">
//         <div className="col-span-4 row-span-4 flex h-full w-full items-center justify-center bg-gray-500 text-3xl font-bold text-white rounded-xl">
//           1
//         </div>
//         <div className="col-span-4 row-span-8 flex h-full w-full items-center justify-center bg-gray-500 text-3xl font-bold text-white rounded-xl">
//           2
//         </div>
//         <div className="col-span-4 row-span-4 flex h-full w-full items-center justify-center bg-gray-500 text-3xl font-bold text-white rounded-xl">
//           3
//         </div>
//         <div className="col-span-4 row-span-8 flex h-full w-full items-center justify-center bg-gray-500 text-3xl font-bold text-white rounded-xl">
//           4
//         </div>
//         <div className="col-span-4 row-span-8 flex h-full w-full items-center justify-center bg-gray-500 text-3xl font-bold text-white rounded-xl">
//           5
//         </div>
//         <div className="col-span-4 flex row-span-4 h-full w-full items-center justify-center bg-gray-500 text-3xl font-bold text-white rounded-xl">
//           6
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Category;
