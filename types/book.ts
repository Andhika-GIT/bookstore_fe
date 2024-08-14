export type Book = {
  id: number;
  img_url: string;
  title: string;
  author: string;
  publisher: string;
  description: string;
  rating: string;
  total_page: number;
  publication_date: string;
  genres: string;
};

export type GetInfiniteBookResponse = {
  totalData: number;
  books: Book[] | undefined;
  nextPage: number | null | undefined;
};
