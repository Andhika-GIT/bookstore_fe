import React from "react";
import { Text, Card, CardContent, CardFooter, CardHeader } from "@/components/ui";
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
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-8 gap-y-10 auto-rows-max">
        {books?.map((book, index) => (
          <Card key={index} className="w-full bg-white shadow-lg pb-3">
            <CardContent className="w-full space-y-6 px-3 py-3">
              <div className="flex justify-center items-center">
                <Image src={book?.imgURL} alt={`book-${index}`} width={350} height={200} />
              </div>
              <div className="flex flex-col items-center space-y-1">
                <Text type="span" className="font-semibold">
                  {book?.title}
                </Text>
                <Text className="text-gray-400" type="p">
                  model, lifestyle
                </Text>
                <Rating readOnly value={parseFloat(book?.rating)} style={{ maxWidth: 100 }} />
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default BooksSection;
