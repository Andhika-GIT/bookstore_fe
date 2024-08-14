import { handleFetchResponse } from "@/lib/utilities";
import { ApiResponse, GetOrderResponse } from "@/types";

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;

export const getOrder = async (orderId: string): Promise<GetOrderResponse | undefined> => {
  try {
    const response = await fetch(`${BASE_URL}/order/${orderId}`, {
      cache: "no-cache",
      headers: {
        "Content-Type": "application/json",
      },
      credentials: "include",
    });

    const result: ApiResponse<GetOrderResponse> = await handleFetchResponse(response);

    return result.data;
  } catch (e) {}
};
