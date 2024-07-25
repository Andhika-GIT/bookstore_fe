import React from "react";
import Image from "next/image";
import { Book } from "@/types";
import { Button, Text } from "@/components/ui";
import { Rating } from "@smastrom/react-rating";
import AddToCartButton from "./add-to-char-button";

type BookInfoSectionProps = Book & {
  className?: string;
};

const BookInfoSection: React.FC<BookInfoSectionProps> = ({
  id,
  title,
  description,
  img_url,
  author,
  publisher,
  rating,
  total_page,
  publication_date,
  className,
}) => {
  return (
    <div
      className={`flex flex-col items-center md:items-stretch md:flex-row gap-7 col-span-1 ${className}`}
    >
      <Image
        src={img_url}
        width={250}
        height={250}
        alt={`img-${title}-${id}`}
        className="shadow-xl"
      />

      <div className="flex flex-col justify-between space-y-3">
        <div className="space-y-3">
          <div className="space-y-1">
            <Text type="h2">{title}</Text>
            <div className="flex space-x-3 items-center">
              <p className="font-light opacity-50">By {author}</p>
              <Rating readOnly value={parseFloat(rating) || 0} style={{ maxWidth: 100 }} />
            </div>
          </div>
          <Text type="p">{description}</Text>
          <div className="max-w-96 grid grid-cols-2 justify-items-start gap-x-8 gap-y-2">
            <Text type="p" className="font-bold">
              PUBLLISHER
            </Text>
            <Text type="p">{publisher}</Text>
            <Text type="p" className="font-bold">
              PUBLICATION_DATE
            </Text>
            <Text type="p">{publication_date}</Text>
            <Text type="p" className="font-bold">
              PAGES
            </Text>
            <Text type="p">{total_page}</Text>
          </div>
        </div>

        <AddToCartButton book_id={id} />
      </div>
    </div>
  );
};

export default BookInfoSection;
