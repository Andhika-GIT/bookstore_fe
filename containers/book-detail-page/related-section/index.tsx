import React from "react";
import { BookCard } from "@/components/molecules";
import { Button, Text } from "@/components/ui";
import { Book } from "@/types";

type RelatedSectionProps = {
  books: Array<Book>;
  className?: string;
};

const RelatedSection: React.FC<RelatedSectionProps> = ({ books, className }) => {
  return (
    <div className={`flex flex-col space-y-5 justify-between items-start ${className}`}>
      <div className="space-y-2 w-full">
        <Text type="h3" className="font-bold">
          Related Books
        </Text>
        <Text type="p">Some items that you might be interested in</Text>
        <div className="grid justify-items-center grid-cols-3 gap-x-3 gap-y-2 w-full auto-cols-max">
          {books
            ?.slice(0, 3)
            .map((book, index) => (
              <BookCard
                key={index}
                imgURL={book?.imgURL}
                title={book?.title}
                rating={book?.rating}
                imageHeightClassName="h-[90px]"
                cardClassName="w-[135px]"
                titleClassName="text-sm"
                tagsClassName="text-xs"
                displayRating={false}
              />
            ))}
        </div>
      </div>
      <Button className="w-full" variant="outline">
        View More
      </Button>
    </div>
  );
};

export default RelatedSection;
