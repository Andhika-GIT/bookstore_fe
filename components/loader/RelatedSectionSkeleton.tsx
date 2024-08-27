// components/loader/RelatedSectionSkeleton.tsx
import React from "react";
import { Skeleton } from "@/components/ui";

const RelatedSectionSkeleton: React.FC = () => {
  return (
    <div className="flex flex-col space-y-5 justify-between items-start">
      <div className="space-y-4 w-full">
        <Skeleton className="bg-slate-400 h-6 w-48" />
        <Skeleton className="bg-slate-400 h-4 w-64" />
        <div className="grid justify-items-center grid-cols-3 gap-x-3 gap-y-2 w-full auto-cols-max">
          {Array.from({ length: 3 }).map((_, index) => (
            <div key={index} className="w-32 h-64 bg-slate-400 rounded-md" />
          ))}
        </div>
      </div>
      <Skeleton className="bg-slate-400 h-10 w-full" />
    </div>
  );
};

export default RelatedSectionSkeleton;
