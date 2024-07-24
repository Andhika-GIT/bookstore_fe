"use client";

import { handleFetchResponse } from "@/lib/utilities";
import { loginSchemaType, registerSchemaType } from "@/schemas"; // S

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;

export const signIn = async (formData: loginSchemaType): Promise<any> => {
  try {
    const response = await fetch(`${BASE_URL}/auth/signIn`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
      credentials: "include",
    });

    return await handleFetchResponse(response);
  } catch (error) {
    throw error;
  }
};

export const signUp = async (formData: registerSchemaType): Promise<any> => {
  try {
    const response = await fetch(`${BASE_URL}/auth/signUp`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
      credentials: "include",
    });

    return await handleFetchResponse(response);
  } catch (error) {
    throw error;
  }
};
