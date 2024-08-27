import { NextPage } from "next";
import { SearchFilterSection, BookSearchListSection } from "@/containers";
import { Suspense } from "react";
import { BookFirstLoadSkeleton, BookLoadMoreSkeleton } from "@/components/loader";

type SearchProps = {
  searchParams: {
    query: string | undefined | null;
    filter: string | undefined | null;
    genre: string | undefined | null;
  };
};

const Search: NextPage<SearchProps> = ({ searchParams: { query, filter, genre } }) => {
  return (
    <div className="min-h-screen space-y-14">
      <SearchFilterSection defaultFilter={filter} defaultGenre={genre} defaultQuery={query} />
      <Suspense key={`key-${query}-${filter}-${genre}`} fallback={<BookFirstLoadSkeleton />}>
        <BookSearchListSection query={query} filter={filter} genre={genre} />
      </Suspense>
    </div>
  );
};

export default Search;
