// components/loader/BookLoadMoreSkeleton.tsx
import React from "react";
import BookCardSkeleton from "./BookCardSkeleton";

const BookLoadMoreSkeleton: React.FC = () => {
  return (
    <div className="grid grid-cols-2 xl:grid-cols-4 gap-x-8 gap-y-10 auto-rows-max">
      {Array.from({ length: 8 }).map((_, index) => (
        <BookCardSkeleton key={index} />
      ))}
    </div>
  );
};

export default BookLoadMoreSkeleton;
