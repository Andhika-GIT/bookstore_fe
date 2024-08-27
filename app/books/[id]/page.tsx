import React, { Suspense } from "react";
import { RelatedSection, BookInfoSection } from "@/containers";
import { BookInfoSkeleton, RelatedSectionSkeleton } from "@/components/loader";

const BookDetail = async ({ params }: { params: { id: string } }) => {
  const { id } = params;

  return (
    <div className="min-h-screen">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-x-14 gap-y-10 ">
        <Suspense
          key={`book-${id}`}
          fallback={
            <div className="lg:col-span-2">
              <BookInfoSkeleton />
            </div>
          }
        >
          <BookInfoSection id={parseInt(id)} className="lg:col-span-2" />
        </Suspense>
        <Suspense
          key={`book-${id}`}
          fallback={
            <div className="col-span-3 lg:col-auto">
              <RelatedSectionSkeleton />
            </div>
          }
        >
          <RelatedSection id={parseInt(id)} className="lg:col-auto" />
        </Suspense>
      </div>
    </div>
  );
};

export default BookDetail;
