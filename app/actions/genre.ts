"use client";

import { handleFetchResponse } from "@/lib/utilities";
import { GetGenreResponse, ApiResponse } from "@/types";
import { SERVER_BASE_URL } from "@/lib/utilities/global";

export const getAllGenre = async (): Promise<GetGenreResponse[] | undefined> => {
  try {
    const response = await fetch(`${SERVER_BASE_URL}/genre`, {
      cache: "no-cache",
      credentials: "include",
    });

    const result: ApiResponse<GetGenreResponse[]> = await handleFetchResponse(response);

    return result.data;
  } catch (error) {
    throw error;
  }
};
