// components/loader/ReviewSectionSkeleton.tsx
import React from "react";
import { Skeleton } from "@/components/ui";

const ReviewSectionSkeleton: React.FC = () => {
  return (
    <div className="space-y-6">
      <div className="space-y-4">
        <Skeleton className="bg-slate-400 h-6 w-64" />
        <div className="flex space-x-3 items-center">
          <Skeleton className="bg-slate-400 h-4 w-20" />
          <Skeleton className="bg-slate-400 h-4 w-20" />
        </div>
        <Skeleton className="bg-slate-400 h-4 w-full" />
      </div>
      {Array.from({ length: 3 }).map((_, index) => (
        <div className="space-y-3" key={index}>
          <div className="flex space-x-3 items-center">
            <Skeleton className="bg-slate-400 h-4 w-32" />
            <Skeleton className="bg-slate-400 h-4 w-20" />
            <Skeleton className="bg-slate-400 h-4 w-20" />
          </div>
          <Skeleton className="bg-slate-400 h-4 w-full" />
        </div>
      ))}
    </div>
  );
};

export default ReviewSectionSkeleton;
