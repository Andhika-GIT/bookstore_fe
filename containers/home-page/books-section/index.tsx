import React from "react";
import { Text, Card, CardContent, CardFooter, CardHeader } from "@/components/ui";
import { BookCard } from "@/components/molecules";
import { Book } from "@/types";
import { Rating } from "@smastrom/react-rating";
import Image from "next/image";
import Link from "next/link";

type BooksSectionProps = {
  books: Array<Book> | undefined;
};

const BooksSection: React.FC<BooksSectionProps> = ({ books }) => {
  return (
    <div className="space-y-5">
      <div className="flex space-x-5 md:space-x-11 items-center justify-center">
        <div className="flex-grow border-t-4 border-gray-400"></div>
        <Text type="h4">Most Popular</Text>
        <div className="flex-grow border-t-4 border-gray-400"></div>
      </div>
      <div className="grid grid-cols-2 lg:grid-cols-5 gap-x-8 gap-y-10 auto-rows-max">
        {books?.map((book, index) => (
          <Link href={`/books/${book?.id}`} key={index}>
            <BookCard
              imgURL={book?.img_url}
              title={book?.title}
              rating={book?.rating}
              ratingSize={100}
              displayRating={true}
            />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default BooksSection;
