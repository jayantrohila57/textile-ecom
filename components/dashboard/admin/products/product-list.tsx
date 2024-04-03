import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { AddProduct } from "./add-product";

function ProductList() {
  return (
    <main className="flex flex-col gap-4">
      <div className="flex items-center justify-between">
        <h1 className="text-lg font-semibold md:text-xl">All Products</h1>
        <AddProduct />
      </div>
      <div>
        
      </div>
      {/* <Card className="flex flex-col items-center justify-center">
        <CardHeader className="flex flex-col items-center justify-center gap-3">
          <CardTitle>You have no products</CardTitle>
          <CardDescription>
            You can start selling as soon as you add a product.
          </CardDescription>
        </CardHeader>
        <CardFooter className="text-center">
          <AddProduct />
        </CardFooter>
      </Card> */}
    </main>
  );
}

export default ProductList;
