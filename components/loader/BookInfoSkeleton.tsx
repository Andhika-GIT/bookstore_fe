import React from "react";
import { Skeleton } from "@/components/ui";

const BookInfoSkeleton: React.FC = () => {
  return (
    <div className="flex flex-col items-center md:items-stretch md:flex-row gap-7 col-span-1">
      <Skeleton className="w-[340px] h-[375px] rounded-md bg-slate-400" /> {/* Image Skeleton */}
      <div className="flex flex-col justify-between w-full space-y-3">
        <div className="space-y-3">
          <Skeleton className="bg-slate-400 h-12 w-64" /> {/* Title Skeleton */}
          <div className="flex space-x-3 items-center">
            <Skeleton className="bg-slate-400 h-4 w-40" /> {/* Author Skeleton */}
            <Skeleton className="bg-slate-400 h-4 w-20" /> {/* Rating Skeleton */}
          </div>
          <Skeleton className="bg-slate-400 h-20 w-full" /> {/* Description Skeleton */}
          <div className="max-w-120 grid grid-cols-2 justify-items-start gap-x-4 gap-y-2">
            <Skeleton className="bg-slate-400 h-4 w-32" /> {/* Publisher label */}
            <Skeleton className="bg-slate-400 h-4 w-48" /> {/* Publisher content */}
            <Skeleton className="bg-slate-400 h-4 w-32" /> {/* Publication date label */}
            <Skeleton className="bg-slate-400 h-4 w-48" /> {/* Publication date content */}
            <Skeleton className="bg-slate-400 h-4 w-32" /> {/* Pages label */}
            <Skeleton className="bg-slate-400 h-4 w-48" /> {/* Pages content */}
            <Skeleton className="bg-slate-400 h-4 w-32" /> {/* Genres label */}
            <Skeleton className="bg-slate-400 h-4 w-48" /> {/* Genres content */}
          </div>
        </div>
        <Skeleton className="bg-slate-400 h-10 w-72" /> {/* Add to Cart Button */}
      </div>
    </div>
  );
};

export default BookInfoSkeleton;
