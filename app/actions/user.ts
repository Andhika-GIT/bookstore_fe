import { SERVER_BASE_URL } from "@/lib/utilities/global";
import { handleFetchResponse } from "@/lib/utilities";
import { ApiResponse, GetUserResponse } from "@/types";
import { cookies } from "next/headers";

export const getProfile = async (): Promise<GetUserResponse | undefined> => {
  try {
    const response = await fetch(`${SERVER_BASE_URL}/auth/my-info`, {
      credentials: "include",
      cache: "no-cache",
      headers: { Cookie: cookies().toString() },
    });

    const result: ApiResponse<GetUserResponse> = await handleFetchResponse(response);
    return result?.data;
  } catch (error) {
    console.log(error);
  }
};
