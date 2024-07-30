"use client";

import { handleFetchResponse } from "@/lib/utilities";
import { CartResponse, CreateCartRequest } from "@/types";

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;

export const getCart = async (): Promise<CartResponse> => {
  try {
    const response = await fetch(`${BASE_URL}/cart/user/items`, {
      cache: "no-cache",
      credentials: "include",
    });

    return await handleFetchResponse(response);
  } catch (error) {
    throw error;
  }
};

export const addCart = async (data: CreateCartRequest): Promise<string> => {
  try {
    const response = await fetch(`${BASE_URL}/cart`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
      credentials: "include",
    });

    return await handleFetchResponse(response);
  } catch (error) {
    throw error;
  }
};

export const deleteCart = async () => {};
