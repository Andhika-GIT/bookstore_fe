"use client";

import { handleFetchResponse } from "@/lib/utilities";
import { SERVER_BASE_URL } from "@/lib/utilities/global";
import { TransactionPayload } from "@/types";

export const getTransactionToken = async (transactionPayload: TransactionPayload) => {
  try {
    const response = await fetch(`${SERVER_BASE_URL}/transaction/create`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(transactionPayload),
      credentials: "include",
    });

    return await handleFetchResponse(response);
  } catch (error) {
    throw error;
  }
};
