"use client";

import { handleFetchResponse } from "@/lib/utilities";
import { loginSchemaType, registerSchemaType } from "@/schemas"; // S
import { SERVER_BASE_URL } from "@/lib/utilities/global";

export const signIn = async (formData: loginSchemaType): Promise<any> => {
  try {
    const response = await fetch(`${SERVER_BASE_URL}/auth/signIn`, {
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
    const response = await fetch(`${SERVER_BASE_URL}/auth/signUp`, {
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

export const signOut = async (): Promise<any> => {
  try {
    const response = await fetch(`${SERVER_BASE_URL}/auth/signOut`, {
      method: "POST",
      credentials: "include",
    });

    return await handleFetchResponse(response);
  } catch (error) {
    throw error;
  }
};
