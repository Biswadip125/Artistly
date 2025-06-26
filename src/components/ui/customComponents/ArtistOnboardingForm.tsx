"use client";

import { Input } from "../input";
import { Label } from "../label";
import { Textarea } from "../textarea";
import CategoryMultiSelect from "./CategoryMultiSelect";
import FeeRangeDropdown from "./FeeRangeDropdown";
import { useForm } from "react-hook-form";
import LanguageMultiSelect from "./LanguageMultiSelect";
import { Button } from "../button";
import toast from "react-hot-toast";

export type ArtistFormData = {
  name: string;
  bio: string;
  category: string[];
  languages: string[];
  feeRange: string;
  location: string;
};

const ArtistOnboardingForm = () => {
  const {
    register,
    handleSubmit,
    control,
    reset,
    formState: { errors },
  } = useForm<ArtistFormData>({
    defaultValues: {
      name: "",
      bio: "",
      category: [],
      languages: [],
      feeRange: "",
      location: "",
    },
  });

  console.log(errors);

  const onSubmit = (data: ArtistFormData) => {
    console.log("Submitted:", data);
    toast.success("Form Data Logged Successfully");
    reset();
  };

  return (
    <div className="w-full">
      <h1 className="text-2xl font-semibold ext-gray-800">
        Artist Onboarding Form
      </h1>
      <form
        className="mt-4 grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3"
        onSubmit={handleSubmit(onSubmit)}
      >
        {/*Name */}
        <div className="flex flex-col gap-2">
          <Label className="text-lg">Name</Label>

          <Input
            type="text"
            placeholder="Enter the name of the artist"
            {...register("name", { required: "Name is required" })}
          />
          {errors.name && <p className="text-red-600">{errors.name.message}</p>}
        </div>

        {/*Bio */}
        <div className="flex flex-col gap-2">
          <Label className="text-lg">Bio (Description)</Label>
          <Textarea
            placeholder="Enter the Bio"
            className=""
            {...register("bio", { required: "Bio is required" })}
          />
          {errors.bio && <p className="text-red-600">{errors.bio.message}</p>}
        </div>

        {/*Category */}
        <div className="flex flex-col gap-2">
          <Label className="text-lg">Category</Label>
          <CategoryMultiSelect
            control={control}
            name={"category"}
            rules={{ required: "Category is required" }}
          />
          {errors.category && (
            <p className="text-red-600">{errors.category.message}</p>
          )}
        </div>

        {/*Language */}
        <div className="flex flex-col gap-2">
          <Label className="text-lg">Languages</Label>
          <LanguageMultiSelect
            control={control}
            name={"languages"}
            rules={{ required: "Languages are required" }}
          />
          {errors.languages && (
            <p className="text-red-600">{errors.languages.message}</p>
          )}
        </div>

        {/*Fee Range */}
        <div className="flex flex-col gap-2">
          <Label className="text-lg">Fee Range </Label>
          <FeeRangeDropdown
            control={control}
            name={"feeRange"}
            rules={{ required: "Fee Range is required" }}
          />
          {errors.feeRange && (
            <p className="text-red-600">{errors.feeRange.message}</p>
          )}
        </div>

        {/*Location */}
        <div className="flex flex-col gap-2">
          <Label className="text-lg">Location</Label>
          <Input
            type="text"
            {...register("location", { required: "Location is required" })}
          />
          {errors.location && (
            <p className="text-red-600">{errors.location.message}</p>
          )}
        </div>
        <div className="md:col-span-3 md:text-center col-span-1">
          <Button type="submit" className="md:mt-10 mt-4 w-1/3">
            Submit
          </Button>
        </div>
      </form>
    </div>
  );
};

export default ArtistOnboardingForm;
