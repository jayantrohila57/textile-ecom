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

const video = {
  src: "https://media.istockphoto.com/id/610895504/video/man-chooses-a-shirt-at-store.mp4?s=mp4-640x640-is&k=20&c=HJipiYv_0UIj6JlPw11PU4kAkjys8JkI6QikfADHK4E=",
};

function TextileVideo() {
  return (
    <div className="w-full md:gap-14 gap-10 px-2 md:px-20 md:mt-10 mt-5">
      <div className="w-full my-10 text-center">
        <h2
          className="md:text-4xl text-2xl font-bold"
          data-aos="fade-up"
          data-aos-duration="1000"
        >
          Contact Us
        </h2>
      </div>
      <Card className="w-full flex flex-col md:flex-row items-center justify-between gap-5 md:gap-10 border-none">
        <CardHeader className="w-full flex items-center justify-center p-0">
          <video
            src={video.src}
            controls
            autoPlay={true}
            className="w-full  rounded  object-cover"
            data-aos="fade-right"
            data-aos-duration="1000"
          />
        </CardHeader>
        <CardFooter className="w-full flex flex-col items-start justify-start gap-10 md:px-20">
          <div className="w-full flex flex-col items-start justify-start gap-5">
            <CardTitle
              className="md:text-4xl text-2xl font-bold"
              data-aos="fade-left"
              data-aos-duration="1000"
            >
              CSK Shop For Everyone
            </CardTitle>
            <CardDescription data-aos="fade-left" data-aos-duration="1000">
              Lorem ipsum dolor sit amet, consectetur adipisicing <br /> elit.
              Ratione sint, repellat ullam nesciunt <br /> reiciendis velit?
              Sunt voluptas <br />
              minus eligendi cupiditate?
            </CardDescription>
          </div>
          <CardContent
            className=" p-0 flex items-center justify-center rounded gap-3"
            data-aos="fade-left"
            data-aos-duration="1000"
          >
            <Mail className="w-14 h-14 stroke-primary" />
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
