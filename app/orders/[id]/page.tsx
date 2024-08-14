import React from "react";
import { Text } from "@/components/ui";
import { getOrder } from "@/app/actions/order";
import { OrderItemSection } from "@/containers";

const page = async ({ params }: { params: { id: string } }) => {
  const { id } = params;

  const order = await getOrder(id);

  if (!order) {
    return <p>not found</p>;
  }
  return (
    <div className="container mx-auto p-4 min-h-screen">
      <Text type="p" className="mb-4 text-xl md:text-5xl font-bold">
        Order Detail
      </Text>

      <OrderItemSection {...order} />
    </div>
  );
};

export default page;
