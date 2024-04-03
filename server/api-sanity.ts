import { client } from "@/config/client";
import { IBlog, IProduct, ISearchParams } from "@/types/interface";
import { blog, blogs, product, products } from "../lib/query";

export const getAllProduct = async ({ searchParams }: ISearchParams) => {
  try {
    const param = {
      start: Number(searchParams.start) || 0,
      end: Number(searchParams.end) || 12,
      lastId: searchParams.lastId || "",
    };
    const data = await client.fetch<IProduct[]>(products, param);
    return data;
  } catch (error) {
    return [];
  }
};

export const getProductBySlug = async (slug: string) => {
  try {
    if (slug) {
      const data = await client.fetch<IProduct>(product, { slug });
      return data;
    }
    return {};
  } catch (error) {
    return {};
  }
};

export const getAllBlog = async () => {
  try {
    const data = await client.fetch<IBlog[]>(blogs);
    return data;
  } catch (error) {
    return [];
  }
};

export const getBlogBySlug = async (slug: string) => {
  try {
    if (slug) {
      const data = await client.fetch<IBlog>(blog, { slug });
      return data;
    }
    return {};
  } catch (error) {
    return {};
  }
};
