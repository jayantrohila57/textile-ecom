import ProductBySlug from "@/components/products/product-page";
import { getProductBySlug } from "@/server/api-sanity";
import { IParams, IProduct } from "@/types/interface";

export const revalidate = 10;

const Page = async ({ params }: IParams) => (
  <ProductBySlug data={(await getProductBySlug(params.slug)) as IProduct} />
);

export default Page;
