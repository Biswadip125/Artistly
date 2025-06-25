"use client";

import { createContext, ReactNode, useContext, useState } from "react";

type FilterState = {
  Category: string;
  Location: string;
  "Price Range": string;
  SearchTerm: string;
};

type FilterContextType = {
  filters: FilterState;
  updateFilter: (type: keyof FilterState, value: string) => void;
  clearFilter: () => void;
  isClearFilterShown: boolean;
  setIsClearFilterShown: React.Dispatch<React.SetStateAction<boolean>>;
};

const defaultState: FilterState = {
  Category: "",
  Location: "",
  "Price Range": "",
  SearchTerm: "",
};

const FilterContext = createContext<FilterContextType | undefined>(undefined);

export const useFilterContext = () => {
  const context = useContext(FilterContext);
  if (!context) {
    throw new Error("UseFilterContext must be used within FilterProvider");
  }
  return context;
};

export const FilterProvider = ({ children }: { children: ReactNode }) => {
  const [filters, setFilters] = useState<FilterState>(defaultState);
  const [isClearFilterShown, setIsClearFilterShown] = useState<boolean>(false);
  const updateFilter = (type: keyof FilterState, value: string) => {
    setFilters((prev) => ({
      ...prev,
      [type]: value,
    }));
  };

  const clearFilter = () => {
    setFilters({
      Category: "",
      Location: "",
      "Price Range": "",
      SearchTerm: "",
    });
  };

  return (
    <FilterContext.Provider
      value={{
        filters,
        updateFilter,
        clearFilter,
        isClearFilterShown,
        setIsClearFilterShown,
      }}
    >
      {children}
    </FilterContext.Provider>
  );
};
