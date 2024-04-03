import BlogPage from "@/components/blogs/blogs-page";
import { getAllBlog } from "@/server/api-sanity";

export const revalidate = 10;

const Page = async () => <BlogPage data={await getAllBlog()} />;

export default Page;
