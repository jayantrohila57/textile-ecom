import CategoryPage from "@/components/category/categoryPage";

const Page = async ({ params }: any) => <CategoryPage cat={params.cat} />;

export default Page;
