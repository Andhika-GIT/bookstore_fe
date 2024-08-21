"use client";

import React, { useState } from "react";
import { filterDropdown, frameworkDropdown } from "@/lib/mock/dropdowns";
import { SingleSelect, MultiSelect } from "@/components/molecules";
import { Input, Button, Text } from "@/components/ui";
import { CiSearch } from "react-icons/ci";
import { useRouter } from "next/navigation";
import { useQuery } from "@tanstack/react-query";
import { getAllGenre } from "@/app/actions/genre";
import { ApiError, GetGenreResponse } from "@/types";

const SearchFilterSection = () => {
  // fetch genre
  const {
    data: genreDropdown,
    isLoading,
    isError,
  } = useQuery<GetGenreResponse[] | undefined, ApiError>({
    queryKey: ["genre"],
    queryFn: getAllGenre,
  });

  const [filterBy, setFilterBy] = useState<string>();
  const [genre, setGenre] = useState<string[]>([]);
  const [search, setSearch] = useState("");
  const router = useRouter();

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
        <SingleSelect items={filterDropdown} onChange={setFilterBy} placeholder="Filter By" />
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
