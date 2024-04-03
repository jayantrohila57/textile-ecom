import React from "react";
import { Button } from "../ui/button";
import Image from "next/image";

function HomeAction() {
  return (
    <div className="relative w-full mx-auto flex flex-col items-center justify-center py-20 gap-5 px-3 md:px-10 mt-10 bg-gradient-to-r from-black/80 via-black/20 to-transparent">
      <Image
        src="https://plus.unsplash.com/premium_photo-1661457911875-118df315d6fb?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        alt="main image"
        width={1000}
        height={1000}
        priority={true}
        className="absolute inset-0 h-full w-full object-center object-cover -z-50"
      />
      <h2
        className="md:text-5xl text-3xl text-center text-white font-bold "
        data-aos="zoom-in"
        data-aos-duration="1000"
      >
        Feeling in love? Purchase Now !
      </h2>
      <p
        className="text-center text-sm text-white md:text-base py-5"
        data-aos="zoom-in"
        data-aos-duration="1000"
      >
        Impressive design, powerful features, and easy customization
      </p>
      <Button>Purchase Now</Button>
    </div>
  );
}

export default HomeAction;
