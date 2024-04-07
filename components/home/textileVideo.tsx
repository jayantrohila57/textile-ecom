import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../ui/card";
import { Mail } from "lucide-react";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import Image from "next/image";

function TextileVideo() {
  return (
    <div className="w- h-[80vh] flex items-center justify-center md:gap-14 gap-10 px-2 md:px-20 md:mt-10 mt-5 overflow-hidden ">
      <Card className="w-full h-full flex flex-col md:flex-row items-center justify-between gap-5 md:gap-10 border-2 overflow-hidden gradientColor">
        <CardHeader className="w-full h-full flex items-center justify-center p-0 bg-red-700">
          <Image
            src={
              "https://plus.unsplash.com/premium_photo-1661432963180-11f554ff1ced?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            }
            alt=""
            width={1000}
            height={1000}
            className="w-full h-full object-cover"
          />
        </CardHeader>
        <CardFooter className="w-full flex flex-col items-start justify-start gap-10 md:px-20">
          <div className="w-full flex flex-col items-start justify-start gap-5">
            <CardTitle
              className="md:text-5xl text-2xl font-bold text-secondary"
              data-aos="fade-left"
              data-aos-duration="1000"
            >
              CSK Shop For Everyone
            </CardTitle>
            <CardDescription
              data-aos="fade-left"
              data-aos-duration="1000"
              className="text-secondary text-xl"
            >
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ratione
              sint, repellat ullam nesciunt reiciendis velit? Sunt voluptas
              minus eligendi cupiditate?
            </CardDescription>
          </div>
          <CardContent
            className=" p-0 flex items-center justify-center rounded gap-3"
            data-aos="fade-left"
            data-aos-duration="1000"
          >
            <Mail className="w-14 h-14 stroke-secondary" />
            <Input
              placeholder="Enter your Email & Join Us"
              className="w-full h-full outline-none border-none"
            />
            <Button>Subscribe</Button>
          </CardContent>
        </CardFooter>
      </Card>
    </div>
  );
}

export default TextileVideo;
