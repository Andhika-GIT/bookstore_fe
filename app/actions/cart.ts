"use client";

import { handleFetchResponse } from "@/lib/utilities";
import { CartResponse, CreateCartRequest } from "@/types";
import { SERVER_BASE_URL } from "@/lib/utilities/global";

export const getCart = async (): Promise<CartResponse> => {
  try {
    const response = await fetch(`${SERVER_BASE_URL}/cart/user/items`, {
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
    const response = await fetch(`${SERVER_BASE_URL}/cart`, {
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

export const increaseQuantity = async (cartItemsId: number, quantity: number): Promise<string> => {
  try {
    const response = await fetch(`${SERVER_BASE_URL}/cart/${cartItemsId}/increase`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        quantity: quantity,
      }),
      credentials: "include",
    });

    return await handleFetchResponse(response);
  } catch (error) {
    throw error;
  }
};

export const decreaseQuantity = async (cartItemsId: number): Promise<string> => {
  try {
    const response = await fetch(`${SERVER_BASE_URL}/cart/${cartItemsId}/decrease`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      credentials: "include",
    });

    return await handleFetchResponse(response);
  } catch (error) {
    throw error;
  }
};

export const deleteCartItems = async (cartItemsId: number): Promise<string> => {
  try {
    const response = await fetch(`${SERVER_BASE_URL}/cart/${cartItemsId}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
      credentials: "include",
    });

    return await handleFetchResponse(response);
  } catch (error) {
    throw error;
  }
};
