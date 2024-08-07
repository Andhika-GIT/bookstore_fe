"use client";

import { handleFetchResponse } from "@/lib/utilities";
import { CartItem } from "@/types";
import { TransactionPayload } from "@/types";

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;

export const getTransactionToken = async (transactionPayload: TransactionPayload) => {
  try {
    const response = await fetch(`${BASE_URL}/transaction/create`, {
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
