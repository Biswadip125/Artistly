"use client";

import React from "react";
import CategoryCard from "./CategoryCard";
import { Disc3, Megaphone, MicVocal, Move } from "lucide-react";

const CategoryCards = () => {
  const categories = [
    {
      title: "Singers",
      image: "/singer.jpg",
      Icon: MicVocal,
      Category: "Singer",
    },
    { title: "Dancers", image: "/dancer.jpg", Icon: Move, Category: "Dancer" },
    { title: "DJs", image: "/dj.jpg", Icon: Disc3, Category: "DJ" },
    {
      title: "Speakers",
      image: "/speaker.jpeg",
      Icon: Megaphone,
      Category: "Speaker",
    },
  ];

  return (
    <div className="mt-4">
      <h1 className="text-2xl font-bold ">Categories</h1>
      <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 py-8 gap-10">
        {categories.map((item, id) => (
          <CategoryCard
            key={id}
            title={item.title}
            image={item.image}
            Icon={item.Icon}
            Category={item.Category}
          />
        ))}
      </div>
    </div>
  );
};

export default CategoryCards;
