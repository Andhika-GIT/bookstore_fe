import React from "react";
import { Card, Text, CardContent } from "../ui";
import { Rating } from "@smastrom/react-rating";
import Image from "next/image";

type BookCardProps = {
  imgURL: string;
  title: string;
  rating: string;
  ratingSize?: number;
  cardClassName?: string;
  imageWidthClassName?: string;
  imageHeightClassName: string;
  titleClassName?: string;
  tagsClassName?: string;
  displayRating?: boolean;
};

const BookCard: React.FC<BookCardProps> = ({
  imgURL,
  title,
  rating,
  ratingSize,
  cardClassName = "w-full",
  imageWidthClassName = "w-full",
  imageHeightClassName = "h-50",
  tagsClassName = "",
  titleClassName = "",
  displayRating = true,
}) => {
  return (
    <Card className={`bg-white shadow-l ${cardClassName}`}>
      <CardContent className="w-full space-y-6 px-3 py-3">
        <div className={`relative ${imageWidthClassName} ${imageHeightClassName}`}>
          <Image
            src={imgURL}
            alt={`book-${title}`}
            layout="fill"
            objectFit="cover"
            className="rounded-lg"
          />
        </div>
        <div className="flex flex-col items-center space-y-2">
          <Text type="p" className={`font-semibold ${titleClassName}`}>
            {title}
          </Text>
          <Text className={`text-gray-400 ${tagsClassName}`} type="p">
            model, lifestyle
          </Text>
          {displayRating && (
            <Rating readOnly value={parseFloat(rating)} style={{ maxWidth: ratingSize || 100 }} />
          )}
        </div>
      </CardContent>
    </Card>
  );
};

export default BookCard;
