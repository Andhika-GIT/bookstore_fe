"use client";

import React, { useState, useEffect } from "react";
import { filterDropdown, frameworkDropdown } from "@/lib/mock/dropdowns";
import { SingleSelect, MultiSelect } from "@/components/molecules";
import { Input, Button, Text } from "@/components/ui";
import { CiSearch } from "react-icons/ci";
import { useRouter } from "next/navigation";
import { useQuery } from "@tanstack/react-query";
import { getAllGenre } from "@/app/actions/genre";
import { ApiError, GetGenreResponse } from "@/types";

type SearchFilterSectionProps = {
  defaultQuery?: string | undefined | null;
  defaultFilter?: string | undefined | null;
  defaultGenre?: string | undefined | null;
};

const SearchFilterSection: React.FC<SearchFilterSectionProps> = ({
  defaultQuery,
  defaultFilter,
  defaultGenre,
}) => {
  // fetch genre
  const {
    data: genreDropdown,
    isLoading,
    isError,
  } = useQuery<GetGenreResponse[] | undefined, ApiError>({
    queryKey: ["genre"],
    queryFn: getAllGenre,
  });
  const [filterBy, setFilterBy] = useState<string | undefined>(defaultFilter || undefined);
  const [genre, setGenre] = useState<string[]>(defaultGenre ? defaultGenre.split(",") : []);
  const [search, setSearch] = useState(defaultQuery || "");
  const router = useRouter();

  useEffect(() => {
    // Set state based on defaults when they change (if needed)
    setFilterBy(defaultFilter || undefined);
    setGenre(defaultGenre ? defaultGenre.split(",") : []);
    setSearch(defaultQuery || "");
  }, [defaultQuery, defaultFilter, defaultGenre]);

  const handleSearch = () => {
    const queryParams = new URLSearchParams();

    if (filterBy) {
      queryParams.append("filter", filterBy);
    }

    if (genre.length > 0) {
      queryParams.append("genre", genre.join(","));
    }

    if (search) {
      queryParams.append("query", search);
    }
    router.push(`/search?${queryParams.toString()}`);
  };

  return (
    <div className="flex flex-col gap-y-2">
      <div className="flex flex-col md:flex-row gap-y-1 md:gap-x-1 w-full justify-stretch items-center">
        <SingleSelect
          value={filterBy}
          items={filterDropdown}
          onChange={setFilterBy}
          placeholder="Filter By"
        />
        <MultiSelect
          options={
            genreDropdown?.map((genre) => ({
              ...genre,
              value: genre?.value?.toString(),
            })) || []
          }
          onValueChange={setGenre}
          placeholder="Select Genre"
          defaultValue={genre}
          className="bg-white"
          disabled={isError || isLoading}
        />
      </div>
      <div className="flex gap-x-1 w-full justify-stretch">
        <Input
          value={search}
          onChange={(e) => setSearch(e?.target?.value)}
          placeholder="Search..."
          baseClassname="flex-grow basis-3/4"
        />
        <Button className="flex-shrink basis-1/4 flex gap-x-2" onClick={handleSearch}>
          <CiSearch />
          <Text type="span">Search</Text>
        </Button>
      </div>
    </div>
  );
};

export default SearchFilterSection;
