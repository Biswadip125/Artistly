"use client";

import { ArtistFormData } from "./ArtistOnboardingForm";
import MultiSelectCheckbox from "./MultiSelectCheckbox";
import { Control, Controller } from "react-hook-form";

const categories = ["Singer", "Dancer", "DJ", "Speaker"];
type CategoryMultiSelectProps = {
  control: Control<ArtistFormData>;
  name: keyof ArtistFormData;
  rules?: any;
};

const CategoryMultiSelect = ({
  control,
  name,
  rules,
}: CategoryMultiSelectProps) => {
  return (
    <Controller<ArtistFormData>
      name={name}
      control={control}
      rules={rules}
      render={({ field }) => (
        <MultiSelectCheckbox
          multiSelectedCheckboxItems={categories}
          selectedMultiSelectedCheckboxItems={
            Array.isArray(field.value) ? field.value : []
          }
          updateMultiSelectedCheckboxItems={(category: string) => {
            const isSelected = field.value?.includes(category);
            const updated = isSelected
              ? (Array.isArray(field.value) ? field.value : []).filter(
                  (item: string) => item !== category
                )
              : [...(Array.isArray(field.value) ? field.value : []), category];
            field.onChange(updated);
          }}
          type={"Category"}
        />
      )}
    />
  );
};

export default CategoryMultiSelect;
