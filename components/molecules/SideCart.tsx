import React from "react";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui";
import { CiShoppingCart } from "react-icons/ci";
import { Text } from "@/components/ui";

const SideCart: React.FC = () => {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <button className="flex gap-1 items-center cursor-pointer">
          <CiShoppingCart />
          <Text type="p">Items</Text>
        </button>
      </SheetTrigger>
      <SheetContent side="right" className="bg-[#FAF9F6]">
        <SheetHeader>
          <SheetTitle>Shopping Cart</SheetTitle>
          <SheetDescription>Review your items</SheetDescription>
        </SheetHeader>
        <div>{/* Cart items and functionality go here */}</div>
      </SheetContent>
    </Sheet>
  );
};

export default SideCart;
