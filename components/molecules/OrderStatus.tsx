import React from "react";
import { Text } from "../ui";

type OrderStatusProps = {
  order_status: "CANCELLED" | "PENDING" | "SUCCESS" | "SETTLED" | undefined;
};

const OrderStatus: React.FC<OrderStatusProps> = ({ order_status }) => {
  const getColor = (status: string) => {
    switch (status) {
      case "CANCELLED":
        return "text-red-600";
      case "PENDING":
        return "text-yellow-500";
      case "SUCCESS":
      case "SETTLED":
        return "text-green-600";
      default:
        return "text-gray-800";
    }
  };

  return (
    <div className="flex gap-x-1">
      <Text type="span" className="uppercase text-xs md:text-base">
        ORDER STATUS :
      </Text>
      {order_status && (
        <Text
          type="span"
          className={`${getColor(order_status)} font-extrabold text-xs md:text-base`}
        >
          {order_status?.charAt(0) + order_status?.slice(1).toUpperCase()}
        </Text>
      )}
    </div>
  );
};

export default OrderStatus;
