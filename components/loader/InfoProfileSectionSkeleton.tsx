import React from "react";
import { Skeleton } from "../ui";

const inputSkeletonClassName = "w-full h-10 bg-[#e1e0e0] rounded-md";
const labelSkeletonClassName = "w-1/4 h-4 bg-gray-300 opacity-50";

const InfoProfileSectionSkeleton: React.FC = () => {
  return (
    <div className="w-full flex flex-col gap-y-10">
      <div className="flex flex-col gap-y-2">
        <Skeleton className={labelSkeletonClassName} />
        <Skeleton className={inputSkeletonClassName} />
      </div>

      <div className="flex flex-col gap-y-2">
        <Skeleton className={labelSkeletonClassName} />
        <Skeleton className={inputSkeletonClassName} />
      </div>

      <div className="flex flex-col gap-y-2">
        <Skeleton className={labelSkeletonClassName} />
        <Skeleton className={inputSkeletonClassName} />
      </div>

      <div className="flex flex-col gap-y-2">
        <Skeleton className={labelSkeletonClassName} />
        <Skeleton className={`${inputSkeletonClassName} h-24`} />
      </div>
    </div>
  );
};

export default InfoProfileSectionSkeleton;
