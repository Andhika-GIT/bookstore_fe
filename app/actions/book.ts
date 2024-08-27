import { ApiResponse, Book } from "@/types";
import { GetInfiniteBookResponse } from "@/types";
import { SERVER_BASE_URL } from "@/lib/utilities/global";

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

    const response = await fetch(`${SERVER_BASE_URL}/book/search?${queryParams.toString()}`, {
      cache: "no-store",
    });

    const result: ApiResponse<GetInfiniteBookResponse> = await response.json();

    return result.data;
  } catch (e) {
    console.log(e);
  }
};

export const getOneBook = async (id: number): Promise<Book | undefined> => {
  await new Promise((resolve) => setTimeout(resolve, 3000));

  const response = await fetch(`${SERVER_BASE_URL}/book/${id}`, {
    cache: "no-cache",
  });

  const result: ApiResponse<Book> = await response.json();

  return result?.data;
};
