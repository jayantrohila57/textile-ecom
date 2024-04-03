import Image from "next/image";
import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
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
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Check, Clock } from "lucide-react";

const Orders = () => {
  return (
    <section className="col-span-12 md:col-span-8 min-h-screen p-5">
      <h1 className="text-lg font-semibold">Your Orders</h1>
      <Card className="mt-4">
        <CardHeader>
          <Table>
            <TableHeader>
              <TableRow className="border border-gray-400">
                <TableHead className="text-start border border-gray-400">
                  Image
                </TableHead>
                <TableHead className="text-start border border-gray-400">
                  Name
                </TableHead>
                <TableHead className="text-start border border-gray-400">
                  Quantity
                </TableHead>
                <TableHead className="text-start border border-gray-400">
                  Amount
                </TableHead>
                <TableHead className="text-start border border-gray-400">
                  Order date
                </TableHead>
                <TableHead className="text-start border border-gray-400">
                  Status
                </TableHead>
              </TableRow>
            </TableHeader>
            <TableBody className="border border-gray-400">
              <TableRow>
                <TableCell className="font-medium border border-gray-40">
                  <AspectRatio ratio={4 / 4} className="overflow-hidden">
                    <Image
                      src="https://images.unsplash.com/photo-1710866566821-faec7d460f0e?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                      alt="product image"
                      className="object-cover group-hover:scale-110 transition-all duration-300"
                      sizes="(min-width: 1024px) 20vw, (min-width: 768px) 25vw, (min-width: 640px) 33vw, (min-width: 475px) 50vw, 100vw"
                      fill
                      loading="lazy"
                    />
                  </AspectRatio>
                </TableCell>
                <TableCell className="font-medium text-start border border-gray-40">
                  Car
                </TableCell>
                <TableCell className="font-medium text-start border border-gray-40">
                  1
                </TableCell>
                <TableCell className="font-medium text-start border border-gray-40">
                  ₹550
                </TableCell>
                <TableCell className="font-medium text-start border border-gray-40">
                  20-march-2024
                </TableCell>
                <TableCell className="font-medium text-start border border-gray-40">
                  Shipping 🕙
                </TableCell>
              </TableRow>
            </TableBody>
            <TableBody className="border border-gray-400">
              <TableRow>
                <TableCell className="font-medium border border-gray-40">
                  <AspectRatio ratio={4 / 4} className="overflow-hidden">
                    <Image
                      src="https://images.unsplash.com/photo-1710764275022-ede939a1f5e2?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                      alt="product image"
                      className="object-cover group-hover:scale-110 transition-all duration-300"
                      sizes="(min-width: 1024px) 20vw, (min-width: 768px) 25vw, (min-width: 640px) 33vw, (min-width: 475px) 50vw, 100vw"
                      fill
                      loading="lazy"
                    />
                  </AspectRatio>
                </TableCell>
                <TableCell className="font-medium text-start border border-gray-40">
                  Watch
                </TableCell>
                <TableCell className="font-medium text-start border border-gray-40">
                  2
                </TableCell>
                <TableCell className="font-medium text-start border border-gray-40">
                  ₹250
                </TableCell>
                <TableCell className="font-medium text-start border border-gray-40">
                  01-feb-2024
                </TableCell>
                <TableCell className="font-medium text-start border border-gray-40">
                  Delivered ✅
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </CardHeader>
      </Card>
    </section>
  );
};

export default Orders;
