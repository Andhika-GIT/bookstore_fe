"use client";

import React, { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { useInfiniteQuery } from "@tanstack/react-query";
import { BookLoadMoreSkeleton } from "../loader";
import { getBooks } from "@/app/actions/book";
import Link from "next/link";
import BookCard from "./BookCard";

const BookLoadMore: React.FC = () => {
  const { ref, inView } = useInView();

  const { data, isFetchingNextPage, fetchNextPage, hasNextPage } = useInfiniteQuery({
    queryKey: ["books-load-more"],
    queryFn: ({ pageParam = 2 }) => getBooks(pageParam),
    initialPageParam: 2,
    getNextPageParam: (lastPage) => lastPage?.nextPage,
    staleTime: 60 * 60 * 1000,
  });

  useEffect(() => {
    if (inView && !isFetchingNextPage && hasNextPage) {
      fetchNextPage();
    }
  }, [inView, isFetchingNextPage, fetchNextPage, hasNextPage]);

  const books = data?.pages?.flatMap((page) => page?.data || []);

  return (
    <>
      <div className="grid grid-cols-2 xl:grid-cols-4 gap-x-8 gap-y-10 auto-rows-max">
        {books?.map((book, index) => (
          <Link href={`/books/${book.id}`} key={index}>
            <BookCard
              imgURL={book.img_url}
              title={book.title}
              rating={book.rating}
              ratingSize={100}
              displayRating={true}
            />
          </Link>
        ))}
      </div>

      {isFetchingNextPage && <BookLoadMoreSkeleton />}
      <div ref={ref} />
    </>
  );
};

export default BookLoadMore;
