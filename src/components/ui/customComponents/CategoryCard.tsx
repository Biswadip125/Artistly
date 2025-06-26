"use client";

import Link from "next/link";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import Image from "next/image";
import { LucideIcon } from "lucide-react";
import { useFilterContext } from "@/context/FilterContext";

type CategoryCardProps = {
  title: string;
  image: string;
  Icon: LucideIcon;
  Category: string;
};

const CategoryCard: React.FC<CategoryCardProps> = ({
  title,
  Category,
  image,
  Icon,
}) => {
  const { updateFilter, setIsClearFilterShown } = useFilterContext();
  return (
    <Link
      href={"/artists"}
      onClick={() => {
        updateFilter("Category", Category);
        setIsClearFilterShown(true);
      }}
    >
      <Card className="w-full px-4 bg-gray-100 shadow-xl hover:shadow-2xl transition-all duration-200 hover:scale-105 ">
        <CardContent className="w-full h-[150px] relative">
          <Image
            src={image}
            alt={`${title} image`}
            fill
            className="object-cover rounded-2xl "
          />
        </CardContent>

        <CardFooter className="p-0 flex gap-2 items-center">
          <h1 className="text-xl text-gray-900 font-semibold">{title}</h1>
          <Icon className="w-5 h-5 text-gray-600 mt-1" />
        </CardFooter>
      </Card>
    </Link>
  );
};

export default CategoryCard;
