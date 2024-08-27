import React from "react";
import { BookCard } from "@/components/molecules";
import { Button, Text } from "@/components/ui";
import { NextPage } from "next";
import { getRelatedBook } from "@/app/actions/book";

type RelatedSectionProps = {
  id: number;
  className?: string;
};

const RelatedSection: NextPage<RelatedSectionProps> = async ({ id, className }) => {
  const books = await getRelatedBook(id);

  return (
    <div className={`flex flex-col space-y-5 justify-between items-start ${className}`}>
      <div className="space-y-2 w-full">
        <Text type="h3" className="!font-bold">
          Related Books
        </Text>
        <Text type="p">Some items that you might be interested in</Text>
        <div className="grid justify-items-center grid-cols-3 gap-x-2 lg:gap-x-3 gap-y-2 w-full auto-cols-max max-w">
          {books
            ?.slice(0, 3)
            .map((book, index) => (
              <BookCard
                key={index}
                imgURL={book?.img_url}
                title={book?.title}
                rating={book?.rating}
                cardClassName="lg:w-[100px] md:max-w-[120px] xl:w-[135px] w-[150px] "
                titleClassName="text-sm"
                tagsClassName="text-xs"
                displayRating={false}
              />
            ))}
        </div>
      </div>
      {books && books?.length !== 0 && (
        <Button className="w-full" variant="outline">
          View More
        </Button>
      )}
    </div>
  );
};

export default RelatedSection;
