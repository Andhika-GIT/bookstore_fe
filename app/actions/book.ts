import { Book } from "@/types";

const BASE_URL = process.env.BASE_URL;

export const getBooks = async (page: number = 1): Promise<Book[] | undefined> => {
  try {
    const response = await fetch(`${BASE_URL}/book?page=${page}`, {
      cache: "no-cache",
    });

    const data = await response.json();

    return data;
  } catch (e) {
    console.log(e);
  }
};

export const getOneBook = async (id: number): Promise<Book | undefined> => {
  const response = await fetch(`${BASE_URL}/book/${id}`);

  const data = await response.json();

  return data;
};
