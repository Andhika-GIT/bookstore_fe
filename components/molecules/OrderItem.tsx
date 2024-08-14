import React from "react";
import Image from "next/image";
import { Text, Button } from "../ui";

type OrderItemProps = {
  img_url: string;
  book_name: string;
  book_price: number;
  order_quantity: number;
};

const OrderItem: React.FC<OrderItemProps> = ({
  img_url,
  book_name,
  book_price,
  order_quantity,
}) => {
  return (
    <div className="flex justify-between items-center  p-2">
      <div className="flex gap-2">
        <Image
          src={img_url}
          width={60}
          height={60}
          alt={`img-${book_name}-${order_quantity}`}
          className="shadow-xl"
        />

        <div className="flex flex-col  gap-y-2">
          <Text type="h6" className="font-bold">
            {book_name}
          </Text>
          <Text type="p">quantity : {order_quantity}</Text>
        </div>
      </div>
      <Text type="p" className="font-bold">
        price : {order_quantity * book_price}
      </Text>
    </div>
  );
};

export default OrderItem;
