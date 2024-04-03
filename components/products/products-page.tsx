import { IProduct } from "@/types/interface";
import { ProductCard } from "./product-card";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";

function ProductPage({ data }: { data: IProduct[] }) {
  const start = 0;
  const end = 12;
  const lastId = "";

  const previousStart = Math.max(start - (end - start), 0);
  const previousEnd = Math.max(start, 1);
  const previousLastId = data.length > 0 ? data[0]._id : "";

  const previous = `/products?start=${previousStart}&end=${previousEnd}&lastId=${previousLastId}`;

  const nextStart = end;
  const nextEnd = end + (end - start);
  const nextLastId = data.length > 0 ? data[data.length - 1]._id : "";

  const next = `/products?start=${nextStart}&end=${nextEnd}&lastId=${nextLastId}`;

  const current = `/products?start=${start}&end=${end}&lastId=${lastId}`;

  const currentPageNumber = Math.floor(start / (end - start)) + 1;
  return (
    <section className="p-5 sm:p-14 lg:p-20 lg:py-10 w-full ">
      <div className=" pb-10 text-center flex flex-col justify-center items-center">
        <p className="mb-4 text-left font-light text-lg text-primary sm:text-xl flex flex-row">
          Our Products {"->"}
        </p>
        <h2 className="text-center drop-shadow-lg  mb-2 text-4xl font-bold  sm:text-5xl   md:text-5xl">
          Product Catalogue
        </h2>
        <p className=" max-w-3xl mx-auto drop-shadow-lg font-light text-sm md:text-xl">
          We know that as a plant parent, you care about the health of your
          plants and the environment. That&#39;s why we offer organic
          fertilizers and organic pesticides that are safe and gentle for your
          plants.
        </p>
      </div>
      <div className="grid grid-cols-4 gap-5 py-5">
        {data.map((product, index) => (
          <ProductCard data={product} key={index} />
        ))}
      </div>
      <div className="py-20">
        <Pagination>
          <PaginationContent>
            <PaginationItem>
              <PaginationPrevious href={previous} />
            </PaginationItem>
            <PaginationItem>
              <PaginationLink href={current}>1</PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationEllipsis />
            </PaginationItem>
            <PaginationItem>
              <PaginationNext href={next} />
            </PaginationItem>
          </PaginationContent>
        </Pagination>
      </div>
    </section>
  );
}

export default ProductPage;
