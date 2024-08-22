import React from "react";
import Link from "next/link";
import { NextPage } from "next";
import { getBooks } from "@/app/actions/book";
import { Text } from "@/components/ui";
import { BookCard, BookLoadMore } from "@/components/molecules";

type BookSearchListSectionProps = {
  query: string | undefined | null;
  filter: string | undefined | null;
  genre: string | undefined | null;
};

const BookSearchListSection: NextPage<BookSearchListSectionProps> = async ({
  query,
  filter,
  genre,
}) => {
  const data = await getBooks({
    query,
    filter,
    genre,
  });

  if (!data?.books || data?.books?.length < 1) {
    return (
      <div className="mx-auto flex justify-center">
        <Text type="h2">No Search Found</Text>
      </div>
    );
  }
  return (
    <div className="grid grid-cols-2 xl:grid-cols-4 gap-x-8 gap-y-10 auto-rows-max">
      {data?.books?.map((book, index) => (
        <Link href={`/books/${book.id}`} key={index}>
          <BookCard
            imgURL={book.img_url}
            title={book.title}
            rating={book.rating}
            ratingSize={100}
            displayRating={true}
          />
        </Link>
      ))}
      <BookLoadMore query={query} filter={filter} genre={genre} />
    </div>
  );
};

export default BookSearchListSection;
