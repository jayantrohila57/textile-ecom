
import ProductPage from "@/components/products/products-page";
import { getAllProduct } from "@/server/api-sanity";

export const revalidate = 10;

const Page = async ({
  searchParams,
}: {
  searchParams: { [key: string]: string | string[] | undefined };
}) => <ProductPage data={await getAllProduct({ searchParams })} />;

export default Page;
