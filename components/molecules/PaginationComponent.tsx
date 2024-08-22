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

  const renderPaginationItems = () => {
    const pages = [];
    const maxVisiblePages = 3;

    if (page <= 3) {
      // Tampilkan halaman 1 sampai 3
      for (let i = 1; i <= Math.min(maxVisiblePages, totalPage); i++) {
        pages.push(i);
      }
      if (totalPage > 3) {
        pages.push("...");
      }
    } else if (page > 3 && page < totalPage - 2) {
      // Tampilkan halaman sekitar current page
      pages.push("...");
      pages.push(page - 1, page, page + 1);
      pages.push("...");
    } else {
      // Tampilkan halaman terakhir dan sebelumnya
      pages.push("...");
      for (let i = totalPage - 2; i <= totalPage; i++) {
        pages.push(i);
      }
    }

    return pages;
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
        {renderPaginationItems().map((item, index) => (
          <PaginationItem key={index}>
            {typeof item === "number" ? (
              <Button
                onClick={() => handlePageChange(item)}
                disabled={isPlaceholderData}
                className={cn(
                  "flex items-center gap-1 hover:bg-primary_blue-dark",
                  page === item ? "font-bold bg-primary_blue" : "",
                  isPlaceholderData
                    ? "opacity-50 cursor-not-allowed"
                    : "opacity-100 cursor-pointer",
                )}
              >
                {item}
              </Button>
            ) : (
              <span className="flex items-center px-2">...</span>
            )}
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
