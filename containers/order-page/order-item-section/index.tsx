import { GetOrderResponse } from "@/types";
import { Text, Button } from "@/components/ui";
import React from "react";
import { OrderItem, OrderStatus } from "@/components/molecules";

const OrderItemSection: React.FC<GetOrderResponse> = ({
  order_id,
  total_price,
  status,
  payment_type,
  va_number,
  items,
}) => {
  return (
    <div className="flex flex-col gap-y-5">
      <div className="flex justify-between items-center">
        <div className="flex gap-x-2 md:gap-x-5 items-center">
          <Text type="p" className="text-xs md:text-base">
            Payment Type : {payment_type}
          </Text>
          {va_number && (
            <Text type="p" className="font-bold text-xs md:text-base">
              va number : {va_number}
            </Text>
          )}
        </div>

        <OrderStatus order_status={status} />
      </div>
      <div className="flex flex-col gap-y-4 border-y-2 border-zinc-950">
        {items?.map((item, index) => (
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
          {total_price}
        </Text>
      </div>
    </div>
  );
};

export default OrderItemSection;
