"use client";

import { handleFetchResponse } from "@/lib/utilities";
import { ApiResponse, GetOrderResponse, GetUserOrderHistoryResponse } from "@/types";
import { SERVER_BASE_URL } from "@/lib/utilities/global";

export const getOrder = async (orderId: string): Promise<GetOrderResponse | undefined> => {
  try {
    const response = await fetch(`${SERVER_BASE_URL}/order/${orderId}`, {
      cache: "no-cache",
      credentials: "include",
    });

    const result: ApiResponse<GetOrderResponse> = await handleFetchResponse(response);

    return result.data;
  } catch (e) {
    throw e;
  }
};

export const getUserOrderHistory = async (
  page: number,
): Promise<GetUserOrderHistoryResponse | undefined> => {
  try {
    const response = await fetch(`${SERVER_BASE_URL}/order/history/user?page=${page}`, {
      cache: "no-cache",
      credentials: "include",
    });

    const result: ApiResponse<GetUserOrderHistoryResponse> = await handleFetchResponse(response);

    return result.data;
  } catch (e) {
    throw e;
  }
};
