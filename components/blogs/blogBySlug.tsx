import { IBlog } from "@/types/interface";
import Image from "next/image";
import { FaArrowLeft, FaClock } from "react-icons/fa";
import { Button } from "../ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import Link from "next/link";

function BlogBySlug({ data }: { data: IBlog }) {
  return (
    <div className="mx-auto max-w-screen-2xl px-4 md:px-8 pt-4 md:pt-10">
      <div className="flex flex-col items-center justify-center gap-2 mx-auto max-w-screen-md">
        <div className="flex flex-col items-start justify-start gap-3 px-10 py-5">
          <p className="text-xs sm:text-sm flex gap-2 items-center">
            <FaClock />
            {data?.createdAt}
          </p>
          <div className="flex items-center justify-start gap-3 w-full">
            <Avatar className="h-10 w-10">
              <AvatarImage
                src={data?.author?.image}
                alt={data?.author?.authorName}
              />
              <AvatarFallback>
                {data?.author?.authorName?.slice(0, 2).toUpperCase()}
              </AvatarFallback>
            </Avatar>
            <p className="text-xl">{data?.author?.authorName}</p>
          </div>
          <h1 className="text-2xl sm:text-4xl font-semibold">
            {data?.blogName}
          </h1>
          <p className="text-xl">{data?.description}</p>
        </div>
        <div className="w-full">
          <Image alt="" src={data?.image} width={1000} height={1000} />
        </div>
        <div className="flex flex-col items-start justify-start gap-6 p-10 w-full">
          <h1 className="text-2xl sm:text-4xl font-semibold">Introduction</h1>
          <p className="text-xl">
            In today&#39;s digital era, establishing a robust online presence
            isn&#39;t just a luxury; it&#39;s a requisite for businesses of all
            sizes. However, navigating the dynamic realm of digital marketing
            can be a complex journey. This is where the beacon of a full-service
            digital agency shines.
          </p>
          <h1 className="text-2xl sm:text-4xl font-semibold">
            What Defines a Full-Service Digital Agency?
          </h1>
          <p className="text-xl">
            In today&#39;s digital era, establishing a robust online presence
            isn&#39;t just a luxury; it&#39;s a requisite for businesses of all
            sizes. However, navigating the dynamic realm of digital marketing
            can be a complex journey. This is where the beacon of a full-service
            digital agency shines.
          </p>
        </div>
        <div className="w-full text-left px-10">
          <Link href="/blog">
            <Button className="group">
              <FaArrowLeft className="h-5 w-5 mr-2 transition-all duration-300 group-hover:-translate-x-2" />
              Back to Blog{" "}
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default BlogBySlug;
