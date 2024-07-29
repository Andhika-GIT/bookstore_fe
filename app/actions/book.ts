import { ApiResponse, Book } from "@/types";
import { resolve } from "path";

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;

// Function to simulate a delay

export const getBooks = async (
  pageParam: number = 1,
): Promise<
  | {
      data: Book[] | undefined;
      nextPage: number | null | undefined;
    }
  | undefined
> => {
  try {
    const response = await fetch(`${BASE_URL}/book?page=${pageParam}`, {
      cache: "no-cache",
    });

    const result: ApiResponse<{
      books: Book[];
      nextPage: number;
    }> = await response.json();

    return {
      data: result?.data?.books,
      nextPage: result?.data?.nextPage,
    };
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
