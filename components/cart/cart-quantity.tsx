"use client";

import { MinusIcon, PlusIcon } from "lucide-react";
import { Button } from "../ui/button";

function CartItemQuantity({ quantity=0 }: { quantity: number }) {
  return (
    <div className="flex flex-row">
      <Button variant={"ghost"} size={"icon"}>
        <MinusIcon className="h-4 w-4" />
      </Button>
      <input
        type="number"
        value={quantity}
        readOnly
        className=" w-10 pl-2 text-center bg-transparent rounded"
        defaultValue={quantity}
        onChange={(e) => console.log(e.target.value)}
      />
      <Button variant={"ghost"} size={"icon"}>
        <PlusIcon className="h-4 w-4" />
      </Button>
    </div>
  );
}

export default CartItemQuantity;
