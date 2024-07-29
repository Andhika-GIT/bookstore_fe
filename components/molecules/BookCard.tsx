import React from "react";
import { Rating } from "@smastrom/react-rating";
import Image from "next/image";

type BookCardProps = {
  imgURL: string;
  title: string;
  rating: string;
  ratingSize?: number;
  displayRating?: boolean;
  cardClassName?: string;
  imageClassName?: string;
  titleClassName?: string;
  tagsClassName?: string;
};

const BookCard: React.FC<BookCardProps> = ({
  imgURL,
  title,
  rating,
  ratingSize = 100,
  displayRating = true,
  cardClassName = "",
  imageClassName = "",
  titleClassName = "",
  tagsClassName = "",
}) => {
  return (
    <div
      className={`rounded-lg border border-neutral-200 bg-white text-neutral-950 shadow-sm p-2 flex flex-col items-center ${cardClassName}`}
    >
      <div className="relative w-full pb-[150%] overflow-hidden rounded-lg">
        <Image
          src={imgURL}
          alt={`book-${title}`}
          layout="fill"
          objectFit="cover"
          className={`rounded-lg ${imageClassName}`}
        />
      </div>
      <div className="flex flex-col items-center space-y-2 mt-4">
        <p className={`font-semibold text-center ${titleClassName}`}>{title}</p>
        <p className={`text-gray-400 text-center ${tagsClassName}`}>model, lifestyle</p>
        {displayRating && (
          <Rating readOnly value={parseFloat(rating)} style={{ maxWidth: ratingSize }} />
        )}
      </div>
    </div>
  );
};

export default BookCard;
