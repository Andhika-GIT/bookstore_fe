import React from "react";
import { NextPage } from "next";
import { getBooks } from "@/app/actions/book";
import { Text } from "@/components/ui";

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
  return <div>{data?.books[0]?.title}</div>;
};

export default BookSearchListSection;
