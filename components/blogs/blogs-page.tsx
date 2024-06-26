import { IBlog } from "@/types/interface";
import { BlogCard } from "./blog-card";

function BlogPage({ data }: { data: IBlog[] }) {
  return (
    <div className=" py-6 sm:py-8 lg:py-12">
      <div className="mx-auto max-w-screen-2xl px-4 md:px-8">
        <div className="mb-10 md:mb-16">
          <h2 className="mb-4 text-center text-2xl font-bold text-gray-600 md:mb-6 lg:text-3xl">
            Blog
          </h2>
          <p className="mx-auto max-w-screen-md text-center text-gray-500 md:text-lg">
            This is a section of some simple filler text, also known as
            placeholder text. It shares some characteristics of a real written
            text but is random or otherwise generated.
          </p>
        </div>

        <div className="grid grid-cols-3 gap-5 py-5">
          {data?.map((blog, index) => (
            <BlogCard data={blog} key={index} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default BlogPage;
