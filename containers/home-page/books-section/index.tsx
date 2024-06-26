import React from "react";
import { Text, Card, CardContent, CardFooter, CardHeader } from "@/components/ui";
import { BookCard } from "@/components/molecules";
import { Book } from "@/types";
import { Rating } from "@smastrom/react-rating";
import Image from "next/image";

type BooksSectionProps = {
  books: Array<Book>;
};

const BooksSection: React.FC<BooksSectionProps> = ({ books }) => {
  return (
    <div className="space-y-5">
      <div className="flex space-x-11 items-center justify-center">
        <div className="flex-grow border-t-4 border-gray-400"></div>
        <Text type="h3">Most Popular</Text>
        <div className="flex-grow border-t-4 border-gray-400"></div>
      </div>
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-10 auto-rows-max">
        {books?.map((book, index) => (
          <BookCard
            key={index}
            imgURL={book?.imgURL}
            title={book?.title}
            rating={book?.rating}
            imageHeightClassName="h-[500px]"
          />
        ))}
      </div>
    </div>
  );
};

export default BooksSection;
