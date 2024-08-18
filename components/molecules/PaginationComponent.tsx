import React from "react";
import { Pagination, PaginationContent, PaginationItem, Button } from "../ui";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";

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
  const handlePageChange = (newPage: number) => {
    if (!isPlaceholderData) {
      setPage(newPage);
    }
  };

  return (
    <Pagination>
      <PaginationContent>
        <PaginationItem>
          <Button
            onClick={() => handlePageChange(page - 1)}
            disabled={page === 1 || isPlaceholderData}
            className={cn(
              "flex items-center gap-1 pl-2.5",
              page === 1 || isPlaceholderData
                ? "opacity-50 cursor-not-allowed"
                : "opacity-100 cursor-pointer",
            )}
          >
            <ChevronLeft className="h-4 w-4" />
            <span>Previous</span>
          </Button>
        </PaginationItem>
        {Array.from({ length: totalPage }, (_, index) => (
          <PaginationItem key={index}>
            <Button
              onClick={() => handlePageChange(index + 1)}
              disabled={isPlaceholderData}
              className={cn(
                "flex items-center gap-1",
                page === index + 1 ? "font-bold" : "",
                isPlaceholderData ? "opacity-50 cursor-not-allowed" : "opacity-100 cursor-pointer",
              )}
            >
              {index + 1}
            </Button>
          </PaginationItem>
        ))}
        <PaginationItem>
          <Button
            onClick={() => handlePageChange(page + 1)}
            disabled={page >= totalPage || isPlaceholderData}
            className={cn(
              "flex items-center gap-1 pr-2.5",
              page >= totalPage || isPlaceholderData
                ? "opacity-50 cursor-not-allowed"
                : "opacity-100 cursor-pointer",
            )}
          >
            <span>Next</span>
            <ChevronRight className="h-4 w-4" />
          </Button>
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  );
};

export default PaginationComponent;
