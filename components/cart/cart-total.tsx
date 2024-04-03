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
import { CreditCard } from "lucide-react";
import { ICart } from "@/types/interface";

function CartTotal({ data }: { data: ICart }) {
  return (
    <Card className="col-span-12 md:col-span-4">
      <CardHeader>
        <CardTitle>Price Details</CardTitle>
        <CardDescription>
          Shipping charge will be included Separately{" "}
        </CardDescription>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="w-full">Name</TableHead>
              <TableHead className="w-full text-center">Quantity</TableHead>
              <TableHead className="text-right">Amount</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {data &&
              data?.quantity?.map(({ productName, productRate, quantity }) => (
                <TableRow key={productName + productRate}>
                  <TableCell className="font-medium">{productName}</TableCell>
                  <TableCell className="font-medium text-center">{quantity}</TableCell>
                  <TableCell className="text-right">₹{productRate}</TableCell>
                </TableRow>
              ))}
          </TableBody>
        </Table>
        {data?.products == null && (
          <p className="w-full p-2 text-left">0 items</p>
        )}
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="text-right">Grand Total</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            <TableRow>
              <TableCell className="text-right font-bold text-2xl">
                ₹{(data && data?.totalAmount) || "00.00"}
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </CardContent>
      <CardFooter>
        <Button className="w-full" size={"lg"}>
          <CreditCard className="h-6 w-6 mr-2" />
          Pay Now
        </Button>
      </CardFooter>
    </Card>
  );
}

export default CartTotal;
