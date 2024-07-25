// components/loader/Loading.tsx
import React from "react";
import {
  BookInfoSkeleton,
  RelatedSectionSkeleton,
  ReviewSectionSkeleton,
} from "@/components/loader";

const Loading: React.FC = () => {
  return (
    <div className="grid grid-cols-3 gap-x-14 gap-y-10">
      <div className="col-span-3 lg:col-span-2">
        <BookInfoSkeleton />
      </div>
      <div className="col-span-3 lg:col-auto">
        <RelatedSectionSkeleton />
      </div>
      <div className="col-span-full w-full">
        <ReviewSectionSkeleton />
      </div>
    </div>
  );
};

export default Loading;
