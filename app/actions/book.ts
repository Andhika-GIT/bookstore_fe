import { ApiResponse, Book } from "@/types";
import { resolve } from "path";
import { GetInfiniteBookResponse } from "@/types";

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;

type SearchBooksParams = {
  pageParam?: number | undefined;
  query?: string | undefined | null;
  filter?: string | undefined | null;
  genre?: string | undefined | null;
};

export const getBooks = async ({
  pageParam = 1,
  query,
  filter,
  genre,
}: SearchBooksParams = {}): Promise<GetInfiniteBookResponse | undefined> => {
  await new Promise((resolve) => setTimeout(resolve, 5000));

  try {
    const queryParams = new URLSearchParams();
    queryParams.append("page", pageParam?.toString());

    if (query) {
      queryParams.append("query", query);
    }

    if (filter) {
      queryParams.append("filter", filter);
    }

    if (genre) {
      queryParams.append("genre", genre);
    }

    const response = await fetch(`${BASE_URL}/book/search?${queryParams.toString()}`, {
      cache: "no-store",
    });

    const result: ApiResponse<GetInfiniteBookResponse> = await response.json();

    return result.data;
  } catch (e) {
    console.log(e);
  }
};

export const getOneBook = async (id: number): Promise<Book | undefined> => {
  const response = await fetch(`${BASE_URL}/book/${id}`, {
    cache: "no-cache",
  });

  const result: ApiResponse<Book> = await response.json();

  return result?.data;
};
