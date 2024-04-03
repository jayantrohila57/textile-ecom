import BlogBySlug from "@/components/blogs/blogBySlug";
import { getBlogBySlug } from "@/server/api-sanity";
import { IBlog, IParams } from "@/types/interface";

export const revalidate = 10;

const Page = async ({ params }: IParams) => (
  <BlogBySlug data={(await getBlogBySlug(params.slug)) as IBlog} />
);

export default Page;
