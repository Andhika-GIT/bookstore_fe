import { Text } from "@/components/ui";
import { Review } from "@/types";
import { Rating } from "@smastrom/react-rating";
import React from "react";

type ReviewSectionProps = {
  reviews: Array<Review>;
  bookRating: string;
  className?: string;
};

export const ReviewSection: React.FC<ReviewSectionProps> = ({ reviews, bookRating, className }) => {
  return (
    <div className={`space-y-6 ${className}`}>
      <div className="space-y-4">
        <Text type="h4" className="text-lg lg:text-3xl">
          Reviews By Community
        </Text>
        <div className="flex space-x-3 items-center">
          <Rating readOnly value={parseFloat(bookRating) || 0} style={{ maxWidth: 180 }} />
          <Text type="h4">{bookRating}</Text>
        </div>
      </div>
      {reviews?.map((item, index) => (
        <div className="space-y-3" key={index}>
          <div className="flex space-x-3 items-center">
            <Text type="p" className="font-bold">
              {item?.username}
            </Text>
            <Rating readOnly value={parseFloat(item?.userRating) || 0} style={{ maxWidth: 100 }} />
            <Text type="p" className="from-neutral-900">
              {item?.userRating}
            </Text>
          </div>
          <Text type="p">{item?.userReview}</Text>
        </div>
      ))}
    </div>
  );
};
