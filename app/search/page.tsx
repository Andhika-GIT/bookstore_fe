import { NextPage } from "next";
import { SearchFilterSection } from "@/containers";

type SearchProps = {
  searchParams: {
    query: string | undefined | null;
    filter: string | undefined | null;
    genre: string | undefined | null;
  };
};

const Search: NextPage<SearchProps> = ({ searchParams: { query, filter, genre } }) => {
  console.log(query);
  console.log(filter);
  console.log(genre);
  return (
    <div className="min-h-screen">
      <SearchFilterSection />
    </div>
  );
};

export default Search;
