import { ICart } from "@/types/interface";
import { ShoppingCart, Trash } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Button } from "../ui/button";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { AspectRatio } from "../ui/aspect-ratio";
import CartItemQuantity from "./cart-quantity";

function CartItems({ data }: { data: ICart }) {
  return (
    <div className="col-span-12 md:col-span-8">
      <Card>
        <CardHeader>
          <CardTitle>Your Cart</CardTitle>
          <CardDescription>
            Safe and Secure Payments.Easy returns.100% Authentic products.
          </CardDescription>
        </CardHeader>
        <CardContent>
          {data?.products?.length > 0 ? (
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead className="text-start">Image</TableHead>
                  <TableHead className="text-start">Name</TableHead>
                  <TableHead className="text-start">Quantity</TableHead>
                  <TableHead className="text-start">Amount</TableHead>
                  <TableHead className="text-right">Action</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {data &&
                  data.products?.map(
                    ({ image, productName, productRate, slug, _id }) => (
                      <TableRow key={slug}>
                        <TableCell className="font-medium">
                          <AspectRatio
                            ratio={4 / 4}
                            className="overflow-hidden"
                          >
                            <Image
                              src={image ?? "/images/product-placeholder.webp"}
                              alt={productName}
                              className="object-cover group-hover:scale-110 transition-all duration-300"
                              sizes="(min-width: 1024px) 20vw, (min-width: 768px) 25vw, (min-width: 640px) 33vw, (min-width: 475px) 50vw, 100vw"
                              fill
                              loading="lazy"
                            />
                          </AspectRatio>
                        </TableCell>
                        <TableCell className="font-medium text-start">
                          {productName}
                        </TableCell>
                        <TableCell className="font-medium text-start">
                          <CartItemQuantity
                            quantity={
                              [
                                ...data.quantity.filter(
                                  ({ productId, quantity }) =>
                                    productId == _id && quantity
                                ),
                              ][0].quantity
                            }
                          />
                        </TableCell>
                        <TableCell className="font-medium text-start">
                          ₹{productRate}
                        </TableCell>
                        <TableCell className="text-right">
                          <Button variant={"destructive"} size={"icon"}>
                            <Trash className="h-4 w-4" />
                          </Button>
                        </TableCell>
                      </TableRow>
                    )
                  )}
              </TableBody>
            </Table>
          ) : (
            <div className="mb-6 flex flex-col gap-4 sm:mb-8 md:gap-6 border bg-secondary h-[65vh] items-center justify-center">
              <ShoppingCart className="h-20 w-20 text-primary" />
              <h2 className="text-2xl">Your cart is Empty</h2>
              <Button asChild>
                <Link href="/products">Go to Products</Link>
              </Button>
            </div>
          )}
        </CardContent>
        <CardFooter>
          <p>Need help? Visit the Help Center or Contact Us</p>
        </CardFooter>
      </Card>
    </div>
  );
}

export default CartItems;
