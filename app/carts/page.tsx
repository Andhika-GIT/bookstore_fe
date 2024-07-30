import { CartItemSection } from "@/containers";
import { Text } from "@/components/ui";
import React from "react";

const Carts = async () => {
  return (
    <div className="container mx-auto p-4 h-screen">
      <Text type="h2" className="mb-4">
        Your Shopping Cart
      </Text>
      <CartItemSection />
    </div>
  );
};

export default Carts;
