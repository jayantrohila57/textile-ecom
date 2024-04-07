import React from "react";
import { Button } from "../ui/button";
import Image from "next/image";

function HomeAction() {
  return (
    <div className="relative w-full h-screen mx-auto flex flex-col items-center justify-center py-20 gap-5 px-3 md:px-10 mt-10 bg-gradient-to-r from-black/80 via-black/20 to-transparent overflow-hidden ">
      <Image
        src="https://img.freepik.com/premium-photo/young-handsome-businessman-traditional-clothes-shop_449849-19742.jpg?w=1060"
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
