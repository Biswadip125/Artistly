import { Control, Controller } from "react-hook-form";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../select";
import { ArtistFormData } from "./ArtistOnboardingForm";

import { RegisterOptions } from "react-hook-form";

type FeeRangeDropdownProps = {
  control: Control<ArtistFormData>;
  name: keyof ArtistFormData;
  rules?: RegisterOptions<ArtistFormData, keyof ArtistFormData>;
};

const FeeRangeDropdown = ({ control, name, rules }: FeeRangeDropdownProps) => {
  const feeRanges = ["0 - 10,000", "10,000 - 20,000", "20,000 - 30,000"];
  return (
    <Controller
      control={control}
      name={name}
      rules={rules}
      render={({ field }) => (
        <Select
          value={
            Array.isArray(field.value)
              ? field.value[0] ?? ""
              : field.value ?? ""
          }
          onValueChange={field.onChange}
        >
          <SelectTrigger className="w-[350px]">
            <SelectValue placeholder="Select a Price Range" />
          </SelectTrigger>
          <SelectContent>
            {feeRanges.map((item) => (
              <SelectItem value={item} key={item}>
                {item}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      )}
    />
  );
};

export default FeeRangeDropdown;
