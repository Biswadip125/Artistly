"use cliet";
import { Controller, Control } from "react-hook-form";
import MultiSelectCheckbox from "./MultiSelectCheckbox";
import { ArtistFormData } from "./ArtistOnboardingForm";

type LanguageMultiSelectProps = {
  control: Control<ArtistFormData>;
  name: keyof ArtistFormData;
  rules: any;
};

const LanguageMultiSelect = ({
  control,
  name,
  rules,
}: LanguageMultiSelectProps) => {
  const languages = ["English", "Hindi", "Bengali", "Marathi"];

  return (
    <Controller<ArtistFormData>
      name={name}
      control={control}
      rules={rules}
      render={({ field }) => (
        <MultiSelectCheckbox
          multiSelectedCheckboxItems={languages}
          selectedMultiSelectedCheckboxItems={
            Array.isArray(field.value) ? field.value : []
          }
          updateMultiSelectedCheckboxItems={(language: string) => {
            const isSelected = field.value?.includes(language);
            const updated = isSelected
              ? (Array.isArray(field.value) ? field.value : []).filter(
                  (item: string) => item !== language
                )
              : [...(Array.isArray(field.value) ? field.value : []), language];
            field.onChange(updated);
          }}
          type={"Language"}
        />
      )}
    />
  );
};

export default LanguageMultiSelect;
