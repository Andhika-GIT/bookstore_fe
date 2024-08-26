"use client";

import React, { useState } from "react";
import { OrderHistoryItem } from "@/components/molecules";
import { PaginationComponent } from "@/components/molecules";
import { getUserOrderHistory } from "@/app/actions/order";
import { keepPreviousData, useQuery } from "@tanstack/react-query";
import { ApiError, GetUserOrderHistoryResponse } from "@/types";
import { Text } from "@/components/ui";

const TransactionSection = () => {
  const [page, setPage] = useState(1);

  const {
    data: orderHistoryData,
    isLoading,
    isError,
    error,
    isPlaceholderData,
    isFetching,
  } = useQuery<GetUserOrderHistoryResponse | undefined, ApiError>({
    queryKey: ["order-items", page],
    queryFn: () => getUserOrderHistory(page),
    placeholderData: keepPreviousData, // Menggunakan keepPreviousData
  });

  if (orderHistoryData?.items?.length === 0) {
    return (
      <div className="flex justify-center">
        <Text type="h3">You haven't made any order</Text>
      </div>
    );
  }

  return (
    <div className="flex flex-col gap-y-2 h-full">
      {orderHistoryData?.items?.map((item) => (
        <OrderHistoryItem
          key={item.order_id}
          order_id={item.order_id}
          order_status={item.order_status}
          total_items={item.total_items}
          first_item={item.first_item}
        />
      ))}

      <div className="w-full mt-4 md:mt-auto">
        <PaginationComponent
          page={page}
          setPage={setPage}
          totalPage={orderHistoryData?.total_page || 1}
          isFetching={isFetching}
          isPlaceholderData={isPlaceholderData}
          hasMore={!!orderHistoryData?.next_page}
        />
      </div>
    </div>
  );
};

export default TransactionSection;
