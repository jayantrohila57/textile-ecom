import Image from "next/image";
import Link from "next/link";
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
            <MoveRight className="h-10 w-10 text-primary bg-secondary p-1 rounded-full group-hover:rotate-[360deg] transition-all duration-1000" />
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
      <div className="w-full grid  grid-cols-12 gap-5 h-[80vh] overflow-hidden">
        {dummyData.map(({ alt, description, href, src, title, delay }) => (
          <CollectionItem
            key={href}
            href={href}
            src={src}
            alt={alt}
            title={title}
            description={description}
            delay={delay}
          />
        ))}
      </div>
    </div>
  );
}

export default Category;
