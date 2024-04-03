import Image from "next/image";
import { Button } from "../ui/button";
import { ArrowRightIcon } from "lucide-react";

const Hero = () => {
  return (
    <section className="h-screen relative  w-full ">
      <Image
        src="https://plus.unsplash.com/premium_photo-1689629728966-0d248b5aeda2?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        fill
        alt="hero image"
        className="absolute inset-0 h-full w-full object-cover object-center"
        data-aos="fade-left"
        data-aos-duration="1000"
      />

      <div className="relative flex flex-col items-start justify-center  w-full h-full bg-gradient-to-r from-black/80 via-black/20 to-transparent ">
        <div
          className=" p-5 sm:p-14 md:p-20 max-w-3xl flex justify-start items-start text-left flex-col"
          data-aos="fade-right"
          data-aos-duration="1000"
        >
          <p className="mb-4 text-left font-light text-xl text-white sm:text-xl md:text-2xl md:mb-8">
            Welcome to CSK {"->"}
          </p>
          <h1 className="mb-8 text-left drop-shadow-lg text-4xl font-black text-white sm:text-5xl md:mb-8 md:text-5xl">
            Textiles Fabrics <br />
            <span className="text-primary"> Tennessee&#39;s</span> Largest
            Fashion Fabric Store
          </h1>
          <p className="text-white/90 drop-shadow-lg font-light text-lg sm:text-xl md:text-2xl">
            Whether you’re planning a fabulous wedding, preparing for a new
            baby, creating that special gift, or making that one-of-a-kind party
            dress, you’ll find everything you need to make your dreams a reality
            right here.
          </p>
          <div className="flex w-full flex-col py-10 gap-2.5 sm:flex-row ">
            <Button size={"lg"} className="group">
              Start now{" "}
              <ArrowRightIcon className="h-5 w-5 ml-2 transition-all duration-300 group-hover:translate-x-2" />
            </Button>
            <Button variant={"outline"} size={"lg"} className="group">
              Take tour
              <ArrowRightIcon className="h-5 w-5 ml-2 transition-all duration-300 group-hover:translate-x-2" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
