"use client";

import { ApiError, GetOrderResponse } from "@/types";
import { Text, Button } from "@/components/ui";
import React from "react";
import { OrderItem, OrderStatus } from "@/components/molecules";
import { useQuery } from "@tanstack/react-query";
import { getOrder } from "@/app/actions/order";
import { useRouter } from "next/navigation";

type GetOrderResponseType = {
  order_id: string;
};

const OrderItemSection: React.FC<GetOrderResponseType> = ({ order_id }) => {
  const router = useRouter();

  const {
    data: order,
    isError,
    error,
    isLoading,
  } = useQuery<GetOrderResponse | undefined, ApiError>({
    queryKey: ["order", order_id],
    queryFn: () => getOrder(order_id),
  });

  if (isLoading) {
    return <Text type="h4">loading...</Text>;
  }

  if (isError || error) {
    if (error?.errorData?.code === 404) {
      router.replace("/404");
      return;
    }
    return <Text type="h4">{error?.message || "something went wrong"}</Text>;
  }

  console.log(order);
  return (
    <div className="flex flex-col gap-y-5">
      <div className="flex justify-between items-center">
        <div className="flex gap-x-2 md:gap-x-5 items-center">
          <Text type="p" className="text-xs md:text-base">
            Payment Type : {order?.payment_type}
          </Text>
          {order?.va_number && (
            <Text type="p" className="font-bold text-xs md:text-base">
              va number : {order?.va_number}{" "}
              {order?.bank && `/ bank : ${order?.bank.toLocaleUpperCase()}`}
            </Text>
          )}
        </div>

        <OrderStatus order_status={order?.status} />
      </div>
      <div className="flex flex-col gap-y-4 border-y-2 border-zinc-950">
        {order?.items?.map((item, index) => (
          <OrderItem
            key={index}
            img_url={item?.img_url}
            book_name={item?.book_name}
            book_price={item?.book_price}
            order_quantity={item?.order_quantity}
          />
        ))}
      </div>
      <div className="flex justify-between">
        <Text type="h4" className="!font-extrabold">
          TOTAL PRICE
        </Text>
        <Text type="h4" className="!font-extrabold">
          {order?.total_price}
        </Text>
      </div>
    </div>
  );
};

export default OrderItemSection;
