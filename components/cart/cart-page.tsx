import React from "react";
import CartTotal from "./cart-total";
import CartItems from "./cart-items";
import { ICart } from "@/types/interface";

const data: ICart = {
  products: [
    {
      _id: "18723y487y835t",
      productName: "Sample Product 1",
      productBrand: "Sample Brand",
      productRate: 29.99,
      image:
        "https://images.unsplash.com/photo-1709983723739-d72ea88434dd?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      images: [],
      productSize: ["Small", "Medium", "Large"],
      shippingTime: "2-3 business days",
      slug: "sample-product-1",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
    {
      _id: "18723y487y835t79873",
      productName: "Sample Product 2",
      productBrand: "Sample Brand",
      productRate: 39.99,
      image:
        "https://images.unsplash.com/photo-1709983723739-d72ea88434dd?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      images: [],
      productSize: ["Medium", "Large"],
      shippingTime: "3-5 business days",
      slug: "sample-product-2",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
  ],
  totalAmount: 99.97,
  totalItems: 3,
  taxAmount: 6.998,
  couponDiscount: 5,
  discount: 0,
  deliveryCharge: 10,
  quantity: [
    {
      productId:"18723y487y835t",
      productName:"Sample Product 1",
      productRate: 29.99*2,
      quantity: 4,
    },
    {
      productId:"18723y487y835t79873",
      productName:"Sample Product 2",
      productRate: 39.99,
      quantity: 2,
    },
  ],
};

function CartPage() {
  return (
    <div className="p-5 bg-background sm:px-14 lg:px-20 grid grid-cols-12 gap-5">
      <CartItems data={data as ICart} />
      <CartTotal data={data as ICart} />
    </div>
  );
}

export default CartPage;
