import React from "react";
import { Skeleton } from "@/components/ui";

const BookCardSkeleton: React.FC = () => {
  return (
    <div className="rounded-lg border border-neutral-200 bg-white text-neutral-950 shadow-sm p-2 flex flex-col items-center">
      <div className="w-full h-96 overflow-hidden rounded-lg">
        <Skeleton className="w-full h-full bg-slate-400" />
      </div>
      <div className="flex flex-col items-center space-y-2 mt-4">
        <Skeleton className="h-6 w-32 bg-slate-400" />
        <Skeleton className="h-4 w-24 bg-slate-400" />
        <Skeleton className="h-4 w-20 bg-slate-400" />
      </div>
    </div>
  );
};

export default BookCardSkeleton;
