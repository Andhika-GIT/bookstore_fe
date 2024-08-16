"use client";

import React, { useState } from "react";
import { OrderHistoryItem } from "@/components/molecules";

import { getUserOrderHistory } from "@/app/actions/order";
import { useQuery } from "@tanstack/react-query";
import { ApiError, GetUserOrderHistoryResponse } from "@/types";

const TransactionSection = () => {
  const [page, setPage] = useState(1);
  const {
    data: orderHistoryData,
    isLoading,
    isError,
    error,
  } = useQuery<GetUserOrderHistoryResponse | undefined, ApiError>({
    queryKey: ["order-items", page],
    queryFn: () => getUserOrderHistory(page),
  });

  console.log(orderHistoryData);

  return (
    <div className="flex flex-col gap-y-2">
      {orderHistoryData?.items?.map((item) => (
        <OrderHistoryItem
          order_id={item?.order_id}
          order_status={item?.order_status}
          total_items={item?.total_items}
          first_item={item?.first_item}
        />
      ))}
    </div>
  );
};

export default TransactionSection;
