import React from "react";
import { useRouter } from "next/navigation";
import { books } from "@/lib/mock";
import { Book } from "@/types";
import { BookInfoSection, RelatedSection } from "@/containers";

const BookDetail = ({ params }: { params: { id: string } }) => {
  const { id } = params;
  const selectedBook = books.find((item) => item.id === id);

  if (!selectedBook) {
    return <div>not found</div>;
  }
  return (
    <div className="grid grid-cols-3 gap-x-14 auto-rows-fr">
      <BookInfoSection {...selectedBook} className="col-span-2" />
      <RelatedSection books={books} />
    </div>
  );
};

export default BookDetail;
