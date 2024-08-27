import React from "react";
import Image from "next/image";
import { Book } from "@/types";
import { Button, Text } from "@/components/ui";
import { Rating } from "@smastrom/react-rating";
import AddToCartButton from "./add-to-char-button";
import { NextPage } from "next";
import { notFound } from "next/navigation";
import { getOneBook } from "@/app/actions/book";

type BookInfoSectionProps = {
  id: number;
  className?: string;
};

const BookInfoSection: NextPage<BookInfoSectionProps> = async ({ id, className }) => {
  const selectedBook = await getOneBook(id);

  if (!selectedBook) {
    notFound();
  }

  return (
    <div
      className={`flex flex-col items-center md:items-stretch md:flex-row gap-7 col-span-1 ${className}`}
    >
      <div className="flex-shrink-0">
        <Image
          src={selectedBook?.img_url}
          width={260}
          height={375} // Adjusted height for better aspect ratio
          alt={`img-${selectedBook?.title}-${selectedBook?.id}`}
          className="shadow-xl object-cover"
        />
      </div>

      <div className="flex flex-col justify-between space-y-3">
        <div className="space-y-3">
          <div className="space-y-1">
            <Text type="h2">{selectedBook?.title}</Text>
            <div className="flex space-x-3 items-center">
              <p className="font-light opacity-50">By {selectedBook?.author}</p>
              <Rating
                readOnly
                value={parseFloat(selectedBook?.rating) || 0}
                style={{ maxWidth: 100 }}
              />
            </div>
          </div>
          <Text type="p">{selectedBook?.description}</Text>
          <div className="max-w-120 grid grid-cols-2 justify-items-start gap-x-4 gap-y-2">
            <Text type="p" className="font-bold">
              PUBLLISHER
            </Text>
            <Text type="p">: {selectedBook?.publisher}</Text>
            <Text type="p" className="font-bold">
              PUBLICATION_DATE
            </Text>
            <Text type="p">: {selectedBook?.publication_date}</Text>
            <Text type="p" className="font-bold">
              PAGES
            </Text>
            <Text type="p">: {selectedBook?.total_page}</Text>
            <Text type="p" className="font-bold">
              GENRES
            </Text>
            <Text type="p">: {selectedBook?.genres}</Text>
          </div>
        </div>

        <AddToCartButton book_id={id} />
      </div>
    </div>
  );
};

export default BookInfoSection;
