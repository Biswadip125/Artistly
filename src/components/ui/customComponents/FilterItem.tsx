import React from "react";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "../select";
import { FilterKey } from "./Filterblock";
import { useFilterContext } from "@/context/FilterContext";

type FilterTypeProps = {
  filterType: string;
  filterTypeOptions: string[];
  selecetedValue: string;
  onChange: (type: FilterKey, value: string) => void;
};

const FilterItem: React.FC<FilterTypeProps> = ({
  filterType,
  filterTypeOptions,
  selecetedValue,
  onChange,
}) => {
  const { setIsClearFilterShown } = useFilterContext();
  return (
    <Select
      value={selecetedValue}
      onValueChange={(value) => {
        onChange(filterType as FilterKey, value);
        setIsClearFilterShown(true);
      }}
    >
      <SelectTrigger className="w-[180px]">
        <SelectValue placeholder={`Select a ${filterType}`} />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectLabel>{filterType}</SelectLabel>
          {filterTypeOptions.map((filterTypeOption) => (
            <SelectItem value={filterTypeOption} key={filterTypeOption}>
              {filterTypeOption}
            </SelectItem>
          ))}
        </SelectGroup>
      </SelectContent>
    </Select>
  );
};

export default FilterItem;
