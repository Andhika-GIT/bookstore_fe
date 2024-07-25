// components/loader/BookInfoSkeleton.tsx
import React from "react";
import { Skeleton } from "@/components/ui";

const BookInfoSkeleton: React.FC = () => {
  return (
    <div className="flex flex-col items-center md:items-stretch md:flex-row gap-7 col-span-1">
      <Skeleton className="w-64 h-64 rounded-md bg-slate-400" />
      <div className="flex flex-col justify-between space-y-3 w-full">
        <div className="space-y-3">
          <Skeleton className="bg-slate-400 h-6 w-48" />
          <div className="flex space-x-3 items-center">
            <Skeleton className="bg-slate-400 h-4 w-20" />
            <Skeleton className="bg-slate-400 h-4 w-20" />
          </div>
          <Skeleton className="bg-slate-400 h-4 w-full" />
          <div className="max-w-96 grid grid-cols-2 justify-items-start gap-x-8 gap-y-2">
            <Skeleton className="bg-slate-400 h-4 w-36" />
            <Skeleton className="bg-slate-400 h-4 w-24" />
            <Skeleton className="bg-slate-400 h-4 w-36" />
            <Skeleton className="bg-slate-400 h-4 w-24" />
            <Skeleton className="bg-slate-400 h-4 w-36" />
            <Skeleton className="bg-slate-400 h-4 w-24" />
          </div>
        </div>
        <Skeleton className="bg-slate-400 h-10 w-48" />
      </div>
    </div>
  );
};

export default BookInfoSkeleton;
