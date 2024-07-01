import React from "react";
import { useRouter } from "next/navigation";
import { books, reviews } from "@/lib/mock";
import { Book } from "@/types";
import { BookInfoSection, RelatedSection, ReviewSection } from "@/containers";

const BookDetail = ({ params }: { params: { id: string } }) => {
  const { id } = params;
  const selectedBook = books.find((item) => item.id === id);

  if (!selectedBook) {
    return <div>not found</div>;
  }
  return (
    <div className="grid grid-cols-3 gap-x-14 gap-y-10">
      <BookInfoSection {...selectedBook} className="col-span-3 lg:col-span-2" />
      <RelatedSection books={books} className="col-span-3 lg:col-auto" />
      <ReviewSection
        reviews={reviews}
        bookRating={selectedBook?.rating}
        className="col-span-full w-full"
      />
    </div>
  );
};

export default BookDetail;
