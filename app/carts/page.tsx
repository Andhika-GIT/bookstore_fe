import { CartItemSection } from "@/containers";
import { Text } from "@/components/ui";
import React from "react";

const Carts = async () => {
  return (
    <div className="container mx-auto p-4 min-h-screen">
      <Text type="p" className="mb-4 text-xl md:text-5xl font-bold">
        Your Shopping Cart
      </Text>
      <CartItemSection />
    </div>
  );
};

export default Carts;
