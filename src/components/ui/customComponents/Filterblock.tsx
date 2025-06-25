"use client";

import { Search } from "lucide-react";
import { Input } from "../input";
import { Button } from "../button";
import FilterItem from "./FilterItem";
import { useFilterContext } from "@/context/FilterContext";

export type FilterKey = "Category" | "Location" | "Price Range";

const Filterblock = () => {
  const {
    filters,
    updateFilter,
    clearFilter,
    isClearFilterShown,
    setIsClearFilterShown,
  } = useFilterContext();

  const filterItems = [
    {
      filterType: "Category",
      filterTypeOptions: ["Singer", "Dancer", "DJ", "Speaker"],
    },
    {
      filterType: "Location",
      filterTypeOptions: ["Chennai", "Mumbai", "Delhi", "Kolkata"],
    },
    {
      filterType: "Price Range",
      filterTypeOptions: ["0 - 10,000", "10,000 - 20,000", "20,000 - 30,000"],
    },
  ];

  return (
    <div className="flex flex-col gap-2">
      <div className="w-full py-2 flex  flex-col lg:flex-row lg:items-center gap-10 md:gap-6">
        <div className="">
          <h1 className="text-2xl font-bold text-gray-900">
            Filter Artists by{" "}
          </h1>
        </div>

        {/*filter items */}
        <div className="flex items-center gap-4">
          {filterItems.map(({ filterType, filterTypeOptions }) => (
            <FilterItem
              key={filterType}
              filterType={filterType}
              filterTypeOptions={filterTypeOptions}
              selecetedValue={filters[filterType as FilterKey]}
              onChange={updateFilter}
            />
          ))}
        </div>

        {/*Search box */}
        <div className="flex-1 flex items-center gap-2">
          <Input
            className="focus:border-2 focus:border-black rounded-full text-gray-900"
            placeholder="Search item"
            value={filters.SearchTerm}
            onChange={(e) => {
              updateFilter("SearchTerm", e.target.value);
            }}
          />
          <Button className="rounded-full p-2 w-10 h-10 bg-black text-white cursor-pointer flex items-center justify-center">
            <Search size={20} />
          </Button>
        </div>
      </div>

      {/*Clear Filter Button */}
      {isClearFilterShown && (
        <div className="w-full text-right">
          <button
            className="px-3 py-1 bg-gray-300 rounded-full text-gray-800 cursor-pointer"
            onClick={() => {
              clearFilter();
              setIsClearFilterShown(false);
            }}
          >
            Clear All
          </button>
        </div>
      )}
    </div>
  );
};

export default Filterblock;
