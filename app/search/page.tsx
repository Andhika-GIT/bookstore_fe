import { NextPage } from "next";
import { SearchFilterSection, BookSearchListSection } from "@/containers";
import { Suspense } from "react";

type SearchProps = {
  searchParams: {
    query: string | undefined | null;
    filter: string | undefined | null;
    genre: string | undefined | null;
  };
};

const Search: NextPage<SearchProps> = ({ searchParams: { query, filter, genre } }) => {
  return (
    <div className="min-h-screen space-y-28">
      <SearchFilterSection />
      <Suspense fallback={<p>Loading...</p>}>
        <BookSearchListSection query={query} filter={filter} genre={genre} />
      </Suspense>
    </div>
  );
};

export default Search;
