import React from "react";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "../ui";
import { keepPreviousData, useQuery } from "@tanstack/react-query";

type PaginationComponentProps = {
  page: number;
  setPage: React.Dispatch<React.SetStateAction<number>>;
  totalPage: number;
  isFetching: boolean;
  isPlaceholderData: boolean;
  hasMore: boolean;
};

const PaginationComponent: React.FC<PaginationComponentProps> = ({
  page,
  setPage,
  totalPage,
  isFetching,
  isPlaceholderData,
  hasMore,
}) => {
  return (
    <Pagination>
      <PaginationContent>
        <PaginationItem>
          <PaginationPrevious
            href="#"
            onClick={() => setPage((prev) => Math.max(prev - 1, 1))}
            isActive={false}
            className={isPlaceholderData ? "opacity-50 cursor-not-allowed" : ""}
          />
        </PaginationItem>
        {Array.from({ length: totalPage }, (_, index) => (
          <PaginationItem key={index}>
            <PaginationLink
              href={`?page=${index + 1}`}
              isActive={page === index + 1}
              onClick={() => setPage(index + 1)}
              className={isPlaceholderData ? "opacity-50 cursor-not-allowed" : ""}
            >
              {index + 1}
            </PaginationLink>
          </PaginationItem>
        ))}
        <PaginationItem>
          {!isFetching && hasMore ? (
            <PaginationNext
              href="#"
              onClick={() => setPage((prev) => prev + 1)}
              isActive={true}
              className={isPlaceholderData ? "opacity-50 cursor-not-allowed" : ""}
            />
          ) : (
            <PaginationNext
              href="#"
              onClick={(e) => e.preventDefault()}
              isActive={false}
              className={isPlaceholderData ? "opacity-50 cursor-not-allowed" : ""}
            />
          )}
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  );
};

export default PaginationComponent;
