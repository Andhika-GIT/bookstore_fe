import React from "react";
import { BookCard } from "@/components/molecules";
import { Text } from "@/components/ui";
import { Book } from "@/types";

type RelatedSectionProps = {
  books: Array<Book>;
  className?: string;
};

const RelatedSection: React.FC<RelatedSectionProps> = ({ books, className }) => {
  return (
    <div className={`flex flex-col space-y-2 items-start ${className}`}>
      <div className="space-y-2">
        <Text type="h2" className="font-bold">
          Related Books
        </Text>
        <Text type="p">Some items that you might be interested in</Text>
      </div>
      <div className="grid lg:grid-cols-3 gap-x-3 gap-y-2 w-full auto-cols-max">
        {books
          ?.slice(0, 3)
          .map((book, index) => (
            <BookCard
              key={index}
              imgURL={book?.imgURL}
              title={book?.title}
              rating={book?.rating}
              imageHeightClassName="h-[120px]"
              cardClassName="w-42"
              titleClassName="text-sm"
              tagsClassName="text-xs"
              displayRating={false}
            />
          ))}
      </div>
    </div>
  );
};

export default RelatedSection;
