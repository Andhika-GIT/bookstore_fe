"use client";

import { handleFetchResponse } from "@/lib/utilities";
import { GetGenreResponse, ApiResponse } from "@/types";
const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;

export const getAllGenre = async (): Promise<GetGenreResponse[] | undefined> => {
  try {
    const response = await fetch(`${BASE_URL}/genre`, {
      cache: "no-cache",
      credentials: "include",
    });

    const result: ApiResponse<GetGenreResponse[]> = await handleFetchResponse(response);

    return result.data;
  } catch (error) {
    throw error;
  }
};
