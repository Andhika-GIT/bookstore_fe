import React from "react";
import { Text } from "@/components/ui";
import { OrderItemSection } from "@/containers";

const page = async ({ params }: { params: { id: string } }) => {
  const { id } = params;

  return (
    <div className="container mx-auto p-4 min-h-screen">
      <Text type="p" className="mb-4 text-xl md:text-5xl font-bold">
        Order Detail
      </Text>

      <OrderItemSection order_id={id} />
    </div>
  );
};

export default page;
