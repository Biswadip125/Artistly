"use client";

import { Button } from "../button";
import { Popover, PopoverContent, PopoverTrigger } from "../popover";
import { Checkbox } from "../checkbox";

type MultiSelectedCheckboxProps = {
  multiSelectedCheckboxItems: string[];
  selectedMultiSelectedCheckboxItems: string[];
  updateMultiSelectedCheckboxItems: (item: string) => void;
  type: string;
};
const MultiSelectCheckbox: React.FC<MultiSelectedCheckboxProps> = ({
  multiSelectedCheckboxItems,
  selectedMultiSelectedCheckboxItems,
  updateMultiSelectedCheckboxItems,
  type,
}) => {
  return (
    <div>
      <Popover>
        <PopoverTrigger asChild>
          <Button
            variant="outline"
            className="w-[350px] justify-start text-left"
          >
            {selectedMultiSelectedCheckboxItems.length > 0
              ? selectedMultiSelectedCheckboxItems.join(", ")
              : `Select ${type}`}
          </Button>
        </PopoverTrigger>

        <PopoverContent className="w-[350px]">
          <div className="flex flex-col gap-2">
            {multiSelectedCheckboxItems.map((category) => (
              <label
                key={category}
                className="flex items-center gap-2 cursor-pointer"
              >
                <Checkbox
                  checked={selectedMultiSelectedCheckboxItems.includes(
                    category
                  )}
                  onCheckedChange={() =>
                    updateMultiSelectedCheckboxItems(category)
                  }
                />
                <span className="text-sm">{category}</span>
              </label>
            ))}
          </div>
        </PopoverContent>
      </Popover>
    </div>
  );
};

export default MultiSelectCheckbox;
