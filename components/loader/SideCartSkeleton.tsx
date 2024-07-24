import React from "react";
import { Skeleton } from "../ui";

const SideCartSkeleton: React.FC = () => {
  return (
    <div className="flex gap-2">
      <Skeleton className="bg-slate-400 h-16 w-16 rounded" />
      <div className="flex flex-col gap-y-2 w-full">
        <Skeleton className="bg-slate-400 h-4 w-48" />
        <Skeleton className="bg-slate-400  h-4 w-36" />
      </div>
    </div>
  );
};

export default SideCartSkeleton;
